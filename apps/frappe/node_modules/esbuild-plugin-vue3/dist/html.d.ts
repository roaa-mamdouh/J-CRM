import { BuildResult } from "esbuild";
export declare type IndexOptions = {
    /**
     * Path to the original HTML file that will be modified.
     */
    sourceFile: string;
    /**
     * Path where the modified HTML file will be written to. By default this is an index.html file in the outdir or next to the outfile.
     */
    outFile?: string;
    /**
     * Prefix to prepend to all paths.
     */
    pathPrefix?: string;
    /**
     * String or regex to remove from all paths, for example to remove a base dir: /^dist\//
     *
     * By default this is inferred from the build options' outfile or outdir.
     */
    trimPath?: string | RegExp;
    /**
     * Add <link rel="preload"> elements to the head.
     */
    preload?: {
        href: string;
        as: string;
        /**
         * Set link rel to prefetch instead of preload.
         */
        prefetch?: boolean;
    }[];
    /**
     * When minifying, these options will be passed to html-minifier.
     */
    minifyOptions?: import("html-minifier").Options;
};
export declare function generateIndexHTML(result: BuildResult, opts: IndexOptions, min: boolean): Promise<void>;
