(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/view_history/view_history"],{408:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27);r(t(25));var o=r(t(409));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},409:function(e,n,t){"use strict";t.r(n);var r=t(410),o=t(412);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);var u,i=t(46),s=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);s.options.__file="pages/home/view_history/view_history.vue",n["default"]=s.exports},410:function(e,n,t){"use strict";t.r(n);var r=t(411);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},411:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return r}));try{r={courseList:function(){return t.e("components/course-list/course-list").then(t.bind(null,556))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},c=!1,u=[];o._withStripped=!0},412:function(e,n,t){"use strict";t.r(n);var r=t(413),o=t.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=o.a},413:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(28)),c=r(t(31)),u=e.database(),i={data:function(){return{courseLike:[]}},onLoad:function(){this.getCourseLike()},methods:{getCourseLike:function(){var e=this;return(0,c.default)(o.default.mark((function n(){var t,r,c,i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=u.collection("course_play_history").where("user_id==$cloudEnv_uid").orderBy("play_date desc").getTemp(),r=u.collection("course_video").field("_id,course_name,courseCover,user_id,publish_date").orderBy("publish_date desc").getTemp(),c=u.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp(),n.next=5,u.collection(t,r,c).get();case 5:i=n.sent,console.log(i),console.log(i),i.result.data.forEach((function(e){e.course_id[0].user_id=e.user_id})),console.log(i),e.courseLike=i.result.data;case 11:case"end":return n.stop()}}),n)})))()}}};n.default=i}).call(this,t(27)["default"])}},[[408,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/view_history/view_history.js.map