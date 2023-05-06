(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/answer/reply/reply"],{

/***/ 422:
/*!********************************************************************************!*\
  !*** D:/桌面/onlineEducation1/main.js?{"page":"pages%2Fanswer%2Freply%2Freply"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _reply = _interopRequireDefault(__webpack_require__(/*! ./pages/answer/reply/reply.vue */ 423));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_reply.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 423:
/*!***********************************************************!*\
  !*** D:/桌面/onlineEducation1/pages/answer/reply/reply.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply.vue?vue&type=template&id=0c6010ed&scoped=true& */ 424);
/* harmony import */ var _reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reply.vue?vue&type=script&lang=js& */ 426);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reply.vue?vue&type=style&index=0&id=0c6010ed&lang=less&scoped=true& */ 428);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c6010ed",
  null,
  false,
  _reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/answer/reply/reply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 424:
/*!******************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=template&id=0c6010ed&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reply.vue?vue&type=template&id=0c6010ed&scoped=true& */ 425);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_template_id_0c6010ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 425:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=template&id=0c6010ed&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 706))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.lists.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 426:
/*!************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reply.vue?vue&type=script&lang=js& */ 427);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 427:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 30));
var _vue = __webpack_require__(/*! vue */ 25);
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ../../../uni_modules/uview-ui/libs/config/props/noNetwork */ 127));
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
//

var db = uniCloud.database();
var _default = {
  data: function data() {
    return {
      swiperIndex: 1,
      //swiper 当前下标
      show_hide: false,
      //题标是否隐藏 默认false 为隐藏
      istest: 1,
      //1为练习 2为模拟 3为考试
      choice: [2, 2, 5],
      //[选择正确，选择错误，未选择]
      subject_type_one: "",
      subject_type_two: "",
      schema: "",
      a: 0,
      lists: [],
      lists1: [{
        title: '请选择下列正确选项1',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 1,
        //1为单选 2为多选
        subject_type_one: '',
        //题目大类型
        subject_type_two: '',
        //题目小类型
        option: ['A', 'B', 'C', 'D'],
        //选项
        true_option: [0],
        //正确选项
        current: [0],
        //当前所选
        topic: true,
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: false,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [
        //选项
        {
          name: '正确答案',
          //选项
          code: true,
          //是否为正确答案
          click_index: true //选项是否选中
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项2',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 1,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D', 'E'],
        //选项
        true_option: [1],
        //正确选项
        current: [3],
        //当前所选
        topic: false,
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: false,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [
        //选项
        {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: true
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项3',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        //选项
        true_option: [0, 2],
        //正确选项
        current: [1, 2],
        //当前所选
        topic: false,
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: false,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [{
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: true
        }, {
          name: '正确答案',
          code: true,
          click_index: true
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项4',
        src_title: '../../static/banner02.jpg',
        //题目是否有图片
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        true_option: [1, 2, 3],
        //正确选项
        current: [1, 2, 3],
        //当前所选
        topic: true,
        code2: false,
        isimg: 1,
        //1为文字 2为图片 选项
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        testList: [{
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: true
        }, {
          name: '正确答案',
          code: true,
          click_index: true
        }, {
          name: '正确答案',
          code: true,
          click_index: true
        }]
      }, {
        title: '请选择下列正确选项5',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 1,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        //选项
        true_option: [0],
        //正确选项
        current: [],
        //当前所选
        topic: '',
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: true,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [
        //选项
        {
          name: '正确答案',
          //选项
          code: true,
          //是否为正确答案
          click_index: false //选项是否选中
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项6',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D', 'E'],
        //选项
        true_option: [0, 2, 4],
        //正确选项
        current: [],
        //当前所选
        topic: '',
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: true,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [
        //选项
        {
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项7',
        //题目
        src_title: '',
        //题目是否有图片
        isimg: 1,
        //1为文字 2为图片 选项
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        //选项
        true_option: [1, 3],
        //正确选项
        current: [],
        //当前所选
        topic: '',
        //所选是否正确 默认为'' true为正确 控制选项高亮
        code2: true,
        //选项选择状态 默认为true false为选择
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        //本题描述
        testList: [{
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项8',
        src_title: '',
        //题目是否有图片
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        true_option: [1, 2, 3],
        //正确选项
        current: [],
        //当前所选
        topic: '',
        code2: true,
        isimg: 2,
        //1为文字 2为图片 选项
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        testList: [{
          name: '../../static/banner01.jpg',
          code: false,
          click_index: false
        }, {
          name: '../../static/banner02.jpg',
          code: true,
          click_index: false
        }, {
          name: '../../static/banner03.jpg',
          code: true,
          click_index: false
        }, {
          name: '../../static/banner04.jpg',
          code: true,
          click_index: false
        }]
      }, {
        title: '请选择下列正确选项9',
        src_title: '../../static/banner02.jpg',
        //题目是否有图片
        code: 2,
        //1为单选 2为多选
        option: ['A', 'B', 'C', 'D'],
        true_option: [1, 3],
        //正确选项
        current: [],
        //当前所选
        topic: '',
        code2: true,
        isimg: 1,
        //1为文字 2为图片 选项
        alt: '正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案',
        testList: [{
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }, {
          name: '错误答案',
          code: false,
          click_index: false
        }, {
          name: '正确答案',
          code: true,
          click_index: false
        }]
      }]
    };
  },
  onLoad: function onLoad(e) {
    console.log(e);
    this.subject_type_one = e.subject_type_one;
    this.subject_type_two = e.subject_type_two;
    console.log(this.subject_type_one, this.subject_type_two);
    this.schema = e.schema;
    if (e.schema == 'question_bank') {
      console.log('1');
      this.getAnswer();
    } else {
      this.getErrorAnswer();
    }
  },
  methods: {
    //获取错题的功能函数
    getErrorAnswer: function getErrorAnswer() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var recordTemp, quesTemp, res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recordTemp = db.collection("record_questions").getTemp();
                console.log(_this.subject_type_one, _this.subject_type_two);
                quesTemp = db.collection("question_bank").where("\"".concat(_this.subject_type_one, "\" == subject_type_one && \"").concat(_this.subject_type_two, "\" == subject_type_two")).getTemp();
                _context.next = 5;
                return db.collection(quesTemp, recordTemp).get();
              case 5:
                res = _context.sent;
                console.log(res);
                if (!res.result.data.length) {
                  uni.showToast({
                    title: "暂时没有更多题目哦...",
                    icon: "none"
                  });
                  setTimeout(function () {
                    uni.navigateBack();
                  }, 1000);
                }
                _this.lists = res.result.data;
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //获取题库数据的功能函数
    getAnswer: function getAnswer() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return db.collection("question_bank").where("\"".concat(_this2.subject_type_one, "\" == subject_type_one && \"").concat(_this2.subject_type_two, "\" == subject_type_two && estimate == 3")).get();
              case 2:
                res = _context2.sent;
                console.log(res);
                if (!res.result.data.length) {
                  uni.showToast({
                    title: "暂时没有更多题目哦...",
                    icon: "none"
                  });
                  setTimeout(function () {
                    uni.navigateBack();
                  }, 1000);
                }
                _this2.lists = res.result.data;
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //点击下一题或者上一题
    changeSwiperIndex: function changeSwiperIndex(e) {
      if (e) {
        if (this.swiperIndex >= this.lists.length) {
          uni.showModal({
            content: "没有更多了哦...",
            showCancel: false
          });
          return;
        }
        this.swiperIndex += 1;
      } else {
        if (this.swiperIndex <= 1) {
          return;
        }
        this.swiperIndex -= 1;
      }
    },
    swiperChange: function swiperChange(e) {
      //swiper滑动
      console.log(e);
      this.swiperIndex = e.detail.current + 1; //当前题
    },
    //记录题目正确/错误情况
    recordError: function recordError(e) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return db.collection("record_questions").where("\"".concat(_this3.lists[_this3.swiperIndex - 1]._id, "\" == question_id")).get();
              case 2:
                res = _context3.sent;
                if (!res.result.affectedDocs) {
                  _context3.next = 8;
                  break;
                }
                _context3.next = 6;
                return db.collection("record_questions").where("\"".concat(_this3.lists[_this3.swiperIndex - 1]._id, "\" == question_id")).update({
                  "estimate": e
                });
              case 6:
                _context3.next = 9;
                break;
              case 8:
                db.collection("record_questions").add({
                  "question_id": _this3.lists[_this3.swiperIndex - 1]._id,
                  "estimate": e
                });
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    testItem: function testItem(a, b, c) {
      // a:当前题  b:当前选项 c:单选多选】
      var that = this;
      if (that.lists[a].code2) {
        //当前题是否已选
        that.lists[a].testList[b].click_index = !that.lists[a].testList[b].click_index; //切换选项选中状态
        if (c == 1) {
          //为1 表示单选
          that.lists[a].code2 = false; //为false 则表示已选
          that.lists[a].current = [b];
          if (that.lists[a].testList[b].code) {
            that.lists[a].topic = true;
            that.swiperIndex++;
            that.choice[0]++;
            that.choice[2]--;
            this.recordError(1); //记录对错情况
          } else {
            that.lists[a].topic = false;
            that.choice[1]++;
            that.choice[2]--;
            this.recordError(0); //记录对错情况
          }
        }
      }
    },
    btnNext: function btnNext(e) {
      //多选 确认按钮
      var that = this;
      var a = [];
      that.lists[e].testList.forEach(function (item, index) {
        if (item.click_index == true) {
          that.lists[e].current.push(index);
          if (item.code == true) {
            a.push(index);
          }
        }
      });
      console.log(that.lists[e].current.length > 0);
      if (that.lists[e].current.length > 0) {
        that.lists[e].code2 = false;
        console.log(a.length, that.lists[e].true_option.length, that.lists[e].current.length);
        if (a.length == that.lists[e].true_option.length && a.length == that.lists[e].current.length) {
          that.lists[e].topic = true;
          this.swiperIndex++;
          that.choice[0]++;
          that.choice[2]--;
          this.recordError(1); //记录对错情况
        } else {
          that.lists[e].topic = false;
          that.choice[1]++;
          that.choice[2]--;
          this.recordError(0); //记录对错情况
        }
      } else {
        uni.showToast({
          title: '请选择选项',
          icon: 'none',
          duration: 1500
        });
      }
    },
    topic: function topic(e) {
      console.log(this.lists[e].true_option, this.lists[e].current, !this.lists[e].code2);
      this.swiperIndex = e + 1;
      this.show_hide = !this.show_hide;
    },
    showFixed: function showFixed() {
      this.show_hide = !this.show_hide;
    },
    hideFixed: function hideFixed() {
      this.show_hide = !this.show_hide;
    },
    nullFixed: function nullFixed() {
      //占位 不可删
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 428:
/*!*********************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=style&index=0&id=0c6010ed&lang=less&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reply.vue?vue&type=style&index=0&id=0c6010ed&lang=less&scoped=true& */ 429);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reply_vue_vue_type_style_index_0_id_0c6010ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 429:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1/pages/answer/reply/reply.vue?vue&type=style&index=0&id=0c6010ed&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[422,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/answer/reply/reply.js.map