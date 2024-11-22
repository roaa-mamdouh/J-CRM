/// <reference types="node" />
export default function (seed?: string | Buffer): {
    (n: number): Buffer;
    seed: string | Buffer;
    currentSeed: string | Buffer;
};
