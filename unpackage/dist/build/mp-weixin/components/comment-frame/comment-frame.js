(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/comment-frame/comment-frame"],{"04b8":function(e,t,n){},"0f3d":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var r={uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,"fcc1"))}},o=function(){var e=this.$createElement;this._self._c},c=[]},1947:function(e,t,n){"use strict";(function(e,r){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n("2eee")),u=o(n("9523")),a=o(n("c973")),i=n("606a"),f=o(n("db48")),s=n("325c");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=e.database(),m=e.importObject("utils-obj",{customUI:!0}),b={name:"commentFrame",props:{schema:{type:String},commentObj:{type:Object,default:function(){return{}}},placeholder:{type:String,default:"评论点什么吧..."}},data:function(){return{replyContent:""}},methods:{goComment:function(){var e=this;return(0,a.default)(c.default.mark((function t(){var n;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i.store.hasLogin){t.next=3;break}return r.showModal({title:"登录才能进行评论哦，是否进行登录？",success:function(e){e.confirm&&r.navigateTo({url:"/"+f.default.uniIdRouter.loginPage})}}),t.abrupt("return");case 3:if(e.replyContent){t.next=6;break}return r.showToast({title:"评论不能为空！",icon:"none"}),t.abrupt("return");case 6:return t.next=8,(0,s.getProvince)();case 8:n=t.sent,d.collection("".concat(e.schema,"_comment")).add(p({comment_content:e.replyContent,province:n},e.commentObj)).then((function(t){r.showToast({title:"评论成功",icon:"none"}),e.$emit("commentEvn",{comment_content:e.replyContent,province:n}),e.replyContent="",m.operation("".concat(e.schema,"_article"),"comment_count",e.commentObj.course_id,1)}));case 10:case"end":return t.stop()}}),t)})))()}}};t.default=b}).call(this,n("a9ff")["default"],n("543d")["default"])},be99a:function(e,t,n){"use strict";var r=n("04b8"),o=n.n(r);o.a},e71e:function(e,t,n){"use strict";n.r(t);var r=n("0f3d"),o=n("fc53");for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("be99a");var u=n("f0c5"),a=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"e1e9bfbe",null,!1,r["a"],void 0);t["default"]=a.exports},fc53:function(e,t,n){"use strict";n.r(t);var r=n("1947"),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/comment-frame/comment-frame-create-component',
    {
        'components/comment-frame/comment-frame-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e71e"))
        })
    },
    [['components/comment-frame/comment-frame-create-component']]
]);
