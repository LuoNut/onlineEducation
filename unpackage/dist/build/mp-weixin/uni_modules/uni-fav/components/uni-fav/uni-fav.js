(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-fav/components/uni-fav/uni-fav"],{"132d":function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n("37dc"),u=o(n("3e1d")),i=(0,c.initVueI18n)(u.default),a=i.t,r={name:"UniFav",emits:["click"],props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"",contentFav:""}}},stat:{type:Boolean,default:!1}},computed:{contentDefault:function(){return this.contentText.contentDefault||a("uni-fav.collect")},contentFav:function(){return this.contentText.contentFav||a("uni-fav.collected")}},watch:{checked:function(){t.report&&this.stat&&(this.checked?t.report("收藏","收藏"):t.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=r}).call(this,n("543d")["default"])},"13c4":function(t,e,n){"use strict";n.r(e);var o=n("132d"),c=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=c.a},"14e2":function(t,e,n){"use strict";var o=n("3a0e"),c=n.n(o);c.a},"399a":function(t,e,n){"use strict";n.r(e);var o=n("ac2e"),c=n("13c4");for(var u in c)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(u);n("14e2");var i=n("f0c5"),a=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=a.exports},"3a0e":function(t,e,n){},ac2e:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"168a"))}},c=function(){var t=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-fav/components/uni-fav/uni-fav-create-component',
    {
        'uni_modules/uni-fav/components/uni-fav/uni-fav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("399a"))
        })
    },
    [['uni_modules/uni-fav/components/uni-fav/uni-fav-create-component']]
]);