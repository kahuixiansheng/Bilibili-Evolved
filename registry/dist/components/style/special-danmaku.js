!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/special-danmaku"]=n():t["style/special-danmaku"]=n()}(self,(function(){return function(){var t,n,e={359:function(t,n,e){var o=e(645)((function(t){return t[1]}));o.push([t.id,"body.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var i=this[r][0];null!=i&&(a[i]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);o&&a[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},655:function(t,n,e){var o=e(359);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={id:t,exports:{}};return e[t](r,r.exports,a),r.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);a.r(r);var i={};t=t||[null,n({}),n([]),n(n)];for(var u=2&o&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},a.d(r,i),r},a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";a.d(r,{component:function(){return o}});var t=coreApis.componentApis.styledComponent,n=coreApis.utils.urls,e=coreApis.settings;const o={displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],...(0,t.toggleStyle)("disableSpecialDanmaku",(()=>Promise.resolve().then(a.t.bind(a,655,23))),(({metadata:t,settings:{options:n}})=>{Object.keys(n).forEach((n=>{(0,e.addComponentListener)(`${t.name}.${n}`,(t=>{document.body.classList.toggle(`disable-${n}-danmaku-style`,t)}),!0)}))})),urlInclude:n.playerUrls,description:{"zh-CN":"移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除."},options:{highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0}},commitHash:"03af3fac2fa27b4af88b8219ade89af08e2b1509",coreVersion:"2.1.6"}}(),r=r.component}()}));