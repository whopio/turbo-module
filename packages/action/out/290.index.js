"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ check)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@actions+core@1.10.0/node_modules/@actions/core/lib/core.js
var core = __webpack_require__(8041);
// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(2081);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
;// CONCATENATED MODULE: ../util/exec.ts


const exec = (0,external_util_.promisify)(external_child_process_.exec);
function command([...strings], ...vars) {
    return async (result) => {
        const command = await getCommand(strings, vars, result);
        const cleaned = command
            .split("\n")
            .map((part) => part.trim())
            .filter(Boolean)
            .join(" ");
        return cleaned;
    };
}
function consume([...strings], ...vars) {
    const combined = strings.map((string, idx) => {
        return {
            string,
            var: vars[idx],
        };
    });
    let current = combined.shift();
    const getNext = () => {
        const result = {
            strings: [],
            vars: [],
        };
        while (combined.length || current) {
            if (!current)
                break;
            const split = current.string.split("\n");
            if (split.length === 1) {
                result.strings.push(split[0]);
                result.vars.push(current.var);
                current = combined.shift();
            }
            else {
                result.strings.push(split[0]);
                current.string = split.slice(1).join("\n");
                break;
            }
        }
        if (result.strings.length) {
            result.strings[0] = result.strings[0].trimStart();
            result.strings[result.strings.length - 1] =
                result.strings[result.strings.length - 1].trimEnd();
            result.vars = result.vars.slice(0, result.strings.length - 1);
        }
        if (!result.strings.length ||
            (result.strings[0] === "" && !result.vars.length)) {
            if (current)
                return getNext();
            return;
        }
        return result;
    };
    return getNext;
}
function* generator(getNext) {
    let current = getNext();
    while (current) {
        yield current;
        current = getNext();
    }
}
const getCommand = async (strings, vars, results) => {
    const first = strings.shift();
    if (!first)
        return "";
    const parts = [first];
    for (const idx in strings) {
        const variable = vars[idx];
        parts.push(`${typeof variable === "function" ? await variable(results) : variable}`);
        parts.push(strings[idx]);
    }
    return parts.join("");
};
const bash = async (strings, ...vars) => {
    const lines = generator(consume(strings, ...vars));
    const results = [];
    for (const { strings, vars } of lines) {
        const command = await getCommand(strings, vars, results);
        if (command !== "")
            results.push(await exec(command));
    }
    return results;
};
bash.options =
    (options) => async (strings, ...vars) => {
        const lines = generator(consume(strings, ...vars));
        const results = [];
        for (const { strings, vars } of lines) {
            const command = await getCommand(strings, vars, results);
            if (command !== "")
                results.push(await exec(command, options));
        }
        return results;
    };

// EXTERNAL MODULE: ../util/is-canary.ts
var is_canary = __webpack_require__(2206);
// EXTERNAL MODULE: ../../node_modules/.pnpm/semver@7.3.8/node_modules/semver/index.js
var semver = __webpack_require__(913);
// EXTERNAL MODULE: ./dist/util/get-file.js
var get_file = __webpack_require__(2703);
;// CONCATENATED MODULE: ./dist/check/index.js
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n          npm view \n            ",
        "@",
        "\n        "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "\n        ",
        "\n      "
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}





var versionParserRegexp = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*@(\d+\.\d+\.\d+(?:-canary\.\d)?)/;
var checkPackage = function() {
    var _ref = _asyncToGenerator(function(pkg, rootVersion) {
        var _ref, packageJson, log, _ref1, res, _ref2, currentVersion, _e, e;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        (0,get_file/* getJsonFile */.n0)(pkg)
                    ];
                case 1:
                    _ref = _state.sent(), packageJson = _ref.content;
                    log = function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _console;
                        (_console = console).log.apply(_console, [
                            "".concat(packageJson.name, ":")
                        ].concat(_toConsumableArray(args)));
                    };
                    if (packageJson.private !== false) {
                        log("Skipping private package");
                        return [
                            2
                        ];
                    }
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        bash(_templateObject1(), command(_templateObject(), packageJson.name, (0,is_canary/* default */.Z)(rootVersion) ? "canary" : "latest"))
                    ];
                case 3:
                    _ref1 = _slicedToArray.apply(void 0, [
                        _state.sent(),
                        1
                    ]), res = _ref1[0];
                    if (!res) throw new Error("\xdanexpected error");
                    _ref2 = _slicedToArray(versionParserRegexp.exec(res.stdout.trim()) || [], 3), currentVersion = _ref2[2];
                    if (!currentVersion) throw new Error("Could not parse version from npm view response");
                    if ((0,semver.gt)(rootVersion, currentVersion)) {
                        log("Version ".concat(rootVersion, " can be published."));
                        return [
                            2,
                            packageJson.name
                        ];
                    } else {
                        log("Already up to date.");
                    }
                    return [
                        3,
                        5
                    ];
                case 4:
                    _e = _state.sent();
                    log("Not found in registry.");
                    return [
                        2,
                        packageJson.name
                    ];
                case 5:
                    return [
                        3,
                        7
                    ];
                case 6:
                    e = _state.sent();
                    return [
                        2
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    return function checkPackage(pkg, rootVersion) {
        return _ref.apply(this, arguments);
    };
}();
var checkPackages = function() {
    var _ref = _asyncToGenerator(function(rootVersion) {
        var folders;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,get_file/* getFolder */.zZ)("packages")
                    ];
                case 1:
                    folders = _state.sent();
                    console.log("checking " + folders.map(function(param) {
                        var path = param.path;
                        return path;
                    }).join());
                    return [
                        4,
                        Promise.all(folders.map(function() {
                            var _ref = _asyncToGenerator(function(param) {
                                var path;
                                return __generator(this, function(_state) {
                                    path = param.path;
                                    return [
                                        2,
                                        checkPackage("".concat(path, "/package.json"), rootVersion)
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 2:
                    return [
                        2,
                        _state.sent().filter(Boolean)
                    ];
            }
        });
    });
    return function checkPackages(rootVersion) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * this script checks the version of the root package.json against
 * the latest or latest canary version of the modules and then
 * uses semver to determine if a new version can be published.
 * It sets the results as github actions output as this script is
 * inteded to be ran as part of a workflow
 */ var canPublish = function() {
    var _ref = _asyncToGenerator(function() {
        var _ref, version, publishable;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,get_file/* getJsonFile */.n0)("package.json")
                    ];
                case 1:
                    _ref = _state.sent(), version = _ref.content.version;
                    console.log("version:", version, "is canary:", (0,is_canary/* default */.Z)(version));
                    if (!version.startsWith("0.0.0")) return [
                        3,
                        2
                    ];
                    (0,core.setOutput)("can-publish", false);
                    (0,core.setOutput)("version", version);
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        checkPackages(version)
                    ];
                case 3:
                    publishable = _state.sent();
                    (0,core.setOutput)("can-publish", Boolean(publishable.length));
                    (0,core.setOutput)("filter", publishable.map(function(pkg) {
                        return "--filter=".concat(pkg);
                    }).join(" "));
                    (0,core.setOutput)("version", version);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function canPublish() {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const check = (canPublish);


/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NR": () => (/* binding */ octo),
/* harmony export */   "O9": () => (/* binding */ repo),
/* harmony export */   "PX": () => (/* binding */ target_issue),
/* harmony export */   "RL": () => (/* binding */ target_comment),
/* harmony export */   "cR": () => (/* binding */ owner),
/* harmony export */   "hl": () => (/* binding */ commit_hash),
/* harmony export */   "sS": () => (/* binding */ initial_commit)
/* harmony export */ });
/* unused harmony export target_pull */
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8041);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7036);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);


var GITHUB_TOKEN = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("token", {
    required: true
});
var octo = (0,_actions_github__WEBPACK_IMPORTED_MODULE_1__.getOctokit)(GITHUB_TOKEN);
var _context_repo = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo, _context_payload = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload;
var owner = _context_repo.owner, repo = _context_repo.repo, commit_hash = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.sha, target_issue = _context_payload.issue, target_comment = _context_payload.comment, target_pull = _context_payload.pull_request;
var initial_commit = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("initial-commit");


/***/ }),

/***/ 2703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n0": () => (/* binding */ getJsonFile),
/* harmony export */   "zZ": () => (/* binding */ getFolder)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7501);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};

var getFile = function() {
    var _ref = _asyncToGenerator(function(path, ref) {
        var _ref, content;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_0__/* .octo.rest.repos.getContent */ .NR.rest.repos.getContent({
                            repo: _context__WEBPACK_IMPORTED_MODULE_0__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_0__/* .owner */ .cR,
                            path: path,
                            ref: ref
                        })
                    ];
                case 1:
                    _ref = _state.sent(), content = _ref.data;
                    if ("content" in content) {
                        return [
                            2,
                            content
                        ];
                    }
                    throw new Error("Could not load content as file");
            }
        });
    });
    return function getFile(path, ref) {
        return _ref.apply(this, arguments);
    };
}();
var getFolder = function() {
    var _ref = _asyncToGenerator(function(path, ref) {
        var _ref, content;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_0__/* .octo.rest.repos.getContent */ .NR.rest.repos.getContent({
                            repo: _context__WEBPACK_IMPORTED_MODULE_0__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_0__/* .owner */ .cR,
                            path: path,
                            ref: ref
                        })
                    ];
                case 1:
                    _ref = _state.sent(), content = _ref.data;
                    if (_instanceof(content, Array)) {
                        return [
                            2,
                            content
                        ];
                    }
                    throw new Error("Could not load content as folder");
            }
        });
    });
    return function getFolder(path, ref) {
        return _ref.apply(this, arguments);
    };
}();
var getJsonFile = function() {
    var _ref = _asyncToGenerator(function(path, ref) {
        var _ref, content, sha;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getFile(path, ref)
                    ];
                case 1:
                    _ref = _state.sent(), content = _ref.content, sha = _ref.sha;
                    return [
                        2,
                        {
                            content: JSON.parse(Buffer.from(content, "base64").toString()),
                            sha: sha
                        }
                    ];
            }
        });
    });
    return function getJsonFile(path, ref) {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFile);


/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isCanary = (test) => /^\d+\.\d+\.\d+-canary\.\d+$/.test(test);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCanary);


/***/ })

};
;