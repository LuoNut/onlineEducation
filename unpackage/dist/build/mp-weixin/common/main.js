(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"07e1":function(t,e,n){"use strict";var o=n("5f75"),u=n.n(o);u.a},"22df":function(t,e,n){"use strict";n.r(e);var o=n("6c64");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("07e1");var r=n("f0c5"),c=Object(r["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=c.exports},5031:function(t,e,n){"use strict";(function(t,e,o){var u=n("4ea4"),r=u(n("9523")),c=u(n("7037"));n("dac0"),n("a9ff");var a=u(n("22df")),f=u(n("66fd")),i=u(n("d50c")),l=u(n("0136"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t.__webpack_require_UNI_MP_PLUGIN__=n;f.default.component("cu-custom",(function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n("e5e3"))}.bind(null,n)).catch(n.oe)}));f.default.component("tn-custom",(function(){Promise.all([n.e("common/vendor"),n.e("components/TnCustom/TnCustom")]).then(function(){return resolve(n("0776"))}.bind(null,n)).catch(n.oe)})),f.default.use(l.default),f.default.config.productionTip=!1,a.default.mpType="app";try{e.addInterceptor({returnValue:function(t){return function(t){return!!t&&("object"===(0,c.default)(t)||"function"===typeof t)&&"function"===typeof t.then}(t)?new Promise((function(e,n){t.then((function(t){t[0]?n(t[0]):e(t[1])}))})):t}})}catch(m){}var p=new f.default(d(d({},a.default),{},{store:i.default}));o(p).$mount()}).call(this,n("bc2e")["default"],n("543d")["default"],n("543d")["createApp"])},"5f75":function(t,e,n){},"6c64":function(t,e,n){"use strict";n.r(e);var o=n("95a0"),u=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},"95a0":function(t,e,n){"use strict";(function(t,o){var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("66fd")),c=n("606a"),a={onLaunch:function(){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight;var e=o.getMenuButtonBoundingClientRect();r.default.prototype.Custom=e,r.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight}})},onShow:function(){console.log("App Show"),c.store.hasLogin||this.$store.commit("setRoleId",0)},onHide:function(){console.log("App Hide")}};e.default=a}).call(this,n("543d")["default"],n("bc2e")["default"])}},[["5031","common/runtime","common/vendor"]]]);