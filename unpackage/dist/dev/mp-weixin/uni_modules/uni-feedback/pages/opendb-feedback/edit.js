(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/edit"],{467:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27);o(t(25));var r=o(t(468));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},468:function(n,e,t){"use strict";t.r(e);var o=t(469),r=t(471);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(473);var u,c=t(46),a=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);a.options.__file="uni_modules/uni-feedback/pages/opendb-feedback/edit.vue",e["default"]=a.exports},469:function(n,e,t){"use strict";t.r(e);var o=t(470);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},470:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,660))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,669))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,794))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,617))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,u=[];r._withStripped=!0},471:function(n,e,t){"use strict";t.r(e);var o=t(472),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},472:function(n,e,t){"use strict";(function(n,o){var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(11)),u=t(464);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,i.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=n.database(),f="opendb-feedback";function l(n){var e={};for(var t in u.validator)n.indexOf(t)>-1&&(e[t]=u.validator[t]);return e}var d={data:function(){var n={content:"",imgs:[],contact:"",mobile:""};return{formData:n,formOptions:{},rules:a({},l(Object.keys(n)))}},onLoad:function(n){if(n.id){var e=n.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var n=this;o.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){n.submitForm(e)})).catch((function(){o.hideLoading()}))},submitForm:function(n){var e=this;s.collection(f).doc(this.formDataId).update(n).then((function(n){o.showToast({icon:"none",title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return o.navigateBack()}),500)})).catch((function(n){o.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){o.hideLoading()}))},getDetail:function(n){var e=this;o.showLoading({mask:!0}),console.log(n),s.collection(f).doc(n).field("content,imgs,contact,mobile").get().then((function(n){var t=n.result.data[0];t&&(e.formData=t)})).catch((function(n){o.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){o.hideLoading()}))}}};e.default=d}).call(this,t(27)["default"],t(2)["default"])},473:function(n,e,t){"use strict";t.r(e);var o=t(474),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},474:function(n,e,t){}},[[467,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-feedback/pages/opendb-feedback/edit.js.map