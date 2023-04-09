/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../extension-polkagate/src/util/constants.tsx":
/*!*****************************************************!*\
  !*** ../extension-polkagate/src/util/constants.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUCTION_GRACE_PERIOD": () => (/* binding */ AUCTION_GRACE_PERIOD),
/* harmony export */   "BALANCES_VALIDITY_PERIOD": () => (/* binding */ BALANCES_VALIDITY_PERIOD),
/* harmony export */   "BLOCK_RATE": () => (/* binding */ BLOCK_RATE),
/* harmony export */   "CHAIN_PROXY_TYPES": () => (/* binding */ CHAIN_PROXY_TYPES),
/* harmony export */   "CONFIRMING_STATE": () => (/* binding */ CONFIRMING_STATE),
/* harmony export */   "CROWDLOANS_CHAINS": () => (/* binding */ CROWDLOANS_CHAINS),
/* harmony export */   "DATE_OPTIONS": () => (/* binding */ DATE_OPTIONS),
/* harmony export */   "DEFAULT_CHAIN_INDEX": () => (/* binding */ DEFAULT_CHAIN_INDEX),
/* harmony export */   "DEFAULT_CHAIN_NAME": () => (/* binding */ DEFAULT_CHAIN_NAME),
/* harmony export */   "DEFAULT_COIN": () => (/* binding */ DEFAULT_COIN),
/* harmony export */   "DEFAULT_FILTERS": () => (/* binding */ DEFAULT_FILTERS),
/* harmony export */   "DEFAULT_IDENTITY": () => (/* binding */ DEFAULT_IDENTITY),
/* harmony export */   "DEFAULT_LIMIT_OF_VALIDATORS_PER_OPERATOR": () => (/* binding */ DEFAULT_LIMIT_OF_VALIDATORS_PER_OPERATOR),
/* harmony export */   "DEFAULT_MAX_COMMISSION": () => (/* binding */ DEFAULT_MAX_COMMISSION),
/* harmony export */   "DEFAULT_POOL_FILTERS": () => (/* binding */ DEFAULT_POOL_FILTERS),
/* harmony export */   "DEFAULT_TOKEN_DECIMALS": () => (/* binding */ DEFAULT_TOKEN_DECIMALS),
/* harmony export */   "DEFAULT_VALIDATOR_COMMISSION_FILTER": () => (/* binding */ DEFAULT_VALIDATOR_COMMISSION_FILTER),
/* harmony export */   "DEVELOPMENT_ENDPOINT": () => (/* binding */ DEVELOPMENT_ENDPOINT),
/* harmony export */   "ENVIRONMENT": () => (/* binding */ ENVIRONMENT),
/* harmony export */   "EXTENSION_NAME": () => (/* binding */ EXTENSION_NAME),
/* harmony export */   "FLOATING_POINT_DIGIT": () => (/* binding */ FLOATING_POINT_DIGIT),
/* harmony export */   "GOVERNANCE_CHAINS": () => (/* binding */ GOVERNANCE_CHAINS),
/* harmony export */   "INITIAL_RECENT_CHAINS_GENESISHASH": () => (/* binding */ INITIAL_RECENT_CHAINS_GENESISHASH),
/* harmony export */   "MAX_AMOUNT_LENGTH": () => (/* binding */ MAX_AMOUNT_LENGTH),
/* harmony export */   "MAX_HISTORY_RECORD_TO_SHOW": () => (/* binding */ MAX_HISTORY_RECORD_TO_SHOW),
/* harmony export */   "MAX_NOMINATIONS": () => (/* binding */ MAX_NOMINATIONS),
/* harmony export */   "MAX_REWARDS_TO_SHOW": () => (/* binding */ MAX_REWARDS_TO_SHOW),
/* harmony export */   "MAX_VOTES": () => (/* binding */ MAX_VOTES),
/* harmony export */   "MILLISECONDS_TO_UPDATE": () => (/* binding */ MILLISECONDS_TO_UPDATE),
/* harmony export */   "MIN_EXTRA_BOND": () => (/* binding */ MIN_EXTRA_BOND),
/* harmony export */   "PASS_MAP": () => (/* binding */ PASS_MAP),
/* harmony export */   "PLUS_VERSION": () => (/* binding */ PLUS_VERSION),
/* harmony export */   "POLKADOT_COLOR": () => (/* binding */ POLKADOT_COLOR),
/* harmony export */   "PREFERRED_POOL_ID_ON_KUSAMA": () => (/* binding */ PREFERRED_POOL_ID_ON_KUSAMA),
/* harmony export */   "PREFERRED_POOL_ID_ON_POLKADOT": () => (/* binding */ PREFERRED_POOL_ID_ON_POLKADOT),
/* harmony export */   "PREFERRED_POOL_ID_ON_WESTEND": () => (/* binding */ PREFERRED_POOL_ID_ON_WESTEND),
/* harmony export */   "PREFERRED_POOL_NAME": () => (/* binding */ PREFERRED_POOL_NAME),
/* harmony export */   "RELAY_CHAINS": () => (/* binding */ RELAY_CHAINS),
/* harmony export */   "SELECTED_COLOR": () => (/* binding */ SELECTED_COLOR),
/* harmony export */   "SHORT_ADDRESS_CHARACTERS": () => (/* binding */ SHORT_ADDRESS_CHARACTERS),
/* harmony export */   "SOCIAL_RECOVERY_CHAINS": () => (/* binding */ SOCIAL_RECOVERY_CHAINS),
/* harmony export */   "STAKING_ACTIONS": () => (/* binding */ STAKING_ACTIONS),
/* harmony export */   "STAKING_CHAINS": () => (/* binding */ STAKING_CHAINS),
/* harmony export */   "STATES_NEEDS_MESSAGE": () => (/* binding */ STATES_NEEDS_MESSAGE),
/* harmony export */   "SYSTEM_SUGGESTION_TEXT": () => (/* binding */ SYSTEM_SUGGESTION_TEXT),
/* harmony export */   "TIME_TO_SHAKE_STAKE_ICON": () => (/* binding */ TIME_TO_SHAKE_STAKE_ICON),
/* harmony export */   "TOTAL_STAKE_HELPER_TEXT": () => (/* binding */ TOTAL_STAKE_HELPER_TEXT),
/* harmony export */   "TRANSACTION_HISTORY_DEFAULT_ROWS": () => (/* binding */ TRANSACTION_HISTORY_DEFAULT_ROWS),
/* harmony export */   "VOTE_MAP": () => (/* binding */ VOTE_MAP)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/util */ "../../node_modules/@polkadot/util/node_modules/bn.js/lib/bn.js");
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polkadot_util__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable header/header */

const EXTENSION_NAME = 'Polkagate';
const PREFERRED_POOL_NAME = EXTENSION_NAME;
const DEFAULT_CHAIN_INDEX = 1;
const DEFAULT_MAX_COMMISSION = 10;
const DEFAULT_LIMIT_OF_VALIDATORS_PER_OPERATOR = 2;
const MILLISECONDS_TO_UPDATE = 5 * 60 * 1000; // to update price
// export const EXTENSION_FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf2WHD0oVR0NS7tW6C1U025H1XBEZXqwxvFvPhcoFa18eHQiA/viewform';

const BALANCES_VALIDITY_PERIOD = 5 * 60 * 1000; // to show outdated balance i grey

const PLUS_VERSION = '0.44.1.19';
const ENVIRONMENT = 'production'; // development or production

const PREFERRED_POOL_ID_ON_WESTEND = new (_polkadot_util__WEBPACK_IMPORTED_MODULE_0___default())(6);
const PREFERRED_POOL_ID_ON_KUSAMA = undefined;
const PREFERRED_POOL_ID_ON_POLKADOT = undefined;
const DEVELOPMENT_ENDPOINT = 'wss://109.109.36.23:443';
const SELECTED_COLOR = '#fffbed';
const POLKADOT_COLOR = '#E6007A';
const AUCTION_GRACE_PERIOD = 27000; // blocks

const MAX_NOMINATIONS = 16;
const FLOATING_POINT_DIGIT = 4;
const BLOCK_RATE = 6; // sec

const DEFAULT_TOKEN_DECIMALS = 12;
const MIN_EXTRA_BOND = 1 / 10 ** FLOATING_POINT_DIGIT;
const DEFAULT_COIN = 'WND';
const DEFAULT_CHAIN_NAME = 'Westend';
const DEFAULT_VALIDATOR_COMMISSION_FILTER = 20;
const TRANSACTION_HISTORY_DEFAULT_ROWS = 6;
const SHORT_ADDRESS_CHARACTERS = 4;
const MAX_VOTES = 16;
const MAX_REWARDS_TO_SHOW = 100;
const MAX_HISTORY_RECORD_TO_SHOW = 40;
const MAX_AMOUNT_LENGTH = 15;
const TIME_TO_SHAKE_STAKE_ICON = 5000; // msec

const RELAY_CHAINS = [{
  name: 'Polkadot',
  symbol: 'DOT'
}, {
  name: 'Kusama',
  symbol: 'KSM'
}, {
  name: 'Westend',
  symbol: 'WND'
}];
const CROWDLOANS_CHAINS = ['0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // POLKADOT
'0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // KUSAMA
];
const GOVERNANCE_CHAINS = ['0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // POLKADOT
'0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // KUSAMA
];
const SOCIAL_RECOVERY_CHAINS = ['0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e', // WESTEND
'0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // KUSAMA
]; // used to enable/disable staking icon in account page

const STAKING_CHAINS = ['0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // POLKADOT
'0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e', // WESTEND
'0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // KUSAMA
];
const INITIAL_RECENT_CHAINS_GENESISHASH = ['0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3', // POLKADOT
'0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e', // WESTEND
'0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe', // KUSAMA
'0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c' // ACALA
]; // used in history to categorize transactions

const STAKING_ACTIONS = ['Solo Staking', 'Pool Staking']; // export const STAKING_ACTIONS = ['bond', 'unbond', 'bond_extra', 'nominate', 'redeem', 'stop_nominating', 'chill', 'tuneUp'];
// used in confirm page

const STATES_NEEDS_MESSAGE = ['withdrawUnbound', 'unstake', 'stopNominating', 'tuneUp'];
const CONFIRMING_STATE = ['fail', 'success', 'confirming'];
const PROXY_TYPE_POLKADOT = ['Any', 'NonTransfer', 'Staking', 'Governance', 'IdentityJudgement', 'CancelProxy', 'Auction'];
const PROXY_TYPE_KUSAMA = ['Any', 'NonTransfer', 'Staking', 'Society', 'Governance', 'IdentityJudgement', 'CancelProxy', 'Auction'];
const PROXY_TYPE_WESTEND = ['Any', 'NonTransfer', 'Staking', 'SudoBalances', 'IdentityJudgement', 'CancelProxy', 'Auction'];
const CHAIN_PROXY_TYPES = {
  Kusama: PROXY_TYPE_KUSAMA,
  Polkadot: PROXY_TYPE_POLKADOT,
  Westend: PROXY_TYPE_WESTEND
};
const DEFAULT_IDENTITY = {
  // 'judgments': [],
  //  'deposit':202580000000,
  info: {
    // 'additional':[],
    display: null,
    legal: null,
    web: null,
    //  'riot':{'none':null},
    email: null,
    //  'pgpFingerprint':null,
    //  'image':{'none':null},
    twitter: null
  }
};
const VOTE_MAP = {
  AYE: 1,
  NAY: 0
};
const PASS_MAP = {
  EMPTY: 0,
  INCORRECT: -1,
  // eslint-disable-next-line sort-keys
  CORRECT: 1
}; // export const DATE_OPTIONS = { year: '2-digit', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };

const DATE_OPTIONS = {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};
const DEFAULT_FILTERS = {
  limitOfValidatorsPerOperator: {
    check: false,
    value: 2
  },
  maxCommission: {
    check: false,
    value: 30
  },
  noOversubscribed: false,
  noSlashed: false,
  noWaiting: false,
  sortBy: 'None (Default)',
  withIdentity: false
};
const DEFAULT_POOL_FILTERS = {
  hasNominated: {
    check: false,
    value: 10
  },
  hasVerifiedIdentity: false,
  membersMoreThan: {
    check: false,
    value: 100
  },
  sortBy: 'Index (Default)',
  stakedMoreThan: {
    check: false,
    value: 200
  } // TOKEN

};
const TOTAL_STAKE_HELPER_TEXT = 'Your total amount of stake after completing this transaction.';
const SYSTEM_SUGGESTION_TEXT = 'Our system suggests trusted, high return, low commission validators. Polkagate assumes no responsibility or liability for any misconduct resulting from the future actions of the validators.'; // which not slashed before.' //TODO: add a disclaimer to the text too

/***/ }),

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

/***/ "../extension-polkagate/src/util/workers/getStakingConsts.js":
/*!*******************************************************************!*\
  !*** ../extension-polkagate/src/util/workers/getStakingConsts.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../extension-polkagate/src/util/constants.tsx");
/* harmony import */ var _getApi_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getApi.ts */ "../extension-polkagate/src/util/getApi.ts");
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable header/header */



async function getStackingConsts(endpoint) {
  try {
    var _apiAt$consts$staking;

    const api = await (0,_getApi_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint);
    const at = await api.rpc.chain.getFinalizedHead();
    const apiAt = await api.at(at);
    const maxNominations = ((_apiAt$consts$staking = apiAt.consts.staking.maxNominations) == null ? void 0 : _apiAt$consts$staking.toNumber()) || _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_NOMINATIONS;
    const maxNominatorRewardedPerValidator = apiAt.consts.staking.maxNominatorRewardedPerValidator.toNumber();
    const existentialDeposit = apiAt.consts.balances.existentialDeposit.toString();
    const bondingDuration = apiAt.consts.staking.bondingDuration.toNumber();
    const sessionsPerEra = apiAt.consts.staking.sessionsPerEra.toNumber();
    const epochDuration = apiAt.consts.babe.epochDuration.toNumber();
    const expectedBlockTime = api.consts.babe.expectedBlockTime.toNumber();
    const epochDurationInHours = epochDuration * expectedBlockTime / 3600000; // 1000 milSec * 60sec * 60min

    const [minNominatorBond, currentEraIndex] = await Promise.all([apiAt.query.staking.minNominatorBond(), api.query.staking.currentEra()]);
    const token = api.registry.chainTokens[0];
    return {
      bondingDuration,
      eraIndex: Number(currentEraIndex == null ? void 0 : currentEraIndex.toString(), '0'),
      existentialDeposit,
      maxNominations,
      maxNominatorRewardedPerValidator,
      minNominatorBond: minNominatorBond.toString(),
      token,
      unbondingDuration: bondingDuration * sessionsPerEra * epochDurationInHours / 24 // unbondingDuration in days

    };
  } catch (error) {
    console.log('something went wrong while getStackingConsts. err: ' + error);
    return null;
  }
}

onmessage = e => {
  const {
    endpoint
  } = e.data;
  getStackingConsts(endpoint).then(consts => {
    postMessage(consts);
  }).catch(console.error);
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_polkadot_api_promise_Api_js"], () => (__webpack_require__("../extension-polkagate/src/util/workers/getStakingConsts.js")))
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"extension-polkagate_src_util_workers_getStakingConsts_js": 1
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