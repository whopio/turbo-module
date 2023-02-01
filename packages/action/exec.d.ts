type BashVars = string | number | undefined | null | Exclude<object, (...args: unknown[]) => unknown> | ((result: {
    stdout: string;
    stderr: string;
}[]) => unknown);
export declare function command([...strings]: TemplateStringsArray, ...vars: BashVars[]): (result: {
    stdout: string;
    stderr: string;
}[]) => Promise<string>;
export declare const bash: (strings: TemplateStringsArray, ...vars: BashVars[]) => Promise<({
    stdout: string;
    stderr: string;
} | undefined)[]>;
export {};
