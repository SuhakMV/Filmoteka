!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequireb466;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequireb466=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.631bdfff.js","35GBU":"index-main-mobile.7ce6b2f7.jpg","5UbS1":"index.cb5aac83.css","7nwxg":"library.1d67cfd5.js"}'));var i,a=o("8nrFW"),c=o("aNvF6");i=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("35GBU");var u=o("fM7Nq"),s={};function l(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}};var f={},h=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",g={};function v(){}function m(){}function y(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(j([])));_&&_!==n&&r.call(_,i)&&(w=_);var L=y.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=y,u(L,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(f);try{regeneratorRuntime=h}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=h:Function("r","regeneratorRuntime = r")(h)}var d="861782ee1fc6aacf939bc06e51306075",p=o("aB0kH");o("lRMGX");var g=document.querySelector(".gallery");var v,m=(v=t(s)(t(f).mark((function e(n){var r,o,i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(d,"&language=en-US&page=").concat(n));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,i=JSON.stringify(o.results),localStorage.setItem("films",i),t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)}))),function(t){return v.apply(this,arguments)}),y=function(){var e=t(s)(t(f).mark((function e(n){var r,o,i;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(d,"&language=en-US&query=").concat(F,"&page=").concat(n,"&include_adult=false"));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,i=JSON.stringify(o.results),localStorage.setItem("films",i),t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();g.addEventListener("click",p.default);var w=document.querySelector("#preloader");w.classList.add("show-preloader"),window.addEventListener("load",(function(){setTimeout((function(){w.classList.remove("show-preloader")}),500)})),{el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hide")},hide:function(){this.el.classList.add("btn-up_hide")},addEventListener:function(){var t=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?t.show():t.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener();var b,_,L,E=o("lRMGX"),x=document.querySelector(".gallery"),S=document.querySelector(".pagination__wrapper"),k=document.querySelector(".pagination__pages"),T=document.querySelector("#next-button"),O=document.querySelector("#prev-button");function j(t){(L=t).results.length?(_=Math.ceil(L.total_results/20),N(t),(0,E.setPageTheme)()):S.classList.add("hidden")}function N(e){b=e.page;var n;e.results;H(x),n=function(e){var n=(0,c.getFromLocalStorage)("genres");return e.results.map((function(e){var r,o=e.title,a=e.id,c=e.poster_path,u=e.genre_ids,s=e.release_date,l=e.first_air_date,f=e.year,h=void 0===f?s||l||" - ":f,d=u.map((function(t){return n.genres.find((function(e){return e.id===t}))}));u.length>3?(r=d.map((function(t){return t.name})).slice(0,2)).push("Other"):r=d.map((function(t){return t.name}));var p=c?"https://image.tmdb.org/t/p/w500".concat(c):t(i);return'<li class="gallery__item">\n            <a class="gallery__link"  href="">\n                <img class="gallery__image" data-id='.concat(a,' src="').concat(p,'" alt="').concat(o,'" loading="lazy">\n            </a>\n            <div class="gallery__info">\n                <p class="gallery__title cut-text">').concat(o,'</p>\n\n                <p class="gallery__genre">').concat(r.join(", "),'</p>     \n                <p class="gallery__year">').concat(h.slice(0,4),"</p>\n\n            </div>\n        </li>")})).join("")}(e),x.insertAdjacentHTML("beforeend",n),window.scrollTo({top:0,left:0,behavior:"smooth"}),q(document.documentElement.clientWidth>=768?(0,u.paginationMarkup)(b,_):(0,u.paginationMarkupMobile)(b,_)),document.querySelectorAll(".pagination__number").forEach((function(t){t.classList.remove("activePage"),Number(t.getAttribute("page-index"))===b&&t.classList.add("activePage")})),function(){1===b?M(O):P(O);_===b?M(T):P(T)}(),(0,E.setPageTheme)()}function q(e){var n;H(k);var r=e.map((function(t){if("number"==typeof t){var e=document.createElement("button");return e.className="pagination__number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),e}if("string"==typeof t){var n=document.createElement("span");return n.innerHTML=t,n}}));(n=k).append.apply(n,t(a)(r))}function H(t){t.innerHTML=""}function M(t){t.classList.add("hidden")}function P(t){t.classList.remove("hidden")}function A(t){(L=t).results.length?(_=Math.ceil(L.total_results/20),N(t),(0,E.setPageTheme)(),O.addEventListener("click",(function(){y(b-1).then(N)})),T.addEventListener("click",(function(){y(b+1).then(N)})),k.addEventListener("click",(function(t){t.target.hasAttribute("page-index")&&y(Number(t.target.getAttribute("page-index"))).then(N)}))):S.classList.add("hidden")}O.addEventListener("click",(function(){m(b-1).then(N)})),T.addEventListener("click",(function(){m(b+1).then(N)})),k.addEventListener("click",(function(t){t.target.hasAttribute("page-index")&&m(Number(t.target.getAttribute("page-index"))).then(N)}));var F,G=o("acQVI");o("lRMGX"),localStorage.getItem("genres")?m(1).then(j):Promise.resolve(fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(d,"&language=en-US")).then((function(t){return t.json()})).then((function(t){return localStorage.setItem("genres",JSON.stringify(t)),t}))).then((function(t){m(1).then((function(t){return j(t)}))}));var R=document.querySelector(".header-search-form"),U=document.querySelector(".header-info__text");R.addEventListener("submit",(function(t){t.preventDefault(),""!==(F=R.elements.searchQuery.value.trim())&&y(1,F).then((function(t){return t.total_results?U.innerHTML="":U.innerHTML="Search result not successful. Enter the correct movie name and try again.",t})).then(A)}));var I=document.querySelector(".progress-bar");window.addEventListener("scroll",(function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=t/e*100;I.style.width=n+"%"})),(0,G.modalFooter)()}();
//# sourceMappingURL=index.631bdfff.js.map
