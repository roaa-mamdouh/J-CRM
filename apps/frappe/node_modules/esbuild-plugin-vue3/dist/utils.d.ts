/// <reference types="node" />
import * as fs from 'fs';
import { OnResolveArgs } from "esbuild";
export declare function getUrlParams(search: string): Record<string, string>;
export declare function fileExists(path: fs.PathLike): Promise<boolean>;
export declare function getFullPath(args: OnResolveArgs): string;
export declare function tryAsync<T>(fn: () => Promise<T>, module: string, requiredFor: string): Promise<T>;
export declare class AsyncCache<TKey = any> {
    enabled: boolean;
    private store;
    constructor(enabled?: boolean);
    get<T>(key: TKey, fn: () => Promise<T>): Promise<T>;
}
