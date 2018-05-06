(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pagination", [], factory);
	else if(typeof exports === 'object')
		exports["pagination"] = factory();
	else
		root["pagination"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pagination = __webpack_require__(33);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
	Vue.component(_pagination2.default.name, _pagination2.default);
}

_pagination2.default.install = function (Vue) {
	Vue.component(_pagination2.default.name, _pagination2.default);
};

exports.default = _pagination2.default;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/chenxuan/Documents/github/kzjr_ui/packages/pagination/pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5512fa4", Component.options)
  } else {
    hotAPI.reload("data-v-e5512fa4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: "KzjrPagination",
  props: {
    current: {
      type: [Number, String],
      default: 1
    },
    total: {
      type: [Number, String],
      default: 0
    },
    limit: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    totalPage: function totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    startClass: function startClass() {
      return {
        'gap': this.current == 1
      };
    },
    endClass: function endClass() {
      return {
        'gap': this.current == this.totalPage
      };
    },
    pageGap: function pageGap() {
      var arr = [];
      if (this.totalPage >= 5) {
        for (var i = this.current - 2; i <= this.current + 2; i++) {
          if (i > 0 && i <= this.totalPage) {
            arr.push(i);
          }
        }
      } else {
        arr = this.totalPage;
      }
      return arr;
    }
  },
  filters: {
    currentClass: function currentClass(n, current) {
      return {
        'current': n == current
      };
    }
  },
  methods: {
    pageClick: function pageClick(n) {
      n = n < 1 ? 1 : n;
      n = n > this.totalPage ? this.totalPage : n;
      if (this.current != n) {
        this.$emit('page-change', n);
      }
    }
  }
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.totalPage > 1) ? _c('div', {
    staticClass: "kzjr-pagination-component"
  }, [_c('div', {
    staticClass: "core"
  }, [_c('a', {
    staticClass: "start",
    class: _vm.startClass,
    on: {
      "click": function($event) {
        _vm.pageClick(1)
      }
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('a', {
    staticClass: "prev",
    class: _vm.startClass,
    on: {
      "click": function($event) {
        _vm.pageClick(_vm.current - 1)
      }
    }
  }, [_vm._v("上一页")]), _vm._v(" "), (_vm.current >= 4 && _vm.totalPage >= 5) ? _c('span', {
    staticClass: "gap"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pageGap), function(n, index) {
    return _c('a', {
      key: index,
      class: _vm._f("currentClass")(n, _vm.current),
      on: {
        "click": function($event) {
          _vm.pageClick(n)
        }
      }
    }, [_vm._v(_vm._s(n))])
  }), _vm._v(" "), (_vm.current <= _vm.totalPage - 3 && _vm.totalPage >= 5) ? _c('span', {
    staticClass: "gap"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "next",
    class: _vm.endClass,
    on: {
      "click": function($event) {
        _vm.pageClick(_vm.current + 1)
      }
    }
  }, [_vm._v("下一页")]), _vm._v(" "), _c('a', {
    staticClass: "end",
    class: _vm.endClass,
    on: {
      "click": function($event) {
        _vm.pageClick(_vm.totalPage)
      }
    }
  }, [_vm._v("尾页")])], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e5512fa4", module.exports)
  }
}

/***/ })

/******/ });
});