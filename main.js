/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t){"Escape"===t.key&&n(document.querySelector(".popup_is-opened"))}function e(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&n(t.currentTarget),t.target.classList.contains("popup__close")&&n(t.target.closest(".popup"))}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",t)}function n(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",t)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,c=Object.create(o.prototype),a=new A(n||[]);return i(c,"_invoke",{value:C(t,r,a)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function S(){}var w={};p(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(P([])));E&&E!==r&&n.call(E,u)&&(w=E);var k=S.prototype=b.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(c,i,a,u){var s=d(t[c],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==o(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var c;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return c=c?c.then(o,o):o()}})}function C(e,r,n){var o=h;return function(c,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===c)throw i;return{value:t,done:!0}}for(n.method=c,n.arg=i;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var c=d(o,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,_;var i=c.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var c=-1,i=function r(){for(;++c<e.length;)if(n.call(e,c))return r.value=e[c],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return g.prototype=S,i(k,"constructor",{value:S,configurable:!0}),i(S,"constructor",{value:g,configurable:!0}),g.displayName=p(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,p(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},x(q.prototype),p(q.prototype,s,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var i=new q(f(t,r,n,o),c);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),p(k,l,"Generator"),p(k,u,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function i(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}a(void 0)}))}}var u={baseUrl:"https://nomoreparties.co/v1/wff-cohort-9",headers:{authorization:"074d8ca8-f33d-4943-9ac9-367a64b981ac","Content-Type":"application/json"}},s=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},l=function(){var t=a(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.baseUrl,"/users/me"),{method:"GET",headers:u.headers});case 2:return e=t.sent,t.abrupt("return",s(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u.baseUrl,"/cards"),{method:"GET",headers:u.headers});case 2:return e=t.sent,t.abrupt("return",s(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=a(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:e,link:r})}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:u.headers}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:u.headers}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:u.headers}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:e})}).then((function(t){return s(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function _(t,e,r,n,o,c){var i=e.querySelector(".card").cloneNode(!0),a=i.querySelector(".card__delete-button"),u=i.querySelector(".card__image"),s=i.querySelector(".card__like-button"),l=i.querySelector(".card__like-border"),p=t._id;return u.src=t.link,u.alt=t.name,i.querySelector(".card__title").textContent=t.name,l.textContent=t.likes.length,t.likes.some((function(t){return t._id===c}))&&s.classList.add("card__like-button_is-active"),c===t.owner._id?(a.classList.remove("card__delete-button-hidden"),a.addEventListener("click",(function(){r(p,i)}))):a.classList.add("card__delete-button-hidden"),s.addEventListener("click",(function(){o(s,likeCounter,p)})),u.addEventListener("click",(function(){return n(t)})),i}function b(t,e,r){(t.classList.contains("card__like-button_is-active")?v:y)(r).then((function(r){t.classList.toggle("card__like-button_is-active"),e.textContent=r.likes.length})).catch((function(t){return console.log(t)}))}function g(t,e){h(t).then((function(){return e.remove()})).catch((function(t){return console.log(t)}))}var S=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},w=function(t,e,r){L(t)?E(e,r.inactiveButtonClass):(e.disabled=!1,e.classList.remove(r.inactiveButtonClass))},L=function(t){return t.some((function(t){return!t.validity.valid}))},E=function(t,e){t.disabled=!0,t.classList.add(e.inactiveButtonClass)},k=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);E(n,e.inactiveButtonClass),r.forEach((function(r){S(t,r,e.inputErrorClass,e.errorClass)}))};function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var q=document.querySelector("#card-template").content,C=document.querySelector(".places__list"),O=document.querySelector(".popup_type_edit"),j=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup_type_image"),A=document.querySelector(".profile__edit-button"),P=document.querySelector(".profile__add-button"),N=O.querySelector(".popup__button"),U=document.querySelector(".popup__image"),B=document.querySelector(".popup__caption"),G=O.querySelector(".popup__close"),I=j.querySelector(".popup__close"),D=document.forms["edit-profile"],F=D.querySelector(".popup__input_type_name"),J=D.querySelector(".popup__input_type_description"),H=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),Y=j.querySelector(".popup__form"),z=Y.querySelector(".popup__input_type_card-name"),$=Y.querySelector(".popup__input_type_url"),K=document.querySelector(".profile__image-cover"),Q=document.querySelector(".profile__image"),R=document.querySelector(".popup_type_avatar"),V=R.querySelector(".popup__close"),W=document.forms.avatar_edit,X=W.querySelector(".popup__input_type_url"),Z=R.querySelector(".popup__button"),tt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var et,rt,nt=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"};function ot(t){U.src=t.link,U.alt=t.name,B.textContent=t.name,r(T)}A.addEventListener("click",(function(){r(O),F.value=H.textContent,J.value=M.textContent,k(D,tt)})),G.addEventListener("click",(function(){return n(O)})),K.addEventListener("click",(function(){r(R),W.reset(),k(W,tt)})),V.addEventListener("click",(function(){n(R)})),W.addEventListener("submit",(function(t){t.preventDefault();var e=X.value;Q.style.backgroundImage=e,nt(!0,R.querySelector(".popup__button")),Z.disabled=!0,m(e).then((function(t){Q.style.backgroundImage="url('".concat(t.avatar,"')"),n(R)})).catch((function(t){console.log(t)})).finally((function(){W.reset(),nt(!1,W.querySelector(".popup__button"))}))})),D.addEventListener("submit",(function(t){t.preventDefault();var e=F.value,r=J.value;nt(!0,O.querySelector(".popup__button")),N.disabled=!0,f(e,r).then((function(t){H.textContent=t.name,M.textContent=t.about,n(O)})).catch((function(t){console.log(t)})).finally((function(){nt(!1,O.querySelector(".popup__button"))}))})),Y.addEventListener("submit",(function(t){t.preventDefault();var e=z.value,r=$.value;nt(!0,Y.querySelector(".popup__button")),Z.disabled=!0,d(e,r).then((function(t){var e=_(t,q,g,ot,b,et);C.prepend(e),n(j)})).catch((function(t){console.log(t)})).finally((function(){Y.reset(),nt(!1,Y.querySelector(".popup__button"))}))})),P.addEventListener("click",(function(){return r(j)})),I.addEventListener("click",(function(){return n(j)})),T.addEventListener("click",e),j.addEventListener("click",e),O.addEventListener("click",e),R.addEventListener("click",e),Promise.all([l(),p()]),Promise.all([l(),p()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,i,a=[],u=!0,s=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];H.textContent=o.name,M.textContent=o.about,et=o._id,Q.style.backgroundImage="url(".concat(o.avatar,")"),function(t,e){t.forEach((function(t){!function(t,e,r,n,o,c,i){var a=e(t,r,n,o,c,i);C.append(a)}(t,_,q,g,ot,b,e)}))}(c,et)})).catch((function(t){console.log(t)})),rt=tt,Array.from(document.querySelectorAll(rt.formSelector)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);w(r,n,e.inactiveButtonClass),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.valid?S(t,e,r.inputErrorClass,r.errorClass):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage,r.inputErrorClass,r.errorClass)}(t,o,e.inputErrorClass,e.errorClass),w(r,n,e.inactiveButtonClass)}))}))}(t,rt.inputSelector)}))})();