(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-parse/node/node"],{"3bb4":function(t,i,e){"use strict";i["a"]=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])}},"507a":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},r=[]},"8a67":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:function(){Promise.resolve().then(function(){return resolve(e("eea7"))}.bind(null,e)).catch(e.oe)}},mounted:function(){for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);},beforeDestroy:function(){},methods:{toJSON:function(){},play:function(i){if(this.root.pauseVideo){for(var e=!1,n=i.target.id,r=this.root._videos.length;r--;)this.root._videos[r].id==n?e=!0:this.root._videos[r].pause();if(!e){var o=t.createVideoContext(n,this);o.id=n,this.root._videos.push(o)}}},imgTap:function(i){var e=this.childs[i.currentTarget.dataset.i];if(e.a)return this.linkTap(e.a);e.attrs.ignore||(this.root.$emit("imgTap",e.attrs),this.root.previewImg&&t.previewImage({current:parseInt(e.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1==this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width)},linkTap:function(i){var e=i.currentTarget?this.childs[i.currentTarget.dataset.i].attrs:i,n=e.href;this.root.$emit("linkTap",e),n&&("#"==n[0]?this.root.navigateTo(n.substring(1)).catch((function(){})):n.includes("://")?this.root.copyLink&&t.setClipboardData({data:n,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:n,fail:function(){t.switchTab({url:n,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,e=this.childs[i];if("video"==e.name||"audio"==e.name){var n=(this.ctrl[i]||0)+1;if(n>e.src.length&&(n=0),n<e.src.length)return this.$set(this.ctrl,i,n)}else"img"==e.name&&this.opts[2]&&this.$set(this.ctrl,i,-1);this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}};i.default=n}).call(this,e("543d")["default"])},a05e:function(t,i,e){},a8fa:function(t,i,e){"use strict";e.r(i);var n=e("8a67"),r=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=r.a},abd4:function(t,i,e){"use strict";var n=e("a05e"),r=e.n(n);r.a},eea7:function(t,i,e){"use strict";e.r(i);var n=e("507a"),r=e("a8fa");for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(o);e("abd4");var a=e("f0c5"),s=e("3bb4"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);"function"===typeof s["a"]&&Object(s["a"])(u),i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-parse/node/node-create-component',
    {
        'uni_modules/uview-ui/components/u-parse/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eea7"))
        })
    },
    [['uni_modules/uview-ui/components/u-parse/node/node-create-component']]
]);
