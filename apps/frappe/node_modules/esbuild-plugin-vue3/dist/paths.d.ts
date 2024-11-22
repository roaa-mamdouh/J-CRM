import { Options } from "./options";
/**
 * @returns true if there are any rules to apply, false otherwise.
 */
export declare function loadRules(opts: Options, tsconfigPath: string): Promise<boolean>;
export declare function replaceRules(path: string): string;
