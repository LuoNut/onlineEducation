(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/home/home"],{180:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27);o(t(25));var r=o(t(181));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},181:function(e,n,t){"use strict";t.r(n);var o=t(182),r=t(184);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(186);var a,u=t(46),s=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"52760117",null,!1,o["components"],a);s.options.__file="pages/tabbar/home/home.vue",n["default"]=s.exports},182:function(e,n,t){"use strict";t.r(n);var o=t(183);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},183:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={tabbar:function(){return t.e("components/tabbar/tabbar").then(t.bind(null,563))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},i=!1,a=[];r._withStripped=!0},184:function(e,n,t){"use strict";t.r(n);var o=t(185),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},185:function(e,n,t){"use strict";(function(e,o){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(28)),a=r(t(31)),u=t(42),s=e.database(),c={data:function(){return{tabBerLists:[],total:{artNum:0,likeNum:0}}},computed:{userInfo:function(){return u.store.userInfo},hasLogin:function(){return u.store.hasLogin}},onLoad:function(){o.hideTabBar()},onShow:function(){this.tabBerLists=o.getStorageSync("tabBarList")},methods:{getTotal:function(){var e=this;return(0,a.default)(i.default.mark((function n(){var t,o,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.hasLogin){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s.collection("blog_article").where("user_id==$cloudEnv_uid").count();case 4:return o=n.sent,n.next=7,s.collection("blog_article").where("user_id==$cloudEnv_uid").groupBy("user_id").groupField("sum(like_count) as detal").get();case 7:r=n.sent,e.total.artNum=o.result.total,e.total.likeNum=null===(t=r.result.data[0])||void 0===t?void 0:t.detal;case 10:case"end":return n.stop()}}),n)})))()},toMyArticle:function(){this.isLoginPage()||o.navigateTo({url:"/pages/home/blog_article/list"})},toViewHistory:function(){this.isLoginPage()||o.navigateTo({url:"/pages/home/view_history/view_history"})},toCourseLike:function(){this.isLoginPage()||o.navigateTo({url:"/pages/home/course_like/course_like"})},toUserInfo:function(){this.hasLogin?o.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"}):o.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirecyUrl"})},goFeedback:function(){this.isLoginPage()||o.navigateTo({url:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"})},toNote:function(){this.isLoginPage()||o.navigateTo({url:"/pages/home/online_note/list"})},logout:function(){this.isLoginPage()||o.showModal({title:"是否确认退出登录",success:function(e){e.confirm&&u.mutations.logout()}})},isLoginPage:function(){return!this.hasLogin&&(o.showToast({title:"未登录",icon:"none"}),!0)}}};n.default=c}).call(this,t(27)["default"],t(2)["default"])},186:function(e,n,t){"use strict";t.r(n);var o=t(187),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},187:function(e,n,t){}},[[180,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/home/home.js.map