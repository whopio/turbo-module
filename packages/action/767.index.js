"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

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

/***/ 767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ get_message)
});

// UNUSED EXPORTS: makeGithubReleaseMessage

// EXTERNAL MODULE: ./dist/context.js
var context = __webpack_require__(7501);
// EXTERNAL MODULE: ./dist/util/is-action-user.js
var is_action_user = __webpack_require__(1514);
;// CONCATENATED MODULE: ./dist/util/collect-commits.js
function _asyncIterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return(AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s));
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
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var addPull = function(pulls, type, number, title) {
    if (!pulls[type]) pulls[type] = [];
    pulls[type].push({
        number: number,
        title: title
    });
};
var collectCommits = function() {
    var _ref = _asyncToGenerator(function(head, base) {
        var stats, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, commits, _iteratorNormalCompletion, _didIteratorError1, _iteratorError1, _loop, _iterator1, _step1, err, err1;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stats = {
                        authors: new Set(),
                        pulls: {}
                    };
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        14,
                        19
                    ]);
                    _iterator = _asyncIterator(context/* octo.paginate.iterator */.NR.paginate.iterator(context/* octo.rest.repos.compareCommits */.NR.rest.repos.compareCommits, {
                        owner: context/* owner */.cR,
                        repo: context/* repo */.O9,
                        base: base,
                        head: head,
                        per_page: 100
                    }));
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        12
                    ];
                    _value = _step.value;
                    commits = _value.data.commits;
                    _iteratorNormalCompletion = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _state.label = 4;
                case 4:
                    _state.trys.push([
                        4,
                        9,
                        10,
                        11
                    ]);
                    _loop = function() {
                        var commit, _exec, _commit_author, message, PR, pull_number, _ref, pr, areas, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, area;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    commit = _step1.value;
                                    message = commit.commit.message.split("\n")[0];
                                    PR = (_exec = /\(#(\d+)\)$/.exec(message)) === null || _exec === void 0 ? void 0 : _exec[1];
                                    if (!PR) return [
                                        2,
                                        "continue"
                                    ];
                                    pull_number = parseInt(PR);
                                    if ((_commit_author = commit.author) === null || _commit_author === void 0 ? void 0 : _commit_author.login) {
                                        if ((0,is_action_user/* default */.Z)(commit.author) && message.startsWith("release ")) return [
                                            2,
                                            "continue"
                                        ];
                                        if (message.startsWith("(turbo-module): ")) return [
                                            2,
                                            "continue"
                                        ];
                                        stats.authors.add(commit.author.login);
                                    }
                                    return [
                                        4,
                                        context/* octo.rest.pulls.get */.NR.rest.pulls.get({
                                            repo: context/* repo */.O9,
                                            owner: context/* owner */.cR,
                                            pull_number: pull_number
                                        })
                                    ];
                                case 1:
                                    _ref = _state.sent(), pr = _ref.data;
                                    areas = pr.labels.filter(function(param) {
                                        var name = param.name;
                                        return /^area: /.test(name);
                                    }).map(function(param) {
                                        var name = param.name;
                                        return name.replace(/^area: /, "");
                                    });
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    if (!areas.length) {
                                        addPull(stats.pulls, "general", pull_number, message);
                                    } else try {
                                        for(_iterator = areas[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            area = _step.value;
                                            addPull(stats.pulls, area, pull_number, message);
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _iterator1 = commits[Symbol.iterator]();
                    _state.label = 5;
                case 5:
                    if (!!(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done)) return [
                        3,
                        8
                    ];
                    return [
                        5,
                        __values(_loop())
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        5
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        11
                    ];
                case 10:
                    try {
                        if (!_iteratorNormalCompletion && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 11:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 12:
                    return [
                        3,
                        19
                    ];
                case 13:
                    err1 = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err1;
                    return [
                        3,
                        19
                    ];
                case 14:
                    _state.trys.push([
                        14,
                        ,
                        17,
                        18
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 15:
                    _state.sent();
                    _state.label = 16;
                case 16:
                    return [
                        3,
                        18
                    ];
                case 17:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 18:
                    return [
                        7
                    ];
                case 19:
                    return [
                        2,
                        stats
                    ];
            }
        });
    });
    return function collectCommits(head, base) {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const collect_commits = (collectCommits);

;// CONCATENATED MODULE: ./dist/util/get-history.js
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function get_history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function get_history_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                get_history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                get_history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
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
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var get_history_generator = undefined && undefined.__generator || function(thisArg, body) {
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
        "\n  query ($repo: String!, $owner: String!, $branch: String!, $cursor: String) {\n    repository(name: $repo, owner: $owner) {\n      ref(qualifiedName: $branch) {\n        target {\n          ... on Commit {\n            history(first: 1, after: $cursor) {\n              nodes {\n                oid\n              }\n              totalCount\n              pageInfo {\n                endCursor\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

var gql = function(param) {
    var _param = _toArray(param), strings = _param.slice(0);
    for(var _len = arguments.length, vars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        vars[_key - 1] = arguments[_key];
    }
    if (!strings.length) return "";
    var parts = [
        strings.shift()
    ];
    for(var idx in strings){
        parts.push("".concat(vars[idx]));
        parts.push(strings[idx]);
    }
    return parts.join("");
};
var query = gql(_templateObject());
var getHistory = function() {
    var _ref = get_history_asyncToGenerator(function() {
        var cursor, _ref, _ref_repository, _ref_repository_ref, history;
        var _arguments = arguments;
        return get_history_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cursor = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : null;
                    return [
                        4,
                        context/* octo.graphql */.NR.graphql(query, {
                            owner: context/* owner */.cR,
                            repo: context/* repo */.O9,
                            cursor: cursor,
                            branch: "main"
                        })
                    ];
                case 1:
                    _ref = _state.sent(), _ref_repository = _ref.repository, _ref_repository_ref = _ref_repository.ref, history = _ref_repository_ref.target.history;
                    return [
                        2,
                        history
                    ];
            }
        });
    });
    return function getHistory() {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const get_history = (getHistory);

;// CONCATENATED MODULE: ./dist/util/get-first-commit.js
function get_first_commit_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function get_first_commit_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function get_first_commit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function get_first_commit_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                get_first_commit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                get_first_commit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function get_first_commit_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return get_first_commit_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || get_first_commit_unsupportedIterableToArray(arr, i) || get_first_commit_nonIterableRest();
}
function get_first_commit_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return get_first_commit_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return get_first_commit_arrayLikeToArray(o, minLen);
}
var get_first_commit_generator = undefined && undefined.__generator || function(thisArg, body) {
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

var getFirstCommit = function() {
    var _ref = get_first_commit_asyncToGenerator(function() {
        var _ref, totalCount, endCursor, nodes, _endCursor_split, hash, _ref1, _ref_nodes, commit;
        return get_first_commit_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        get_history()
                    ];
                case 1:
                    _ref = _state.sent(), totalCount = _ref.totalCount, endCursor = _ref.pageInfo.endCursor, nodes = _ref.nodes;
                    if (!(totalCount > 1)) return [
                        3,
                        3
                    ];
                    _endCursor_split = _slicedToArray(endCursor.split(" "), 1), hash = _endCursor_split[0];
                    return [
                        4,
                        get_history("".concat(hash, " ").concat(totalCount - 2))
                    ];
                case 2:
                    _ref1 = _state.sent(), _ref_nodes = _slicedToArray(_ref1.nodes, 1), commit = _ref_nodes[0];
                    return [
                        2,
                        commit
                    ];
                case 3:
                    return [
                        2,
                        nodes[0]
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function getFirstCommit() {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const get_first_commit = (getFirstCommit);

;// CONCATENATED MODULE: ./dist/util/get-latest-release.js
function get_latest_release_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function get_latest_release_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function get_latest_release_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function get_latest_release_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                get_latest_release_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                get_latest_release_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function get_latest_release_iterableToArrayLimit(arr, i) {
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
function get_latest_release_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function get_latest_release_slicedToArray(arr, i) {
    return get_latest_release_arrayWithHoles(arr) || get_latest_release_iterableToArrayLimit(arr, i) || get_latest_release_unsupportedIterableToArray(arr, i) || get_latest_release_nonIterableRest();
}
function get_latest_release_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return get_latest_release_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return get_latest_release_arrayLikeToArray(o, minLen);
}
var get_latest_release_generator = undefined && undefined.__generator || function(thisArg, body) {
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

var getLatestRelease = function() {
    var _ref = get_latest_release_asyncToGenerator(function() {
        var includePrerelease, _ref, _ref_data, release, _ref1, release1, e;
        var _arguments = arguments;
        return get_latest_release_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    includePrerelease = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : true;
                    if (!includePrerelease) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        context/* octo.rest.repos.listReleases */.NR.rest.repos.listReleases({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            per_page: 1
                        })
                    ];
                case 1:
                    _ref = _state.sent(), _ref_data = get_latest_release_slicedToArray(_ref.data, 1), release = _ref_data[0];
                    return [
                        2,
                        release
                    ];
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        context/* octo.rest.repos.getLatestRelease */.NR.rest.repos.getLatestRelease({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR
                        })
                    ];
                case 3:
                    _ref1 = _state.sent(), release1 = _ref1.data;
                    return [
                        2,
                        release1
                    ];
                case 4:
                    e = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function getLatestRelease() {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const get_latest_release = (getLatestRelease);

;// CONCATENATED MODULE: ./dist/util/get-message.js
function get_message_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function get_message_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function get_message_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function get_message_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                get_message_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                get_message_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function get_message_iterableToArrayLimit(arr, i) {
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
function get_message_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function get_message_slicedToArray(arr, i) {
    return get_message_arrayWithHoles(arr) || get_message_iterableToArrayLimit(arr, i) || get_message_unsupportedIterableToArray(arr, i) || get_message_nonIterableRest();
}
function get_message_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return get_message_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return get_message_arrayLikeToArray(o, minLen);
}
var get_message_generator = undefined && undefined.__generator || function(thisArg, body) {
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




var capitalise = function(str) {
    var _str_at;
    return "".concat(((_str_at = str.at(0)) === null || _str_at === void 0 ? void 0 : _str_at.toUpperCase()) || "").concat(str.slice(1));
};
var makeGithubReleaseMessage = function(stats) {
    return "\n".concat(Object.entries(stats.pulls).map(function(param) {
        var _param = get_message_slicedToArray(param, 2), key = _param[0], pulls = _param[1];
        return "\n### ".concat(capitalise(key), " Changes\n\n").concat(pulls.map(function(param) {
            var title = param.title;
            return "- ".concat(title);
        }).join("\n"), "\n");
    }).join(""), "\n### Credits\n").concat(Array.from(stats.authors).map(function(author) {
        return "@".concat(author);
    }).join(", "), "\n").trim();
};
var getReleaseMessage = function() {
    var _ref = get_message_asyncToGenerator(function(prerelease) {
        var latestRelease, compareCommit, _tmp, stats;
        return get_message_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        get_latest_release(prerelease)
                    ];
                case 1:
                    latestRelease = _state.sent();
                    _tmp = (latestRelease === null || latestRelease === void 0 ? void 0 : latestRelease.target_commitish) || context/* initial_commit */.sS;
                    if (_tmp) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        get_first_commit()
                    ];
                case 2:
                    _tmp = _state.sent().oid;
                    _state.label = 3;
                case 3:
                    compareCommit = _tmp;
                    return [
                        4,
                        collect_commits(context/* commit_hash */.hl, compareCommit)
                    ];
                case 4:
                    stats = _state.sent();
                    return [
                        2,
                        {
                            message: makeGithubReleaseMessage(stats),
                            release: latestRelease
                        }
                    ];
            }
        });
    });
    return function getReleaseMessage(prerelease) {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const get_message = (getReleaseMessage);


/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GITHUB_ACTION_USERNAME = "github-actions[bot]";
var isActionUser = function(user) {
    return (user === null || user === void 0 ? void 0 : user.login) === GITHUB_ACTION_USERNAME;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isActionUser);


/***/ })

};
;