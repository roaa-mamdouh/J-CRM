"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.generateIndexHTML = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var utils_1 = require("./utils");
function generateIndexHTML(result, opts, min) {
    return __awaiter(this, void 0, void 0, function () {
        var cheerio, $, _a, _b, _i, _c, item, link, name_1, ext, script, link, html, minify;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!result.metafile) {
                        throw new Error("The \"metafile\" option must be set to true in the build options");
                    }
                    if (!opts.outFile) {
                        throw new Error("No outFile was specified and it could not be inferred from the build options");
                    }
                    return [4 /*yield*/, (0, utils_1.tryAsync)(function () { return Promise.resolve().then(function () { return __importStar(require("cheerio")); }); }, "cheerio", "HTML generation")];
                case 1:
                    cheerio = _d.sent();
                    _b = (_a = cheerio).load;
                    return [4 /*yield*/, fs.promises.readFile(opts.sourceFile)];
                case 2:
                    $ = _b.apply(_a, [_d.sent()]);
                    if (opts.preload) {
                        for (_i = 0, _c = opts.preload; _i < _c.length; _i++) {
                            item = _c[_i];
                            link = $("<link>");
                            link.attr("rel", item.prefetch ? "prefetch" : "preload");
                            link.attr("href", item.href);
                            link.attr("as", item.as);
                            $("head").append(link);
                        }
                    }
                    for (name_1 in result.metafile.outputs) {
                        if (opts.trimPath) {
                            name_1 = name_1.replace(opts.trimPath, "");
                        }
                        if (opts.pathPrefix && !name_1.startsWith(opts.pathPrefix)) {
                            name_1 = opts.pathPrefix + name_1;
                        }
                        name_1 = path.normalize(name_1).replace(/\\/g, "/");
                        ext = path.extname(name_1);
                        if (ext === ".js") {
                            script = $("<script>");
                            script.attr("src", name_1);
                            $("body").append(script);
                        }
                        else if (ext === ".css") {
                            link = $("<link rel='stylesheet'>");
                            link.attr("href", name_1);
                            $("head").append(link);
                        }
                    }
                    html = $.html();
                    if (!min) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, utils_1.tryAsync)(function () { return Promise.resolve().then(function () { return __importStar(require("html-minifier")); }); }, "html-minifier", "HTML minification")];
                case 3:
                    minify = (_d.sent()).minify;
                    html = minify(html, __assign({ collapseWhitespace: true, minifyCSS: true, removeComments: true }, opts.minifyOptions));
                    _d.label = 4;
                case 4: return [4 /*yield*/, fs.promises.writeFile(opts.outFile, html)];
                case 5:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateIndexHTML = generateIndexHTML;
//# sourceMappingURL=html.js.map