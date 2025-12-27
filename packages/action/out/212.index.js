"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 7212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ check)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@actions+core@1.11.1/node_modules/@actions/core/lib/core.js
var core = __webpack_require__(1416);
// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(2081);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
;// CONCATENATED MODULE: ./dist/util/exec.js
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _async_to_generator(fn) {
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
}


var exec = (0,external_util_.promisify)(external_child_process_.exec);
function command(param) {
    var _param = _to_array(param), strings = _param.slice(0);
    for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        vars[_key - 1] = arguments[_key];
    }
    return function(result) {
        return _async_to_generator(function() {
            var command, cleaned;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getCommand(strings, vars, result)
                        ];
                    case 1:
                        command = _state.sent();
                        cleaned = command.split('\n').map(function(part) {
                            return part.trim();
                        }).filter(Boolean).join(' ');
                        return [
                            2,
                            cleaned
                        ];
                }
            });
        })();
    };
}
function consume(param) {
    var _param = _to_array(param), strings = _param.slice(0);
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
            var split = current.string.split('\n');
            if (split.length === 1) {
                result.strings.push(split[0]);
                result.vars.push(current.var);
                current = combined.shift();
            } else {
                result.strings.push(split[0]);
                current.string = split.slice(1).join('\n');
                break;
            }
        }
        if (result.strings.length) {
            result.strings[0] = result.strings[0].trimStart();
            result.strings[result.strings.length - 1] = result.strings[result.strings.length - 1].trimEnd();
            result.vars = result.vars.slice(0, result.strings.length - 1);
        }
        if (!result.strings.length || result.strings[0] === '' && !result.vars.length) {
            if (current) return getNext();
            return;
        }
        return result;
    };
    return getNext;
}
function generator(getNext) {
    var current;
    return _ts_generator(this, function(_state) {
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
var getCommand = function(strings, vars, results) {
    return _async_to_generator(function() {
        var first, parts, _tmp, _tmp1, _tmp2, _i, idx, variable, _, _1, _2, _tmp3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    first = strings.shift();
                    if (first === undefined) return [
                        2,
                        ''
                    ];
                    parts = [
                        first
                    ];
                    _tmp = strings;
                    _tmp1 = [];
                    for(_tmp2 in _tmp)_tmp1.push(_tmp2);
                    _i = 0;
                    _state.label = 1;
                case 1:
                    if (!(_i < _tmp1.length)) return [
                        3,
                        6
                    ];
                    _tmp2 = _tmp1[_i];
                    if (!(_tmp2 in _tmp)) return [
                        3,
                        5
                    ];
                    idx = _tmp2;
                    variable = vars[idx];
                    _ = parts.push;
                    _2 = (_1 = "").concat;
                    if (!(typeof variable === 'function')) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        variable(results)
                    ];
                case 2:
                    _tmp3 = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    _tmp3 = variable;
                    _state.label = 4;
                case 4:
                    _.apply(parts, [
                        _2.apply(_1, [
                            _tmp3
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
                        parts.join('')
                    ];
            }
        });
    })();
};
var bash = function(strings) {
    for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        vars[_key - 1] = arguments[_key];
    }
    return _async_to_generator(function() {
        var lines, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, _$strings, vars1, command, _, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    lines = generator(consume.apply(void 0, [
                        strings
                    ].concat(_to_consumable_array(vars))));
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
                    if (!(command !== '')) return [
                        3,
                        5
                    ];
                    console.info(command);
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
    })();
};
bash.options = function(options) {
    return function(strings) {
        for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            vars[_key - 1] = arguments[_key];
        }
        return _async_to_generator(function() {
            var lines, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, _$strings, vars1, command, _, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lines = generator(consume.apply(void 0, [
                            strings
                        ].concat(_to_consumable_array(vars))));
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
                        if (!(command !== '')) return [
                            3,
                            5
                        ];
                        console.info(command);
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
        })();
    };
};

// EXTERNAL MODULE: ./dist/util/is-canary.js
var is_canary = __webpack_require__(9911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js
var semver = __webpack_require__(4122);
// EXTERNAL MODULE: ./dist/util/get-file.js
var get_file = __webpack_require__(2703);
// EXTERNAL MODULE: ./dist/context.js
var context = __webpack_require__(7501);
;// CONCATENATED MODULE: ./dist/check/index.js
function check_array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function check_array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function check_array_without_holes(arr) {
    if (Array.isArray(arr)) return check_array_like_to_array(arr);
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
function check_async_to_generator(fn) {
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
function check_iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
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
function check_non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function check_non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return check_array_with_holes(arr) || _iterable_to_array_limit(arr, i) || check_unsupported_iterable_to_array(arr, i) || check_non_iterable_rest();
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function check_to_consumable_array(arr) {
    return check_array_without_holes(arr) || check_iterable_to_array(arr) || check_unsupported_iterable_to_array(arr) || check_non_iterable_spread();
}
function check_unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return check_array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return check_array_like_to_array(o, minLen);
}
function check_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n          npm view\n            ",
        "@",
        "\n        "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        ",
        "\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}






// Dynamic regex that supports the configured prerelease type
var createVersionParserRegexp = function() {
    return new RegExp("^(@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*@(\\d+\\.\\d+\\.\\d+(?:-".concat(context/* prereleaseType */.kD, "\\.\\d+)?)"));
};
var checkPackage = function(pkg, rootVersion) {
    return check_async_to_generator(function() {
        var _ref, packageJson, log, _ref1, res, versionParserRegexp, _ref2, currentVersion, _e, unused;
        return check_ts_generator(this, function(_state) {
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
                        ].concat(check_to_consumable_array(args)));
                    };
                    if (packageJson.private !== false) {
                        log('Skipping private package');
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
                        bash(_templateObject1(), command(_templateObject(), packageJson.name, (0,is_canary/* default */.Z)(rootVersion) ? context/* prereleaseType */.kD : 'latest'))
                    ];
                case 3:
                    _ref1 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), res = _ref1[0];
                    if (!res) throw new Error('Únexpected error');
                    versionParserRegexp = createVersionParserRegexp();
                    _ref2 = _sliced_to_array(versionParserRegexp.exec(res.stdout.trim()) || [], 3), currentVersion = _ref2[2];
                    if (!currentVersion) throw new Error('Could not parse version from npm view response');
                    if ((0,semver.gt)(rootVersion, currentVersion)) {
                        log("Version ".concat(rootVersion, " can be published. Current version is ").concat(currentVersion));
                        return [
                            2,
                            packageJson.name
                        ];
                    } else {
                        log("Version (".concat(currentVersion, ") already up to date."));
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
                    unused = _state.sent();
                    return [
                        2
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    })();
};
var checkPackages = function(rootVersion) {
    return check_async_to_generator(function() {
        var packagesDir, folders;
        return check_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(context/* publishPackages */.RP && context/* publishPackages.length */.RP.length > 0)) return [
                        3,
                        2
                    ];
                    console.log('checking configured packages: ' + context/* publishPackages.join */.RP.join(', '));
                    return [
                        4,
                        Promise.all(context/* publishPackages.map */.RP.map(function(pkgPath) {
                            return check_async_to_generator(function() {
                                var fullPath, jsonPath;
                                return check_ts_generator(this, function(_state) {
                                    fullPath = (0,context/* withWorkingDir */.QV)(pkgPath);
                                    // If path doesn't end with package.json, append it
                                    jsonPath = fullPath.endsWith('package.json') ? fullPath : "".concat(fullPath, "/package.json");
                                    return [
                                        2,
                                        checkPackage(jsonPath, rootVersion)
                                    ];
                                });
                            })();
                        }))
                    ];
                case 1:
                    return [
                        2,
                        _state.sent().filter(Boolean)
                    ];
                case 2:
                    // Otherwise, scan packages/* directory (legacy behavior)
                    packagesDir = (0,context/* withWorkingDir */.QV)('packages');
                    return [
                        4,
                        (0,get_file/* getFolder */.zZ)(packagesDir)
                    ];
                case 3:
                    folders = _state.sent();
                    console.log('checking ' + folders.map(function(param) {
                        var path = param.path;
                        return path;
                    }).join());
                    return [
                        4,
                        Promise.all(folders.map(function(param) {
                            var path = param.path;
                            return check_async_to_generator(function() {
                                return check_ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        checkPackage("".concat(path, "/package.json"), rootVersion)
                                    ];
                                });
                            })();
                        }))
                    ];
                case 4:
                    return [
                        2,
                        _state.sent().filter(Boolean)
                    ];
            }
        });
    })();
};
/**
 * this script checks the version of the root package.json against
 * the latest or latest canary version of the modules and then
 * uses semver to determine if a new version can be published.
 * It sets the results as github actions output as this script is
 * inteded to be ran as part of a workflow
 */ var canPublish = function() {
    return check_async_to_generator(function() {
        var versionFilePath, _ref, version, publishable;
        return check_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Use the first version file as the source of truth for the version
                    versionFilePath = (0,context/* withWorkingDir */.QV)(context/* versionFiles.0 */.dm[0]);
                    return [
                        4,
                        (0,get_file/* getJsonFile */.n0)(versionFilePath)
                    ];
                case 1:
                    _ref = _state.sent(), version = _ref.content.version;
                    console.log('version:', version, "is ".concat(context/* prereleaseType */.kD, ":"), (0,is_canary/* default */.Z)(version));
                    if (!version.startsWith('0.0.0')) return [
                        3,
                        2
                    ];
                    (0,core.setOutput)('can-publish', false);
                    (0,core.setOutput)('version', version);
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
                    (0,core.setOutput)('can-publish', Boolean(publishable.length));
                    (0,core.setOutput)('filter', publishable.map(function(pkg) {
                        return "--filter=".concat(pkg);
                    }).join(' '));
                    (0,core.setOutput)('version', version);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
};
/* harmony default export */ const check = (canPublish);


/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NR": () => (/* binding */ octo),
/* harmony export */   "O9": () => (/* binding */ repo),
/* harmony export */   "PX": () => (/* binding */ target_issue),
/* harmony export */   "QV": () => (/* binding */ withWorkingDir),
/* harmony export */   "RL": () => (/* binding */ target_comment),
/* harmony export */   "RP": () => (/* binding */ publishPackages),
/* harmony export */   "a2": () => (/* binding */ baseBranch),
/* harmony export */   "cR": () => (/* binding */ owner),
/* harmony export */   "dm": () => (/* binding */ versionFiles),
/* harmony export */   "hl": () => (/* binding */ commit_hash),
/* harmony export */   "kD": () => (/* binding */ prereleaseType),
/* harmony export */   "sS": () => (/* binding */ initial_commit)
/* harmony export */ });
/* unused harmony exports target_pull, workingDirectory */
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7036);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);


var GITHUB_TOKEN = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('token', {
    required: true
});
var octo = (0,_actions_github__WEBPACK_IMPORTED_MODULE_1__.getOctokit)(GITHUB_TOKEN);
var _context_repo = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo, _context_payload = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload;
var owner = _context_repo.owner, repo = _context_repo.repo, commit_hash = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.sha, target_issue = _context_payload.issue, target_comment = _context_payload.comment, target_pull = _context_payload.pull_request;
var initial_commit = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('initial-commit');
// Monorepo support configuration
var workingDirectory = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('working-directory') || '.';
var versionFiles = JSON.parse((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('version-files') || '["package.json"]');
var publishPackages = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('publish-packages') ? JSON.parse((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('publish-packages')) : undefined;
var prereleaseType = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('prerelease-type') || 'canary';
var baseBranch = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('base-branch') || 'main';
// Helper to join working directory with a path
var withWorkingDir = function(path) {
    if (workingDirectory === '.') return path;
    return "".concat(workingDirectory, "/").concat(path);
};


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
function _async_to_generator(fn) {
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
}

var getFile = function(path, ref) {
    return _async_to_generator(function() {
        var _ref, content;
        return _ts_generator(this, function(_state) {
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
                    if ('content' in content) {
                        return [
                            2,
                            content
                        ];
                    }
                    throw new Error('Could not load content as file');
            }
        });
    })();
};
var getFolder = function(path, ref) {
    return _async_to_generator(function() {
        var _ref, content;
        return _ts_generator(this, function(_state) {
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
                    throw new Error('Could not load content as folder');
            }
        });
    })();
};
var getJsonFile = function(path, ref) {
    return _async_to_generator(function() {
        var _ref, content, sha;
        return _ts_generator(this, function(_state) {
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
                            content: JSON.parse(Buffer.from(content, 'base64').toString()),
                            sha: sha
                        }
                    ];
            }
        });
    })();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFile);


/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export isPrerelease */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7501);

// Check if version matches the configured prerelease type (e.g., canary, beta)
var isPrerelease = function(test) {
    var pattern = new RegExp("^\\d+\\.\\d+\\.\\d+-".concat(_context__WEBPACK_IMPORTED_MODULE_0__/* .prereleaseType */ .kD, "\\.\\d+$"));
    return pattern.test(test);
};
// Legacy export for backwards compatibility
var isCanary = isPrerelease;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCanary);



/***/ })

};
;