export type ImportedHandler = () => Promise<{
  default: () => unknown;
}>;

export type CliLayout = {
  [key: string]: ImportedHandler | CliLayout;
};

export const cli = (layout: CliLayout) => {
  return async () => {
    const [, , ...args] = process.argv;
    let current = layout;
    for (const arg of args) {
      const next = current[arg];
      if (typeof next === "function") {
        const { default: handler } = await next();
        return handler();
      } else if (next) {
        current = next;
      } else throw new Error("Unknown command");
    }
  };
};

export const subCommand = (layout: CliLayout) => layout;
