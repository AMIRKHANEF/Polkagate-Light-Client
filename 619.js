(()=>{var e,t,r,n,o={69314:()=>{},18983:()=>{},55734:(e,t,r)=>{"use strict";var n=r(60576),o=r(38090),i=r(13249),a=r(6222);onmessage=e=>{const{endpoint:t}=e.data;(async function(e){console.log("getting validators info from ",e);try{const t=await async function(e){if(e.startsWith("wss")){const t=new n.U(e);return await o.G.create({provider:t})}return await async function(e){const t=e=>{switch(e){case"Polkadot":return i.WellKnownChain.polkadot;case"Kusama":return i.WellKnownChain.ksmcc3;case"Westend":return i.WellKnownChain.westend2;default:return""}};try{if(console.log("connecting through light client"),t(e).length){const r=new a.x(i,t(e));return await r.connect(),await o.G.create({provider:r})}return Promise.reject(Error)}catch(e){return console.error(e),console.log("faillll"),Promise.reject(e)}}(e)}(e),r=await t.rpc.chain.getFinalizedHead(),c=await t.at(r),[s,l,f]=await Promise.all([t.derive.staking.electedInfo({withController:!0,withDestination:!0,withExposure:!0,withPrefs:!0,withNominations:!0,withLedger:!0}),t.derive.staking.waitingInfo({withController:!0,withDestination:!0,withExposure:!0,withPrefs:!0,withNominations:!0,withLedger:!0}),c.query.staking.currentEra()]),u=s.info.filter((e=>s.nextElected.find((t=>String(t)===String(e.accountId)))));return JSON.parse(JSON.stringify({current:u,eraIndex:Number(f),waiting:l.info}))}catch(e){return console.log("something went wrong while getting validators info, err:",e),null}})(t).then((e=>{postMessage(e)}))}}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,a.x=()=>{var e=a.O(void 0,[33],(()=>a(55734)));return a.O(e)},e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],c=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(f--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={619:1};a.f.i=(t,r)=>{e[t]||importScripts(a.p+a.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[n,o,i]=t;for(var c in o)a.o(o,c)&&(a.m[c]=o[c]);for(i&&i(a);n.length;)e[n.pop()]=1;r(t)}})(),n=a.x,a.x=()=>a.e(33).then(n),a.x()})();