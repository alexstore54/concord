/*! For license information please see contacts.js.LICENSE.txt */
(()=>{var t={8588:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function o(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var o=document.createElement("img");o.src=this.options.avatar,o.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(o):t.insertAdjacentElement("afterbegin",o)}if(!0===this.options.close){var r=document.createElement("button");r.type="button",r.setAttribute("aria-label","Close"),r.className="toast-close",r.innerHTML="&#10006;",r.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",r):t.appendChild(r)}if(this.options.stopOnFocus&&this.options.duration>0){var i=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){i.removeElement(t)}),i.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=n("x",this.options),c=n("y",this.options),l="left"==this.options.position?a:"-"+a,u="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+l+","+u+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,n),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},n={top:15,bottom:15},r={top:15,bottom:15},s=document.getElementsByClassName("toastify"),i=0;i<s.length;i++){t=!0===o(s[i],"toastify-top")?"toastify-top":"toastify-bottom";var a=s[i].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[i].style[t]=r[t]+"px",r[t]+=a+15):!0===o(s[i],"toastify-left")?(s[i].style[t]=e[t]+"px",e[t]+=a+15):(s[i].style[t]=n[t]+"px",n[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(8588),e=n.n(t);class o extends Error{constructor(t,e,n){super(e),this.status=t,this.errors=n}static ErrorValidation(t,e=[]){return new o(400,t,e)}static BadRequest(t,e=[]){return new o(404,t,e)}}const r=o;function s(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,c=(l=Object.create(null),t=>{const e=i.call(t);return l[e]||(l[e]=e.slice(8,-1).toLowerCase())});var l;const u=t=>(t=t.toLowerCase(),e=>c(e)===t),f=t=>e=>typeof e===t,{isArray:d}=Array,p=f("undefined"),h=u("ArrayBuffer"),m=f("string"),y=f("function"),g=f("number"),b=t=>null!==t&&"object"==typeof t,w=t=>{if("object"!==c(t))return!1;const e=a(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},E=u("Date"),O=u("File"),v=u("Blob"),S=u("FileList"),R=u("URLSearchParams");function A(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let o,r;if("object"!=typeof t&&(t=[t]),d(t))for(o=0,r=t.length;o<r;o++)e.call(null,t[o],o,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let i;for(o=0;o<s;o++)i=r[o],e.call(null,t[i],i,t)}}function T(t,e){e=e.toLowerCase();const n=Object.keys(t);let o,r=n.length;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=t=>!p(t)&&t!==N,x=(j="undefined"!=typeof Uint8Array&&a(Uint8Array),t=>j&&t instanceof j);var j;const L=u("HTMLFormElement"),P=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),k=u("RegExp"),F=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),o={};A(n,((n,r)=>{let s;!1!==(s=e(n,r,t))&&(o[r]=s||n)})),Object.defineProperties(t,o)},_="abcdefghijklmnopqrstuvwxyz",D="0123456789",U={DIGIT:D,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+D},B=u("AsyncFunction"),I={isArray:d,isArrayBuffer:h,isBuffer:function(t){return null!==t&&!p(t)&&null!==t.constructor&&!p(t.constructor)&&y(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||y(t.append)&&("formdata"===(e=c(t))||"object"===e&&y(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&h(t.buffer),e},isString:m,isNumber:g,isBoolean:t=>!0===t||!1===t,isObject:b,isPlainObject:w,isUndefined:p,isDate:E,isFile:O,isBlob:v,isRegExp:k,isFunction:y,isStream:t=>b(t)&&y(t.pipe),isURLSearchParams:R,isTypedArray:x,isFileList:S,forEach:A,merge:function t(){const{caseless:e}=C(this)&&this||{},n={},o=(o,r)=>{const s=e&&T(n,r)||r;w(n[s])&&w(o)?n[s]=t(n[s],o):w(o)?n[s]=t({},o):d(o)?n[s]=o.slice():n[s]=o};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&A(arguments[t],o);return n},extend:(t,e,n,{allOwnKeys:o}={})=>(A(e,((e,o)=>{n&&y(e)?t[o]=s(e,n):t[o]=e}),{allOwnKeys:o}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,o)=>{t.prototype=Object.create(e.prototype,o),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,o)=>{let r,s,i;const c={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o&&!o(i,t,e)||c[i]||(e[i]=t[i],c[i]=!0);t=!1!==n&&a(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:c,kindOfTest:u,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const o=t.indexOf(e,n);return-1!==o&&o===n},toArray:t=>{if(!t)return null;if(d(t))return t;let e=t.length;if(!g(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let o;for(;(o=n.next())&&!o.done;){const n=o.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const o=[];for(;null!==(n=t.exec(e));)o.push(n);return o},isHTMLForm:L,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:F,freezeMethods:t=>{F(t,((e,n)=>{if(y(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const o=t[n];y(o)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},o=t=>{t.forEach((t=>{n[t]=!0}))};return d(t)?o(t):o(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:T,global:N,isContextDefined:C,ALPHABET:U,generateString:(t=16,e=U.ALPHA_DIGIT)=>{let n="";const{length:o}=e;for(;t--;)n+=e[Math.random()*o|0];return n},isSpecCompliantForm:function(t){return!!(t&&y(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,o)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[o]=t;const r=d(t)?[]:{};return A(t,((t,e)=>{const s=n(t,o+1);!p(s)&&(r[e]=s)})),e[o]=void 0,r}}return t};return n(t,0)},isAsyncFn:B,isThenable:t=>t&&(b(t)||y(t))&&y(t.then)&&y(t.catch)};function q(t,e,n,o,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),o&&(this.request=o),r&&(this.response=r)}I.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=q.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{H[t]={value:t}})),Object.defineProperties(q,H),Object.defineProperty(M,"isAxiosError",{value:!0}),q.from=(t,e,n,o,r,s)=>{const i=Object.create(M);return I.toFlatObject(t,i,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),q.call(i,t.message,e,n,o,r),i.cause=t,i.name=t.name,s&&Object.assign(i,s),i};const z=q;function W(t){return I.isPlainObject(t)||I.isArray(t)}function V(t){return I.endsWith(t,"[]")?t.slice(0,-2):t}function J(t,e,n){return t?t.concat(e).map((function(t,e){return t=V(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const K=I.toFlatObject(I,{},null,(function(t){return/^is[A-Z]/.test(t)})),$=function(t,e,n){if(!I.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const o=(n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!I.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&I.isSpecCompliantForm(e);if(!I.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(I.isDate(t))return t.toISOString();if(!a&&I.isBlob(t))throw new z("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(t)||I.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(I.endsWith(n,"{}"))n=o?n:n.slice(0,-2),t=JSON.stringify(t);else if(I.isArray(t)&&function(t){return I.isArray(t)&&!t.some(W)}(t)||(I.isFileList(t)||I.endsWith(n,"[]"))&&(a=I.toArray(t)))return n=V(n),a.forEach((function(t,o){!I.isUndefined(t)&&null!==t&&e.append(!0===i?J([n],o,s):null===i?n:n+"[]",c(t))})),!1;return!!W(t)||(e.append(J(r,n,s),c(t)),!1)}const u=[],f=Object.assign(K,{defaultVisitor:l,convertValue:c,isVisitable:W});if(!I.isObject(t))throw new TypeError("data must be an object");return function t(n,o){if(!I.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+o.join("."));u.push(n),I.forEach(n,(function(n,s){!0===(!(I.isUndefined(n)||null===n)&&r.call(e,n,I.isString(s)?s.trim():s,o,f))&&t(n,o?o.concat(s):[s])})),u.pop()}}(t),e};function G(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function X(t,e){this._pairs=[],t&&$(t,this,e)}const Q=X.prototype;Q.append=function(t,e){this._pairs.push([t,e])},Q.toString=function(t){const e=t?function(e){return t.call(this,e,G)}:G;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};const Y=X;function Z(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tt(t,e,n){if(!e)return t;const o=n&&n.encode||Z,r=n&&n.serialize;let s;if(s=r?r(e,n):I.isURLSearchParams(e)?e.toString():new Y(e,n).toString(o),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}const et=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){I.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ot={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Y,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},rt=function(t){function e(t,n,o,r){let s=t[r++];const i=Number.isFinite(+s),a=r>=t.length;return s=!s&&I.isArray(o)?o.length:s,a?(I.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!i):(o[s]&&I.isObject(o[s])||(o[s]=[]),e(t,n,o[s],r)&&I.isArray(o[s])&&(o[s]=function(t){const e={},n=Object.keys(t);let o;const r=n.length;let s;for(o=0;o<r;o++)s=n[o],e[s]=t[s];return e}(o[s])),!i)}if(I.isFormData(t)&&I.isFunction(t.entries)){const n={};return I.forEachEntry(t,((t,o)=>{e(function(t){return I.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),o,n,0)})),n}return null},st={transitional:nt,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",o=n.indexOf("application/json")>-1,r=I.isObject(t);if(r&&I.isHTMLForm(t)&&(t=new FormData(t)),I.isFormData(t))return o&&o?JSON.stringify(rt(t)):t;if(I.isArrayBuffer(t)||I.isBuffer(t)||I.isStream(t)||I.isFile(t)||I.isBlob(t))return t;if(I.isArrayBufferView(t))return t.buffer;if(I.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return $(t,new ot.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,o){return ot.isNode&&I.isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((s=I.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return $(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||o?(e.setContentType("application/json",!1),function(t,e,n){if(I.isString(t))try{return(0,JSON.parse)(t),I.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||st.transitional,n=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&I.isString(t)&&(n&&!this.responseType||o)){const n=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw z.from(t,z.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],(t=>{st.headers[t]={}}));const it=st,at=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ct=Symbol("internals");function lt(t){return t&&String(t).trim().toLowerCase()}function ut(t){return!1===t||null==t?t:I.isArray(t)?t.map(ut):String(t)}function ft(t,e,n,o,r){return I.isFunction(o)?o.call(this,e,n):(r&&(e=n),I.isString(e)?I.isString(o)?-1!==e.indexOf(o):I.isRegExp(o)?o.test(e):void 0:void 0)}class dt{constructor(t){t&&this.set(t)}set(t,e,n){const o=this;function r(t,e,n){const r=lt(e);if(!r)throw new Error("header name must be a non-empty string");const s=I.findKey(o,r);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||e]=ut(t))}const s=(t,e)=>I.forEach(t,((t,n)=>r(t,n,e)));return I.isPlainObject(t)||t instanceof this.constructor?s(t,e):I.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s((t=>{const e={};let n,o,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),o=t.substring(r+1).trim(),!n||e[n]&&at[n]||("set-cookie"===n?e[n]?e[n].push(o):e[n]=[o]:e[n]=e[n]?e[n]+", "+o:o)})),e})(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=lt(t)){const n=I.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(t);)e[o[1]]=o[2];return e}(t);if(I.isFunction(e))return e.call(this,t,n);if(I.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=lt(t)){const n=I.findKey(this,t);return!(!n||void 0===this[n]||e&&!ft(0,this[n],n,e))}return!1}delete(t,e){const n=this;let o=!1;function r(t){if(t=lt(t)){const r=I.findKey(n,t);!r||e&&!ft(0,n[r],r,e)||(delete n[r],o=!0)}}return I.isArray(t)?t.forEach(r):r(t),o}clear(t){const e=Object.keys(this);let n=e.length,o=!1;for(;n--;){const r=e[n];t&&!ft(0,this[r],r,t,!0)||(delete this[r],o=!0)}return o}normalize(t){const e=this,n={};return I.forEach(this,((o,r)=>{const s=I.findKey(n,r);if(s)return e[s]=ut(o),void delete e[r];const i=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();i!==r&&delete e[r],e[i]=ut(o),n[i]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return I.forEach(this,((n,o)=>{null!=n&&!1!==n&&(e[o]=t&&I.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[ct]=this[ct]={accessors:{}}).accessors,n=this.prototype;function o(t){const o=lt(t);e[o]||(function(t,e){const n=I.toCamelCase(" "+e);["get","set","has"].forEach((o=>{Object.defineProperty(t,o+n,{value:function(t,n,r){return this[o].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[o]=!0)}return I.isArray(t)?t.forEach(o):o(t),this}}dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),I.reduceDescriptors(dt.prototype,(({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}})),I.freezeMethods(dt);const pt=dt;function ht(t,e){const n=this||it,o=e||n,r=pt.from(o.headers);let s=o.data;return I.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function mt(t){return!(!t||!t.__CANCEL__)}function yt(t,e,n){z.call(this,null==t?"canceled":t,z.ERR_CANCELED,e,n),this.name="CanceledError"}I.inherits(yt,z,{__CANCEL__:!0});const gt=yt,bt=ot.isStandardBrowserEnv?{write:function(t,e,n,o,r,s){const i=[];i.push(t+"="+encodeURIComponent(e)),I.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),I.isString(o)&&i.push("path="+o),I.isString(r)&&i.push("domain="+r),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function wt(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}const Et=ot.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function o(n){let o=n;return t&&(e.setAttribute("href",o),o=e.href),e.setAttribute("href",o),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=o(window.location.href),function(t){const e=I.isString(t)?o(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Ot(t,e){let n=0;const o=function(t,e){t=t||10;const n=new Array(t),o=new Array(t);let r,s=0,i=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=o[i];r||(r=c),n[s]=a,o[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-r<e)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return r=>{const s=r.loaded,i=r.lengthComputable?r.total:void 0,a=s-n,c=o(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const vt="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let o=t.data;const r=pt.from(t.headers).normalize(),s=t.responseType;let i,a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}I.isFormData(o)&&(ot.isStandardBrowserEnv||ot.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.getContentType(/^\s*multipart\/form-data/)?I.isString(a=r.getContentType())&&r.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):r.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const u=wt(t.baseURL,t.url);function f(){if(!l)return;const o=pt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(t,e,n){const o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}((function(t){e(t),c()}),(function(t){n(t),c()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:o,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),tt(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(f)},l.onabort=function(){l&&(n(new z("Request aborted",z.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const o=t.transitional||nt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new z(e,o.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,l)),l=null},ot.isStandardBrowserEnv){const e=(t.withCredentials||Et(u))&&t.xsrfCookieName&&bt.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===o&&r.setContentType(null),"setRequestHeader"in l&&I.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),I.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",Ot(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Ot(t.onUploadProgress)),(t.cancelToken||t.signal)&&(i=e=>{l&&(n(!e||e.type?new gt(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));const d=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(u);d&&-1===ot.protocols.indexOf(d)?n(new z("Unsupported protocol "+d+":",z.ERR_BAD_REQUEST,t)):l.send(o||null)}))},St={http:null,xhr:vt};I.forEach(St,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));const Rt=t=>`- ${t}`,At=t=>I.isFunction(t)||null===t||!1===t,Tt=t=>{t=I.isArray(t)?t:[t];const{length:e}=t;let n,o;const r={};for(let s=0;s<e;s++){let e;if(n=t[s],o=n,!At(n)&&(o=St[(e=String(n)).toLowerCase()],void 0===o))throw new z(`Unknown adapter '${e}'`);if(o)break;r[e||"#"+s]=o}if(!o){const t=Object.entries(r).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));let n=e?t.length>1?"since :\n"+t.map(Rt).join("\n"):" "+Rt(t[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return o};function Nt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new gt(null,t)}function Ct(t){return Nt(t),t.headers=pt.from(t.headers),t.data=ht.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tt(t.adapter||it.adapter)(t).then((function(e){return Nt(t),e.data=ht.call(t,t.transformResponse,e),e.headers=pt.from(e.headers),e}),(function(e){return mt(e)||(Nt(t),e&&e.response&&(e.response.data=ht.call(t,t.transformResponse,e.response),e.response.headers=pt.from(e.response.headers))),Promise.reject(e)}))}const xt=t=>t instanceof pt?t.toJSON():t;function jt(t,e){e=e||{};const n={};function o(t,e,n){return I.isPlainObject(t)&&I.isPlainObject(e)?I.merge.call({caseless:n},t,e):I.isPlainObject(e)?I.merge({},e):I.isArray(e)?e.slice():e}function r(t,e,n){return I.isUndefined(e)?I.isUndefined(t)?void 0:o(void 0,t,n):o(t,e,n)}function s(t,e){if(!I.isUndefined(e))return o(void 0,e)}function i(t,e){return I.isUndefined(e)?I.isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}function a(n,r,s){return s in e?o(n,r):s in t?o(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(t,e)=>r(xt(t),xt(e),!0)};return I.forEach(Object.keys(Object.assign({},t,e)),(function(o){const s=c[o]||r,i=s(t[o],e[o],o);I.isUndefined(i)&&s!==a||(n[o]=i)})),n}const Lt={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Lt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Pt={};Lt.transitional=function(t,e,n){function o(t,e){return"[Axios v1.5.1] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new z(o(r," has been removed"+(e?" in "+e:"")),z.ERR_DEPRECATED);return e&&!Pt[r]&&(Pt[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};const kt={assertOptions:function(t,e,n){if("object"!=typeof t)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const o=Object.keys(t);let r=o.length;for(;r-- >0;){const s=o[r],i=e[s];if(i){const e=t[s],n=void 0===e||i(e,s,t);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Lt},Ft=kt.validators;class _t{constructor(t){this.defaults=t,this.interceptors={request:new et,response:new et}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=jt(this.defaults,e);const{transitional:n,paramsSerializer:o,headers:r}=e;void 0!==n&&kt.assertOptions(n,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),null!=o&&(I.isFunction(o)?e.paramsSerializer={serialize:o}:kt.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=r&&I.merge(r.common,r[e.method]);r&&I.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=pt.concat(s,r);const i=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,i.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,f=0;if(!a){const t=[Ct.bind(this),void 0];for(t.unshift.apply(t,i),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);f<u;)l=l.then(t[f++],t[f++]);return l}u=i.length;let d=e;for(f=0;f<u;){const t=i[f++],e=i[f++];try{d=t(d)}catch(t){e.call(this,t);break}}try{l=Ct.call(this,d)}catch(t){return Promise.reject(t)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(t){return tt(wt((t=jt(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}I.forEach(["delete","get","head","options"],(function(t){_t.prototype[t]=function(e,n){return this.request(jt(n||{},{method:t,url:e,data:(n||{}).data}))}})),I.forEach(["post","put","patch"],(function(t){function e(e){return function(n,o,r){return this.request(jt(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}_t.prototype[t]=e(),_t.prototype[t+"Form"]=e(!0)}));const Dt=_t;class Ut{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const o=new Promise((t=>{n.subscribe(t),e=t})).then(t);return o.cancel=function(){n.unsubscribe(e)},o},t((function(t,o,r){n.reason||(n.reason=new gt(t,o,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ut((function(e){t=e})),cancel:t}}}const Bt=Ut,It={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(It).forEach((([t,e])=>{It[e]=t}));const qt=It,Mt=function t(e){const n=new Dt(e),o=s(Dt.prototype.request,n);return I.extend(o,Dt.prototype,n,{allOwnKeys:!0}),I.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return t(jt(e,n))},o}(it);Mt.Axios=Dt,Mt.CanceledError=gt,Mt.CancelToken=Bt,Mt.isCancel=mt,Mt.VERSION="1.5.1",Mt.toFormData=$,Mt.AxiosError=z,Mt.Cancel=Mt.CanceledError,Mt.all=function(t){return Promise.all(t)},Mt.spread=function(t){return function(e){return t.apply(null,e)}},Mt.isAxiosError=function(t){return I.isObject(t)&&!0===t.isAxiosError},Mt.mergeConfig=jt,Mt.AxiosHeaders=pt,Mt.formToJSON=t=>rt(I.isHTMLForm(t)?new FormData(t):t),Mt.getAdapter=Tt,Mt.HttpStatusCode=qt,Mt.default=Mt;const Ht=Mt,{config:zt}=window.AppData,Wt=class{static async GetData(){try{const t=await Ht.get(`${zt.INSIGHTS_URL}/get-all`);return t.data?(localStorage.setItem("concorddata",t.data),JSON.parse(t.data)):r.BadRequest("Error Getting Data")}catch(t){throw Jt.ShowAlert(t.message),Jt.HideSpinner(),t}}static async PostData(t){try{const e=await Ht.post(zt.SERVER_URL+"/post-userdata",t,{headers:{"Content-Type":"application/json"}});200===e.status&&"OK"===e.statusText&&Jt.ShowAlert(e.data,"green")}catch(t){if(Ht.isAxiosError(t))throw t.response.data}}};class Vt{static HideSpinner(){const t=document.querySelector("#custom_news-data");t.innerHTML=null,t.innerHTML="<div style=\"font-family: 'Nunito', 'sans-serif'; font-weight: 700; font-size: 4rem;\" class=\"text-center text-uppercase\">ERROR 404. <br> Unable to find articles</div>"}static ShowAlert(t,n="#dc3545"){e()({text:t,duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"center",stopOnFocus:!0,style:{"font-family":'"Nunito", sans-serif',background:n},onClick:function(){}}).showToast()}static ScrollTo(){document.querySelectorAll(".home_news").forEach((t=>{t.addEventListener("click",(t=>{const e=document.querySelector(t.target.dataset.goto).getBoundingClientRect().top+pageYOffset-90;window.scrollTo({top:e,behavior:"smooth"}),document.querySelector(".nav-menu-wrapper").classList.remove("show")}))}))}static saveIDArticle(){Array.from(document.querySelectorAll(".readmore-card-btn")).forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-id");localStorage.setItem("Article-id",JSON.stringify(e))}))}))}static handleSubmit(){try{const t=document.querySelector("#lawbridge-form");if(!t)throw r.ErrorValidation("Form doesn't exist");t.addEventListener("submit",(async e=>{e.preventDefault();const[n,o]=function(t){const e=Array.from(t.querySelectorAll(".form-control")),n={};e.forEach((t=>n[`${t.getAttribute("name")}`]=t.value));const o=[],r="Invalid name",s="Invalid phone.Look at the correct format: +445566778899",i="Invalid email";if(Object.keys(n).length>3){(!n.name||n.name.length<2||n.name.length>30)&&o.push(r);const t=/^\+[1-9]\d{1,14}$/;n.phone&&t.test(n.phone)||o.push(s),n.email.trim()||o.push(i),(!n.subject||n.subject.length<2||n.subject.length>30)&&o.push("Invalid subject name")}else if(3===Object.keys(n).length){(!n.name||n.name.length<2||n.name.length>30)&&o.push(r);const t=/^\+[1-9]\d{1,14}$/;n.phone&&t.test(n.phone)||o.push(s),n.email.trim()||o.push(i)}return[n,o]}(t);if(o.length>0)o.forEach((t=>Vt.ShowAlert(t)));else try{await Wt.PostData(n),t.reset()}catch(t){t.errors.length>0&&t.errors.forEach((t=>Vt.ShowAlert(t))),Vt.ShowAlert(t.message)}}))}catch(t){t instanceof r&&Vt.ShowAlert(t.message)}}}const Jt=Vt;window.addEventListener("DOMContentLoaded",(()=>{try{Jt.handleSubmit()}catch(t){console.log("Error in main contacts js")}}))})()})();