!function(e){self.webpackChunk=function(t,r){for(var o in r)e[o]=r[o];for(;t.length;)n[t.pop()]=1};var t={},n={1:1},r={};var o={2:function(){return{}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];return t.push(Promise.resolve().then(function(){n[e]||importScripts(i.p+""+({}[e]||e)+".7698d67fc9e16d5126e8.worker.js")})),({0:[2]}[e]||[]).forEach(function(e){var n=r[e];if(n)t.push(n);else{var s,u=o[e](),a=fetch(i.p+""+{2:"4ddb62f68e010568d94d"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)s=Promise.all([WebAssembly.compileStreaming(a),u]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)s=WebAssembly.instantiateStreaming(a,u);else{s=a.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,u)})}t.push(r[e]=s.then(function(t){return i.w[e]=(t.instance||t).exports}))}}),Promise.all(t)},i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.w={},i(i.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})};onmessage=e=>{!function(e){r(this,void 0,void 0,function*(){const t=yield n.e(0).then(n.bind(null,1));if(/\*\s+\*/.test(e))return void postMessage("Parse error: Unexpected character '*'");const r=e.replace(/\s*([\+\-\*\/\%\!\(\)])\s*/g,"$1").trim();console.time("load input");const o=t.parse_integer(r);if(console.timeEnd("load input"),null==o)return void postMessage(`Parse error: ${t.parse_error_message(r)}`);console.time("trivial tests");const i=t.trivial_prime_test(o);if(console.timeEnd("trivial tests"),!i)return void postMessage("Result: Not prime");if(o.length<=2)return void postMessage("Result: Prime");console.time("Miller-Rabin test");const s=t.miller_rabin_test(o);if(console.timeEnd("Miller-Rabin test"),!s)return void postMessage("Result: Not prime");console.time("Lucas test");const u=t.extra_strong_lucas_test(o);console.timeEnd("Lucas test"),u?postMessage("Result: Prime"):postMessage("Result: Not prime")})}(e.data)}}]);