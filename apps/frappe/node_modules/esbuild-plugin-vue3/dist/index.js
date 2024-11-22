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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var crypto = __importStar(require("crypto"));
var sfc = __importStar(require("@vue/compiler-sfc"));
var core = __importStar(require("@vue/compiler-core"));
var paths_1 = require("./paths");
var utils_1 = require("./utils");
var html_1 = require("./html");
var random_1 = __importDefault(require("./random"));
var vuePlugin = function (opts) {
    if (opts === void 0) { opts = {}; }
    return ({
        name: "vue",
        setup: function (_a) {
            var _b;
            var buildOpts = _a.initialOptions, build = __rest(_a, ["initialOptions"]);
            return __awaiter(this, void 0, void 0, function () {
                var mustReplace, random, cache, transforms, _loop_1, name_1;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            buildOpts.define = __assign(__assign({}, buildOpts.define), { "__VUE_OPTIONS_API__": opts.disableOptionsApi ? "false" : "true", "__VUE_PROD_DEVTOOLS__": opts.enableDevTools ? "true" : "false" });
                            if (opts.generateHTML && !buildOpts.metafile) {
                                buildOpts.metafile = true;
                            }
                            if (opts.disableResolving) {
                                opts.pathAliases = false;
                                build.onStart(function () { return ({ warnings: [{ text: "The disableResolving option is deprecated, use pathAliases instead" }] }); });
                            }
                            return [4 /*yield*/, (0, paths_1.loadRules)(opts, (_b = buildOpts.tsconfig) !== null && _b !== void 0 ? _b : "tsconfig.json")];
                        case 1:
                            mustReplace = _c.sent();
                            random = (0, random_1.default)(typeof opts.scopeId === "object" && typeof opts.scopeId.random === "string" ? opts.scopeId.random : undefined);
                            cache = new utils_1.AsyncCache(!opts.disableCache);
                            transforms = {};
                            if (opts.directiveTransforms) {
                                _loop_1 = function (name_1) {
                                    if (Object.prototype.hasOwnProperty.call(opts.directiveTransforms, name_1)) {
                                        var propName_1 = opts.directiveTransforms[name_1];
                                        var transformation_1 = function (dir, name) {
                                            var _a;
                                            return ({
                                                key: core.createSimpleExpression(JSON.stringify(name), false),
                                                value: (_a = dir.exp) !== null && _a !== void 0 ? _a : core.createSimpleExpression("void 0", false),
                                                loc: dir.loc,
                                                type: 16
                                            });
                                        };
                                        if (typeof propName_1 === "function") {
                                            transforms[name_1] = function () {
                                                var args = [];
                                                for (var _i = 0; _i < arguments.length; _i++) {
                                                    args[_i] = arguments[_i];
                                                }
                                                var ret = propName_1(args[0], args[1], args[2]);
                                                return {
                                                    props: ret === undefined ? [] : [transformation_1(args[0], ret)]
                                                };
                                            };
                                        }
                                        else {
                                            transforms[name_1] = function (dir) { return ({
                                                props: propName_1 === false ? [] : [transformation_1(dir, propName_1)]
                                            }); };
                                        }
                                    }
                                };
                                for (name_1 in opts.directiveTransforms) {
                                    _loop_1(name_1);
                                }
                            }
                            if (mustReplace) {
                                build.onResolve({ filter: /.*/ }, function (args) { return __awaiter(_this, void 0, void 0, function () {
                                    var aliased, fullPath, possible, _i, possible_1, postfix;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                aliased = (0, paths_1.replaceRules)(args.path);
                                                fullPath = path.isAbsolute(aliased) ? aliased : path.join(process.cwd(), aliased);
                                                return [4 /*yield*/, (0, utils_1.fileExists)(fullPath)];
                                            case 1:
                                                if (!!(_a.sent())) return [3 /*break*/, 6];
                                                possible = [
                                                    ".ts",
                                                    "/index.ts",
                                                    ".js",
                                                    "/index.js",
                                                ];
                                                _i = 0, possible_1 = possible;
                                                _a.label = 2;
                                            case 2:
                                                if (!(_i < possible_1.length)) return [3 /*break*/, 5];
                                                postfix = possible_1[_i];
                                                return [4 /*yield*/, (0, utils_1.fileExists)(fullPath + postfix)];
                                            case 3:
                                                if (_a.sent()) {
                                                    return [2 /*return*/, {
                                                            path: path.normalize(fullPath + postfix),
                                                            namespace: "file"
                                                        }];
                                                }
                                                _a.label = 4;
                                            case 4:
                                                _i++;
                                                return [3 /*break*/, 2];
                                            case 5: return [3 /*break*/, 7];
                                            case 6: return [2 /*return*/, {
                                                    path: path.normalize(fullPath),
                                                    namespace: "file"
                                                }];
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                }); });
                            }
                            // Resolve main ".vue" import
                            build.onResolve({ filter: /\.vue/ }, function (args) { return __awaiter(_this, void 0, void 0, function () {
                                var params;
                                return __generator(this, function (_a) {
                                    params = (0, utils_1.getUrlParams)(args.path);
                                    return [2 /*return*/, {
                                            path: (0, utils_1.getFullPath)(args),
                                            namespace: params.type === "script" ? "sfc-script" :
                                                params.type === "template" ? "sfc-template" :
                                                    params.type === "style" ? "sfc-style" : "file",
                                            pluginData: __assign(__assign({}, args.pluginData), { index: params.index })
                                        }];
                                });
                            }); });
                            // Load stub when .vue is requested
                            build.onLoad({ filter: /\.vue$/ }, function (args) { return cache.get([args.path, args.namespace], function () { return __awaiter(_this, void 0, void 0, function () {
                                var encPath, source, filename, id, descriptor, script, dataId, code, src, style, renderFuncName;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            encPath = args.path.replace(/\\/g, "\\\\");
                                            return [4 /*yield*/, fs.promises.readFile(args.path, 'utf8')];
                                        case 1:
                                            source = _a.sent();
                                            filename = path.relative(process.cwd(), args.path);
                                            id = !opts.scopeId || opts.scopeId === "hash"
                                                ? crypto.createHash("md5").update(filename).digest().toString("hex").substring(0, 8)
                                                : random(4).toString("hex");
                                            descriptor = sfc.parse(source, {
                                                filename: filename
                                            }).descriptor;
                                            script = (descriptor.script || descriptor.scriptSetup) ? sfc.compileScript(descriptor, { id: id }) : undefined;
                                            dataId = "data-v-" + id;
                                            code = "";
                                            if (descriptor.script || descriptor.scriptSetup) {
                                                src = (descriptor.script && !descriptor.scriptSetup && descriptor.script.src) || encPath;
                                                code += "import script from \"".concat(src, "?type=script\";");
                                            }
                                            else {
                                                code += "const script = {};";
                                            }
                                            for (style in descriptor.styles) {
                                                code += "import \"".concat(encPath, "?type=style&index=").concat(style, "\";");
                                            }
                                            renderFuncName = opts.renderSSR ? "ssrRender" : "render";
                                            code += "import { ".concat(renderFuncName, " } from \"").concat(encPath, "?type=template\"; script.").concat(renderFuncName, " = ").concat(renderFuncName, ";");
                                            code += "script.__file = ".concat(JSON.stringify(filename), ";");
                                            if (descriptor.styles.some(function (o) { return o.scoped; })) {
                                                code += "script.__scopeId = ".concat(JSON.stringify(dataId), ";");
                                            }
                                            if (opts.renderSSR) {
                                                code += "script.__ssrInlineRender = true;";
                                            }
                                            code += "export default script;";
                                            return [2 /*return*/, {
                                                    contents: code,
                                                    resolveDir: path.dirname(args.path),
                                                    pluginData: { descriptor: descriptor, id: dataId, script: script },
                                                    watchFiles: [args.path]
                                                }];
                                    }
                                });
                            }); }); });
                            build.onLoad({ filter: /.*/, namespace: "sfc-script" }, function (args) { return cache.get([args.path, args.namespace], function () { return __awaiter(_this, void 0, void 0, function () {
                                var script, code, sourceMap;
                                return __generator(this, function (_a) {
                                    script = args.pluginData.script;
                                    if (script) {
                                        code = script.content;
                                        if (buildOpts.sourcemap && script.map) {
                                            sourceMap = Buffer.from(JSON.stringify(script.map)).toString("base64");
                                            code += "\n\n//@ sourceMappingURL=data:application/json;charset=utf-8;base64," + sourceMap;
                                        }
                                        return [2 /*return*/, {
                                                contents: code,
                                                loader: script.lang === "ts" ? "ts" : "js",
                                                resolveDir: path.dirname(args.path),
                                            }];
                                    }
                                    return [2 /*return*/];
                                });
                            }); }); });
                            build.onLoad({ filter: /.*/, namespace: "sfc-template" }, function (args) { return cache.get([args.path, args.namespace], function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, descriptor, id, script, source, pug, result;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = args.pluginData, descriptor = _a.descriptor, id = _a.id, script = _a.script;
                                            if (!descriptor.template) {
                                                throw new Error("Missing template");
                                            }
                                            source = descriptor.template.content;
                                            if (!(descriptor.template.lang === "pug")) return [3 /*break*/, 2];
                                            return [4 /*yield*/, (0, utils_1.tryAsync)(function () { return Promise.resolve().then(function () { return __importStar(require("pug")); }); }, "pug", "Pug template rendering")];
                                        case 1:
                                            pug = _b.sent();
                                            source = pug.render(descriptor.template.content);
                                            // Fix #default="#default" and v-else="v-else"
                                            source = source.replace(/(\B#.*?|\bv-.*?)="\1"/g, "$1");
                                            _b.label = 2;
                                        case 2:
                                            result = sfc.compileTemplate({
                                                id: id,
                                                source: source,
                                                filename: args.path,
                                                scoped: descriptor.styles.some(function (o) { return o.scoped; }),
                                                slotted: descriptor.slotted,
                                                ssr: opts.renderSSR,
                                                ssrCssVars: [],
                                                isProd: (process.env.NODE_ENV === "production") || buildOpts.minify,
                                                compilerOptions: __assign({ inSSR: opts.renderSSR, directiveTransforms: transforms, bindingMetadata: script === null || script === void 0 ? void 0 : script.bindings }, opts.compilerOptions)
                                            });
                                            if (result.errors.length > 0) {
                                                return [2 /*return*/, {
                                                        errors: result.errors.map(function (o) { return typeof o === "string" ? { text: o } : {
                                                            text: o.message,
                                                            location: o.loc && {
                                                                column: o.loc.start.column,
                                                                file: descriptor.filename,
                                                                line: o.loc.start.line + descriptor.template.loc.start.line + 1,
                                                                lineText: o.loc.source
                                                            }
                                                        }; })
                                                    }];
                                            }
                                            return [2 /*return*/, {
                                                    contents: result.code,
                                                    warnings: result.tips.map(function (o) { return ({ text: o }); }),
                                                    loader: "ts",
                                                    resolveDir: path.dirname(args.path),
                                                }];
                                    }
                                });
                            }); }); });
                            build.onLoad({ filter: /.*/, namespace: "sfc-style" }, function (args) { return cache.get([args.path, args.namespace], function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, descriptor, index, id, style, includedFiles, result, errors;
                                var _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _a = args.pluginData, descriptor = _a.descriptor, index = _a.index, id = _a.id;
                                            style = descriptor.styles[index];
                                            includedFiles = [];
                                            return [4 /*yield*/, sfc.compileStyleAsync({
                                                    filename: args.path,
                                                    id: id,
                                                    source: style.content,
                                                    postcssOptions: (_b = opts.postcss) === null || _b === void 0 ? void 0 : _b.options,
                                                    postcssPlugins: (_c = opts.postcss) === null || _c === void 0 ? void 0 : _c.plugins,
                                                    preprocessLang: style.lang,
                                                    preprocessOptions: {
                                                        includePaths: [
                                                            path.dirname(args.path)
                                                        ],
                                                        importer: [
                                                            function (url) {
                                                                var modulePath = path.join(process.cwd(), "node_modules", url);
                                                                if (fs.existsSync(modulePath)) {
                                                                    return { file: modulePath };
                                                                }
                                                                return null;
                                                            },
                                                            function (url) { return ({ file: (0, paths_1.replaceRules)(url) }); }
                                                        ]
                                                    },
                                                    scoped: style.scoped,
                                                })];
                                        case 1:
                                            result = _d.sent();
                                            if (result.errors.length > 0) {
                                                errors = result.errors;
                                                return [2 /*return*/, {
                                                        errors: errors.map(function (o) { return ({
                                                            text: o.message,
                                                            location: {
                                                                column: o.column,
                                                                line: o.file === args.path ? style.loc.start.line + o.line - 1 : o.line,
                                                                file: o.file.replace(/\?.*?$/, ""),
                                                                namespace: "file"
                                                            }
                                                        }); })
                                                    }];
                                            }
                                            return [2 /*return*/, {
                                                    contents: result.code,
                                                    loader: "css",
                                                    resolveDir: path.dirname(args.path),
                                                    watchFiles: includedFiles
                                                }];
                                    }
                                });
                            }); }); });
                            build.onEnd(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                var outDir;
                                var _a, _b, _c, _d;
                                var _e, _f, _g;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            if (!((opts === null || opts === void 0 ? void 0 : opts.generateHTML) && result.errors.length == 0)) return [3 /*break*/, 2];
                                            if (typeof opts.generateHTML === "string") {
                                                opts.generateHTML = {
                                                    sourceFile: opts.generateHTML
                                                };
                                            }
                                            outDir = buildOpts.outdir
                                                ? buildOpts.outdir
                                                : buildOpts.outfile
                                                    ? path.dirname(buildOpts.outfile)
                                                    : undefined;
                                            (_a = (_e = opts.generateHTML).trimPath) !== null && _a !== void 0 ? _a : (_e.trimPath = outDir);
                                            (_b = (_f = opts.generateHTML).pathPrefix) !== null && _b !== void 0 ? _b : (_f.pathPrefix = "/");
                                            (_c = (_g = opts.generateHTML).outFile) !== null && _c !== void 0 ? _c : (_g.outFile = outDir && path.join(outDir, "index.html"));
                                            return [4 /*yield*/, (0, html_1.generateIndexHTML)(result, opts.generateHTML, (_d = buildOpts.minify) !== null && _d !== void 0 ? _d : false)];
                                        case 1:
                                            _h.sent();
                                            _h.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
};
module.exports = vuePlugin;
//# sourceMappingURL=index.js.map