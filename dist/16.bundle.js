webpackJsonp([16],{

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_singlebox_vue__ = __webpack_require__(1750);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23bf03ed_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_singlebox_vue__ = __webpack_require__(1771);
function injectStyle (ssrContext) {
  __webpack_require__(1769)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_singlebox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23bf03ed_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_singlebox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name:"Singlebox",
    data:function(){
        return{}
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: String,
        value: String,
        name: String
    },
    methods: {
        doThis() {
            this.$emit('change', this.$refs.radio.value);
        }
    }              
});


/***/ }),

/***/ 1769:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1770);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("51ca465b", content, true, {});

/***/ }),

/***/ 1770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),_c('input',{ref:"radio",attrs:{"name":_vm.name,"type":"radio"},domProps:{"checked":_vm.checked===_vm.value,"value":_vm.value},on:{"change":_vm.doThis}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});