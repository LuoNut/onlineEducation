(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inform/detail/detail"],{444:function(e,t,n){"use strict";(function(e,t){var r=n(4);n(26),n(27);r(n(25));var a=r(n(445));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},445:function(e,t,n){"use strict";n.r(t);var r=n(446),a=n(448);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(450);var o,u=n(46),c=Object(u["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"731d9322",null,!1,r["components"],o);c.options.__file="pages/inform/detail/detail.vue",t["default"]=c.exports},446:function(e,t,n){"use strict";n.r(t);var r=n(447);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},447:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.formatDate(e.informData.publish_date));e.$mp.data=Object.assign({},{$root:{m0:n}})},i=!1,o=[];a._withStripped=!0},448:function(e,t,n){"use strict";n.r(t);var r=n(449),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},449:function(e,t,n){"use strict";(function(e){var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(28)),i=r(n(31)),o=e.database(),u={data:function(){return{informId:"",informData:{}}},onLoad:function(e){this.informId=e.id,this.getArticleData()},methods:{formatDate:function(e){var t=new Date,n=t.getMonth()+1,r=t.getHours();r<10&&(r="0"+r);var a=t.getMinutes();a<10&&(a="0"+a);var i=t.getFullYear()+"-"+n+"-"+t.getDate();return i},getArticleData:function(){var e=this;return(0,i.default)(a.default.mark((function t(){var n,r,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=o.collection("inform").where('"'.concat(e.informId,'" == _id')).getTemp(),r=o.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp(),t.next=4,o.collection(n,r).get();case 4:i=t.sent,e.informData=i.result.data[0],console.log(e.informData);case 7:case"end":return t.stop()}}),t)})))()}}};t.default=u}).call(this,n(27)["default"])},450:function(e,t,n){"use strict";n.r(t);var r=n(451),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},451:function(e,t,n){}},[[444,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/inform/detail/detail.js.map