(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-cli-shared/components/unicloud-db"],{842:function(t,e,n){"use strict";n.r(e);var i=n(843),a=n(845);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,s=n(46),c=Object(s["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],r);c.options.__file="HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/uni-cli-shared/components/unicloud-db.vue",e["default"]=c.exports},843:function(t,e,n){"use strict";n.r(e);var i=n(844);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},844:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;"augmented"===t.$scope.data.scopedSlotsCompiler&&t.$setScopedSlotsParams("default",{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})},o=!1,r=[];a._withStripped=!0},845:function(t,e,n){"use strict";n.r(e);var i=n(846),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},846:function(t,e,n){"use strict";(function(t,i){var a=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(18)),r=a(n(13)),s=n(22),c=a(n(847)),l=(0,s.initVueI18n)(c.default),d=l.t,u={load:"load",error:"error"},h={add:"add",replace:"replace"},f={auto:"auto",onready:"onready",manual:"manual"},g=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],p={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return g.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==f.manual){for(var i=!1,a=2;a<e.length;a++)if(e[a]!==n[a]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==f.auto||this.loadData()},methods:{loadData:function(t,e){var n=null,i=!1;"object"===(0,r.default)(t)?(t.clear&&(this.pageData===h.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===h.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.action,o=n.showToast,r=void 0===o||o,s=n.toastTitle,c=n.success,l=n.fail,u=n.complete,h=n.needConfirm,f=void 0===h||h,g=n.needLoading,p=void 0===g||g,v=n.loadingTitle,m=void 0===v?"":v;p&&t.showLoading({title:m});var y=i.database(this.spaceInfo);a&&(y=y.action(a)),y.collection(this.getMainCollection()).add(e).then((function(e){c&&c(e),r&&t.showToast({title:s||d("uniCloud.component.add.success")})})).catch((function(e){l&&l(e),f&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){p&&t.hideLoading(),u&&u()}))},remove:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.action,o=i.success,r=i.fail,s=i.complete,c=i.confirmTitle,l=i.confirmContent,u=i.needConfirm,h=void 0===u||u,f=i.needLoading,g=void 0===f||f,p=i.loadingTitle,v=void 0===p?"":p;e&&e.length&&(h?t.showModal({title:c||d("uniCloud.component.remove.showModal.title"),content:l||d("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(t){t.confirm&&n._execRemove(e,a,o,r,s,h,g,v)}}):this._execRemove(e,a,o,r,s,h,g,v))},update:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.action,r=a.showToast,s=void 0===r||r,c=a.toastTitle,l=a.success,u=a.fail,h=a.complete,f=a.needConfirm,g=void 0===f||f,p=a.needLoading,v=void 0===p||p,m=a.loadingTitle,y=void 0===m?"":m;v&&t.showLoading({title:y});var _=i.database(this.spaceInfo);return o&&(_=_.action(o)),_.collection(this.getMainCollection()).doc(e).update(n).then((function(e){l&&l(e),s&&t.showToast({title:c||d("uniCloud.component.update.success")})})).catch((function(e){u&&u(e),g&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){v&&t.hideLoading(),h&&h()}))},getMainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]},getTemp:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=i.database(this.spaceInfo);this.action&&(n=n.action(this.action)),n=(t=n).collection.apply(t,(0,o.default)(this.collectionArgs)),this.foreignKey&&(n=n.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(n=n.where(this.where)),this.field&&(n=n.field(this.field)),this.groupby&&(n=n.groupBy(this.groupby)),this.groupField&&(n=n.groupField(this.groupField)),!0===this.distinct&&(n=n.distinct()),this.orderby&&(n=n.orderBy(this.orderby));var a=this.paginationInternal,r=a.current,s=a.size,c={};this.getcount&&(c.getCount=this.getcount);var l={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=l),this.gettreepath&&(c.getTreePath=l),n=n.skip(s*(r-1)).limit(s),e?(n=n.getTemp(c),n.udb=this):n=n.get(c),n},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:i.length<this.pageSize,this.hasMore=!this._isEnded;var r,s=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=a),e&&e(s,this._isEnded,this.paginationInternal),this._dispatchEvent(u.load,s),this.getone||this.pageData===h.replace)?this.dataList=s:n?this.dataList=s:(r=this.dataList).push.apply(r,(0,o.default)(s))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(u.error,t),console.error(t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,a,o,r,s,c,l){var d=this;if(this.collection&&e){var u=Array.isArray(e)?e:[e];if(u.length){c&&t.showLoading({mask:!0,title:l});var f=i.database(this.spaceInfo),g=f.command,p=f;n&&(p=p.action(n)),p.collection(this.getMainCollection()).where({_id:g.in(u)}).remove().then((function(t){a&&a(t.result),d.pageData===h.replace?d.refresh():d.removeData(u)})).catch((function(e){o&&o(e),s&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){c&&t.hideLoading(),r&&r()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var a=e.indexOf(n[i]._id);a>=0&&(n.splice(i,1),e.splice(a,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=p}).call(this,n(2)["default"],n(27)["default"])}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/@dcloudio/uni-cli-shared/components/unicloud-db.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component',
    {
        'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(842))
        })
    },
    [['node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component']]
]);
