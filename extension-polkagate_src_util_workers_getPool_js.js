/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../extension-polkagate/src/util/getApi.ts":
/*!*************************************************!*\
  !*** ../extension-polkagate/src/util/getApi.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _polkadot_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/api */ "../../node_modules/@polkadot/api/node_modules/@polkadot/rpc-provider/ws/index.js");
/* harmony import */ var _polkadot_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/api */ "../../node_modules/@polkadot/api/promise/Api.js");
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable header/header */
// import Memoize from 'memoize-one';
// var memoize = require("memoizee");


async function getApi(endpoint) {
  const wsProvider = new _polkadot_api__WEBPACK_IMPORTED_MODULE_0__.WsProvider(endpoint);
  return await _polkadot_api__WEBPACK_IMPORTED_MODULE_1__.ApiPromise.create({
    provider: wsProvider
  });
} // export default getApi;
// export default memoize(getApi);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getApi);

/***/ }),

/***/ "../extension-polkagate/src/util/getPoolAccounts.ts":
/*!**********************************************************!*\
  !*** ../extension-polkagate/src/util/getPoolAccounts.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAccount": () => (/* binding */ createAccount),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "../../node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/string/toU8a.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/u8a/concat.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/toU8a.js");
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable header/header */


const EMPTY_H256 = new Uint8Array(32);
const MOD_PREFIX = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringToU8a)('modl');
function createAccount(api, poolId, index) {
  return api.registry.createType('AccountId32', (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.u8aConcat)(MOD_PREFIX, api.consts.nominationPools.palletId.toU8a(), new Uint8Array([index]), (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.bnToU8a)(poolId, {
    bitLength: 32
  }), EMPTY_H256)).toString();
}

function getPoolAccounts(api, poolId) {
  return {
    rewardId: createAccount(api, poolId, 1),
    stashId: createAccount(api, poolId, 0)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(getPoolAccounts));

/***/ }),

/***/ "../../node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**************************************************************!*\
  !*** ../../node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoizeOne)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}




/***/ }),

/***/ "?c114":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e5a1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "../extension-polkagate/src/util/workers/getPool.js":
/*!**********************************************************!*\
  !*** ../extension-polkagate/src/util/workers/getPool.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/min.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/bn/consts.js");
/* harmony import */ var _getApi_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getApi.ts */ "../extension-polkagate/src/util/getApi.ts");
/* harmony import */ var _getPoolAccounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getPoolAccounts */ "../extension-polkagate/src/util/getPoolAccounts.ts");
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable header/header */

/**
 * @description
 * get all information regarding a pool
 *
 * rewardPool.balance: The pool balance at the time of the last payout
 * rewardPool.totalEarnings: The total earnings ever at the time of the last payout
 */




async function getPool(endpoint, stakerAddress, id = undefined) {
  var _member$poolId$toNumb, _member$poolId;

  console.log(`getPool is called for ${stakerAddress} id:${id}`);
  const api = await (0,_getApi_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(endpoint);
  const token = api.registry.chainTokens[0];
  const decimal = api.registry.chainDecimals[0];
  const members = !id && (await api.query.nominationPools.poolMembers(stakerAddress));
  const member = members != null && members.isSome ? members.unwrap() : undefined;

  if (!member && !id) {
    console.log(`can not find member for ${stakerAddress} or id is :${id}`);
    return null; // user does not joined a pool yet. or pool id does not exist
  }

  const poolId = (_member$poolId$toNumb = member == null ? void 0 : (_member$poolId = member.poolId) == null ? void 0 : _member$poolId.toNumber()) != null ? _member$poolId$toNumb : id;
  const accounts = (0,_getPoolAccounts__WEBPACK_IMPORTED_MODULE_1__["default"])(api, poolId);

  if (!accounts) {
    console.log(`can not find a pool with id:${poolId}`);
    return null;
  }

  const [metadata, bondedPools, myClaimable, rewardPools, rewardIdBalance, stashIdAccount] = await Promise.all([api.query.nominationPools.metadata(poolId), api.query.nominationPools.bondedPools(poolId), api.call.nominationPoolsApi.pendingRewards(stakerAddress), api.query.nominationPools.rewardPools(poolId), api.query.system.account(accounts.rewardId), api.derive.staking.account(accounts.stashId)]);
  const unwrappedRewardPools = rewardPools.isSome ? rewardPools.unwrap() : null;
  const unwrappedBondedPool = bondedPools.isSome ? bondedPools.unwrap() : null;
  const poolRewardClaimable = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_2__.bnMax)(_polkadot_util__WEBPACK_IMPORTED_MODULE_3__.BN_ZERO, rewardIdBalance.data.free.sub(api.consts.balances.existentialDeposit));
  const rewardPool = {};

  if (unwrappedRewardPools) {
    rewardPool.balance = unwrappedRewardPools != null && unwrappedRewardPools.balance ? String(unwrappedRewardPools.balance) : undefined;
    rewardPool.points = unwrappedRewardPools != null && unwrappedRewardPools.points ? String(unwrappedRewardPools.points) : undefined;
    rewardPool.totalEarnings = unwrappedRewardPools != null && unwrappedRewardPools.totalEarnings ? String(unwrappedRewardPools.totalEarnings) : undefined;
  }

  const poolInfo = {
    accounts,
    bondedPool: unwrappedBondedPool,
    decimal,
    member,
    metadata: metadata.length ? metadata.isUtf8 ? metadata.toUtf8() : metadata.toString() : null,
    myClaimable: Number(myClaimable != null ? myClaimable : '0'),
    poolId,
    rewardClaimable: Number(poolRewardClaimable),
    rewardIdBalance: rewardIdBalance.data,
    rewardPool: unwrappedRewardPools,
    stashIdAccount,
    token
  };
  return JSON.stringify(poolInfo);
}

onmessage = e => {
  const {
    endpoint,
    id,
    stakerAddress
  } = e.data; // eslint-disable-next-line no-void

  void getPool(endpoint, stakerAddress, id).then(poolInfo => {
    postMessage(poolInfo);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_polkadot_api_promise_Api_js"], () => (__webpack_require__("../extension-polkagate/src/util/workers/getPool.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"extension-polkagate_src_util_workers_getPool_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_extension"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_extension"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_polkadot_api_promise_Api_js").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;