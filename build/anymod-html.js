var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var n,o=t(function(t,n){t.exports=function(){function t(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=0,r=void 0,s=void 0,i=function(e,t){f[o]=e,f[o+1]=t,2===(o+=2)&&(s?s(h):v())},a="undefined"!=typeof window?window:void 0,d=a||{},c=d.MutationObserver||d.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var e=setTimeout;return function(){return e(h,1)}}var f=new Array(1e3);function h(){for(var e=0;e<o;e+=2)(0,f[e])(f[e+1]),f[e]=void 0,f[e+1]=void 0;o=0}var y,m,g,A,v=void 0;function w(e,t){var n=this,o=new this.constructor(_);void 0===o[b]&&C(o);var r=n._state;if(r){var s=arguments[r-1];i(function(){return E(r,o,s,n._result)})}else L(n,o,e,t);return o}function M(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(_);return P(t,e),t}u?v=function(){return process.nextTick(h)}:c?(m=0,g=new c(h),A=document.createTextNode(""),g.observe(A,{characterData:!0}),v=function(){A.data=m=++m%2}):l?((y=new MessageChannel).port1.onmessage=h,v=function(){return y.port2.postMessage(0)}):v=void 0===a?function(){try{var e=Function("return this")().require("vertx");return void 0!==(r=e.runOnLoop||e.runOnContext)?function(){r(h)}:p()}catch(e){return p()}}():p();var b=Math.random().toString(36).substring(2);function _(){}function O(e,n,o){n.constructor===e.constructor&&o===w&&n.constructor.resolve===M?function(e,t){1===t._state?j(e,t._result):2===t._state?x(e,t._result):L(t,void 0,function(t){return P(e,t)},function(t){return x(e,t)})}(e,n):void 0===o?j(e,n):t(o)?function(e,t,n){i(function(e){var o=!1,r=function(n,r,s,i){try{n.call(r,function(n){o||(o=!0,t!==n?P(e,n):j(e,n))},function(t){o||(o=!0,x(e,t))})}catch(e){return e}}(n,t);!o&&r&&(o=!0,x(e,r))},e)}(e,n,o):j(e,n)}function P(e,t){if(e===t)x(e,new TypeError("You cannot resolve a promise with itself"));else if(function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}(t)){var n=void 0;try{n=t.then}catch(t){return void x(e,t)}O(e,t,n)}else j(e,t)}function k(e){e._onerror&&e._onerror(e._result),S(e)}function j(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&i(S,e))}function x(e,t){void 0===e._state&&(e._state=2,e._result=t,i(k,e))}function L(e,t,n,o){var r=e._subscribers,s=r.length;e._onerror=null,r[s]=t,r[s+1]=n,r[s+2]=o,0===s&&e._state&&i(S,e)}function S(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var o=void 0,r=void 0,s=e._result,i=0;i<t.length;i+=3)r=t[i+n],(o=t[i])?E(n,o,r,s):r(s);e._subscribers.length=0}}function E(e,n,o,r){var s=t(o),i=void 0,a=void 0,d=!0;if(s){try{i=o(r)}catch(e){d=!1,a=e}if(n===i)return void x(n,new TypeError("A promises callback cannot return that same promise."))}else i=r;void 0!==n._state||(s&&d?P(n,i):!1===d?x(n,a):1===e?j(n,i):2===e&&x(n,i))}var T=0;function C(e){e[b]=T++,e._state=void 0,e._result=void 0,e._subscribers=[]}var $=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(_),this.promise[b]||C(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&j(this.promise,this._result))):x(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,o=n.resolve;if(o===M){var r=void 0,s=void 0,i=!1;try{r=e.then}catch(e){i=!0,s=e}if(r===w&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===q){var a=new n(_);i?x(a,s):O(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(o(e),t)},e.prototype._settledAt=function(e,t,n){var o=this.promise;void 0===o._state&&(this._remaining--,2===e?x(o,n):this._result[t]=n),0===this._remaining&&j(o,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;L(e,void 0,function(e){return n._settledAt(1,t,e)},function(e){return n._settledAt(2,t,e)})},e}(),q=function(){function e(t){this[b]=T++,this._result=this._state=void 0,this._subscribers=[],_!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){try{t(function(t){P(e,t)},function(t){x(e,t)})}catch(t){x(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return q.prototype.then=w,q.all=function(e){return new $(this,e).promise},q.race=function(e){var t=this;return n(e)?new t(function(n,o){for(var r=e.length,s=0;s<r;s++)t.resolve(e[s]).then(n,o)}):new t(function(e,t){return t(new TypeError("You must pass an array to race."))})},q.resolve=M,q.reject=function(e){var t=new this(_);return x(t,e),t},q._setScheduler=function(e){s=e},q._setAsap=function(e){i=e},q._asap=i,q.polyfill=function(){var t=void 0;if(void 0!==e)t=e;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var o=null;try{o=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===o&&!n.cast)return}t.Promise=q},q.Promise=q,q}()}).polyfill(),r=t(function(t){var n,o,r=function(){var e=0,t=/[\s,]+/g;function n(e){this.head=new o,this.tail=new o(this.head),this.head.next=this.tail,this.linkConstructor=e,this.reg={}}function o(e,t,n){this.prev=e,this.next=t,this.fn=n||r}function r(){}function s(){this.events={}}return n.prototype={insert:function(e){var t=new o(this.tail.prev,this.tail,e);return t.next.prev=t.prev.next=t,t},remove:function(e){e.prev.next=e.next,e.next.prev=e.prev}},o.prototype.run=function(e){this.fn(e),this.next&&this.next.run(e)},s.prototype={constructor:s,on:function(o,r){var s=this;o.split(t).forEach(function(t){var o=s.events[t]||(s.events[t]=new n),i=r._eev||(r._eev=++e);o.reg[i]||(o.reg[i]=o.insert(r))})},off:function(e,n){var o=this;n&&e.split(t).forEach(function(e){var t=o.events[e];if(t){var r=t.reg[n._eev];t.reg[n._eev]=void 0,t&&r&&t.remove(r)}})},emit:function(e,t){var n=this.events[e];n&&n.head.run(t)}},s}();n=function(){return r},(o=e.define)&&o.amd?o([],n):t.exports&&(t.exports=n())}),s={documentHead:document.getElementsByTagName("head")[0],apiUrl:"https://api.anymod.com/v2/",cdnUrl:"https://cdn.anymod.com/"},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(function(e,t){e.exports=function(){function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=0,o=void 0,r=void 0,s=function(e,t){f[n]=e,f[n+1]=t,2===(n+=2)&&(r?r(h):v())},a="undefined"!=typeof window?window:void 0,d=a||{},c=d.MutationObserver||d.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var e=setTimeout;return function(){return e(h,1)}}var f=new Array(1e3);function h(){for(var e=0;e<n;e+=2)(0,f[e])(f[e+1]),f[e]=void 0,f[e+1]=void 0;n=0}var y,m,g,A,v=void 0;function w(e,t){var n=this,o=new this.constructor(_);void 0===o[b]&&C(o);var r=n._state;if(r){var i=arguments[r-1];s(function(){return E(r,o,i,n._result)})}else L(n,o,e,t);return o}function M(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(_);return P(t,e),t}u?v=function(){return process.nextTick(h)}:c?(m=0,g=new c(h),A=document.createTextNode(""),g.observe(A,{characterData:!0}),v=function(){A.data=m=++m%2}):l?((y=new MessageChannel).port1.onmessage=h,v=function(){return y.port2.postMessage(0)}):v=void 0===a?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(h)}:p()}catch(e){return p()}}():p();var b=Math.random().toString(36).substring(2);function _(){}function O(t,n,o){n.constructor===t.constructor&&o===w&&n.constructor.resolve===M?function(e,t){1===t._state?j(e,t._result):2===t._state?x(e,t._result):L(t,void 0,function(t){return P(e,t)},function(t){return x(e,t)})}(t,n):void 0===o?j(t,n):e(o)?function(e,t,n){s(function(e){var o=!1,r=function(n,r,s,i){try{n.call(r,function(n){o||(o=!0,t!==n?P(e,n):j(e,n))},function(t){o||(o=!0,x(e,t))})}catch(e){return e}}(n,t);!o&&r&&(o=!0,x(e,r))},e)}(t,n,o):j(t,n)}function P(e,t){if(e===t)x(e,new TypeError("You cannot resolve a promise with itself"));else if(r=typeof(o=t),null===o||"object"!==r&&"function"!==r)j(e,t);else{var n=void 0;try{n=t.then}catch(t){return void x(e,t)}O(e,t,n)}var o,r}function k(e){e._onerror&&e._onerror(e._result),S(e)}function j(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&s(S,e))}function x(e,t){void 0===e._state&&(e._state=2,e._result=t,s(k,e))}function L(e,t,n,o){var r=e._subscribers,i=r.length;e._onerror=null,r[i]=t,r[i+1]=n,r[i+2]=o,0===i&&e._state&&s(S,e)}function S(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var o=void 0,r=void 0,s=e._result,i=0;i<t.length;i+=3)r=t[i+n],(o=t[i])?E(n,o,r,s):r(s);e._subscribers.length=0}}function E(t,n,o,r){var s=e(o),i=void 0,a=void 0,d=!0;if(s){try{i=o(r)}catch(e){d=!1,a=e}if(n===i)return void x(n,new TypeError("A promises callback cannot return that same promise."))}else i=r;void 0!==n._state||(s&&d?P(n,i):!1===d?x(n,a):1===t?j(n,i):2===t&&x(n,i))}var T=0;function C(e){e[b]=T++,e._state=void 0,e._result=void 0,e._subscribers=[]}var $=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(_),this.promise[b]||C(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&j(this.promise,this._result))):x(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,o=n.resolve;if(o===M){var r=void 0,s=void 0,i=!1;try{r=e.then}catch(e){i=!0,s=e}if(r===w&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===q){var a=new n(_);i?x(a,s):O(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(o(e),t)},e.prototype._settledAt=function(e,t,n){var o=this.promise;void 0===o._state&&(this._remaining--,2===e?x(o,n):this._result[t]=n),0===this._remaining&&j(o,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;L(e,void 0,function(e){return n._settledAt(1,t,e)},function(e){return n._settledAt(2,t,e)})},e}(),q=function(){function t(e){this[b]=T++,this._result=this._state=void 0,this._subscribers=[],_!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){P(e,t)},function(t){x(e,t)})}catch(t){x(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this.constructor;return e(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return q.prototype.then=w,q.all=function(e){return new $(this,e).promise},q.race=function(e){var n=this;return t(e)?new n(function(t,o){for(var r=e.length,s=0;s<r;s++)n.resolve(e[s]).then(t,o)}):new n(function(e,t){return t(new TypeError("You must pass an array to race."))})},q.resolve=M,q.reject=function(e){var t=new this(_);return x(t,e),t},q._setScheduler=function(e){r=e},q._setAsap=function(e){s=e},q._asap=s,q.polyfill=function(){var e=void 0;if(void 0!==i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=q},q.Promise=q,q}()}(n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports);const d={},c=(e,t,n,o)=>new a.Promise((r,s)=>{try{let i=new XMLHttpRequest;if(i.open(e,t),((e,t)=>{e.setRequestHeader("Accept","application/json, text/plain, */*"),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.setRequestHeader("AnyMod-URL",window.location.href),e.setRequestHeader("AnyMod-Project",AnyMod.Project),t&&Object.keys(t).map(n=>{e.setRequestHeader(n,t[n])})})(i,o),i.onreadystatechange=()=>{if(4==i.readyState){if(200==i.status)return r(JSON.parse(i.responseText));s(i.statusText)}},"GET"==e)i.send();else{const e=JSON.stringify(n||{});i.send(e)}}catch(e){s(e)}});let u;d.get=()=>{if(!AnyMod.Opts.api)return a.Promise.resolve({});const e=(()=>{if(!AnyMod.Opts.preview)return!1;try{if(document.cookie.indexOf("cio.preview")>-1)return document.cookie.split("cio.preview=")[1].split(";")[0]}catch(e){}return!1})(),t=e?{"AnyMod-Preview":e}:void 0;return((e,t)=>c("GET",e,null,t))(AnyMod.ApiUrl+"page?anymod="+(()=>{let e=window.location.pathname;try{return encodeURIComponent(btoa(e).replace(/=/g,"")).split("").reverse().join("")}catch(t){return encodeURIComponent(e)}})(),t)},d.post=e=>{if(!AnyMod.Opts.api)return a.Promise.resolve({});if(AnyMod.Opts.preview)throw new Error("Skipped post request: missing preview identifier");return t=AnyMod.ApiUrl+"page",c("POST",t,{explicitKeys:e});var t},d.put=(e,t)=>{if(!AnyMod.Opts.api)return a.Promise.resolve({});if(AnyMod.Opts.preview)throw new Error("Skipped put request: missing preview identifier");return n=AnyMod.ApiUrl+"page/"+e,c("PUT",n,{explicitKeys:t});var n},(e=>{if(e&&window[e]){if(window[e].Alias)return u=window[e].Alias;u=e,window[u].Alias=window[u].m,window[u].Project=window[u].o,window[u].CDN=window[u].d,window[u].Opts=window[u].r,window.AnyMod||(window[u].External={name:u},window.AnyMod=window[u],AnyMod.External=AnyMod.External||{},"Userfront"===u&&(AnyMod.External.project=AnyMod.Project,AnyMod.Project="59M89E",AnyMod.Opts={tips:!0}))}})(window.amvartem),u||(u="AnyMod");const l=u.toLowerCase(),p={};p.scriptTag=document.getElementById(u+"-script"),p.styleTag=document.querySelector(`[${l}-styles]`);const f=(e,t)=>{e&&"function"==typeof e&&e(t)};p.createInstanceId=(e,t)=>`${e}${t=t||"-"}${Math.random().toString(36).substr(2,7)}`,p.debugLog=e=>{window[u]&&window[u].Opts&&window[u].Opts.debug&&("string"==typeof e&&(e=[e]),console.log.apply(null,[`[${u}]`].concat(e)))};const h=(e,t)=>{const n=[];return e.modsWithoutRemainingAssets.map(o=>{e.modsMounted.indexOf(o)>-1||o&&t[o]&&n.push(t[o])}),n},y=e=>{const t=(()=>{const e=[].slice.call(document.querySelectorAll(`[id^="${l}-"],[data-${l}]`)),t=[];return e.map(e=>{if(e&&e.id&&e.id!==l+"-blank"){const n=new RegExp(`(${l}-)`,"g"),o=e.id.replace(n,"");t.indexOf(o)<0&&t.push(o)}}),t})(),n=[];for(let o=0;o<t.length;o++){if(n.length>=e)return n;n.indexOf(t[o])<0&&n.push(t[o])}return n},m=(e,t)=>{e&&t&&(e.queuedAssets=e.queuedAssets.filter(e=>e!==t))},g=(e,t,n,o)=>{if(t.queuedAssets.indexOf(e)>-1)return;if(document.querySelector('script[src="'+e+'"]'))return t.assetsOnPage.push(e),f(n);t.queuedAssets.push(e);let r=document.createElement("script");r.onload=()=>{p.debugLog(["Loaded",e]),t.jsAssetsLoaded.push(e),m(t,e),f(n)},r.onerror=()=>{p.debugLog(["Error Loading",e]),t.jsAssetsLoaded.push(e),m(t,e),f(n)},o?o.parentNode.insertBefore(r,o):document.body&&document.body.appendChild(r),r.defer=!0,r.async=!1,r.src=e},A=(e,t,n,o)=>{if(t.queuedAssets.indexOf(e)>-1)return;if(document.head.querySelector('link[href="'+e+'"]'))return t.assetsOnPage.push(e),f(n);t.queuedAssets.push(e);let r=document.createElement("link");if(r.onload=()=>{p.debugLog(["Loaded",e]),t.cssAssetsLoaded.push(e),m(t,e),f(n)},r.onerror=()=>{p.debugLog(["Error Loading",e]),t.cssAssetsLoaded.push(e),m(t,e),f(n)},r.rel="stylesheet",r.href=e,!(o=o||p.scriptTag||p.styleTag))return document.head.appendChild(r);o.parentNode.insertBefore(r,o)},v=(e,t)=>{t.modsWithRemainingAssets.map(t=>{((e,t)=>{e&&(e.remainingAssets=e.remainingAssets.filter(e=>e!==t))})(t,e)})},w=e=>{e.modsWithRemainingAssets&&e.modsWithRemainingAssets.map(t=>((e,t)=>{e&&e.remainingAssets&&t&&0===e.remainingAssets.length&&(t.modsWithoutRemainingAssets.indexOf(e.key)<0&&t.modsWithoutRemainingAssets.push(e.key),t.modsWithRemainingAssets=t.modsWithRemainingAssets.filter(t=>t.key!==e.key))})(t,e))},M=(e,t)=>{e&&e.map(e=>f(t,e))},b=(e,t)=>{e.modsWithRemainingAssets&&0===e.modsWithRemainingAssets.length&&f(t)},_=(e,t,n)=>{e&&t&&(e.modsMounted=t.modsMounted,e.cssAssetsLoaded=t.cssAssetsLoaded,e.jsAssetsLoaded=t.jsAssetsLoaded,e.assetsOnPage=t.assetsOnPage,e.queuedAssets=t.queuedAssets,n&&(e.cssAssetsToLog=t.cssAssetsLoaded,e.jsAssetsToLog=t.jsAssetsLoaded))},O=(e,t,n,o,r)=>{if(p.debugLog([`Loading ${r.priority?"priority ":""}mods`,e]),r=r||{},!e||0===Object.keys(e).length)return f(o);((e,t)=>{Object.keys(e).map(n=>{const o=e[n].cssAssets,r=e[n].jsAssets.filter(e=>t.jsAssetsLoaded.indexOf(e)<0),s=o.filter(e=>t.cssAssetsLoaded.indexOf(e)<0);r.length<1&&s.length<1?t.modsWithoutRemainingAssets.indexOf(n)<0&&t.modsWithoutRemainingAssets.push(n):t.modsWithRemainingAssets.push({key:n,remainingAssets:r.concat(s)})})})(e,t),(e=>{e.cssAssetsLoaded.map(t=>v(t,e)),e.jsAssetsLoaded.map(t=>v(t,e))})(t),w(t);const s=(e=>{let t=[],n=[];return Object.keys(e).map(o=>{t=t.concat(e[o].jsAssets||[]),n=n.concat(e[o].cssAssets||[])}),{jsAssets:t,cssAssets:n}})(e);p.debugLog(["[JS]"].concat(s.jsAssets)),p.debugLog(["[CSS]"].concat(s.cssAssets)),M(h(t,e),n),b(t,o),((e,t,n,o,r,s)=>{if(e&&0!==e.length)for(;e.length>0;){let i=e.shift();t.jsAssetsLoaded.indexOf(i)>-1||g(i,t,()=>{v(i,t),w(t),M(h(t,n),o),b(t,r)},s)}})(s.jsAssets,t,e,n,o,r.priority&&(r.scriptTag||p.scriptTag)||void 0),((e,t,n,o,r,s)=>{if(e&&0!==e.length)for(;e.length>0;){let i=e.shift();t.cssAssetsLoaded.indexOf(i)>-1||A(i,t,()=>{v(i,t),w(t),M(h(t,n),o),b(t,r)},s)}})(s.cssAssets,t,e,n,o,r.styleTag),_(r.parent,t,r.priorityOnly)};p.loadPageAssets=({mods:e},t)=>{if(!e)return console.warn("loadPageAssets called without Page info");(t=t||{}).parent||(t.parent=window[u]&&window[u].Page||{});const n=t.overallCb,o={modsWithRemainingAssets:[],modsWithoutRemainingAssets:[],modsMounted:!t.async&&t.parent.modsMounted||[],queuedAssets:t.parent.queuedAssets||[],cssAssetsLoaded:t.parent.cssAssetsLoaded||[],jsAssetsLoaded:t.parent.jsAssetsLoaded||[],assetsOnPage:t.parent.assetsOnPage||[]};t.parent.tracking=t.parent.tracking||o;const r=(e=>{const t=(()=>{if(window[u]&&window[u].Opts){if(e=window[u].Opts.priority,"[object Array]"===Object.prototype.toString.call(e))return window[u].Opts.priority;{const e="number"==typeof window[u].Opts.priority?Math.max(parseInt(window[u].Opts.priority),0):3;return y(e)}}return y(3);var e})(),n={};return t.map(t=>{t&&e[t]&&(n[t]=e[t])}),n})(e),s=((e,t)=>{const n={};return Object.keys(t).map(o=>{e[o]||(n[o]=t[o])}),n})(r,e),i=e=>{f(t.modCb,e),t.modCb&&e&&e.key&&o.modsMounted.push(e.key),_(t.parent,o,t.priorityOnly)},a=()=>{_(t.parent,o,t.priorityOnly),f(n,o)};t.priority=!0,O(r,o,i,()=>{if(t.priorityOnly)return f(a);setTimeout(()=>{t.priority=!1,O(s,o,i,a,t)},1)},t)},p.currentVersionName=()=>window[u].Version&&window[u].Version.currentVersion||"default",p.getCurrentModVersion=e=>{const t=p.currentVersionName();if(!e||!e.versions||!e.versions[t])return e||{};const n={};return e.versions.default=e.versions.default||{},n.data=e.versions[t].data||e.versions.default.data||e.data,n.html=e.versions[t].hasOwnProperty("html")?e.versions[t].html:e.versions.default.html,n.css=e.versions[t].hasOwnProperty("css")?e.versions[t].css:e.versions.default.css,n};const P="data-cloak-"+l,k=e=>{if(!e)return console.warn("cloakEl problem");e.hasAttribute(`data-${l}-mounted`)||e.setAttribute(P,"")},j=e=>{if(!e)return console.warn("uncloakEl problem");e.removeAttribute(P)},x=[],L=(e,t,n,o)=>{if(!e||e.length<1)return;if(n=n||"",o=o||"",t&&x.indexOf(t)>-1&&"live"===n)return;const r=document.createElement("style");t&&(x.push(t),r.setAttribute(`${l}-${t}-${n}`,o)),r.innerHTML=e,s.documentHead.appendChild(r)},S=`[id^="${l}-"],[data-${l}]`,E=e=>e.getAttribute("data-key")||"blank",T=e=>{if(!e.getAttribute("data-key")){if(e.getAttribute("key"))return e.setAttribute("data-key",e.getAttribute("key"));if(e.id&&0===e.id.indexOf(l+"-")){const t=new RegExp(l+"-");return e.setAttribute("data-key",e.id.replace(t,""))}e.setAttribute("data-key","undefined")}},C=e=>!!e&&(e.innerHTML.length>20||e.innerHTML&&e.innerHTML.trim&&e.innerHTML.trim().replace(/&nbsp;/i,"").length>0),$=[],q=()=>{for(;$.length>0;){let e=$.shift();e&&"function"==typeof e&&e()}},N=e=>void 0===e?{}:JSON.parse(JSON.stringify(e)),R=(e,t)=>{t=t||{};try{if(t.c||(t.c="limit",(t.w||t.h)&&(t.c="scale"),t.w&&t.h&&(t.c="fit")),"limit"!==t.c||t.w||t.h||(t.w=1200),"face"===t.g&&"crop"!==t.c&&"thumb"!==t.c&&"lfill"!==t.c&&(t.c="fill"),e){if(e.indexOf("image/upload")>-1){let n=/\/v\d{8,12}\//g,o=e.match(n)[0],r="/c_"+t.c;return t.w&&(r+=",w_"+t.w),t.h&&(r+=",h_"+t.h),t.g&&(r+=",g_"+t.g),e.split(n).join(r+o)}}else e="https://placeholdit.imgix.net/~text?w="+t.w,t.h&&(e+="&h="+t.h);return e}catch(t){return e}},H=e=>{try{const t=N(e.external);return t?"master"===t.project?{name:t.name,project:window.AnyMod&&AnyMod.External&&AnyMod.External.project||"master"}:t:{project:null}}catch(e){return{project:null}}},U=S.split(",").map(e=>e+`:not([data-${l}-mounted])`).join(","),I=()=>{AnyMod.Page.unmountedEls=[].slice.call(document.querySelectorAll(U)),AnyMod.Page.unmountedEls.map(e=>T(e))},J=(e,t)=>{p.debugLog([`[${e.key}] Begin mount`]);let n=p.createInstanceId(e.key,"-live-"),o=t.cloneNode(),r=(e=>{if(!e||e.length<1)return!1;for(let t=0;t<e.length;t++)if(e[t].indexOf("anymod.legacy.vue-axios.js")>-1)return!0;return!1})(e.jsAssets),i=function(e,t,n){if(!e||!t||!t.key)return console.warn("Problem mounting mod ",e,t);const o=p.currentVersionName(),{html:r,css:i}=p.getCurrentModVersion(t);p.debugLog([`[${t.key}] Insert CSS`]),((e,t)=>{const n=((e,t)=>s.documentHead.querySelector(`[${l}-${e}-${t}]`))(e,t=t||"");if(!n)return;s.documentHead.removeChild(n);const o=x.indexOf(e);o>=0&&x.splice(o,1)})(t.key,"live"),L(i,t.key,"live",o);let a=document.createElement("div");if(C(e)){let t=document.createElement("div");t.innerHTML=e.innerHTML,a.appendChild(t)}else a.innerHTML=r||"";let d=[].slice.call(e.attributes),c=["data-key"];try{window.temporaryParent=a;for(let t=0;t<d.length;t++){let n=d[t].nodeName;"data-"===n.substring(0,5)&&c.indexOf(n)<0&&a.firstElementChild.setAttribute(n,e.getAttribute(n))}}catch(e){console.warn(e)}return a.firstChild.id=`${l}-${t.key}`,k(a.firstChild),a.firstChild.setAttribute("data-"+l,n),a.firstChild.setAttribute(t.key,""),a.firstChild.setAttribute(`data-${l}-mounted`,""),((e,t)=>{!t||!t.cssAssets||t.cssAssets.length<1||t.cssAssets.map(t=>{t.indexOf("anymod.c19")>-1&&(e.className+=" c19"),t.indexOf("anymod.c24")>-1&&(e.className+=" c24"),t.indexOf("anymod.namespaced.")>-1&&(e.className+=" "+t.split("anymod.namespaced.")[1].split(".")[0])})})(a.firstChild,t),p.debugLog([`[${t.key}] Insert HTML`]),((e,t,n)=>{let o=t.parentNode;return n=n||{},o?(t.className&&(e.className=e.className?e.className+" "+t.className:t.className,(e=>{if(!e||!e.className)return;let t=e.className.split(" "),n=[];t.map(e=>{e&&n.indexOf(e)<0&&n.push(e)}),e.className=n.join(" ")})(e)),t.id&&(e.id=t.id),t.style&&t.style.cssText&&(e.style.cssText=t.style.cssText),C(t)&&!n.ignoreOldNodeInnerHtml&&(e.innerHTML=t.innerHTML),o.insertBefore(e,t.nextSibling),o.removeChild(t),e):console.warn("No parent for node",t.outerHTML)})(a.firstChild,e)}(t,e,n);return((e,t,n,o)=>{p.debugLog([`[${t.key}] Evaluate JS`]);try{let r={el:e,key:t.key,instanceId:n,selector:`[data-${l}="${n}"]`,data:N(t.data)||{},external:H(t),versions:N(t.versions)||{}};r.data.recaptchaKey="6LfRih4UAAAAALFsu6ztXQ-bozaU0UuapEee8-Fw",((e,t)=>{try{for(let o=0;o<t.attributes.length;o++){let r=t.attributes[o];r.name&&0===r.name.indexOf("data-")&&r.name.indexOf("data-"+l)&&(e.data[(n=r.name.replace("data-",""),n.replace(/-([a-z])/g,e=>e[1].toUpperCase()))]=t.getAttribute(r.name))}}catch(e){}var n})(r,e),(e=>{Object.keys(e.data).map(t=>{e.hasOwnProperty(t)||(e[t]=e.data[t])})})(r),function(e,t){try{const{html:n,css:o,data:r}=p.getCurrentModVersion(e);e.html=n,e.css=o,e.data=r,e.data.modKey=e.key,e.data.componentKey=e.key,Function("mod",';"use strict";var scope=mod,component=mod,Component=AnyMod;'+t)(e)}catch(t){console.warn(`Problem evaluating mod JS [${e&&e.key}]:`,t)}}(r,t.js),r.data.modKey=t.key,r.data.componentKey=t.key,AnyMod.Vue&&o&&(r.methods=r.methods||{},r.methods.buildImage=R,r.el=r.selector,new AnyMod.Vue(r))}catch(e){console.warn("Problem evaluating mod JS",e)}})(i,e,n,r),(e=>{p.debugLog([`[${e}] Uncloak`]);const t=document.querySelectorAll(`[data-${l}="${e}"]`);for(var n=0;n<t.length;n++)j(t[n])})(n),AnyMod.Page.mountedModObjs[n]={key:e.key,instanceId:n,originalEl:o,mod:e},i},W=e=>{e&&e.key&&(e=>{const t=document.querySelectorAll(`[data-key="${e.key}"]:not([data-${l}-mounted])`);for(let n=0;n<t.length;n++)J(e,t[n])})(e)},K=()=>AnyMod.Page.page&&AnyMod.Page.page.id&&AnyMod.Page.page.host===window.location.host&&AnyMod.Page.page.pathname===window.location.pathname?a.Promise.resolve(AnyMod.Page.page):V(),V=()=>{if(!AnyMod.Opts.api)return a.Promise.resolve({});const e=[];return I(),AnyMod.Page.unmountedEls.map(t=>{const n=E(t);n&&"blank"!==n&&"undefined"!==n&&e.push(n)}),e.length<1?(AnyMod.Page.page={mods:{}},a.Promise.resolve({})):d.post(e).then(e=>(AnyMod.Page.page=e,e))},F=e=>{if(!e||!e.id||!AnyMod.Opts.api)return a.Promise.resolve(e);const t=[];let n=!1;return I(),AnyMod.Page.unmountedEls.map(n=>{const o=E(n);if(o&&"blank"!==o&&"undefined"!==o)return e.mods[o]?void 0:t.push(o)}),t.map(t=>{e.errorMessages&&"Mod not found in project"!==e.errorMessages[t]&&(n=!0)}),t.length<1||!n?a.Promise.resolve(e):d.put(e.id,t).then(e=>(AnyMod.Page.page=e,e))},D=e=>new a.Promise((t,n)=>{if(!e.mods)return console.warn("Page has no mods"),t(e);I(),p.loadPageAssets(e,{modCb:W,overallCb:()=>{I(),(e=>{if(!e||!e.implicitKeys||e.implicitKeys.length<1)return;const t=document.querySelectorAll(`[data-key="blank"]:not([data-${l}-mounted])`);for(let n=0;n<e.implicitKeys.length;n++){if(!t[n])return;e.mods[e.implicitKeys[n]]&&(t[n].id=`${l}-${e.implicitKeys[n]}`,t[n].setAttribute("data-key",e.implicitKeys[n]),J(e.mods[e.implicitKeys[n]],t[n]))}})(e),t(e)},parent:AnyMod.Page})});let B=a.Promise.resolve();var Y={constants:s,crud:d,utils:p,alias:u,addStyleString:L,addToCallbacks:e=>{!e||e.length<1||e.map(e=>$.push(e))},aliasLowerCase:l,buildImage:R,checkPageAndUpdate:F,cloakString:P,createOrReturnPage:K,executeCallbacks:q,loadScript:(e,t,n)=>{n=n||{};let o=document.createElement("script");n.hasOwnProperty("id")&&(o.id=n.id),n.hasOwnProperty("async")&&o.setAttribute("async",n.async),n.hasOwnProperty("defer")&&o.setAttribute("defer",n.defer),t&&(o.onload=t),document.body&&document.body.appendChild(o),o.src=e},loadStyle:(e,t,n)=>{n=n||{};let o=document.createElement("link");o.href=e,o.rel="stylesheet",n.id&&(o.id=n.id),t&&(o.onload=t),s.documentHead.appendChild(o)},logErrorsAndTips:()=>{(()=>{if(!AnyMod.Page.page||!AnyMod.Page.page.errorMessages)return;const e=Object.keys(AnyMod.Page.page.errorMessages);if(!(e.length<1)){console.log("%c%s","color: #ea8c01;background:#fcf8e3;font-size:13px;","  AnyMod project "+AnyMod.Project+". "+e.length+" mod"+(1===e.length?"":"s")+" undeliverable for this page:  ");try{if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))throw new Error("Skip Safari for console.table");console.table(AnyMod.Page.page.errorMessages)}catch(t){e.map((e,t)=>console.warn(t+": "+e,AnyMod.Page.page.errorMessages[e]))}}})(),(()=>{if(!AnyMod.Opts.tips||!window.AnyModPageJs)return;let e="";window.AnyModPageJs.cssAssetsToLog&&window.AnyModPageJs.cssAssetsToLog.length>0&&window.AnyModPageJs.cssAssetsToLog.map(t=>e+=`<link href="${t}" rel="stylesheet">\n`),window.AnyModPageJs.jsAssetsToLog&&window.AnyModPageJs.jsAssetsToLog.length>0&&window.AnyModPageJs.jsAssetsToLog.map(t=>e+=`<script defer src="${t}"><\/script>\n`),e&&console.log(`\nTo improve page speed, add the following to this page's HTML before the closing </head> tag:\n\n\x3c!-- ${u} assets --\x3e\n${e}\x3c!-- /${u} assets --\x3e\n\n`)})()},modDataFromEid:e=>{try{let n=AnyMod.Page.mountedIds();for(var t=0;t<n.length;t++){let o=AnyMod.Page.mountedModObjs[n[t]];if(o.key===e)return o.mod}}catch(e){}return console.warn("AnyMod module not found: "+e),{}},prepareAll:e=>{let t=[].slice.call(document.querySelectorAll(S));return t.map(e=>{!function(e){e&&(k(e),T(e))}(e)}),t},processPage:D,ready:e=>{p.debugLog(["AnyMod.ready"]),$.push(e),q()},render:e=>(p.debugLog(["AnyMod.render"]),AnyMod.Page.modsMounted=[],new a.Promise((t,n)=>{AnyMod.ready(()=>{B=B.then(()=>(e=>K().then(e=>F(e)).then(e=>D(e)).then(()=>{e&&"function"==typeof e&&e()}))(e)),t(B)})})),uncloakNonMods:()=>{const e=document.querySelectorAll(`[${P}]:not([data-${l}])`);for(var t=0;t<e.length;t++)j(e[t])}};const{alias:z,aliasLowerCase:G,buildImage:X,constants:Q,modDataFromEid:Z,loadScript:ee,loadStyle:te,addStyleString:ne,cloakString:oe,utils:re}=Y;(()=>{if(re.debugLog(["Start"]),window.AnyMod&&AnyMod.Script&&AnyMod.Script.ran)return;ne(`[${oe}],[data-${G}][not-found]{opacity:0 !important;}`,"styles","cloak"),window.tempAnyMod=window.AnyMod||window.Anymod,window.AnyMod=e=>new AnyMod.init(e),window.Anymod=window.AnyMod,"AnyMod"!==z&&(window[z]=window.AnyMod),Object.keys(tempAnyMod).map(e=>AnyMod[e]=tempAnyMod[e]),delete window.tempAnyMod,AnyMod.init=function(e){if(!e)throw new Error("Missing mod id in AnyMod() call");return Z(e)},AnyMod.Promise=o,AnyMod.Event=new r,AnyMod.Script={ran:!1},AnyMod.ApiUrl=AnyMod.ApiUrl||Q.apiUrl,AnyMod.Page={page:{},mountedModObjs:{},unmountedEls:[],mountedIds:function(){return Object.keys(this.mountedModObjs)},mapMmos:function(e){e&&"function"==typeof e&&this.mountedIds().map(t=>e(this.mountedModObjs[t]))}};const e={env:"production",api:!0,inert:!1,preview:!1,tips:!0,priority:3,version:"default"};AnyMod.Opts=AnyMod.Opts||{},Object.keys(e).map(t=>{AnyMod.Opts.hasOwnProperty(t)||(AnyMod.Opts[t]=e[t])}),AnyMod.Opts.preview?AnyMod.Opts.tips=!1:AnyMod.Opts.inert&&(AnyMod.Opts.api=!1,AnyMod.Opts.tips=!1);let t=AnyMod.Opts.version;const n=window.location.search&&window.location.search.replace("?","").split("&");n&&n.map(e=>{0!==e.indexOf("version")&&0!==e.indexOf("lang")||(t=decodeURIComponent(e.split("=")[1]))}),AnyMod.Version={currentVersion:t},AnyMod.buildImage=X,AnyMod.loadScript=ee,AnyMod.loadStylesheet=te,AnyMod.addToWindowOnload=e=>{if("function"==typeof e)return"complete"===document.readyState?e():void window.addEventListener("load",e,!1)}})();const{prepareAll:se,processPage:ie,addToCallbacks:ae,ready:de,executeCallbacks:ce,render:ue,createOrReturnPage:le,checkPageAndUpdate:pe,logErrorsAndTips:fe,uncloakNonMods:he,utils:ye}=Y;window.AnyMod&&!window.AnyMod.Script.ran&&(AnyMod.ready=de,AnyMod.render=ue,ae(AnyMod.rq),delete AnyMod.rq,AnyMod.Event.$on=AnyMod.Event.on,AnyMod.Event.$off=AnyMod.Event.off,AnyMod.Event.$emit=AnyMod.Event.emit,AnyMod.addToWindowOnload(()=>(ye.debugLog(["window.onload event"]),se(),window.AnyModPageJs?(Object.keys(AnyModPageJs).map(e=>AnyMod.Page[e]=JSON.parse(JSON.stringify(AnyModPageJs[e]))),AnyMod.Opts.inert?void 0:le().then(e=>pe(e)).then(e=>ie(e)).then(()=>{ce(),fe(),setTimeout(he,1)}).catch(e=>{console.warn(e&&e.message?e.message:"Problem loading page",e),he()})):console.warn("Missing initial AnyModPageJs data"))),AnyMod.Script.ran=!0);
//# sourceMappingURL=anymod-html.js.map
