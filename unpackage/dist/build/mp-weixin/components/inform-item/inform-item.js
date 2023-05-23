(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/inform-item/inform-item"],{"1e73":function(t,e,n){"use strict";n.r(e);var a=n("7c00"),i=n("54c1");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b3f4");var u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"2caf7497",null,!1,a["a"],void 0);e["default"]=o.exports},"54c1":function(t,e,n){"use strict";n.r(e);var a=n("56ea"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"56ea":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"inform-item",props:{item:Object},data:function(){return{}},methods:{formatDate:function(t){var e=new Date,n=e.getMonth()+1,a=e.getHours();a<10&&(a="0"+a);var i=e.getMinutes();i<10&&(i="0"+i);var r=e.getFullYear()+"-"+n+"-"+e.getDate();return r},toDetail:function(e){t.navigateTo({url:"/pages/inform/detail/detail?id="+e})}}};e.default=n}).call(this,n("543d")["default"])},"7c00":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=(this._self._c,this.formatDate(this.item.publish_date));this.$mp.data=Object.assign({},{$root:{m0:e}})},i=[]},b3f4:function(t,e,n){"use strict";var a=n("cf80"),i=n.n(a);i.a},cf80:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/inform-item/inform-item-create-component',
    {
        'components/inform-item/inform-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1e73"))
        })
    },
    [['components/inform-item/inform-item-create-component']]
]);
