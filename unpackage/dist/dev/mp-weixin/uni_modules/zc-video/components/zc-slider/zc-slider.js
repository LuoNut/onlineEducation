(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/zc-video/components/zc-slider/zc-slider"],{

/***/ 788:
/*!**************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zc-slider.vue?vue&type=template&id=2ece3ac5&scoped=true& */ 789);
/* harmony import */ var _zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zc-slider.vue?vue&type=script&lang=js& */ 791);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zc-slider.vue?vue&type=style&index=0&id=2ece3ac5&scoped=true&lang=css& */ 793);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ece3ac5",
  null,
  false,
  _zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/zc-video/components/zc-slider/zc-slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 789:
/*!*********************************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=template&id=2ece3ac5&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zc-slider.vue?vue&type=template&id=2ece3ac5&scoped=true& */ 790);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_template_id_2ece3ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 790:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=template&id=2ece3ac5&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 =
    _vm.showValueState() ||
    (_vm.infoAlign == "center" && _vm.direction != "vertical" && _vm.showInfo)
  var m1 = m0 ? _vm.valueWidth() : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 791:
/*!***************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zc-slider.vue?vue&type=script&lang=js& */ 792);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 792:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * 进度条，副进度条
 */
var _default = {
  created: function created() {
    /**
     * 获取系统屏幕信息，用于后续单位换算
     */
    var systemInfo = uni.getSystemInfoSync();
    this.px2rpx = 750 / systemInfo.screenWidth;
    this.screenWidth = systemInfo.screenWidth;
    this.screenHeight = systemInfo.screenHeight;
  },
  mounted: function mounted() {
    /**
     * 非NVUE movable-area 滑动事件获取到的位置是相对于文档的，获取组件位置，用于计算滑块位置
     */
    this.updateRect();
    this.mmax = this.valueFormat(this.max, false);
    this.percent = Math.abs((this.valueFormat(this.value) - this.min) / (this.mmax - this.min));
    this.subPercent = Math.abs((this.valueFormat(this.subValue, true) - this.min) / (this.mmax - this.min));
    if (this.reverse) {
      if (this.direction != 'vertical') {
        this.handleX = (1 - this.percent) * this.barMaxLength;
      } else {
        this.handleY = this.percent * this.barMaxLength;
      }
    } else {
      if (this.direction != 'vertical') {
        this.handleX = this.percent * this.barMaxLength;
      } else {
        this.handleY = (1 - this.percent) * this.barMaxLength;
      }
    }
    if (this.bpname == 'test') {
      console.log(this.mainInfo);
    }
  },
  /**
   * sub表示副进度条属性
   */
  props: {
    // 组件名字
    bpname: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '300px'
    },
    strokeWidth: {
      type: String,
      default: '30px'
    },
    // 偏移量
    screenLeft: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0,0,0,0)'
    },
    noActiveColor: {
      type: String,
      default: "rgba(115, 133, 159, 0.5)"
    },
    activeColor: {
      type: String,
      default: "#ffffff"
    },
    subActiveColor: {
      type: String,
      default: "rgba(145, 163, 189, 0.75)"
    },
    handleColor: {
      type: String,
      default: "#ffffff"
    },
    infoColor: {
      type: String,
      default: "#000000"
    },
    // 整个进度条的外边界圆角半径
    borderRadius: {
      type: String,
      default: '5px'
    },
    // 进度条内部滑轨圆角半径
    barBorderRadius: {
      type: String,
      default: '5px'
    },
    // active and subActive 是否显示圆角 NVUE默认true，其他默认false

    isActiveCircular: {
      type: Boolean,
      default: false
    },
    handleWidth: {
      type: String,
      default: '50px'
    },
    handleHeight: {
      type: String,
      default: '40px'
    },
    handleBorderRadius: {
      type: String,
      default: '5px'
    },
    handleImgUrl: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    infoEndText: {
      type: String,
      default: ""
    },
    infoFontSize: {
      type: String,
      default: '18px'
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    // 进度值显示value还是subValue
    infoContent: {
      type: String,
      default: 'value'
    },
    // 进度值显示位置 left, right, center, handle
    infoAlign: {
      type: String,
      default: 'right'
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    subValue: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    // 副进度条步长
    subStep: {
      type: Number,
      default: 1
    },
    // true连续滑动，false步进，即以step的间隔变化
    continuous: {
      type: Boolean,
      default: true
    },
    // 副进度条continuous
    subContinuous: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    // 挂件位置 top, right, bottom, left
    widgetPos: {
      type: String,
      default: "top"
    },
    widgetHeight: {
      type: [String, Number],
      default: '40px'
    },
    widgetWidth: {
      type: [String, Number],
      default: '50px'
    },
    widgetBorderRadius: {
      type: [String, Number],
      default: '5px'
    },
    // 挂件不透明度 0完全透明 1不透明
    widgetOpacity: {
      type: [String, Number],
      default: 1
    },
    // 挂件距离组件的偏移量，正数原理组件，负数靠近组件
    widgetOffset: {
      type: [String, Number],
      default: '0px'
    },
    // 挂件图片
    widgetUrl: {
      type: String,
      default: ''
    },
    // 挂件旋转角度
    widgetAngle: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      handleX: 50,
      handleY: 0,
      px2rpx: 1,
      percent: 0,
      // 0-1
      subPercent: 0,
      // 0-1
      mainInfo: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      },
      touchState: false,
      screenHeight: 0,
      screenWidth: 0,
      msubValue: 0,
      moveable: true,
      lastTouchTime: 0,
      mmax: 100
    };
  },
  watch: {
    /**
     * @param {Object} newValue
     * @param {Object} oldValue
     */
    value: function value(newValue, oldValue) {
      if (!this.touchState) {
        newValue = this.valueSetBoundary(newValue);
        this.percent = Math.abs((newValue - this.min) / (this.mmax - this.min));
      }
    },
    showValue: function showValue(newValue, oldValue) {
      // 步进
      if (!this.continuous) {
        var percent;
        if (this.reverse) {
          if (this.direction != 'vertical') {
            percent = Math.abs(1 - (newValue - this.min) / (this.mmax - this.min));
            this.handleX = percent * this.barMaxLength;
          } else {
            percent = Math.abs((newValue - this.min) / (this.mmax - this.min));
            this.handleY = percent * this.barMaxLength;
          }
        } else {
          if (this.direction != 'vertical') {
            percent = Math.abs((newValue - this.min) / (this.mmax - this.min));
            this.handleX = percent * this.barMaxLength;
          } else {
            percent = 1 - Math.abs((newValue - this.min) / (this.mmax - this.min));
            this.handleY = percent * this.barMaxLength;
          }
        }
      }
      this.$emit("change", {
        bpname: this.bpname,
        type: 'change',
        value: this.showValue,
        subValue: this.msubValue
      });
      this.$emit("valuechange", {
        bpname: this.bpname,
        type: 'valuechange',
        value: this.showValue,
        subValue: this.msubValue
      });
    },
    percent: function percent(newValue, oldValue) {
      // 连续
      if (this.continuous) {
        if (this.reverse) {
          if (this.direction != 'vertical') {
            this.handleX = (1 - newValue) * this.barMaxLength;
          } else {
            this.handleY = newValue * this.barMaxLength;
          }
        } else {
          if (this.direction != 'vertical') {
            this.handleX = newValue * this.barMaxLength;
          } else {
            this.handleY = (1 - newValue) * this.barMaxLength;
          }
        }
      }
    },
    subValue: function subValue(newValue, oldValue) {
      newValue = this.valueSetBoundary(newValue);
      if (this.subContinuous) {
        this.msubValue = newValue;
      } else {
        this.msubValue = this.valueFormat(newValue, true);
      }
      this.subPercent = Math.abs((newValue - this.min) / (this.mmax - this.min));
      this.$emit("change", {
        bpname: this.bpname,
        type: 'change',
        value: this.showValue,
        subValue: this.msubValue
      });
      this.$emit("subvaluechange", {
        bpname: this.bpname,
        type: 'subvaluechange',
        value: this.showValue,
        subValue: this.msubValue
      });
    },
    max: function max(newValue, oldValue) {
      this.mmax = this.valueFormat(newValue, false);
    }
  },
  computed: {
    bpWidth: function bpWidth() {
      if (this.direction == "vertical") {
        return this.maxHeight()[2];
      }
      return this.sizeDeal(this.width)[2];
    },
    bpHeight: function bpHeight() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.width)[2];
      }
      return this.maxHeight()[2];
    },
    mareaWidth: function mareaWidth() {
      if (this.direction == "vertical") {
        return this.maxHeight()[2];
      }
      var width = this.sizeDeal(this.width)[0];
      return width - this.textWidth() + 'px';
    },
    mareaHeight: function mareaHeight() {
      if (this.direction == "vertical") {
        var width = this.sizeDeal(this.width)[0];
        return width - this.textWidth() + 'px';
      }
      return this.maxHeight()[2];
    },
    mareaLeft: function mareaLeft() {
      if (this.showValueState()) {
        if (this.infoAlign == 'left') {
          return this.textWidth() + 'px';
        }
      }
      return 0;
    },
    barMaxHeight: function barMaxHeight() {
      if (this.direction == "vertical") {
        var width = this.sizeDeal(this.width)[0];
        var handleWidth = this.sizeDeal(this.handleWidth);
        return width - this.textWidth() - handleWidth[0] + 'px';
      }
      return this.sizeDeal(this.strokeWidth)[2];
    },
    barMaxWidth: function barMaxWidth() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.strokeWidth)[2];
      }
      var width = this.sizeDeal(this.width)[0];
      var handleWidth = this.sizeDeal(this.handleWidth);
      return width - this.textWidth() - handleWidth[0] + 'px';
    },
    barMaxLeft: function barMaxLeft() {
      if (this.showValueState()) {
        if (this.infoAlign == 'left') {
          return this.textWidth() + this.sizeDeal(this.handleWidth)[0] / 2 + 'px';
        }
      }
      if (this.direction != 'vertical') {
        return this.sizeDeal(this.handleWidth)[0] / 2 + 'px';
      }
      // vertical
      return (this.maxHeight()[0] - this.sizeDeal(this.strokeWidth)[0]) / 2 + 'px';
    },
    activeRight: function activeRight() {
      if (this.reverse) {
        return 0;
      }
      return 'unset';
    },
    activeLeft: function activeLeft() {
      if (this.reverse) {
        return 'unset';
      }
      return 0;
    },
    activeTop: function activeTop() {
      if (this.reverse) {
        return 0;
      }
      return 'unset';
    },
    activeBottom: function activeBottom() {
      if (this.reverse) {
        return 'unset';
      }
      return 0;
    },
    barActiveWidth: function barActiveWidth() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.strokeWidth)[2];
      }
      var percent;
      if (this.continuous) {
        percent = this.percent;
      } else {
        percent = Math.abs((this.showValue - this.min) / (this.mmax - this.min));
      }
      return this.barMaxLength * percent + 'px';
    },
    barActiveHeight: function barActiveHeight() {
      if (this.direction == "vertical") {
        var percent;
        if (this.continuous) {
          percent = this.percent;
        } else {
          percent = Math.abs((this.showValue - this.min) / (this.mmax - this.min));
        }
        return this.barMaxLength * percent + 'px';
      }
      return this.sizeDeal(this.strokeWidth)[2];
    },
    subActiveTop: function subActiveTop() {
      if (this.reverse) {
        return 0;
      }
      return 'unset';
    },
    subActiveBottom: function subActiveBottom() {
      if (this.reverse) {
        return 'unset';
      }
      return 0;
    },
    subActiveRight: function subActiveRight() {
      if (this.reverse) {
        return 0;
      }
      return 'unset';
    },
    subActiveLeft: function subActiveLeft() {
      if (this.reverse) {
        return 'unset';
      }
      return 0;
    },
    barSubActiveWidth: function barSubActiveWidth() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.strokeWidth)[2];
      }
      if (this.subContinuous) {
        return this.barMaxLength * this.subPercent + 'px';
      } else {
        return this.barMaxLength * Math.abs((this.msubValue - this.min) / (this.mmax - this.min)) + 'px';
      }
    },
    barSubActiveHeight: function barSubActiveHeight() {
      if (this.direction == "vertical") {
        if (this.subContinuous) {
          return this.barMaxLength * this.subPercent + 'px';
        } else {
          this.barMaxLength * Math.abs((this.msubValue - this.min) / (this.mmax - this.min)) + 'px';
        }
      }
      return this.sizeDeal(this.strokeWidth)[2];
    },
    mhandleWidth: function mhandleWidth() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.handleHeight)[2];
      }
      return this.sizeDeal(this.handleWidth)[2];
    },
    mhandleHeight: function mhandleHeight() {
      if (this.direction == "vertical") {
        return this.sizeDeal(this.handleWidth)[2];
      }
      return this.sizeDeal(this.handleHeight)[2];
    },
    mhandleTop: function mhandleTop() {
      if (this.direction == 'vertical') {
        return 0;
      } else {
        // 拖柄垂直居中
        var handle = this.sizeDeal(this.handleHeight)[0];
        var top = this.maxHeight()[0] / 2 - handle / 2 + 'px';
        return top;
      }
    },
    showValue: function showValue() {
      return this.valueFormat(this.percent * (this.mmax - this.min) + this.min);
    },
    textHeight: function textHeight() {
      var infoSize = this.sizeDeal(this.infoFontSize);
      return infoSize[0] * 1.2 + infoSize[1];
    },
    valueLeft: function valueLeft() {
      if (this.infoAlign == 'left') {
        return 0;
      } else if (this.infoAlign == 'center') {
        var width = this.sizeDeal(this.width);
        return width[0] / 2 - this.valueWidth() / 2 + 'px';
      } else if (this.infoAlign == 'right') {
        var _width = this.sizeDeal(this.width);
        return _width[0] - this.textWidth() + 'px';
      }
      return 0;
    },
    barMaxLength: function barMaxLength() {
      var width = this.sizeDeal(this.width)[0];
      var handleWidth = this.sizeDeal(this.handleWidth);
      return width - this.textWidth() - handleWidth[0];
    },
    mwidgetWidth: function mwidgetWidth() {
      return this.sizeDeal(this.widgetWidth)[2];
    },
    mwidgetHeight: function mwidgetHeight() {
      return this.sizeDeal(this.widgetHeight)[2];
    },
    moffset: function moffset() {
      var off = this.sizeDeal(this.widgetOffset);
      // console.log(off)
      switch (this.widgetPos) {
        case 'top':
          return this.sizeDeal(this.mhandleHeight)[0] + off[0] + 'px';
        case 'right':
          return this.sizeDeal(this.mhandleWidth)[0] + off[0] + 'px';
        case 'bottom':
          return this.sizeDeal(this.mhandleHeight)[0] + off[0] + 'px';
        case 'left':
          return this.sizeDeal(this.mhandleWidth)[0] + off[0] + 'px';
      }
      return 0;
    },
    mwidgetBorderRadius: function mwidgetBorderRadius() {
      return this.sizeDeal(this.widgetBorderRadius)[2];
    },
    mwidgetAngle: function mwidgetAngle() {
      return "rotate(" + Number(this.widgetAngle) + "deg)";
    }
  },
  methods: {
    prevent: function prevent(e) {
      console.log(1);
    },
    updateRect: function updateRect() {
      var _this = this;
      /**
       * 非NVUE movable-area 滑动事件获取到的位置是相对于文档的，获取组件位置，用于计算滑块位置
       */
      var query = uni.createSelectorQuery().in(this);
      query.select('.bing-progress').boundingClientRect(function (data) {
        _this.mainInfo.top = data.top;
        _this.mainInfo.left = data.left;
        _this.mainInfo.bottom = data.bottom;
        _this.mainInfo.right = data.right;
      }).exec();
    },
    touchstart: function touchstart(e) {
      if (!this.disabled) {
        /**
         * 防止组件在文档流中的位置被修改，导致组件进度值异常
         */
        this.updateRect();

        // 阻止组件信息异常情况下的进度值修改
        if (this.mainInfo.top > this.screenHeight) {
          this.$emit("dragstart", {
            bpname: this.bpname,
            type: 'dragstart',
            value: this.showValue,
            subValue: this.msubValue
          });
          return;
        }
        this.touchState = true;
        var detail = e.changedTouches[0];
        this.handleMove(detail);
        this.$emit("dragstart", {
          bpname: this.bpname,
          type: 'dragstart',
          value: this.showValue,
          subValue: this.msubValue
        });
      }
    },
    touchmove: function touchmove(e) {
      if (!this.disabled) {
        var detail = e.changedTouches[0];
        this.handleMove(detail);
        this.$emit("dragging", {
          bpname: this.bpname,
          type: 'dragging',
          value: this.showValue,
          subValue: this.msubValue
        });
      }
    },
    touchend: function touchend(e) {
      if (!this.disabled) {
        var detail = e.changedTouches[0];
        this.handleMove(detail);
        this.touchState = false;
        this.$emit("dragend", {
          bpname: this.bpname,
          type: 'dragend',
          value: this.showValue,
          subValue: this.msubValue
        });
      }
    },
    handleMove: function handleMove(detail) {
      var width = this.sizeDeal(this.width)[0];
      var handleWidth = this.sizeDeal(this.handleWidth);
      var percent;
      if (this.direction != 'vertical') {
        if (this.infoAlign == 'left') {
          percent = (detail.pageX - this.screenLeft - this.mainInfo.left - this.textWidth() - handleWidth[0] / 2) / this.barMaxLength;
        } else {
          percent = (detail.pageX - this.screenLeft - this.mainInfo.left - handleWidth[0] / 2) / this.barMaxLength;
        }
      } else {
        percent = 1 - (detail.clientY - this.screenLeft - this.mainInfo.top - handleWidth[0] / 2) / this.barMaxLength;
      }
      percent = percent > 0 ? percent : 0;
      percent = percent < 1 ? percent : 1;
      if (this.reverse) {
        this.percent = 1 - percent;
      } else {
        this.percent = percent;
      }
    },
    showValueState: function showValueState() {
      if (this.direction != 'vertical' && this.showInfo && (this.infoAlign == 'left' || this.infoAlign == 'right')) {
        return true;
      }
      return false;
    },
    valueSetBoundary: function valueSetBoundary(value) {
      // 控制value在合法范围内
      if (this.mmax > this.min) {
        value = value < this.mmax ? value : this.mmax;
        value = value > this.min ? value : this.min;
      } else {
        value = value > this.mmax ? value : this.mmax;
        value = value < this.min ? value : this.min;
      }
      return value;
    },
    /**
     * @param {Object} v
     * @param {Object} isSub 是否是副副进度条
     */
    valueFormat: function valueFormat(v, isSub) {
      // set step
      v = this.valueSetBoundary(v);
      var stepInfo = this.stepInfo(isSub);
      v = Number(v - this.min).toFixed(stepInfo[1]);
      var step = stepInfo[0] * Math.pow(10, stepInfo[1]);
      var valueE = v * Math.pow(10, stepInfo[1]);
      var remainder = valueE % step;
      var remainderInt = Math.floor(remainder);
      // 对余数四舍五入0-1
      var sub = Math.round(remainder / step);
      var value = (Math.floor(valueE) - remainderInt + sub * step) / Math.pow(10, stepInfo[1]);
      value = Number((value + this.min).toFixed(stepInfo[1]));
      return value;
    },
    /**
     * @param {Object} v
     * @param {Object} isSub 是否是副副进度条
     */
    stepInfo: function stepInfo(isSub) {
      // return step, decimal位数
      var step;
      if (isSub) {
        step = Number(this.subStep);
      } else {
        step = Number(this.step);
      }
      if (step <= 0 || !step) {
        return [1, 0];
      } else {
        var steps = step.toString().split('.');
        if (steps.length == 1) {
          return [step, 0];
        } else {
          return [step, steps[1].length];
        }
      }
    },
    textWidth: function textWidth() {
      if (this.showValueState()) {
        var numWidth = this.mmax.toString().length > this.min.toString().length ? this.mmax.toString().length : this.min.toString().length;
        var textWidth = ((numWidth + this.stepInfo()[1]) * 0.7 + this.infoEndText.length) * this.sizeDeal(this.infoFontSize)[0];
        return Number(textWidth.toFixed(2));
      }
      return 0;
    },
    valueWidth: function valueWidth() {
      var numWidth = this.mmax.toString().length > this.min.toString().length ? this.mmax.toString().length : this.min.toString().length;
      var textWidth = ((numWidth + this.stepInfo()[1]) * 0.7 + this.infoEndText.length) * this.sizeDeal(this.infoFontSize)[0];
      return Number(textWidth.toFixed(2));
    },
    maxHeight: function maxHeight() {
      var h = [];
      if (this.direction != 'vertical') {
        // direction 为 vertical 时不显示info
        var subt = this.infoEndText.match(/[^\x00-\xff]/g);
        if (subt) {
          h.push(this.sizeDeal(this.infoFontSize)[0] * 1.1);
        } else {
          h.push(this.sizeDeal(this.infoFontSize)[0]);
        }
      }
      h.push(this.sizeDeal(this.strokeWidth)[0]);
      h.push(this.sizeDeal(this.handleHeight)[0]);
      h.sort(function (a, b) {
        return b - a;
      }); // 降序
      return [h[0], 'px', h[0] + 'px'];
    },
    sizeDeal: function sizeDeal(size) {
      // 分离字体大小和单位,rpx 转 px
      var s = Number.isNaN(parseFloat(size)) ? 0 : parseFloat(size);
      var u = size.toString().replace(/[0-9\.]/g, '');
      if (u == 'rpx') {
        s /= this.px2rpx;
        u = 'px';
      } else if (u == 'vw') {
        u = 'px';
        s = s / 100 * this.screenWidth;
      } else if (u == 'vh') {
        u = 'px';
        s = s / 100 * this.screenHeight;
      } else {
        u = 'px';
      }
      return [s, u, s + u];
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 793:
/*!***********************************************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=style&index=0&id=2ece3ac5&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zc-slider.vue?vue&type=style&index=0&id=2ece3ac5&scoped=true&lang=css& */ 794);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zc_slider_vue_vue_type_style_index_0_id_2ece3ac5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 794:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/uni_modules/zc-video/components/zc-slider/zc-slider.vue?vue&type=style&index=0&id=2ece3ac5&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/zc-video/components/zc-slider/zc-slider.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/zc-video/components/zc-slider/zc-slider-create-component',
    {
        'uni_modules/zc-video/components/zc-slider/zc-slider-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(788))
        })
    },
    [['uni_modules/zc-video/components/zc-slider/zc-slider-create-component']]
]);
