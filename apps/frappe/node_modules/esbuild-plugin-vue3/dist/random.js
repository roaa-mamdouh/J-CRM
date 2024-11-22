"use strict";
// https://github.com/mafintosh/random-bytes-seed/blob/6eb86c4746907d4430ac46d64fe5f17ef10502ba/index.js
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var randomBytesClassic = crypto_1.randomBytes;
function default_1(seed) {
    if (seed === void 0) { seed = randomBytesClassic(32); }
    randomBytes.seed = seed;
    randomBytes.currentSeed = seed;
    return randomBytes;
    function randomBytes(n) {
        var result = Buffer.allocUnsafe(n);
        var used = 0;
        while (used < result.length) {
            randomBytes.currentSeed = seed = next(seed);
            seed.copy(result, used);
            used += seed.length;
        }
        return result;
    }
}
exports.default = default_1;
function next(seed) {
    return (0, crypto_1.createHash)('sha256').update(seed).digest();
}
//# sourceMappingURL=random.js.map