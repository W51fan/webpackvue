webpackJsonp([5,10,11],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_page05_vue__ = __webpack_require__(1749);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b8f5752_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page05_vue__ = __webpack_require__(1761);
function injectStyle (ssrContext) {
  __webpack_require__(1759)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b8f5752"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_page05_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b8f5752_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page05_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(1737);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71dbc74f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(1741);
function injectStyle (ssrContext) {
  __webpack_require__(1739)
}
var normalizeComponent = __webpack_require__(6)
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71dbc74f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_singlebox_vue__ = __webpack_require__(1738);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23bf03ed_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_singlebox_vue__ = __webpack_require__(1744);
function injectStyle (ssrContext) {
  __webpack_require__(1742)
}
var normalizeComponent = __webpack_require__(6)
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

/***/ 1737:
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
    name:"Mycheckbox",
    data:function(){
        return{}
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean,
        value: String
    },
    methods: {
        doThis() {
            this.$emit('change', !this.checked);
        }
    }              
});


/***/ }),

/***/ 1738:
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

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1740);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("bcc962dc", content, true, {});

/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox"},domProps:{"checked":_vm.checked,"value":_vm.value},on:{"change":_vm.doThis}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1743);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("51ca465b", content, true, {});

/***/ }),

/***/ 1743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),_c('input',{ref:"radio",attrs:{"name":_vm.name,"type":"radio"},domProps:{"checked":_vm.checked===_vm.value,"value":_vm.value},on:{"change":_vm.doThis}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_vue__ = __webpack_require__(1249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__singlebox_vue__ = __webpack_require__(1250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
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






    /* harmony default export */ __webpack_exports__["a"] = ({
        name:"Page05",
        components: {
            Mycheckbox: __WEBPACK_IMPORTED_MODULE_0__checkbox_vue__["default"],
            Singlebox: __WEBPACK_IMPORTED_MODULE_1__singlebox_vue__["default"]
        },
        data:function(){
            return {
                msg:"hreo",
                color:"color",
                inputdata:"",
                fruit: {//数据
                    apple: true,
                    peach: false
                },
                package: "peach"
            }
        },
        mounted: function () {},
        methods:{
            loadingdata(){
                let host = "http://"+location.host+'/';
                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(host+'src/jsons/test.json').then(res=>{
                    alert(res.data.text);
                }).catch(error =>{
                    alert(error);
                });
            },
        },	
    });


/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1760);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("ff73fe22", content, true, {});

/***/ }),

/***/ 1760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".color[data-v-1b8f5752]{background:#7fffd4}", ""]);

// exports


/***/ }),

/***/ 1761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',{class:_vm.color},[_vm._v("target: "+_vm._s(_vm.msg))]),_vm._v(" "),_c('div',[_c('input',{attrs:{"type":"button","value":"load"},on:{"click":function($event){_vm.loadingdata()}}})]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputdata),expression:"inputdata"}],attrs:{"placeholder":"請輸入"},domProps:{"value":(_vm.inputdata)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputdata=$event.target.value}}})]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm.inputdata))])]),_vm._v(" "),_c('Mycheckbox',{attrs:{"value":"peach"},model:{value:(_vm.fruit.peach),callback:function ($$v) {_vm.$set(_vm.fruit, "peach", $$v)},expression:"fruit.peach"}}),_vm._v(" "),_c('Mycheckbox',{attrs:{"value":"apple"},model:{value:(_vm.fruit.apple),callback:function ($$v) {_vm.$set(_vm.fruit, "apple", $$v)},expression:"fruit.apple"}}),_vm._v(" "),_c('Singlebox',{attrs:{"value":"peach","name":"myFruit"},model:{value:(_vm.package),callback:function ($$v) {_vm.package=$$v},expression:"package"}}),_vm._v(" "),_c('Singlebox',{attrs:{"value":"apple","name":"myFruit"},model:{value:(_vm.package),callback:function ($$v) {_vm.package=$$v},expression:"package"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});