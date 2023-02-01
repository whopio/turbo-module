import { exec as _exec, ExecOptions } from "child_process";
import { promisify } from "util";

const exec = promisify(_exec);

type BashVars =
  | string
  | number
  | undefined
  | null
  | Exclude<object, (...args: unknown[]) => unknown>
  | ((result: { stdout: string; stderr: string }[]) => unknown);

type ResultType = Array<{ stdout: string; stderr: string }>;

export function command(
  [...strings]: TemplateStringsArray,
  ...vars: BashVars[]
) {
  return async (result: { stdout: string; stderr: string }[]) => {
    const command = await getCommand(strings, vars, result);

    const cleaned = command
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean)
      .join(" ");
    return cleaned;
  };
}

function consume([...strings]: TemplateStringsArray, ...vars: BashVars[]) {
  const combined = strings.map((string, idx) => {
    return {
      string,
      var: vars[idx],
    };
  });
  let current: (typeof combined)[number] | undefined = combined.shift();
  const getNext = ():
    | {
        strings: string[];
        vars: BashVars[];
      }
    | undefined => {
    const result: {
      strings: string[];
      vars: BashVars[];
    } = {
      strings: [],
      vars: [],
    };
    while (combined.length || current) {
      if (!current) break;
      const split = current.string.split("\n");
      if (split.length === 1) {
        result.strings.push(split[0]);
        result.vars.push(current.var);
        current = combined.shift();
      } else {
        result.strings.push(split[0]);
        current.string = split.slice(1).join("\n");
        break;
      }
    }
    if (result.strings.length) {
      result.strings[0] = result.strings[0].trimStart();
      result.strings[result.strings.length - 1] =
        result.strings[result.strings.length - 1].trimEnd();
      result.vars = result.vars.slice(0, result.strings.length - 1);
    }
    if (
      !result.strings.length ||
      (result.strings[0] === "" && !result.vars.length)
    ) {
      if (current) return getNext();
      return;
    }
    return result;
  };
  return getNext;
}

function* generator<T>(getNext: () => T | undefined) {
  let current = getNext();
  while (current) {
    yield current;
    current = getNext();
  }
}

const getCommand = async (
  strings: string[],
  vars: BashVars[],
  results: ResultType
) => {
  const parts: string[] = [strings.shift()!];

  for (const idx in strings) {
    const variable = vars[idx];
    parts.push(
      `${typeof variable === "function" ? await variable(results) : variable}`
    );
    parts.push(strings[idx]);
  }
  return parts.join("");
};

export const bash = async (
  strings: TemplateStringsArray,
  ...vars: BashVars[]
): Promise<
  (
    | {
        stdout: string;
        stderr: string;
      }
    | undefined
  )[]
> => {
  const lines = generator(consume(strings, ...vars));
  const results: Array<{ stdout: string; stderr: string }> = [];
  for (const { strings, vars } of lines) {
    const command = await getCommand(strings, vars, results);
    if (command !== "") results.push(await exec(command));
  }
  return results;
};

bash.options =
  (options: ExecOptions) =>
  async (
    strings: TemplateStringsArray,
    ...vars: BashVars[]
  ): Promise<
    (
      | {
          stdout: string;
          stderr: string;
        }
      | undefined
    )[]
  > => {
    const lines = generator(consume(strings, ...vars));
    const results: Array<{ stdout: string; stderr: string }> = [];
    for (const { strings, vars } of lines) {
      const command = await getCommand(strings, vars, results);
      if (command !== "") results.push(await exec(command, options));
    }
    return results;
  };
