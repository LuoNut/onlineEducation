(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/list"],{"0368":function(n,e,t){"use strict";t.r(e);var u=t("3270"),o=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=o.a},1368:function(n,e,t){"use strict";t.r(e);var u=t("84ac"),o=t("0368");for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);var a=t("f0c5"),l=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=l.exports},3270:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},(function(){n.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{handleItemClick:function(e){n.navigateTo({url:"./detail?id="+e})},fabClick:function(){var e=this;n.navigateTo({url:"./opendb-feedback",events:{refreshData:function(){e.$refs.udb.loadData({clear:!0})}}})}}};e.default=t}).call(this,t("543d")["default"])},"84ac":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var u={unicloudDb:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(t.bind(null,"960d"))},uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,"2ce5"))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,"9eb8"))},uniLoadMore:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(t.bind(null,"e453"))},uniFab:function(){return t.e("uni_modules/uni-fab/components/uni-fab/uni-fab").then(t.bind(null,"6732"))}},o=function(){var n=this.$createElement;this._self._c},i=[]},9656:function(n,e,t){"use strict";(function(n,e){var u=t("4ea4");t("dac0"),t("a9ff");u(t("66fd"));var o=u(t("1368"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["9656","common/runtime","common/vendor"]]]);