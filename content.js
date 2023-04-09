/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../extension-base/src/defaults.ts":
/*!*****************************************!*\
  !*** ../extension-base/src/defaults.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_PATH": () => (/* binding */ ALLOWED_PATH),
/* harmony export */   "EXTENSION_PREFIX": () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   "MESSAGE_ORIGIN_CONTENT": () => (/* binding */ MESSAGE_ORIGIN_CONTENT),
/* harmony export */   "MESSAGE_ORIGIN_PAGE": () => (/* binding */ MESSAGE_ORIGIN_PAGE),
/* harmony export */   "PASSWORD_EXPIRY_MIN": () => (/* binding */ PASSWORD_EXPIRY_MIN),
/* harmony export */   "PASSWORD_EXPIRY_MS": () => (/* binding */ PASSWORD_EXPIRY_MS),
/* harmony export */   "PHISHING_PAGE_REDIRECT": () => (/* binding */ PHISHING_PAGE_REDIRECT),
/* harmony export */   "PORT_CONTENT": () => (/* binding */ PORT_CONTENT),
/* harmony export */   "PORT_EXTENSION": () => (/* binding */ PORT_EXTENSION)
/* harmony export */ });
// Copyright 2019-2023 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ALLOWED_PATH = ['/', '/account/import-ledger', '/account/restore-json'];
const PHISHING_PAGE_REDIRECT = '/phishing-page-detected';
const EXTENSION_PREFIX = ({"NODE_ENV":"production"}).EXTENSION_PREFIX || '';
const PORT_CONTENT = `${EXTENSION_PREFIX}content`;
const PORT_EXTENSION = `${EXTENSION_PREFIX}extension`;
const MESSAGE_ORIGIN_PAGE = `${EXTENSION_PREFIX}page`;
const MESSAGE_ORIGIN_CONTENT = `${EXTENSION_PREFIX}content`;
const PASSWORD_EXPIRY_MIN = 15;
const PASSWORD_EXPIRY_MS = PASSWORD_EXPIRY_MIN * 60 * 1000;


/***/ }),

/***/ "../extension-inject/src/chrome.ts":
/*!*****************************************!*\
  !*** ../extension-inject/src/chrome.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chrome": () => (/* binding */ chrome)
/* harmony export */ });
/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/x-global */ "../../node_modules/@polkadot/x-global/index.js");
// Copyright 2019-2023 @polkadot/extension-inject authors & contributors
// SPDX-License-Identifier: Apache-2.0

const chrome = (0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.extractGlobal)('chrome', _polkadot_x_global__WEBPACK_IMPORTED_MODULE_0__.xglobal.browser);

/***/ }),

/***/ "../../node_modules/@polkadot/x-global/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@polkadot/x-global/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeGlobal": () => (/* binding */ exposeGlobal),
/* harmony export */   "extractGlobal": () => (/* binding */ extractGlobal),
/* harmony export */   "packageInfo": () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo),
/* harmony export */   "xglobal": () => (/* binding */ xglobal)
/* harmony export */ });
/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ "../../node_modules/@polkadot/x-global/packageInfo.js");
// Copyright 2017-2022 @polkadot/x-global authors & contributors
// SPDX-License-Identifier: Apache-2.0



// Ensure that we are able to run this without any @types/node definitions
// and without having lib: ['dom'] in our TypeScript configuration
// (may not be available in all environments, e.g. Deno springs to mind)

function evaluateThis(fn) {
  return fn('return this');
}
const xglobal = typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : evaluateThis(Function);
function extractGlobal(name, fallback) {
  // Not quite sure why this is here - snuck in with TS 4.7.2 with no real idea
  // (as of now) as to why this looks like an "any" when we do cast it to a T
  //
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return typeof xglobal[name] === 'undefined' ? fallback : xglobal[name];
}
function exposeGlobal(name, fallback) {
  if (typeof xglobal[name] === 'undefined') {
    xglobal[name] = fallback;
  }
}

/***/ }),

/***/ "../../node_modules/@polkadot/x-global/packageInfo.js":
/*!************************************************************!*\
  !*** ../../node_modules/@polkadot/x-global/packageInfo.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageInfo": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2022 @polkadot/x-global authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit, auto-generated by @polkadot/dev

const packageInfo = {
  name: '@polkadot/x-global',
  path: ( true) ? new URL("file:///H:/github%20desktop/polkagate-extension/node_modules/@polkadot/x-global/packageInfo.js").pathname.substring(0, new URL("file:///H:/github%20desktop/polkagate-extension/node_modules/@polkadot/x-global/packageInfo.js").pathname.lastIndexOf('/') + 1) : 0,
  type: 'esm',
  version: '10.2.1'
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polkadot_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/extension-base/defaults */ "../extension-base/src/defaults.ts");
/* harmony import */ var _polkadot_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/extension-inject/chrome */ "../extension-inject/src/chrome.ts");
// Copyright 2019-2023 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

 // connect to the extension

const port = _polkadot_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__.chrome.runtime.connect({
  name: _polkadot_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.PORT_CONTENT
}); // send any messages from the extension back to the page

port.onMessage.addListener(data => {
  window.postMessage({ ...data,
    origin: _polkadot_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_CONTENT
  }, '*');
}); // all messages from the page, pass them to the extension

window.addEventListener('message', ({
  data,
  source
}) => {
  // only allow messages from our window, by the inject
  if (source !== window || data.origin !== _polkadot_extension_base_defaults__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_ORIGIN_PAGE) {
    return;
  }

  port.postMessage(data);
}); // inject our data injector

const script = document.createElement('script');
script.src = _polkadot_extension_inject_chrome__WEBPACK_IMPORTED_MODULE_0__.chrome.runtime.getURL('page.js');

script.onload = () => {
  // remove the injecting tag when loaded
  if (script.parentNode) {
    script.parentNode.removeChild(script);
  }
};

(document.head || document.documentElement).appendChild(script);
})();

/******/ })()
;