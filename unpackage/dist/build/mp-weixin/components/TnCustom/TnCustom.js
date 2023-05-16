(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/TnCustom/TnCustom"],{"0776":function(t,n,a){"use strict";a.r(n);var e=a("c20a"),u=a("b22f");for(var c in u)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return u[t]}))}(c);a("882c");var o=a("f0c5"),r=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"668b00ce",null,!1,e["a"],void 0);n["default"]=r.exports},"1cf8":function(t,n,a){"use strict";(function(t){var e=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e(a("da60")),c={name:"TnCustom",data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,e="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&("".concat(e,"background-image:url(").concat(a,");"),(0,u.default)("style")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},isLeft:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};n.default=c}).call(this,a("543d")["default"])},2974:function(t,n,a){},"882c":function(t,n,a){"use strict";var e=a("2974"),u=a.n(e);u.a},b22f:function(t,n,a){"use strict";a.r(n);var e=a("1cf8"),u=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=u.a},c20a:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/TnCustom/TnCustom-create-component',
    {
        'components/TnCustom/TnCustom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0776"))
        })
    },
    [['components/TnCustom/TnCustom-create-component']]
]);
