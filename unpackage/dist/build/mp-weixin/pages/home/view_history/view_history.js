(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/view_history/view_history"],{"30c3":function(e,t,n){"use strict";(function(e,t){var u=n("4ea4");n("dac0"),n("a9ff");u(n("66fd"));var o=u(n("457c"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"457c":function(e,t,n){"use strict";n.r(t);var u=n("c7a1"),o=n("8303");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var i=n("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);t["default"]=c.exports},8303:function(e,t,n){"use strict";n.r(t);var u=n("8a48"),o=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=o.a},"8a48":function(e,t,n){"use strict";(function(e,u){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("2eee")),i=o(n("c973")),c=e.database(),a={data:function(){return{courseLike:[],listShow:!1}},onLoad:function(){this.getCourseLike()},methods:{getCourseLike:function(){var e=this;return(0,i.default)(r.default.mark((function t(){var n,o,i,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u.showLoading({}),n=c.collection("course_play_history").where("user_id==$cloudEnv_uid").orderBy("play_date desc").getTemp(),o=c.collection("course_video").field("_id,course_name,courseCover,user_id,publish_date").orderBy("publish_date desc").getTemp(),i=c.collection("uni-id-users").field("_id,username,name,avatar_file").getTemp(),t.next=6,c.collection(n,o,i).get();case 6:a=t.sent,console.log(a),a.result.data.forEach((function(e){e.course_id[0].publish_date=e.play_date,e.course_id[0].user_id=e.user_id})),e.courseLike=a.result.data,console.log(e.courseLike),u.hideLoading(),e.courseLike.length||(e.listShow=!0);case 13:case"end":return t.stop()}}),t)})))()}}};t.default=a}).call(this,n("a9ff")["default"],n("543d")["default"])},c7a1:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}));var u={uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"c94f"))},courseList:function(){return n.e("components/course-list/course-list").then(n.bind(null,"f767"))}},o=function(){var e=this.$createElement;this._self._c},r=[]}},[["30c3","common/runtime","common/vendor"]]]);