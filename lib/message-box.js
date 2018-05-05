(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("kzjr_ui/lib/utils/merge"), require("vue"), require("kzjr_ui/lib/utils/popup"), require("kzjr_ui/lib/input"), require("kzjr_ui/lib/button"), require("kzjr_ui/lib/utils/dom"), require("kzjr_ui/lib/utils/aria-dialog"), require("kzjr_ui/lib/utils/vdom"));
	else if(typeof define === 'function' && define.amd)
		define("message-box", ["kzjr_ui/lib/utils/merge", "vue", "kzjr_ui/lib/utils/popup", "kzjr_ui/lib/input", "kzjr_ui/lib/button", "kzjr_ui/lib/utils/dom", "kzjr_ui/lib/utils/aria-dialog", "kzjr_ui/lib/utils/vdom"], factory);
	else if(typeof exports === 'object')
		exports["message-box"] = factory(require("kzjr_ui/lib/utils/merge"), require("vue"), require("kzjr_ui/lib/utils/popup"), require("kzjr_ui/lib/input"), require("kzjr_ui/lib/button"), require("kzjr_ui/lib/utils/dom"), require("kzjr_ui/lib/utils/aria-dialog"), require("kzjr_ui/lib/utils/vdom"));
	else
		root["message-box"] = factory(root["kzjr_ui/lib/utils/merge"], root["vue"], root["kzjr_ui/lib/utils/popup"], root["kzjr_ui/lib/input"], root["kzjr_ui/lib/button"], root["kzjr_ui/lib/utils/dom"], root["kzjr_ui/lib/utils/aria-dialog"], root["kzjr_ui/lib/utils/vdom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_29__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(20);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MessageBox = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(21);

var _main2 = _interopRequireDefault(_main);

var _merge = __webpack_require__(1);

var _merge2 = _interopRequireDefault(_merge);

var _vdom = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
	title: null,
	message: '',
	type: '',
	showInput: false,
	showClose: true,
	modalFade: true,
	lockScroll: true,
	closeOnClickModal: true,
	closeOnPressEscape: true,
	closeOnHashChange: true,
	inputValue: null,
	inputPlaceholder: '',
	inputType: 'text',
	inputPattern: null,
	inputValidator: null,
	inputErrorMessage: '',
	showConfirmButton: true,
	showCancelButton: false,
	confirmButtonPosition: 'right',
	confirmButtonHighlight: false,
	cancelButtonHighlight: false,
	confirmButtonText: '',
	cancelButtonText: '',
	confirmButtonClass: '',
	cancelButtonClass: '',
	customClass: '',
	beforeClose: null,
	dangerouslyUseHTMLString: false,
	center: true,
	roundButton: false
};

var MessageBoxConstructor = _vue2.default.extend(_main2.default);

var currentMsg = void 0,
    instance = void 0;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
	if (currentMsg) {
		var callback = currentMsg.callback;
		if (typeof callback === 'function') {
			if (instance.showInput) {
				callback(instance.inputValue, action);
			} else {
				callback(action);
			}
		}
		if (currentMsg.resolve) {
			if (action === 'confirm') {
				if (instance.showInput) {
					currentMsg.resolve({ value: instance.inputValue, action: action });
				} else {
					currentMsg.resolve(action);
				}
			} else if (action === 'cancel' && currentMsg.reject) {
				currentMsg.reject(action);
			}
		}
	}
};

var initInstance = function initInstance() {
	instance = new MessageBoxConstructor({
		el: document.createElement('div')
	});

	instance.callback = defaultCallback;
};

var showNextMsg = function showNextMsg() {
	if (!instance) {
		initInstance();
	}
	instance.action = '';

	if (!instance.visible || instance.closeTimer) {
		if (msgQueue.length > 0) {
			currentMsg = msgQueue.shift();

			var options = currentMsg.options;
			for (var prop in options) {
				if (options.hasOwnProperty(prop)) {
					instance[prop] = options[prop];
				}
			}
			if (options.callback === undefined) {
				instance.callback = defaultCallback;
			}

			var oldCb = instance.callback;
			instance.callback = function (action, instance) {
				oldCb(action, instance);
				showNextMsg();
			};
			if ((0, _vdom.isVNode)(instance.message)) {
				instance.$slots.default = [instance.message];
				instance.message = null;
			} else {
				delete instance.$slots.default;
			}
			;['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
				if (instance[prop] === undefined) {
					instance[prop] = true;
				}
			});
			document.body.appendChild(instance.$el);

			_vue2.default.nextTick(function () {
				instance.visible = true;
			});
		}
	}
};

var MessageBox = function MessageBox(options, callback) {
	if (_vue2.default.prototype.$isServer) return;
	if (typeof options === 'string' || (0, _vdom.isVNode)(options)) {
		options = {
			message: options
		};
		if (typeof arguments[1] === 'string') {
			options.title = arguments[1];
		}
	} else if (options.callback && !callback) {
		callback = options.callback;
	}

	if (typeof Promise !== 'undefined') {
		return new Promise(function (resolve, reject) {
			// eslint-disable-line
			msgQueue.push({
				options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
				callback: callback,
				resolve: resolve,
				reject: reject
			});

			showNextMsg();
		});
	} else {
		msgQueue.push({
			options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
			callback: callback
		});

		showNextMsg();
	}
};

MessageBox.setDefaults = function (defaults) {
	MessageBox.defaults = defaults;
};

MessageBox.alert = function (message, title, options) {
	if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		options = title;
		title = '';
	} else if (title === undefined) {
		title = '';
	}
	return MessageBox((0, _merge2.default)({
		title: title,
		message: message,
		$type: 'alert',
		closeOnPressEscape: false,
		closeOnClickModal: false
	}, options));
};

MessageBox.confirm = function (message, title, options) {
	if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		options = title;
		title = '';
	} else if (title === undefined) {
		title = '';
	}
	return MessageBox((0, _merge2.default)({
		title: title,
		message: message,
		$type: 'confirm',
		showCancelButton: true
	}, options));
};

MessageBox.prompt = function (message, title, options) {
	if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		options = title;
		title = '';
	} else if (title === undefined) {
		title = '';
	}
	return MessageBox((0, _merge2.default)({
		title: title,
		message: message,
		showCancelButton: true,
		showInput: true,
		$type: 'prompt'
	}, options));
};

MessageBox.close = function () {
	instance.doClose();
	instance.visible = false;
	msgQueue = [];
	currentMsg = null;
};

exports.default = MessageBox;
exports.MessageBox = MessageBox;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/chenxuan/Documents/github/kzjr_ui/packages/message-box/src/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-748e119f", Component.options)
  } else {
    hotAPI.reload("data-v-748e119f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popup = __webpack_require__(23);

var _popup2 = _interopRequireDefault(_popup);

var _input = __webpack_require__(24);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(25);

var _button2 = _interopRequireDefault(_button);

var _dom = __webpack_require__(26);

var _ariaDialog = __webpack_require__(27);

var _ariaDialog2 = _interopRequireDefault(_ariaDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_input2.default.name); //
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
//
//
//
//
//

var messageBox = void 0;
var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
exports.default = {
  mixins: [_popup2.default],
  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    closeOnHashChange: {
      default: true
    },
    center: {
      default: true,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },
  components: {
    ElInput: _input2.default,
    ElButton: _button2.default
  },
  computed: {
    typeClass: function typeClass() {
      return this.type && typeMap[this.type] ? 'kzjr-icon-' + typeMap[this.type] : '';
    },
    confirmButtonClasses: function confirmButtonClasses() {
      return 'kzjr-button--primary ' + this.confirmButtonClass;
    },
    cancelButtonClasses: function cancelButtonClasses() {
      return '' + this.cancelButtonClass;
    }
  },
  methods: {
    getSafeClose: function getSafeClose() {
      var _this = this;

      var currentId = this.uid;
      return function () {
        _this.$nextTick(function () {
          if (currentId === _this.uid) _this.doClose();
        });
      };
    },
    doClose: function doClose() {
      var _this2 = this;

      if (!this.visible) return;
      this.visible = false;
      this._closing = true;
      this.onClose && this.onClose();
      messageBox.closeDialog(); // 解绑
      if (this.lockScroll) {
        setTimeout(function () {
          if (_this2.modal && _this2.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this2.bodyOverflow;
            document.body.style.paddingRight = _this2.bodyPaddingRight;
          }
          _this2.bodyOverflow = null;
          _this2.bodyPaddingRight = null;
        }, 200);
      }
      this.opened = false;
      if (!this.transition) {
        this.doAfterClose();
      }
      setTimeout(function () {
        if (_this2.action) _this2.callback(_this2.action, _this2);
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel');
      }
    },
    handleInputEnter: function handleInputEnter() {
      if (this.inputType !== 'textarea') {
        return this.handleAction('confirm');
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage;
          (0, _dom.addClass)(this.getInputElement(), 'invalid');
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage;
            (0, _dom.addClass)(this.getInputElement(), 'invalid');
            return false;
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult;
            (0, _dom.addClass)(this.getInputElement(), 'invalid');
            return false;
          }
        }
      }
      this.editorErrorMessage = '';
      (0, _dom.removeClass)(this.getInputElement(), 'invalid');
      return true;
    },
    getFistFocus: function getFistFocus() {
      var $btns = this.$el.querySelector('.kzjr-message-box__btns .kzjr-button');
      var $title = this.$el.querySelector('.kzjr-message-box__btns .kzjr-message-box__title');
      return $btns && $btns[0] || $title;
    },
    getInputElement: function getInputElement() {
      var inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    }
  },
  watch: {
    inputValue: {
      immediate: true,
      handler: function handler(val) {
        var _this3 = this;

        this.$nextTick(function (_) {
          if (_this3.$type === 'prompt' && val !== null) {
            _this3.validate();
          }
        });
      }
    },
    visible: function visible(val) {
      var _this4 = this;

      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(function () {
            _this4.$refs.confirm.$el.focus();
          });
        }
        this.focusAfterClosed = document.activeElement;
        messageBox = new _ariaDialog2.default(this.$el, this.focusAfterClosed, this.getFistFocus());
      }
      // prompt
      if (this.$type !== 'prompt') return;
      if (val) {
        setTimeout(function () {
          if (_this4.$refs.input && _this4.$refs.input.$el) {
            _this4.getInputElement().focus();
          }
        }, 500);
      } else {
        this.editorErrorMessage = '';
        (0, _dom.removeClass)(this.getInputElement(), 'invalid');
      }
    }
  },
  mounted: function mounted() {
    if (this.closeOnHashChange) {
      window.addEventListener('hashchange', this.close);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
    setTimeout(function () {
      messageBox.closeDialog();
    });
  },
  data: function data() {
    return {
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false
    };
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "msgbox-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "kzjr-message-box__wrapper",
    attrs: {
      "tabindex": "-1",
      "role": "dialog",
      "aria-modal": "true",
      "aria-label": _vm.title || 'dialog'
    },
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.handleWrapperClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "kzjr-message-box",
    class: [_vm.customClass, _vm.center && 'kzjr-message-box--center']
  }, [(_vm.title !== null) ? _c('div', {
    staticClass: "kzjr-message-box__header"
  }, [_c('div', {
    staticClass: "kzjr-message-box__title"
  }, [(_vm.typeClass && _vm.center) ? _c('div', {
    class: ['kzjr-message-box__status', _vm.typeClass]
  }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), (_vm.showClose) ? _c('button', {
    staticClass: "kzjr-message-box__headerbtn",
    attrs: {
      "type": "button",
      "aria-label": "Close"
    },
    on: {
      "click": function($event) {
        _vm.handleAction('cancel')
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.handleAction('cancel')
      }
    }
  }, [_c('i', {
    staticClass: "kzjr-message-box__close kzjr-icon-close"
  })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "kzjr-message-box__content"
  }, [(_vm.typeClass && !_vm.center && _vm.message !== '') ? _c('div', {
    class: ['kzjr-message-box__status', _vm.typeClass]
  }) : _vm._e(), _vm._v(" "), (_vm.message !== '') ? _c('div', {
    staticClass: "kzjr-message-box__message"
  }, [_vm._t("default", [(!_vm.dangerouslyUseHTMLString) ? _c('p', [_vm._v(_vm._s(_vm.message))]) : _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showInput),
      expression: "showInput"
    }],
    staticClass: "kzjr-message-box__input"
  }, [_c('el-input', {
    ref: "input",
    attrs: {
      "type": _vm.inputType,
      "placeholder": _vm.inputPlaceholder
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleInputEnter($event)
      }
    },
    model: {
      value: (_vm.inputValue),
      callback: function($$v) {
        _vm.inputValue = $$v
      },
      expression: "inputValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "kzjr-message-box__errormsg",
    style: ({
      visibility: !!_vm.editorErrorMessage ? 'visible' : 'hidden'
    })
  }, [_vm._v(_vm._s(_vm.editorErrorMessage))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "kzjr-message-box__btns"
  }, [(_vm.showCancelButton) ? _c('el-button', {
    class: [_vm.cancelButtonClasses],
    attrs: {
      "loading": _vm.cancelButtonLoading,
      "round": _vm.roundButton,
      "size": "medium"
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.handleAction('cancel')
      }
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleAction('cancel')
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.cancelButtonText || '取消') + "\n        ")]) : _vm._e(), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showConfirmButton),
      expression: "showConfirmButton"
    }],
    ref: "confirm",
    class: [_vm.confirmButtonClasses],
    attrs: {
      "loading": _vm.confirmButtonLoading,
      "round": _vm.roundButton,
      "size": "medium"
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.handleAction('confirm')
      }
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleAction('confirm')
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.confirmButtonText || '确定') + "\n        ")])], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-748e119f", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ })
/******/ ]);
});