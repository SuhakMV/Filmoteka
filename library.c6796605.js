!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequireb466;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequireb466=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"2Y0K8":"library.c6796605.js","35GBU":"index-main-mobile.7ce6b2f7.jpg","5UbS1":"index.cb5aac83.css","7nwxg":"library.1d67cfd5.js"}'));var i,c=o("8nrFW"),l=o("aNvF6");i=o("aNJCr").getBundleURL("2Y0K8")+o("iE7OH").resolve("35GBU");var u,s,d=o("fM7Nq"),f=(l=o("aNvF6"),o("aB0kH")),g=document.querySelector(".gallery"),p=document.querySelector(".pagination__wrapper"),m=document.querySelector(".pagination__pages"),v=document.querySelector("#next-button"),_=document.querySelector("#prev-button"),b=[];function h(e){!function(e){if(!(b=(0,l.getFromLocalStorage)(e))||!b.length)b=[],E(g),w("Oops...Nothing added.")}(e),b.length?(u=1,p.classList.remove("hidden"),s=Math.ceil(b.length/9),y(u)):p.classList.add("hidden")}function y(e){u=e;var n=9*(e-1),r=9*e,a=b.slice(n,r);E(g),w(a.map((function(e){var n,r=e.id,a=e.title,o=e.name,c=e.poster_path,u=e.genre_ids,s=e.release_date,d=e.first_air_date,f=e.vote_average,g=e.vote,p=void 0===g?f.toFixed(1)||" - ":g,m=e.year,v=void 0===m?s||d||" - ":m,_=(0,l.getFromLocalStorage)("genres"),b=u.map((function(e){return _.genres.find((function(t){return t.id===e}))}));u.length>3?(n=b.map((function(e){return e.name})).slice(0,2)).push("Other"):n=b.map((function(e){return e.name}));var h=c?"https://image.tmdb.org/t/p/w500".concat(c):t(i);return'<li class="gallery__item">\n                <a class="gallery__link" href="">\n                    <img class="gallery__image" data-id='.concat(r," src=").concat(h,' alt="').concat(a,'" loading="lazy">\n                </a>\n                <div class="gallery__info">\n                    <p class="gallery__title">').concat(a||o,'</p>\n                    <p class="gallery__genre">').concat(n.join(", "),'</p>\n                    <p class="gallery__year">').concat(v.slice(0,4),'</p>\n                    <p class="gallery__vote">').concat(p,"</p>\n                </div>\n            </li>")})).join("")),window.scrollTo({top:0,left:0,behavior:"smooth"}),L(document.documentElement.clientWidth>=768?(0,d.paginationMarkup)(u,s):(0,d.paginationMarkupMobile)(u,s)),document.querySelectorAll(".pagination__number").forEach((function(e){e.classList.remove("activePage"),Number(e.getAttribute("page-index"))===u&&e.classList.add("activePage")})),function(){1===u?S(_):x(_);s===u?S(v):x(v)}()}function L(e){var n;E(m);var r=e.map((function(e){if("number"==typeof e){var t=document.createElement("button");return t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t}if("string"==typeof e){var n=document.createElement("span");return n.innerHTML=e,n}}));(n=m).append.apply(n,t(c)(r))}function w(e){g.insertAdjacentHTML("beforeend",e)}function E(e){e.innerHTML=""}function S(e){e.classList.add("hidden")}function x(e){e.classList.remove("hidden")}_.addEventListener("click",(function(){y(u-1)})),v.addEventListener("click",(function(){y(u+1)})),m.addEventListener("click",(function(e){e.target.hasAttribute("page-index")&&y(Number(e.target.getAttribute("page-index")))})),g.addEventListener("click",(function(e){(0,f.default)(e,(function(){h(localStorage.getItem("page"))}))}));var q=o("acQVI");o("lRMGX");var H=document.querySelector(".button_watched"),F=document.querySelector(".button_queue"),k="watchedFilms",M="queuedFilms",N=function(){h(k),F.classList.remove("button_queue"),H.classList.add("button_queue"),H.classList.remove("button_watched"),F.classList.add("button_watched"),localStorage.setItem("page",k)},A=function(){h(M),H.classList.remove("button_queue"),F.classList.add("button_queue"),F.classList.remove("button_watched"),H.classList.add("button_watched"),localStorage.setItem("page",M)};window.addEventListener("load",(function(){localStorage.getItem("page")===k?N():A()})),H.addEventListener("click",N),F.addEventListener("click",A),(0,q.modalFooter)()}();
//# sourceMappingURL=library.c6796605.js.map
