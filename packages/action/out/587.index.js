"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

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
/* harmony export */   "pE": () => (/* binding */ maxChangelogCommits),
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
var maxChangelogCommits = parseInt((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('max-changelog-commits') || '100', 10);
// Helper to join working directory with a path
var withWorkingDir = function(path) {
    if (workingDirectory === '.') return path;
    return "".concat(workingDirectory, "/").concat(path);
};


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ type)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js
var semver = __webpack_require__(4122);
// EXTERNAL MODULE: ./dist/context.js
var context = __webpack_require__(7501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/minimatch@5.1.6/node_modules/minimatch/minimatch.js
var minimatch = __webpack_require__(3849);
// EXTERNAL MODULE: ./dist/util/get-file.js
var get_file = __webpack_require__(2703);
;// CONCATENATED MODULE: ./dist/util/get-codeowners.js
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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


var readCodeOwnersFile = function() {
    return _async_to_generator(function() {
        var content;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,get_file/* default */.ZP)('.github/CODEOWNERS')
                    ];
                case 1:
                    content = _state.sent().content;
                    return [
                        2,
                        Buffer.from(content, 'base64').toString()
                    ];
            }
        });
    })();
};
var getCodeOwners = function(file) {
    return _async_to_generator(function() {
        var lines, owners, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, pattern, codeowners;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        readCodeOwnersFile()
                    ];
                case 1:
                    lines = _state.sent().split('\n').map(function(line) {
                        return line.split(' ').map(function(part) {
                            return part.trim();
                        }).filter(Boolean);
                    });
                    owners = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = lines[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            _step_value = _to_array(_step.value), pattern = _step_value[0], codeowners = _step_value.slice(1);
                            if (!pattern) continue;
                            if (pattern === '*') owners = codeowners;
                            else if ((0,minimatch.match)([
                                file
                            ], pattern).length) owners = codeowners;
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
                        2,
                        owners
                    ];
            }
        });
    })();
};
/* harmony default export */ const get_codeowners = (getCodeOwners);

;// CONCATENATED MODULE: ./dist/release-pull/type.js
function type_array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function type_array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function type_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function type_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                type_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                type_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function type_non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return type_array_with_holes(arr) || _iterable_to_array_limit(arr, i) || type_unsupported_iterable_to_array(arr, i) || type_non_iterable_rest();
}
function type_unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return type_array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return type_array_like_to_array(o, minLen);
}
function type_ts_generator(thisArg, body) {
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



var types = [
    'patch',
    'minor',
    'major'
];
var getPackageJson = function(path, ref) {
    return type_async_to_generator(function() {
        var _ref, content;
        return type_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        context/* octo.rest.repos.getContent */.NR.rest.repos.getContent({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            path: path,
                            ref: ref
                        })
                    ];
                case 1:
                    _ref = _state.sent(), content = _ref.data;
                    if ('content' in content) {
                        return [
                            2,
                            {
                                content: JSON.parse(Buffer.from(content.content, 'base64').toString()),
                                sha: content.sha
                            }
                        ];
                    }
                    throw new Error("Could not load ".concat(path));
            }
        });
    })();
};
var performUpdate = function(type) {
    return type_async_to_generator(function() {
        var _ref, _ref_data, labels, _ref_data_head, branch, releaseTypeLabel, current_type, primaryVersionFile, _ref1, mainPackageJson, currentVersion, newVersion, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, versionFile, filePath, _ref2, currentPackageJson, packageSha, err, promises;
        return type_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!context/* target_issue */.PX) throw new Error('Expected Action to run on "issue_comment"');
                    return [
                        4,
                        context/* octo.rest.pulls.get */.NR.rest.pulls.get({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            pull_number: context/* target_issue.number */.PX.number
                        })
                    ];
                case 1:
                    _ref = _state.sent(), _ref_data = _ref.data, labels = _ref_data.labels, _ref_data_head = _ref_data.head, branch = _ref_data_head.ref;
                    releaseTypeLabel = labels.find(function(param) {
                        var name = param.name;
                        return name.startsWith('releases: ');
                    });
                    current_type = releaseTypeLabel === null || releaseTypeLabel === void 0 ? void 0 : releaseTypeLabel.name.replace('releases: ', '');
                    // Skip if it's a prerelease PR or already the requested type
                    if (current_type === context/* prereleaseType */.kD || type === current_type) return [
                        2
                    ];
                    primaryVersionFile = (0,context/* withWorkingDir */.QV)(context/* versionFiles.0 */.dm[0]);
                    return [
                        4,
                        getPackageJson(primaryVersionFile, context/* baseBranch */.a2)
                    ];
                case 2:
                    _ref1 = _state.sent(), mainPackageJson = _ref1.content;
                    currentVersion = mainPackageJson.version.startsWith('0.0.0') ? '0.0.0' : mainPackageJson.version;
                    newVersion = (0,semver.inc)(currentVersion, type);
                    if (!newVersion) throw new Error("Could not increase ".concat(type, " for ").concat(currentVersion));
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        9,
                        10,
                        11
                    ]);
                    _iterator = context/* versionFiles */.dm[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        8
                    ];
                    versionFile = _step.value;
                    filePath = (0,context/* withWorkingDir */.QV)(versionFile);
                    return [
                        4,
                        getPackageJson(filePath, branch)
                    ];
                case 5:
                    _ref2 = _state.sent(), currentPackageJson = _ref2.content, packageSha = _ref2.sha;
                    if (!(currentPackageJson.version !== newVersion)) return [
                        3,
                        7
                    ];
                    currentPackageJson.version = newVersion;
                    return [
                        4,
                        context/* octo.rest.repos.createOrUpdateFileContents */.NR.rest.repos.createOrUpdateFileContents({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            path: filePath,
                            message: "release ".concat(type, " ").concat(newVersion),
                            content: Buffer.from(JSON.stringify(currentPackageJson, null, 2) + '\n').toString('base64'),
                            sha: packageSha,
                            branch: branch
                        })
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        11
                    ];
                case 10:
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
                case 11:
                    promises = [
                        context/* octo.rest.issues.addLabels */.NR.rest.issues.addLabels({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            issue_number: context/* target_issue.number */.PX.number,
                            labels: [
                                "releases: ".concat(type)
                            ]
                        })
                    ];
                    if (releaseTypeLabel) promises.push(context/* octo.rest.issues.removeLabel */.NR.rest.issues.removeLabel({
                        repo: context/* repo */.O9,
                        owner: context/* owner */.cR,
                        issue_number: context/* target_issue.number */.PX.number,
                        name: releaseTypeLabel.name
                    }));
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 12:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
};
var teamOwnershipRegex = /^@(.*)\/(.*)$/;
var runAction = function() {
    return type_async_to_generator(function() {
        var _ref, comment, packageCodeOwners, type, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, packageCodeOwner, _comment_user, _ref1, org, team_slug, _ref2, state, unused, err;
        return type_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!context/* target_comment */.RL) throw new Error('Expected Action to run on "issue_comment"');
                    return [
                        4,
                        context/* octo.rest.issues.getComment */.NR.rest.issues.getComment({
                            repo: context/* repo */.O9,
                            owner: context/* owner */.cR,
                            comment_id: context/* target_comment.id */.RL.id
                        })
                    ];
                case 1:
                    _ref = _state.sent(), comment = _ref.data;
                    if (!(comment.body && types.includes(comment.body.slice(1)))) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        get_codeowners('/package.json')
                    ];
                case 2:
                    packageCodeOwners = _state.sent();
                    type = comment.body.slice(1);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        14,
                        15,
                        16
                    ]);
                    _iterator = packageCodeOwners[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        13
                    ];
                    packageCodeOwner = _step.value;
                    if (!(teamOwnershipRegex.test(packageCodeOwner) && comment.user)) return [
                        3,
                        10
                    ];
                    _ref1 = _sliced_to_array(teamOwnershipRegex.exec(packageCodeOwner) || [], 3), org = _ref1[1], team_slug = _ref1[2];
                    if (!org || !team_slug) return [
                        3,
                        12
                    ];
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        7,
                        ,
                        8
                    ]);
                    return [
                        4,
                        context/* octo.rest.teams.getMembershipForUserInOrg */.NR.rest.teams.getMembershipForUserInOrg({
                            team_slug: team_slug,
                            org: org,
                            username: comment.user.login
                        })
                    ];
                case 6:
                    _ref2 = _state.sent(), state = _ref2.data.state;
                    if (state !== 'active') return [
                        3,
                        12
                    ];
                    return [
                        3,
                        8
                    ];
                case 7:
                    unused = _state.sent();
                    return [
                        3,
                        12
                    ];
                case 8:
                    return [
                        4,
                        performUpdate(type)
                    ];
                case 9:
                    _state.sent();
                    return [
                        2
                    ];
                case 10:
                    if (!(packageCodeOwner === "@".concat((_comment_user = comment.user) === null || _comment_user === void 0 ? void 0 : _comment_user.login))) return [
                        3,
                        12
                    ];
                    return [
                        4,
                        performUpdate(type)
                    ];
                case 11:
                    _state.sent();
                    return [
                        2
                    ];
                case 12:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        16
                    ];
                case 15:
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
                case 16:
                    return [
                        2
                    ];
            }
        });
    })();
};
/* harmony default export */ const type = (runAction);


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


/***/ })

};
;