webpackJsonp([15],{

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_removePolygon_vue__ = __webpack_require__(1748);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3228a70b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_removePolygon_vue__ = __webpack_require__(1765);
function injectStyle (ssrContext) {
  __webpack_require__(1763)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3228a70b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_removePolygon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3228a70b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_removePolygon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    
  },
  name: "removePolygon",
  methods:{
    removePolygon(){
      this.$emit('removePolygon');
    },
  }
});


/***/ }),

/***/ 1763:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1764);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("a102efe4", content, true, {});

/***/ }),

/***/ 1764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#removepolygon[data-v-3228a70b]{position:absolute;top:90px;left:540px;border:1px solid #44a9b3;background-color:#a9a9a9;height:40px;line-height:40px;width:90px;border-radius:10px}", ""]);

// exports


/***/ }),

/***/ 1765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"removepolygon"}},[_c('span',{on:{"click":function($event){_vm.removePolygon()}}},[_vm._v("移除多边形")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});