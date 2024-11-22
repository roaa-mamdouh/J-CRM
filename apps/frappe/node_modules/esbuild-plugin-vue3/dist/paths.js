"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceRules = exports.loadRules = void 0;
var utils_1 = require("./utils");
var fs = __importStar(require("fs"));
var typescript_1 = require("typescript");
var rules = [];
/**
 * @returns true if there are any rules to apply, false otherwise.
 */
function loadRules(opts, tsconfigPath) {
    return __awaiter(this, void 0, void 0, function () {
        var path, from, to;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (opts.pathAliases === false) {
                        return [2 /*return*/, false];
                    }
                    if (!opts.pathAliases) return [3 /*break*/, 1];
                    for (path in opts.pathAliases) {
                        from = "^" + replaceWildcard(path, "(.*)") + "$";
                        to = replaceWildcard(opts.pathAliases[path], "$1");
                        rules.push({
                            regex: new RegExp(from),
                            replacement: to
                        });
                    }
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, loadFromTsconfig(tsconfigPath)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, rules.length > 0];
            }
        });
    });
}
exports.loadRules = loadRules;
function loadFromTsconfig(path) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, tsconfig, error, _c, _d, path_1, dests, from, to;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, (0, utils_1.fileExists)(path)];
                case 1:
                    if (!(_e.sent())) {
                        return [2 /*return*/];
                    }
                    _c = typescript_1.parseConfigFileTextToJson;
                    _d = [path];
                    return [4 /*yield*/, fs.promises.readFile(path)];
                case 2:
                    _b = _c.apply(void 0, _d.concat([(_e.sent()).toString()])), tsconfig = _b.config, error = _b.error;
                    if (error) {
                        throw new Error("Failed to parse tsconfig.json: ".concat(JSON.stringify(error)));
                    }
                    if (!((_a = tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths)) {
                        return [2 /*return*/];
                    }
                    for (path_1 in tsconfig.compilerOptions.paths) {
                        dests = tsconfig.compilerOptions.paths[path_1];
                        if (dests.length == 0) {
                            continue;
                        }
                        from = "^" + replaceWildcard(path_1, "(.*)") + "$";
                        to = replaceWildcard(dests[0], "$1");
                        rules.push({
                            regex: new RegExp(from),
                            replacement: to
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function replaceWildcard(str, repl) {
    return str.replace(/\*/g, repl);
}
function replaceRules(path) {
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var rule = rules_1[_i];
        path = path.replace(rule.regex, rule.replacement);
    }
    return path;
}
exports.replaceRules = replaceRules;
//# sourceMappingURL=paths.js.map