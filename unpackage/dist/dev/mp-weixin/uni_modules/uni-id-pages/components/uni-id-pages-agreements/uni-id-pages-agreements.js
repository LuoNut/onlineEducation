(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements"],{646:function(e,n,t){"use strict";t.r(n);var r=t(647),u=t(649);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t(651);var o,s=t(46),a=Object(s["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"6abcbb91",null,!1,r["components"],o);a.options.__file="uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements.vue",n["default"]=a.exports},647:function(e,n,t){"use strict";t.r(n);var r=t(648);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},648:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,598))},uniPopupDialog:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(t.bind(null,605))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement,t=(e._self._c,e.agreements.length),r=t&&e.needAgreements?e.__map(e.agreements,(function(n,t){var r=e.__get_orig(n),u=e.hasAnd(e.agreements,t);return{$orig:r,m0:u}})):null,u=t&&(e.needAgreements||e.needPopupAgreements)?e.__map(e.agreements,(function(n,t){var r=e.__get_orig(n),u=e.hasAnd(e.agreements,t);return{$orig:r,m1:u}})):null;e.$mp.data=Object.assign({},{$root:{g0:t,l0:r,l1:u}})},i=!1,o=[];u._withStripped=!0},649:function(e,n,t){"use strict";t.r(n);var r=t(650),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=u.a},650:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t(43)),i=function(){return console.log("为定义")},o={name:"uni-agreements",computed:{agreements:function(){if(!u.default.agreements)return[];var e=u.default.agreements,n=e.serviceUrl,t=e.privacyUrl;return[{url:n,title:"用户服务协议"},{url:t,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,i()},popup:function(e){var n=this;this.needPopupAgreements=!0,this.$nextTick((function(){e&&(i=e),n.$refs.popupAgreement.open()}))},navigateTo:function(n){var t=n.url,r=n.title;e.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+t+"&title="+r,success:function(e){},fail:function(){},complete:function(){}})},hasAnd:function(e,n){return e.length-1>n},setAgree:function(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var e;this.needAgreements=((null===u.default||void 0===u.default||null===(e=u.default.agreements)||void 0===e?void 0:e.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};n.default=o}).call(this,t(2)["default"])},651:function(e,n,t){"use strict";t.r(n);var r=t(652),u=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=u.a},652:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(646))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component']]
]);
