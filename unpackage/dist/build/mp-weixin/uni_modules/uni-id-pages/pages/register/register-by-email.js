(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-by-email"],{1379:function(e,n,t){"use strict";var i=t("a78b"),r=t.n(i);r.a},"33bf":function(e,n,t){"use strict";(function(e,n){var i=t("4ea4");t("dac0"),t("a9ff");i(t("66fd"));var r=i(t("7447"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},4450:function(e,n,t){"use strict";t.r(n);var i=t("fc23"),r=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},7447:function(e,n,t){"use strict";t.r(n);var i=t("f494"),r=t("4450");for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("1379");var o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=s.exports},a78b:function(e,n,t){},f494:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"22dd"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"2d4f"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"fcc1"))},uniIdPagesEmailForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form").then(t.bind(null,"27f2"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"c7e4"))}},r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusEmail=!1},e.e1=function(n){e.focusNickname=!1},e.e2=function(n){e.focusPassword=!1},e.e3=function(n){e.focusPassword2=!1})},u=[]},fc23:function(e,n,t){"use strict";(function(e,i){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("9523")),o=(r(t("88c5")),r(t("472c"))),s=(r(t("f0fb")),r(t("bcf1")));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,u.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=e.importObject("uni-id-co"),l={mixins:[o.default],data:function(){return{formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:c(c({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,n,t,i){return(/^1\d{10}$/.test(n)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n))&&i("昵称不能是：手机号或邮箱"),/^\d+$/.test(n)&&i("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(n)&&i("昵称不能包含中文"),!0}}],label:"昵称"}},s.default.getPwdRules()),{},{code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}}),focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(n){if(e.needAgreements&&!e.agree)return e.$refs.agreements.popup((function(){e.submitForm(n)}));e.submitForm(n)})).catch((function(n){var t=n[0].key;t=t.replace(t[0],t[0].toUpperCase()),e["focus"+t]=!0}))},submitForm:function(e){f.registerUserByEmail(this.formData).then((function(e){i.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(e){}})})).catch((function(e){console.log(e.message)}))},navigateBack:function(){i.navigateBack()},toLogin:function(){i.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName:function(){i.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register"})}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])}},[["33bf","common/runtime","common/vendor"]]]);