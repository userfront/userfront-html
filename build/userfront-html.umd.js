!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){var e,t={documentHead:document.getElementsByTagName("head")[0],apiUrl:"https://api.anymod.com/v2/",cdnUrl:"https://cdn.anymod.com/"},n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=(function(e,t){e.exports=function(){function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=0,o=void 0,r=void 0,i=function(e,t){y[s]=e,y[s+1]=t,2===(s+=2)&&(r?r(m):w())},a="undefined"!=typeof window?window:void 0,d=a||{},c=d.MutationObserver||d.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),u="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var e=setTimeout;return function(){return e(m,1)}}var y=new Array(1e3);function m(){for(var e=0;e<s;e+=2)(0,y[e])(y[e+1]),y[e]=void 0,y[e+1]=void 0;s=0}var f,h,g,A,w=void 0;function M(e,t){var n=this,s=new this.constructor(O);void 0===s[b]&&C(s);var o=n._state;if(o){var r=arguments[o-1];i(function(){return T(o,s,r,n._result)})}else x(n,s,e,t);return s}function v(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(O);return k(t,e),t}l?w=function(){return process.nextTick(m)}:c?(h=0,g=new c(m),A=document.createTextNode(""),g.observe(A,{characterData:!0}),w=function(){A.data=h=++h%2}):u?((f=new MessageChannel).port1.onmessage=m,w=function(){return f.port2.postMessage(0)}):w=void 0===a?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(m)}:p()}catch(e){return p()}}():p();var b=Math.random().toString(36).substring(2);function O(){}function P(t,n,s){n.constructor===t.constructor&&s===M&&n.constructor.resolve===v?function(e,t){1===t._state?j(e,t._result):2===t._state?_(e,t._result):x(t,void 0,function(t){return k(e,t)},function(t){return _(e,t)})}(t,n):void 0===s?j(t,n):e(s)?function(e,t,n){i(function(e){var s=!1,o=function(n,o,r,i){try{n.call(o,function(n){s||(s=!0,t!==n?k(e,n):j(e,n))},function(t){s||(s=!0,_(e,t))})}catch(e){return e}}(n,t);!s&&o&&(s=!0,_(e,o))},e)}(t,n,s):j(t,n)}function k(e,t){if(e===t)_(e,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(s=t),null===s||"object"!==o&&"function"!==o)j(e,t);else{var n=void 0;try{n=t.then}catch(t){return void _(e,t)}P(e,t,n)}var s,o}function L(e){e._onerror&&e._onerror(e._result),S(e)}function j(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&i(S,e))}function _(e,t){void 0===e._state&&(e._state=2,e._result=t,i(L,e))}function x(e,t,n,s){var o=e._subscribers,r=o.length;e._onerror=null,o[r]=t,o[r+1]=n,o[r+2]=s,0===r&&e._state&&i(S,e)}function S(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var s=void 0,o=void 0,r=e._result,i=0;i<t.length;i+=3)o=t[i+n],(s=t[i])?T(n,s,o,r):o(r);e._subscribers.length=0}}function T(t,n,s,o){var r=e(s),i=void 0,a=void 0,d=!0;if(r){try{i=s(o)}catch(e){d=!1,a=e}if(n===i)return void _(n,new TypeError("A promises callback cannot return that same promise."))}else i=o;void 0!==n._state||(r&&d?k(n,i):!1===d?_(n,a):1===t?j(n,i):2===t&&_(n,i))}var E=0;function C(e){e[b]=E++,e._state=void 0,e._result=void 0,e._subscribers=[]}var $=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(O),this.promise[b]||C(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&j(this.promise,this._result))):_(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,s=n.resolve;if(s===v){var o=void 0,r=void 0,i=!1;try{o=e.then}catch(e){i=!0,r=e}if(o===M&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===q){var a=new n(O);i?_(a,r):P(a,e,o),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(s(e),t)},e.prototype._settledAt=function(e,t,n){var s=this.promise;void 0===s._state&&(this._remaining--,2===e?_(s,n):this._result[t]=n),0===this._remaining&&j(s,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;x(e,void 0,function(e){return n._settledAt(1,t,e)},function(e){return n._settledAt(2,t,e)})},e}(),q=function(){function t(e){this[b]=E++,this._result=this._state=void 0,this._subscribers=[],O!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){k(e,t)},function(t){_(e,t)})}catch(t){_(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this.constructor;return e(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return q.prototype.then=M,q.all=function(e){return new $(this,e).promise},q.race=function(e){var n=this;return t(e)?new n(function(t,s){for(var o=e.length,r=0;r<o;r++)n.resolve(e[r]).then(t,s)}):new n(function(e,t){return t(new TypeError("You must pass an array to race."))})},q.resolve=v,q.reject=function(e){var t=new this(O);return _(t,e),t},q._setScheduler=function(e){r=e},q._setAsap=function(e){i=e},q._asap=i,q.polyfill=function(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var s=null;try{s=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===s&&!t.cast)return}e.Promise=q},q.Promise=q,q}()}(e={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),e.exports);const o={},r=(e,t,n,o)=>new s.Promise((s,r)=>{try{let i=new XMLHttpRequest;if(i.open(e,t),((e,t)=>{e.setRequestHeader("Accept","application/json, text/plain, */*"),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.setRequestHeader("AnyMod-URL",window.location.href),e.setRequestHeader("AnyMod-Project",AnyMod.Project),t&&Object.keys(t).map(n=>{e.setRequestHeader(n,t[n])})})(i,o),i.onreadystatechange=()=>{if(4==i.readyState){if(200==i.status)return s(JSON.parse(i.responseText));r(i.statusText)}},"GET"==e)i.send();else{const e=JSON.stringify(n||{});i.send(e)}}catch(e){r(e)}});let i;o.get=()=>{if(!AnyMod.Opts.api)return s.Promise.resolve({});const e=(()=>{if(!AnyMod.Opts.preview)return!1;try{if(document.cookie.indexOf("cio.preview")>-1)return document.cookie.split("cio.preview=")[1].split(";")[0]}catch(e){}return!1})(),t=e?{"AnyMod-Preview":e}:void 0;return((e,t)=>r("GET",e,null,t))(AnyMod.ApiUrl+"page?anymod="+(()=>{let e=window.location.pathname;try{return encodeURIComponent(btoa(e).replace(/=/g,"")).split("").reverse().join("")}catch(t){return encodeURIComponent(e)}})(),t)},o.post=e=>{if(!AnyMod.Opts.api)return s.Promise.resolve({});if(AnyMod.Opts.preview)throw new Error("Skipped post request: missing preview identifier");return t=AnyMod.ApiUrl+"page",r("POST",t,{explicitKeys:e});var t},o.put=(e,t)=>{if(!AnyMod.Opts.api)return s.Promise.resolve({});if(AnyMod.Opts.preview)throw new Error("Skipped put request: missing preview identifier");return n=AnyMod.ApiUrl+"page/"+e,r("PUT",n,{explicitKeys:t});var n},(e=>{if(e&&window[e]){if(window[e].Alias)return i=window[e].Alias;i=e,window[i].Alias=window[i].m,window[i].Project=window[i].o,window[i].CDN=window[i].d,window[i].Opts=window[i].r,window.AnyMod||(window[i].External={name:i},window.AnyMod=window[i],AnyMod.External=AnyMod.External||{},"Userfront"===i&&(AnyMod.External.project=AnyMod.Project,AnyMod.Project="59M89E",AnyMod.Opts={tips:!0}))}})(window.amvartem),i||(i="AnyMod");const a=i.toLowerCase(),d={};d.scriptTag=document.getElementById(i+"-script"),d.styleTag=document.querySelector(`[${a}-styles]`);const c=(e,t)=>{e&&"function"==typeof e&&e(t)};d.createInstanceId=(e,t)=>`${e}${t=t||"-"}${Math.random().toString(36).substr(2,7)}`,d.debugLog=e=>{window[i]&&window[i].Opts&&window[i].Opts.debug&&("string"==typeof e&&(e=[e]),console.log.apply(null,[`[${i}]`].concat(e)))};const l=(e,t)=>{const n=[];return e.modsWithoutRemainingAssets.map(s=>{e.modsMounted.indexOf(s)>-1||s&&t[s]&&n.push(t[s])}),n},u=e=>{const t=(()=>{const e=[].slice.call(document.querySelectorAll(`[id^="${a}-"],[data-${a}]`)),t=[];return e.map(e=>{if(e&&e.id&&e.id!==a+"-blank"){const n=new RegExp(`(${a}-)`,"g"),s=e.id.replace(n,"");t.indexOf(s)<0&&t.push(s)}}),t})(),n=[];for(let s=0;s<t.length;s++){if(n.length>=e)return n;n.indexOf(t[s])<0&&n.push(t[s])}return n},p=(e,t)=>{e&&t&&(e.queuedAssets=e.queuedAssets.filter(e=>e!==t))},y=(e,t,n,s)=>{if(t.queuedAssets.indexOf(e)>-1)return;if(document.querySelector('script[src="'+e+'"]'))return t.assetsOnPage.push(e),c(n);t.queuedAssets.push(e);let o=document.createElement("script");o.onload=()=>{d.debugLog(["Loaded",e]),t.jsAssetsLoaded.push(e),p(t,e),c(n)},o.onerror=()=>{d.debugLog(["Error Loading",e]),t.jsAssetsLoaded.push(e),p(t,e),c(n)},s?s.parentNode.insertBefore(o,s):document.body&&document.body.appendChild(o),o.defer=!0,o.async=!1,o.src=e},m=(e,t,n,s)=>{if(t.queuedAssets.indexOf(e)>-1)return;if(document.head.querySelector('link[href="'+e+'"]'))return t.assetsOnPage.push(e),c(n);t.queuedAssets.push(e);let o=document.createElement("link");if(o.onload=()=>{d.debugLog(["Loaded",e]),t.cssAssetsLoaded.push(e),p(t,e),c(n)},o.onerror=()=>{d.debugLog(["Error Loading",e]),t.cssAssetsLoaded.push(e),p(t,e),c(n)},o.rel="stylesheet",o.href=e,!(s=s||d.scriptTag||d.styleTag))return document.head.appendChild(o);s.parentNode.insertBefore(o,s)},f=(e,t)=>{t.modsWithRemainingAssets.map(t=>{((e,t)=>{e&&(e.remainingAssets=e.remainingAssets.filter(e=>e!==t))})(t,e)})},h=e=>{e.modsWithRemainingAssets&&e.modsWithRemainingAssets.map(t=>((e,t)=>{e&&e.remainingAssets&&t&&0===e.remainingAssets.length&&(t.modsWithoutRemainingAssets.indexOf(e.key)<0&&t.modsWithoutRemainingAssets.push(e.key),t.modsWithRemainingAssets=t.modsWithRemainingAssets.filter(t=>t.key!==e.key))})(t,e))},g=(e,t)=>{e&&e.map(e=>c(t,e))},A=(e,t)=>{e.modsWithRemainingAssets&&0===e.modsWithRemainingAssets.length&&c(t)},w=(e,t,n)=>{e&&t&&(e.modsMounted=t.modsMounted,e.cssAssetsLoaded=t.cssAssetsLoaded,e.jsAssetsLoaded=t.jsAssetsLoaded,e.assetsOnPage=t.assetsOnPage,e.queuedAssets=t.queuedAssets,n&&(e.cssAssetsToLog=t.cssAssetsLoaded,e.jsAssetsToLog=t.jsAssetsLoaded))},M=(e,t,n,s,o)=>{if(d.debugLog([`Loading ${o.priority?"priority ":""}mods`,e]),o=o||{},!e||0===Object.keys(e).length)return c(s);((e,t)=>{Object.keys(e).map(n=>{const s=e[n].cssAssets,o=e[n].jsAssets.filter(e=>t.jsAssetsLoaded.indexOf(e)<0),r=s.filter(e=>t.cssAssetsLoaded.indexOf(e)<0);o.length<1&&r.length<1?t.modsWithoutRemainingAssets.indexOf(n)<0&&t.modsWithoutRemainingAssets.push(n):t.modsWithRemainingAssets.push({key:n,remainingAssets:o.concat(r)})})})(e,t),(e=>{e.cssAssetsLoaded.map(t=>f(t,e)),e.jsAssetsLoaded.map(t=>f(t,e))})(t),h(t);const r=(e=>{let t=[],n=[];return Object.keys(e).map(s=>{t=t.concat(e[s].jsAssets||[]),n=n.concat(e[s].cssAssets||[])}),{jsAssets:t,cssAssets:n}})(e);d.debugLog(["[JS]"].concat(r.jsAssets)),d.debugLog(["[CSS]"].concat(r.cssAssets)),g(l(t,e),n),A(t,s),((e,t,n,s,o,r)=>{if(e&&0!==e.length)for(;e.length>0;){let i=e.shift();t.jsAssetsLoaded.indexOf(i)>-1||y(i,t,()=>{f(i,t),h(t),g(l(t,n),s),A(t,o)},r)}})(r.jsAssets,t,e,n,s,o.priority&&(o.scriptTag||d.scriptTag)||void 0),((e,t,n,s,o,r)=>{if(e&&0!==e.length)for(;e.length>0;){let i=e.shift();t.cssAssetsLoaded.indexOf(i)>-1||m(i,t,()=>{f(i,t),h(t),g(l(t,n),s),A(t,o)},r)}})(r.cssAssets,t,e,n,s,o.styleTag),w(o.parent,t,o.priorityOnly)};d.loadPageAssets=({mods:e},t)=>{if(!e)return console.warn("loadPageAssets called without Page info");(t=t||{}).parent||(t.parent=window[i]&&window[i].Page||{});const n=t.overallCb,s={modsWithRemainingAssets:[],modsWithoutRemainingAssets:[],modsMounted:!t.async&&t.parent.modsMounted||[],queuedAssets:t.parent.queuedAssets||[],cssAssetsLoaded:t.parent.cssAssetsLoaded||[],jsAssetsLoaded:t.parent.jsAssetsLoaded||[],assetsOnPage:t.parent.assetsOnPage||[]};t.parent.tracking=t.parent.tracking||s;const o=(e=>{const t=(()=>{if(window[i]&&window[i].Opts){if(e=window[i].Opts.priority,"[object Array]"===Object.prototype.toString.call(e))return window[i].Opts.priority;{const e="number"==typeof window[i].Opts.priority?Math.max(parseInt(window[i].Opts.priority),0):3;return u(e)}}return u(3);var e})(),n={};return t.map(t=>{t&&e[t]&&(n[t]=e[t])}),n})(e),r=((e,t)=>{const n={};return Object.keys(t).map(s=>{e[s]||(n[s]=t[s])}),n})(o,e),a=e=>{c(t.modCb,e),t.modCb&&e&&e.key&&s.modsMounted.push(e.key),w(t.parent,s,t.priorityOnly)},d=()=>{w(t.parent,s,t.priorityOnly),c(n,s)};t.priority=!0,M(o,s,a,()=>{if(t.priorityOnly)return c(d);setTimeout(()=>{t.priority=!1,M(r,s,a,d,t)},1)},t)},d.currentVersionName=()=>window[i].Version&&window[i].Version.currentVersion||"default",d.getCurrentModVersion=e=>{const t=d.currentVersionName();if(!e||!e.versions||!e.versions[t])return e||{};const n={};return e.versions.default=e.versions.default||{},n.data=e.versions[t].data||e.versions.default.data||e.data,n.html=e.versions[t].hasOwnProperty("html")?e.versions[t].html:e.versions.default.html,n.css=e.versions[t].hasOwnProperty("css")?e.versions[t].css:e.versions.default.css,n};const v="data-cloak-"+a,b=e=>{if(!e)return console.warn("cloakEl problem");e.hasAttribute(`data-${a}-mounted`)||e.setAttribute(v,"")},O=e=>{if(!e)return console.warn("uncloakEl problem");e.removeAttribute(v)},P=[],k=(e,n,s,o)=>{if(!e||e.length<1)return;if(s=s||"",o=o||"",n&&P.indexOf(n)>-1&&"live"===s)return;const r=document.createElement("style");n&&(P.push(n),r.setAttribute(`${a}-${n}-${s}`,o)),r.innerHTML=e,t.documentHead.appendChild(r)},L=`[id^="${a}-"],[data-${a}]`,j=e=>e.getAttribute("data-key")||"blank",_=e=>{if(!e.getAttribute("data-key")){if(e.getAttribute("key"))return e.setAttribute("data-key",e.getAttribute("key"));if(e.id&&0===e.id.indexOf(a+"-")){const t=new RegExp(a+"-");return e.setAttribute("data-key",e.id.replace(t,""))}e.setAttribute("data-key","undefined")}},x=e=>!!e&&(e.innerHTML.length>20||e.innerHTML&&e.innerHTML.trim&&e.innerHTML.trim().replace(/&nbsp;/i,"").length>0),S=[],T=()=>{for(;S.length>0;){let e=S.shift();e&&"function"==typeof e&&e()}},E=e=>void 0===e?{}:JSON.parse(JSON.stringify(e)),C=(e,t)=>{t=t||{};try{if(t.c||(t.c="limit",(t.w||t.h)&&(t.c="scale"),t.w&&t.h&&(t.c="fit")),"limit"!==t.c||t.w||t.h||(t.w=1200),"face"===t.g&&"crop"!==t.c&&"thumb"!==t.c&&"lfill"!==t.c&&(t.c="fill"),e){if(e.indexOf("image/upload")>-1){let n=/\/v\d{8,12}\//g,s=e.match(n)[0],o="/c_"+t.c;return t.w&&(o+=",w_"+t.w),t.h&&(o+=",h_"+t.h),t.g&&(o+=",g_"+t.g),e.split(n).join(o+s)}}else e="https://placeholdit.imgix.net/~text?w="+t.w,t.h&&(e+="&h="+t.h);return e}catch(t){return e}},$=e=>{try{const t=E(e.external);return t?"master"===t.project?{name:t.name,project:window.AnyMod&&AnyMod.External&&AnyMod.External.project||"master"}:t:{project:null}}catch(e){return{project:null}}},q=L.split(",").map(e=>e+`:not([data-${a}-mounted])`).join(","),N=()=>{AnyMod.Page.unmountedEls=[].slice.call(document.querySelectorAll(q)),AnyMod.Page.unmountedEls.map(e=>_(e))},R=(e,n)=>{d.debugLog([`[${e.key}] Begin mount`]);let s=d.createInstanceId(e.key,"-live-"),o=n.cloneNode(),r=(e=>{if(!e||e.length<1)return!1;for(let t=0;t<e.length;t++)if(e[t].indexOf("anymod.legacy.vue-axios.js")>-1)return!0;return!1})(e.jsAssets),i=function(e,n,s){if(!e||!n||!n.key)return console.warn("Problem mounting mod ",e,n);const o=d.currentVersionName(),{html:r,css:i}=d.getCurrentModVersion(n);d.debugLog([`[${n.key}] Insert CSS`]),((e,n)=>{const s=((e,n)=>t.documentHead.querySelector(`[${a}-${e}-${n}]`))(e,n=n||"");if(!s)return;t.documentHead.removeChild(s);const o=P.indexOf(e);o>=0&&P.splice(o,1)})(n.key,"live"),k(i,n.key,"live",o);let c=document.createElement("div");if(x(e)){let t=document.createElement("div");t.innerHTML=e.innerHTML,c.appendChild(t)}else c.innerHTML=r||"";let l=[].slice.call(e.attributes),u=["data-key"];try{window.temporaryParent=c;for(let t=0;t<l.length;t++){let n=l[t].nodeName;"data-"===n.substring(0,5)&&u.indexOf(n)<0&&c.firstElementChild.setAttribute(n,e.getAttribute(n))}}catch(e){console.warn(e)}return c.firstChild.id=`${a}-${n.key}`,b(c.firstChild),c.firstChild.setAttribute("data-"+a,s),c.firstChild.setAttribute(n.key,""),c.firstChild.setAttribute(`data-${a}-mounted`,""),((e,t)=>{!t||!t.cssAssets||t.cssAssets.length<1||t.cssAssets.map(t=>{t.indexOf("anymod.c19")>-1&&(e.className+=" c19"),t.indexOf("anymod.c24")>-1&&(e.className+=" c24"),t.indexOf("anymod.namespaced.")>-1&&(e.className+=" "+t.split("anymod.namespaced.")[1].split(".")[0])})})(c.firstChild,n),d.debugLog([`[${n.key}] Insert HTML`]),((e,t,n)=>{let s=t.parentNode;return n=n||{},s?(t.className&&(e.className=e.className?e.className+" "+t.className:t.className,(e=>{if(!e||!e.className)return;let t=e.className.split(" "),n=[];t.map(e=>{e&&n.indexOf(e)<0&&n.push(e)}),e.className=n.join(" ")})(e)),t.id&&(e.id=t.id),t.style&&t.style.cssText&&(e.style.cssText=t.style.cssText),x(t)&&!n.ignoreOldNodeInnerHtml&&(e.innerHTML=t.innerHTML),s.insertBefore(e,t.nextSibling),s.removeChild(t),e):console.warn("No parent for node",t.outerHTML)})(c.firstChild,e)}(n,e,s);return((e,t,n,s)=>{d.debugLog([`[${t.key}] Evaluate JS`]);try{let o={el:e,key:t.key,instanceId:n,selector:`[data-${a}="${n}"]`,data:E(t.data)||{},external:$(t),versions:E(t.versions)||{}};o.data.recaptchaKey="6LfRih4UAAAAALFsu6ztXQ-bozaU0UuapEee8-Fw",((e,t)=>{try{for(let s=0;s<t.attributes.length;s++){let o=t.attributes[s];o.name&&0===o.name.indexOf("data-")&&o.name.indexOf("data-"+a)&&(e.data[(n=o.name.replace("data-",""),n.replace(/-([a-z])/g,e=>e[1].toUpperCase()))]=t.getAttribute(o.name))}}catch(e){}var n})(o,e),(e=>{Object.keys(e.data).map(t=>{e.hasOwnProperty(t)||(e[t]=e.data[t])})})(o),function(e,t){try{const{html:n,css:s,data:o}=d.getCurrentModVersion(e);e.html=n,e.css=s,e.data=o,e.data.modKey=e.key,e.data.componentKey=e.key,Function("mod",';"use strict";var scope=mod,component=mod,Component=AnyMod;'+t)(e)}catch(t){console.warn(`Problem evaluating mod JS [${e&&e.key}]:`,t)}}(o,t.js),o.data.modKey=t.key,o.data.componentKey=t.key,AnyMod.Vue&&s&&(o.methods=o.methods||{},o.methods.buildImage=C,o.el=o.selector,new AnyMod.Vue(o))}catch(e){console.warn("Problem evaluating mod JS",e)}})(i,e,s,r),(e=>{d.debugLog([`[${e}] Uncloak`]);const t=document.querySelectorAll(`[data-${a}="${e}"]`);for(var n=0;n<t.length;n++)O(t[n])})(s),AnyMod.Page.mountedModObjs[s]={key:e.key,instanceId:s,originalEl:o,mod:e},i},H=e=>{e&&e.key&&(e=>{const t=document.querySelectorAll(`[data-key="${e.key}"]:not([data-${a}-mounted])`);for(let n=0;n<t.length;n++)R(e,t[n])})(e)},U=()=>AnyMod.Page.page&&AnyMod.Page.page.id&&AnyMod.Page.page.host===window.location.host&&AnyMod.Page.page.pathname===window.location.pathname?s.Promise.resolve(AnyMod.Page.page):J(),J=()=>{if(!AnyMod.Opts.api)return s.Promise.resolve({});const e=[];return N(),AnyMod.Page.unmountedEls.map(t=>{const n=j(t);n&&"blank"!==n&&"undefined"!==n&&e.push(n)}),e.length<1?(AnyMod.Page.page={mods:{}},s.Promise.resolve({})):o.post(e).then(e=>(AnyMod.Page.page=e,e))},I=e=>{if(!e||!e.id||!AnyMod.Opts.api)return s.Promise.resolve(e);const t=[];let n=!1;return N(),AnyMod.Page.unmountedEls.map(n=>{const s=j(n);if(s&&"blank"!==s&&"undefined"!==s)return e.mods[s]?void 0:t.push(s)}),t.map(t=>{e.errorMessages&&"Mod not found in project"!==e.errorMessages[t]&&(n=!0)}),t.length<1||!n?s.Promise.resolve(e):o.put(e.id,t).then(e=>(AnyMod.Page.page=e,e))},W=e=>new s.Promise((t,n)=>{if(!e.mods)return console.warn("Page has no mods"),t(e);N(),d.loadPageAssets(e,{modCb:H,overallCb:()=>{N(),(e=>{if(!e||!e.implicitKeys||e.implicitKeys.length<1)return;const t=document.querySelectorAll(`[data-key="blank"]:not([data-${a}-mounted])`);for(let n=0;n<e.implicitKeys.length;n++){if(!t[n])return;e.mods[e.implicitKeys[n]]&&(t[n].id=`${a}-${e.implicitKeys[n]}`,t[n].setAttribute("data-key",e.implicitKeys[n]),R(e.mods[e.implicitKeys[n]],t[n]))}})(e),t(e)},parent:AnyMod.Page})});let K=s.Promise.resolve();var V={constants:t,crud:o,utils:d,alias:i,addStyleString:k,addToCallbacks:e=>{!e||e.length<1||e.map(e=>S.push(e))},aliasLowerCase:a,buildImage:C,checkPageAndUpdate:I,cloakString:v,createOrReturnPage:U,executeCallbacks:T,loadScript:(e,t,n)=>{n=n||{};let s=document.createElement("script");n.hasOwnProperty("id")&&(s.id=n.id),n.hasOwnProperty("async")&&s.setAttribute("async",n.async),n.hasOwnProperty("defer")&&s.setAttribute("defer",n.defer),t&&(s.onload=t),document.body&&document.body.appendChild(s),s.src=e},loadStyle:(e,n,s)=>{s=s||{};let o=document.createElement("link");o.href=e,o.rel="stylesheet",s.id&&(o.id=s.id),n&&(o.onload=n),t.documentHead.appendChild(o)},logErrorsAndTips:()=>{(()=>{if(!AnyMod.Page.page||!AnyMod.Page.page.errorMessages)return;const e=Object.keys(AnyMod.Page.page.errorMessages);if(!(e.length<1)){console.log("%c%s","color: #ea8c01;background:#fcf8e3;font-size:13px;","  AnyMod project "+AnyMod.Project+". "+e.length+" mod"+(1===e.length?"":"s")+" undeliverable for this page:  ");try{if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))throw new Error("Skip Safari for console.table");console.table(AnyMod.Page.page.errorMessages)}catch(t){e.map((e,t)=>console.warn(t+": "+e,AnyMod.Page.page.errorMessages[e]))}}})(),(()=>{if(!AnyMod.Opts.tips||!window.AnyModPageJs)return;let e="";window.AnyModPageJs.cssAssetsToLog&&window.AnyModPageJs.cssAssetsToLog.length>0&&window.AnyModPageJs.cssAssetsToLog.map(t=>e+=`<link href="${t}" rel="stylesheet">\n`),window.AnyModPageJs.jsAssetsToLog&&window.AnyModPageJs.jsAssetsToLog.length>0&&window.AnyModPageJs.jsAssetsToLog.map(t=>e+=`<script defer src="${t}"><\/script>\n`),e&&console.log(`\nTo improve page speed, add the following to this page's HTML before the closing </head> tag:\n\n\x3c!-- ${i} assets --\x3e\n${e}\x3c!-- /${i} assets --\x3e\n\n`)})()},modDataFromEid:e=>{try{let n=AnyMod.Page.mountedIds();for(var t=0;t<n.length;t++){let s=AnyMod.Page.mountedModObjs[n[t]];if(s.key===e)return s.mod}}catch(e){}return console.warn("AnyMod module not found: "+e),{}},prepareAll:e=>{let t=[].slice.call(document.querySelectorAll(L));return t.map(e=>{!function(e){e&&(b(e),_(e))}(e)}),t},processPage:W,ready:e=>{d.debugLog(["AnyMod.ready"]),S.push(e),T()},render:e=>(d.debugLog(["AnyMod.render"]),AnyMod.Page.modsMounted=[],new s.Promise((t,n)=>{AnyMod.ready(()=>{K=K.then(()=>(e=>U().then(e=>I(e)).then(e=>W(e)).then(()=>{e&&"function"==typeof e&&e()}))(e)),t(K)})})),uncloakNonMods:()=>{const e=document.querySelectorAll(`[${v}]:not([data-${a}])`);for(var t=0;t<e.length;t++)O(e[t])}};const{aliasLowerCase:F,constants:B,modDataFromEid:D,addStyleString:z,cloakString:Y,utils:G}=V;(()=>{if(G.debugLog(["Start"]),window.AnyMod&&AnyMod.Script&&AnyMod.Script.ran)return;z(`[${Y}],[data-${F}][not-found]{opacity:0 !important;}`,"styles","cloak"),window.tempAnyMod=window.AnyMod||window.Anymod,window.AnyMod=e=>new AnyMod.init(e),Object.keys(tempAnyMod).map(e=>AnyMod[e]=tempAnyMod[e]),delete window.tempAnyMod,AnyMod.init=function(e){if(!e)throw new Error("Missing mod id in AnyMod() call");return D(e)},AnyMod.Script={ran:!1},AnyMod.ApiUrl=AnyMod.ApiUrl||B.apiUrl,AnyMod.Page={page:{},mountedModObjs:{},unmountedEls:[],mountedIds:function(){return Object.keys(this.mountedModObjs)},mapMmos:function(e){e&&"function"==typeof e&&this.mountedIds().map(t=>e(this.mountedModObjs[t]))}};const e={env:"production",api:!0,inert:!1,preview:!1,tips:!0,priority:3,version:"default"};AnyMod.Opts=AnyMod.Opts||{},Object.keys(e).map(t=>{AnyMod.Opts.hasOwnProperty(t)||(AnyMod.Opts[t]=e[t])}),AnyMod.Opts.preview?AnyMod.Opts.tips=!1:AnyMod.Opts.inert&&(AnyMod.Opts.api=!1,AnyMod.Opts.tips=!1);let t=AnyMod.Opts.version;const n=window.location.search&&window.location.search.replace("?","").split("&");n&&n.map(e=>{0!==e.indexOf("version")&&0!==e.indexOf("lang")||(t=decodeURIComponent(e.split("=")[1]))}),AnyMod.Version={currentVersion:t},AnyMod.addToWindowOnload=e=>{if("function"==typeof e)return"complete"===document.readyState?e():void window.addEventListener("load",e,!1)}})();const{alias:X,prepareAll:Q,processPage:Z,addToCallbacks:ee,ready:te,executeCallbacks:ne,render:se,createOrReturnPage:oe,checkPageAndUpdate:re,logErrorsAndTips:ie,uncloakNonMods:ae,utils:de}=V;window.AnyMod&&AnyMod.Script&&AnyMod.Script.ran||(AnyMod.ready=te,AnyMod.render=se,ee(AnyMod.rq),delete AnyMod.rq,AnyMod.addToWindowOnload(()=>(de.debugLog(["window.onload event"]),Q(),window.AnyModPageJs?(Object.keys(AnyModPageJs).map(e=>AnyMod.Page[e]=JSON.parse(JSON.stringify(AnyModPageJs[e]))),AnyMod.Opts.inert?void 0:oe().then(e=>re(e)).then(e=>Z(e)).then(()=>{ne(),ie(),setTimeout(ae,1)}).catch(e=>{console.warn(e&&e.message?e.message:"Problem loading page",e),ae()})):console.warn("Missing initial AnyModPageJs data"))),"AnyMod"!==X&&(window[X]=AnyMod),AnyMod.Script.ran=!0)});
//# sourceMappingURL=userfront-html.umd.js.map
