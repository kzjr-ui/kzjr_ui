(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("kzjr_ui/lib/mixins/migrating"), require("kzjr_ui/lib/mixins/focus"));
	else if(typeof define === 'function' && define.amd)
		define("switch", ["kzjr_ui/lib/mixins/migrating", "kzjr_ui/lib/mixins/focus"], factory);
	else if(typeof exports === 'object')
		exports["switch"] = factory(require("kzjr_ui/lib/mixins/migrating"), require("kzjr_ui/lib/mixins/focus"));
	else
		root["switch"] = factory(root["kzjr_ui/lib/mixins/migrating"], root["kzjr_ui/lib/mixins/focus"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_39__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(37);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_component2.default.install = function (Vue) {
  Vue.component(_component2.default.name, _component2.default);
};

exports.default = _component2.default;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/chenxuan/Documents/github/kzjr_ui/packages/switch/src/component.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3731f148", Component.options)
  } else {
    hotAPI.reload("data-v-3731f148", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _focus = __webpack_require__(39);

var _focus2 = _interopRequireDefault(_focus);

var _migrating = __webpack_require__(2);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'KzjrSwitch',
  mixins: [(0, _focus2.default)('input'), _migrating2.default],
  inject: {
    elForm: {
      default: ''
    }
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: '#b3e174'
    },
    inactiveColor: {
      type: String,
      default: '#e0e0e0'
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    id: String
  },
  data: function data() {
    return {
      coreWidth: this.width
    };
  },
  created: function created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },

  computed: {
    checked: function checked() {
      return this.value === this.activeValue;
    },
    switchDisabled: function switchDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    checked: function checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      var _this = this;

      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
      this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
      this.$nextTick(function () {
        _this.$refs.input.checked = _this.checked;
      });
    },
    setBackgroundColor: function setBackgroundColor() {
      var newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue: function switchValue() {
      !this.switchDisabled && this.handleChange();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'on-color': 'on-color is renamed to active-color.',
          'off-color': 'off-color is renamed to inactive-color.',
          'on-text': 'on-text is renamed to active-text.',
          'off-text': 'off-text is renamed to inactive-text.',
          'on-value': 'on-value is renamed to active-value.',
          'off-value': 'off-value is renamed to inactive-value.',
          'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
          'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
        }
      };
    }
  },
  mounted: function mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "kzjr-switch",
    class: {
      'is-disabled': _vm.switchDisabled, 'is-checked': _vm.checked
    },
    attrs: {
      "role": "switch",
      "aria-checked": _vm.checked,
      "aria-disabled": _vm.switchDisabled
    },
    on: {
      "click": _vm.switchValue
    }
  }, [_c('input', {
    ref: "input",
    staticClass: "kzjr-switch__input",
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "name": _vm.name,
      "true-value": _vm.activeValue,
      "false-value": _vm.inactiveValue,
      "disabled": _vm.switchDisabled
    },
    on: {
      "change": _vm.handleChange,
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.switchValue($event)
      }
    }
  }), _vm._v(" "), (_vm.inactiveIconClass || _vm.inactiveText) ? _c('span', {
    class: ['kzjr-switch__label', 'kzjr-switch__label--left', !_vm.checked ? 'is-active' : '']
  }, [(_vm.inactiveIconClass) ? _c('i', {
    class: [_vm.inactiveIconClass]
  }) : _vm._e(), _vm._v(" "), (!_vm.inactiveIconClass && _vm.inactiveText) ? _c('span', {
    attrs: {
      "aria-hidden": _vm.checked
    }
  }, [_vm._v(_vm._s(_vm.inactiveText))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('span', {
    ref: "core",
    staticClass: "kzjr-switch__core",
    style: ({
      'width': _vm.coreWidth + 'px'
    })
  }), _vm._v(" "), (_vm.activeIconClass || _vm.activeText) ? _c('span', {
    class: ['kzjr-switch__label', 'kzjr-switch__label--right', _vm.checked ? 'is-active' : '']
  }, [(_vm.activeIconClass) ? _c('i', {
    class: [_vm.activeIconClass]
  }) : _vm._e(), _vm._v(" "), (!_vm.activeIconClass && _vm.activeText) ? _c('span', {
    attrs: {
      "aria-hidden": !_vm.checked
    }
  }, [_vm._v(_vm._s(_vm.activeText))]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3731f148", module.exports)
  }
}

/***/ })

/******/ });
});