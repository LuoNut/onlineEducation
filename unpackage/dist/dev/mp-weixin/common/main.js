(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{0:function(t,e,n){"use strict";(function(t,e,o){var u=n(4),r=u(n(11)),c=u(n(13));n(26),n(27);var a=u(n(39)),f=u(n(25)),i=u(n(47)),l=u(n(50));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t.__webpack_require_UNI_MP_PLUGIN__=n;var d=function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n(529))}.bind(null,n)).catch(n.oe)};f.default.component("cu-custom",d);var m=function(){Promise.all([n.e("common/vendor"),n.e("components/TnCustom/TnCustom")]).then(function(){return resolve(n(534))}.bind(null,n)).catch(n.oe)};f.default.component("tn-custom",m),f.default.use(l.default),f.default.config.productionTip=!1,a.default.mpType="app";try{var v=function(t){return!!t&&("object"===(0,c.default)(t)||"function"===typeof t)&&"function"===typeof t.then};e.addInterceptor({returnValue:function(t){return v(t)?new Promise((function(e,n){t.then((function(t){t[0]?n(t[0]):e(t[1])}))})):t}})}catch(O){}var b=new f.default(p(p({},a.default),{},{store:i.default}));o(b).$mount()}).call(this,n(1)["default"],n(2)["default"],n(2)["createApp"])},39:function(t,e,n){"use strict";n.r(e);var o=n(40);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n(44);var r,c,a,f,i=n(46),l=Object(i["default"])(o["default"],r,c,!1,null,null,null,!1,a,f);l.options.__file="App.vue",e["default"]=l.exports},40:function(t,e,n){"use strict";n.r(e);var o=n(41),u=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},41:function(t,e,n){"use strict";(function(t,o){var u=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(25)),c=n(42),a={onLaunch:function(){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight;var e=o.getMenuButtonBoundingClientRect();r.default.prototype.Custom=e,r.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight}})},onShow:function(){console.log("App Show"),c.store.hasLogin||this.$store.commit("setRoleId",0)},onHide:function(){console.log("App Hide")}};e.default=a}).call(this,n(2)["default"],n(1)["default"])},44:function(t,e,n){"use strict";n.r(e);var o=n(45),u=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},45:function(t,e,n){}},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map