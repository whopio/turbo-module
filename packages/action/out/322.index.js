"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 7322:
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
;// CONCATENATED MODULE: ./dist/util/exec.js
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
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
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


var exec = (0,external_util_.promisify)(external_child_process_.exec);
function command(param) {
    var _param = _toArray(param), strings = _param.slice(0);
    for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        vars[_key - 1] = arguments[_key];
    }
    return function() {
        var _ref = _asyncToGenerator(function(result) {
            var command, cleaned;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getCommand(strings, vars, result)
                        ];
                    case 1:
                        command = _state.sent();
                        cleaned = command.split("\n").map(function(part) {
                            return part.trim();
                        }).filter(Boolean).join(" ");
                        console.log(cleaned);
                        return [
                            2,
                            cleaned
                        ];
                }
            });
        });
        return function(result) {
            return _ref.apply(this, arguments);
        };
    }();
}
function consume(param) {
    var _param = _toArray(param), strings = _param.slice(0);
    for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        vars[_key - 1] = arguments[_key];
    }
    var combined = strings.map(function(string, idx) {
        return {
            string: string,
            var: vars[idx]
        };
    });
    var current = combined.shift();
    var getNext = function() {
        var result = {
            strings: [],
            vars: []
        };
        while(combined.length || current){
            if (!current) break;
            var split = current.string.split("\n");
            if (split.length === 1) {
                result.strings.push(split[0]);
                result.vars.push(current.var);
                current = combined.shift();
            } else {
                result.strings.push(split[0]);
                current.string = split.slice(1).join("\n");
                break;
            }
        }
        if (result.strings.length) {
            result.strings[0] = result.strings[0].trimStart();
            result.strings[result.strings.length - 1] = result.strings[result.strings.length - 1].trimEnd();
            result.vars = result.vars.slice(0, result.strings.length - 1);
        }
        if (!result.strings.length || result.strings[0] === "" && !result.vars.length) {
            if (current) return getNext();
            return;
        }
        return result;
    };
    return getNext;
}
function generator(getNext) {
    var current;
    return __generator(this, function(_state) {
        switch(_state.label){
            case 0:
                current = getNext();
                _state.label = 1;
            case 1:
                if (!current) return [
                    3,
                    3
                ];
                return [
                    4,
                    current
                ];
            case 2:
                _state.sent();
                current = getNext();
                return [
                    3,
                    1
                ];
            case 3:
                return [
                    2
                ];
        }
    });
}
var getCommand = function() {
    var _ref = _asyncToGenerator(function(strings, vars, results) {
        var first, parts, _tmp, _tmp1, _i, idx, variable, _, _1, _2, _tmp2;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    first = strings.shift();
                    if (!first) return [
                        2,
                        ""
                    ];
                    parts = [
                        first
                    ];
                    _tmp = [];
                    for(_tmp1 in strings)_tmp.push(_tmp1);
                    _i = 0;
                    _state.label = 1;
                case 1:
                    if (!(_i < _tmp.length)) return [
                        3,
                        6
                    ];
                    idx = _tmp[_i];
                    variable = vars[idx];
                    _ = parts.push;
                    _2 = (_1 = "").concat;
                    if (!(typeof variable === "function")) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        variable(results)
                    ];
                case 2:
                    _tmp2 = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    _tmp2 = variable;
                    _state.label = 4;
                case 4:
                    _.apply(parts, [
                        _2.apply(_1, [
                            _tmp2
                        ])
                    ]);
                    parts.push(strings[idx]);
                    _state.label = 5;
                case 5:
                    _i++;
                    return [
                        3,
                        1
                    ];
                case 6:
                    return [
                        2,
                        parts.join("")
                    ];
            }
        });
    });
    return function getCommand(strings, vars, results) {
        return _ref.apply(this, arguments);
    };
}();
var bash = function() {
    var _ref = _asyncToGenerator(function(strings) {
        var _len, vars, _key, lines, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, _$strings, vars1, command, _, err;
        var _arguments = arguments;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    for(_len = _arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        vars[_key - 1] = _arguments[_key];
                    }
                    lines = generator(consume.apply(void 0, [
                        strings
                    ].concat(_toConsumableArray(vars))));
                    results = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        7,
                        8,
                        9
                    ]);
                    _iterator = lines[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    _step_value = _step.value, _$strings = _step_value.strings, vars1 = _step_value.vars;
                    return [
                        4,
                        getCommand(_$strings, vars1, results)
                    ];
                case 3:
                    command = _state.sent();
                    if (!(command !== "")) return [
                        3,
                        5
                    ];
                    _ = results.push;
                    return [
                        4,
                        exec(command)
                    ];
                case 4:
                    _.apply(results, [
                        _state.sent()
                    ]);
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        2,
                        results
                    ];
            }
        });
    });
    return function bash(strings) {
        return _ref.apply(this, arguments);
    };
}();
bash.options = function(options) {
    return function() {
        var _ref = _asyncToGenerator(function(strings) {
            var _len, vars, _key, lines, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, _$strings, vars1, command, _, err;
            var _arguments = arguments;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        for(_len = _arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            vars[_key - 1] = _arguments[_key];
                        }
                        lines = generator(consume.apply(void 0, [
                            strings
                        ].concat(_toConsumableArray(vars))));
                        results = [];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            7,
                            8,
                            9
                        ]);
                        _iterator = lines[Symbol.iterator]();
                        _state.label = 2;
                    case 2:
                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                            3,
                            6
                        ];
                        _step_value = _step.value, _$strings = _step_value.strings, vars1 = _step_value.vars;
                        return [
                            4,
                            getCommand(_$strings, vars1, results)
                        ];
                    case 3:
                        command = _state.sent();
                        if (!(command !== "")) return [
                            3,
                            5
                        ];
                        _ = results.push;
                        return [
                            4,
                            exec(command, options)
                        ];
                    case 4:
                        _.apply(results, [
                            _state.sent()
                        ]);
                        _state.label = 5;
                    case 5:
                        _iteratorNormalCompletion = true;
                        return [
                            3,
                            2
                        ];
                    case 6:
                        return [
                            3,
                            9
                        ];
                    case 7:
                        err = _state.sent();
                        _didIteratorError = true;
                        _iteratorError = err;
                        return [
                            3,
                            9
                        ];
                    case 8:
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                        return [
                            7
                        ];
                    case 9:
                        return [
                            2,
                            results
                        ];
                }
            });
        });
        return function(strings) {
            return _ref.apply(this, arguments);
        };
    }();
};

;// CONCATENATED MODULE: ./dist/util/is-canary.js
var isCanary = function(test) {
    return /^\d+\.\d+\.\d+-canary\.\d+$/.test(test);
};
/* harmony default export */ const is_canary = (isCanary);

// EXTERNAL MODULE: ../../node_modules/.pnpm/semver@7.3.8/node_modules/semver/index.js
var semver = __webpack_require__(913);
// EXTERNAL MODULE: ./dist/util/get-file.js
var get_file = __webpack_require__(2703);
;// CONCATENATED MODULE: ./dist/check/index.js
function check_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function check_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function check_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return check_arrayLikeToArray(arr);
}
function check_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function check_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                check_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                check_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function check_iterableToArray(iter) {
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
function check_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function check_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return check_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || check_unsupportedIterableToArray(arr, i) || check_nonIterableRest();
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
function check_toConsumableArray(arr) {
    return check_arrayWithoutHoles(arr) || check_iterableToArray(arr) || check_unsupportedIterableToArray(arr) || check_nonIterableSpread();
}
function check_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return check_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return check_arrayLikeToArray(o, minLen);
}
var check_generator = undefined && undefined.__generator || function(thisArg, body) {
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
    var _ref = check_asyncToGenerator(function(pkg, rootVersion) {
        var _ref, packageJson, log, _ref1, res, _ref2, currentVersion, _e, e;
        return check_generator(this, function(_state) {
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
                        ].concat(check_toConsumableArray(args)));
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
                        bash(_templateObject1(), command(_templateObject(), packageJson.name, is_canary(rootVersion) ? "canary" : "latest"))
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
    var _ref = check_asyncToGenerator(function(rootVersion) {
        var folders;
        return check_generator(this, function(_state) {
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
                            var _ref = check_asyncToGenerator(function(param) {
                                var path;
                                return check_generator(this, function(_state) {
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
    var _ref = check_asyncToGenerator(function() {
        var _ref, version, publishable;
        return check_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,get_file/* getJsonFile */.n0)("package.json")
                    ];
                case 1:
                    _ref = _state.sent(), version = _ref.content.version;
                    console.log("version:", version, "is canary:", is_canary(version));
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


/***/ })

};
;