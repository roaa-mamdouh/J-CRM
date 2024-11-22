import * as esbuild from "esbuild";
import { Options } from "./options";
declare const vuePlugin: (opts?: Options) => esbuild.Plugin;
export = vuePlugin;
