parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T0VR":[function(require,module,exports) {

},{"./../images/bg-pattern-desktop.svg":[["bg-pattern-desktop.8e63e549.svg","ZPN1"],"ZPN1"],"./../images/hero-desktop.jpg":[["hero-desktop.97cfa8fb.jpg","jXjz"],"jXjz"],"./../images/logo.svg":[["logo.e9020f4d.svg","pLZI"],"pLZI"],"./../images/icon-arrow.svg":[["icon-arrow.68b25e3d.svg","NUs2"],"NUs2"]}],"H99C":[function(require,module,exports) {
"use strict";require("./style.scss");var e=document.querySelector(".subscribe"),i=document.querySelector("#error_message"),t=document.querySelector("#btn"),r=document.querySelector("#icon_error");function s(){var t=document.querySelector("#email");!1===/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t.value)?(e.style.border="0.5px solid red",i.style.visibility="visible",r.style.visibility="visible"):(e.style.border="0.5px solid hsl(0, 39%, 85%)",i.style.visibility="hidden",r.style.visibility="hidden")}t.addEventListener("click",s);
},{"./style.scss":"T0VR"}]},{},["H99C"], null)
//# sourceMappingURL=src.405c26b1.js.map