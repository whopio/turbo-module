"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPull": () => (/* binding */ createPull),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var semver_functions_inc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7205);
/* harmony import */ var semver_functions_inc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver_functions_inc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7501);
/* harmony import */ var _util_get_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(767);
/* harmony import */ var _util_is_action_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1514);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8089);
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
function _async_iterator(iterable) {
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
    return AsyncFromSyncIterator = function(s) {
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
    }, new AsyncFromSyncIterator(s);
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
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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





var runAction = function() {
    return _async_to_generator(function() {
        var fullReleaseTitle, prereleaseTitle, stale, stalePrerelease, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, pulls, _iteratorNormalCompletion, _didIteratorError1, _iteratorError1, _iterator1, _step1, pull, err, _ref, prereleasePull, fullPull;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fullReleaseTitle = (0,_shared__WEBPACK_IMPORTED_MODULE_3__/* .getFullReleaseTitle */ .n)();
                    prereleaseTitle = (0,_shared__WEBPACK_IMPORTED_MODULE_3__/* .getPrereleaseTitle */ .e)();
                    stale = [];
                    stalePrerelease = [];
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator(_context__WEBPACK_IMPORTED_MODULE_1__/* .octo.paginate.iterator */ .NR.paginate.iterator(_context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.pulls.list */ .NR.rest.pulls.list, {
                        repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                        owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                        state: 'open',
                        sort: 'created',
                        direction: 'desc',
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
                        5
                    ];
                    _value = _step.value;
                    pulls = _value.data;
                    _iteratorNormalCompletion = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = pulls[Symbol.iterator](); !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                            pull = _step1.value;
                            if ((0,_util_is_action_user__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(pull.user)) {
                                if (fullReleaseTitle === pull.title) stale.push(pull);
                                else if (prereleaseTitle === pull.title) stalePrerelease.push(pull);
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    // close stale PRs and delete the branches
                    return [
                        4,
                        Promise.all(_to_consumable_array(stale).concat(_to_consumable_array(stalePrerelease)).map(function(stalePull) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.pulls.update */ .NR.rest.pulls.update({
                                                    repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                                                    owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                                                    pull_number: stalePull.number,
                                                    state: 'closed'
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.git.deleteRef */ .NR.rest.git.deleteRef({
                                                    repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                                                    owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                                                    ref: 'heads/' + stalePull.head.ref
                                                })
                                            ];
                                        case 2:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }))
                    ];
                case 13:
                    _state.sent();
                    return [
                        4,
                        Promise.all([
                            createPull(true),
                            createPull(false)
                        ])
                    ];
                case 14:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), prereleasePull = _ref[0], fullPull = _ref[1];
                    // add comments to closed PRs that link to the newly created PRs
                    return [
                        4,
                        Promise.all([
                            Promise.all(stalePrerelease.map(function(pull) {
                                return addCommentToClosed(pull.number, prereleasePull.number);
                            })),
                            Promise.all(stale.map(function(pull) {
                                return addCommentToClosed(pull.number, fullPull.number);
                            }))
                        ])
                    ];
                case 15:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
};
var addCommentToClosed = function(number, replacement) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.issues.createComment */ .NR.rest.issues.createComment({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            issue_number: number,
                            body: "Closing stale auto-release PR in favor of #".concat(replacement)
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
};
var pull_labels = [
    'auto-release-pr',
    'keep up-to-date'
];
var createPull = function(prerelease) {
    return _async_to_generator(function() {
        var title, releaseLabel, primaryVersionFile, _ref, content, packageJson, newVersion, _ref1, _ref_data, sha, shortSha, branch, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, versionFile, filePath, _ref2, fileContent, filePackageJson, err, message, _ref3, pull, _$err, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    title = prerelease ? (0,_shared__WEBPACK_IMPORTED_MODULE_3__/* .getPrereleaseTitle */ .e)() : (0,_shared__WEBPACK_IMPORTED_MODULE_3__/* .getFullReleaseTitle */ .n)();
                    releaseLabel = prerelease ? "releases: ".concat(_context__WEBPACK_IMPORTED_MODULE_1__/* .prereleaseType */ .kD) : 'releases: patch';
                    // Get the first version file to determine current version
                    primaryVersionFile = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .withWorkingDir */ .QV)(_context__WEBPACK_IMPORTED_MODULE_1__/* .versionFiles[0] */ .dm[0]);
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.repos.getContent */ .NR.rest.repos.getContent({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            path: primaryVersionFile
                        })
                    ];
                case 1:
                    _ref = _state.sent(), content = _ref.data;
                    if (!('content' in content)) throw new Error('Could not get package.json contents');
                    packageJson = JSON.parse(Buffer.from(content.content, 'base64').toString());
                    if (!packageJson.version || packageJson.version.startsWith('0.0.0')) {
                        newVersion = prerelease ? "0.0.1-".concat(_context__WEBPACK_IMPORTED_MODULE_1__/* .prereleaseType */ .kD, ".0") : '0.0.1';
                    } else {
                        newVersion = prerelease ? semver_functions_inc__WEBPACK_IMPORTED_MODULE_0___default()(packageJson.version, 'prerelease', _context__WEBPACK_IMPORTED_MODULE_1__/* .prereleaseType */ .kD) : semver_functions_inc__WEBPACK_IMPORTED_MODULE_0___default()(packageJson.version, 'patch');
                    }
                    if (!newVersion) throw new Error('Could not increase version');
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.git.getRef */ .NR.rest.git.getRef({
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            ref: "heads/".concat(_context__WEBPACK_IMPORTED_MODULE_1__/* .baseBranch */ .a2)
                        })
                    ];
                case 2:
                    _ref1 = _state.sent(), _ref_data = _ref1.data, sha = _ref_data.object.sha;
                    shortSha = sha.slice(0, 6) + sha.slice(-6);
                    branch = prerelease ? "turbo-module/release-".concat(shortSha, "-").concat(_context__WEBPACK_IMPORTED_MODULE_1__/* .prereleaseType */ .kD) : "turbo-module/release-".concat(shortSha);
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.git.createRef */ .NR.rest.git.createRef({
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            sha: sha,
                            ref: "refs/heads/".concat(branch)
                        })
                    ];
                case 3:
                    _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 4;
                case 4:
                    _state.trys.push([
                        4,
                        10,
                        11,
                        12
                    ]);
                    _iterator = _context__WEBPACK_IMPORTED_MODULE_1__/* .versionFiles */ .dm[Symbol.iterator]();
                    _state.label = 5;
                case 5:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        9
                    ];
                    versionFile = _step.value;
                    filePath = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .withWorkingDir */ .QV)(versionFile);
                    console.log("Updating version in ".concat(filePath, " to ").concat(newVersion));
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.repos.getContent */ .NR.rest.repos.getContent({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            path: filePath,
                            ref: branch
                        })
                    ];
                case 6:
                    _ref2 = _state.sent(), fileContent = _ref2.data;
                    if (!('content' in fileContent)) throw new Error("Could not get ".concat(filePath, " contents"));
                    filePackageJson = JSON.parse(Buffer.from(fileContent.content, 'base64').toString());
                    filePackageJson.version = newVersion;
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.repos.createOrUpdateFileContents */ .NR.rest.repos.createOrUpdateFileContents({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            path: filePath,
                            message: "release: ".concat(newVersion),
                            content: Buffer.from(JSON.stringify(filePackageJson, null, 2) + '\n').toString('base64'),
                            sha: fileContent.sha,
                            branch: branch
                        })
                    ];
                case 7:
                    _state.sent();
                    _state.label = 8;
                case 8:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        5
                    ];
                case 9:
                    return [
                        3,
                        12
                    ];
                case 10:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 11:
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
                case 12:
                    return [
                        4,
                        (0,_util_get_message__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(prerelease)
                    ];
                case 13:
                    message = _state.sent().message;
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.pulls.create */ .NR.rest.pulls.create({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            title: title,
                            body: message,
                            head: branch,
                            base: _context__WEBPACK_IMPORTED_MODULE_1__/* .baseBranch */ .a2
                        })
                    ];
                case 14:
                    _ref3 = _state.sent(), pull = _ref3.data;
                    _$err = 0;
                    _state.label = 15;
                case 15:
                    if (!(_$err < 5)) return [
                        3,
                        21
                    ];
                    _state.label = 16;
                case 16:
                    _state.trys.push([
                        16,
                        18,
                        ,
                        20
                    ]);
                    return [
                        4,
                        _context__WEBPACK_IMPORTED_MODULE_1__/* .octo.rest.issues.addLabels */ .NR.rest.issues.addLabels({
                            repo: _context__WEBPACK_IMPORTED_MODULE_1__/* .repo */ .O9,
                            owner: _context__WEBPACK_IMPORTED_MODULE_1__/* .owner */ .cR,
                            issue_number: pull.number,
                            labels: _to_consumable_array(pull_labels).concat([
                                releaseLabel
                            ])
                        })
                    ];
                case 17:
                    _state.sent();
                    return [
                        2,
                        pull
                    ];
                case 18:
                    e = _state.sent();
                    console.error(e);
                    _$err++;
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 300);
                        })
                    ];
                case 19:
                    _state.sent();
                    return [
                        3,
                        20
                    ];
                case 20:
                    return [
                        3,
                        15
                    ];
                case 21:
                    throw new Error('Could not add labels to PR');
            }
        });
    })();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runAction);


/***/ }),

/***/ 8089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getPrereleaseTitle),
/* harmony export */   "n": () => (/* binding */ getFullReleaseTitle)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7501);

var getFullReleaseTitle = function() {
    return '(turbo-module): release next version';
};
var getPrereleaseTitle = function() {
    return "(turbo-module): release next ".concat(_context__WEBPACK_IMPORTED_MODULE_0__/* .prereleaseType */ .kD, " version");
};


/***/ })

};
;