/*!
 * /**
 * * @name JSON Editor
 * * @description JSON Schema Based Editor
 * * This library is the continuation of jdorn's great work (see also https://github.com/jdorn/json-editor/issues/800)
 * * @version "2.5.1"
 * * @author Jeremy Dorn
 * * @see https://github.com/jdorn/json-editor/
 * * @see https://github.com/json-editor/json-editor
 * * @license MIT
 * * @example see README.md and docs/ for requirements, examples and usage info
 * * /
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: JSONEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONEditor", function() { return JSONEditor; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./src/defaults.js");
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.js */ "./src/validator.js");
/* harmony import */ var _schemaloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schemaloader.js */ "./src/schemaloader.js");
/* harmony import */ var _editors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors/index.js */ "./src/editors/index.js");
/* harmony import */ var _templates_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/index.js */ "./src/templates/index.js");
/* harmony import */ var _iconlibs_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iconlibs/index.js */ "./src/iconlibs/index.js");
/* harmony import */ var _themes_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/index.js */ "./src/themes/index.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor */ "./src/editor.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./iconlib */ "./src/iconlib.js");
/* harmony import */ var _style_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css.js */ "./src/style.css.js");













class JSONEditor {
  constructor (element, options = {}) {
    if (!(element instanceof Element)) throw new Error('element should be an instance of Element')

    this.element = element
    this.options = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["extend"])({}, JSONEditor.defaults.options, options)
    this.ready = false
    this.copyClipboard = null
    this.schema = this.options.schema
    this.template = this.options.template
    this.translate = this.options.translate || JSONEditor.defaults.translate
    this.uuid = 0
    this.__data = {}
    const themeName = this.options.theme || JSONEditor.defaults.theme
    const themeClass = JSONEditor.defaults.themes[themeName]

    /* Load editors and selected theme style rules */
    if (!themeClass) throw new Error(`Unknown theme ${themeName}`)
    this.element.setAttribute('data-theme', themeName)
    // eslint-disable-next-line new-cap
    this.theme = new themeClass(this)
    const rules = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_style_css_js__WEBPACK_IMPORTED_MODULE_11__["default"], this.getEditorsRules())

    /* Call addNewStyleRulesToShadowRoot if shadowRoot is found, otherwise call addNewStyleRules */
    const addRules = (themeName, rules, shadowRoot) => shadowRoot
      ? this.addNewStyleRulesToShadowRoot(themeName, rules, shadowRoot)
      : this.addNewStyleRules(themeName, rules)

    if (!this.theme.options.disable_theme_rules) {
      /* Attempt to locate a shadowRoot parent (i.e. in Web Components) */
      const shadowRoot = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["getShadowParent"])(this.element)
      addRules('default', rules, shadowRoot)
      if (typeof themeClass.rules !== 'undefined') {
        addRules(themeName, themeClass.rules, shadowRoot)
      }
    }

    /* Init icon class */
    const iconClass = JSONEditor.defaults.iconlibs[this.options.iconlib || JSONEditor.defaults.iconlib]
    // eslint-disable-next-line new-cap
    if (iconClass) this.iconlib = new iconClass()

    this.root_container = this.theme.getContainer()
    this.element.appendChild(this.root_container)

    /* Fetch all external refs via ajax */
    const fetchUrl = document.location.origin + document.location.pathname.toString()
    const loader = new _schemaloader_js__WEBPACK_IMPORTED_MODULE_2__["SchemaLoader"](this.options)
    const location = document.location.toString()

    this.expandSchema = (schema, fileBase) => loader.expandSchema(schema, fileBase)
    this.expandRefs = (schema, fileBase) => loader.expandRefs(schema, fileBase)
    this.refs = loader.refs

    loader.load(this.schema, schema => {
      const validatorOptions = this.options.custom_validators ? { custom_validators: this.options.custom_validators } : {}

      this.validator = new _validator_js__WEBPACK_IMPORTED_MODULE_1__["Validator"](this, null, validatorOptions, JSONEditor.defaults)

      const editorClass = this.getEditorClass(schema)

      this.root = this.createEditor(editorClass, {
        jsoneditor: this,
        schema,
        required: true,
        container: this.root_container
      })

      this.root.preBuild()
      this.root.build()
      this.root.postBuild()

      /* Starting data */
      if (Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["hasOwnProperty"])(this.options, 'startval')) this.root.setValue(this.options.startval)

      this.validation_results = this.validator.validate(this.root.getValue())
      this.root.showValidationErrors(this.validation_results)
      this.ready = true

      /* Fire ready event asynchronously */
      window.requestAnimationFrame(() => {
        if (!this.ready) return
        this.validation_results = this.validator.validate(this.root.getValue())
        this.root.showValidationErrors(this.validation_results)
        this.trigger('ready')
        this.trigger('change')
      })
    }, fetchUrl, location)
  }

  getValue () {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before getting the value")

    return this.root.getValue()
  }

  setValue (value) {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before setting the value")

    this.root.setValue(value)
    return this
  }

  validate (value) {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before validating")

    /* Custom value */
    if (arguments.length === 1) {
      return this.validator.validate(value)
      /* Current value (use cached result) */
    } else {
      return this.validation_results
    }
  }

  destroy () {
    if (this.destroyed) return
    if (!this.ready) return

    this.schema = null
    this.options = null
    this.root.destroy()
    this.root = null
    this.root_container = null
    this.validator = null
    this.validation_results = null
    this.theme = null
    this.iconlib = null
    this.template = null
    this.__data = null
    this.ready = false
    this.element.innerHTML = ''
    this.element.removeAttribute('data-theme')
    this.destroyed = true
  }

  on (event, callback) {
    this.callbacks = this.callbacks || {}
    this.callbacks[event] = this.callbacks[event] || []
    this.callbacks[event].push(callback)

    return this
  }

  off (event, callback) {
    /* Specific callback */
    if (event && callback) {
      this.callbacks = this.callbacks || {}
      this.callbacks[event] = this.callbacks[event] || []
      const newcallbacks = []
      for (let i = 0; i < this.callbacks[event].length; i++) {
        if (this.callbacks[event][i] === callback) continue
        newcallbacks.push(this.callbacks[event][i])
      }
      this.callbacks[event] = newcallbacks
    } else if (event) {
      /* All callbacks for a specific event */
      this.callbacks = this.callbacks || {}
      this.callbacks[event] = []
    } else {
      /* All callbacks for all events */
      this.callbacks = {}
    }

    return this
  }

  trigger (event, editor) {
    if (this.callbacks && this.callbacks[event] && this.callbacks[event].length) {
      for (let i = 0; i < this.callbacks[event].length; i++) {
        this.callbacks[event][i].apply(this, [editor])
      }
    }

    return this
  }

  setOption (option, value) {
    if (option === 'show_errors') {
      this.options.show_errors = value
      this.onChange()
    } else {
      /* Only the `show_errors` option is supported for now */
      throw new Error(`Option ${option} must be set during instantiation and cannot be changed later`)
    }

    return this
  }

  getEditorsRules () {
    const extendRule = (rules, editorClass) => editorClass.rules ? Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(rules, editorClass.rules) : rules
    return Object.values(JSONEditor.defaults.editors).reduce(extendRule, {})
  }

  getEditorClass (schema) {
    let classname

    schema = this.expandSchema(schema)

    JSONEditor.defaults.resolvers.find(resolver => {
      classname = resolver(schema)
      return classname && JSONEditor.defaults.editors[classname]
    })
    if (!classname) throw new Error(`Unknown editor for schema ${JSON.stringify(schema)}`)
    if (!JSONEditor.defaults.editors[classname]) throw new Error(`Unknown editor ${classname}`)
    return JSONEditor.defaults.editors[classname]
  }

  createEditor (editorClass, options, depthCounter = 1) {
    options = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_7__["extend"])({}, editorClass.options || {}, options)
    // eslint-disable-next-line new-cap
    return new editorClass(options, JSONEditor.defaults, depthCounter)
  }

  onChange () {
    if (!this.ready) return

    if (this.firing_change) return
    this.firing_change = true

    window.requestAnimationFrame(() => {
      this.firing_change = false
      if (!this.ready) return

      /* Validate and cache results */
      this.validation_results = this.validator.validate(this.root.getValue())

      if (this.options.show_errors !== 'never') {
        this.root.showValidationErrors(this.validation_results)
      } else {
        this.root.showValidationErrors([])
      }

      /* Fire change event */
      this.trigger('change')
    })

    return this
  }

  compileTemplate (template, name = JSONEditor.defaults.template) {
    let engine

    /* Specifying a preset engine */
    if (typeof name === 'string') {
      if (!JSONEditor.defaults.templates[name]) throw new Error(`Unknown template engine ${name}`)
      engine = JSONEditor.defaults.templates[name]()

      if (!engine) throw new Error(`Template engine ${name} missing required library.`)
    } else {
      /* Specifying a custom engine */
      engine = name
    }

    if (!engine) throw new Error('No template engine set')
    if (!engine.compile) throw new Error('Invalid template engine set')

    return engine.compile(template)
  }

  _data (el, key, value) {
    /* Setting data */
    if (arguments.length === 3) {
      let uuid
      if (el.hasAttribute(`data-jsoneditor-${key}`)) {
        uuid = el.getAttribute(`data-jsoneditor-${key}`)
      } else {
        uuid = this.uuid++
        el.setAttribute(`data-jsoneditor-${key}`, uuid)
      }

      this.__data[uuid] = value
    } else {
      /* Getting data */
      /* No data stored */
      if (!el.hasAttribute(`data-jsoneditor-${key}`)) return null

      return this.__data[el.getAttribute(`data-jsoneditor-${key}`)]
    }
  }

  registerEditor (editor) {
    this.editors = this.editors || {}
    this.editors[editor.path] = editor
    return this
  }

  unregisterEditor (editor) {
    this.editors = this.editors || {}
    this.editors[editor.path] = null
    return this
  }

  getEditor (path) {
    if (!this.editors) return
    return this.editors[path]
  }

  watch (path, callback) {
    this.watchlist = this.watchlist || {}
    this.watchlist[path] = this.watchlist[path] || []
    this.watchlist[path].push(callback)

    return this
  }

  unwatch (path, callback) {
    if (!this.watchlist || !this.watchlist[path]) return this
    /* If removing all callbacks for a path */
    if (!callback) {
      this.watchlist[path] = null
      return this
    }

    const newlist = []
    for (let i = 0; i < this.watchlist[path].length; i++) {
      if (this.watchlist[path][i] === callback) continue
      else newlist.push(this.watchlist[path][i])
    }
    this.watchlist[path] = newlist.length ? newlist : null
    return this
  }

  notifyWatchers (path) {
    if (!this.watchlist || !this.watchlist[path]) return this
    for (let i = 0; i < this.watchlist[path].length; i++) {
      this.watchlist[path][i]()
    }
  }

  isEnabled () {
    return !this.root || this.root.isEnabled()
  }

  enable () {
    this.root.enable()
  }

  disable () {
    this.root.disable()
  }

  setCopyClipboardContents (value) {
    this.copyClipboard = value
  }

  getCopyClipboardContents () {
    return this.copyClipboard
  }

  addNewStyleRules (themeName, rules) {
    let styleTag = document.querySelector(`#theme-${themeName}`)

    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.setAttribute('id', `theme-${themeName}`)
      styleTag.appendChild(document.createTextNode(''))
      document.head.appendChild(styleTag)
    }

    const sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet
    const qualifier = this.element.nodeName.toLowerCase()
    while (sheet.cssRules.length > 0) {
      sheet.deleteRule(0)
    }
    Object.keys(rules).forEach(selector => {
      const sel = themeName === 'default' ? selector : `${qualifier}[data-theme="${themeName}"] ${selector}`

      // all browsers, except IE before version 9
      if (sheet.insertRule) sheet.insertRule(sel + ' {' + decodeURIComponent(rules[selector]) + '}', 0)
      // Internet Explorer before version 9
      else if (sheet.addRule) sheet.addRule(sel, decodeURIComponent(rules[selector]), 0)
    })
  }

  addNewStyleRulesToShadowRoot (themeName, rules, shadowRoot) {
    const qualifier = this.element.nodeName.toLowerCase()
    let cssText = ''

    Object.keys(rules).forEach(selector => {
      const sel = themeName === 'default' ? selector : `${qualifier}[data-theme="${themeName}"] ${selector}`
      cssText += sel + ' {' + decodeURIComponent(rules[selector]) + '}' + '\n'
    })
    const styleSheet = new CSSStyleSheet()
    styleSheet.replaceSync(cssText)
    shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, styleSheet]
  }
}

JSONEditor.defaults = _defaults_js__WEBPACK_IMPORTED_MODULE_0__["defaults"]
JSONEditor.AbstractEditor = _editor__WEBPACK_IMPORTED_MODULE_8__["AbstractEditor"]
JSONEditor.AbstractTheme = _theme__WEBPACK_IMPORTED_MODULE_9__["AbstractTheme"]
JSONEditor.AbstractIconLib = _iconlib__WEBPACK_IMPORTED_MODULE_10__["AbstractIconLib"]

Object.assign(JSONEditor.defaults.themes, _themes_index_js__WEBPACK_IMPORTED_MODULE_6__["themes"])
Object.assign(JSONEditor.defaults.editors, _editors_index_js__WEBPACK_IMPORTED_MODULE_3__["editors"])
Object.assign(JSONEditor.defaults.templates, _templates_index_js__WEBPACK_IMPORTED_MODULE_4__["templates"])
Object.assign(JSONEditor.defaults.iconlibs, _iconlibs_index_js__WEBPACK_IMPORTED_MODULE_5__["iconlibs"])


/***/ }),

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony import */ var _resolvers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers.js */ "./src/resolvers.js");


/* default theme */
const theme = 'html'

/* default template engine */
const template = 'default'

/* Global callback list */
const callbacks = {}

const themes = {}
const templates = {}
const iconlibs = {}
const editors = {}
const languages = {}
// eslint-disable-next-line camelcase
const custom_validators = []

/* Translation strings and default languages */
// eslint-disable-next-line camelcase
const default_language = 'ru'
// eslint-disable-next-line camelcase
const language = default_language

languages.ru = {
  /**
 * When a property is not set
 */
  error_notset: 'Параметр не установлен',
  /**
 * When a string must not be empty
 */
  error_notempty: 'Обязательное поле',

  /**
 * When a value is not one of the enumerated values
 */
  error_enum: 'Значение должно быть одним из списка',

  /**
 * When a value doesn't validate any schema of a 'anyOf' combination
 */
  error_anyOf: 'Значение должно соответствовать хотя бы одной из предоставленных схем',

  /**
 * When a value doesn't validate
 * @variables This key takes one variable: The number of schemas the value does not validate
 */
  error_oneOf: 'Значение должно соответствовать ровно одной из предоставленных схем. В настоящее время он проверяется на соответствие {{0}} схем.',

  /**
 * When a value does not validate a 'not' schema
 */
  error_not: 'Значение не должно соответствовать предоставленной схеме',

  /**
 * When a value does not match any of the provided types
 */
  error_type_union: 'Значение должно быть одного из указанных типов',

  /**
 * When a value does not match the given type
 * @variables This key takes one variable: The type the value should be of
 */
  error_type: 'Значение должно быть типа {{0}}',

  /**
 *  When the value validates one of the disallowed types
 */
  error_disallow_union: 'Значение не должно быть одним из указанных запрещенных типов',

  /**
 *  When the value validates a disallowed type
 * @variables This key takes one variable: The type the value should not be of
 */
  error_disallow: 'Значение не должно быть типа {{0}}',

  /**
 * When a value is not a multiple of or divisible by a given number
 * @variables This key takes one variable: The number mentioned above
 */
  error_multipleOf: 'Значение должно быть кратно {{0}}',

  /**
 * When a value is greater than it's supposed to be (exclusive)
 * @variables This key takes one variable: The maximum
 */
  error_maximum_excl: 'Значение должно быть меньше {{0}}',

  /**
 * When a value is greater than it's supposed to be (inclusive
 * @variables This key takes one variable: The maximum
 */
  error_maximum_incl: 'Значение должно быть не более {{0}}',

  /**
 * When a value is lesser than it's supposed to be (exclusive)
 * @variables This key takes one variable: The minimum
 */
  error_minimum_excl: 'Значение должно быть больше {{0}}',

  /**
 * When a value is lesser than it's supposed to be (inclusive)
 * @variables This key takes one variable: The minimum
 */
  error_minimum_incl: 'Значение должно быть не менее {{0}}',

  /**
 * When a value have too many characters
 * @variables This key takes one variable: The maximum character count
 */
  error_maxLength: 'Значение должно быть не более {{0}} симв.',

  /**
 * When a value does not have enough characters
 * @variables This key takes one variable: The minimum character count
 */
  error_minLength: 'Значение должно быть не менее {{0}} симв.',

  /**
 * When a value does not match a given pattern
 */
  error_pattern: 'Значение должно соответствовать шаблону {{0}}',

  /**
 * When an array has additional items whereas it is not supposed to
 */
  error_additionalItems: 'В этом массиве нельзя использовать дополнительные элементы',

  /**
 * When there are to many items in an array
 * @variables This key takes one variable: The maximum item count
 */
  error_maxItems: 'Значение должно содержать не более {{0}} элементов',

  /**
 * When there are not enough items in an array
 * @variables This key takes one variable: The minimum item count
 */
  error_minItems: 'Значение должно содержать не менее {{0}} элементов',

  /**
 * When an array is supposed to have unique items but has duplicates
 */
  error_uniqueItems: 'В массиве должны быть уникальные элементы',

  /**
 * When there are too many properties in an object
 * @variables This key takes one variable: The maximum property count
 */
  error_maxProperties: 'У объекта должно быть не более {{0}} свойств',

  /**
 * When there are not enough properties in an object
 * @variables This key takes one variable: The minimum property count
 */
  error_minProperties: 'Object must have at least {{0}} properties',

  /**
 * When a required property is not defined
 * @variables This key takes one variable: The name of the missing property
 */
  error_required: "Object is missing the required property '{{0}}'",

  /**
 * When there is an additional property is set whereas there should be none
 * @variables This key takes one variable: The name of the additional property
 */
  error_additional_properties: 'No additional properties allowed, but property {{0}} is set',

  /**
 * When a dependency is not resolved
 * @variables This key takes one variable: The name of the missing property for the dependency
 */
  error_dependency: 'Must have property {{0}}',

  /**
 * When a date is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_date: 'Date must be in the format {{0}}',

  /**
 * When a time is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_time: 'Time must be in the format {{0}}',

  /**
 * When a datetime-local is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_datetime_local: 'Datetime must be in the format {{0}}',

  /**
 * When a integer date is less than 1 January 1970
 */
  error_invalid_epoch: 'Date must be greater than 1 January 1970',

  /**
 * When an IPv4 is in incorrect format
 */
  error_ipv4: 'Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots',

  /**
 * When an IPv6 is in incorrect format
 */
  error_ipv6: 'Value must be a valid IPv6 address',

  /**
 * When a hostname is in incorrect format
 */
  error_hostname: 'The hostname has the wrong format',

  /**
 * Text on Delete All buttons
 */
  button_delete_all: 'Все',

  /**
 * Title on Delete All buttons
 */
  button_delete_all_title: 'Удалить все',

  /**
 * Text on Delete Last buttons
 * @variable This key takes one variable: The title of object to delete
 */
  button_delete_last: 'Послед. {{0}}',

  /**
 * Title on Delete Last buttons
 * @variable This key takes one variable: The title of object to delete
 */
  button_delete_last_title: 'Удалить послед. {{0}}',

  /**
 * Title on Add Row buttons
 * @variable This key takes one variable: The title of object to add
 */
  button_add_row_title: 'Добавить {{0}}',

  /**
 * Title on Move Down buttons
 */
  button_move_down_title: 'На строку ниже',

  /**
 * Title on Move Up buttons
 */
  button_move_up_title: 'На строку выше',

  /**
 * Title on Object Properties buttons
 */
  button_object_properties: 'Свойства объекта',

  /**
 * Title on Delete Row buttons
 * @variable This key takes one variable: The title of object to delete
 */
  button_delete_row_title: 'Удалить {{0}}',

  /**
 * Title on Delete Row buttons, short version (no parameter with the object title)
 */
  button_delete_row_title_short: 'Удалить',

  /**
 * Title on Copy Row buttons, short version (no parameter with the object title)
 */
  button_copy_row_title_short: 'Копировать',

  /**
 * Title on Collapse buttons
 */
  button_collapse: 'Свернуть',

  /**
 * Title on Expand buttons
 */
  button_expand: 'Раскрыть',

  /**
 * Title on Flatpickr toggle buttons
 */
  flatpickr_toggle_button: 'Переключить',

  /**
 * Title on Flatpickr clear buttons
 */
  flatpickr_clear_button: 'Очистить',

  /**
 * Choices input field placeholder text
 */
  choices_placeholder_text: 'Ввод нового значения',

  /**
 * Default title for array items
 */
  default_array_item_title: 'item',

  /**
 * Warning when deleting a node
 */
  button_delete_node_warning: 'Удалить выбранный элемент?'
}

languages.en = {
  /**
   * When a property is not set
   */
  error_notset: 'Property must be set',
  /**
 * When a string must not be empty
 */
  error_notempty: 'Value required',
  /**
 * When a value is not one of the enumerated values
 */
  error_enum: 'Value must be one of the enumerated values',
  /**
 * When a value doesn't validate any schema of a 'anyOf' combination
 */
  error_anyOf: 'Value must validate against at least one of the provided schemas',
  /**
 * When a value doesn't validate
 * @variables This key takes one variable: The number of schemas the value does not validate
 */
  error_oneOf: 'Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.',
  /**
 * When a value does not validate a 'not' schema
 */
  error_not: 'Value must not validate against the provided schema',
  /**
 * When a value does not match any of the provided types
 */
  error_type_union: 'Value must be one of the provided types',
  /**
 * When a value does not match the given type
 * @variables This key takes one variable: The type the value should be of
 */
  error_type: 'Value must be of type {{0}}',
  /**
 *  When the value validates one of the disallowed types
 */
  error_disallow_union: 'Value must not be one of the provided disallowed types',
  /**
 *  When the value validates a disallowed type
 * @variables This key takes one variable: The type the value should not be of
 */
  error_disallow: 'Value must not be of type {{0}}',
  /**
 * When a value is not a multiple of or divisible by a given number
 * @variables This key takes one variable: The number mentioned above
 */
  error_multipleOf: 'Value must be a multiple of {{0}}',
  /**
 * When a value is greater than it's supposed to be (exclusive)
 * @variables This key takes one variable: The maximum
 */
  error_maximum_excl: 'Value must be less than {{0}}',
  /**
 * When a value is greater than it's supposed to be (inclusive
 * @variables This key takes one variable: The maximum
 */
  error_maximum_incl: 'Value must be at most {{0}}',
  /**
 * When a value is lesser than it's supposed to be (exclusive)
 * @variables This key takes one variable: The minimum
 */
  error_minimum_excl: 'Value must be greater than {{0}}',
  /**
 * When a value is lesser than it's supposed to be (inclusive)
 * @variables This key takes one variable: The minimum
 */
  error_minimum_incl: 'Value must be at least {{0}}',
  /**
 * When a value have too many characters
 * @variables This key takes one variable: The maximum character count
 */
  error_maxLength: 'Value must be at most {{0}} characters long',
  /**
 * When a value does not have enough characters
 * @variables This key takes one variable: The minimum character count
 */
  error_minLength: 'Value must be at least {{0}} characters long',
  /**
 * When a value does not match a given pattern
 */
  error_pattern: 'Value must match the pattern {{0}}',
  /**
 * When an array has additional items whereas it is not supposed to
 */
  error_additionalItems: 'No additional items allowed in this array',
  /**
 * When there are to many items in an array
 * @variables This key takes one variable: The maximum item count
 */
  error_maxItems: 'Value must have at most {{0}} items',
  /**
 * When there are not enough items in an array
 * @variables This key takes one variable: The minimum item count
 */
  error_minItems: 'Value must have at least {{0}} items',
  /**
 * When an array is supposed to have unique items but has duplicates
 */
  error_uniqueItems: 'Array must have unique items',
  /**
 * When there are too many properties in an object
 * @variables This key takes one variable: The maximum property count
 */
  error_maxProperties: 'Object must have at most {{0}} properties',
  /**
 * When there are not enough properties in an object
 * @variables This key takes one variable: The minimum property count
 */
  error_minProperties: 'Object must have at least {{0}} properties',
  /**
 * When a required property is not defined
 * @variables This key takes one variable: The name of the missing property
 */
  error_required: "Object is missing the required property '{{0}}'",
  /**
 * When there is an additional property is set whereas there should be none
 * @variables This key takes one variable: The name of the additional property
 */
  error_additional_properties: 'No additional properties allowed, but property {{0}} is set',
  /**
 * When a dependency is not resolved
 * @variables This key takes one variable: The name of the missing property for the dependency
 */
  error_dependency: 'Must have property {{0}}',
  /**
 * When a date is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_date: 'Date must be in the format {{0}}',
  /**
 * When a time is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_time: 'Time must be in the format {{0}}',
  /**
 * When a datetime-local is in incorrect format
 * @variables This key takes one variable: The valid format
 */
  error_datetime_local: 'Datetime must be in the format {{0}}',
  /**
 * When a integer date is less than 1 January 1970
 */
  error_invalid_epoch: 'Date must be greater than 1 January 1970',
  /**
 * When an IPv4 is in incorrect format
 */
  error_ipv4: 'Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots',
  /**
 * When an IPv6 is in incorrect format
 */
  error_ipv6: 'Value must be a valid IPv6 address',
  /**
 * When a hostname is in incorrect format
 */
  error_hostname: 'The hostname has the wrong format',
  /**
 * Text on Delete All buttons
 */
  button_delete_all: 'All',
  /**
 * Title on Delete All buttons
 */
  button_delete_all_title: 'Delete All',
  /**
  * Text on Delete Last buttons
  * @variable This key takes one variable: The title of object to delete
  */
  button_delete_last: 'Last {{0}}',
  /**
  * Title on Delete Last buttons
  * @variable This key takes one variable: The title of object to delete
  */
  button_delete_last_title: 'Delete Last {{0}}',
  /**
  * Title on Add Row buttons
  * @variable This key takes one variable: The title of object to add
  */
  button_add_row_title: 'Add {{0}}',
  /**
  * Title on Move Down buttons
  */
  button_move_down_title: 'Move down',
  /**
  * Title on Move Up buttons
  */
  button_move_up_title: 'Move up',
  /**
  * Title on Object Properties buttons
  */
  button_object_properties: 'Object Properties',
  /**
  * Title on Delete Row buttons
  * @variable This key takes one variable: The title of object to delete
  */
  button_delete_row_title: 'Delete {{0}}',
  /**
  * Title on Delete Row buttons, short version (no parameter with the object title)
  */
  button_delete_row_title_short: 'Delete',
  /**
  * Title on Copy Row buttons, short version (no parameter with the object title)
  */
  button_copy_row_title_short: 'Copy',
  /**
  * Title on Collapse buttons
  */
  button_collapse: 'Collapse',
  /**
  * Title on Expand buttons
  */
  button_expand: 'Expand',
  /**
  * Title on Flatpickr toggle buttons
  */
  flatpickr_toggle_button: 'Toggle',
  /**
  * Title on Flatpickr clear buttons
  */
  flatpickr_clear_button: 'Clear',
  /**
  * Choices input field placeholder text
  */
  choices_placeholder_text: 'Start typing to add value',
  /**
  * Default title for array items
  */
  default_array_item_title: 'item',
  /**
  * Warning when deleting a node
  */
  button_delete_node_warning: 'Are you sure you want to remove this node?'
}

/* Default per-editor options */
Object.entries(editors).forEach(([i, editor]) => { editors[i].options = editor.options || {} })

/* Default upload handler */
function upload (type, file, cbs) {
  console.log('Upload handler required for upload editor')
}

/* String translate function */
function translate (key, variables) {
  const lang = defaults.languages[defaults.language]
  if (!lang) throw new Error(`Unknown language ${defaults.language}`)

  let string = lang[key] || defaults.languages[default_language][key]

  if (typeof string === 'undefined') throw new Error(`Unknown translate string ${key}`)

  if (variables) {
    for (let i = 0; i < variables.length; i++) {
      string = string.replace(new RegExp(`\\{\\{${i}}}`, 'g'), variables[i])
    }
  }

  return string
}

/* Default options when initializing JSON Editor */
const options = {
  upload,
  prompt_before_delete: true,
  use_default_values: true,
  max_depth: 0
}

/* This assignment was previously in index.js but makes more sense here */
const defaults = {
  options,
  theme,
  template,
  themes,
  callbacks,
  templates,
  iconlibs,
  editors,
  languages,
  resolvers: _resolvers_js__WEBPACK_IMPORTED_MODULE_0__["resolvers"],
  custom_validators,
  default_language,
  language,
  translate
}


/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: AbstractEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");


/**
 * All editors should extend from this class
 */
class AbstractEditor {
  constructor (options, defaults) {
    this.defaults = defaults
    this.jsoneditor = options.jsoneditor
    this.theme = this.jsoneditor.theme
    this.template_engine = this.jsoneditor.template
    this.iconlib = this.jsoneditor.iconlib
    this.translate = this.jsoneditor.translate || this.defaults.translate
    this.original_schema = options.schema
    this.schema = this.jsoneditor.expandSchema(this.original_schema)
    this.active = true
    this.options = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, (this.options || {}), (this.schema.options || {}), (options.schema.options || {}), options)

    if (!options.path && !this.schema.id) this.schema.id = 'root'
    this.path = options.path || 'root'
    this.formname = options.formname || this.path.replace(/\.([^.]+)/g, '[$1]')

    if (this.jsoneditor.options.form_name_root) this.formname = this.formname.replace(/^root\[/, `${this.jsoneditor.options.form_name_root}[`)
    this.parent = options.parent
    this.key = this.parent !== undefined ? this.path.split('.').slice(this.parent.path.split('.').length).join('.') : this.path

    this.link_watchers = []
    this.watchLoop = false

    if (options.container) this.setContainer(options.container)
    this.registerDependencies()
  }

  onChildEditorChange (editor) {
    this.onChange(true)
  }

  notify () {
    if (this.path) this.jsoneditor.notifyWatchers(this.path)
  }

  change () {
    if (this.parent) this.parent.onChildEditorChange(this)
    else if (this.jsoneditor) this.jsoneditor.onChange()
  }

  onChange (bubble) {
    this.notify()
    if (this.watch_listener) this.watch_listener()
    if (bubble) this.change()
  }

  register () {
    this.jsoneditor.registerEditor(this)
    this.onChange()
  }

  unregister () {
    if (!this.jsoneditor) return
    this.jsoneditor.unregisterEditor(this)
  }

  getNumColumns () {
    return 12
  }

  isActive () {
    return this.active
  }

  activate () {
    this.active = true
    this.optInCheckbox.checked = true
    this.enable()
    this.change()
  }

  deactivate () {
    /* only non required properties can be deactivated. */
    if (!this.isRequired()) {
      this.active = false
      this.optInCheckbox.checked = false
      this.disable()
      this.change()
    }
  }

  registerDependencies () {
    this.dependenciesFulfilled = true
    const deps = this.options.dependencies
    if (!deps) {
      return
    }

    Object.keys(deps).forEach(dependency => {
      let path = this.path.split('.')
      path[path.length - 1] = dependency
      path = path.join('.')
      this.jsoneditor.watch(path, () => {
        this.evaluateDependencies()
      })
    })
  }

  evaluateDependencies () {
    const wrapper = this.container || this.control
    if (!wrapper || this.jsoneditor === null) {
      return
    }

    const deps = this.options.dependencies
    if (!deps) {
      return
    }
    // Assume true and set to false if any unmet dependencies are found
    const previousStatus = this.dependenciesFulfilled
    this.dependenciesFulfilled = true

    Object.keys(deps).forEach(dependency => {
      let path = this.path.split('.')
      path[path.length - 1] = dependency
      path = path.join('.')
      const choices = deps[dependency]
      this.checkDependency(path, choices)
    })

    if (this.dependenciesFulfilled !== previousStatus) {
      this.notify()
    }

    const displayMode = this.dependenciesFulfilled ? 'block' : 'none'
    if (wrapper.tagName === 'TD') {
      Object.keys(wrapper.childNodes).forEach(child => (wrapper.childNodes[child].style.display = displayMode))
    } else wrapper.style.display = displayMode
  }

  checkDependency (path, choices) {
    if (this.path === path || this.jsoneditor === null) {
      return
    }

    const editor = this.jsoneditor.getEditor(path)
    const value = editor ? editor.getValue() : undefined

    if (!editor || !editor.dependenciesFulfilled) {
      this.dependenciesFulfilled = false
    } else if (Array.isArray(choices)) {
      choices.some(choice => {
        if (value === choice) {
          this.dependenciesFulfilled = true
          return true
        }
      })
    } else if (typeof choices === 'object') {
      if (typeof value !== 'object') {
        this.dependenciesFulfilled = choices === value
      } else {
        Object.keys(choices).some(key => {
          if (!Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(choices, key)) {
            return false
          }
          if (!Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(value, key) || choices[key] !== value[key]) {
            this.dependenciesFulfilled = false
            return true
          }
        })
      }
    } else if (typeof choices === 'string' || typeof choices === 'number') {
      this.dependenciesFulfilled = this.dependenciesFulfilled && value === choices
    } else if (typeof choices === 'boolean') {
      if (choices) {
        this.dependenciesFulfilled = this.dependenciesFulfilled && (value || value.length > 0)
      } else {
        this.dependenciesFulfilled = this.dependenciesFulfilled && (!value || value.length === 0)
      }
    }
  }

  setContainer (container) {
    this.container = container
    if (this.schema.id) this.container.setAttribute('data-schemaid', this.schema.id)
    if (this.schema.type && typeof this.schema.type === 'string') this.container.setAttribute('data-schematype', this.schema.type)
    this.container.setAttribute('data-schemapath', this.path)
  }

  setOptInCheckbox (header) {
    /* the active/deactive checbox control. */

    this.optInCheckbox = document.createElement('input')
    this.optInCheckbox.setAttribute('type', 'checkbox')
    this.optInCheckbox.setAttribute('style', 'margin: 0 10px 0 0;')
    this.optInCheckbox.classList.add('json-editor-opt-in')

    this.optInCheckbox.addEventListener('click', () => {
      if (this.isActive()) {
        this.deactivate()
      } else {
        this.activate()
      }
    })

    /* append active/deactive checkbox if show_opt_in is true */
    if (this.jsoneditor.options.show_opt_in || this.options.show_opt_in) {
      /* and control to type object editors if they are not required */
      if (this.parent && this.parent.schema.type === 'object' && !this.isRequired() && this.header) {
        this.header.appendChild(this.optInCheckbox)
        this.header.insertBefore(this.optInCheckbox, this.header.firstChild)
      }
    }
  }

  preBuild () {

  }

  build () {

  }

  postBuild () {
    this.setupWatchListeners()
    this.addLinks()
    this.setValue(this.getDefault(), true)
    this.updateHeaderText()
    this.register()
    this.onWatchedFieldChange()
  }

  setupWatchListeners () {
    /* Watched fields */
    this.watched = {}
    if (this.schema.vars) this.schema.watch = this.schema.vars
    this.watched_values = {}
    this.watch_listener = () => {
      if (this.refreshWatchedFieldValues()) {
        this.onWatchedFieldChange()
      }
    }

    if (Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(this.schema, 'watch')) {
      let path; let pathParts; let first; let root; let adjustedPath
      const myPath = this.container.getAttribute('data-schemapath')

      Object.keys(this.schema.watch).forEach(name => {
        path = this.schema.watch[name]
        if (Array.isArray(path)) {
          if (path.length < 2) return
          pathParts = [path[0]].concat(path[1].split('.'))
        } else {
          pathParts = path.split('.')
          if (!this.theme.closest(this.container, `[data-schemaid="${pathParts[0]}"]`)) pathParts.unshift('#')
        }
        first = pathParts.shift()

        if (first === '#') first = this.jsoneditor.schema.id || 'root'

        /* Find the root node for this template variable */
        root = this.theme.closest(this.container, `[data-schemaid="${first}"]`)
        if (!root) throw new Error(`Could not find ancestor node with id ${first}`)

        /* Keep track of the root node and path for use when rendering the template */
        adjustedPath = `${root.getAttribute('data-schemapath')}.${pathParts.join('.')}`

        if (myPath.startsWith(adjustedPath)) this.watchLoop = true
        this.jsoneditor.watch(adjustedPath, this.watch_listener)

        this.watched[name] = adjustedPath
      })
    }

    /* Dynamic header */
    if (this.schema.headerTemplate) {
      this.header_template = this.jsoneditor.compileTemplate(this.schema.headerTemplate, this.template_engine)
    }
  }

  addLinks () {
    /* Add links */
    if (!this.no_link_holder) {
      this.link_holder = this.theme.getLinksHolder()
      /* if description element exists, insert the link before */
      if (typeof this.description !== 'undefined') this.description.parentNode.insertBefore(this.link_holder, this.description)
      /* otherwise just insert link at bottom of container */
      else this.container.appendChild(this.link_holder)
      if (this.schema.links) {
        for (let i = 0; i < this.schema.links.length; i++) {
          this.addLink(this.getLink(this.schema.links[i]))
        }
      }
    }
  }

  onMove () {}

  getButton (text, icon, title) {
    const btnClass = `json-editor-btn-${icon}`
    if (!this.iconlib) icon = null
    else icon = this.iconlib.getIcon(icon)

    if (!icon && title) {
      text = title
      title = null
    }

    const btn = this.theme.getButton(text, icon, title)
    btn.classList.add(btnClass)
    return btn
  }

  setButtonText (button, text, icon, title) {
    if (!this.iconlib) icon = null
    else icon = this.iconlib.getIcon(icon)

    if (!icon && title) {
      text = title
      title = null
    }

    return this.theme.setButtonText(button, text, icon, title)
  }

  addLink (link) {
    if (this.link_holder) this.link_holder.appendChild(link)
  }

  getLink (data) {
    let holder
    let link

    /* Get mime type of the link */
    const mime = data.mediaType || 'application/javascript'
    const type = mime.split('/')[0]

    /* Template to generate the link href */
    const href = this.jsoneditor.compileTemplate(data.href, this.template_engine)
    const relTemplate = this.jsoneditor.compileTemplate(data.rel ? data.rel : data.href, this.template_engine)

    /* Template to generate the link's download attribute */
    let download = null
    if (data.download) download = data.download

    if (download && download !== true) {
      download = this.jsoneditor.compileTemplate(download, this.template_engine)
    }

    /* Image links */
    if (type === 'image') {
      holder = this.theme.getBlockLinkHolder()
      link = document.createElement('a')
      link.setAttribute('target', '_blank')
      const image = document.createElement('img')

      this.theme.createImageLink(holder, link, image)

      /* When a watched field changes, update the url */
      this.link_watchers.push(vars => {
        const url = href(vars)
        const rel = relTemplate(vars)
        link.setAttribute('href', url)
        link.setAttribute('title', rel || url)
        image.setAttribute('src', url)
      })
    /* Audio/Video links */
    } else if (['audio', 'video'].includes(type)) {
      holder = this.theme.getBlockLinkHolder()

      link = this.theme.getBlockLink()
      link.setAttribute('target', '_blank')

      const media = document.createElement(type)
      media.setAttribute('controls', 'controls')

      this.theme.createMediaLink(holder, link, media)

      /* When a watched field changes, update the url */
      this.link_watchers.push(vars => {
        const url = href(vars)
        const rel = relTemplate(vars)
        link.setAttribute('href', url)
        link.textContent = rel || url
        media.setAttribute('src', url)
      })
    /* Text links or blank link */
    } else {
      link = holder = this.theme.getBlockLink()
      holder.setAttribute('target', '_blank')
      holder.textContent = data.rel
      holder.style.display = 'none' /* Prevent blank links from showing up when using custom view */

      /* When a watched field changes, update the url */
      this.link_watchers.push(vars => {
        const url = href(vars)
        const rel = relTemplate(vars)
        if (url) holder.style.display = ''
        holder.setAttribute('href', url)
        holder.textContent = rel || url
      })
    }

    if (download && link) {
      if (download === true) {
        link.setAttribute('download', '')
      } else {
        this.link_watchers.push(vars => {
          link.setAttribute('download', download(vars))
        })
      }
    }

    if (data.class) link.classList.add(data.class)

    return holder
  }

  refreshWatchedFieldValues () {
    if (!this.watched_values) return
    const watched = {}
    let changed = false

    if (this.watched) {
      Object.keys(this.watched).forEach(name => {
        const editor = this.jsoneditor.getEditor(this.watched[name])
        const val = editor ? editor.getValue() : null
        if (this.watched_values[name] !== val) changed = true
        watched[name] = val
      })
    }

    watched.self = this.getValue()
    if (this.watched_values.self !== watched.self) changed = true

    this.watched_values = watched

    return changed
  }

  getWatchedFieldValues () {
    return this.watched_values
  }

  updateHeaderText () {
    if (this.header) {
      const headerText = this.getHeaderText()
      /* If the header has children, only update the text node's value */
      if (this.header.children.length) {
        for (let i = 0; i < this.header.childNodes.length; i++) {
          if (this.header.childNodes[i].nodeType === 3) {
            this.header.childNodes[i].nodeValue = this.cleanText(headerText)
            break
          }
        }
      /* Otherwise, just update the entire node */
      } else {
        if (window.DOMPurify) this.header.innerHTML = window.DOMPurify.sanitize(headerText)
        else this.header.textContent = this.cleanText(headerText)
      }
    }
  }

  getHeaderText (titleOnly) {
    if (this.header_text) return this.header_text
    else if (titleOnly) return this.schema.title
    else return this.getTitle()
  }

  cleanText (txt) {
    /* Clean out HTML tags from txt */
    const tmp = document.createElement('div')
    tmp.innerHTML = txt
    return (tmp.textContent || tmp.innerText)
  }

  onWatchedFieldChange () {
    let vars
    if (this.header_template) {
      vars = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.getWatchedFieldValues(), {
        key: this.key,
        i: this.key,
        i0: (this.key * 1),
        i1: (this.key * 1 + 1),
        title: this.getTitle()
      })
      const headerText = this.header_template(vars)

      if (headerText !== this.header_text) {
        this.header_text = headerText
        this.updateHeaderText()
        this.notify()
        /* this.fireChangeHeaderEvent(); */
      }
    }
    if (this.link_watchers.length) {
      vars = this.getWatchedFieldValues()
      for (let i = 0; i < this.link_watchers.length; i++) {
        this.link_watchers[i](vars)
      }
    }
  }

  setValue (value) {
    this.value = value
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return this.value
  }

  refreshValue () {

  }

  getChildEditors () {
    return false
  }

  destroy () {
    this.unregister(this)
    if (this.watched) {
      Object.values(this.watched).forEach(adjustedPath => this.jsoneditor.unwatch(adjustedPath, this.watch_listener))
    }

    this.watched = null
    this.watched_values = null
    this.watch_listener = null
    this.header_text = null
    this.header_template = null
    this.value = null
    if (this.container && this.container.parentNode) this.container.parentNode.removeChild(this.container)
    this.container = null
    this.jsoneditor = null
    this.schema = null
    this.path = null
    this.key = null
    this.parent = null
  }

  isDefaultRequired () {
    return this.isRequired() || !!this.jsoneditor.options.use_default_values
  }

  getDefault () {
    if (typeof this.schema.default !== 'undefined') {
      return this.schema.default
    }

    if (typeof this.schema.enum !== 'undefined') {
      return this.schema.enum[0]
    }

    let type = this.schema.type || this.schema.oneOf
    if (type && Array.isArray(type)) type = type[0]
    if (type && typeof type === 'object') type = type.type
    if (type && Array.isArray(type)) type = type[0]

    if (typeof type === 'string') {
      if (type === 'number') return this.isDefaultRequired() ? 0.0 : undefined
      if (type === 'boolean') return this.isDefaultRequired() ? false : undefined
      if (type === 'integer') return this.isDefaultRequired() ? 0 : undefined
      if (type === 'string') return ''
      if (type === 'object') return {}
      if (type === 'array') return []
    }

    return null
  }

  getTitle () {
    return this.schema.title || this.key
  }

  enable () {
    this.disabled = false
  }

  disable () {
    this.disabled = true
  }

  isEnabled () {
    return !this.disabled
  }

  isRequired () {
    if (typeof this.schema.required === 'boolean') return this.schema.required
    else if (this.parent && this.parent.schema && Array.isArray(this.parent.schema.required)) return this.parent.schema.required.includes(this.key)
    else if (this.jsoneditor.options.required_by_default) return true
    else return false
  }

  getDisplayText (arr) {
    const disp = []
    const used = {}

    /* Determine how many times each attribute name is used. */
    /* This helps us pick the most distinct display text for the schemas. */
    arr.forEach(el => {
      if (el.title) {
        used[el.title] = used[el.title] || 0
        used[el.title]++
      }
      if (el.description) {
        used[el.description] = used[el.description] || 0
        used[el.description]++
      }
      if (el.format) {
        used[el.format] = used[el.format] || 0
        used[el.format]++
      }
      if (el.type) {
        used[el.type] = used[el.type] || 0
        used[el.type]++
      }
    })

    /* Determine display text for each element of the array */
    arr.forEach(el => {
      let name

      /* If it's a simple string */
      if (typeof el === 'string') name = el
      /* Object */
      else if (el.title && used[el.title] <= 1) name = el.title
      else if (el.format && used[el.format] <= 1) name = el.format
      else if (el.type && used[el.type] <= 1) name = el.type
      else if (el.description && used[el.description] <= 1) name = el.descripton
      else if (el.title) name = el.title
      else if (el.format) name = el.format
      else if (el.type) name = el.type
      else if (el.description) name = el.description
      else if (JSON.stringify(el).length < 500) name = JSON.stringify(el)
      else name = 'type'

      disp.push(name)
    })

    /* Replace identical display text with "text 1", "text 2", etc. */
    const inc = {}
    disp.forEach((name, i) => {
      inc[name] = inc[name] || 0
      inc[name]++

      if (used[name] > 1) disp[i] = `${name} ${inc[name]}`
    })

    return disp
  }

  /* Replace space(s) with "-" to create valid id value */
  getValidId (id) {
    id = id === undefined ? '' : id.toString()
    return id.replace(/\s+/g, '-')
  }

  setInputAttributes (inputAttribute) {
    if (this.schema.options && this.schema.options.inputAttributes) {
      const inputAttributes = this.schema.options.inputAttributes
      const protectedAttributes = ['name', 'type'].concat(inputAttribute)
      Object.keys(inputAttributes).forEach(key => {
        if (!protectedAttributes.includes(key.toLowerCase())) {
          this.input.setAttribute(key, inputAttributes[key])
        }
      })
    }
  }

  expandCallbacks (scope, options) {
    const callback = this.defaults.callbacks[scope]
    Object.entries(options).forEach(([key, value]) => {
      if (value === Object(value)) {
        options[key] = this.expandCallbacks(scope, value)
      } else if (typeof value === 'string' &&
                 typeof callback === 'object' &&
                 typeof callback[value] === 'function') {
        options[key] = callback[value].bind(null, this)
      }
    })
    return options
  }

  showValidationErrors (errors) {

  }
}


/***/ }),

/***/ "./src/editors/ace.js":
/*!****************************!*\
  !*** ./src/editors/ace.js ***!
  \****************************/
/*! exports provided: AceEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceEditor", function() { return AceEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class AceEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  setValue (value, initial, fromTemplate) {
    const res = super.setValue(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.ace_editor_instance) {
      this.ace_editor_instance.setValue(res.value)
      this.ace_editor_instance.session.getSelection().clearSelection()
      this.ace_editor_instance.resize()
    }
  }

  build () {
    this.options.format = 'textarea' /* Force format into "textarea" */
    super.build()
    this.input_type = this.schema.format /* Restore original format */
    this.input.setAttribute('data-schemaformat', this.input_type)
  }

  afterInputReady () {
    let options

    if (window.ace) {
      let mode = this.input_type
      /* aliases for c/cpp */
      if (mode === 'cpp' || mode === 'c++' || mode === 'c') mode = 'c_cpp'

      /* Get options, either global options from "this.defaults.options.ace" or */
      /* single property options from schema "options.ace" */
      options = this.expandCallbacks('ace', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        selectionStyle: 'text',
        minLines: 30,
        maxLines: 30
      }, this.defaults.options.ace || {}, this.options.ace || {}, {
        mode: `ace/mode/${mode}`
      }))

      this.ace_container = document.createElement('div')
      this.ace_container.style.width = '100%'
      this.ace_container.style.position = 'relative'
      /* this.ace_container.style.height = '400px'; */
      this.input.parentNode.insertBefore(this.ace_container, this.input)
      this.input.style.display = 'none'

      this.ace_editor_instance = window.ace.edit(this.ace_container, options)

      this.ace_editor_instance.setValue(this.getValue())
      this.ace_editor_instance.session.getSelection().clearSelection()
      this.ace_editor_instance.resize()

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.ace_editor_instance.setReadOnly(true)
      }

      /* Listen for changes */
      this.ace_editor_instance.on('change', () => {
        this.input.value = this.ace_editor_instance.getValue()
        this.refreshValue()
        this.is_dirty = true
        this.onChange(true)
      })

      this.theme.afterInputReady(this.input)
    } else super.afterInputReady() /* Library not loaded, so just treat this as a string */
  }

  getNumColumns () {
    return 6
  }

  enable () {
    if (!this.always_disabled && this.ace_editor_instance) this.ace_editor_instance.setReadOnly(false)
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.ace_editor_instance) this.ace_editor_instance.setReadOnly(true)
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.ace_editor_instance) {
      this.ace_editor_instance.destroy()
      this.ace_editor_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/array.css.js":
/*!**********************************!*\
  !*** ./src/editors/array.css.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".json-editor-btntype-toggle":"margin:0%2010px%200%200",".je-array-control-btn":"width:100%25;text-align:left;margin-bottom:3px"});
/* eslint-enable */


/***/ }),

/***/ "./src/editors/array.js":
/*!******************************!*\
  !*** ./src/editors/array.js ***!
  \******************************/
/*! exports provided: ArrayEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayEditor", function() { return ArrayEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* harmony import */ var _array_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.css.js */ "./src/editors/array.css.js");




class ArrayEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  askConfirmation () {
    if (this.jsoneditor.options.prompt_before_delete === true) {
      if (window.confirm(this.translate('button_delete_node_warning')) === false) {
        return false
      }
    }
    return true
  }

  getDefault () {
    return this.schema.default || []
  }

  register () {
    super.register()
    if (this.rows) {
      this.rows.forEach(row => row.register())
    }
  }

  unregister () {
    super.unregister()
    if (this.rows) {
      this.rows.forEach(row => row.unregister())
    }
  }

  getNumColumns () {
    const info = this.getItemInfo(0)
    /* Tabs require extra horizontal space */
    if (this.tabs_holder && this.schema.format !== 'tabs-top') {
      return Math.max(Math.min(12, info.width + 2), 4)
    }
    return info.width
  }

  enable () {
    if (!this.always_disabled) {
      this.setAvailability(this, false)

      if (this.rows) {
        this.rows.forEach(row => {
          row.enable()
          this.setAvailability(row, false)
        })
      }
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.setAvailability(this, true)

    if (this.rows) {
      this.rows.forEach(row => {
        row.disable(alwaysDisabled)
        this.setAvailability(row, true)
      })
    }
    super.disable()
  }

  setAvailability (element, val) {
    if (element.add_row_button) element.add_row_button.disabled = val
    if (element.remove_all_rows_button) element.remove_all_rows_button.disabled = val
    if (element.delete_last_row_button) element.delete_last_row_button.disabled = val
    if (element.copy_button) element.copy_button.disabled = val
    if (element.delete_button) element.delete_button.disabled = val
    if (element.moveup_button) element.moveup_button.disabled = val
    if (element.movedown_button) element.movedown_button.disabled = val
  }

  preBuild () {
    super.preBuild()

    this.rows = []
    this.row_cache = []

    this.hide_delete_buttons = this.options.disable_array_delete || this.jsoneditor.options.disable_array_delete
    this.hide_delete_all_rows_buttons = this.hide_delete_buttons || this.options.disable_array_delete_all_rows || this.jsoneditor.options.disable_array_delete_all_rows
    this.hide_delete_last_row_buttons = this.hide_delete_buttons || this.options.disable_array_delete_last_row || this.jsoneditor.options.disable_array_delete_last_row
    this.hide_move_buttons = this.options.disable_array_reorder || this.jsoneditor.options.disable_array_reorder
    this.hide_add_button = this.options.disable_array_add || this.jsoneditor.options.disable_array_add
    this.show_copy_button = this.options.enable_array_copy || this.jsoneditor.options.enable_array_copy
    this.array_controls_top = this.options.array_controls_top || this.jsoneditor.options.array_controls_top
  }

  build () {
    if (!this.options.compact) {
      this.header = document.createElement('label')
      this.header.textContent = this.getTitle()
      this.title = this.theme.getHeader(this.header)
      this.container.appendChild(this.title)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }
      this.error_holder = document.createElement('div')
      this.container.appendChild(this.error_holder)

      if (this.schema.format === 'tabs-top') {
        this.controls = this.theme.getHeaderButtonHolder()
        this.title.appendChild(this.controls)
        this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.getItemTitle()))
        this.container.appendChild(this.tabs_holder)
        this.row_holder = this.theme.getTopTabContentHolder(this.tabs_holder)

        this.active_tab = null
      } else if (this.schema.format === 'tabs') {
        this.controls = this.theme.getHeaderButtonHolder()
        this.title.appendChild(this.controls)
        this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.getItemTitle()))
        this.container.appendChild(this.tabs_holder)
        this.row_holder = this.theme.getTabContentHolder(this.tabs_holder)

        this.active_tab = null
      } else {
        this.panel = this.theme.getIndentedPanel()
        this.container.appendChild(this.panel)
        this.row_holder = document.createElement('div')
        this.panel.appendChild(this.row_holder)
        this.controls = this.theme.getButtonHolder()
        if (this.array_controls_top) {
          this.title.appendChild(this.controls)
        } else {
          this.panel.appendChild(this.controls)
        }
      }
    } else {
      /* compact mode */
      this.title = this.theme.getHeader('')
      this.container.appendChild(this.title)
      this.panel = this.theme.getIndentedPanel()
      this.container.appendChild(this.panel)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      this.controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.controls)
      this.row_holder = document.createElement('div')
      this.panel.appendChild(this.row_holder)
    }

    /* Add controls */
    this.addControls()
  }

  onChildEditorChange (editor) {
    this.refreshValue()
    this.refreshTabs(true)
    super.onChildEditorChange(editor)
  }

  getItemTitle () {
    if (!this.item_title) {
      if (this.schema.items && !Array.isArray(this.schema.items)) {
        const tmp = this.jsoneditor.expandRefs(this.schema.items)
        this.item_title = tmp.title || this.translate('default_array_item_title')
      } else {
        this.item_title = this.translate('default_array_item_title')
      }
    }
    return this.cleanText(this.item_title)
  }

  getItemSchema (i) {
    if (Array.isArray(this.schema.items)) {
      if (i >= this.schema.items.length) {
        if (this.schema.additionalItems === true) {
          return {}
        } else if (this.schema.additionalItems) {
          return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.additionalItems)
        }
      } else {
        return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.items[i])
      }
    } else if (this.schema.items) {
      return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.items)
    } else {
      return {}
    }
  }

  getItemInfo (i) {
    let schema = this.getItemSchema(i)

    /* Check if it's cached */
    this.item_info = this.item_info || {}
    const stringified = JSON.stringify(schema)
    if (typeof this.item_info[stringified] !== 'undefined') return this.item_info[stringified]

    /* Get the schema for this item */
    schema = this.jsoneditor.expandRefs(schema)

    this.item_info[stringified] = {
      title: schema.title || this.translate('default_array_item_title'),
      default: schema.default,
      width: 12,
      child_editors: schema.properties || schema.items
    }

    return this.item_info[stringified]
  }

  getElementEditor (i) {
    const itemInfo = this.getItemInfo(i)
    let schema = this.getItemSchema(i)
    schema = this.jsoneditor.expandRefs(schema)
    schema.title = `${itemInfo.title} ${i + 1}`

    const editor = this.jsoneditor.getEditorClass(schema)

    let holder
    if (this.tabs_holder) {
      if (this.schema.format === 'tabs-top') {
        holder = this.theme.getTopTabContent()
      } else {
        holder = this.theme.getTabContent()
      }
      holder.id = `${this.path}.${i}`
    } else if (itemInfo.child_editors) {
      holder = this.theme.getChildEditorHolder()
    } else {
      holder = this.theme.getIndentedPanel()
    }

    this.row_holder.appendChild(holder)

    const ret = this.jsoneditor.createEditor(editor, {
      jsoneditor: this.jsoneditor,
      schema,
      container: holder,
      path: `${this.path}.${i}`,
      parent: this,
      required: true
    })
    ret.preBuild()
    ret.build()
    ret.postBuild()

    if (!ret.title_controls) {
      ret.array_controls = this.theme.getButtonHolder()
      holder.appendChild(ret.array_controls)
    }

    return ret
  }

  checkParent (elem) {
    return elem && elem.parentNode
  }

  destroy () {
    this.empty(true)
    if (this.checkParent(this.title)) this.title.parentNode.removeChild(this.title)
    if (this.checkParent(this.description)) this.description.parentNode.removeChild(this.description)
    if (this.checkParent(this.row_holder)) this.row_holder.parentNode.removeChild(this.row_holder)
    if (this.checkParent(this.controls)) this.controls.parentNode.removeChild(this.controls)
    if (this.checkParent(this.panel)) this.panel.parentNode.removeChild(this.panel)

    this.rows = this.row_cache = this.title = this.description = this.row_holder = this.panel = this.controls = null

    super.destroy()
  }

  empty (hard) {
    if (!this.rows) return

    this.rows.forEach((row, i) => {
      if (hard) {
        if (this.checkParent(row.tab)) row.tab.parentNode.removeChild(row.tab)
        this.destroyRow(row, true)
        this.row_cache[i] = null
      }
      this.rows[i] = null
    })
    this.rows = []
    if (hard) this.row_cache = []
  }

  destroyRow (row, hard) {
    const holder = row.container
    if (hard) {
      row.destroy()
      if (holder.parentNode) holder.parentNode.removeChild(holder)
      if (this.checkParent(row.tab)) row.tab.parentNode.removeChild(row.tab)
    } else {
      if (row.tab) row.tab.style.display = 'none'
      holder.style.display = 'none'
      row.unregister()
    }
  }

  getMax () {
    if ((Array.isArray(this.schema.items)) && this.schema.additionalItems === false) {
      return Math.min(this.schema.items.length, this.schema.maxItems || Infinity)
    }
    return this.schema.maxItems || Infinity
  }

  refreshTabs (refreshHeaders) {
    this.rows.forEach(row => {
      if (!row.tab) return

      if (refreshHeaders) {
        row.tab_text.textContent = row.getHeaderText()
      } else if (row.tab === this.active_tab) {
        this.theme.markTabActive(row)
      } else {
        this.theme.markTabInactive(row)
      }
    })
  }

  ensureArraySize (value) {
    if (!(Array.isArray(value))) value = [value]

    if (this.schema.minItems) {
      while (value.length < this.schema.minItems) {
        value.push(this.getItemInfo(value.length).default)
      }
    }
    if (this.getMax() && value.length > this.getMax()) {
      value = value.slice(0, this.getMax())
    }
    return value
  }

  setValue (value = [], initial) {
    /* Make sure value has between minItems and maxItems items in it */
    value = this.ensureArraySize(value)

    const serialized = JSON.stringify(value)
    if (serialized === this.serialized) return

    value.forEach((val, i) => {
      if (this.rows[i]) {
        /* TODO: don't set the row's value if it hasn't changed */
        this.rows[i].setValue(val, initial)
      } else if (this.row_cache[i]) {
        this.rows[i] = this.row_cache[i]
        this.rows[i].setValue(val, initial)
        this.rows[i].container.style.display = ''
        if (this.rows[i].tab) this.rows[i].tab.style.display = ''
        this.rows[i].register()
        this.jsoneditor.trigger('addRow', this.rows[i])
      } else {
        const editor = this.addRow(val, initial)
        this.jsoneditor.trigger('addRow', editor)
      }
    })

    for (let j = value.length; j < this.rows.length; j++) {
      this.destroyRow(this.rows[j])
      this.rows[j] = null
    }
    this.rows = this.rows.slice(0, value.length)

    /* Set the active tab */
    const row = this.rows.find(row => row.tab === this.active_tab)
    let newActiveTab = typeof row !== 'undefined' ? row.tab : null
    if (!newActiveTab && this.rows.length) newActiveTab = this.rows[0].tab

    this.active_tab = newActiveTab

    this.refreshValue(initial)
    this.refreshTabs(true)
    this.refreshTabs()

    this.onChange()

    /* TODO: sortable */
  }

  setVisibility (element, display) {
    element.style.display = display ? '' : 'none'
  }

  setupButtons (minItems) {
    const controlsNeeded = []

    if (!this.value.length) {
      this.delete_last_row_button.style.display = 'none'
      this.remove_all_rows_button.style.display = 'none'
    } else if (this.value.length === 1) {
      this.remove_all_rows_button.style.display = 'none'

      /* If there are minItems items in the array, or configured to hide the delete_last_row button, hide the delete button beneath the rows */
      const display = !(minItems || this.hide_delete_last_row_buttons)
      this.setVisibility(this.delete_last_row_button, display)
      controlsNeeded.push(display)
    } else {
      const display1 = !(minItems || this.hide_delete_last_row_buttons)
      this.setVisibility(this.delete_last_row_button, display1)
      controlsNeeded.push(display1)

      const display2 = !(minItems || this.hide_delete_all_rows_buttons)
      this.setVisibility(this.remove_all_rows_button, display2)
      controlsNeeded.push(display2)
    }

    /* If there are maxItems in the array, hide the add button beneath the rows */
    const display = !((this.getMax() && this.getMax() <= this.rows.length) || this.hide_add_button)
    this.setVisibility(this.add_row_button, display)
    controlsNeeded.push(display)

    return controlsNeeded.some(e => e)
  }

  refreshValue (force) {
    const oldi = this.value ? this.value.length : 0
    /* Get the value for this editor */
    this.value = this.rows.map(editor => editor.getValue())

    if (oldi !== this.value.length || force) {
      /* If we currently have minItems items in the array */
      const minItems = this.schema.minItems && this.schema.minItems >= this.rows.length

      this.rows.forEach((editor, i) => {
        /* Hide the move down button for the last row */
        if (editor.movedown_button) {
          const display = (i !== this.rows.length - 1)
          this.setVisibility(editor.movedown_button, display)
        }

        /* Hide the delete button if we have minItems items */
        if (editor.delete_button) {
          this.setVisibility(editor.delete_button, !minItems)
        }

        /* Get the value for this editor */
        this.value[i] = editor.getValue()
      })

      if (!this.collapsed && this.setupButtons(minItems)) {
        this.controls.style.display = 'inline-block'
      } else {
        this.controls.style.display = 'none'
      }
    }
    this.serialized = JSON.stringify(this.value)
  }

  addRow (value, initial) {
    const i = this.rows.length

    this.rows[i] = this.getElementEditor(i)
    this.row_cache[i] = this.rows[i]

    if (this.tabs_holder) {
      this.rows[i].tab_text = document.createElement('span')
      this.rows[i].tab_text.textContent = this.rows[i].getHeaderText()
      if (this.schema.format === 'tabs-top') {
        this.rows[i].tab = this.theme.getTopTab(this.rows[i].tab_text, this.getValidId(this.rows[i].path))
        this.theme.addTopTab(this.tabs_holder, this.rows[i].tab)
      } else {
        this.rows[i].tab = this.theme.getTab(this.rows[i].tab_text, this.getValidId(this.rows[i].path))
        this.theme.addTab(this.tabs_holder, this.rows[i].tab)
      }
      this.rows[i].tab.addEventListener('click', (e) => {
        this.active_tab = this.rows[i].tab
        this.refreshTabs()
        e.preventDefault()
        e.stopPropagation()
      })
    }

    const controlsHolder = this.rows[i].title_controls || this.rows[i].array_controls

    /* Buttons to delete row, move row up, and move row down */
    if (!this.hide_delete_buttons) {
      this.rows[i].delete_button = this._createDeleteButton(i, controlsHolder)
    }

    /* Button to copy an array element and add it as last element */
    if (this.show_copy_button) {
      this.rows[i].copy_button = this._createCopyButton(i, controlsHolder)
    }

    if (i && !this.hide_move_buttons) {
      this.rows[i].moveup_button = this._createMoveUpButton(i, controlsHolder)
    }

    if (!this.hide_move_buttons) {
      this.rows[i].movedown_button = this._createMoveDownButton(i, controlsHolder)
    }

    if (value) this.rows[i].setValue(value, initial)
    this.refreshTabs()

    return this.rows[i]
  }

  _createDeleteButton (i, holder) {
    const button = this.getButton(this.getItemTitle(), 'delete', this.translate('button_delete_row_title', [this.getItemTitle()]))
    button.classList.add('delete', 'json-editor-btntype-delete')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      const i = e.currentTarget.getAttribute('data-i') * 1
      const newval = this.getValue().filter((row, j) => j !== i)
      let newActiveTab = null

      const editor = this.rows[i]

      this.setValue(newval)

      if (this.rows[i]) {
        newActiveTab = this.rows[i].tab
      } else if (this.rows[i - 1]) {
        newActiveTab = this.rows[i - 1].tab
      }

      if (newActiveTab) {
        this.active_tab = newActiveTab
        this.refreshTabs()
      }

      this.onChange(true)
      this.jsoneditor.trigger('deleteRow', editor)
    })

    if (holder) {
      holder.appendChild(button)
    }
    return button
  }

  _createCopyButton (i, holder) {
    const button = this.getButton(this.getItemTitle(), 'copy', `Copy ${this.getItemTitle()}`)
    button.classList.add('copy', 'json-editor-btntype-copy')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      const value = this.getValue()
      e.preventDefault()
      e.stopPropagation()
      const i = e.currentTarget.getAttribute('data-i') * 1

      value.forEach((row, j) => {
        if (j === i) {
          value.push(row)
        }
      })

      this.setValue(value)
      this.refreshValue(true)
      this.onChange(true)
    })

    holder.appendChild(button)
    return button
  }

  _createMoveUpButton (i, holder) {
    const button = this.getButton('', (this.schema.format === 'tabs-top' ? 'moveleft' : 'moveup'), this.translate('button_move_up_title'))
    button.classList.add('moveup', 'json-editor-btntype-move')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const i = e.currentTarget.getAttribute('data-i') * 1

      if (i <= 0) return
      const rows = this.getValue()
      const tmp = rows[i - 1]
      rows[i - 1] = rows[i]
      rows[i] = tmp

      this.setValue(rows)
      this.active_tab = this.rows[i - 1].tab
      this.refreshTabs()

      this.onChange(true)

      this.jsoneditor.trigger('moveRow', this.rows[i - 1])
    })

    if (holder) {
      holder.appendChild(button)
    }
    return button
  }

  _createMoveDownButton (i, holder) {
    const button = this.getButton('', (this.schema.format === 'tabs-top' ? 'moveright' : 'movedown'), this.translate('button_move_down_title'))
    button.classList.add('movedown', 'json-editor-btntype-move')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const i = e.currentTarget.getAttribute('data-i') * 1

      const rows = this.getValue()
      if (i >= rows.length - 1) return
      const tmp = rows[i + 1]
      rows[i + 1] = rows[i]
      rows[i] = tmp

      this.setValue(rows)
      this.active_tab = this.rows[i + 1].tab
      this.refreshTabs()
      this.onChange(true)

      this.jsoneditor.trigger('moveRow', this.rows[i + 1])
    })

    if (holder) {
      holder.appendChild(button)
    }
    return button
  }

  addControls () {
    this.collapsed = false
    this.toggle_button = this._createToggleButton()

    /* If it should start collapsed */
    if (this.options.collapsed) {
      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["trigger"])(this.toggle_button, 'click')
    }

    /* Collapse button disabled */
    if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
      if (this.schema.options.disable_collapse) this.toggle_button.style.display = 'none'
    } else if (this.jsoneditor.options.disable_collapse) {
      this.toggle_button.style.display = 'none'
    }

    /* Add "new row" and "delete last" buttons below editor */
    this.add_row_button = this._createAddRowButton()
    this.delete_last_row_button = this._createDeleteLastRowButton()
    this.remove_all_rows_button = this._createRemoveAllRowsButton()

    if (this.tabs) {
      this.add_row_button.classList.add('je-array-control-btn')
      this.delete_last_row_button.classList.add('je-array-control-btn')
      this.remove_all_rows_button.classList.add('je-array-control-btn')
    }
  }

  _createToggleButton () {
    const button = this.getButton('', 'collapse', this.translate('button_collapse'))
    button.classList.add('json-editor-btntype-toggle')
    this.title.insertBefore(button, this.title.childNodes[0])

    const rowHolderDisplay = this.row_holder.style.display
    const controlsDisplay = this.controls.style.display
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      if (this.panel) this.setVisibility(this.panel, this.collapsed)
      if (this.tabs_holder) this.setVisibility(this.tabs_holder, this.collapsed)
      if (this.collapsed) {
        this.collapsed = false
        this.row_holder.style.display = rowHolderDisplay
        this.controls.style.display = controlsDisplay
        this.setButtonText(e.currentTarget, '', 'collapse', this.translate('button_collapse'))
      } else {
        this.collapsed = true
        this.row_holder.style.display = 'none'
        this.controls.style.display = 'none'
        this.setButtonText(e.currentTarget, '', 'expand', this.translate('button_expand'))
      }
    })
    return button
  }

  _createAddRowButton () {
    const button = this.getButton(this.getItemTitle(), 'add', this.translate('button_add_row_title', [this.getItemTitle()]))
    button.classList.add('json-editor-btntype-add')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const i = this.rows.length
      let editor
      if (this.row_cache[i]) {
        editor = this.rows[i] = this.row_cache[i]
        this.rows[i].setValue(this.rows[i].getDefault(), true)
        this.rows[i].container.style.display = ''
        if (this.rows[i].tab) this.rows[i].tab.style.display = ''
        this.rows[i].register()
      } else {
        editor = this.addRow()
      }
      this.active_tab = this.rows[i].tab
      this.refreshTabs()
      this.refreshValue()
      this.onChange(true)
      this.jsoneditor.trigger('addRow', editor)
    })
    this.controls.appendChild(button)
    return button
  }

  _createDeleteLastRowButton () {
    const button = this.getButton(this.translate('button_delete_last', [this.getItemTitle()]), 'subtract', this.translate('button_delete_last_title', [this.getItemTitle()]))
    button.classList.add('json-editor-btntype-deletelast')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      const rows = this.getValue()
      let newActiveTab = null

      const editor = rows.pop()

      this.setValue(rows)

      if (this.rows[this.rows.length - 1]) {
        newActiveTab = this.rows[this.rows.length - 1].tab
      }

      if (newActiveTab) {
        this.active_tab = newActiveTab
        this.refreshTabs()
      }

      this.onChange(true)
      this.jsoneditor.trigger('deleteRow', editor)
    })
    this.controls.appendChild(button)
    return button
  }

  _createRemoveAllRowsButton () {
    const button = this.getButton(this.translate('button_delete_all'), 'delete', this.translate('button_delete_all_title'))
    button.classList.add('json-editor-btntype-deleteall')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      this.empty(true)
      this.setValue([])
      this.onChange(true)
      this.jsoneditor.trigger('deleteAllRows')
    })
    this.controls.appendChild(button)
    return button
  }

  showValidationErrors (errors) {
    /* Get all the errors that pertain to this editor */
    const myErrors = []
    const otherErrors = []
    errors.forEach(error => {
      if (error.path === this.path) {
        myErrors.push(error)
      } else {
        otherErrors.push(error)
      }
    })

    /* Show errors for this editor */
    if (this.error_holder) {
      if (myErrors.length) {
        this.error_holder.innerHTML = ''
        this.error_holder.style.display = ''
        myErrors.forEach(error => {
          this.error_holder.appendChild(this.theme.getErrorMessage(error.message))
        })
        /* Hide error area */
      } else {
        this.error_holder.style.display = 'none'
      }
    }

    /* Show errors for child editors */
    this.rows.forEach(row =>
      row.showValidationErrors(otherErrors)
    )
  }
}
ArrayEditor.rules = _array_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]


/***/ }),

/***/ "./src/editors/array/choices.js":
/*!**************************************!*\
  !*** ./src/editors/array/choices.js ***!
  \**************************************/
/*! exports provided: ArrayChoicesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayChoicesEditor", function() { return ArrayChoicesEditor; });
/* harmony import */ var _multiselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect.js */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./src/utilities.js");



class ArrayChoicesEditor extends _multiselect_js__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"] {
  setValue (value, initial) {
    if (this.choices_instance) {
      /* Make sure we are dealing with an array of strings so we can check for strict equality */
      value = [].concat(value).map(e => `${e}`)

      this.updateValue(value) /* Sets this.value to sanitized value */

      this.choices_instance.removeActiveItems() /* Remove existing selection */
      this.choices_instance.setChoiceByValue(this.value) /* Set new selection */

      this.onChange(true)
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    if (window.Choices && !this.choices_instance) {
      /* Get options, either global options from "this.defaults.options.choices" or */
      /* single property options from schema "options.choices" */
      const options = this.expandCallbacks('choices', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        removeItems: true,
        removeItemButton: true
      }, this.defaults.options.choices || {}, this.options.choices || {}, {
        addItems: true,
        editItems: false,
        duplicateItemsAllowed: false
      }))

      /* New items are allowed if option "addItems" is true and items type is "string" */
      /* this.newEnumAllowed = options.addItems = !!options.addItems && this.schema.items && this.schema.items.type == 'string'; */

      /* Choices doesn't support adding new items to select type input */
      this.newEnumAllowed = false

      this.choices_instance = new window.Choices(this.input, options)

      /* Remove change handler set in parent class (src/multiselect.js) */
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      /* Create a new change handler */
      this.multiselectChangeHandler = e => {
        const value = this.choices_instance.getValue(true)
        this.updateValue(value)
        this.onChange(true)
      }
      this.control.addEventListener('change', this.multiselectChangeHandler, false)
    }
    super.afterInputReady()
  }

  updateValue (value) {
    value = [].concat(value)
    let changed = false; const newValue = []
    for (let i = 0; i < value.length; i++) {
      if (!this.select_values[`${value[i]}`]) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      const sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  }

  addNewOption (value) {
    /* Add new value and label */
    this.option_keys.push(`${value}`)
    this.option_titles.push(`${value}`)
    this.select_values[`${value}`] = value
    /* Update Schema enum to prevent triggering "Value must be one of the enumerated values" */
    this.schema.items.enum.push(value)
    /* Add new value and label to choices */
    this.choices_instance.setChoices([{ value: `${value}`, label: `${value}` }], 'value', 'label', false)

    return true
  }

  enable () {
    if (!this.always_disabled && this.choices_instance) this.choices_instance.enable()
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.choices_instance) this.choices_instance.disable()
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.choices_instance) {
      this.choices_instance.destroy()
      this.choices_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/array/select2.js":
/*!**************************************!*\
  !*** ./src/editors/array/select2.js ***!
  \**************************************/
/*! exports provided: ArraySelect2Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySelect2Editor", function() { return ArraySelect2Editor; });
/* harmony import */ var _multiselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect.js */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./src/utilities.js");



class ArraySelect2Editor extends _multiselect_js__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"] {
  setValue (value, initial) {
    if (this.select2_instance) {
      /* Make sure we are dealing with an array of strings so we can check for strict equality */
      value = [].concat(value).map(e => `${e}`)

      this.updateValue(value) /* Sets this.value to sanitized value */

      if (this.select2v4) this.select2_instance.val(this.value).change()
      else this.select2_instance.select2('val', this.value)

      this.onChange(true)
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    let options

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance) {
      /* Get options, either global options from "this.defaults.options.select2" or */
      /* single property options from schema "options.select2" */
      options = this.expandCallbacks('select2', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        tags: true,
        width: '100%'
      }, this.defaults.options.select2 || {}, this.options.select2 || {}))

      /* New items are allowed if option "tags" is true and items type is "string" */
      this.newEnumAllowed = options.tags = !!options.tags && this.schema.items && this.schema.items.type === 'string'

      this.select2_instance = window.jQuery(this.input).select2(options)
      this.select2v4 = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["hasOwnProperty"])(this.select2_instance.select2, 'amd')

      this.selectChangeHandler = () => {
        const value = this.select2v4 ? this.select2_instance.val() : this.select2_instance.select2('val')
        this.updateValue(value)
        this.onChange(true)
      }

      /* Add event handler. */
      /* Note: Must use the "on()" method and not addEventListener() */
      this.select2_instance.on('select2-blur', this.selectChangeHandler)
      this.select2_instance.on('change', this.selectChangeHandler)
    }
    super.afterInputReady()
  }

  updateValue (value) {
    value = [].concat(value)
    let changed = false; const newValue = []
    for (let i = 0; i < value.length; i++) {
      /*      if (!this.select_options[value[i]+'']) { */
      if (!this.select_values[`${value[i]}`]) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      const sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  }

  addNewOption (value) {
    /* Add new value and label */
    this.option_keys.push(`${value}`)
    this.option_titles.push(`${value}`)
    this.select_values[`${value}`] = value
    /* Update Schema enum to prevent triggering "Value must be one of the enumerated values" */
    this.schema.items.enum.push(value)

    const optionTag = this.input.querySelector(`option[value="${value}"]`)
    /* Remove data attribute to make option tag permanent. (user input) */
    if (optionTag) optionTag.removeAttribute('data-select2-tag')
    /* Create new option tag (setValue) */
    else this.input.appendChild(new Option(value, value, false, false)).trigger('change')

    return true
  }

  enable () {
    if (!this.always_disabled && this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', false)
      else this.select2_instance.select2('enable', true)
    }
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', true)
      else this.select2_instance.select2('enable', false)
    }
    super.disable()
  }

  destroy () {
    if (this.select2_instance) {
      this.select2_instance.select2('destroy')
      this.select2_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/array/selectize.js":
/*!****************************************!*\
  !*** ./src/editors/array/selectize.js ***!
  \****************************************/
/*! exports provided: ArraySelectizeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySelectizeEditor", function() { return ArraySelectizeEditor; });
/* harmony import */ var _multiselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect.js */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities.js */ "./src/utilities.js");



class ArraySelectizeEditor extends _multiselect_js__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"] {
  setValue (value, initial) {
    if (this.selectize_instance) {
      /* Make sure we are dealing with an array of strings so we can check for strict equality */
      value = [].concat(value).map(e => `${e}`)

      this.updateValue(value) /* Sets this.value to sanitized value */

      this.selectize_instance.setValue(this.value)

      this.onChange(true)
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    let options

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
      /* Get options, either global options from "this.defaults.options.selectize" or */
      /* single property options from schema "options.selectize" */
      options = this.expandCallbacks('selectize', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        plugins: ['remove_button'],
        delimiter: false,
        createOnBlur: true,
        create: true
      }, this.defaults.options.selectize || {}, this.options.selectize || {}))

      /* New items are allowed if option "create" is true and items type is "string" */
      this.newEnumAllowed = options.create = !!options.create && this.schema.items && this.schema.items.type === 'string'

      this.selectize_instance = (window.jQuery(this.input).selectize(options))[0].selectize

      /* Remove change handler set in parent class (src/multiselect.js) */
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      /* Create a new change handler */
      this.multiselectChangeHandler = e => {
        const value = this.selectize_instance.getValue()
        this.updateValue(value)
        this.onChange(true)
      }

      /* Add new event handler. */
      /* Note: Must use the "on()" method and not addEventListener() */
      this.selectize_instance.on('change', this.multiselectChangeHandler)
    }
    super.afterInputReady()
  }

  updateValue (value) {
    value = [].concat(value)
    let changed = false; const newValue = []
    for (let i = 0; i < value.length; i++) {
      /*      if (!this.select_options[value[i]+'']) { */
      if (!this.select_values[`${value[i]}`]) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      const sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  }

  addNewOption (value) {
    /* Add new value and label */
    this.option_keys.push(`${value}`)
    this.option_titles.push(`${value}`)
    this.select_values[`${value}`] = value
    /* Update Schema enum to prevent triggering "Value must be one of the enumerated values" */
    this.schema.items.enum.push(value)
    /* Add new value and label to selectize */
    this.selectize_instance.addOption({ text: value, value })

    return true
  }

  enable () {
    if (!this.always_disabled && this.selectize_instance) this.selectize_instance.unlock()
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.selectize_instance) this.selectize_instance.lock()
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.selectize_instance) {
      this.selectize_instance.destroy()
      this.selectize_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/autocomplete.js":
/*!*************************************!*\
  !*** ./src/editors/autocomplete.js ***!
  \*************************************/
/*! exports provided: AutocompleteEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteEditor", function() { return AutocompleteEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class AutocompleteEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  postBuild () {
    if (window.Autocomplete) {
      /* create wrapper container */
      this.autocomplete_wrapper = document.createElement('div')

      /* insert wrapper after this.input in the DOM tree */
      this.input.parentNode.insertBefore(this.autocomplete_wrapper, this.input.nextSibling)

      /* move this.input into wrapper */
      this.autocomplete_wrapper.appendChild(this.input)

      /* create dropdown container */
      this.autocomplete_dropdown = document.createElement('ul')

      /* insert dropdown after this.input in the DOM tree */
      this.input.parentNode.insertBefore(this.autocomplete_dropdown, this.input.nextSibling)
    }
    super.postBuild()
  }

  afterInputReady () {
    let options

    if (window.Autocomplete && !this.autocomplete_instance) {
      /* Get options, either global options from "this.defaults.options.autocomplete" or */
      /* single property options from schema "options.autocomplete" */
      options = this.expandCallbacks('autocomplete', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        search: (jseditor, input) => {
          console.log(`No "search" callback defined for autocomplete in property "${jseditor.key}"`)
          return []
        },
        baseClass: 'autocomplete'
      }, this.defaults.options.autocomplete || {}, this.options.autocomplete || {}))

      this.autocomplete_wrapper.classList.add(options.baseClass)
      this.autocomplete_dropdown.classList.add(`${options.baseClass}-result-list`)
      /* this.input.classList.add(options.baseClass + '-input'); */

      this.autocomplete_instance = new window.Autocomplete(this.autocomplete_wrapper, options)
    }
    super.afterInputReady()
  }

  destroy () {
    if (this.autocomplete_instance) {
      if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
      if (this.autocomplete_dropdown && this.autocomplete_dropdown.parentNode) this.autocomplete_dropdown.parentNode.removeChild(this.autocomplete_dropdown)
      if (this.autocomplete_wrapper && this.autocomplete_wrapper.parentNode) this.autocomplete_wrapper.parentNode.removeChild(this.autocomplete_wrapper)
      this.autocomplete_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/base64.js":
/*!*******************************!*\
  !*** ./src/editors/base64.js ***!
  \*******************************/
/*! exports provided: Base64Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Editor", function() { return Base64Editor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");


class Base64Editor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  getNumColumns () {
    return 4
  }

  setFileReaderListener (frMultiple) {
    frMultiple.addEventListener('load', (event) => {
      if (this.count === this.current_item_index) {
        /* Overwrite existing file by default, leave other properties unchanged */
        this.value[this.count][this.key] = event.target.result
      } else {
        const tempObject = {}
        /* Create empty object */
        for (const key in this.parent.schema.properties) {
          tempObject[key] = ''
        }
        /* Set object media file */
        tempObject[this.key] = event.target.result
        this.value.splice(this.count, 0, tempObject) /* insert new file object */
      }

      /* Increment using the listener and not the 'for' loop as the listener will be processed asynchronously */
      this.count += 1
      /* When all files have been processed, update the value of the editor */
      if (this.count === (this.total + this.current_item_index)) {
        this.arrayEditor.setValue(this.value)
      }
    })
  }

  build () {
    this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)

    /* Input that holds the base64 string */
    this.input = this.theme.getFormInputField('hidden')
    this.container.appendChild(this.input)

    /* Don't show uploader if this is readonly */
    if (!this.schema.readOnly && !this.schema.readonly) {
      if (!window.FileReader) throw new Error('FileReader required for base64 editor')

      /* File uploader */
      this.uploader = this.theme.getFormInputField('file')

      /* Set attribute of file input field to 'multiple' if: */
      /* 'multiple' key has been set to 'true' in the schema */
      /* and the parent object is of type 'object' */
      /* and the parent of the parent type has been set to 'array' */
      if (this.schema.options && this.schema.options.multiple && this.schema.options.multiple === true && this.parent && this.parent.schema.type === 'object' && this.parent.parent && this.parent.parent.schema.type === 'array') {
        this.uploader.setAttribute('multiple', '')
      }

      this.uploader.addEventListener('change', e => {
        e.preventDefault()
        e.stopPropagation()

        if (e.currentTarget.files && e.currentTarget.files.length) {
          /* Check the amount of files uploaded. */
          /* If 1, use the regular upload, otherwise use the multiple upload method */
          if (e.currentTarget.files.length > 1 && this.schema.options && this.schema.options.multiple && this.schema.options.multiple === true && this.parent && this.parent.schema.type === 'object' && this.parent.parent && this.parent.parent.schema.type === 'array') {
            /* Load editor of parent.parent to get the array */
            this.arrayEditor = this.jsoneditor.getEditor(this.parent.parent.path)
            /* Check the current value of this editor */
            this.value = this.arrayEditor.getValue()
            /* Set variables for amount of files, index of current array item and */
            /* count value containing current status of processed files */
            this.total = e.currentTarget.files.length
            this.current_item_index = parseInt(this.parent.key)
            this.count = this.current_item_index

            for (let i = 0; i < this.total; i++) {
              const frMultiple = new FileReader()
              this.setFileReaderListener(frMultiple)
              frMultiple.readAsDataURL(e.currentTarget.files[i])
            }
          } else {
            let fr = new FileReader()
            fr.onload = (evt) => {
              this.value = evt.target.result
              this.refreshPreview()
              this.onChange(true)
              fr = null
            }
            fr.readAsDataURL(e.currentTarget.files[0])
          }
        }
      })
    }

    this.preview = this.theme.getFormInputDescription(this.schema.description)
    this.container.appendChild(this.preview)

    this.control = this.theme.getFormControl(this.label, this.uploader || this.input, this.preview, this.infoButton)
    this.container.appendChild(this.control)
  }

  refreshPreview () {
    if (this.last_preview === this.value) return
    this.last_preview = this.value

    this.preview.innerHTML = ''

    if (!this.value) return

    let mime = this.value.match(/^data:([^;,]+)[;,]/)
    if (mime) mime = mime[1]

    if (!mime) {
      this.preview.innerHTML = '<em>Invalid data URI</em>'
    } else {
      this.preview.innerHTML = `<strong>Type:</strong> ${mime}, <strong>Size:</strong> ${Math.floor((this.value.length - this.value.split(',')[0].length - 1) / 1.33333)} bytes`
      if (mime.substr(0, 5) === 'image') {
        this.preview.innerHTML += '<br>'
        const img = document.createElement('img')
        img.style.maxWidth = '100%'
        img.style.maxHeight = '100px'
        img.src = this.value
        this.preview.appendChild(img)
      }
    }
  }

  enable () {
    if (!this.always_disabled) {
      if (this.uploader) this.uploader.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.uploader) this.uploader.disabled = true
    super.disable()
  }

  setValue (val) {
    if (this.value !== val) {
      this.value = val
      this.input.value = this.value
      this.refreshPreview()
      this.onChange()
    }
  }

  destroy () {
    if (this.preview && this.preview.parentNode) this.preview.parentNode.removeChild(this.preview)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.uploader && this.uploader.parentNode) this.uploader.parentNode.removeChild(this.uploader)

    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/button.js":
/*!*******************************!*\
  !*** ./src/editors/button.js ***!
  \*******************************/
/*! exports provided: ButtonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonEditor", function() { return ButtonEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* Non-Active editor for displaying buttons in form */



class ButtonEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  constructor (options, defaults) {
    super(options, defaults)
    this.active = false

    /* Set field to required in schema otherwise it will not be displayed */
    if (this.parent && this.parent.schema) {
      if (Array.isArray(this.parent.schema.required)) {
        if (!this.parent.schema.required.includes(this.key)) {
          this.parent.schema.required.push(this.key)
        }
      } else {
        this.parent.schema.required = [this.key]
      }
    }
  }

  build () {
    this.options.compact = true

    /* Get options, either global options from "this.defaults.options.button" or */
    /* single property options from schema "options.button" */
    const title = this.schema.title || this.key
    const options = this.expandCallbacks('button', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
      icon: '',
      validated: false,
      align: 'left',
      action: (jseditor, e) => {
        window.alert(`No button action defined for "${jseditor.path}"`)
      }
    }, this.defaults.options.button || {}, this.options.button || {}))

    this.input = this.theme.getFormButton(title, options.icon, title)
    this.input.addEventListener('click', options.action, false)

    if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
      this.always_disabled = true
      this.input.setAttribute('readonly', 'true')
    }

    /* Set custom attributes on input element. Parameter is array of protected keys. Empty array if none. */
    this.setInputAttributes(['readonly'])

    this.control = this.theme.getFormButtonHolder(options.align)
    this.control.appendChild(this.input)

    this.container.appendChild(this.control)

    this.changeHandler = () => {
      if (this.jsoneditor.validate(this.jsoneditor.getValue()).length > 0) this.disable()
      else this.enable()
    }

    /* Enable/disable the button depending on form validation */
    if (options.validated) this.jsoneditor.on('change', this.changeHandler)
  }

  enable () {
    if (!this.always_disabled) {
      this.input.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    super.disable()
  }

  getNumColumns () {
    return 2
  }

  activate () {
    this.active = false
    this.enable()
  }

  deactivate () {
    /* only non required properties can be deactivated. */
    if (!this.isRequired()) {
      this.active = false
      this.disable()
    }
  }

  destroy () {
    this.jsoneditor.off('change', this.changeHandler)
    this.changeHandler = null
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/checkbox.js":
/*!*********************************!*\
  !*** ./src/editors/checkbox.js ***!
  \*********************************/
/*! exports provided: CheckboxEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxEditor", function() { return CheckboxEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");


class CheckboxEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  setValue (value, initial) {
    value = !!value
    const changed = this.getValue() !== value
    this.value = value
    this.input.checked = this.value
    this.onChange(changed)
  }

  register () {
    super.register()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  }

  unregister () {
    super.unregister()
    if (!this.input) return
    this.input.removeAttribute('name')
  }

  getNumColumns () {
    return Math.min(12, Math.max(this.getTitle().length / 7, 2))
  }

  build () {
    if (!this.parent.options.table_row) {
      this.label = this.header = this.theme.getCheckboxLabel(this.getTitle(), this.isRequired())
      this.label.htmlFor = this.formname
    }

    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText && !this.options.compact) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.input = this.theme.getCheckbox()
    this.input.id = this.formname
    this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      this.input.disabled = true
    }

    this.input.addEventListener('change', e => {
      e.preventDefault()
      e.stopPropagation()
      this.value = e.currentTarget.checked
      this.onChange(true)
    })

    this.container.appendChild(this.control)
  }

  enable () {
    if (!this.always_disabled) {
      this.input.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    super.disable()
  }

  destroy () {
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    super.destroy()
  }

  showValidationErrors (errors) {
    this.previous_error_setting = this.jsoneditor.options.show_errors

    const addMessage = (messages, error) => {
      if (error.path === this.path) {
        messages.push(error.message)
      }
      return messages
    }
    const messages = errors.reduce(addMessage, [])
    this.input.controlgroup = this.control

    if (messages.length) {
      this.theme.addInputError(this.input, `${messages.join('. ')}.`)
    } else {
      this.theme.removeInputError(this.input)
    }
  }
}


/***/ }),

/***/ "./src/editors/choices.css.js":
/*!************************************!*\
  !*** ./src/editors/choices.css.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".choices > *":"box-sizing:border-box"});
/* eslint-enable */


/***/ }),

/***/ "./src/editors/choices.js":
/*!********************************!*\
  !*** ./src/editors/choices.js ***!
  \********************************/
/*! exports provided: ChoicesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesEditor", function() { return ChoicesEditor; });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./src/editors/select.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* harmony import */ var _choices_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choices.css.js */ "./src/editors/choices.css.js");




class ChoicesEditor extends _select_js__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"] {
  setValue (value, initial) {
    if (this.choices_instance) {
      /* Sanitize value before setting it */
      let sanitized = this.typecast(value || '')

      if (!this.enum_values.includes(sanitized)) sanitized = this.enum_values[0]

      if (this.value === sanitized) return

      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      this.input.value = this.enum_options[this.enum_values.indexOf(sanitized)]

      this.choices_instance.setChoiceByValue(this.input.value)

      this.value = sanitized
      this.onChange()
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    if (window.Choices && !this.choices_instance) {
      /* Get options, either global options from "this.defaults.options.choices" or */
      /* single property options from schema "options.choices" */
      const options = this.expandCallbacks('choices', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.defaults.options.choices || {}, this.options.choices || {}))

      this.choices_instance = new window.Choices(this.input, options)
    }
    super.afterInputReady()
  }

  onWatchedFieldChange () {
    super.onWatchedFieldChange()
    if (this.choices_instance) {
      const choicesList = this.enum_options.map((v, i) => ({
        value: v,
        label: this.enum_display[i]
      }))
      this.choices_instance.setChoices(choicesList, 'value', 'label', true)
      this.choices_instance.setChoiceByValue(`${this.value}`) /* Set new selection */
    }
  }

  enable () {
    if (!this.always_disabled && this.choices_instance) this.choices_instance.enable()
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.choices_instance) this.choices_instance.disable()
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.choices_instance) {
      this.choices_instance.destroy()
      this.choices_instance = null
    }
    super.destroy()
  }
}

ChoicesEditor.rules = _choices_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]


/***/ }),

/***/ "./src/editors/colorpicker.js":
/*!************************************!*\
  !*** ./src/editors/colorpicker.js ***!
  \************************************/
/*! exports provided: ColorEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEditor", function() { return ColorEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/*

Edtended handling of  oolor type fields.

Has optional support for using https://github.com/Sphinxxxx/vanilla-picker.

*/



class ColorEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  postBuild () {
    if (window.Picker) {
      this.input.type = 'text'
    }
    this.input.style.padding = '3px'
  }

  setValue (value, initial, fromTemplate) {
    const res = super.setValue(value, initial, fromTemplate)
    if (this.picker_instance && this.picker_instance.domElement && res && res.changed) {
      this.picker_instance.setColor(res.value, true)
    }
    return res
  }

  getNumColumns () {
    return 2
  }

  afterInputReady () {
    super.afterInputReady()
    this.createPicker(true)
  }

  disable () {
    super.disable()
    if (this.picker_instance && this.picker_instance.domElement) {
      /* Disable picker cursor dragging */
      this.picker_instance.domElement.style.pointerEvents = 'none'
      /* Disable picker buttons */
      const buttons = this.picker_instance.domElement.querySelectorAll('button')
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
      }
    }
  }

  enable () {
    super.enable()
    if (this.picker_instance && this.picker_instance.domElement) {
      /* Enable picker cursor dragging */
      this.picker_instance.domElement.style.pointerEvents = 'auto'
      /* Enable picker buttons */
      const buttons = this.picker_instance.domElement.querySelectorAll('button')
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
      }
    }
  }

  destroy () {
    this.createPicker(false)
    super.destroy()
  }

  /* helper functions */
  createPicker (create) {
    if (create) { /* create vanilla-picker */
      if (window.Picker && !this.picker_instance) { /* do when vanilla-picker loaded */
        const options = this.expandCallbacks('colorpicker', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
          editor: false, /* default no editor */
          alpha: false, /* default no alpha */
          color: this.value,
          popup: 'bottom' /* show in the bottom */
        }, this.defaults.options.colorpicker || {}, this.options.colorpicker || {}, {
          parent: this.container
        }))

        const updateHandler = color => {
          const format = this.picker_instance.settings.editorFormat
          const isAlpha = this.picker_instance.settings.alpha
          this.setValue(format === 'hex' ? (isAlpha ? color.hex : color.hex.slice(0, 7)) : color[`${format + (isAlpha ? 'a' : '')}String`])
        }
        if (!options.popup && typeof options.onChange !== 'function') options.onChange = updateHandler
        else if (options.popup && typeof options.onDone !== 'function') options.onDone = updateHandler

        this.picker_instance = new window.Picker(options)
        /* this.picker_instance.openHandler() */
        if (!options.popup) { /* use inline colorPicker */
          this.input.style.display = 'none'
          this.theme.afterInputReady(this.picker_instance.domElement)
        }
      }
    } else { /* destroy vanilla-picker */
      if (this.picker_instance) {
        this.picker_instance.destroy()
        this.picker_instance = null
        this.input.style.display = ''
      }
    }
  }
}


/***/ }),

/***/ "./src/editors/datetime.js":
/*!*********************************!*\
  !*** ./src/editors/datetime.js ***!
  \*********************************/
/*! exports provided: DatetimeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeEditor", function() { return DatetimeEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/*

Edtended handling of date, time and datetime-local type fields.

Works with both string and integer data types. (default only support string type)

Has optional support for using flatpickr datepicker.
All flatpickr options is supported with a few minor differences.
- "enableTime" and "noCalendar" are set automatically, based on the data type.
- Extra config option "errorDateFormat". If this is set, it will replace the format displayed in error messages.
- It is not possible to use "inline" and "wrap" options together.
- When using the "wrap" option, "toggle" and "clear" buttons are automatically added to markup. 2 extra boolean options ("showToggleButton" and "showClearButton") are available to control which buttons to display. Note: not all frameworks supports this. (Works in: Bootstrap and Foundation)
- When using the "inline" option, an extra boolean option ("inlineHideInput") is available to hide the original input field.
- If "mode" is set to either "multiple" or "range", only string data type is supported. Also the result from these is returned as a string not an array.

ToDo:
 - Improve Handling of flatpicker "multiple" and "range" modes. (Currently the values are just added as string values, but the optimal scenario would be to save those as array if possible)

*/


class DatetimeEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  build () {
    super.build()
    if (!this.input) {
      return
    }

    if (this.schema.max && typeof this.schema.max === 'string') {
      this.input.setAttribute('max', this.schema.max)
    }

    if (this.schema.min && typeof this.schema.max === 'string') {
      this.input.setAttribute('min', this.schema.min)
    }

    if (window.flatpickr && typeof this.options.flatpickr === 'object') {
      /* Make sure that flatpickr settings matches the input type */
      this.options.flatpickr.enableTime = this.schema.format !== 'date'
      this.options.flatpickr.noCalendar = this.schema.format === 'time'

      /* Curently only string can contain range or multiple values */
      if (this.schema.type === 'integer') this.options.flatpickr.mode = 'single'

      /* Attribute for flatpicker */
      this.input.setAttribute('data-input', '')

      let { input } = this

      if (this.options.flatpickr.wrap === true) {
        /* Create buttons for input group */
        const buttons = []
        if (this.options.flatpickr.showToggleButton !== false) {
          const toggleButton = this.getButton('', this.schema.format === 'time' ? 'time' : 'calendar', this.translate('flatpickr_toggle_button'))
          /* Attribute for flatpicker */
          toggleButton.setAttribute('data-toggle', '')
          buttons.push(toggleButton)
        }
        if (this.options.flatpickr.showClearButton !== false) {
          const clearButton = this.getButton('', 'clear', this.translate('flatpickr_clear_button'))
          /* Attribute for flatpicker */
          clearButton.setAttribute('data-clear', '')
          buttons.push(clearButton)
        }

        /* Save position of input field */
        const { parentNode } = this.input; const { nextSibling } = this.input

        const buttonContainer = this.theme.getInputGroup(this.input, buttons)
        if (buttonContainer !== undefined) {
          /* Make sure "inline" option is turned off */
          this.options.flatpickr.inline = false

          /* Insert container at same position as input field */
          parentNode.insertBefore(buttonContainer, nextSibling)

          input = buttonContainer
        } else {
          this.options.flatpickr.wrap = false
        }
      }

      this.flatpickr = window.flatpickr(input, this.options.flatpickr)

      if (this.options.flatpickr.inline === true && this.options.flatpickr.inlineHideInput === true) {
        this.input.setAttribute('type', 'hidden')
      }
    }
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    if (this.schema.type === 'string') {
      return this.value
    }
    if (this.value === '' || this.value === undefined) {
      return undefined
    }

    const value = this.schema.format === 'time' ? `1970-01-01 ${this.value}` : this.value
    return parseInt(new Date(value).getTime() / 1000)
  }

  setValue (value, initial, fromTemplate) {
    if (this.schema.type === 'string') {
      super.setValue(value, initial, fromTemplate)
      if (this.flatpickr) this.flatpickr.setDate(value)
    } else if (value > 0) {
      const dateObj = new Date(value * 1000)
      const year = dateObj.getFullYear()
      const month = this.zeroPad(dateObj.getMonth() + 1)
      const day = this.zeroPad(dateObj.getDate())
      const hour = this.zeroPad(dateObj.getHours())
      const min = this.zeroPad(dateObj.getMinutes())
      const sec = this.zeroPad(dateObj.getSeconds())
      const date = [year, month, day].join('-')
      const time = [hour, min, sec].join(':')
      let dateValue = `${date}T${time}`

      if (this.schema.format === 'date') dateValue = date
      else if (this.schema.format === 'time') dateValue = time

      this.input.value = dateValue
      this.refreshValue()
      if (this.flatpickr) this.flatpickr.setDate(dateValue)
    }
  }

  destroy () {
    if (this.flatpickr) this.flatpickr.destroy()
    this.flatpickr = null
    super.destroy()
  }

  /* helper function */
  zeroPad (value) {
    return (`0${value}`).slice(-2)
  }
}


/***/ }),

/***/ "./src/editors/describedby.js":
/*!************************************!*\
  !*** ./src/editors/describedby.js ***!
  \************************************/
/*! exports provided: DescribedByEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescribedByEditor", function() { return DescribedByEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* hyper-link describeBy Editor */



class DescribedByEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  register () {
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }

      if (this.editors[this.currentEditor]) this.editors[this.currentEditor].register()
    }

    super.register()
  }

  unregister () {
    super.unregister()

    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
    }
  }

  getNumColumns () {
    if (!this.editors[this.currentEditor]) return 4
    return Math.max(this.editors[this.currentEditor].getNumColumns(), 4)
  }

  enable () {
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].enable()
      }
    }

    super.enable()
  }

  disable () {
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].disable()
      }
    }

    super.disable()
  }

  switchEditor () {
    const vars = this.getWatchedFieldValues()

    if (!vars) return

    /* var ref = this.template.fillFromObject(vars); */
    /* var ref = this.template(vars); */
    const ref = document.location.origin + document.location.pathname + this.template(vars)

    if (!this.editors[this.refs[ref]]) {
      this.buildChildEditor(ref)
    }

    this.currentEditor = this.refs[ref]

    this.register()

    this.editors.forEach((editor, ref) => {
      if (!editor) return
      if (this.currentEditor === ref) {
        editor.container.style.display = ''
      } else {
        editor.container.style.display = 'none'
      }
    })

    this.refreshValue()
    this.onChange(true)
  }

  buildChildEditor (ref) {
    this.refs[ref] = this.editors.length

    const holder = this.theme.getChildEditorHolder()
    this.editor_holder.appendChild(holder)

    const schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema, this.jsoneditor.refs[ref])

    const editorClass = this.jsoneditor.getEditorClass(schema, this.jsoneditor)

    const editor = this.jsoneditor.createEditor(editorClass, {
      jsoneditor: this.jsoneditor,
      schema,
      container: holder,
      path: this.path,
      parent: this,
      required: true
    }
    )

    this.editors.push(editor)

    editor.preBuild()
    editor.build()
    editor.postBuild()
  }

  preBuild () {
    this.refs = {}
    this.editors = []
    this.currentEditor = ''
    let i
    for (i = 0; i < this.schema.links.length; i++) {
      if (this.schema.links[i].rel.toLowerCase() === 'describedby') {
        /* this.template = new UriTemplate(this.schema.links[i].href); */
        this.template = this.jsoneditor.compileTemplate(this.schema.links[i].href, this.template_engine)
        break
      }
    }

    /* this.template.fill(function(varName) {
      this.schema.watch = this.schema.watch || {};
      this.schema.watch[varName] = varName;
      return '';
    }); */

    this.schema.links = this.schema.links.slice(0, i).concat(this.schema.links.slice(i + 1))
    if (this.schema.links.length === 0) delete this.schema.links
    this.baseSchema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema)
  }

  build () {
    this.editor_holder = document.createElement('div')
    this.container.appendChild(this.editor_holder)
    this.switchEditor()
  }

  onWatchedFieldChange () {
    this.switchEditor()
  }

  onChildEditorChange (editor) {
    if (this.editors[this.currentEditor]) {
      this.refreshValue()
    }

    super.onChildEditorChange(editor)
  }

  refreshValue () {
    if (this.editors[this.currentEditor]) {
      this.value = this.editors[this.currentEditor].getValue()
    }
  }

  setValue (val, initial) {
    if (this.editors[this.currentEditor]) {
      this.editors[this.currentEditor].setValue(val, initial)
      this.refreshValue()
      this.onChange()
    }
  }

  destroy () {
    this.editors.forEach(editor => {
      if (editor) editor.destroy()
    })

    if (this.editor_holder && this.editor_holder.parentNode) {
      this.editor_holder.parentNode.removeChild(this.editor_holder)
    }

    super.destroy()
  }

  showValidationErrors (errors) {
    this.editors.forEach(editor => {
      if (!editor) return
      editor.showValidationErrors(errors)
    })
  }
}


/***/ }),

/***/ "./src/editors/enum.js":
/*!*****************************!*\
  !*** ./src/editors/enum.js ***!
  \*****************************/
/*! exports provided: EnumEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEditor", function() { return EnumEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* Enum Editor (used for objects and arrays with enumerated values) */


class EnumEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  getNumColumns () {
    return 4
  }

  build () {
    this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    this.container.appendChild(this.title)

    this.options.enum_titles = this.options.enum_titles || []

    this.enum = this.schema.enum
    this.selected = 0
    this.select_options = []
    this.html_values = []

    for (let i = 0; i < this.enum.length; i++) {
      this.select_options[i] = this.options.enum_titles[i] || `Value ${i + 1}`
      this.html_values[i] = this.getHTML(this.enum[i])
    }

    /* Switcher */
    this.switcher = this.theme.getSwitcher(this.select_options)
    this.container.appendChild(this.switcher)

    /* Display area */
    this.display_area = this.theme.getIndentedPanel()
    this.container.appendChild(this.display_area)

    if (this.options.hide_display) this.display_area.style.display = 'none'

    this.switcher.addEventListener('change', e => {
      this.selected = this.select_options.indexOf(e.currentTarget.value)
      this.value = this.enum[this.selected]
      this.refreshValue()
      this.onChange(true)
    })
    this.value = this.enum[0]
    this.refreshValue()

    if (this.enum.length === 1) this.switcher.style.display = 'none'
  }

  refreshValue () {
    this.selected = -1
    const stringified = JSON.stringify(this.value)
    this.enum.forEach((el, i) => {
      if (stringified === JSON.stringify(el)) {
        this.selected = i
        return false
      }
    })

    if (this.selected < 0) {
      this.setValue(this.enum[0])
      return
    }

    this.switcher.value = this.select_options[this.selected]
    this.display_area.innerHTML = this.html_values[this.selected]
  }

  enable () {
    if (!this.always_disabled) {
      this.switcher.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.switcher.disabled = true
    super.disable()
  }

  getHTML (el) {
    const each = (obj, callback) => {
      if (Array.isArray(obj) || (typeof obj.length === 'number' && obj.length > 0 && (obj.length - 1) in obj)) {
        Array.from(obj).forEach((e, i) => callback(i, e))
      } else {
        Object.entries(obj).forEach(([key, value]) => callback(key, value))
      }
    }

    if (el === null) {
      return '<em>null</em>'
      /* Array or Object */
    } else if (typeof el === 'object') {
      /* TODO: use theme */
      let ret = ''
      const callback = (i, child) => {
        let html = this.getHTML(child)
        /* Add the keys to object children */
        if (!(Array.isArray(el))) {
          /* TODO: use theme */
          html = `<div><em>${i}</em>: ${html}</div>`
        }
        /* TODO: use theme */
        ret += `<li>${html}</li>`
      }
      each(el, callback)

      if (Array.isArray(el)) ret = `<ol>${ret}</ol>`
      else ret = `<ul style='margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;'>${ret}</ul>`

      return ret
      /* Boolean */
    } else if (typeof el === 'boolean') {
      return el ? 'true' : 'false'
      /* String */
    } else if (typeof el === 'string') {
      return el.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      /* Number */
    }
    return el
  }

  setValue (val) {
    if (this.value !== val) {
      this.value = val
      this.refreshValue()
      this.onChange()
    }
  }

  destroy () {
    if (this.display_area && this.display_area.parentNode) this.display_area.parentNode.removeChild(this.display_area)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.switcher && this.switcher.parentNode) this.switcher.parentNode.removeChild(this.switcher)

    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/hidden.js":
/*!*******************************!*\
  !*** ./src/editors/hidden.js ***!
  \*******************************/
/*! exports provided: HiddenEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenEditor", function() { return HiddenEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/**
 * Created by Mehmet Baker on 12.04.2017
 */


class HiddenEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  register () {
    super.register()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  }

  unregister () {
    super.unregister()
    if (!this.input) return
    this.input.removeAttribute('name')
  }

  setValue (value, initial, fromTemplate) {
    if (this.template && !fromTemplate) {
      return
    }

    if (value === null || typeof value === 'undefined') value = ''
    else if (typeof value === 'object') value = JSON.stringify(value)
    else if (typeof value !== 'string') value = `${value}`

    if (value === this.serialized) return

    /* Sanitize value before setting it */
    const sanitized = this.sanitize(value)

    if (this.input.value === sanitized) {
      return
    }

    this.input.value = sanitized

    const changed = fromTemplate || this.getValue() !== value

    this.refreshValue()

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    if (this.adjust_height) this.adjust_height(this.input)

    /* Bubble this setValue to parents if the value changed */
    this.onChange(changed)
  }

  getNumColumns () {
    return 2
  }

  enable () {
    super.enable()
  }

  disable () {
    super.disable()
  }

  refreshValue () {
    this.value = this.input.value
    if (typeof this.value !== 'string') this.value = ''
    this.serialized = this.value
  }

  destroy () {
    this.template = null
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)

    super.destroy()
  }

  /**
   * This is overridden in derivative editors
   */
  sanitize (value) {
    return value
  }

  /**
   * Re-calculates the value if needed
   */
  onWatchedFieldChange () {
    let vars

    /* If this editor needs to be rendered by a macro template */
    if (this.template) {
      vars = this.getWatchedFieldValues()
      this.setValue(this.template(vars), false, true)
    }

    super.onWatchedFieldChange()
  }

  build () {
    this.format = this.schema.format
    if (!this.format && this.options.default_format) {
      this.format = this.options.default_format
    }
    if (this.options.format) {
      this.format = this.options.format
    }

    this.input_type = 'hidden'
    this.input = this.theme.getFormInputField(this.input_type)

    if (this.format) this.input.setAttribute('data-schemaformat', this.format)

    this.container.appendChild(this.input)

    /* Compile and store the template */
    if (this.schema.template) {
      const callback = this.expandCallbacks('template', { template: this.schema.template })
      if (typeof callback.template === 'function') this.template = callback.template
      else this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine)
      this.refreshValue()
    } else {
      this.refreshValue()
    }
  }
}


/***/ }),

/***/ "./src/editors/index.js":
/*!******************************!*\
  !*** ./src/editors/index.js ***!
  \******************************/
/*! exports provided: editors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editors", function() { return editors; });
/* harmony import */ var _ace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ace.js */ "./src/editors/ace.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./src/editors/array.js");
/* harmony import */ var _array_choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/choices.js */ "./src/editors/array/choices.js");
/* harmony import */ var _array_select2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/select2.js */ "./src/editors/array/select2.js");
/* harmony import */ var _array_selectize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/selectize.js */ "./src/editors/array/selectize.js");
/* harmony import */ var _autocomplete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete.js */ "./src/editors/autocomplete.js");
/* harmony import */ var _base64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base64.js */ "./src/editors/base64.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button.js */ "./src/editors/button.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox.js */ "./src/editors/checkbox.js");
/* harmony import */ var _choices_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choices.js */ "./src/editors/choices.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datetime.js */ "./src/editors/datetime.js");
/* harmony import */ var _describedby_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./describedby.js */ "./src/editors/describedby.js");
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enum.js */ "./src/editors/enum.js");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hidden.js */ "./src/editors/hidden.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info.js */ "./src/editors/info.js");
/* harmony import */ var _integer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./integer.js */ "./src/editors/integer.js");
/* harmony import */ var _ip_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ip.js */ "./src/editors/ip.js");
/* harmony import */ var _jodit_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jodit.js */ "./src/editors/jodit.js");
/* harmony import */ var _multiple_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./multiple.js */ "./src/editors/multiple.js");
/* harmony import */ var _multiselect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./multiselect.js */ "./src/editors/multiselect.js");
/* harmony import */ var _null_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./null.js */ "./src/editors/null.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./object.js */ "./src/editors/object.js");
/* harmony import */ var _radio_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./radio.js */ "./src/editors/radio.js");
/* harmony import */ var _sceditor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sceditor.js */ "./src/editors/sceditor.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./select.js */ "./src/editors/select.js");
/* harmony import */ var _select2_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./select2.js */ "./src/editors/select2.js");
/* harmony import */ var _selectize_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./selectize.js */ "./src/editors/selectize.js");
/* harmony import */ var _signature_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./signature.js */ "./src/editors/signature.js");
/* harmony import */ var _simplemde_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./simplemde.js */ "./src/editors/simplemde.js");
/* harmony import */ var _starrating_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./starrating.js */ "./src/editors/starrating.js");
/* harmony import */ var _stepper_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stepper.js */ "./src/editors/stepper.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./table.js */ "./src/editors/table.js");
/* harmony import */ var _upload_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./upload.js */ "./src/editors/upload.js");
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./uuid.js */ "./src/editors/uuid.js");
/* harmony import */ var _colorpicker_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./colorpicker.js */ "./src/editors/colorpicker.js");
/* Internal helper function called only here so we won't export as part of class */
/* Previously the assignment to the JSONEditor.defaults.editors was done in each of the editor */
/* files but doing it this way removes each of the editors' dependency on JSONEditor */







































const editors = {
  ace: _ace_js__WEBPACK_IMPORTED_MODULE_0__["AceEditor"],
  array: _array_js__WEBPACK_IMPORTED_MODULE_1__["ArrayEditor"],
  arrayChoices: _array_choices_js__WEBPACK_IMPORTED_MODULE_2__["ArrayChoicesEditor"],
  arraySelect2: _array_select2_js__WEBPACK_IMPORTED_MODULE_3__["ArraySelect2Editor"],
  arraySelectize: _array_selectize_js__WEBPACK_IMPORTED_MODULE_4__["ArraySelectizeEditor"],
  autocomplete: _autocomplete_js__WEBPACK_IMPORTED_MODULE_5__["AutocompleteEditor"],
  base64: _base64_js__WEBPACK_IMPORTED_MODULE_6__["Base64Editor"],
  button: _button_js__WEBPACK_IMPORTED_MODULE_7__["ButtonEditor"],
  checkbox: _checkbox_js__WEBPACK_IMPORTED_MODULE_8__["CheckboxEditor"],
  choices: _choices_js__WEBPACK_IMPORTED_MODULE_9__["ChoicesEditor"],
  datetime: _datetime_js__WEBPACK_IMPORTED_MODULE_10__["DatetimeEditor"],
  describedBy: _describedby_js__WEBPACK_IMPORTED_MODULE_11__["DescribedByEditor"],
  enum: _enum_js__WEBPACK_IMPORTED_MODULE_12__["EnumEditor"],
  hidden: _hidden_js__WEBPACK_IMPORTED_MODULE_13__["HiddenEditor"],
  info: _info_js__WEBPACK_IMPORTED_MODULE_14__["InfoEditor"],
  integer: _integer_js__WEBPACK_IMPORTED_MODULE_15__["IntegerEditor"],
  ip: _ip_js__WEBPACK_IMPORTED_MODULE_16__["IpEditor"],
  jodit: _jodit_js__WEBPACK_IMPORTED_MODULE_17__["JoditEditor"],
  multiple: _multiple_js__WEBPACK_IMPORTED_MODULE_18__["MultipleEditor"],
  multiselect: _multiselect_js__WEBPACK_IMPORTED_MODULE_19__["MultiSelectEditor"],
  null: _null_js__WEBPACK_IMPORTED_MODULE_20__["NullEditor"],
  number: _number_js__WEBPACK_IMPORTED_MODULE_21__["NumberEditor"],
  object: _object_js__WEBPACK_IMPORTED_MODULE_22__["ObjectEditor"],
  radio: _radio_js__WEBPACK_IMPORTED_MODULE_23__["RadioEditor"],
  sceditor: _sceditor_js__WEBPACK_IMPORTED_MODULE_24__["ScEditor"],
  select: _select_js__WEBPACK_IMPORTED_MODULE_25__["SelectEditor"],
  select2: _select2_js__WEBPACK_IMPORTED_MODULE_26__["Select2Editor"],
  selectize: _selectize_js__WEBPACK_IMPORTED_MODULE_27__["SelectizeEditor"],
  signature: _signature_js__WEBPACK_IMPORTED_MODULE_28__["SignatureEditor"],
  simplemde: _simplemde_js__WEBPACK_IMPORTED_MODULE_29__["SimplemdeEditor"],
  starrating: _starrating_js__WEBPACK_IMPORTED_MODULE_30__["StarratingEditor"],
  stepper: _stepper_js__WEBPACK_IMPORTED_MODULE_31__["StepperEditor"],
  string: _string_js__WEBPACK_IMPORTED_MODULE_32__["StringEditor"],
  table: _table_js__WEBPACK_IMPORTED_MODULE_33__["TableEditor"],
  upload: _upload_js__WEBPACK_IMPORTED_MODULE_34__["UploadEditor"],
  uuid: _uuid_js__WEBPACK_IMPORTED_MODULE_35__["UuidEditor"],
  colorpicker: _colorpicker_js__WEBPACK_IMPORTED_MODULE_36__["ColorEditor"]
}


/***/ }),

/***/ "./src/editors/info.js":
/*!*****************************!*\
  !*** ./src/editors/info.js ***!
  \*****************************/
/*! exports provided: InfoEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEditor", function() { return InfoEditor; });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/editors/button.js");
/* Non-Active editor for displaying text blocks in form */


class InfoEditor extends _button_js__WEBPACK_IMPORTED_MODULE_0__["ButtonEditor"] {
  build () {
    this.options.compact = false
    this.header = this.label = this.theme.getFormInputLabel(this.getTitle())
    this.description = this.theme.getDescription(this.schema.description || '')
    this.control = this.theme.getFormControl(this.label, this.description, null)
    this.container.appendChild(this.control)
  }

  getTitle () {
    return this.schema.title
  }

  getNumColumns () {
    return 12
  }
}


/***/ }),

/***/ "./src/editors/integer.js":
/*!********************************!*\
  !*** ./src/editors/integer.js ***!
  \********************************/
/*! exports provided: IntegerEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerEditor", function() { return IntegerEditor; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class IntegerEditor extends _number_js__WEBPACK_IMPORTED_MODULE_0__["NumberEditor"] {
  getNumColumns () {
    return 2
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    const value = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(this.value) ? parseInt(this.value) : this.value
    if (!this.jsoneditor.options.use_default_values && value === '') {
      return undefined
    }
    return value
  }
}


/***/ }),

/***/ "./src/editors/ip.js":
/*!***************************!*\
  !*** ./src/editors/ip.js ***!
  \***************************/
/*! exports provided: IpEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpEditor", function() { return IpEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class IpEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  preBuild () {
    super.preBuild()

    /* Create schema options object if deesn't exist */
    if (!this.schema.options) {
      this.schema.options = {}
    }

    /* Create cleave options if they don't exist */
    if (!this.schema.options.cleave) {
      switch (this.format) {
        case 'ipv6':
          this.schema.options.cleave = {
            delimiters: [':'],
            blocks: [4, 4, 4, 4, 4, 4, 4, 4],
            uppercase: true
          }
          break
        case 'ipv4':
          this.schema.options.cleave = {
            delimiters: ['.'],
            blocks: [3, 3, 3, 3],
            numericOnly: true
          }
          break
      }
    }

    /* Update options object */
    this.options = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.options, this.schema.options || {})
  }
}


/***/ }),

/***/ "./src/editors/jodit.js":
/*!******************************!*\
  !*** ./src/editors/jodit.js ***!
  \******************************/
/*! exports provided: JoditEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoditEditor", function() { return JoditEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class JoditEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  setValue (value, initial, fromTemplate) {
    const res = super.setValue(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.jodit_instance) this.jodit_instance.setEditorValue(res.value)
  }

  build () {
    this.options.format = 'textarea' /* Force format into "textarea" */
    super.build()
    this.input_type = this.schema.format /* Restore original format */
    this.input.setAttribute('data-schemaformat', this.input_type)
  }

  afterInputReady () {
    let options

    if (window.Jodit) {
      /* Get options, either global options from "this.defaults.options.jodit" or */
      /* single property options from schema "options.jodit" */
      options = this.expandCallbacks('jodit', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        height: 300
      }, this.defaults.options.jodit || {}, this.options.jodit || {}))

      this.jodit_instance = new window.Jodit(this.input, options)

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.jodit_instance.setReadOnly(true)
      }

      this.jodit_instance.events.on('change', () => {
        this.value = this.jodit_instance.getEditorValue()
        this.is_dirty = true
        this.onChange(true)
      })

      this.theme.afterInputReady(this.input)
    } else super.afterInputReady() /* Library not loaded, so just treat this as a string */
  }

  getNumColumns () {
    return 6
  }

  enable () {
    if (!this.always_disabled && this.jodit_instance) this.jodit_instance.setReadOnly(false)
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.jodit_instance) this.jodit_instance.setReadOnly(true)
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.jodit_instance) {
      this.jodit_instance.destruct()
      this.jodit_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/multiple.js":
/*!*********************************!*\
  !*** ./src/editors/multiple.js ***!
  \*********************************/
/*! exports provided: MultipleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleEditor", function() { return MultipleEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator.js */ "./src/validator.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* Multiple Editor (for when `type` is an array, also when `oneOf` is present) */




class MultipleEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  register () {
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
      if (this.editors[this.type]) this.editors[this.type].register()
    }
    super.register()
  }

  unregister () {
    super.unregister()
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
    }
  }

  getNumColumns () {
    if (!this.editors[this.type]) return 4
    return Math.max(this.editors[this.type].getNumColumns(), 4)
  }

  enable () {
    if (!this.always_disabled) {
      if (this.editors) {
        for (let i = 0; i < this.editors.length; i++) {
          if (!this.editors[i]) continue
          this.editors[i].enable()
        }
      }
      this.switcher.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.editors) {
      for (let i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].disable(alwaysDisabled)
      }
    }
    this.switcher.disabled = true
    super.disable()
  }

  switchEditor (i) {
    if (!this.editors[i]) {
      this.buildChildEditor(i)
    }

    const currentValue = this.getValue()

    this.type = i

    this.register()

    this.editors.forEach((editor, type) => {
      if (!editor) return
      if (this.type === type) {
        if (this.keep_values) editor.setValue(currentValue, true)
        editor.container.style.display = ''
      } else editor.container.style.display = 'none'
    })
    this.refreshValue()
    this.refreshHeaderText()
  }

  buildChildEditor (i) {
    const type = this.types[i]
    const holder = this.theme.getChildEditorHolder()
    this.editor_holder.appendChild(holder)

    let schema

    if (typeof type === 'string') {
      schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this.schema)
      schema.type = type
    } else {
      schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this.schema, type)
      schema = this.jsoneditor.expandRefs(schema)

      /* If we need to merge `required` arrays */
      if (type && type.required && Array.isArray(type.required) && this.schema.required && Array.isArray(this.schema.required)) {
        schema.required = this.schema.required.concat(type.required)
      }
    }

    const editor = this.jsoneditor.getEditorClass(schema)

    this.editors[i] = this.jsoneditor.createEditor(editor, {
      jsoneditor: this.jsoneditor,
      schema,
      container: holder,
      path: this.path,
      parent: this,
      required: true
    })
    this.editors[i].preBuild()
    this.editors[i].build()
    this.editors[i].postBuild()

    if (this.editors[i].header) this.editors[i].header.style.display = 'none'

    this.editors[i].option = this.switcher_options[i]

    holder.addEventListener('change_header_text', () => {
      this.refreshHeaderText()
    })

    if (i !== this.type) holder.style.display = 'none'
  }

  preBuild () {
    this.types = []
    this.type = 0
    this.editors = []
    this.validators = []

    this.keep_values = true
    if (typeof this.jsoneditor.options.keep_oneof_values !== 'undefined') this.keep_values = this.jsoneditor.options.keep_oneof_values
    if (typeof this.options.keep_oneof_values !== 'undefined') this.keep_values = this.options.keep_oneof_values

    if (this.schema.oneOf) {
      this.oneOf = true
      this.types = this.schema.oneOf
      delete this.schema.oneOf
    } else if (this.schema.anyOf) {
      this.anyOf = true
      this.types = this.schema.anyOf
      delete this.schema.anyOf
    } else {
      if (!this.schema.type || this.schema.type === 'any') {
        this.types = ['string', 'number', 'integer', 'boolean', 'object', 'array', 'null']

        /* If any of these primitive types are disallowed */
        if (this.schema.disallow) {
          let { disallow } = this.schema
          if (typeof disallow !== 'object' || !(Array.isArray(disallow))) {
            disallow = [disallow]
          }
          const allowedTypes = []
          this.types.forEach(type => {
            if (!disallow.includes(type)) allowedTypes.push(type)
          })
          this.types = allowedTypes
        }
      } else if (Array.isArray(this.schema.type)) {
        this.types = this.schema.type
      } else {
        this.types = [this.schema.type]
      }
      delete this.schema.type
    }

    this.display_text = this.getDisplayText(this.types)
  }

  build () {
    const { container } = this

    this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    this.container.appendChild(this.header)

    this.switcher = this.theme.getSwitcher(this.display_text)
    container.appendChild(this.switcher)
    this.switcher.addEventListener('change', e => {
      e.preventDefault()
      e.stopPropagation()

      this.switchEditor(this.display_text.indexOf(e.currentTarget.value))
      this.onChange(true)
    })

    this.editor_holder = document.createElement('div')
    container.appendChild(this.editor_holder)

    const validatorOptions = {}
    if (this.jsoneditor.options.custom_validators) {
      validatorOptions.custom_validators = this.jsoneditor.options.custom_validators
    }

    this.switcher_options = this.theme.getSwitcherOptions(this.switcher)
    this.types.forEach((type, i) => {
      this.editors[i] = false

      let schema

      if (typeof type === 'string') {
        schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this.schema)
        schema.type = type
      } else {
        schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this.schema, type)

        /* If we need to merge `required` arrays */
        if (type.required && Array.isArray(type.required) && this.schema.required && Array.isArray(this.schema.required)) {
          schema.required = this.schema.required.concat(type.required)
        }
      }
      this.validators[i] = new _validator_js__WEBPACK_IMPORTED_MODULE_1__["Validator"](this.jsoneditor, schema, validatorOptions, this.defaults)
    })

    this.switchEditor(0)
  }

  onChildEditorChange (editor) {
    if (this.editors[this.type]) {
      this.refreshValue()
      this.refreshHeaderText()
    }

    super.onChildEditorChange()
  }

  refreshHeaderText () {
    const displayText = this.getDisplayText(this.types)
    Array.from(this.switcher_options).forEach((option, i) => {
      option.textContent = displayText[i]
    })
  }

  refreshValue () {
    this.value = this.editors[this.type].getValue()
  }

  setValue (val, initial) {
    /* Determine type by getting the first one that validates */

    const prevType = this.type
    /* find the best match one */
    let fitTestVal = {
      match: 0,
      extra: 0,
      i: this.type
    }
    const validVal = {
      match: 0,
      i: null
    }
    this.validators.forEach((validator, i) => {
      let fitTestResult = null
      if (typeof this.anyOf !== 'undefined' && this.anyOf) {
        fitTestResult = validator.fitTest(val)
        if (fitTestVal.match < fitTestResult.match) {
          fitTestVal = fitTestResult
          fitTestVal.i = i
        } else if (fitTestVal.match === fitTestResult.match) {
          if (fitTestVal.extra > fitTestResult.extra) {
            fitTestVal = fitTestResult
            fitTestVal.i = i
          }
        }
      }
      if (!validator.validate(val).length && validVal.i === null) {
        validVal.i = i
        if (fitTestResult !== null) {
          validVal.match = fitTestResult.match
        }
      }
    })
    let finalI = validVal.i
    /* if the best fit schema has more match properties, then use the best fit schema. */
    /* usually the value could be */
    if (typeof this.anyOf !== 'undefined' && this.anyOf) {
      if (validVal.match < fitTestVal.match) {
        finalI = fitTestVal.i
      }
    }
    if (finalI === null) {
      finalI = this.type
    }
    this.type = finalI
    this.switcher.value = this.display_text[finalI]

    const typeChanged = this.type !== prevType
    if (typeChanged) {
      this.switchEditor(this.type)
    }

    this.editors[this.type].setValue(val, initial)

    this.refreshValue()
    this.onChange(typeChanged)
  }

  destroy () {
    this.editors.forEach(editor => {
      if (editor) editor.destroy()
    })
    if (this.editor_holder && this.editor_holder.parentNode) this.editor_holder.parentNode.removeChild(this.editor_holder)
    if (this.switcher && this.switcher.parentNode) this.switcher.parentNode.removeChild(this.switcher)
    super.destroy()
  }

  showValidationErrors (errors) {
    /* oneOf and anyOf error paths need to remove the oneOf[i] part before passing to child editors */
    if (this.oneOf || this.anyOf) {
      const checkPart = this.oneOf ? 'oneOf' : 'anyOf'
      this.editors.forEach((editor, i) => {
        if (!editor) return
        const check = `${this.path}.${checkPart}[${i}]`
        const filterError = (newErrors, error) => {
          if (error.path === check.substr(0, error.path.length)) {
            const newError = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, error)
            newError.path = this.path + newError.path.substr(check.length)
            newErrors.push(newError)
          }
          return newErrors
        }
        editor.showValidationErrors(errors.reduce(filterError, []))
      })
    } else {
      this.editors.forEach(editor => {
        if (!editor) return
        editor.showValidationErrors(errors)
      })
    }
  }

  addLinks () {
    // multiple editor itself don't create links
  }
}


/***/ }),

/***/ "./src/editors/multiselect.js":
/*!************************************!*\
  !*** ./src/editors/multiselect.js ***!
  \************************************/
/*! exports provided: MultiSelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectEditor", function() { return MultiSelectEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");


class MultiSelectEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  onInputChange () {
    this.value = this.input.value
    this.onChange(true)
  }

  register () {
    super.register()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  }

  unregister () {
    super.unregister()
    if (!this.input) return
    this.input.removeAttribute('name')
  }

  getNumColumns () {
    let longestText = this.getTitle().length
    Object.keys(this.select_values).forEach(i => (longestText = Math.max(longestText, (`${this.select_values[i]}`).length + 4)))

    return Math.min(12, Math.max(longestText / 7, 2))
  }

  preBuild () {
    super.preBuild()

    this.select_options = {}
    this.select_values = {}
    this.option_keys = []
    this.option_titles = []

    let i
    const itemsSchema = this.jsoneditor.expandRefs(this.schema.items || {})
    const e = itemsSchema.enum || []
    const t = itemsSchema.options ? itemsSchema.options.enum_titles || [] : []

    for (i = 0; i < e.length; i++) {
      /* If the sanitized value is different from the enum value, don't include it */
      if (this.sanitize(e[i]) !== e[i]) continue

      this.option_keys.push(`${e[i]}`)
      this.option_titles.push(`${t[i] || e[i]}`)
      this.select_values[`${e[i]}`] = e[i]
    }
  }

  build () {
    let i
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    if ((!this.schema.format && this.option_keys.length < 8) || this.schema.format === 'checkbox') {
      this.input_type = 'checkboxes'

      this.inputs = {}
      this.controls = {}
      for (i = 0; i < this.option_keys.length; i++) {
        const id = this.formname + i.toString()
        this.inputs[this.option_keys[i]] = this.theme.getCheckbox()
        this.inputs[this.option_keys[i]].id = id
        this.select_options[this.option_keys[i]] = this.inputs[this.option_keys[i]]
        const label = this.theme.getCheckboxLabel(this.option_titles[i])
        label.htmlFor = id
        this.controls[this.option_keys[i]] = this.theme.getFormControl(label, this.inputs[this.option_keys[i]])
      }

      this.control = this.theme.getMultiCheckboxHolder(this.controls, this.label, this.description, this.infoButton)
      this.inputs.controlgroup = this.inputs.controls = this.control /* Enable error messages for checkboxes */
    } else {
      this.input_type = 'select'
      this.input = this.theme.getSelectInput(this.option_keys, true)
      this.theme.setSelectOptions(this.input, this.option_keys, this.option_titles)
      /* this.input.multiple = true; */
      this.input.setAttribute('multiple', 'multiple')
      this.input.size = Math.min(10, this.option_keys.length)
      for (i = 0; i < this.option_keys.length; i++) {
        this.select_options[this.option_keys[i]] = this.input.children[i]
      }

      this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)
    }

    if (this.schema.readOnly || this.schema.readonly) this.disable(true)

    this.container.appendChild(this.control)

    this.multiselectChangeHandler = (e) => {
      const newValue = []
      for (i = 0; i < this.option_keys.length; i++) {
        if (this.select_options[this.option_keys[i]] && (this.select_options[this.option_keys[i]].selected || this.select_options[this.option_keys[i]].checked)) newValue.push(this.select_values[this.option_keys[i]])
      }
      this.updateValue(newValue)
      this.onChange(true)
    }

    this.control.addEventListener('change', this.multiselectChangeHandler, false)

    /* Any special formatting that needs to happen after the input is added to the dom */
    window.requestAnimationFrame(() => {
      this.afterInputReady()
    })
  }

  postBuild () {
    super.postBuild()
    /* this.theme.afterInputReady(this.input || this.inputs); */
  }

  afterInputReady () {
    this.theme.afterInputReady(this.input || this.inputs)
  }

  setValue (value, initial) {
    value = value || []
    if (!(Array.isArray(value))) value = [value]

    /* Make sure we are dealing with an array of strings so we can check for strict equality */
    value = value.map(e => `${e}`)

    /* Update selected status of options */
    Object.keys(this.select_options).forEach(i => {
      this.select_options[i][this.input_type === 'select' ? 'selected' : 'checked'] = (value.includes(i))
    })

    this.updateValue(value)
    this.onChange(true)
  }

  removeValue (value) {
    /* Remove from existing value(s) */
    value = [].concat(value)
    this.setValue(this.getValue().filter(item => !value.includes(item)))
  }

  addValue (value) {
    /* Add to existing value(s) */
    this.setValue(this.getValue().concat(value))
  }

  updateValue (value) {
    let changed = false
    const newValue = []
    for (let i = 0; i < value.length; i++) {
      if (!this.select_options[`${value[i]}`]) {
        changed = true
        continue
      }
      const sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  }

  sanitize (value) {
    if (this.schema.items.type === 'boolean') return !!value
    else if (this.schema.items.type === 'number') return 1 * value || 0
    else if (this.schema.items.type === 'integer') return Math.floor(value * 1 || 0)
    return `${value}`
  }

  enable () {
    if (!this.always_disabled) {
      if (this.input) {
        this.input.disabled = false
      } else if (this.inputs) {
        Object.keys(this.inputs).forEach(i => (this.inputs[i].disabled = false))
      }
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.input) {
      this.input.disabled = true
    } else if (this.inputs) {
      Object.keys(this.inputs).forEach(i => (this.inputs[i].disabled = true))
    }
    super.disable()
  }

  destroy () {
    super.destroy()
  }

  escapeRegExp (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  showValidationErrors (errors) {
    const regexPath = new RegExp(`^${this.escapeRegExp(this.path)}(\\.\\d+)?$`)
    const addMessage = (messages, error) => {
      if (error.path.match(regexPath)) {
        messages.push(error.message)
      }
      return messages
    }

    const messages = errors.reduce(addMessage, [])

    if (messages.length) {
      this.theme.addInputError(this.input || this.inputs, `${messages.join('. ')}.`)
    } else {
      this.theme.removeInputError(this.input || this.inputs)
    }
  }
}


/***/ }),

/***/ "./src/editors/null.js":
/*!*****************************!*\
  !*** ./src/editors/null.js ***!
  \*****************************/
/*! exports provided: NullEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullEditor", function() { return NullEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");


class NullEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return null
  }

  setValue () {
    this.onChange()
  }

  getNumColumns () {
    return 2
  }
}


/***/ }),

/***/ "./src/editors/number.js":
/*!*******************************!*\
  !*** ./src/editors/number.js ***!
  \*******************************/
/*! exports provided: NumberEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberEditor", function() { return NumberEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");



class NumberEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  build () {
    super.build()

    if (typeof this.schema.minimum !== 'undefined') {
      let { minimum } = this.schema

      if (typeof this.schema.exclusiveMinimum !== 'undefined') {
        minimum += 1
      }

      this.input.setAttribute('min', minimum)
    }

    if (typeof this.schema.maximum !== 'undefined') {
      let { maximum } = this.schema

      if (typeof this.schema.exclusiveMaximum !== 'undefined') {
        maximum -= 1
      }

      this.input.setAttribute('max', maximum)
    }

    if (typeof this.schema.step !== 'undefined') {
      const step = this.schema.step || 1
      this.input.setAttribute('step', step)
    }

    /* Set custom attributes on input element. Parameter is array of protected keys. Empty array if none. */
    this.setInputAttributes(['maxlength', 'pattern', 'readonly', 'min', 'max', 'step'])
  }

  getNumColumns () {
    return 2
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    const value = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.value) ? parseFloat(this.value) : this.value
    if (!this.jsoneditor.options.use_default_values && value === '') {
      return undefined
    }
    return value
  }
}


/***/ }),

/***/ "./src/editors/object.css.js":
/*!***********************************!*\
  !*** ./src/editors/object.css.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".je-object__title":"display:inline-block",".je-object__controls":"margin:0%200%200%2010px",".je-object__container":"position:relative",".je-object__property-checkbox":"margin:0;height:auto",".property-selector":"width:295px;max-height:160px;padding:5px%200;overflow-y:auto;overflow-x:hidden;padding-left:5px",".property-selector-input":"width:220px;margin-bottom:0;display:inline-block",".json-editor-btntype-toggle":"margin:0%2010px%200%200",".je-edit-json--textarea":"height:170px%20!important;width:300px%20!important;display:block"});
/* eslint-enable */


/***/ }),

/***/ "./src/editors/object.js":
/*!*******************************!*\
  !*** ./src/editors/object.js ***!
  \*******************************/
/*! exports provided: ObjectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectEditor", function() { return ObjectEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");
/* harmony import */ var _object_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.css.js */ "./src/editors/object.css.js");




class ObjectEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  constructor (options, defaults, depth) {
    super(options, defaults)
    this.currentDepth = depth
  }

  getDefault () {
    return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.default || {})
  }

  getChildEditors () {
    return this.editors
  }

  register () {
    super.register()
    if (this.editors) {
      Object.values(this.editors).forEach(e => e.register())
    }
  }

  unregister () {
    super.unregister()
    if (this.editors) {
      Object.values(this.editors).forEach(e => e.unregister())
    }
  }

  getNumColumns () {
    return Math.max(Math.min(12, this.maxwidth), 3)
  }

  enable () {
    if (!this.always_disabled) {
      if (this.editjson_control) this.editjson_control.disabled = false
      if (this.addproperty_button) this.addproperty_button.disabled = false

      super.enable()
      if (this.editors) {
        Object.values(this.editors).forEach(e => {
          if (e.isActive()) {
            e.enable()
          }
          e.optInCheckbox.disabled = false
        })
      }
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.editjson_control) this.editjson_control.disabled = true
    if (this.addproperty_button) this.addproperty_button.disabled = true
    this.hideEditJSON()

    super.disable()
    if (this.editors) {
      Object.values(this.editors).forEach(e => {
        if (e.isActive()) {
          e.disable(alwaysDisabled)
        }
        e.optInCheckbox.disabled = true
      })
    }
  }

  layoutEditors () {
    let i; let j

    if (!this.row_container) return

    /* Sort editors by propertyOrder */
    this.property_order = Object.keys(this.editors)
    this.property_order = this.property_order.sort((a, b) => {
      let ordera = this.editors[a].schema.propertyOrder
      let orderb = this.editors[b].schema.propertyOrder
      if (typeof ordera !== 'number') ordera = 1000
      if (typeof orderb !== 'number') orderb = 1000

      return ordera - orderb
    })

    let container
    const isCategoriesFormat = (this.format === 'categories')
    const rows = []
    let key = null
    let editor = null
    let row

    if (this.format === 'grid-strict') {
      let rowIndex = 0
      row = []

      this.property_order.forEach(key => {
        const editor = this.editors[key]
        if (editor.property_removed) {
          return
        }
        const width = editor.options.hidden ? 0 : (editor.options.grid_columns || editor.getNumColumns())
        const offset = editor.options.hidden ? 0 : (editor.options.grid_offset || 0)
        const gridBreak = editor.options.hidden ? false : (editor.options.grid_break || false)
        const height = editor.options.hidden ? 0 : editor.container.offsetHeight

        const column = {
          key,
          width,
          offset,
          height
        }

        row.push(column)

        rows[rowIndex] = row

        if (gridBreak) {
          rowIndex++
          row = []
        }
      })

      /* layout hasn't changed */
      if (this.layout === JSON.stringify(rows)) return false
      this.layout = JSON.stringify(rows)

      /* Layout the form */
      container = document.createElement('div')
      for (i = 0; i < rows.length; i++) {
        row = this.theme.getGridRow()
        container.appendChild(row)
        for (j = 0; j < rows[i].length; j++) {
          key = rows[i][j].key
          editor = this.editors[key]
          if (editor.options.hidden) {
            editor.container.style.display = 'none'
          } else {
            this.theme.setGridColumnSize(editor.container, rows[i][j].width, rows[i][j].offset)
          }
          row.appendChild(editor.container)
        }
      }
    } else if (this.format === 'grid') {
      this.property_order.forEach(key => {
        const editor = this.editors[key]
        if (editor.property_removed) return
        let found = false
        const width = editor.options.hidden ? 0 : (editor.options.grid_columns || editor.getNumColumns())
        const height = editor.options.hidden ? 0 : editor.container.offsetHeight
        /* See if the editor will fit in any of the existing rows first */
        for (let i = 0; i < rows.length; i++) {
          /* If the editor will fit in the row horizontally */
          if (rows[i].width + width <= 12) {
            /* If the editor is close to the other elements in height */
            /* i.e. Don't put a really tall editor in an otherwise short row or vice versa */
            if (!height || (rows[i].minh * 0.5 < height && rows[i].maxh * 2 > height)) {
              found = i
            }
          }
        }

        /* If there isn't a spot in any of the existing rows, start a new row */
        if (found === false) {
          rows.push({
            width: 0,
            minh: 999999,
            maxh: 0,
            editors: []
          })
          found = rows.length - 1
        }

        rows[found].editors.push({
          key,
          /* editor: editor, */
          width,
          height
        })
        rows[found].width += width
        rows[found].minh = Math.min(rows[found].minh, height)
        rows[found].maxh = Math.max(rows[found].maxh, height)
      })

      /* Make almost full rows width 12 */
      /* Do this by increasing all editors' sizes proprotionately */
      /* Any left over space goes to the biggest editor */
      /* Don't touch rows with a width of 6 or less */
      for (i = 0; i < rows.length; i++) {
        if (rows[i].width < 12) {
          let biggest = false
          let newWidth = 0
          for (j = 0; j < rows[i].editors.length; j++) {
            if (biggest === false) biggest = j
            else if (rows[i].editors[j].width > rows[i].editors[biggest].width) biggest = j
            rows[i].editors[j].width *= 12 / rows[i].width
            rows[i].editors[j].width = Math.floor(rows[i].editors[j].width)
            newWidth += rows[i].editors[j].width
          }
          if (newWidth < 12) rows[i].editors[biggest].width += 12 - newWidth
          rows[i].width = 12
        }
      }

      /* layout hasn't changed */
      if (this.layout === JSON.stringify(rows)) return false
      this.layout = JSON.stringify(rows)

      /* Layout the form */
      container = document.createElement('div')
      for (i = 0; i < rows.length; i++) {
        row = this.theme.getGridRow()
        container.appendChild(row)
        for (j = 0; j < rows[i].editors.length; j++) {
          key = rows[i].editors[j].key
          editor = this.editors[key]

          if (editor.options.hidden) editor.container.style.display = 'none'
          else this.theme.setGridColumnSize(editor.container, rows[i].editors[j].width)
          row.appendChild(editor.container)
        }
      }
      /* Normal layout */
    } else {
      container = document.createElement('div')

      if (isCategoriesFormat) {
        /* A container for properties not object nor arrays */
        const containerSimple = document.createElement('div')
        /* This will be the place to (re)build tabs and panes */
        /* tabs_holder has 2 childs, [0]: ul.nav.nav-tabs and [1]: div.tab-content */
        const newTabsHolder = this.theme.getTopTabHolder(this.schema.title)
        /* child [1] of previous, stores panes */
        const newTabPanesContainer = this.theme.getTopTabContentHolder(newTabsHolder)

        this.property_order.forEach(key => {
          const editor = this.editors[key]
          if (editor.property_removed) return
          const aPane = this.theme.getTabContent()
          const isObjOrArray = editor.schema && (editor.schema.type === 'object' || editor.schema.type === 'array')
          /* mark the pane */
          aPane.isObjOrArray = isObjOrArray
          const gridRow = this.theme.getGridRow()

          /* this happens with added properties, they don't have a tab */
          if (!editor.tab) {
            /* Pass the pane which holds the editor */
            if (typeof this.basicPane === 'undefined') {
              /* There is no basicPane yet, so aPane will be it */
              this.addRow(editor, newTabsHolder, aPane)
            } else {
              this.addRow(editor, newTabsHolder, this.basicPane)
            }
          }

          aPane.id = this.getValidId(editor.tab_text.textContent)

          /* For simple properties, add them on the same panel (Basic) */
          if (!isObjOrArray) {
            containerSimple.appendChild(gridRow)
            /* There are already some panes */
            if (newTabPanesContainer.childElementCount > 0) {
              /* If first pane is object or array, insert before a simple pane */
              if (newTabPanesContainer.firstChild.isObjOrArray) {
                /* Append pane for simple properties */
                aPane.appendChild(containerSimple)
                newTabPanesContainer.insertBefore(aPane, newTabPanesContainer.firstChild)
                /* Add "Basic" tab */
                this.theme.insertBasicTopTab(editor.tab, newTabsHolder)
                /* newTabs_holder.firstChild.insertBefore(editor.tab,newTabs_holder.firstChild.firstChild); */
                /* Update the basicPane */
                editor.basicPane = aPane
              } else {
                /* We already have a first "Basic" pane, just add the new property to it, so */
                /* do nothing; */
              }
              /* There is no pane, so add the first (simple) pane */
            } else {
              /* Append pane for simple properties */
              aPane.appendChild(containerSimple)
              newTabPanesContainer.appendChild(aPane)
              /* Add "Basic" tab */
              /* newTabs_holder.firstChild.appendChild(editor.tab); */
              this.theme.addTopTab(newTabsHolder, editor.tab)
              /* Update the basicPane */
              editor.basicPane = aPane
            }
            /* Objects and arrays earn their own panes */
          } else {
            aPane.appendChild(gridRow)
            newTabPanesContainer.appendChild(aPane)
            /* newTabs_holder.firstChild.appendChild(editor.tab); */
            this.theme.addTopTab(newTabsHolder, editor.tab)
          }

          if (editor.options.hidden) editor.container.style.display = 'none'
          else this.theme.setGridColumnSize(editor.container, 12)
          /* Now, add the property editor to the row */
          gridRow.appendChild(editor.container)
          /* Update the rowPane (same as this.rows[x].rowPane) */
          editor.rowPane = aPane
        })

        /* Erase old panes */
        while (this.tabPanesContainer.firstChild) {
          this.tabPanesContainer.removeChild(this.tabPanesContainer.firstChild)
        }

        /* Erase old tabs and set the new ones */
        const parentTabsHolder = this.tabs_holder.parentNode
        parentTabsHolder.removeChild(parentTabsHolder.firstChild)
        parentTabsHolder.appendChild(newTabsHolder)

        this.tabPanesContainer = newTabPanesContainer
        this.tabs_holder = newTabsHolder

        /* Activate the first tab */
        const firstTab = this.theme.getFirstTab(this.tabs_holder)
        if (firstTab) {
          Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["trigger"])(firstTab, 'click')
        }
        return
        /* Normal layout */
      }
      this.property_order.forEach(key => {
        const editor = this.editors[key]
        if (editor.property_removed) return
        row = this.theme.getGridRow()
        container.appendChild(row)

        if (editor.options.hidden) editor.container.style.display = 'none'
        else this.theme.setGridColumnSize(editor.container, 12)
        row.appendChild(editor.container)
      })
    }
    /* for grid and normal layout */
    while (this.row_container.firstChild) {
      this.row_container.removeChild(this.row_container.firstChild)
    }
    this.row_container.appendChild(container)
  }

  getPropertySchema (key) {
    /* Schema declared directly in properties */
    let schema = this.schema.properties[key] || {}
    schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, schema)
    let matched = !!this.schema.properties[key]

    /* Any matching patternProperties should be merged in */
    if (this.schema.patternProperties) {
      Object.keys(this.schema.patternProperties).forEach(i => {
        const regex = new RegExp(i)
        if (regex.test(key)) {
          schema.allOf = schema.allOf || []
          schema.allOf.push(this.schema.patternProperties[i])
          matched = true
        }
      })
    }

    /* Hasn't matched other rules, use additionalProperties schema */
    if (!matched && this.schema.additionalProperties && typeof this.schema.additionalProperties === 'object') {
      schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.additionalProperties)
    }

    return schema
  }

  preBuild () {
    super.preBuild()

    this.editors = {}
    this.cached_editors = {}

    this.format = this.options.layout || this.options.object_layout || this.schema.format || this.jsoneditor.options.object_layout || 'normal'

    this.schema.properties = this.schema.properties || {}

    this.minwidth = 0
    this.maxwidth = 0

    /* If the object should be rendered as a table row */
    if (this.options.table_row) {
      Object.entries(this.schema.properties).forEach(([key, schema]) => {
        const editor = this.jsoneditor.getEditorClass(schema)
        this.editors[key] = this.jsoneditor.createEditor(editor, {
          jsoneditor: this.jsoneditor,
          schema,
          path: `${this.path}.${key}`,
          parent: this,
          compact: true,
          required: true
        }, this.currentDepth + 1)
        this.editors[key].preBuild()

        const width = this.editors[key].options.hidden ? 0 : (this.editors[key].options.grid_columns || this.editors[key].getNumColumns())

        this.minwidth += width
        this.maxwidth += width
      })
      this.no_link_holder = true
      /* If the object should be rendered as a table */
    } else if (this.options.table) {
      /* TODO: table display format */
      throw new Error('Not supported yet')
      /* If the object should be rendered as a div */
    } else {
      if (!this.schema.defaultProperties) {
        if (this.jsoneditor.options.display_required_only || this.options.display_required_only) {
          this.schema.defaultProperties = Object.keys(this.schema.properties).filter(k => this.isRequiredObject({ key: k, schema: this.schema.properties[k] }))
        } else {
          this.schema.defaultProperties = Object.keys(this.schema.properties)
        }
      }

      /* Increase the grid width to account for padding */
      this.maxwidth += 1

      /* Check for array (eg. meta-schema options is an object) */
      if (Array.isArray(this.schema.defaultProperties)) {
        this.schema.defaultProperties.forEach(key => {
          this.addObjectProperty(key, true)

          if (this.editors[key]) {
            this.minwidth = Math.max(this.minwidth, (this.editors[key].options.grid_columns || this.editors[key].getNumColumns()))
            this.maxwidth += (this.editors[key].options.grid_columns || this.editors[key].getNumColumns())
          }
        })
      }
    }

    /* Sort editors by propertyOrder */
    this.property_order = Object.keys(this.editors)
    this.property_order = this.property_order.sort((a, b) => {
      let ordera = this.editors[a].schema.propertyOrder
      let orderb = this.editors[b].schema.propertyOrder
      if (typeof ordera !== 'number') ordera = 1000
      if (typeof orderb !== 'number') orderb = 1000

      return ordera - orderb
    })
  }

  /* "Borrow" from arrays code */
  addTab (idx) {
    const isObjOrArray = this.rows[idx].schema && (this.rows[idx].schema.type === 'object' || this.rows[idx].schema.type === 'array')
    if (this.tabs_holder) {
      this.rows[idx].tab_text = document.createElement('span')

      if (!isObjOrArray) {
        this.rows[idx].tab_text.textContent = (typeof this.schema.basicCategoryTitle === 'undefined') ? 'Basic' : this.schema.basicCategoryTitle
      } else {
        this.rows[idx].tab_text.textContent = this.rows[idx].getHeaderText()
      }
      this.rows[idx].tab = this.theme.getTopTab(this.rows[idx].tab_text, this.getValidId(this.rows[idx].tab_text.textContent))
      this.rows[idx].tab.addEventListener('click', (e) => {
        this.active_tab = this.rows[idx].tab
        this.refreshTabs()
        e.preventDefault()
        e.stopPropagation()
      })
    }
  }

  addRow (editor, tabHolder, aPane) {
    const rowsLen = this.rows.length
    const isObjOrArray = editor.schema.type === 'object' || editor.schema.type === 'array'

    /* Add a row */
    this.rows[rowsLen] = editor
    /* rowPane stores the editor corresponding pane to set the display style when refreshing Tabs */
    this.rows[rowsLen].rowPane = aPane

    if (!isObjOrArray) {
      /* This is the first simple property to be added, */
      /* add a ("Basic") tab for it and save it's row number */
      if (typeof this.basicTab === 'undefined') {
        this.addTab(rowsLen)
        /* Store the index row of the first simple property added */
        this.basicTab = rowsLen
        this.basicPane = aPane
        this.theme.addTopTab(tabHolder, this.rows[rowsLen].tab)
      } else {
        /* Any other simple property gets the same tab (and the same pane) as the first one, */
        /* so, when 'click' event is fired from a row, it gets the correct ("Basic") tab */
        this.rows[rowsLen].tab = this.rows[this.basicTab].tab
        this.rows[rowsLen].tab_text = this.rows[this.basicTab].tab_text
        this.rows[rowsLen].rowPane = this.rows[this.basicTab].rowPane
      }
    } else {
      this.addTab(rowsLen)
      this.theme.addTopTab(tabHolder, this.rows[rowsLen].tab)
    }
  }

  /* Mark the active tab and make visible the corresponding pane, hide others */
  refreshTabs (refreshHeaders) {
    const basicTabPresent = typeof this.basicTab !== 'undefined'
    let basicTabRefreshed = false

    this.rows.forEach(row => {
      /* If it's an orphan row (some property which has been deleted), return */
      if (!row.tab || !row.rowPane || !row.rowPane.parentNode) return

      if (basicTabPresent && row.tab === this.rows[this.basicTab].tab && basicTabRefreshed) return

      if (refreshHeaders) {
        row.tab_text.textContent = row.getHeaderText()
      } else {
        /* All rows of simple properties point to the same tab, so refresh just once */
        if (basicTabPresent && row.tab === this.rows[this.basicTab].tab) basicTabRefreshed = true

        if (row.tab === this.active_tab) {
          this.theme.markTabActive(row)
        } else {
          this.theme.markTabInactive(row)
        }
      }
    })
  }

  build () {
    const isCategoriesFormat = (this.format === 'categories')
    this.rows = []
    this.active_tab = null

    /* If the object should be rendered as a table row */
    if (this.options.table_row) {
      this.editor_holder = this.container
      Object.entries(this.editors).forEach(([key, editor]) => {
        const holder = this.theme.getTableCell()
        this.editor_holder.appendChild(holder)

        editor.setContainer(holder)
        editor.build()
        editor.postBuild()
        editor.setOptInCheckbox(editor.header)

        if (this.editors[key].options.hidden) {
          holder.style.display = 'none'
        }
        if (this.editors[key].options.input_width) {
          holder.style.width = this.editors[key].options.input_width
        }
      })
      /* If the object should be rendered as a table */
    } else if (this.options.table) {
      /* TODO: table display format */
      throw new Error('Not supported yet')
      /* If the object should be rendered as a div */
    } else {
      this.header = ''
      if (!this.options.compact) {
        this.header = document.createElement('label')
        this.header.textContent = this.getTitle()
      }
      this.title = this.theme.getHeader(this.header)
      this.title.classList.add('je-object__title')
      this.controls = this.theme.getButtonHolder()
      this.controls.classList.add('je-object__controls')

      this.container.appendChild(this.title)
      this.container.appendChild(this.controls)
      this.container.classList.add('je-object__container')

      /* Edit JSON modal */
      this.editjson_holder = this.theme.getModal()
      this.editjson_textarea = this.theme.getTextareaInput()
      this.editjson_textarea.classList.add('je-edit-json--textarea')
      this.editjson_save = this.getButton('Save', 'save', 'Save')
      this.editjson_save.classList.add('json-editor-btntype-save')
      this.editjson_save.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.saveJSON()
      })
      this.editjson_copy = this.getButton('Copy', 'copy', 'Copy')
      this.editjson_copy.classList.add('json-editor-btntype-copy')
      this.editjson_copy.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.copyJSON()
      })
      this.editjson_cancel = this.getButton('Cancel', 'cancel', 'Cancel')
      this.editjson_cancel.classList.add('json-editor-btntype-cancel')
      this.editjson_cancel.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.hideEditJSON()
      })
      this.editjson_holder.appendChild(this.editjson_textarea)
      this.editjson_holder.appendChild(this.editjson_save)
      this.editjson_holder.appendChild(this.editjson_copy)
      this.editjson_holder.appendChild(this.editjson_cancel)

      /* Manage Properties modal */
      this.addproperty_holder = this.theme.getModal()
      this.addproperty_list = document.createElement('div')
      this.addproperty_list.classList.add('property-selector')
      this.addproperty_add = this.getButton('add', 'add', 'add')
      this.addproperty_add.classList.add('json-editor-btntype-add')

      this.addproperty_input = this.theme.getFormInputField('text')
      this.addproperty_input.setAttribute('placeholder', 'Property name...')
      this.addproperty_input.classList.add('property-selector-input')
      this.addproperty_add.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (this.addproperty_input.value) {
          if (this.editors[this.addproperty_input.value]) {
            window.alert('there is already a property with that name')
            return
          }

          this.addObjectProperty(this.addproperty_input.value)
          if (this.editors[this.addproperty_input.value]) {
            this.editors[this.addproperty_input.value].disable()
          }
          this.onChange(true)
        }
      })
      this.addproperty_input.addEventListener('input', (e) => {
        e.target.previousSibling.childNodes.forEach((value) => {
          if (value.innerText.includes(e.target.value)) {
            value.style.display = ''
          } else {
            value.style.display = 'none'
          }
        })
      })
      this.addproperty_holder.appendChild(this.addproperty_list)
      this.addproperty_holder.appendChild(this.addproperty_input)
      this.addproperty_holder.appendChild(this.addproperty_add)
      const spacer = document.createElement('div')
      spacer.style.clear = 'both'
      this.addproperty_holder.appendChild(spacer)

      /* Close properties modal if clicked outside modal */
      document.addEventListener('click', this.onOutsideModalClick)

      /* Description */
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }

      /* Validation error placeholder area */
      this.error_holder = document.createElement('div')
      this.container.appendChild(this.error_holder)

      /* Container for child editor area */
      this.editor_holder = this.theme.getIndentedPanel()
      this.container.appendChild(this.editor_holder)

      /* Container for rows of child editors */
      this.row_container = this.theme.getGridContainer()

      if (isCategoriesFormat) {
        this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.schema.title))
        this.tabPanesContainer = this.theme.getTopTabContentHolder(this.tabs_holder)
        this.editor_holder.appendChild(this.tabs_holder)
      } else {
        this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.schema.title))
        this.tabPanesContainer = this.theme.getTabContentHolder(this.tabs_holder)
        this.editor_holder.appendChild(this.row_container)
      }

      Object.values(this.editors).forEach(editor => {
        const aPane = this.theme.getTabContent()
        const holder = this.theme.getGridColumn()
        const isObjOrArray = !!((editor.schema && (editor.schema.type === 'object' || editor.schema.type === 'array')))
        aPane.isObjOrArray = isObjOrArray

        if (isCategoriesFormat) {
          if (isObjOrArray) {
            const singleRowContainer = this.theme.getGridContainer()
            singleRowContainer.appendChild(holder)
            aPane.appendChild(singleRowContainer)
            this.tabPanesContainer.appendChild(aPane)
            this.row_container = singleRowContainer
          } else {
            if (typeof this.row_container_basic === 'undefined') {
              this.row_container_basic = this.theme.getGridContainer()
              aPane.appendChild(this.row_container_basic)
              if (this.tabPanesContainer.childElementCount === 0) {
                this.tabPanesContainer.appendChild(aPane)
              } else {
                this.tabPanesContainer.insertBefore(aPane, this.tabPanesContainer.childNodes[1])
              }
            }
            this.row_container_basic.appendChild(holder)
          }

          this.addRow(editor, this.tabs_holder, aPane)

          aPane.id = this.getValidId(editor.schema.title) /* editor.schema.path//tab_text.textContent */
        } else {
          this.row_container.appendChild(holder)
        }

        editor.setContainer(holder)
        editor.build()
        editor.postBuild()
        editor.setOptInCheckbox(editor.header)
      })

      if (this.rows[0]) {
        Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["trigger"])(this.rows[0].tab, 'click')
      }

      /* Show/Hide button */
      this.collapsed = false
      this.collapse_control = this.getButton('', 'collapse', this.translate('button_collapse'))
      this.collapse_control.classList.add('json-editor-btntype-toggle')
      this.title.insertBefore(this.collapse_control, this.title.childNodes[0])

      this.collapse_control.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (this.collapsed) {
          this.editor_holder.style.display = ''
          this.collapsed = false
          this.setButtonText(this.collapse_control, '', 'collapse', this.translate('button_collapse'))
        } else {
          this.editor_holder.style.display = 'none'
          this.collapsed = true
          this.setButtonText(this.collapse_control, '', 'expand', this.translate('button_expand'))
        }
      })

      /* If it should start collapsed */
      if (this.options.collapsed) {
        Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["trigger"])(this.collapse_control, 'click')
      }

      /* Collapse button disabled */
      if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
        if (this.schema.options.disable_collapse) this.collapse_control.style.display = 'none'
      } else if (this.jsoneditor.options.disable_collapse) {
        this.collapse_control.style.display = 'none'
      }

      /* Edit JSON Button */
      this.editjson_control = this.getButton('JSON', 'edit', 'Edit JSON')
      this.editjson_control.classList.add('json-editor-btntype-editjson')
      this.editjson_control.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.toggleEditJSON()
      })
      this.controls.appendChild(this.editjson_control)
      this.controls.insertBefore(this.editjson_holder, this.controls.childNodes[0])

      /* Edit JSON Buttton disabled */
      if (this.schema.options && typeof this.schema.options.disable_edit_json !== 'undefined') {
        if (this.schema.options.disable_edit_json) this.editjson_control.style.display = 'none'
      } else if (this.jsoneditor.options.disable_edit_json) {
        this.editjson_control.style.display = 'none'
      }

      /* Object Properties Button */
      this.addproperty_button = this.getButton('Properties', 'edit_properties', this.translate('button_object_properties'))
      this.addproperty_button.classList.add('json-editor-btntype-properties')
      this.addproperty_button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.toggleAddProperty()
      })
      this.controls.appendChild(this.addproperty_button)
      this.controls.insertBefore(this.addproperty_holder, this.controls.childNodes[1])

      this.refreshAddProperties()

      /* non required properties start deactivated */
      this.deactivateNonRequiredProperties()
    }

    /* Fix table cell ordering */
    if (this.options.table_row) {
      this.editor_holder = this.container
      this.property_order.forEach(key => {
        this.editor_holder.appendChild(this.editors[key].container)
      })
      /* Layout object editors in grid if needed */
    } else {
      /* Initial layout */
      this.layoutEditors()
      /* Do it again now that we know the approximate heights of elements */
      this.layoutEditors()
    }
  }

  deactivateNonRequiredProperties () {
    /* the show_opt_in editor option is for backward compatibility */
    if (this.jsoneditor.options.show_opt_in || this.options.show_opt_in) {
      Object.entries(this.editors).forEach(([key, editor]) => {
        if (!this.isRequiredObject(editor)) {
          this.editors[key].deactivate()
        }
      })
    }
  }

  showEditJSON () {
    if (!this.editjson_holder) return
    this.hideAddProperty()

    /* Position the form directly beneath the button */
    /* TODO: edge detection */
    this.editjson_holder.style.left = `${this.editjson_control.offsetLeft}px`
    this.editjson_holder.style.top = `${this.editjson_control.offsetTop + this.editjson_control.offsetHeight}px`

    /* Start the textarea with the current value */
    this.editjson_textarea.value = JSON.stringify(this.getValue(), null, 2)

    /* Disable the rest of the form while editing JSON */
    this.disable()

    this.editjson_holder.style.display = ''
    this.editjson_control.disabled = false
    this.editing_json = true
  }

  hideEditJSON () {
    if (!this.editjson_holder) return
    if (!this.editing_json) return

    this.editjson_holder.style.display = 'none'
    this.enable()
    this.editing_json = false
  }

  copyJSON () {
    if (!this.editjson_holder) return
    const ta = document.createElement('textarea')
    ta.value = this.editjson_textarea.value
    ta.setAttribute('readonly', '')
    ta.style.position = 'absolute'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }

  saveJSON () {
    if (!this.editjson_holder) return

    try {
      const json = JSON.parse(this.editjson_textarea.value)
      this.setValue(json)
      this.hideEditJSON()
      this.onChange(true)
    } catch (e) {
      window.alert('invalid JSON')
      throw e
    }
  }

  toggleEditJSON () {
    if (this.editing_json) this.hideEditJSON()
    else this.showEditJSON()
  }

  insertPropertyControlUsingPropertyOrder (property, control, container) {
    let propertyOrder
    if (this.schema.properties[property]) { propertyOrder = this.schema.properties[property].propertyOrder }
    if (typeof propertyOrder !== 'number') propertyOrder = 1000
    control.propertyOrder = propertyOrder

    for (let i = 0; i < container.childNodes.length; i++) {
      const child = container.childNodes[i]
      if (control.propertyOrder < child.propertyOrder) {
        this.addproperty_list.insertBefore(control, child)
        control = null
        break
      }
    }
    if (control) {
      this.addproperty_list.appendChild(control)
    }
  }

  addPropertyCheckbox (key) {
    let labelText

    const checkbox = this.theme.getCheckbox()
    checkbox.style.width = 'auto'

    if (this.schema.properties[key] && this.schema.properties[key].title) { labelText = this.schema.properties[key].title } else { labelText = key }

    const label = this.theme.getCheckboxLabel(labelText)

    const control = this.theme.getFormControl(label, checkbox)
    control.style.paddingBottom = control.style.marginBottom = control.style.paddingTop = control.style.marginTop = 0
    control.style.height = 'auto'
    /* control.style.overflowY = 'hidden'; */

    this.insertPropertyControlUsingPropertyOrder(key, control, this.addproperty_list)

    checkbox.checked = key in this.editors
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        this.addObjectProperty(key)
      } else {
        this.removeObjectProperty(key)
      }
      this.onChange(true)
    })
    this.addproperty_checkboxes[key] = checkbox

    return checkbox
  }

  showAddProperty () {
    if (!this.addproperty_holder) return
    this.hideEditJSON()

    /* Position the form directly beneath the button */
    /* TODO: edge detection */
    this.addproperty_holder.style.left = `${this.addproperty_button.offsetLeft}px`
    this.addproperty_holder.style.top = `${this.addproperty_button.offsetTop + this.addproperty_button.offsetHeight}px`

    /* Disable the rest of the form while editing JSON */
    this.disable()

    this.adding_property = true
    this.addproperty_button.disabled = false
    this.addproperty_holder.style.display = ''
    this.refreshAddProperties()
  }

  hideAddProperty () {
    if (!this.addproperty_holder) return
    if (!this.adding_property) return

    this.addproperty_holder.style.display = 'none'
    this.enable()

    this.adding_property = false
  }

  toggleAddProperty () {
    if (this.adding_property) this.hideAddProperty()
    else this.showAddProperty()
  }

  removeObjectProperty (property) {
    if (this.editors[property]) {
      this.editors[property].unregister()
      delete this.editors[property]

      this.refreshValue()
      this.layoutEditors()
    }
  }

  getSchemaOnMaxDepth (schema) {
    return Object.keys(schema).reduce((acc, key) => {
      switch (key) {
        case '$ref':
          return acc
        case 'properties':
        case 'items':
          return {
            ...acc,
            [key]: {}
          }
        case 'additionalProperties':
          return {
            ...acc,
            [key]: true
          }
        default:
          return {
            ...acc,
            [key]: schema[key]
          }
      }
    }, {})
  }

  addObjectProperty (name, prebuildOnly) {
    /* Property is already added */
    if (this.editors[name]) return

    /* Property was added before and is cached */
    if (this.cached_editors[name]) {
      this.editors[name] = this.cached_editors[name]
      if (prebuildOnly) return
      this.editors[name].register()
      /* New property */
    } else {
      if (!this.canHaveAdditionalProperties() && (!this.schema.properties || !this.schema.properties[name])) {
        return
      }

      const schema = this.getPropertySchema(name)
      if (typeof schema.propertyOrder !== 'number') {
        /* if the propertyOrder undefined, then set a smart default value. */
        schema.propertyOrder = Object.keys(this.editors).length + 1000
      }

      /* Add the property */
      const editor = this.jsoneditor.getEditorClass(schema)

      const { max_depth: maxDepth } = this.jsoneditor.options

      this.editors[name] = this.jsoneditor.createEditor(editor, {
        jsoneditor: this.jsoneditor,
        schema: !!maxDepth && this.currentDepth >= maxDepth ? this.getSchemaOnMaxDepth(schema) : schema,
        path: `${this.path}.${name}`,
        parent: this
      }, this.currentDepth + 1)
      this.editors[name].preBuild()

      if (!prebuildOnly) {
        const holder = this.theme.getChildEditorHolder()
        this.editor_holder.appendChild(holder)
        this.editors[name].setContainer(holder)
        this.editors[name].build()
        this.editors[name].postBuild()
        this.editors[name].setOptInCheckbox(editor.header)
        this.editors[name].activate()
      }

      this.cached_editors[name] = this.editors[name]
    }

    /* If we're only prebuilding the editors, don't refresh values */
    if (!prebuildOnly) {
      this.refreshValue()
      this.layoutEditors()
    }
  }

  onOutsideModalClick (e) {
    if (this.addproperty_holder &&
      !this.addproperty_holder.contains(e.path[0] || e.composedPath()[0]) &&
      this.adding_property) {
      e.preventDefault()
      e.stopPropagation()
      this.toggleAddProperty()
    }
  }

  onChildEditorChange (editor) {
    this.refreshValue()
    super.onChildEditorChange(editor)
  }

  canHaveAdditionalProperties () {
    if (typeof this.schema.additionalProperties === 'boolean') {
      return this.schema.additionalProperties
    }
    return !this.jsoneditor.options.no_additional_properties
  }

  destroy () {
    Object.values(this.cached_editors).forEach(el => el.destroy())
    if (this.editor_holder) this.editor_holder.innerHTML = ''
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.error_holder && this.error_holder.parentNode) this.error_holder.parentNode.removeChild(this.error_holder)

    this.editors = null
    this.cached_editors = null
    if (this.editor_holder && this.editor_holder.parentNode) this.editor_holder.parentNode.removeChild(this.editor_holder)
    this.editor_holder = null
    document.removeEventListener('click', this.onOutsideModalClick)

    super.destroy()
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    const result = super.getValue()
    const isEmpty = obj => typeof obj === 'undefined' || obj === '' ||
    (
      obj === Object(obj) &&
      Object.keys(obj).length === 0 &&
      obj.constructor === Object
    )
    if (result && (this.jsoneditor.options.remove_empty_properties || this.options.remove_empty_properties)) {
      Object.keys(result).forEach(key => {
        if (isEmpty(result[key])) {
          delete result[key]
        }
      })
    }
    return result
  }

  refreshValue () {
    this.value = {}

    Object.keys(this.editors).forEach(i => {
      if (this.editors[i].isActive()) {
        this.value[i] = this.editors[i].getValue()
      }
    })

    if (this.adding_property) this.refreshAddProperties()
  }

  refreshAddProperties () {
    if (this.options.disable_properties || (this.options.disable_properties !== false && this.jsoneditor.options.disable_properties)) {
      this.addproperty_button.style.display = 'none'
      return
    }

    let canAdd = false; let numProps = 0; let showModal = false

    /* Get number of editors */
    Object.keys(this.editors).forEach(i => numProps++)

    /* Determine if we can add back removed properties */
    canAdd = this.canHaveAdditionalProperties() && !(typeof this.schema.maxProperties !== 'undefined' && numProps >= this.schema.maxProperties)

    if (this.addproperty_checkboxes) {
      this.addproperty_list.innerHTML = ''
    }
    this.addproperty_checkboxes = {}

    /* Check for which editors can't be removed or added back */
    Object.keys(this.cached_editors).forEach(i => {
      this.addPropertyCheckbox(i)

      if (this.isRequiredObject(this.cached_editors[i]) && i in this.editors) {
        this.addproperty_checkboxes[i].disabled = true
      }

      if (typeof this.schema.minProperties !== 'undefined' && numProps <= this.schema.minProperties) {
        this.addproperty_checkboxes[i].disabled = this.addproperty_checkboxes[i].checked
        if (!this.addproperty_checkboxes[i].checked) showModal = true
      } else if (!(i in this.editors)) {
        if (!canAdd && !Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["hasOwnProperty"])(this.schema.properties, i)) {
          this.addproperty_checkboxes[i].disabled = true
        } else {
          this.addproperty_checkboxes[i].disabled = false
          showModal = true
        }
      } else {
        showModal = true
      }
    })

    if (this.canHaveAdditionalProperties()) {
      showModal = true
    }

    /* Additional addproperty checkboxes not tied to a current editor */
    Object.keys(this.schema.properties).forEach(i => {
      if (this.cached_editors[i]) return
      showModal = true
      this.addPropertyCheckbox(i)
    })

    /* If no editors can be added or removed, hide the modal button */
    if (!showModal) {
      this.hideAddProperty()
      this.addproperty_button.style.display = 'none'
      /* If additional properties are disabled */
    } else if (!this.canHaveAdditionalProperties()) {
      this.addproperty_add.style.display = 'none'
      this.addproperty_input.style.display = 'none'
      /* If no new properties can be added */
    } else if (!canAdd) {
      this.addproperty_add.disabled = true
      /* If new properties can be added */
    } else {
      this.addproperty_add.disabled = false
    }
  }

  isRequiredObject (editor) {
    if (!editor) {
      return
    }
    if (typeof editor.schema.required === 'boolean') return editor.schema.required
    else if (Array.isArray(this.schema.required)) return this.schema.required.includes(editor.key)
    else if (this.jsoneditor.options.required_by_default) return true
    return false
  }

  setValue (value, initial) {
    value = value || {}

    if (typeof value !== 'object' || Array.isArray(value)) value = {}

    /* First, set the values for all of the defined properties */
    Object.entries(this.cached_editors).forEach(([i, editor]) => {
      /* Value explicitly set */
      if (typeof value[i] !== 'undefined') {
        this.addObjectProperty(i)
        editor.setValue(value[i], initial)
        /* Otherwise, remove value unless this is the initial set or it's required */
      } else if (!initial && !this.isRequiredObject(editor)) {
        this.removeObjectProperty(i)
        /* Otherwise, set the value to the default */
      } else {
        editor.setValue(editor.getDefault(), initial)
      }
    })

    Object.entries(value).forEach(([i, val]) => {
      if (!this.cached_editors[i]) {
        this.addObjectProperty(i)
        if (this.editors[i]) this.editors[i].setValue(val, initial, !!this.editors[i].template)
      }
    })

    this.refreshValue()
    this.layoutEditors()
    this.onChange()
  }

  showValidationErrors (errors) {
    /* Get all the errors that pertain to this editor */
    const myErrors = []
    const otherErrors = []
    errors.forEach(error => {
      if (error.path === this.path) {
        myErrors.push(error)
      } else {
        otherErrors.push(error)
      }
    })

    /* Show errors for this editor */
    if (this.error_holder) {
      if (myErrors.length) {
        this.error_holder.innerHTML = ''
        this.error_holder.style.display = ''
        myErrors.forEach(error => {
          if (error.errorcount && error.errorcount > 1) error.message += ` (${error.errorcount} errors)`
          this.error_holder.appendChild(this.theme.getErrorMessage(error.message))
        })
        /* Hide error area */
      } else {
        this.error_holder.style.display = 'none'
      }
    }

    /* Show error for the table row if this is inside a table */
    if (this.options.table_row) {
      if (myErrors.length) {
        this.theme.addTableRowError(this.container)
      } else {
        this.theme.removeTableRowError(this.container)
      }
    }

    /* Show errors for child editors */
    Object.values(this.editors).forEach(editor => {
      editor.showValidationErrors(otherErrors)
    })
  }
}

ObjectEditor.rules = _object_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]


/***/ }),

/***/ "./src/editors/radio.js":
/*!******************************!*\
  !*** ./src/editors/radio.js ***!
  \******************************/
/*! exports provided: RadioEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioEditor", function() { return RadioEditor; });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./src/editors/select.js");


class RadioEditor extends _select_js__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"] {
  preBuild () {
    this.schema.required = true /* force editor into required mode to prevent creation of empty radio button */
    super.preBuild()
  }

  build () {
    this.label = ''
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.radioContainer = document.createElement('div')

    this.radioGroup = []

    const radioInputEventhandler = e => {
      this.setValue(e.currentTarget.value)
      this.onChange(true)
    }

    for (let i = 0; i < this.enum_values.length; i++) {
      /* form radio elements */
      this.input = this.theme.getFormRadio({
        name: this.formname,
        id: `${this.formname}[${i}]`,
        value: this.enum_values[i]
      })

      /* Set custom attributes on input element. Parameter is array of protected keys. Empty array if none. */
      this.setInputAttributes(['id', 'value', 'name'])

      this.input.addEventListener('change', radioInputEventhandler, false)
      this.radioGroup.push(this.input)

      /* form-label for radio elements */
      const radioLabel = this.theme.getFormRadioLabel(this.enum_display[i])
      radioLabel.htmlFor = this.input.id

      const control = this.theme.getFormRadioControl(radioLabel, this.input, !!(this.options.layout === 'horizontal' || this.options.compact))

      this.radioContainer.appendChild(control)
    }

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      for (let j = 0; j < this.radioGroup.length; j++) {
        this.radioGroup[j].disabled = true
      }
      this.radioContainer.classList.add('readonly')
    }

    const radioContainerWrapper = this.theme.getContainer()
    radioContainerWrapper.appendChild(this.radioContainer)
    radioContainerWrapper.dataset.containerFor = 'radio'

    this.input = radioContainerWrapper

    this.control = this.theme.getFormControl(this.label, radioContainerWrapper, this.description, this.infoButton)
    this.container.appendChild(this.control)

    /* Any special formatting that needs to happen after the input is added to the dom */
    window.requestAnimationFrame(() => {
      if (this.input.parentNode) this.afterInputReady()
    })
  }

  enable () {
    if (!this.always_disabled) {
      for (let i = 0; i < this.radioGroup.length; i++) {
        this.radioGroup[i].disabled = false
      }
      this.radioContainer.classList.remove('readonly')
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    for (let i = 0; i < this.radioGroup.length; i++) {
      this.radioGroup[i].disabled = true
    }
    this.radioContainer.classList.add('readonly')
    super.disable()
  }

  destroy () {
    if (this.radioContainer.parentNode && this.radioContainer.parentNode.parentNode) this.radioContainer.parentNode.parentNode.removeChild(this.radioContainer.parentNode)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    super.destroy()
  }

  getNumColumns () {
    return 2
  }

  setValue (val) {
    for (let i = 0; i < this.radioGroup.length; i++) {
      if (this.radioGroup[i].value === val) {
        this.radioGroup[i].checked = true
        this.value = val
        this.onChange()
        break
      }
    }
  }
}


/***/ }),

/***/ "./src/editors/sceditor.js":
/*!*********************************!*\
  !*** ./src/editors/sceditor.js ***!
  \*********************************/
/*! exports provided: ScEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScEditor", function() { return ScEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class ScEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  setValue (value, initial, fromTemplate) {
    const res = super.setValue(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.sceditor_instance) this.sceditor_instance.val(res.value)
  }

  build () {
    this.options.format = 'textarea' /* Force format into "textarea" */
    super.build()
    this.input_type = this.schema.format /* Restore original format */
    this.input.setAttribute('data-schemaformat', this.input_type)
  }

  afterInputReady () {
    if (window.sceditor) {
      /* Get options, either global options from "this.defaults.options.sceditor" or */
      /* single property options from schema "options.sceditor" */
      const options = this.expandCallbacks('sceditor', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        format: this.input_type,
        emoticonsEnabled: false,
        width: '100%',
        height: 300,
        readOnly: this.schema.readOnly || this.schema.readonly || this.schema.template
      }, this.defaults.options.sceditor || {}, this.options.sceditor || {}, {
        element: this.input
      }))

      const instance = window.sceditor.instance(this.input)

      if (instance === undefined) {
        window.sceditor.create(this.input, options) /* Create doesn't return instance. */
      }

      this.sceditor_instance = instance || window.sceditor.instance(this.input)

      /* Listen for changes */
      this.sceditor_instance.blur(() => {
        this.value = this.sceditor_instance.val()
        this.sceditor_instance.updateOriginal()
        this.is_dirty = true
        this.onChange(true)
      })

      this.theme.afterInputReady(this.input)
    } else super.afterInputReady() /* Library not loaded, so just treat this as a string */
  }

  getNumColumns () {
    return 6
  }

  enable () {
    if (!this.always_disabled && this.sceditor_instance) this.sceditor_instance.readOnly(false)
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.sceditor_instance) this.sceditor_instance.readOnly(true)
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.sceditor_instance) {
      this.sceditor_instance.destroy()
      this.sceditor_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/select.js":
/*!*******************************!*\
  !*** ./src/editors/select.js ***!
  \*******************************/
/*! exports provided: SelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEditor", function() { return SelectEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class SelectEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  setValue (value, initial) {
    /* Sanitize value before setting it */
    let sanitized = this.typecast(value)

    const haveToUseDefaultValue = !!this.jsoneditor.options.use_default_values || typeof this.schema.default !== 'undefined'

    if (
      !this.enum_values.includes(sanitized) ||
      (initial && !this.isRequired() && !haveToUseDefaultValue)
    ) {
      sanitized = this.enum_values[0]
    }

    if (this.value === sanitized) return

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    this.input.value = this.enum_options[this.enum_values.indexOf(sanitized)]

    this.value = sanitized
    this.onChange()
    this.change()
  }

  register () {
    super.register()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  }

  unregister () {
    super.unregister()
    if (!this.input) return
    this.input.removeAttribute('name')
  }

  getNumColumns () {
    if (!this.enum_options) return 3
    let longestText = this.getTitle().length
    for (let i = 0; i < this.enum_options.length; i++) {
      longestText = Math.max(longestText, this.enum_options[i].length + 4)
    }
    return Math.min(12, Math.max(longestText / 7, 2))
  }

  typecast (value) {
    if (this.schema.type === 'boolean') return value === 'undefined' || value === undefined ? undefined : !!value
    else if (this.schema.type === 'number') return 1 * value || 0
    else if (this.schema.type === 'integer') return Math.floor(value * 1 || 0)
    else if (this.schema.enum && value === undefined) return undefined
    return `${value}`
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return this.typecast(this.value)
  }

  preBuild () {
    this.input_type = 'select'
    this.enum_options = []
    this.enum_values = []
    this.enum_display = []
    let i
    let callback

    /* Enum options enumerated */
    if (this.schema.enum) {
      const display = (this.schema.options && this.schema.options.enum_titles) || []

      this.schema.enum.forEach((option, i) => {
        this.enum_options[i] = `${option}`
        this.enum_display[i] = `${display[i] || option}`
        this.enum_values[i] = this.typecast(option)
      })

      if (!this.isRequired()) {
        this.enum_display.unshift(' ')
        this.enum_options.unshift('undefined')
        this.enum_values.unshift(undefined)
      }
      /* Boolean */
    } else if (this.schema.type === 'boolean') {
      this.enum_display = (this.schema.options && this.schema.options.enum_titles) || ['true', 'false']
      this.enum_options = ['1', '']
      this.enum_values = [true, false]

      if (!this.isRequired()) {
        this.enum_display.unshift(' ')
        this.enum_options.unshift('undefined')
        this.enum_values.unshift(undefined)
      }
      /* Dynamic Enum */
    } else if (this.schema.enumSource) {
      this.enumSource = []
      this.enum_display = []
      this.enum_options = []
      this.enum_values = []

      /* Shortcut declaration for using a single array */
      if (!(Array.isArray(this.schema.enumSource))) {
        if (this.schema.enumValue) {
          this.enumSource = [
            {
              source: this.schema.enumSource,
              value: this.schema.enumValue
            }
          ]
        } else {
          this.enumSource = [
            {
              source: this.schema.enumSource
            }
          ]
        }
      } else {
        for (i = 0; i < this.schema.enumSource.length; i++) {
          /* Shorthand for watched variable */
          if (typeof this.schema.enumSource[i] === 'string') {
            this.enumSource[i] = {
              source: this.schema.enumSource[i]
            }
            /* Make a copy of the schema */
          } else if (!(Array.isArray(this.schema.enumSource[i]))) {
            this.enumSource[i] = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.enumSource[i])
          } else {
            this.enumSource[i] = this.schema.enumSource[i]
          }
        }
      }
      /* Now, enumSource is an array of sources */
      /* Walk through this array and fix up the values */
      for (i = 0; i < this.enumSource.length; i++) {
        if (this.enumSource[i].value) {
          callback = this.expandCallbacks('template', { template: this.enumSource[i].value })
          if (typeof callback.template === 'function') this.enumSource[i].value = callback.template
          else this.enumSource[i].value = this.jsoneditor.compileTemplate(this.enumSource[i].value, this.template_engine)
        }
        if (this.enumSource[i].title) {
          callback = this.expandCallbacks('template', { template: this.enumSource[i].title })
          if (typeof callback.template === 'function') this.enumSource[i].title = callback.template
          else this.enumSource[i].title = this.jsoneditor.compileTemplate(this.enumSource[i].title, this.template_engine)
        }
        if (this.enumSource[i].filter && this.enumSource[i].value) {
          callback = this.expandCallbacks('template', { template: this.enumSource[i].filter })
          if (typeof callback.template === 'function') this.enumSource[i].filter = callback.template
          else this.enumSource[i].filter = this.jsoneditor.compileTemplate(this.enumSource[i].filter, this.template_engine)
        }
      }
      /* Other, not supported */
    } else {
      throw new Error("'select' editor requires the enum property to be set.")
    }
  }

  build () {
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.input = this.theme.getSelectInput(this.enum_options, false)
    this.theme.setSelectOptions(this.input, this.enum_options, this.enum_display)

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      this.input.disabled = true
    }

    /* Set custom attributes on input element. Parameter is array of protected keys. Empty array if none. */
    this.setInputAttributes([])

    this.input.addEventListener('change', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.onInputChange()
    })

    this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)
    this.container.appendChild(this.control)

    this.value = this.enum_values[0]

    /* Any special formatting that needs to happen after the input is added to the dom */
    window.requestAnimationFrame(() => {
      if (this.input.parentNode) this.afterInputReady()
    })
  }

  afterInputReady () {
    this.theme.afterInputReady(this.input)
  }

  onInputChange () {
    const val = this.typecast(this.input.value)

    let newVal
    /* Invalid option, use first option instead */
    if (!this.enum_values.includes(val)) {
      newVal = this.enum_values[0]
    } else {
      newVal = this.enum_values[this.enum_values.indexOf(val)]
    }

    /* If valid hasn't changed */
    if (newVal === this.value) return

    this.is_dirty = true

    /* Store new value and propogate change event */
    this.value = newVal
    this.onChange(true)
  }

  onWatchedFieldChange () {
    let vars; let j
    let selectOptions = []; let selectTitles = []

    /* If this editor uses a dynamic select box */
    if (this.enumSource) {
      vars = this.getWatchedFieldValues()

      for (let i = 0; i < this.enumSource.length; i++) {
        /* Constant values */
        if (Array.isArray(this.enumSource[i])) {
          selectOptions = selectOptions.concat(this.enumSource[i])
          selectTitles = selectTitles.concat(this.enumSource[i])
        } else {
          let items = []
          /* Static list of items */
          if (Array.isArray(this.enumSource[i].source)) {
            items = this.enumSource[i].source
            /* A watched field */
          } else {
            items = vars[this.enumSource[i].source]
          }

          if (items) {
            /* Only use a predefined part of the array */
            if (this.enumSource[i].slice) {
              items = Array.prototype.slice.apply(items, this.enumSource[i].slice)
            }
            /* Filter the items */
            if (this.enumSource[i].filter) {
              const newItems = []
              for (j = 0; j < items.length; j++) {
                if (this.enumSource[i].filter({ i: j, item: items[j], watched: vars })) newItems.push(items[j])
              }
              items = newItems
            }

            const itemTitles = []
            const itemValues = []
            for (j = 0; j < items.length; j++) {
              const item = items[j]

              /* Rendered value */
              if (this.enumSource[i].value) {
                itemValues[j] = this.typecast(this.enumSource[i].value({
                  i: j,
                  item
                }))
                /* Use value directly */
              } else {
                itemValues[j] = items[j]
              }

              /* Rendered title */
              if (this.enumSource[i].title) {
                itemTitles[j] = this.enumSource[i].title({
                  i: j,
                  item
                })
                /* Use value as the title also */
              } else {
                itemTitles[j] = itemValues[j]
              }
            }

            if (this.enumSource[i].sort) {
              (((itemValues, itemTitles, order) => {
                itemValues.map((v, i) => ({
                  v,
                  t: itemTitles[i]
                })).sort((a, b) => (a.v < b.v) ? -order : ((a.v === b.v) ? 0 : order)).forEach((v, i) => {
                  itemValues[i] = v.v
                  itemTitles[i] = v.t
                })
              }).bind(null, itemValues, itemTitles, this.enumSource[i].sort === 'desc' ? 1 : -1))()
            }

            selectOptions = selectOptions.concat(itemValues)
            selectTitles = selectTitles.concat(itemTitles)
          }
        }
      }

      const prevValue = this.value

      this.theme.setSelectOptions(this.input, selectOptions, selectTitles)
      this.enum_options = selectOptions
      this.enum_display = selectTitles
      this.enum_values = selectOptions

      /* If the previous value is still in the new select options */
      /* or if global option "enum_source_value_auto_select" is true, stick with it */
      if (selectOptions.includes(prevValue) || this.jsoneditor.options.enum_source_value_auto_select !== false) {
        this.input.value = prevValue
        this.value = prevValue
        /* Otherwise, set the value to the first select option */
      } else {
        this.input.value = selectOptions[0]
        this.value = this.typecast(selectOptions[0] || '')
        if (this.parent && !this.watchLoop) this.parent.onChildEditorChange(this)
        else this.jsoneditor.onChange()
        this.jsoneditor.notifyWatchers(this.path)
      }
    }

    super.onWatchedFieldChange()
  }

  enable () {
    if (!this.always_disabled) {
      this.input.disabled = false
    }
    super.enable()
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)

    super.destroy()
  }

  showValidationErrors (errors) {
    this.previous_error_setting = this.jsoneditor.options.show_errors

    const addMessage = (messages, error) => {
      if (error.path === this.path) {
        messages.push(error.message)
      }
      return messages
    }
    const messages = errors.reduce(addMessage, [])

    if (messages.length) {
      this.theme.addInputError(this.input, `${messages.join('. ')}.`)
    } else {
      this.theme.removeInputError(this.input)
    }
  }
}


/***/ }),

/***/ "./src/editors/select2.js":
/*!********************************!*\
  !*** ./src/editors/select2.js ***!
  \********************************/
/*! exports provided: Select2Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Editor", function() { return Select2Editor; });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./src/editors/select.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class Select2Editor extends _select_js__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"] {
  setValue (value, initial) {
    if (this.select2_instance) {
      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      const sanitized = this.updateValue(value) /* Sets this.value to sanitized value */

      this.input.value = sanitized

      if (this.select2v4) this.select2_instance.val(sanitized).trigger('change')
      else this.select2_instance.select2('val', sanitized)

      this.onChange(true)
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance) {
      /* Get options, either global options from "this.defaults.options.select2" or */
      /* single property options from schema "options.select2" */
      const options = this.expandCallbacks('select2', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.defaults.options.select2 || {}, this.options.select2 || {}))

      /* New items are allowed if option "tags" is true and type is "string" */
      this.newEnumAllowed = options.tags = !!options.tags && this.schema.type === 'string'

      this.select2_instance = window.jQuery(this.input).select2(options)
      this.select2v4 = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["hasOwnProperty"])(this.select2_instance.select2, 'amd')

      /* Create change handler */
      this.selectChangeHandler = () => {
        const value = this.select2v4 ? this.select2_instance.val() : this.select2_instance.select2('val')
        this.updateValue(value)
        this.onChange(true)
      }

      /* Add event handler. */
      /* Note: Must use the "on()" method and not addEventListener() */
      this.select2_instance.on('change', this.selectChangeHandler)
      this.select2_instance.on('select2-blur', this.selectChangeHandler)
    }
    super.afterInputReady()
  }

  updateValue (value) {
    let sanitized = this.enum_values[0]
    value = this.typecast(value || '')
    if (!this.enum_values.includes(value)) {
      if (this.newEnumAllowed) {
        sanitized = this.addNewOption(value) ? value : sanitized
      }
    } else sanitized = value
    this.value = sanitized
    return sanitized
  }

  addNewOption (value) {
    const sanitized = this.typecast(value); let res = false; let optionTag

    if (!this.enum_values.includes(sanitized) && sanitized !== '') {
      /* Add to list of valid enum values */
      this.enum_options.push(`${sanitized}`)
      this.enum_display.push(`${sanitized}`)
      this.enum_values.push(sanitized)
      /* Update Schema enum to prevent triggering error */
      /* "Value must be one of the enumerated values" */
      this.schema.enum.push(sanitized)

      optionTag = this.input.querySelector(`option[value="${sanitized}"]`)
      if (optionTag) {
        /* Remove data attribute to make option tag permanent. */
        optionTag.removeAttribute('data-select2-tag')
      } else {
        this.input.appendChild(new Option(sanitized, sanitized, false, false)).trigger('change')
      }

      res = true
    }
    return res
  }

  enable () {
    if (!this.always_disabled) {
      if (this.select2_instance) {
        if (this.select2v4) this.select2_instance.prop('disabled', false)
        else this.select2_instance.select2('enable', true)
      }
    }
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', true)
      else this.select2_instance.select2('enable', false)
    }
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.select2_instance) {
      this.select2_instance.select2('destroy')
      this.select2_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/selectize.js":
/*!**********************************!*\
  !*** ./src/editors/selectize.js ***!
  \**********************************/
/*! exports provided: SelectizeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectizeEditor", function() { return SelectizeEditor; });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./src/editors/select.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class SelectizeEditor extends _select_js__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"] {
  setValue (value, initial) {
    if (this.selectize_instance) {
      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      const sanitized = this.updateValue(value) /* Sets this.value to sanitized value */

      this.input.value = sanitized

      this.selectize_instance.clear(true)
      this.selectize_instance.setValue(sanitized)

      this.onChange(true)
    } else super.setValue(value, initial)
  }

  afterInputReady () {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
      /* Get options, either global options from "this.defaults.options.selectize" or */
      /* single property options from schema "options.selectize" */
      const options = this.expandCallbacks('selectize', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.defaults.options.selectize || {}, this.options.selectize || {}))

      /* New items are allowed if option "create" is true and type is "string" */
      this.newEnumAllowed = options.create = !!options.create && this.schema.type === 'string'

      this.selectize_instance = (window.jQuery(this.input).selectize(options))[0].selectize

      /* Remove change handler set in parent class (src/multiselect.js) */
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      /* Create a new change handler */
      this.multiselectChangeHandler = (value) => {
        /* var value = this.selectize_instance.getValue(true); */
        /* this.value = value; */
        this.updateValue(value)
        this.onChange(true)
      }

      /* Add new event handler. */
      /* Note: Must use the "on()" method and not addEventListener() */
      this.selectize_instance.on('change', this.multiselectChangeHandler)
    }
    super.afterInputReady()
  }

  updateValue (value) {
    let sanitized = this.enum_values[0]
    value = this.typecast(value || '')
    if (!this.enum_values.includes(value)) {
      if (this.newEnumAllowed) {
        sanitized = this.addNewOption(value) ? value : sanitized
      }
    } else sanitized = value
    this.value = sanitized
    return sanitized
  }

  addNewOption (value) {
    const sanitized = this.typecast(value); let res = false

    if (!this.enum_values.includes(sanitized) && sanitized !== '') {
      /* Add to list of valid enum values */
      this.enum_options.push(`${sanitized}`)
      this.enum_display.push(`${sanitized}`)
      this.enum_values.push(sanitized)
      /* Update Schema enum to prevent triggering error */
      /* "Value must be one of the enumerated values" */
      this.schema.enum.push(sanitized)

      /* Add selectize item */
      this.selectize_instance.addItem(sanitized)
      this.selectize_instance.refreshOptions(false)

      res = true
    }
    return res
  }

  onWatchedFieldChange () {
    super.onWatchedFieldChange()
    if (this.selectize_instance) {
      this.selectize_instance.clear(true) /* Clear selection */
      this.selectize_instance.clearOptions(true) /* Remove all options */
      this.enum_options.forEach((value, i) => {
        this.selectize_instance.addOption({ value, text: this.enum_display[i] })
      })
      this.selectize_instance.addItem(`${this.value}`, true) /* Set new selection */
    }
  }

  enable () {
    if (!this.always_disabled && this.selectize_instance) this.selectize_instance.unlock()
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.selectize_instance) this.selectize_instance.lock()
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.selectize_instance) {
      this.selectize_instance.destroy()
      this.selectize_instance = null
    }
    super.destroy()
  }
}


/***/ }),

/***/ "./src/editors/signature.js":
/*!**********************************!*\
  !*** ./src/editors/signature.js ***!
  \**********************************/
/*! exports provided: SignatureEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureEditor", function() { return SignatureEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* This editor is using the signature pad editor from https://github.com/szimek/signature_pad */
/* Credits for the pad itself go to https://github.com/szimek */



class SignatureEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  build () {
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    const formname = this.formname.replace(/\W/g, '')

    if (typeof SignaturePad === 'function') {
      /* Dynamically add the required CSS the first time this editor is used */
      this.input = this.theme.getFormInputField('hidden')
      this.container.appendChild(this.input)

      /* Required to keep height */
      const signatureContainer = document.createElement('div')
      signatureContainer.classList.add('signature-container')

      /* Create canvas for signature pad */
      const canvas = document.createElement('canvas')
      canvas.setAttribute('name', formname)
      canvas.classList.add('signature')
      signatureContainer.appendChild(canvas)

      this.signaturePad = new window.SignaturePad(canvas, {
        onEnd () {
          /* check if the signature is not empty before setting a value */
          if (!this.signaturePad.isEmpty()) {
            this.input.value = this.signaturePad.toDataURL()
          } else {
            this.input.value = ''
          }

          this.is_dirty = true
          this.refreshValue()
          this.watch_listener()
          this.jsoneditor.notifyWatchers(this.path)
          if (this.parent) this.parent.onChildEditorChange(this)
          else this.jsoneditor.onChange()
        }
      })

      /* create button containers and add clear signature button */
      const buttons = document.createElement('div')
      const clearButton = document.createElement('button')
      clearButton.classList.add('tiny', 'button')
      clearButton.innerHTML = 'Clear signature'
      buttons.appendChild(clearButton)
      signatureContainer.appendChild(buttons)

      if (this.options.compact) this.container.setAttribute('class', `${this.container.getAttribute('class')} compact`)

      if (this.schema.readOnly || this.schema.readonly) {
        this.always_disabled = true
        Array.from(this.inputs).forEach(input => {
          canvas.setAttribute('readOnly', 'readOnly')
          input.disabled = true
        })
      }
      /* add listener to the clear button. when clicked, trigger a canvas change after emptying the canvas */
      clearButton.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.signaturePad.clear()
        /* trigger stroke end to let signaturePad update the dataURL */
        this.signaturePad.strokeEnd()
      })

      this.control = this.theme.getFormControl(this.label, signatureContainer, this.description)
      this.container.appendChild(this.control)
      this.refreshValue()

      /* signature canvas will stretch to signatureContainer width */
      canvas.width = signatureContainer.offsetWidth
      if (this.options && this.options.canvas_height) {
        canvas.height = this.options.canvas_height
      } else {
        canvas.height = '300' /* Set to default height of 300px; */
      }
    } else {
      const message = document.createElement('p')
      message.innerHTML = 'Signature pad is not available, please include SignaturePad from https://github.com/szimek/signature_pad'
      this.container.appendChild(message)
    }
  }

  setValue (val) {
    if (typeof SignaturePad === 'function') {
      const sanitized = this.sanitize(val)
      if (this.value === sanitized) {
        return
      }
      this.value = sanitized
      this.input.value = this.value
      this.signaturePad.clear()
      /* only set contents if value != '' */
      if (val && val !== '') {
        this.signaturePad.fromDataURL(val)
      }
      this.watch_listener()
      this.jsoneditor.notifyWatchers(this.path)
      return false
    }
  }

  destroy () {
    this.signaturePad.off()
    delete this.signaturePad
  }
}


/***/ }),

/***/ "./src/editors/simplemde.js":
/*!**********************************!*\
  !*** ./src/editors/simplemde.js ***!
  \**********************************/
/*! exports provided: SimplemdeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplemdeEditor", function() { return SimplemdeEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class SimplemdeEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  setValue (value, initial, fromTemplate) {
    const res = super.setValue(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.simplemde_instance) this.simplemde_instance.value(res.value)
  }

  build () {
    this.options.format = 'textarea' /* Force format into "textarea" */
    super.build()
    this.input_type = this.schema.format /* Restore original format */
    this.input.setAttribute('data-schemaformat', this.input_type)
  }

  afterInputReady () {
    let options

    if (window.SimpleMDE) {
      /* Get options, either global options from "this.defaults.options.simplemde" or */
      /* single property options from schema "options.simplemde" */
      options = this.expandCallbacks('simplemde', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
        height: 300
      }, this.defaults.options.simplemde || {}, this.options.simplemde || {}, {
        element: this.input
      }))

      this.simplemde_instance = new window.SimpleMDE(options)

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.simplemde_instance.codemirror.options.readOnly = true
      }

      /* Listen for changes */
      this.simplemde_instance.codemirror.on('change', () => {
        this.value = this.simplemde_instance.value()
        this.is_dirty = true
        this.onChange(true)
      })

      /* This will prevent SimpleMDE content from being hidden until focus in Chrome */
      /* if SimpleMDE is not visible (Like when placed inside Tabs) */
      if (options.autorefresh) {
        this.startListening(this.simplemde_instance.codemirror, this.simplemde_instance.codemirror.state.autoRefresh = { delay: 250 })
      }

      this.theme.afterInputReady(this.input)
    } else super.afterInputReady() /* Library not loaded, so just treat this as a string */
  }

  getNumColumns () {
    return 6
  }

  enable () {
    if (!this.always_disabled && this.simplemde_instance) this.simplemde_instance.codemirror.options.readOnly = false
    super.enable()
  }

  disable (alwaysDisabled) {
    if (this.simplemde_instance) this.simplemde_instance.codemirror.options.readOnly = true
    super.disable(alwaysDisabled)
  }

  destroy () {
    if (this.simplemde_instance) {
      this.simplemde_instance.toTextArea()
      this.simplemde_instance = null
    }
    super.destroy()
  }

  /* Ported from https://codemirror.net/addon/display/autorefresh.js */
  startListening (cm, state) {
    function check () {
      if (cm.display.wrapper.offsetHeight) {
        this.stopListening(cm, state)
        if (cm.display.lastWrapHeight !== cm.display.wrapper.clientHeight) {
          cm.refresh()
        }
      } else {
        state.timeout = window.setTimeout(check, state.delay)
      }
    }
    state.timeout = window.setTimeout(check, state.delay)
    state.hurry = () => {
      window.clearTimeout(state.timeout)
      state.timeout = window.setTimeout(check, 50)
    }
    cm.on(window, 'mouseup', state.hurry)
    cm.on(window, 'keyup', state.hurry)
  }

  stopListening (cm, state) {
    window.clearTimeout(state.timeout)
    cm.off(window, 'mouseup', state.hurry)
    cm.off(window, 'keyup', state.hurry)
  }
}


/***/ }),

/***/ "./src/editors/starrating.css.js":
/*!***************************************!*\
  !*** ./src/editors/starrating.css.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".starrating":"direction:rtl;display:inline-block;white-space:nowrap",".starrating > input":"display:none",".starrating > label:before":"content:'%5C2606';margin:1px;font-size:168px;font-style:normal;font-weight:400;line-height:1;font-family:'Arial';display:inline-block",".starrating > label":"color:%23888;cursor:pointer;margin:8px%200%202px%200",".starrating > label.starrating-display-enabled":"margin:1px%200%200%200",".starrating > input:checked ~ label":"color:%23ffca08",".starrating:not(.readonly) > input:hover ~ label":"color:%23ffca08",".starrating > input:checked ~ label:before":"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",".starrating:not(.readonly) > input:hover ~ label:before":"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",".starrating .starrating-display":"position:relative;direction:rtl;text-align:center;font-size:10px;line-height:0px"});
/* eslint-enable */


/***/ }),

/***/ "./src/editors/starrating.js":
/*!***********************************!*\
  !*** ./src/editors/starrating.js ***!
  \***********************************/
/*! exports provided: StarratingEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarratingEditor", function() { return StarratingEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _starrating_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starrating.css.js */ "./src/editors/starrating.css.js");



class StarratingEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  build () {
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.ratingContainer = document.createElement('div')
    this.ratingContainer.classList.add('starrating')

    /* Emulate the old "rating" editor parameters */
    if (this.schema.enum === undefined) {
      let max = this.schema.maximum ? this.schema.maximum : 5
      if (this.schema.exclusiveMaximum) max--
      this.enum_values = []
      for (let k = 0; k < max; k++) this.enum_values.push(k + 1)
    } else this.enum_values = this.schema.enum

    this.radioGroup = []

    const radioInputEventhandler = e => {
      e.preventDefault()
      e.stopPropagation()
      this.setValue(e.currentTarget.value)
      this.onChange(true)
    }

    for (let i = this.enum_values.length - 1; i > -1; i--) {
      const id = this.formname + (i + 1)

      /* form radio elements */
      const radioInput = this.theme.getFormInputField('radio')
      radioInput.name = `${this.formname}[starrating]`
      radioInput.value = this.enum_values[i]
      radioInput.id = id
      radioInput.addEventListener('change', radioInputEventhandler, false)
      this.radioGroup.push(radioInput)

      /* form-label for radio elements */
      const radioLabel = document.createElement('label')
      radioLabel.htmlFor = id
      radioLabel.title = this.enum_values[i]
      if (this.options.displayValue) {
        radioLabel.classList.add('starrating-display-enabled')
      }

      this.ratingContainer.appendChild(radioInput)
      this.ratingContainer.appendChild(radioLabel)
    }

    if (this.options.displayValue) {
      this.displayRating = document.createElement('div')
      this.displayRating.classList.add('starrating-display')
      this.displayRating.innerText = this.enum_values[0]
      this.ratingContainer.appendChild(this.displayRating)
    }

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      for (let j = 0; j < this.radioGroup.length; j++) {
        this.radioGroup[j].disabled = true
      }
      this.ratingContainer.classList.add('readonly')
    }

    const ratingsContainerWrapper = this.theme.getContainer()
    ratingsContainerWrapper.appendChild(this.ratingContainer)

    this.input = ratingsContainerWrapper

    this.control = this.theme.getFormControl(this.label, ratingsContainerWrapper, this.description, this.infoButton)
    this.container.appendChild(this.control)

    this.refreshValue()
  }

  enable () {
    if (!this.always_disabled) {
      for (let i = 0; i < this.radioGroup.length; i++) {
        this.radioGroup[i].disabled = false
      }
      this.ratingContainer.classList.remove('readonly')
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    for (let i = 0; i < this.radioGroup.length; i++) {
      this.radioGroup[i].disabled = true
    }
    this.ratingContainer.classList.add('readonly')
    super.disable()
  }

  destroy () {
    if (this.ratingContainer.parentNode && this.ratingContainer.parentNode.parentNode) this.ratingContainer.parentNode.parentNode.removeChild(this.ratingContainer.parentNode)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    super.destroy()
  }

  getNumColumns () {
    return 2
  }

  getValue () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    if (this.schema.type === 'integer') {
      return this.value === '' ? undefined : this.value * 1
    }
    return this.value
  }

  setValue (value) {
    for (let i = 0; i < this.radioGroup.length; i++) {
      if (this.radioGroup[i].value === `${value}`) {
        this.radioGroup[i].checked = true
        this.value = value

        if (this.options.displayValue) this.displayRating.innerHTML = this.value

        this.onChange(true)
        break
      }
    }
  }
}

StarratingEditor.rules = _starrating_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/editors/stepper.js":
/*!********************************!*\
  !*** ./src/editors/stepper.js ***!
  \********************************/
/*! exports provided: StepperEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperEditor", function() { return StepperEditor; });
/* harmony import */ var _integer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integer.js */ "./src/editors/integer.js");


class StepperEditor extends _integer_js__WEBPACK_IMPORTED_MODULE_0__["IntegerEditor"] {
  build () {
    super.build()
    this.input.setAttribute('type', 'number')
    const stepperButtons = this.theme.getStepperButtons(this.input)
    this.control.appendChild(stepperButtons)
    this.stepperDown = this.control.querySelector('.stepper-down')
    this.stepperUp = this.control.querySelector('.stepper-up')
  }

  enable () {
    super.enable()
    this.stepperDown.removeAttribute('disabled')
    this.stepperUp.removeAttribute('disabled')
  }

  disable () {
    super.disable()
    this.stepperDown.setAttribute('disabled', true)
    this.stepperUp.setAttribute('disabled', true)
  }
}


/***/ }),

/***/ "./src/editors/string.js":
/*!*******************************!*\
  !*** ./src/editors/string.js ***!
  \*******************************/
/*! exports provided: StringEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEditor", function() { return StringEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class StringEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  register () {
    super.register()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  }

  unregister () {
    super.unregister()
    if (!this.input) return
    this.input.removeAttribute('name')
  }

  setValue (value, initial, fromTemplate) {
    if (this.template && !fromTemplate) return

    if (!this.shouldBeUnset() && (value === null || typeof value === 'undefined')) value = ''
    else if (typeof value === 'object') value = JSON.stringify(value)
    else if (!this.shouldBeUnset() && (typeof value !== 'string')) value = `${value}`

    if (value === this.serialized) return

    /* Sanitize value before setting it */
    const sanitized = this.sanitize(value)

    if (this.input.value === sanitized) return

    this.setValueToInputField(sanitized)

    if (this.format === 'range') {
      const output = this.control.querySelector('output')
      if (output) {
        output.value = sanitized
      }
    }

    const changed = fromTemplate || this.getValue() !== value

    this.refreshValue()

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    if (this.adjust_height) this.adjust_height(this.input)

    /* Bubble this setValue to parents if the value changed */
    this.onChange(changed)

    /* Return object with changed state and sanitized value for use in editors that extend this */
    return { changed, value: sanitized }
  }

  setValueToInputField (value) {
    this.input.value = value === undefined ? '' : value
  }

  getNumColumns () {
    const min = Math.ceil(Math.max(this.getTitle().length, this.schema.maxLength || 0, this.schema.minLength || 0) / 5)
    let num

    if (this.input_type === 'textarea') num = 6
    else if (['text', 'email'].includes(this.input_type)) num = 4
    else num = 2

    return Math.min(12, Math.max(min, num))
  }

  build () {
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)

    this.format = this.schema.format
    if (!this.format && this.schema.media && this.schema.media.type) {
      this.format = this.schema.media.type.replace(/(^(application|text)\/(x-)?(script\.)?)|(-source$)/g, '')
    }
    if (!this.format && this.options.default_format) {
      this.format = this.options.default_format
    }
    if (this.options.format) {
      this.format = this.options.format
    }

    /* Specific format */
    if (this.format) {
      /* Text Area */
      if (this.format === 'textarea') {
        this.input_type = 'textarea'
        this.input = this.theme.getTextareaInput()
        /* Range Input */
      } else if (this.format === 'range') {
        this.input_type = 'range'
        let min = this.schema.minimum || 0
        let max = this.schema.maximum || Math.max(100, min + 1)
        let step = 1
        if (this.schema.multipleOf) {
          if (min % this.schema.multipleOf) min = Math.ceil(min / this.schema.multipleOf) * this.schema.multipleOf
          if (max % this.schema.multipleOf) max = Math.floor(max / this.schema.multipleOf) * this.schema.multipleOf
          step = this.schema.multipleOf
        }

        this.input = this.theme.getRangeInput(min, max, step)
        /* HTML5 Input type */
      } else {
        this.input_type = 'text'
        if (['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'].includes(this.format)) {
          this.input_type = this.format
        }
        this.input = this.theme.getFormInputField(this.input_type)
      }
      /* Normal text input */
    } else {
      this.input_type = 'text'
      this.input = this.theme.getFormInputField(this.input_type)
    }

    /* minLength, maxLength, and pattern */
    if (typeof this.schema.maxLength !== 'undefined') this.input.setAttribute('maxlength', this.schema.maxLength)
    if (typeof this.schema.pattern !== 'undefined') this.input.setAttribute('pattern', this.schema.pattern)
    else if (typeof this.schema.minLength !== 'undefined') this.input.setAttribute('pattern', `.{${this.schema.minLength},}`)

    if (this.options.compact) {
      this.container.classList.add('compact')
    } else if (this.options.input_width) this.input.style.width = this.options.input_width

    if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
      this.always_disabled = true
      this.input.setAttribute('readonly', 'true')
    }

    /* Set custom attributes on input element. Parameter is array of protected keys. Empty array if none. */
    this.setInputAttributes(['maxlength', 'pattern', 'readonly', 'min', 'max', 'step'])

    this.input
      .addEventListener('change', e => {
        e.preventDefault()
        e.stopPropagation()

        /* Don't allow changing if this field is a template */
        if (this.schema.template) {
          e.currentTarget.value = this.value
          return
        }

        const val = e.currentTarget.value

        /* sanitize value */
        const sanitized = this.sanitize(val)
        if (val !== sanitized) {
          e.currentTarget.value = sanitized
        }

        this.is_dirty = true

        this.refreshValue()
        this.onChange(true)
      })

    if (this.options.input_height) this.input.style.height = this.options.input_height
    if (this.options.expand_height) {
      this.adjust_height = (el) => {
        if (!el) return
        let i; let ch = el.offsetHeight
        /* Input too short */
        if (el.offsetHeight < el.scrollHeight) {
          i = 0
          while (el.offsetHeight < el.scrollHeight + 3) {
            if (i > 100) break
            i++
            ch++
            el.style.height = `${ch}px`
          }
        } else {
          i = 0
          while (el.offsetHeight >= el.scrollHeight + 3) {
            if (i > 100) break
            i++
            ch--
            el.style.height = `${ch}px`
          }
          el.style.height = `${ch + 1}px`
        }
      }

      this.input.addEventListener('keyup', e => {
        this.adjust_height(e.currentTarget)
      })
      this.input.addEventListener('change', e => {
        this.adjust_height(e.currentTarget)
      })
      this.adjust_height()
    }

    if (this.format) this.input.setAttribute('data-schemaformat', this.format)

    let { input } = this
    if (this.format === 'range') {
      input = this.theme.getRangeControl(this.input, this.theme.getRangeOutput(this.input, this.schema.default || Math.max(this.schema.minimum || 0, 0)))
    }

    this.control = this.theme.getFormControl(this.label, input, this.description, this.infoButton)
    this.container.appendChild(this.control)

    /* Any special formatting that needs to happen after the input is added to the dom */
    window.requestAnimationFrame(() => {
      /* Skip in case the input is only a temporary editor, */
      /* otherwise, in the case of an ace_editor creation, */
      /* it will generate an error trying to append it to the missing parentNode */
      if (this.input.parentNode) this.afterInputReady()
      if (this.adjust_height) this.adjust_height(this.input)
    })

    /* Compile and store the template */
    if (this.schema.template) {
      const callback = this.expandCallbacks('template', { template: this.schema.template })
      if (typeof callback.template === 'function') this.template = callback.template
      else this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine)
      this.refreshValue()
    } else {
      this.refreshValue()
    }
  }

  setupCleave (el) {
    /* Enable cleave.js support if library is loaded and config is available */
    const options = this.expandCallbacks('cleave', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.defaults.options.cleave || {}, this.options.cleave || {}))
    if (typeof options === 'object' && Object.keys(options).length > 0) {
      this.cleave_instance = new window.Cleave(el, options)
    }
  }

  setupImask (el) {
    /* Enable imask.js support if library is loaded and config is available */
    const options = this.expandCallbacks('imask', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.defaults.options.imask || {}, this.options.imask || {}))
    if (typeof options === 'object' && Object.keys(options).length > 0) {
      this.imask_instance = window.IMask(el, this.ajustIMaskOptions(options))
    }
  }

  ajustIMaskOptions (obj) {
    /* iMask config format is not JSON friendly, so function and regex based mask */
    /* properties have to be adjusted from string to the correct format */
    Object.keys(obj).forEach(prop => {
      if (obj[prop] === Object(obj[prop])) obj[prop] = this.ajustIMaskOptions(obj[prop])
      else if (prop === 'mask') {
        if (obj[prop].substr(0, 6) === 'regex:') {
          const regExMatch = obj[prop].match(/^regex:\/(.*)\/([gimsuy]*)$/)
          if (regExMatch !== null) {
            try {
              obj[prop] = new RegExp(regExMatch[1], regExMatch[2])
            } catch (e) { }
          }
        } else obj[prop] = this.getGlobalPropertyFromString(obj[prop])
      }
    })
    return obj
  }

  getGlobalPropertyFromString (strValue) {
    if (!strValue.includes('.')) {
      if (typeof window[strValue] !== 'undefined') {
        return window[strValue]
      }
    } else {
      const arrParts = strValue.split('.')
      const obj = arrParts[0]
      const prop = arrParts[1]

      if (typeof window[obj] !== 'undefined' && typeof window[obj][prop] !== 'undefined') {
        return window[obj][prop]
      }
    }
    /* just a string */
    return strValue
  }

  shouldBeUnset () {
    return !this.jsoneditor.options.use_default_values && !this.is_dirty
  }

  getValue () {
    const hasValueSet = !!(this.input && this.input.value)
    if (this.shouldBeUnset() && !hasValueSet) {
      return undefined
    }
    if (this.imask_instance && this.dependenciesFulfilled && this.options.imask.returnUnmasked) {
      return this.imask_instance.unmaskedValue
    } return super.getValue()
  }

  enable () {
    if (!this.always_disabled) {
      this.input.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    super.disable()
  }

  afterInputReady () {
    this.theme.afterInputReady(this.input)
    if (window.Cleave && !this.cleave_instance) this.setupCleave(this.input)
    else if (window.IMask && !this.imask_instance) this.setupImask(this.input)
  }

  refreshValue () {
    this.value = this.input.value
    if (typeof this.value !== 'string' && !this.shouldBeUnset()) this.value = ''
    this.serialized = this.value
  }

  destroy () {
    if (this.cleave_instance) this.cleave_instance.destroy()
    if (this.imask_instance) this.imask_instance.destroy()

    this.template = null
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)

    super.destroy()
  }

  /**
   * This is overridden in derivative editors
   */
  sanitize (value) {
    return value
  }

  /**
   * Re-calculates the value if needed
   */
  onWatchedFieldChange () {
    let vars

    /* If this editor needs to be rendered by a macro template */
    if (this.template) {
      vars = this.getWatchedFieldValues()
      this.setValue(this.template(vars), false, true)
    }

    super.onWatchedFieldChange()
  }

  showValidationErrors (errors) {
    if (this.jsoneditor.options.show_errors === 'always') { } else if (!this.is_dirty && this.previous_error_setting === this.jsoneditor.options.show_errors) return

    this.previous_error_setting = this.jsoneditor.options.show_errors

    const addMessage = (messages, error) => {
      if (error.path === this.path) {
        messages.push(error.message)
      }
      return messages
    }
    const messages = errors.reduce(addMessage, [])

    if (messages.length) {
      this.theme.addInputError(this.input, `${messages.join('. ')}.`)
    } else {
      this.theme.removeInputError(this.input)
    }
  }
}


/***/ }),

/***/ "./src/editors/table.js":
/*!******************************!*\
  !*** ./src/editors/table.js ***!
  \******************************/
/*! exports provided: TableEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditor", function() { return TableEditor; });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./src/editors/array.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class TableEditor extends _array_js__WEBPACK_IMPORTED_MODULE_0__["ArrayEditor"] {
  register () {
    super.register()
    if (this.rows) {
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i].register()
      }
    }
  }

  unregister () {
    super.unregister()
    if (this.rows) {
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i].unregister()
      }
    }
  }

  getNumColumns () {
    return Math.max(Math.min(12, this.width), 3)
  }

  preBuild () {
    const itemSchema = this.jsoneditor.expandRefs(this.schema.items || {})

    this.item_title = itemSchema.title || 'row'
    this.item_default = itemSchema.default || null
    this.item_has_child_editors = itemSchema.properties || itemSchema.items
    this.width = 12
    super.preBuild()
  }

  build () {
    this.table = this.theme.getTable()
    this.container.appendChild(this.table)
    this.thead = this.theme.getTableHead()
    this.table.appendChild(this.thead)
    this.header_row = this.theme.getTableRow()
    this.thead.appendChild(this.header_row)
    this.row_holder = this.theme.getTableBody()
    this.table.appendChild(this.row_holder)

    /* Determine the default value of array element */
    const tmp = this.getElementEditor(0, true)
    this.item_default = tmp.getDefault()
    this.width = tmp.getNumColumns() + 2

    if (!this.options.compact) {
      this.header = document.createElement('label')
      this.header.textContent = this.getTitle()
      this.title = this.theme.getHeader(this.header)
      this.container.appendChild(this.title)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }
      this.panel = this.theme.getIndentedPanel()
      this.container.appendChild(this.panel)
      this.error_holder = document.createElement('div')
      this.panel.appendChild(this.error_holder)
    } else {
      this.panel = document.createElement('div')
      this.container.appendChild(this.panel)
    }

    this.panel.appendChild(this.table)
    this.controls = this.theme.getButtonHolder()
    this.panel.appendChild(this.controls)

    if (this.item_has_child_editors) {
      const ce = tmp.getChildEditors()
      const order = tmp.property_order || Object.keys(ce)
      for (let i = 0; i < order.length; i++) {
        const th = this.theme.getTableHeaderCell(ce[order[i]].getTitle())
        if (ce[order[i]].options.hidden) th.style.display = 'none'
        this.header_row.appendChild(th)
      }
    } else {
      this.header_row.appendChild(this.theme.getTableHeaderCell(this.item_title))
    }

    tmp.destroy()
    this.row_holder.innerHTML = ''

    /* Row Controls column */
    this.controls_header_cell = this.theme.getTableHeaderCell(' ')
    this.header_row.appendChild(this.controls_header_cell)

    /* Add controls */
    this.addControls()
  }

  onChildEditorChange (editor) {
    this.refreshValue()
    super.onChildEditorChange()
  }

  getItemDefault () {
    return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, { default: this.item_default }).default
  }

  getItemTitle () {
    return this.item_title
  }

  getElementEditor (i, ignore) {
    const schemaCopy = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.schema.items)
    const editor = this.jsoneditor.getEditorClass(schemaCopy, this.jsoneditor)
    const row = this.row_holder.appendChild(this.theme.getTableRow())
    let holder = row
    if (!this.item_has_child_editors) {
      holder = this.theme.getTableCell()
      row.appendChild(holder)
    }

    const ret = this.jsoneditor.createEditor(editor, {
      jsoneditor: this.jsoneditor,
      schema: schemaCopy,
      container: holder,
      path: `${this.path}.${i}`,
      parent: this,
      compact: true,
      table_row: true
    })

    ret.preBuild()
    if (!ignore) {
      ret.build()
      ret.postBuild()

      ret.controls_cell = row.appendChild(this.theme.getTableCell())
      ret.row = row
      ret.table_controls = this.theme.getButtonHolder()
      ret.controls_cell.appendChild(ret.table_controls)
      ret.table_controls.style.margin = 0
      ret.table_controls.style.padding = 0
    }

    return ret
  }

  destroy () {
    this.innerHTML = ''
    if (this.checkParent(this.title)) this.title.parentNode.removeChild(this.title)
    if (this.checkParent(this.description)) this.description.parentNode.removeChild(this.description)
    if (this.checkParent(this.row_holder)) this.row_holder.parentNode.removeChild(this.row_holder)
    if (this.checkParent(this.table)) this.table.parentNode.removeChild(this.table)
    if (this.checkParent(this.panel)) this.panel.parentNode.removeChild(this.panel)

    this.rows = this.title = this.description = this.row_holder = this.table = this.panel = null

    super.destroy()
  }

  ensureArraySize (value) {
    if (!(Array.isArray(value))) value = [value]

    if (this.schema.minItems) {
      while (value.length < this.schema.minItems) {
        value.push(this.getItemDefault())
      }
    }
    if (this.schema.maxItems && value.length > this.schema.maxItems) {
      value = value.slice(0, this.schema.maxItems)
    }
    return value
  }

  setValue (value = [], initial) {
    /* Make sure value has between minItems and maxItems items in it */
    value = this.ensureArraySize(value)

    const serialized = JSON.stringify(value)
    if (serialized === this.serialized) return

    let numrowsChanged = false

    value.forEach((val, i) => {
      if (this.rows[i]) {
        /* TODO: don't set the row's value if it hasn't changed */
        this.rows[i].setValue(val)
      } else {
        this.addRow(val)
        numrowsChanged = true
      }
    })

    for (let j = value.length; j < this.rows.length; j++) {
      const holder = this.rows[j].container
      if (!this.item_has_child_editors) {
        this.rows[j].row.parentNode.removeChild(this.rows[j].row)
      }
      this.rows[j].destroy()
      if (holder.parentNode) holder.parentNode.removeChild(holder)
      this.rows[j] = null
      numrowsChanged = true
    }
    this.rows = this.rows.slice(0, value.length)

    this.refreshValue()
    if (numrowsChanged || initial) this.refreshRowButtons()

    this.onChange()

    /* TODO: sortable */
  }

  refreshRowButtons () {
    /* If we currently have minItems items in the array */
    const minItems = this.schema.minItems && this.schema.minItems >= this.rows.length
    /* If we currently have maxItems items in the array */
    const maxItems = this.schema.maxItems && this.schema.maxItems <= this.rows.length

    const needRowButtons = []
    this.rows.forEach((editor, i) => {
      if (editor.delete_button) {
        /* Hide the delete button if we have minItems items */
        const display = !minItems
        this.setVisibility(editor.delete_button, display)
        needRowButtons.push(display)
      }

      if (editor.copy_button) {
        /* Hide the copy button if we have maxItems items */
        const display = !maxItems
        this.setVisibility(editor.copy_button, display)
        needRowButtons.push(display)
      }

      if (editor.moveup_button) {
        /* Hide the moveup button for the first row */
        const display = i !== 0
        this.setVisibility(editor.moveup_button, display)
        needRowButtons.push(display)
      }

      if (editor.movedown_button) {
        /* Hide the movedown button for the last row */
        const display = i !== this.rows.length - 1
        this.setVisibility(editor.movedown_button, display)
        needRowButtons.push(display)
      }
    })

    const need = needRowButtons.some(e => e)
    /* Show/hide controls column in table */
    this.rows.forEach((editor) =>
      this.setVisibility(editor.controls_cell, need)
    )
    this.setVisibility(this.controls_header_cell, need)

    this.setVisibility(this.table, this.value.length)

    /* If there are maxItems items in the array, or configured to hide the add_row_button button, hide the button beneath the rows */
    const display1 = !(maxItems || this.hide_add_button)
    this.setVisibility(this.add_row_button, display1)

    /* If there are minItems items in the array, or configured to hide the delete_last_row button, hide the button beneath the rows */
    const display2 = !(!this.value.length || minItems || this.hide_delete_last_row_buttons)
    this.setVisibility(this.delete_last_row_button, display2)

    /* If there are minItems items in the array, or configured to hide the remove_all_rows_button button, hide the button beneath the rows */
    const display3 = !(this.value.length <= 1 || minItems || this.hide_delete_all_rows_buttons)
    this.setVisibility(this.remove_all_rows_button, display3)

    const controlsNeeded = display1 || display2 || display3
    this.setVisibility(this.controls, controlsNeeded)
  }

  refreshValue () {
    this.value = []

    this.rows.forEach((editor, i) => {
      /* Get the value for this editor */
      this.value[i] = editor.getValue()
    })
    this.serialized = JSON.stringify(this.value)
  }

  addRow (value) {
    const i = this.rows.length

    this.rows[i] = this.getElementEditor(i)

    const controlsHolder = this.rows[i].table_controls

    /* Buttons to delete row, copy row, move row up, and move row down */
    if (!this.hide_delete_buttons) {
      this.rows[i].delete_button = this._createDeleteButton(i, controlsHolder)
    }

    if (this.show_copy_button) {
      this.rows[i].copy_button = this._createCopyButton(i, controlsHolder)
    }

    if (!this.hide_move_buttons) {
      this.rows[i].moveup_button = this._createMoveUpButton(i, controlsHolder)
    }

    if (!this.hide_move_buttons) {
      this.rows[i].movedown_button = this._createMoveDownButton(i, controlsHolder)
    }

    if (value) this.rows[i].setValue(value)
  }

  _createDeleteButton (i, holder) {
    const button = this.getButton('', 'delete', this.translate('button_delete_row_title_short'))
    button.classList.add('delete', 'json-editor-btntype-delete')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      const j = e.currentTarget.getAttribute('data-i') * 1
      const value = this.getValue()

      value.splice(j, 1)

      this.setValue(value)
      this.onChange(true)
      this.jsoneditor.trigger('deleteRow', this.rows[j])
    })
    holder.appendChild(button)
    return button
  }

  _createCopyButton (i, holder) {
    const button = this.getButton('', 'copy', this.translate('button_copy_row_title_short'))
    button.classList.add('copy', 'json-editor-btntype-copy')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const j = e.currentTarget.getAttribute('data-i') * 1
      const value = this.getValue()

      value.splice(j + 1, 0, value[j])

      this.setValue(value)
      this.onChange(true)
      this.jsoneditor.trigger('copyRow', this.rows[j + 1])
    })
    holder.appendChild(button)
    return button
  }

  _createMoveUpButton (i, holder) {
    const button = this.getButton('', 'moveup', this.translate('button_move_up_title'))
    button.classList.add('moveup', 'json-editor-btntype-move')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      const j = e.currentTarget.getAttribute('data-i') * 1
      const value = this.getValue()

      value.splice(j - 1, 0, value.splice(j, 1)[0])

      this.setValue(value)
      this.onChange(true)
      this.jsoneditor.trigger('moveRow', this.rows[j - 1])
    })
    holder.appendChild(button)
    return button
  }

  _createMoveDownButton (i, holder) {
    const button = this.getButton('', 'movedown', this.translate('button_move_down_title'))
    button.classList.add('movedown', 'json-editor-btntype-move')
    button.setAttribute('data-i', i)
    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      const j = e.currentTarget.getAttribute('data-i') * 1
      const value = this.getValue()

      value.splice(j + 1, 0, value.splice(j, 1)[0])

      this.setValue(value)
      this.onChange(true)
      this.jsoneditor.trigger('moveRow', this.rows[j + 1])
    })
    holder.appendChild(button)
    return button
  }

  addControls () {
    this.collapsed = false
    this.toggle_button = this._createToggleButton()
    if (this.title_controls) {
      this.title.insertBefore(this.toggle_button, this.title.childNodes[0])
      this.toggle_button.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()

        this.setVisibility(this.panel, this.collapsed)
        if (this.collapsed) {
          this.collapsed = false
          this.setButtonText(e.currentTarget, '', 'collapse', this.translate('button_collapse'))
        } else {
          this.collapsed = true
          this.setButtonText(e.currentTarget, '', 'expand', this.translate('button_expand'))
        }
      })

      /* If it should start collapsed */
      if (this.options.collapsed) {
        Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["trigger"])(this.toggle_button, 'click')
      }

      /* Collapse button disabled */
      if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
        if (this.schema.options.disable_collapse) this.toggle_button.style.display = 'none'
      } else if (this.jsoneditor.options.disable_collapse) {
        this.toggle_button.style.display = 'none'
      }
    }

    /* Add "new row" and "delete last" buttons below editor */
    this.add_row_button = this._createAddRowButton()
    this.delete_last_row_button = this._createDeleteLastRowButton()
    this.remove_all_rows_button = this._createRemoveAllRowsButton()
  }

  _createToggleButton () {
    const button = this.getButton('', 'collapse', this.translate('button_collapse'))
    button.classList.add('json-editor-btntype-toggle')
    return button
  }

  _createAddRowButton () {
    const button = this.getButton(this.getItemTitle(), 'add', this.translate('button_add_row_title', [this.getItemTitle()]))
    button.classList.add('json-editor-btntype-add')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      const editor = this.addRow()
      this.refreshValue()
      this.refreshRowButtons()
      this.onChange(true)
      this.jsoneditor.trigger('addRow', editor)
    })
    this.controls.appendChild(button)
    return button
  }

  _createDeleteLastRowButton () {
    const button = this.getButton(this.translate('button_delete_last', [this.getItemTitle()]), 'subtract', this.translate('button_delete_last_title', [this.getItemTitle()]))
    button.classList.add('json-editor-btntype-deletelast')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      const rows = this.getValue()
      const editor = rows.pop()
      this.setValue(rows)
      this.onChange(true)
      this.jsoneditor.trigger('deleteRow', editor)
    })
    this.controls.appendChild(button)
    return button
  }

  _createRemoveAllRowsButton () {
    const button = this.getButton(this.translate('button_delete_all'), 'delete', this.translate('button_delete_all_title'))
    button.classList.add('json-editor-btntype-deleteall')
    button.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.askConfirmation()) {
        return false
      }

      this.setValue([])
      this.onChange(true)
      this.jsoneditor.trigger('deleteAllRows')
    })
    this.controls.appendChild(button)
    return button
  }
}


/***/ }),

/***/ "./src/editors/upload.js":
/*!*******************************!*\
  !*** ./src/editors/upload.js ***!
  \*******************************/
/*! exports provided: UploadEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEditor", function() { return UploadEditor; });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "./src/editor.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ "./src/utilities.js");



class UploadEditor extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"] {
  getNumColumns () {
    return 4
  }

  build () {
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)

    /* Editor options */
    this.options = this.expandCallbacks('upload', Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {
      title: 'Browse',
      icon: '',
      auto_upload: false, /* Trigger file upload button automatically */
      hide_input: false, /* Hide the Browse button and name display (Only works if 'enable_drag_drop' is true) */
      enable_drag_drop: false, /* Enable Drag&Drop uploading */
      drop_zone_text: 'Drag & Drop file here', /* Text displayed in dropzone box */
      drop_zone_top: false, /* Position of dropzone. true=before button input, false=after button input */
      alt_drop_zone: '', /* Alternate DropZone DOM selector (Can be created inside another property) */
      mime_type: '', /* If set, restricts to mime type(s). Can be either a string or an array */
      max_upload_size: 0, /* Maximum file size allowed. 0 = no limit */
      upload_handler: (jseditor, type, file, cbs) => {
        /* Default dummy test upload handler */
        window.alert(`No upload_handler defined for "${jseditor.path}". You must create your own handler to enable upload to server`)
      }
    }, this.defaults.options.upload || {}, this.options.upload || {}))

    this.options.mime_type = this.options.mime_type ? [].concat(this.options.mime_type) : []

    /* Input that holds the base64 string */
    this.input = this.theme.getFormInputField('hidden')
    this.container.appendChild(this.input)

    /* Don't show uploader if this is readonly */
    if (!this.schema.readOnly && !this.schema.readonly) {
      if (typeof this.options.upload_handler !== 'function') throw new Error('Upload handler required for upload editor')

      /* File uploader */
      this.uploader = this.theme.getFormInputField('file')
      this.uploader.style.display = 'none'
      if (this.options.mime_type.length) this.uploader.setAttribute('accept', this.options.mime_type)

      if (!(this.options.enable_drag_drop === true && this.options.hide_input === true)) {
        /* Pass click to this.uploader element */
        this.clickHandler = (e) => {
          this.uploader.dispatchEvent(new window.MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
          }))
        }

        /* Browse button */
        this.browseButton = this.getButton(this.options.title, this.options.icon, this.options.title)
        this.browseButton.addEventListener('click', this.clickHandler)

        /* Display field */
        this.fileDisplay = this.theme.getFormInputField('input')
        this.fileDisplay.setAttribute('readonly', true)
        this.fileDisplay.value = 'No file selected.'
        this.fileDisplay.addEventListener('dblclick', this.clickHandler)

        this.fileUploadGroup = this.theme.getInputGroup(this.fileDisplay, [this.browseButton])
        if (!this.fileUploadGroup) {
          /* Themes that doesn't support input grouping */
          this.fileUploadGroup = document.createElement('div')
          this.fileUploadGroup.appendChild(this.fileDisplay)
          this.fileUploadGroup.appendChild(this.browseButton)
        }
      }

      /* Drag&Drop upload enabled */
      if (this.options.enable_drag_drop === true) {
        /* Alternate DropZone defined */
        if (this.options.alt_drop_zone !== '') {
          this.altDropZone = document.querySelector(this.options.alt_drop_zone)
          if (this.altDropZone) this.dropZone = this.altDropZone
          else throw new Error(`Error: alt_drop_zone selector "${this.options.alt_drop_zone}" not found!`)
        } else this.dropZone = this.theme.getDropZone(this.options.drop_zone_text)

        if (this.dropZone) {
          this.dropZone.classList.add('upload-dropzone')
          this.dropZone.addEventListener('dblclick', this.clickHandler)
        }
      }

      /* Triggered after file have been selected */
      this.uploadHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const files = e.target.files || e.dataTransfer.files
        if (files && files.length) {
          if (this.options.max_upload_size !== 0 && files[0].size > this.options.max_upload_size) {
            this.theme.addInputError(this.uploader, `Filesize too large. Max size is ${this.options.max_upload_size}`)
          } else if (this.options.mime_type.length !== 0 && !this.isValidMimeType(files[0].type, this.options.mime_type)) {
            this.theme.addInputError(this.uploader, `Wrong file format. Allowed format(s): ${this.options.mime_type.toString()}`)
          } else {
            if (this.fileDisplay) this.fileDisplay.value = files[0].name
            let fr = new window.FileReader()
            fr.onload = (evt) => {
              this.preview_value = evt.target.result
              this.refreshPreview(files)
              this.onChange(true)
              fr = null
            }
            fr.readAsDataURL(files[0])
          }
        }
      }

      this.uploader.addEventListener('change', this.uploadHandler)

      /* Drag&Drop Event Handler */
      this.dragHandler = e => {
        const files = e.dataTransfer.items || e.dataTransfer.files
        const validType = files && files.length && (this.options.mime_type.length === 0 || this.isValidMimeType(files[0].type, this.options.mime_type))
        const validZone = e.currentTarget.classList && e.currentTarget.classList.contains('upload-dropzone') && validType
        switch ((e.currentTarget === window ? 'w_' : 'e_') + e.type) {
          case 'w_drop':
          case 'w_dragover':
            /* prevent default browser action if dropped outside dropzone */
            if (!validZone) e.dataTransfer.dropEffect = 'none'
            break
          case 'e_dragenter': {
            if (validZone) {
              this.dropZone.classList.add('valid-dropzone')
              e.dataTransfer.dropEffect = 'copy'
            } else this.dropZone.classList.add('invalid-dropzone')
            break
          }
          case 'e_dragover': {
            if (validZone) e.dataTransfer.dropEffect = 'copy'
            break
          }
          case 'e_dragleave':
            this.dropZone.classList.remove('valid-dropzone', 'invalid-dropzone')
            break
          case 'e_drop': {
            this.dropZone.classList.remove('valid-dropzone', 'invalid-dropzone')
            if (validZone) this.uploadHandler(e)
            break
          }
        }
        if (!validZone) e.preventDefault()
      }

      /* Set Drag'n'Drop handlers */
      if (this.options.enable_drag_drop === true) {
        ['dragover', 'drop'].forEach((ev) => {
          window.addEventListener(ev, this.dragHandler, true)
        });
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((ev) => {
          this.dropZone.addEventListener(ev, this.dragHandler, true)
        })
      }
    }

    this.preview = document.createElement('div')

    this.control = this.input.controlgroup = this.theme.getFormControl(this.label, this.uploader || this.input, this.description, this.infoButton)
    if (this.uploader) this.uploader.controlgroup = this.control
    const inputNode = this.uploader || this.input
    const elements = document.createElement('div')

    if (this.dropZone && !this.altDropZone && this.options.drop_zone_top === true) elements.appendChild(this.dropZone)
    if (this.fileUploadGroup) elements.appendChild(this.fileUploadGroup)
    if (this.dropZone && !this.altDropZone && this.options.drop_zone_top !== true) elements.appendChild(this.dropZone)
    elements.appendChild(this.preview)
    inputNode.parentNode.insertBefore(elements, inputNode.nextSibling)

    this.container.appendChild(this.control)

    /* Any special formatting that needs to happen after the input is added to the dom */
    window.requestAnimationFrame(() => {
      this.afterInputReady()
    })
  }

  afterInputReady () {
    if (this.value) {
      const img = document.createElement('img')
      img.style.maxWidth = '100%'
      img.style.maxHeight = '100px'
      img.onload = (event) => {
        this.preview.appendChild(img)
      }
      img.onerror = error => {
        console.error('upload error', error, error.currentTarget)
      }
      img.src = this.container.querySelector('a').href
    }
    this.theme.afterInputReady(this.input)
  }

  refreshPreview (files) {
    if (this.last_preview === this.preview_value) return
    this.last_preview = this.preview_value

    this.preview.innerHTML = ''

    if (!this.preview_value) return

    const file = files[0]

    /* mime type extracted from file data. More exact than the one in the file object */
    const mime = this.preview_value.match(/^data:([^;,]+)[;,]/)
    file.mimeType = mime ? mime[1] : 'unknown'

    if (file.size > 0) {
      /* Format bytes as KB/MB etc. with 2 decimals */
      const i = Math.floor(Math.log(file.size) / Math.log(1024))
      file.formattedSize = `${parseFloat((file.size / (1024 ** i)).toFixed(2))} ${['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][i]}`
    } else file.formattedSize = '0 Bytes'

    const uploadButton = this.getButton('Upload', 'upload', 'Upload')
    uploadButton.addEventListener('click', (event) => {
      event.preventDefault()

      uploadButton.setAttribute('disabled', 'disabled')
      this.theme.removeInputError(this.uploader)

      if (this.theme.getProgressBar) {
        this.progressBar = this.theme.getProgressBar()
        this.preview.appendChild(this.progressBar)
      }

      this.options.upload_handler(this.path, file, {
        success: (url) => {
          this.setValue(url)

          if (this.parent) this.parent.onChildEditorChange(this)
          else this.jsoneditor.onChange()

          if (this.progressBar) this.preview.removeChild(this.progressBar)
          uploadButton.removeAttribute('disabled')
        },
        failure: (error) => {
          this.theme.addInputError(this.uploader, error)
          if (this.progressBar) this.preview.removeChild(this.progressBar)
          uploadButton.removeAttribute('disabled')
        },
        updateProgress: (progress) => {
          if (this.progressBar) {
            if (progress) this.theme.updateProgressBar(this.progressBar, progress)
            else this.theme.updateProgressBarUnknown(this.progressBar)
          }
        }
      })
    })

    this.preview.appendChild(this.theme.getUploadPreview(file, uploadButton, this.preview_value))

    if (this.options.auto_upload) {
      uploadButton.dispatchEvent(new window.MouseEvent('click'))
      this.preview.removeChild(uploadButton)
    }
  }

  enable () {
    if (!this.always_disabled) {
      if (this.uploader) this.uploader.disabled = false
      super.enable()
    }
  }

  disable (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.uploader) this.uploader.disabled = true
    super.disable()
  }

  setValue (val) {
    if (this.value !== val) {
      this.value = val
      this.input.value = this.value
      this.onChange()
    }
  }

  destroy () {
    /* Remove Drag'n'Drop handlers */
    if (this.options.enable_drag_drop === true) {
      ['dragover', 'drop'].forEach((ev) => {
        window.removeEventListener(ev, this.dragHandler, true)
      });
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((ev) => {
        this.dropZone.removeEventListener(ev, this.dragHandler, true)
      })
      this.dropZone.removeEventListener('dblclick', this.clickHandler)
      if (this.dropZone && this.dropZone.parentNode) this.dropZone.parentNode.removeChild(this.dropZone)
    }

    if (this.uploader && this.uploader.parentNode) {
      this.uploader.removeEventListener('change', this.uploadHandler)
      this.uploader.parentNode.removeChild(this.uploader)
    }
    if (this.browseButton && this.browseButton.parentNode) {
      this.browseButton.removeEventListener('click', this.clickHandler)
      this.browseButton.parentNode.removeChild(this.browseButton)
    }
    if (this.fileDisplay && this.fileDisplay.parentNode) {
      this.fileDisplay.removeEventListener('dblclick', this.clickHandler)
      this.fileDisplay.parentNode.removeChild(this.fileDisplay)
    }
    if (this.fileUploadGroup && this.fileUploadGroup.parentNode) this.fileUploadGroup.parentNode.removeChild(this.fileUploadGroup)
    if (this.preview && this.preview.parentNode) this.preview.parentNode.removeChild(this.preview)
    if (this.header && this.header.parentNode) this.header.parentNode.removeChild(this.header)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)

    super.destroy()
  }

  isValidMimeType (mimeType, mimeTypesList) {
    return mimeTypesList.reduce((a, v) => a || new RegExp(v.replace(/\*/g, '.*'), 'gi').test(mimeType), false)
  }
}


/***/ }),

/***/ "./src/editors/uuid.js":
/*!*****************************!*\
  !*** ./src/editors/uuid.js ***!
  \*****************************/
/*! exports provided: UuidEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UuidEditor", function() { return UuidEditor; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");


class UuidEditor extends _string_js__WEBPACK_IMPORTED_MODULE_0__["StringEditor"] {
  preBuild () {
    super.preBuild()

    /* Use Schema "default" for setting autogenerated uuid */
    this.schema.default = this.uuid = this.getUuid()

    /* Set cleave options if no existing options is present */
    if (!this.schema.options) this.schema.options = {}
    if (!this.schema.options.cleave) {
      this.schema.options.cleave = {
        delimiters: ['-'],
        blocks: [8, 4, 4, 4, 12]
      }
    }
  }

  build () {
    super.build()
    /* Set field to readonly */
    this.always_disabled = true
    this.input.setAttribute('readonly', 'true')
  }

  sanitize (value) {
    if (!this.testUuid(value)) value = this.uuid
    return value
  }

  setValue (value, initial, fromTemplate) {
    if (!this.testUuid(value)) value = this.uuid
    this.uuid = value
    super.setValue(value, initial, fromTemplate)
  }

  getUuid () {
    /* https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
    let d = new Date().getTime()

    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now() /* use high-precision timer if available */
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  }

  testUuid (value) {
    return (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))
  }
}


/***/ }),

/***/ "./src/iconlib.js":
/*!************************!*\
  !*** ./src/iconlib.js ***!
  \************************/
/*! exports provided: AbstractIconLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractIconLib", function() { return AbstractIconLib; });

const defaultMapping = { collapse: '', expand: '', delete: '', edit: '', add: '', cancel: '', save: '', moveup: '', movedown: '' }

class AbstractIconLib {
  constructor (iconPrefix = '', mapping = defaultMapping) {
    this.mapping = mapping
    this.icon_prefix = iconPrefix
  }

  getIconClass (key) {
    return this.mapping[key] ? this.icon_prefix + this.mapping[key] : null
  }

  getIcon (key) {
    const iconclass = this.getIconClass(key)

    if (!iconclass) return null

    const i = document.createElement('i')
    i.classList.add(...iconclass.split(' '))

    return i
  }
}


/***/ }),

/***/ "./src/iconlibs/bootstrap3.js":
/*!************************************!*\
  !*** ./src/iconlibs/bootstrap3.js ***!
  \************************************/
/*! exports provided: bootstrap3Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap3Iconlib", function() { return bootstrap3Iconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'glyphicon glyphicon-'
const mapping = {
  collapse: 'chevron-down',
  expand: 'chevron-right',
  delete: 'trash',
  edit: 'pencil',
  add: 'plus',
  subtract: 'minus',
  cancel: 'floppy-remove',
  save: 'floppy-saved',
  moveup: 'arrow-up',
  moveright: 'arrow-right',
  movedown: 'arrow-down',
  moveleft: 'arrow-left',
  copy: 'copy',
  clear: 'remove-circle',
  time: 'time',
  calendar: 'calendar',
  edit_properties: 'list'
}

class bootstrap3Iconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/iconlibs/fontawesome3.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome3.js ***!
  \**************************************/
/*! exports provided: fontawesome3Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome3Iconlib", function() { return fontawesome3Iconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'icon-'
const mapping = {
  collapse: 'chevron-down',
  expand: 'chevron-right',
  delete: 'trash',
  edit: 'pencil',
  add: 'plus',
  subtract: 'minus',
  cancel: 'ban-circle',
  save: 'save',
  moveup: 'arrow-up',
  moveright: 'arrow-right',
  movedown: 'arrow-down',
  moveleft: 'arrow-left',
  copy: 'copy',
  clear: 'remove-circle',
  time: 'time',
  calendar: 'calendar',
  edit_properties: 'list'
}

class fontawesome3Iconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/iconlibs/fontawesome4.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome4.js ***!
  \**************************************/
/*! exports provided: fontawesome4Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome4Iconlib", function() { return fontawesome4Iconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'fa fa-'
const mapping = {
  collapse: 'caret-square-o-down',
  expand: 'caret-square-o-right',
  delete: 'times',
  edit: 'pencil',
  add: 'plus',
  subtract: 'minus',
  cancel: 'ban',
  save: 'save',
  moveup: 'arrow-up',
  moveright: 'arrow-right',
  movedown: 'arrow-down',
  moveleft: 'arrow-left',
  copy: 'files-o',
  clear: 'times-circle-o',
  time: 'clock-o',
  calendar: 'calendar',
  edit_properties: 'list'
}

class fontawesome4Iconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/iconlibs/fontawesome5.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome5.js ***!
  \**************************************/
/*! exports provided: fontawesome5Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome5Iconlib", function() { return fontawesome5Iconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'fas fa-'
const mapping = {
  collapse: 'caret-down',
  expand: 'caret-right',
  delete: 'trash',
  edit: 'pen',
  add: 'plus',
  subtract: 'minus',
  cancel: 'ban',
  save: 'save',
  moveup: 'arrow-up',
  moveright: 'arrow-right',
  movedown: 'arrow-down',
  moveleft: 'arrow-left',
  copy: 'copy',
  clear: 'times-circle',
  time: 'clock',
  calendar: 'calendar',
  edit_properties: 'list'
}

class fontawesome5Iconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/iconlibs/index.js":
/*!*******************************!*\
  !*** ./src/iconlibs/index.js ***!
  \*******************************/
/*! exports provided: iconlibs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconlibs", function() { return iconlibs; });
/* harmony import */ var _bootstrap3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap3.js */ "./src/iconlibs/bootstrap3.js");
/* harmony import */ var _fontawesome3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontawesome3.js */ "./src/iconlibs/fontawesome3.js");
/* harmony import */ var _fontawesome4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fontawesome4.js */ "./src/iconlibs/fontawesome4.js");
/* harmony import */ var _fontawesome5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fontawesome5.js */ "./src/iconlibs/fontawesome5.js");
/* harmony import */ var _jqueryui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jqueryui.js */ "./src/iconlibs/jqueryui.js");
/* harmony import */ var _spectre_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spectre.js */ "./src/iconlibs/spectre.js");
// import  { bootstrap2Iconlib } from  './bootstrap2.js'




// import  { foundation2Iconlib } from  './foundation2.js'
// import  { foundation3Iconlib } from  './foundation3.js'

// import  { materialiconsIconlib } from  './materialicons.js'


const iconlibs = {
  // bootstrap2: bootstrap2Iconlib,
  bootstrap3: _bootstrap3_js__WEBPACK_IMPORTED_MODULE_0__["bootstrap3Iconlib"],
  fontawesome3: _fontawesome3_js__WEBPACK_IMPORTED_MODULE_1__["fontawesome3Iconlib"],
  fontawesome4: _fontawesome4_js__WEBPACK_IMPORTED_MODULE_2__["fontawesome4Iconlib"],
  fontawesome5: _fontawesome5_js__WEBPACK_IMPORTED_MODULE_3__["fontawesome5Iconlib"],
  // foundation2: foundation2Iconlib,
  // foundation3: foundation3Iconlib,
  jqueryui: _jqueryui_js__WEBPACK_IMPORTED_MODULE_4__["jqueryuiIconlib"],
  // materialicons: materialiconsIconlib,
  spectre: _spectre_js__WEBPACK_IMPORTED_MODULE_5__["spectreIconlib"]
}


/***/ }),

/***/ "./src/iconlibs/jqueryui.js":
/*!**********************************!*\
  !*** ./src/iconlibs/jqueryui.js ***!
  \**********************************/
/*! exports provided: jqueryuiIconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuiIconlib", function() { return jqueryuiIconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'ui-icon ui-icon-'
const mapping = {
  collapse: 'triangle-1-s',
  expand: 'triangle-1-e',
  delete: 'trash',
  edit: 'pencil',
  add: 'plusthick',
  subtract: 'minusthick',
  cancel: 'closethick',
  save: 'disk',
  moveup: 'arrowthick-1-n',
  moveright: 'arrowthick-1-e',
  movedown: 'arrowthick-1-s',
  moveleft: 'arrowthick-1-w',
  copy: 'copy',
  clear: 'circle-close',
  time: 'time',
  calendar: 'calendar',
  edit_properties: 'note'
}

class jqueryuiIconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/iconlibs/spectre.js":
/*!*********************************!*\
  !*** ./src/iconlibs/spectre.js ***!
  \*********************************/
/*! exports provided: spectreIconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectreIconlib", function() { return spectreIconlib; });
/* harmony import */ var _iconlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib.js */ "./src/iconlib.js");


const iconPrefix = 'icon icon-'
const mapping = {
  collapse: 'arrow-down',
  expand: 'arrow-right',
  delete: 'delete',
  edit: 'edit',
  add: 'plus',
  subtract: 'minus',
  cancel: 'cross',
  save: 'check',
  moveup: 'upward',
  moveright: 'forward',
  movedown: 'downward',
  moveleft: 'back',
  copy: 'copy',
  clear: 'close',
  time: 'time',
  calendar: 'bookmark',
  edit_properties: 'menu'
}

class spectreIconlib extends _iconlib_js__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"] {
  constructor () {
    super(iconPrefix, mapping)
  }
}


/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* Use "multiple" as a fall back for everything */
const defaultResolver = schema => typeof schema.type !== 'string' && 'multiple'

/* If the type is not set but properties are defined, we can infer the type is actually object */
const object = schema => !schema.type && schema.properties && 'object'

/* If the type is set and it's a basic type, use the primitive editor */
const primitive = schema => typeof schema.type === 'string' && schema.type

/* Use specialized editor for signatures */
const signature = schema => schema.type === 'string' && schema.format === 'signature' && 'signature'

/* Use the select editor for all boolean values */
const boolean = schema => {
  if (schema.type === 'boolean') {
    /* If explicitly set to 'checkbox', use that */
    if (schema.format === 'checkbox' || (schema.options && schema.options.checkbox)) return 'checkbox'
    /* Otherwise, default to select menu */
    if (schema.format === 'select2') return 'select2'
    if (schema.format === 'selectize') return 'selectize'
    if (schema.format === 'choices') return 'choices'
    return 'select'
  }
}

/* Use the multiple editor for schemas where the `type` is set to "any" */
const any = schema => schema.type === 'any' && 'multiple'

/* Editor for base64 encoded files */
const base64 = schema => schema.type === 'string' && schema.media && schema.media.binaryEncoding === 'base64' && 'base64'

/* Editor for uploading files */
const upload = schema => schema.type === 'string' && schema.format === 'url' && window.FileReader && schema.options && schema.options.upload === Object(schema.options.upload) && 'upload'

/* Use the table editor for arrays with the format set to `table` */
const table = schema => schema.type === 'array' && schema.format === 'table' && 'table'

/* Use the `select` editor for dynamic enumSource enums */
const enumSource = schema => {
  if (schema.enumSource) {
    if (schema.format === 'radio') return 'radio'
    if (schema.format === 'select2') return 'select2'
    if (schema.format === 'selectize') return 'selectize'
    if (schema.format === 'choices') return 'choices'
    return 'select'
  }
}

/* Use the `enum` or `select` editors for schemas with enumerated properties */
const enumeratedProperties = schema => {
  if (schema.enum) {
    if (schema.type === 'array' || schema.type === 'object') return 'enum'
    if (schema.type === 'number' || schema.type === 'integer' || schema.type === 'string') {
      if (schema.format === 'radio') return 'radio'
      if (schema.format === 'select2') return 'select2'
      if (schema.format === 'selectize') return 'selectize'
      if (schema.format === 'choices') return 'choices'
      return 'select'
    }
  }
}

/* Specialized editors for arrays of strings */
const arraysOfStrings = schema => {
  if (schema.type === 'array' && schema.items && !(Array.isArray(schema.items)) && ['string', 'number', 'integer'].includes(schema.items.type)) {
    if (schema.format === 'choices') return 'arrayChoices'
    if (schema.uniqueItems) {
      /* if 'selectize' enabled it is expected to be selectized control */
      if (schema.format === 'selectize') return 'arraySelectize'
      if (schema.format === 'select2') return 'arraySelect2'
      if (schema.items.enum) return 'multiselect' /* otherwise it is select */
    }
  }
}

/* Use the multiple editor for schemas with `oneOf` or `anyOf` set */
const oneOf = schema => (schema.oneOf || schema.anyOf) && 'multiple'

/* Specialized editor for date, time and datetime-local formats */
const date = schema => ['string', 'integer'].includes(schema.type) && ['date', 'time', 'datetime-local'].includes(schema.format) && 'datetime'

/* Use a specialized editor for starratings */
const starratings = schema => ['string', 'integer'].includes(schema.type) && ['starrating', 'rating'].includes(schema.format) && 'starrating'

/* Hyper-link describeBy resolver */
const describeBy = schema => {
  if (schema.links) {
    for (let i = 0; i < schema.links.length; i++) {
      if (schema.links[i].rel && schema.links[i].rel.toLowerCase() === 'describedby') return 'describedBy'
    }
  }
}

/* Use the stepper editor for schemas with type `number` or `integer` and format `stepper` */
const stepper = schema => {
  if ((schema.type === 'integer' || schema.type === 'number') && schema.format === 'stepper') {
    return 'stepper'
  }
}

/* Enable custom editor type */
const button = schema => schema.format === 'button' && 'button'

const info = schema => schema.format === 'info' && 'info'

const uuid = schema => schema.type === 'string' && schema.format === 'uuid' && 'uuid'

const autoComplete = schema => schema.type === 'string' && schema.format === 'autocomplete' && 'autocomplete'

const jodit = schema => schema.type === 'string' && schema.format === 'jodit' && 'jodit'

const markdown = schema => schema.type === 'string' && schema.format === 'markdown' && 'simplemde'

const xhtml = schema => schema.type === 'string' && ['xhtml', 'bbcode'].includes(schema.format) && 'sceditor'

/* Use the ace editor for schemas with format equals any of ace editor modes */
const aceModes = ['actionscript', 'batchfile', 'c', 'c++', 'cpp', 'coffee', 'csharp', 'css', 'dart', 'django', 'ejs', 'erlang', 'golang', 'groovy', 'handlebars', 'haskell', 'haxe', 'html', 'ini', 'jade', 'java', 'javascript', 'json', 'less', 'lisp', 'lua', 'makefile', 'matlab', 'mysql', 'objectivec', 'pascal', 'perl', 'pgsql', 'php', 'python', 'r', 'ruby', 'sass', 'scala', 'scss', 'smarty', 'sql', 'sqlserver', 'stylus', 'svg', 'twig', 'vbscript', 'xml', 'yaml']
const ace = schema => schema.type === 'string' && aceModes.includes(schema.format) && 'ace'

const ip = schema => schema.type === 'string' && ['ip', 'ipv4', 'ipv6', 'hostname'].includes(schema.format) && 'ip'

const colorPicker = schema => schema.type === 'string' && schema.format === 'color' && 'colorpicker'

/* Export resolvers in order of discovery, first to last */
const resolvers = [colorPicker, ip, ace, xhtml, markdown, jodit, autoComplete, uuid, info, button, stepper, describeBy, starratings, date, oneOf, arraysOfStrings, enumeratedProperties, enumSource, table, upload, base64, any, boolean, signature, primitive, object, defaultResolver]


/***/ }),

/***/ "./src/schemaloader.js":
/*!*****************************!*\
  !*** ./src/schemaloader.js ***!
  \*****************************/
/*! exports provided: SchemaLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaLoader", function() { return SchemaLoader; });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");


class SchemaLoader {
  constructor (options) {
    this.options = options || {}
    this.refs = this.options.refs || {}
    this.refs_with_info = {}
    this.refs_prefix = '#/counter/'
    this.refs_counter = 1

    this._subSchema1 = {
      /* Version 3 `type` */
      type (schema) {
        if (typeof schema.type === 'object') {
          schema.type = this._expandSubSchema(schema.type)
        }
      },
      /* Version 3 `disallow` */
      disallow (schema) {
        if (typeof schema.disallow === 'object') {
          schema.disallow = this._expandSubSchema(schema.disallow)
        }
      },
      /* Version 4 `anyOf` */
      anyOf (schema) {
        Object.entries(schema.anyOf).forEach(([key, value]) => {
          schema.anyOf[key] = this.expandSchema(value)
        })
      },
      /* Version 4 `dependencies` (schema dependencies) */
      dependencies (schema) {
        Object.entries(schema.dependencies).forEach(([key, value]) => {
          if (typeof value === 'object' && !(Array.isArray(value))) {
            schema.dependencies[key] = this.expandSchema(value)
          }
        })
      },
      /* Version 4 `not` */
      not (schema) {
        schema.not = this.expandSchema(schema.not)
      }
    }

    this._subSchema2 = {
      /* allOf schemas should be merged into the parent */
      allOf (schema, extended) {
        let _extended = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, extended)
        Object.entries(schema.allOf).forEach(([key, value]) => {
          schema.allOf[key] = this.expandRefs(value, true)
          _extended = this.extendSchemas(_extended, this.expandSchema(value))
        })
        delete _extended.allOf
        return _extended
      },
      /* extends schemas should be merged into parent */
      extends (schema, extended) {
        let _extended
        /* If extends is a schema */
        if (!(Array.isArray(schema.extends))) {
          _extended = this.extendSchemas(extended, this.expandSchema(schema.extends))
        } else {
          /* If extends is an array of schemas */
          _extended = schema.extends.reduce((e, s, i) => {
            return this.extendSchemas(e, this.expandSchema(s))
          }, extended)
        }
        delete _extended.extends
        return _extended
      },
      /* parent should be merged into oneOf schemas */
      oneOf (schema, extended) {
        const tmp = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, extended)
        delete tmp.oneOf
        schema.oneOf.reduce((e, s, i) => {
          e.oneOf[i] = this.extendSchemas(this.expandSchema(s), tmp)
          return e
        }, extended)
        return extended
      }
    }
  }

  load (schema, callback, fetchUrl, location) {
    this._loadExternalRefs(schema, () => {
      this._getDefinitions(schema, `${fetchUrl}#/definitions/`)
      callback(this.expandRefs(schema))
    }, fetchUrl, this._getFileBase(location))
  }

  expandRefs (schema, recurseAllOf) {
    const _schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, schema)
    if (!_schema.$ref) return _schema

    const refObj = this.refs_with_info[_schema.$ref]
    delete _schema.$ref
    const fetchUrl = refObj.$ref.startsWith('#')
      ? refObj.fetchUrl
      : ''
    const ref = this._getRef(fetchUrl, refObj)
    if (!this.refs[ref]) { /* if reference not found */
      console.warn(`reference:'${ref}' not found!`)
    } else if (recurseAllOf && Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(this.refs[ref], 'allOf')) {
      const allOf = this.refs[ref].allOf
      Object.keys(allOf).forEach(key => {
        allOf[key] = this.expandRefs(allOf[key], true)
      })
    }

    return this.extendSchemas(_schema, this.expandSchema(this.refs[ref]))
  }

  expandSchema (schema, fileBase) {
    Object.entries(this._subSchema1).forEach(([key, func]) => {
      if (schema[key]) {
        func.call(this, schema)
      }
    })

    let extended = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, schema)

    Object.entries(this._subSchema2).forEach(([key, func]) => {
      if (schema[key]) {
        extended = func.call(this, schema, extended)
      }
    })

    return this.expandRefs(extended)
  }

  _getRef (fetchUrl, refObj) {
    const ref = fetchUrl + refObj

    return this.refs[ref] ? ref : fetchUrl + decodeURIComponent(refObj.$ref)
  }

  _expandSubSchema (subschema) {
    /* Array of types */
    if (Array.isArray(subschema)) return subschema.map(m => typeof value === 'object' ? this.expandSchema(m) : m)

    /* Schema */
    return this.expandSchema(subschema)
  }

  _getDefinitions (schema, path) {
    if (schema.definitions) {
      Object.keys(schema.definitions).forEach(i => {
        this.refs[path + i] = schema.definitions[i]
        if (schema.definitions[i].definitions) {
          this._getDefinitions(schema.definitions[i], `${path + i}/definitions/`)
        }
      })
    }
  }

  _getExternalRefs (schema, fetchUrl) {
    const refs = {}
    const mergeRefs = newrefs => Object.keys(newrefs).forEach(i => { refs[i] = true })

    if (schema.$ref && typeof schema.$ref !== 'object') {
      const refCounter = this.refs_prefix + this.refs_counter++
      if (schema.$ref.substr(0, 1) !== '#' && !this.refs[schema.$ref]) {
        refs[schema.$ref] = true
      }
      this.refs_with_info[refCounter] = { fetchUrl, $ref: schema.$ref }
      schema.$ref = refCounter
    }

    Object.values(schema).forEach(value => {
      if (!value || typeof value !== 'object') return
      if (Array.isArray(value)) {
        Object.values(value).forEach(e => {
          if (e && typeof e === 'object') {
            mergeRefs(this._getExternalRefs(e, fetchUrl))
          }
        })
      } else {
        mergeRefs(this._getExternalRefs(value, fetchUrl))
      }
    })
    return refs
  }

  _getFileBase (location) {
    const { ajaxBase } = this.options

    return typeof ajaxBase === 'undefined' ? this._getFileBaseFromFileLocation(location) : ajaxBase
  }

  _getFileBaseFromFileLocation (fileLocationString) {
    const pathItems = fileLocationString.split('/')
    pathItems.pop()
    return `${pathItems.join('/')}/`
  }

  _isLocalUrl (url, fileBase) {
    return fileBase !== url.substr(0, fileBase.length) &&
      url.substr(0, 4) !== 'http' &&
      url.substr(0, 5) !== 'blob:' &&
      url.substr(0, 5) !== 'data:' &&
      url.substr(0, 1) !== '/'
  }

  _loadExternalRefs (schema, callback, fetchUrl, fileBase) {
    const refs = this._getExternalRefs(schema, fetchUrl)
    let done = 0; let waiting = 0; let callbackFired = false

    Object.keys(refs).forEach(url => {
      if (this.refs[url]) return
      if (!this.options.ajax) throw new Error(`Must set ajax option to true to load external ref ${url}`)
      this.refs[url] = 'loading'
      waiting++

      const fetchUrl = this._isLocalUrl(url, fileBase) ? fileBase + url : url

      const r = new XMLHttpRequest()
      r.overrideMimeType('application/json')
      r.open('GET', fetchUrl, true)
      if (this.options.ajaxCredentials) r.withCredentials = this.options.ajaxCredentials
      r.onreadystatechange = () => {
        if (r.readyState !== 4) return
        /* Request succeeded */
        if (r.status === 200) {
          let response
          try {
            response = JSON.parse(r.responseText)
          } catch (e) {
            window.console.log(e)
            throw new Error(`Failed to parse external ref ${fetchUrl}`)
          }
          if (!(typeof response === 'boolean' || typeof response === 'object') || response === null || Array.isArray(response)) {
            throw new Error(`External ref does not contain a valid schema - ${fetchUrl}`)
          }

          this.refs[url] = response
          const fileBase = this._getFileBaseFromFileLocation(fetchUrl)
          this._getDefinitions(response, `${fetchUrl}#/definitions/`)
          this._loadExternalRefs(response, () => {
            done++
            if (done >= waiting && !callbackFired) {
              callbackFired = true
              callback()
            }
          }, fetchUrl, fileBase)
        } else {
          /* Request failed */
          window.console.log(r)
          throw new Error(`Failed to fetch ref via ajax- ${url}`)
        }
      }
      r.send()
    })

    if (!waiting) {
      callback()
    }
  }

  extendSchemas (obj1, obj2) {
    obj1 = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, obj1)
    obj2 = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, obj2)

    const extended = {}
    const isRequiredOrDefaultProperties = (prop, val) => (prop === 'required' || prop === 'defaultProperties') && typeof val === 'object' && Array.isArray(val)
    const merge = (prop, val) => {
      /* Required and defaultProperties arrays should be unioned together */
      if (isRequiredOrDefaultProperties(prop, val)) {
        /* Union arrays and unique */
        extended[prop] = val.concat(obj2[prop]).reduce((p, c) => {
          if (!p.includes(c)) p.push(c)
          return p
        }, [])
      } else if (prop === 'type' && (typeof val === 'string' || Array.isArray(val))) {
        mergeType(val)
      } else if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
        /* Objects should be recursively merged */
        extended[prop] = this.extendSchemas(val, obj2[prop])
      } else {
        /* Otherwise, use the first value */
        extended[prop] = val
      }
    }

    const mergeType = (val) => {
      /* Type should be intersected and is either an array or string */
      /* Make sure we're dealing with arrays */
      if (typeof val === 'string') val = [val]
      if (typeof obj2.type === 'string') obj2.type = [obj2.type]

      /* If type is only defined in the first schema, keep it */
      if (!obj2.type || !obj2.type.length) {
        extended.type = val
      } else {
        /* If type is defined in both schemas, do an intersect */
        extended.type = val.filter(n => obj2.type.includes(n))
      }

      /* If there's only 1 type and it's a primitive, use a string instead of array */
      if (extended.type.length === 1 && typeof extended.type[0] === 'string') {
        extended.type = extended.type[0]
      } else if (extended.type.length === 0) {
        /* Remove the type property if it's empty */
        delete extended.type
      }
    }

    Object.entries(obj1).forEach(([prop, val]) => {
      /* If this key is also defined in obj2, merge them */
      if (typeof obj2[prop] !== 'undefined') {
        merge(prop, val)
      } else {
        /* Otherwise, just use the one in obj1 */
        extended[prop] = val
      }
    })

    /* Properties in obj2 that aren't in obj1 */
    Object.entries(obj2).forEach(([prop, val]) => {
      if (typeof obj1[prop] === 'undefined') {
        extended[prop] = val
      }
    })
    return extended
  }
}


/***/ }),

/***/ "./src/style.css.js":
/*!**************************!*\
  !*** ./src/style.css.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".je-float-right-linkholder":"float:right;margin-left:10px",".je-modal":"background-color:white;border:1px%20solid%20black;box-shadow:3px%203px%20black;position:absolute;z-index:10",".je-infobutton-icon":"font-size:14px;font-weight:bold;padding:0.25rem;position:relative;display:inline-block",".je-infobutton-tooltip":"font-size:12px;font-weight:normal;font-family:sans-serif;visibility:hidden;background-color:rgba(50%2C%2050%2C%2050%2C%200.75);margin:0%200.25rem;color:%23fafafa;padding:0.5rem%201rem;border-radius:0.25rem;width:20rem;position:absolute",".je-header":"display:inline-block",".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem",".je-checkbox":"display:inline-block;width:auto",".je-checkbox-control--compact":"display:inline-block;margin-right:1rem",".je-radio":"display:inline-block;width:auto",".je-radio-control--compact":"display:inline-block;margin-right:1rem",".je-switcher":"background-color:transparent;display:inline-block;font-style:italic;font-weight:normal;height:auto;width:auto;margin-bottom:0;margin-left:5px;padding:0%200%200%203px",".je-textarea":"width:100%25;height:300px;box-sizing:border-box",".je-range-control":"text-align:center",".je-indented-panel":"padding-left:10px;margin-left:10px;border-left:1px%20solid%20%23ccc",".je-indented-panel--top":"padding-left:10px;margin-left:10px",".je-tabholder":"float:left;width:130px",".je-tabholder .content":"margin-left:120px",".je-tabholder--top":"margin-left:10px",".je-tabholder--clear":"clear:both",".je-tab":"border:1px%20solid%20%23ccc;border-width:1px%200%201px%201px;text-align:center;line-height:30px;border-radius:5px;border-bottom-right-radius:0;border-top-right-radius:0;font-weight:bold;cursor:pointer",".je-tab--top":"float:left;border:1px%20solid%20%23ccc;border-width:1px%201px%200px%201px;text-align:center;line-height:30px;border-radius:5px;padding-left:5px;padding-right:5px;border-bottom-right-radius:0;border-bottom-left-radius:0;font-weight:bold;cursor:pointer",".je-block-link":"display:block",".je-media":"width:100%25",".dx-widget":"font-size:14px",".dx-widget input":"font-size:14px",".dx-widget textarea":"font-size:14px",".dx-theme-material-typography h3":"font-size:16px"});
/* eslint-enable */


/***/ }),

/***/ "./src/templates/default.js":
/*!**********************************!*\
  !*** ./src/templates/default.js ***!
  \**********************************/
/*! exports provided: defaultTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplate", function() { return defaultTemplate; });
const defaultTemplate = () => ({
  compile (template) {
    const matches = template.match(/{{\s*([a-zA-Z0-9\-_ .]+)\s*}}/g)
    const l = matches && matches.length

    /* Shortcut if the template contains no variables */
    if (!l) return () => template

    /* Pre-compute the search/replace functions */
    /* This drastically speeds up template execution */
    const replacements = []
    const getReplacement = (i) => {
      let p = matches[i].replace(/[{}]+/g, '').trim().split('.')
      const n = p.length
      let func

      if (n > 1) {
        let cur
        func = (vars) => {
          cur = vars
          for (i = 0; i < n; i++) {
            cur = cur[p[i]]
            if (!cur) break
          }
          return cur
        }
      } else {
        p = p[0]
        func = vars => vars[p]
      }

      replacements.push({
        s: matches[i],
        r: func
      })
    }
    for (var i = 0; i < l; i++) {
      getReplacement(i)
    }

    /* The compiled function */
    return (vars) => {
      let ret = `${template}`
      let r
      for (i = 0; i < l; i++) {
        r = replacements[i]
        ret = ret.replace(r.s, r.r(vars))
      }
      return ret
    }
  }
})


/***/ }),

/***/ "./src/templates/ejs.js":
/*!******************************!*\
  !*** ./src/templates/ejs.js ***!
  \******************************/
/*! exports provided: ejsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ejsTemplate", function() { return ejsTemplate; });
const ejsTemplate = () => {
  if (!window.EJS) return false

  return {
    compile (template) {
      const compiled = new window.EJS({
        text: template
      })

      return context => compiled.render(context)
    }
  }
}


/***/ }),

/***/ "./src/templates/handlebars.js":
/*!*************************************!*\
  !*** ./src/templates/handlebars.js ***!
  \*************************************/
/*! exports provided: handlebarsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlebarsTemplate", function() { return handlebarsTemplate; });
const handlebarsTemplate = () => window.Handlebars


/***/ }),

/***/ "./src/templates/hogan.js":
/*!********************************!*\
  !*** ./src/templates/hogan.js ***!
  \********************************/
/*! exports provided: hoganTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoganTemplate", function() { return hoganTemplate; });
const hoganTemplate = () => {
  if (!window.Hogan) return false

  return {
    compile (template) {
      const compiled = window.Hogan.compile(template)
      return context => compiled.render(context)
    }
  }
}


/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var _default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.js */ "./src/templates/default.js");
/* harmony import */ var _ejs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ejs.js */ "./src/templates/ejs.js");
/* harmony import */ var _handlebars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlebars.js */ "./src/templates/handlebars.js");
/* harmony import */ var _hogan_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hogan.js */ "./src/templates/hogan.js");
/* harmony import */ var _lodash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lodash.js */ "./src/templates/lodash.js");
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markup.js */ "./src/templates/markup.js");
/* harmony import */ var _mustache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mustache.js */ "./src/templates/mustache.js");
/* harmony import */ var _swig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swig.js */ "./src/templates/swig.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./underscore.js */ "./src/templates/underscore.js");










const templates = {
  default: _default_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplate"],
  ejs: _ejs_js__WEBPACK_IMPORTED_MODULE_1__["ejsTemplate"],
  handlebars: _handlebars_js__WEBPACK_IMPORTED_MODULE_2__["handlebarsTemplate"],
  hogan: _hogan_js__WEBPACK_IMPORTED_MODULE_3__["hoganTemplate"],
  lodash: _lodash_js__WEBPACK_IMPORTED_MODULE_4__["lodashTemplate"],
  markup: _markup_js__WEBPACK_IMPORTED_MODULE_5__["markupTemplate"],
  mustache: _mustache_js__WEBPACK_IMPORTED_MODULE_6__["mustacheTemplate"],
  swig: _swig_js__WEBPACK_IMPORTED_MODULE_7__["swigTemplate"],
  underscore: _underscore_js__WEBPACK_IMPORTED_MODULE_8__["underscoreTemplate"]
}


/***/ }),

/***/ "./src/templates/lodash.js":
/*!*********************************!*\
  !*** ./src/templates/lodash.js ***!
  \*********************************/
/*! exports provided: lodashTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lodashTemplate", function() { return lodashTemplate; });
const lodashTemplate = () => {
  if (!window._) return false

  return {
    compile (template) {
      return context => window._.template(template)(context)
    }
  }
}


/***/ }),

/***/ "./src/templates/markup.js":
/*!*********************************!*\
  !*** ./src/templates/markup.js ***!
  \*********************************/
/*! exports provided: markupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markupTemplate", function() { return markupTemplate; });
const markupTemplate = () => {
  if (!window.Mark || !window.Mark.up) return false

  return {
    compile (template) {
      return context => window.Mark.up(template, context)
    }
  }
}


/***/ }),

/***/ "./src/templates/mustache.js":
/*!***********************************!*\
  !*** ./src/templates/mustache.js ***!
  \***********************************/
/*! exports provided: mustacheTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustacheTemplate", function() { return mustacheTemplate; });
const mustacheTemplate = () => {
  if (!window.Mustache) return false

  return {
    compile (template) {
      return view => window.Mustache.render(template, view)
    }
  }
}


/***/ }),

/***/ "./src/templates/swig.js":
/*!*******************************!*\
  !*** ./src/templates/swig.js ***!
  \*******************************/
/*! exports provided: swigTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swigTemplate", function() { return swigTemplate; });
const swigTemplate = () => window.swig


/***/ }),

/***/ "./src/templates/underscore.js":
/*!*************************************!*\
  !*** ./src/templates/underscore.js ***!
  \*************************************/
/*! exports provided: underscoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underscoreTemplate", function() { return underscoreTemplate; });
const underscoreTemplate = () => {
  if (!window._) return false

  return {
    compile (template) {
      return context => window._.template(template)(context)
    }
  }
}


/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: AbstractTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTheme", function() { return AbstractTheme; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


const matchKey = [
  'matches',
  'webkitMatchesSelector',
  'mozMatchesSelector',
  'msMatchesSelector',
  'oMatchesSelector'].find(key => key in document.documentElement)

class AbstractTheme {
  constructor (jsoneditor, options = { disable_theme_rules: false }) {
    this.jsoneditor = jsoneditor
    Object.keys(options).forEach(key => {
      if (typeof jsoneditor.options[key] !== 'undefined') {
        options[key] = jsoneditor.options[key]
      }
    })
    /* Theme config options that allows changing various aspects of the output */
    this.options = options
  }

  getContainer () {
    return document.createElement('div')
  }

  getFloatRightLinkHolder () {
    const el = document.createElement('div')
    el.classList.add('je-float-right-linkholder')
    return el
  }

  getModal () {
    const el = document.createElement('div')
    el.style.display = 'none'
    el.classList.add('je-modal')
    return el
  }

  getGridContainer () {
    const el = document.createElement('div')
    return el
  }

  getGridRow () {
    const el = document.createElement('div')
    el.classList.add('row')
    return el
  }

  getGridColumn () {
    const el = document.createElement('div')
    return el
  }

  setGridColumnSize (el, size) {
  }

  getLink (text) {
    const el = document.createElement('a')
    el.setAttribute('href', '#')
    el.appendChild(document.createTextNode(text))
    return el
  }

  disableHeader (header) {
    header.style.color = '#ccc'
  }

  disableLabel (label) {
    label.style.color = '#ccc'
  }

  enableHeader (header) {
    header.style.color = ''
  }

  enableLabel (label) {
    label.style.color = ''
  }

  getInfoButton (text) {
    const icon = document.createElement('span')
    icon.innerText = 'ⓘ'
    icon.classList.add('je-infobutton-icon')

    const tooltip = document.createElement('span')
    tooltip.classList.add('je-infobutton-tooltip')
    tooltip.innerText = text
    icon.onmouseover = () => {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = () => {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  }

  getFormInputLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(text))
    if (req) el.classList.add('required')
    return el
  }

  getHeader (text) {
    const el = document.createElement('h3')
    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }
    el.classList.add('je-header')

    return el
  }

  getCheckbox () {
    const el = this.getFormInputField('checkbox')
    el.classList.add('je-checkbox')
    return el
  }

  getCheckboxLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(`\u00A0${text}`))
    if (req) el.classList.add('required')
    return el
  }

  getMultiCheckboxHolder (controls, label, description, infoText) {
    const el = document.createElement('div')
    el.classList.add('control-group')

    if (label) {
      label.style.display = 'block'
      el.appendChild(label)
      if (infoText) label.appendChild(infoText)
    }

    Object.values(controls).forEach(control => {
      control.style.display = 'inline-block'
      control.style.marginRight = '20px'
      el.appendChild(control)
    })

    if (description) el.appendChild(description)

    return el
  }

  getFormCheckboxControl (label, input, compact) {
    const el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      el.classList.add('je-checkbox-control--compact')
    }

    return el
  }

  getFormRadio (attributes) {
    const el = this.getFormInputField('radio')
    Object.keys(attributes).forEach(key => el.setAttribute(key, attributes[key]))
    el.classList.add('je-radio')
    return el
  }

  getFormRadioLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(`\u00A0${text}`))
    if (req) el.classList.add('required')
    return el
  }

  getFormRadioControl (label, input, compact) {
    const el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      el.classList.add('je-radio-control--compact')
    }

    return el
  }

  getSelectInput (options, multiple) {
    const select = document.createElement('select')
    if (options) this.setSelectOptions(select, options)
    return select
  }

  getSwitcher (options) {
    const switcher = this.getSelectInput(options, false)
    switcher.classList.add('je-switcher')
    return switcher
  }

  getSwitcherOptions (switcher) {
    return switcher.getElementsByTagName('option')
  }

  setSwitcherOptions (switcher, options, titles) {
    this.setSelectOptions(switcher, options, titles)
  }

  setSelectOptions (select, options, titles = []) {
    select.innerHTML = ''
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement('option')
      option.setAttribute('value', options[i])
      option.textContent = titles[i] || options[i]
      select.appendChild(option)
    }
  }

  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('je-textarea')
    return el
  }

  getRangeInput (min, max, step) {
    const el = this.getFormInputField('range')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  }

  getStepperButtons (input) {
    const div = document.createElement('div')

    const minusBtn = document.createElement('button')
    minusBtn.setAttribute('type', 'button')
    minusBtn.classList.add('stepper-down')

    const plusBtn = document.createElement('button')
    plusBtn.setAttribute('type', 'button')
    plusBtn.classList.add('stepper-up')

    const readonly = input.getAttribute('readonly')

    if (readonly) {
      minusBtn.setAttribute('disabled', true)
      plusBtn.setAttribute('disabled', true)
    }

    minusBtn.textContent = '-'
    plusBtn.textContent = '+'

    minusBtn.addEventListener('click', () => {
      input.stepDown()
      Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["trigger"])(input, 'change')
    })

    plusBtn.addEventListener('click', () => {
      input.stepUp()
      Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["trigger"])(input, 'change')
    })

    div.appendChild(minusBtn)
    div.appendChild(plusBtn)
    return div
  }

  getRangeOutput (input, startvalue) {
    const output = document.createElement('output')
    output.value = startvalue || 0

    const updateOutput = e => { output.value = e.currentTarget.value }
    input.addEventListener('change', updateOutput, false)
    input.addEventListener('input', updateOutput, false)
    return output
  }

  getRangeControl (input, output) {
    const el = document.createElement('div')
    el.classList.add('je-range-control')
    if (output) el.appendChild(output)
    el.appendChild(input)
    return el
  }

  getFormInputField (type) {
    const el = document.createElement('input')
    el.setAttribute('type', type)
    return el
  }

  afterInputReady (input) {

  }

  getFormControl (label, input, description, infoText) {
    const el = document.createElement('div')
    el.classList.add('form-control')
    if (label) el.appendChild(label)
    if ((input.type === 'checkbox' || input.type === 'radio') && label) {
      input.style.width = 'auto'
      label.insertBefore(input, label.firstChild)
      if (infoText) label.appendChild(infoText)
    } else {
      if (infoText && label) label.appendChild(infoText)
      el.appendChild(input)
    }

    if (description) el.appendChild(description)
    return el
  }

  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-indented-panel')
    return el
  }

  getTopIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-indented-panel--top')
    return el
  }

  getChildEditorHolder () {
    return document.createElement('div')
  }

  getDescription (text) {
    const el = document.createElement('p')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  }

  getCheckboxDescription (text) {
    return this.getDescription(text)
  }

  getFormInputDescription (text) {
    return this.getDescription(text)
  }

  getButtonHolder () {
    return document.createElement('span')
  }

  getHeaderButtonHolder () {
    return this.getButtonHolder()
  }

  getFormButtonHolder (buttonAlign) {
    return this.getButtonHolder()
  }

  getButton (text, icon, title) {
    const el = document.createElement('button')
    el.type = 'button'
    this.setButtonText(el, text, icon, title)
    return el
  }

  getFormButton (text, icon, title) {
    return this.getButton(text, icon, title)
  }

  setButtonText (button, text, icon, title) {
    /* Clear previous contents. https://jsperf.com/innerhtml-vs-removechild/37 */
    while (button.firstChild) {
      button.removeChild(button.firstChild)
    }
    if (icon) {
      button.appendChild(icon)
      text = ` ${text}`
    }
    if (!this.jsoneditor.options.iconlib || !this.jsoneditor.options.remove_button_labels || !icon) {
      const spanEl = document.createElement('span')
      spanEl.appendChild(document.createTextNode(text))
      button.appendChild(spanEl)
    }
    if (title) button.setAttribute('title', title)
  }

  /* Table functions */
  getTable () {
    return document.createElement('table')
  }

  getTableRow () {
    return document.createElement('tr')
  }

  getTableHead () {
    return document.createElement('thead')
  }

  getTableBody () {
    return document.createElement('tbody')
  }

  getTableHeaderCell (text) {
    const el = document.createElement('th')
    el.textContent = text
    return el
  }

  getTableCell () {
    const el = document.createElement('td')
    return el
  }

  getErrorMessage (text) {
    const el = document.createElement('p')
    el.style = el.style || {}
    el.style.color = 'red'
    el.appendChild(document.createTextNode(text))
    return el
  }

  addInputError (input, text) {
  }

  removeInputError (input) {
  }

  addTableRowError (row) {
  }

  removeTableRowError (row) {
  }

  getTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<div class='je-tabholder tabs'></div><div class='content' id='${pName}'></div><div class='je-tabholder--clear'></div>`
    return el
  }

  getTopTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<div class='tabs je-tabholder--top'></div><div class='je-tabholder--clear'></div><div class='content' id='${pName}'></div>`
    return el
  }

  applyStyles (el, styles) {
    Object.keys(styles).forEach(i => (el.style[i] = styles[i]))
  }

  closest (elem, selector) {
    while (elem && elem !== document) {
      if (elem[matchKey]) {
        if (elem[matchKey](selector)) {
          return elem
        } else {
          elem = elem.parentNode
        }
      } else {
        return false
      }
    }
    return false
  }

  insertBasicTopTab (tab, newTabsHolder) {
    newTabsHolder.firstChild.insertBefore(tab, newTabsHolder.firstChild.firstChild)
  }

  getTab (span, tabId) {
    const el = document.createElement('div')
    el.appendChild(span)
    el.id = tabId
    el.classList.add('je-tab')
    return el
  }

  getTopTab (span, tabId) {
    const el = document.createElement('div')
    el.appendChild(span)
    el.id = tabId
    el.classList.add('je-tab--top')
    return el
  }

  getTabContentHolder (tabHolder) {
    return tabHolder.children[1]
  }

  getTopTabContentHolder (tabHolder) {
    return tabHolder.children[1]
  }

  getTabContent () {
    return this.getIndentedPanel()
  }

  getTopTabContent () {
    return this.getTopIndentedPanel()
  }

  markTabActive (row) {
    this.applyStyles(row.tab, {
      opacity: 1,
      background: 'white'
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  }

  markTabInactive (row) {
    this.applyStyles(row.tab, {
      opacity: 0.5,
      background: ''
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  }

  addTab (holder, tab) {
    holder.children[0].appendChild(tab)
  }

  addTopTab (holder, tab) {
    holder.children[0].appendChild(tab)
  }

  getBlockLink () {
    const link = document.createElement('a')
    link.classList.add('je-block-link')
    return link
  }

  getBlockLinkHolder () {
    const el = document.createElement('div')
    return el
  }

  getLinksHolder () {
    const el = document.createElement('div')
    return el
  }

  createMediaLink (holder, link, media) {
    holder.appendChild(link)
    media.classList.add('je-media')
    holder.appendChild(media)
  }

  createImageLink (holder, link, image) {
    holder.appendChild(link)
    link.appendChild(image)
  }

  getFirstTab (holder) {
    return holder.firstChild.firstChild
  }

  getInputGroup (input, buttons) {
    return undefined
  }

  cleanText (txt) {
    /* Clean out HTML tags from txt */
    const tmp = document.createElement('div')
    tmp.innerHTML = txt
    return (tmp.textContent || tmp.innerText)
  }

  getDropZone (text) {
    const el = document.createElement('div')
    el.setAttribute('data-text', text)
    el.classList.add('je-dropzone')
    return el
  }

  /* file is an object with properties: name, type, mimeType, size amd formattedSize */
  getUploadPreview (file, uploadButton, data) {
    const preview = document.createElement('div')
    preview.classList.add('je-upload-preview')

    if (file.mimeType.substr(0, 5) === 'image') {
      const img = document.createElement('img')
      img.src = data
      preview.appendChild(img)
    }
    const info = document.createElement('div')
    info.innerHTML += `<strong>Name:</strong> ${file.name}<br><strong>Type:</strong> ${file.type}<br><strong>Size:</strong> ${file.formattedSize}`
    preview.appendChild(info)

    preview.appendChild(uploadButton)

    const clear = document.createElement('div')
    clear.style.clear = 'left'
    preview.appendChild(clear)

    return preview
  }

  getProgressBar () {
    const max = 100; const start = 0

    const progressBar = document.createElement('progress')
    progressBar.setAttribute('max', max)
    progressBar.setAttribute('value', start)
    return progressBar
  }

  updateProgressBar (progressBar, progress) {
    if (!progressBar) return
    progressBar.setAttribute('value', progress)
  }

  updateProgressBarUnknown (progressBar) {
    if (!progressBar) return
    progressBar.removeAttribute('value')
  }
}


/***/ }),

/***/ "./src/themes/barebones.css.js":
/*!*************************************!*\
  !*** ./src/themes/barebones.css.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem",".je-dropzone":"position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s",".je-dropzone:before":"position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)",".je-dropzone.valid-dropzone":"background:green",".je-dropzone.invalid-dropzone":"background:red"});
/* eslint-enable */


/***/ }),

/***/ "./src/themes/barebones.js":
/*!*********************************!*\
  !*** ./src/themes/barebones.js ***!
  \*********************************/
/*! exports provided: barebonesTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barebonesTheme", function() { return barebonesTheme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _barebones_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barebones.css.js */ "./src/themes/barebones.css.js");



class barebonesTheme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  addInputError (input, text) {
    if (!input.errmsg) {
      const group = this.closest(input, '.form-control')
      input.errmsg = document.createElement('div')
      input.errmsg.setAttribute('class', 'errmsg')
      group.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = 'block'
    }

    input.errmsg.innerHTML = ''
    input.errmsg.appendChild(document.createTextNode(text))
  }

  removeInputError (input) {
    if (input.style) {
      input.style.borderColor = ''
    }
    if (input.errmsg) input.errmsg.style.display = 'none'
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
barebonesTheme.rules = _barebones_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/themes/bootstrap3.css":
/*!***********************************!*\
  !*** ./src/themes/bootstrap3.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap3.js ***!
  \**********************************/
/*! exports provided: bootstrap3Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap3Theme", function() { return bootstrap3Theme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _bootstrap3_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap3.css */ "./src/themes/bootstrap3.css");
/* harmony import */ var _bootstrap3_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap3_css__WEBPACK_IMPORTED_MODULE_1__);



class bootstrap3Theme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  getSelectInput (options, multiple) {
    const el = super.getSelectInput(options)
    el.classList.add('form-control')
    /* el.style.width = 'auto'; */
    return el
  }

  setGridColumnSize (el, size, offset) {
    el.classList.add(`col-md-${size}`)
    if (offset) {
      el.classList.add(`col-md-offset-${offset}`)
    }
  }

  afterInputReady (input) {
    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
    if (this.queuedInputErrorText) {
      const text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }

    /* TODO: use bootstrap slider */
  }

  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('form-control')
    return el
  }

  getRangeInput (min, max, step) {
    /* TODO: use better slider */
    return super.getRangeInput(min, max, step)
  }

  getFormInputField (type) {
    const el = super.getFormInputField(type)
    if (type !== 'checkbox' && type !== 'radio') {
      el.classList.add('form-control')
    }
    return el
  }

  getFormControl (label, input, description) {
    const group = document.createElement('div')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      group.classList.add(input.type)
      label.insertBefore(input, label.firstChild)
      group.appendChild(label)
    } else {
      group.classList.add('form-group')
      if (label) {
        label.classList.add('control-label')
        group.appendChild(label)
      }
      group.appendChild(input)
    }

    if (description) group.appendChild(description)

    return group
  }

  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('well', 'well-sm')
    el.style.paddingBottom = 0
    return el
  }

  getInfoButton (text) {
    const icon = document.createElement('span')
    icon.classList.add('glyphicon', 'glyphicon-info-sign', 'pull-right')
    icon.style.padding = '.25rem'
    icon.style.position = 'relative'
    icon.style.display = 'inline-block'

    const tooltip = document.createElement('span')
    tooltip.style['font-family'] = 'sans-serif'
    tooltip.style.visibility = 'hidden'
    tooltip.style['background-color'] = 'rgba(50, 50, 50, .75)'
    tooltip.style.margin = '0 .25rem'
    tooltip.style.color = '#FAFAFA'
    tooltip.style.padding = '.5rem 1rem'
    tooltip.style['border-radius'] = '.25rem'
    tooltip.style.width = '25rem'
    tooltip.style.transform = 'translateX(-27rem) translateY(-.5rem)'
    tooltip.style.position = 'absolute'
    tooltip.innerText = text
    icon.onmouseover = () => {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = () => {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  }

  getFormInputDescription (text) {
    const el = document.createElement('p')
    el.classList.add('help-block')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    el.style.marginLeft = '10px'
    return el
  }

  getButtonHolder () {
    const el = document.createElement('span')
    el.classList.add('btn-group')
    return el
  }

  getButton (text, icon, title) {
    const el = super.getButton(text, icon, title)
    el.classList.add('btn', 'btn-default')
    return el
  }

  getTable () {
    const el = document.createElement('table')
    el.classList.add('table', 'table-bordered')
    el.style.width = 'auto'
    el.style.maxWidth = 'none'
    return el
  }

  addInputError (input, text) {
    if (!input.controlgroup) {
      this.queuedInputErrorText = text
      return
    }
    input.controlgroup.classList.add('has-error')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('help-block', 'errormsg')
      input.controlgroup.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  }

  removeInputError (input) {
    if (!input.controlgroup) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.controlgroup.classList.remove('has-error')
  }

  getTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<ul class='col-md-2 nav nav-pills nav-stacked' id='${pName}' role='tablist'></ul><div class='col-md-10 tab-content well well-small'  id='${pName}'></div>`
    return el
  }

  getTopTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<ul class='nav nav-tabs' id='${pName}' role='tablist'></ul><div class='tab-content well well-small'  id='${pName}'></div>`
    return el
  }

  getTab (text, tabId) {
    const li = document.createElement('li')
    li.setAttribute('role', 'presentation')
    const a = document.createElement('a')
    a.setAttribute('href', `#${tabId}`)
    a.appendChild(text)
    a.setAttribute('aria-controls', tabId)
    a.setAttribute('role', 'tab')
    a.setAttribute('data-toggle', 'tab')
    li.appendChild(a)
    return li
  }

  getTopTab (text, tabId) {
    const li = document.createElement('li')
    li.setAttribute('role', 'presentation')
    const a = document.createElement('a')
    a.setAttribute('href', `#${tabId}`)
    a.appendChild(text)
    a.setAttribute('aria-controls', tabId)
    a.setAttribute('role', 'tab')
    a.setAttribute('data-toggle', 'tab')
    li.appendChild(a)
    return li
  }

  getTabContent () {
    const el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  getTopTabContent () {
    const el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  markTabActive (row) {
    row.tab.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('active')
    } else {
      row.container.classList.add('active')
    }
  }

  markTabInactive (row) {
    row.tab.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('active')
    } else {
      row.container.classList.remove('active')
    }
  }

  getProgressBar () {
    const min = 0; const max = 100; const start = 0

    const container = document.createElement('div')
    container.classList.add('progress')

    const bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = `${start}%`
    container.appendChild(bar)

    return container
  }

  updateProgressBar (progressBar, progress) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    const percentage = `${progress}%`
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  }

  updateProgressBarUnknown (progressBar) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    progressBar.classList.add('progress', 'progress-striped', 'active')
    bar.removeAttribute('aria-valuenow')
    bar.style.width = '100%'
    bar.innerHTML = ''
  }

  getInputGroup (input, buttons) {
    if (!input) return

    const inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group')
    inputGroupContainer.appendChild(input)

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-btn')
    inputGroupContainer.appendChild(inputGroup)

    for (let i = 0; i < buttons.length; i++) {
      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
bootstrap3Theme.rules = _bootstrap3_css__WEBPACK_IMPORTED_MODULE_1___default.a


/***/ }),

/***/ "./src/themes/bootstrap4.css.js":
/*!**************************************!*\
  !*** ./src/themes/bootstrap4.css.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".jsoneditor-twbs4-text-button":"background:none;padding:0;border:0;color:currentColor","td > .form-group":"margin-bottom:0",".json-editor-btn-upload":"margin-top:1rem",".je-noindent .card":"padding:0;border:0",".je-tooltip:hover::before":"display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em",".je-tooltip:hover::after":"display:block;position:absolute;font-size:0.8em;color:%23fff",".select2-container--default .select2-selection--single":"height:calc(1.5em%20%2B%200.75rem%20%2B%202px)",".select2-container--default   .select2-selection--single   .select2-selection__arrow":"height:calc(1.5em%20%2B%200.75rem%20%2B%202px)",".select2-container--default   .select2-selection--single   .select2-selection__rendered":"line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)",".selectize-control.form-control":"padding:0",".selectize-dropdown.form-control":"padding:0;height:auto",".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem",".je-dropzone":"position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s",".je-dropzone:before":"position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)",".je-dropzone.valid-dropzone":"background:green",".je-dropzone.invalid-dropzone":"background:red"});
/* eslint-enable */


/***/ }),

/***/ "./src/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap4.js ***!
  \**********************************/
/*! exports provided: bootstrap4Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap4Theme", function() { return bootstrap4Theme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _bootstrap4_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap4.css.js */ "./src/themes/bootstrap4.css.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");




/* Theme config options that allows changing various aspects of the output */
const options = {
  disable_theme_rules: false,
  input_size: 'normal', /* Size of input and select elements. "small", "normal", "large" */
  custom_forms: false, /* use twbs custom form stylings */
  object_indent: true, /* Indent nested object elements (use nested .card layout) */
  object_background: 'bg-light', /* Bootstrap 4 card background modifier class (https://getbootstrap.com/docs/4.1/getting-started/introduction/) */
  object_text: '', /* Bootstrap 4 card tect color modifier class (https://getbootstrap.com/docs/4.1/getting-started/introduction/) */
  table_border: false, /* Add border to array "table" row and cells */
  table_zebrastyle: false, /* Add "zebra style" to array "table" rows */
  tooltip: 'bootstrap' /* how to display tooltips (infoText). Can be `browser` for native `title`, `css` for simple CSS Styling, or `bootstrap` for TWBS/Popper.js handling */
}

class bootstrap4Theme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  constructor (jsoneditor) {
    super(jsoneditor, options)
  }

  getSelectInput (options, multiple) {
    const el = super.getSelectInput(options)
    el.classList.add('form-control')

    if (this.options.custom_forms === false) {
      if (this.options.input_size === 'small') el.classList.add('form-control-sm')
      if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    } else {
      el.classList.remove('form-control')
      el.classList.add('custom-select')
      if (this.options.input_size === 'small') el.classList.add('custom-select-sm')
      if (this.options.input_size === 'large') el.classList.add('custom-select-lg')
    }

    return el
  }

  getContainer () {
    const el = document.createElement('div')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  }

  setGridColumnSize (el, size, offset) {
    el.classList.add(`col-md-${size}`)

    if (offset) {
      el.classList.add(`offset-md-${offset}`)
    }
  }

  afterInputReady (input) {
    if (input.controlgroup) return

    /* set id/for */
    /* is not working for: [type=file], [type=checkbox] */
    const id = input.name
    input.id = id
    /* 2x parentNode, b/c range input has an <div> wrapper */
    const label = input.parentNode.parentNode.getElementsByTagName('label')[0]
    if (label) {
      label.htmlFor = id
    }

    input.controlgroup = this.closest(input, '.form-group')
  }

  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('form-control')
    if (this.options.input_size === 'small') el.classList.add('form-control-sm')
    if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    return el
  }

  getRangeInput (min, max, step) {
    const el = super.getRangeInput(min, max, step)

    if (this.options.custom_forms === true) {
      el.classList.remove('form-control')
      el.classList.add('custom-range')
    }

    return el
  }

  getStepperButtons (input) {
    const inputGroup = document.createElement('div')
    const prepend = document.createElement('div')
    const append = document.createElement('div')

    const minusBtn = document.createElement('button')
    minusBtn.setAttribute('type', 'button')

    const plusBtn = document.createElement('button')
    plusBtn.setAttribute('type', 'button')

    inputGroup.appendChild(prepend)
    inputGroup.appendChild(input)
    inputGroup.appendChild(append)
    prepend.appendChild(minusBtn)
    append.appendChild(plusBtn)

    inputGroup.classList.add('input-group')
    prepend.classList.add('input-group-prepend')
    append.classList.add('input-group-append')
    minusBtn.classList.add('btn')
    minusBtn.classList.add('btn-secondary')
    minusBtn.classList.add('stepper-down')
    plusBtn.classList.add('btn')
    plusBtn.classList.add('btn-secondary')
    plusBtn.classList.add('stepper-up')

    const readonly = input.getAttribute('readonly')

    if (readonly) {
      minusBtn.setAttribute('disabled', true)
      plusBtn.setAttribute('disabled', true)
    }

    minusBtn.textContent = '-'
    plusBtn.textContent = '+'

    minusBtn.addEventListener('click', () => {
      input.stepDown()
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["trigger"])(input, 'change')
    })

    plusBtn.addEventListener('click', () => {
      input.stepUp()
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["trigger"])(input, 'change')
    })

    return inputGroup
  }

  getFormInputField (type) {
    const el = super.getFormInputField(type)
    if (type !== 'checkbox' && type !== 'radio' && type !== 'file') {
      el.classList.add('form-control')
      if (this.options.input_size === 'small') el.classList.add('form-control-sm')
      if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    }

    if (type === 'file') {
      /* custom_form is not used on files, would be a bit ticky since we need more */
      /* markup. Also it contains language strings which would need be translateable? */
      /* and most of all, w/o JavaScript teh name of the file can't be displayed. */
      el.classList.add('form-control-file')
    }

    return el
  }

  getFormControl (label, input, description, infoText) {
    const group = document.createElement('div')
    group.classList.add('form-group')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      const check = document.createElement('div')

      if (this.options.custom_forms === false) {
        check.classList.add('form-check')
        input.classList.add('form-check-input')
        label.classList.add('form-check-label')
      } else {
        check.classList.add('custom-control')
        input.classList.add('custom-control-input')
        label.classList.add('custom-control-label')

        if (input.type === 'checkbox') {
          check.classList.add('custom-checkbox')
        } else {
          check.classList.add('custom-radio')
        }
      }

      const unique = (Date.now() * Math.random()).toFixed(0)
      input.setAttribute('id', unique)
      label.setAttribute('for', unique)

      check.appendChild(input)
      check.appendChild(label)
      if (infoText) check.appendChild(infoText)

      group.appendChild(check)
    } else {
      if (label) {
        group.appendChild(label)

        if (infoText) group.appendChild(infoText)
      }

      group.appendChild(input)
    }

    if (description) {
      group.appendChild(description)
    }

    return group
  }

  getInfoButton (text) {
    const button = document.createElement('button') /* shoud be a <button> but no fitting tbws style... */
    button.type = 'button'
    button.classList.add('ml-3', 'jsoneditor-twbs4-text-button')
    button.setAttribute('data-toggle', 'tooltip')
    button.setAttribute('data-placement', 'auto')
    button.title = text

    const icon = document.createTextNode('ⓘ')
    button.appendChild(icon)

    if (this.options.tooltip === 'bootstrap') {
      if (window.jQuery && window.jQuery().tooltip) {
        window.jQuery(button).tooltip()
      } else {
        console.warn('Could not find popper jQuery plugin of Bootstrap.')
      }
    } else if (this.options.tooltip === 'css') {
      button.classList.add('je-tooltip')
    } /* else -> nothing todo for native [title] handling */

    return button
  }

  /**
   * Generates a checkbox...
   *
   * Overwriten from master theme to get rid of inline styles.
   */
  getCheckbox () {
    const el = this.getFormInputField('checkbox')
    return el
  }

  /**
   * Multiple checkboxes in a row.
   *
   */
  getMultiCheckboxHolder (controls, label, description, infoText) {
    const el = document.createElement('div')
    el.classList.add('form-group')

    if (label) {
      el.appendChild(label)

      if (infoText) {
        label.appendChild(infoText)
      }
    }

    /* for inline view we need an container so it doesnt wrap in the "row" of the <label> */
    const container = document.createElement('div')

    Object.values(controls).forEach(c => {
      /* controls are already parsed by getFormControl() so they have an .form-group */
      /* wrapper we need to get rid of... */
      const ctrl = c.firstChild

      /* we don't know if this should be an normal / compact view */
      /* if (this.options.custom_forms === false) {
        ctrl.classList.add('form-check-inline')
      } else {
        ctrl.classList.add('custom-control-inline')
      } */
      container.appendChild(ctrl)
    })

    el.appendChild(container)

    if (description) el.appendChild(description)

    return el
  }

  /**
   * Single radio element
   */
  getFormRadio (attributes) {
    const el = this.getFormInputField('radio')

    for (const key in attributes) {
      el.setAttribute(key, attributes[key])
    }

    if (this.options.custom_forms === false) {
      el.classList.add('form-check-input')
    } else {
      el.classList.add('custom-control-input')
    }

    return el
  }

  /**
   * Add the <label> for the single radio from getFormRadio()
   *
   */
  getFormRadioLabel (text, req) {
    const el = document.createElement('label')

    if (this.options.custom_forms === false) {
      el.classList.add('form-check-label')
    } else {
      el.classList.add('custom-control-label')
    }

    el.appendChild(document.createTextNode(text))
    return el
  }

  /**
   * Stack the radios from getFormRadio()/getFormRadioLabel()
   *
   */
  getFormRadioControl (label, input, compact) {
    const el = document.createElement('div')

    if (this.options.custom_forms === false) {
      el.classList.add('form-check')
    } else {
      el.classList.add('custom-control', 'custom-radio')
    }

    el.appendChild(input)
    el.appendChild(label)

    if (compact) {
      if (this.options.custom_forms === false) {
        el.classList.add('form-check-inline')
      } else {
        el.classList.add('custom-control-inline')
      }
    }

    return el
  }

  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('card', 'card-body', 'mb-3')

    if (this.options.object_background) {
      el.classList.add(this.options.object_background)
    }

    if (this.options.object_text) {
      el.classList.add(this.options.object_text)
    }

    /* for better twbs card styling we should be able to return a nested div */

    return el
  }

  getFormInputDescription (text) {
    const el = document.createElement('small')
    el.classList.add('form-text')

    if (window.DOMPurify) {
      el.innerHTML = window.DOMPurify.sanitize(text)
    } else {
      el.textContent = this.cleanText(text)
    }

    return el
  }

  getHeader (text) {
    /* var cardHeader = document.createElement('div') */
    /* cardHeader.classList.add('card-header') */

    const el = document.createElement('h3')
    el.classList.add('card-title')

    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }

    el.style.display = 'inline-block'

    /* cardHeader.appendChild(el) */

    return el
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()

    return el
  }

  getButtonHolder () {
    const el = document.createElement('span')
    el.classList.add('btn-group')
    return el
  }

  getFormButtonHolder (buttonAlign) {
    const el = this.getButtonHolder()
    el.classList.add('d-block')

    if (buttonAlign === 'center') el.classList.add('text-center')
    else if (buttonAlign === 'right') el.classList.add('text-right')

    return el
  }

  getButton (text, icon, title) {
    const el = super.getButton(text, icon, title)
    el.classList.add('btn', 'btn-secondary', 'btn-sm')
    return el
  }

  getTable () {
    const el = document.createElement('table')
    el.classList.add('table', 'table-sm')

    if (this.options.table_border) {
      el.classList.add('table-bordered')
    }

    if (this.options.table_zebrastyle) {
      el.classList.add('table-striped')
    }

    return el
  }

  getErrorMessage (text) {
    const el = document.createElement('div')
    el.classList.add('alert', 'alert-danger')
    el.setAttribute('role', 'alert')
    el.appendChild(document.createTextNode(text))
    return el
  }

  /**
   * input validation on <input>
   */
  addInputError (input, text) {
    if (!input.controlgroup) return

    input.classList.add('is-invalid')

    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('invalid-feedback')
      input.controlgroup.appendChild(input.errmsg)
      input.errmsg.style.display = 'block'
    }

    input.errmsg.style.display = 'block'
    input.errmsg.textContent = text
  }

  removeInputError (input) {
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.classList.remove('is-invalid')
  }

  getTabHolder (propertyName) {
    const el = document.createElement('div')
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    el.innerHTML = `<div class='col-md-2' id='${pName}'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='${pName}'></div></div>`
    el.classList.add('row')
    return el
  }

  addTab (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  }

  getTabContentHolder (tabHolder) {
    return tabHolder.children[1].children[0]
  }

  getTopTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName

    const el = document.createElement('div')
    el.classList.add('card')

    el.innerHTML = `<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='${pName}'></ul></div><div class='card-body'><div class='tab-content' id='${pName}'></div></div>`

    return el
  }

  getTab (text, tabId) {
    const liel = document.createElement('li')
    liel.classList.add('nav-item')

    const ael = document.createElement('a')
    ael.classList.add('nav-link')
    ael.setAttribute('href', `#${tabId}`)
    ael.setAttribute('data-toggle', 'tab')
    ael.appendChild(text)

    liel.appendChild(ael)

    return liel
  }

  getTopTab (text, tabId) {
    const el = document.createElement('li')
    el.classList.add('nav-item')

    const a = document.createElement('a')
    a.classList.add('nav-link')
    a.setAttribute('href', `#${tabId}`)
    a.setAttribute('data-toggle', 'tab')
    a.appendChild(text)

    el.appendChild(a)

    return el
  }

  getTabContent () {
    const el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  getTopTabContent () {
    const el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  markTabActive (row) {
    row.tab.firstChild.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('active')
    } else {
      row.container.classList.add('active')
    }
  }

  markTabInactive (row) {
    row.tab.firstChild.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('active')
    } else {
      row.container.classList.remove('active')
    }
  }

  insertBasicTopTab (tab, newTabsHolder) {
    newTabsHolder.children[0].children[0].insertBefore(tab, newTabsHolder.children[0].children[0].firstChild)
  }

  addTopTab (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  }

  getTopTabContentHolder (tabHolder) {
    return tabHolder.children[1].children[0]
  }

  getFirstTab (holder) {
    return holder.firstChild.firstChild.firstChild
  }

  getProgressBar () {
    const min = 0
    const max = 100
    const start = 0

    const container = document.createElement('div')
    container.classList.add('progress')

    const bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = `${start}%`
    container.appendChild(bar)

    return container
  }

  updateProgressBar (progressBar, progress) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    const percentage = `${progress}%`
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  }

  updateProgressBarUnknown (progressBar) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    progressBar.classList.add('progress', 'progress-striped', 'active')
    bar.removeAttribute('aria-valuenow')
    bar.style.width = '100%'
    bar.innerHTML = ''
  }

  getBlockLink () {
    const link = document.createElement('a')
    link.classList.add('mb-3', 'd-inline-block')
    return link
  }

  /**
   * Link after successfull upload
   */
  getLinksHolder () {
    const el = document.createElement('div')
    return el
  }

  getInputGroup (input, buttons) {
    if (!input) return

    const inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group')

    inputGroupContainer.appendChild(input)

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-append')
    inputGroupContainer.appendChild(inputGroup)

    for (let i = 0; i < buttons.length; i++) {
      /* this uses the getButton() wrapper, so we have to remove the panel/ctrl spacing for this case */
      buttons[i].classList.remove('mr-2', 'btn-secondary')
      buttons[i].classList.add('btn-outline-secondary')

      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
bootstrap4Theme.rules = _bootstrap4_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/themes/html.css.js":
/*!********************************!*\
  !*** ./src/themes/html.css.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".je-form-input-label":"display:block;margin-bottom:3px;font-weight:bold",".je-form-input-description":"display:inline-block;margin:0;font-size:0.8em;font-style:italic",".je-indented-panel":"padding:5px;margin:10px;border-radius:3px;border:1px%20solid%20%23ddd",".je-child-editor-holder":"margin-bottom:8px",".je-header-button-holder":"display:inline-block;margin-left:10px;font-size:0.8em;vertical-align:middle",".je-table":"margin-bottom:5px;border-bottom:1px%20solid%20%23ccc",".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem",".je-dropzone":"position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s",".je-dropzone:before":"position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)",".je-dropzone.valid-dropzone":"background:green",".je-dropzone.invalid-dropzone":"background:red"});
/* eslint-enable */


/***/ }),

/***/ "./src/themes/html.js":
/*!****************************!*\
  !*** ./src/themes/html.js ***!
  \****************************/
/*! exports provided: htmlTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTheme", function() { return htmlTheme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _html_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.css.js */ "./src/themes/html.css.js");



class htmlTheme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  getFormInputLabel (text, req) {
    const el = super.getFormInputLabel(text, req)
    el.classList.add('je-form-input-label')
    return el
  }

  getFormInputDescription (text) {
    const el = super.getFormInputDescription(text)
    el.classList.add('je-form-input-label')
    return el
  }

  getIndentedPanel () {
    const el = super.getIndentedPanel()
    el.classList.add('je-indented-panel')
    return el
  }

  getTopIndentedPanel () {
    return this.getIndentedPanel()
  }

  getChildEditorHolder () {
    const el = super.getChildEditorHolder()
    el.classList.add('je-child-editor-holder')
    return el
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    el.classList.add('je-header-button-holder')
    return el
  }

  getTable () {
    const el = super.getTable()
    el.classList.add('je-table')
    return el
  }

  addInputError (input, text) {
    input.style.borderColor = 'red'

    if (!input.errmsg) {
      const group = this.closest(input, '.form-control')
      input.errmsg = document.createElement('div')
      input.errmsg.setAttribute('class', 'errmsg')
      input.errmsg.style = input.errmsg.style || {}
      input.errmsg.style.color = 'red'
      group.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = 'block'
    }

    input.errmsg.innerHTML = ''
    input.errmsg.appendChild(document.createTextNode(text))
  }

  removeInputError (input) {
    if (input.style) {
      input.style.borderColor = ''
    }
    if (input.errmsg) input.errmsg.style.display = 'none'
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
htmlTheme.rules = _html_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/themes/index.js":
/*!*****************************!*\
  !*** ./src/themes/index.js ***!
  \*****************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./src/themes/html.js");
/* harmony import */ var _bootstrap3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap3.js */ "./src/themes/bootstrap3.js");
/* harmony import */ var _bootstrap4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap4.js */ "./src/themes/bootstrap4.js");
/* harmony import */ var _jqueryui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jqueryui.js */ "./src/themes/jqueryui.js");
/* harmony import */ var _barebones_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barebones.js */ "./src/themes/barebones.js");
/* harmony import */ var _spectre_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spectre.js */ "./src/themes/spectre.js");
/* harmony import */ var _tailwind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tailwind.js */ "./src/themes/tailwind.js");


// import  { bootstrap2Theme } from  './bootstrap2'


// import  { foundationTheme, foundation3Theme, foundation4Theme, foundation5Theme, foundation6Theme } from  './foundation.js'


// import  { materializeTheme } from  './materialize'



const themes = {
  html: _html_js__WEBPACK_IMPORTED_MODULE_0__["htmlTheme"],
  // bootstrap2: bootstrap2Theme,
  bootstrap3: _bootstrap3_js__WEBPACK_IMPORTED_MODULE_1__["bootstrap3Theme"],
  bootstrap4: _bootstrap4_js__WEBPACK_IMPORTED_MODULE_2__["bootstrap4Theme"],
  // foundation: foundationTheme,
  // foundation3: foundation3Theme,
  // foundation4: foundation4Theme,
  // foundation5: foundation5Theme,
  // foundation6: foundation6Theme,
  jqueryui: _jqueryui_js__WEBPACK_IMPORTED_MODULE_3__["jqueryuiTheme"],
  barebones: _barebones_js__WEBPACK_IMPORTED_MODULE_4__["barebonesTheme"],
  // materialize: materializeTheme,
  spectre: _spectre_js__WEBPACK_IMPORTED_MODULE_5__["spectreTheme"],
  tailwind: _tailwind_js__WEBPACK_IMPORTED_MODULE_6__["tailwindTheme"]
}


/***/ }),

/***/ "./src/themes/jqueryui.js":
/*!********************************!*\
  !*** ./src/themes/jqueryui.js ***!
  \********************************/
/*! exports provided: jqueryuiTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuiTheme", function() { return jqueryuiTheme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");


class jqueryuiTheme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  getTable () {
    const el = super.getTable()
    el.setAttribute('cellpadding', 5)
    el.setAttribute('cellspacing', 0)
    return el
  }

  getTableHeaderCell (text) {
    const el = super.getTableHeaderCell(text)
    el.classList.add('ui-state-active')
    el.style.fontWeight = 'bold'
    return el
  }

  getTableCell () {
    const el = super.getTableCell()
    el.classList.add('ui-widget-content')
    return el
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    el.style.marginLeft = '10px'
    el.style.fontSize = '.6em'
    el.style.display = 'inline-block'
    return el
  }

  getFormInputDescription (text) {
    const el = this.getDescription(text)
    el.style.marginLeft = '10px'
    el.style.display = 'inline-block'
    return el
  }

  getFormControl (label, input, description, infoText) {
    const el = super.getFormControl(label, input, description, infoText)
    if (input.type === 'checkbox') {
      el.style.lineHeight = '25px'

      el.style.padding = '3px 0'
    } else {
      el.style.padding = '4px 0 8px 0'
    }
    return el
  }

  getDescription (text) {
    const el = document.createElement('span')
    el.style.fontSize = '.8em'
    el.style.fontStyle = 'italic'
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  }

  getButtonHolder () {
    const el = document.createElement('div')
    el.classList.add('ui-buttonset')
    el.style.fontSize = '.7em'
    return el
  }

  getFormInputLabel (text, req) {
    const el = document.createElement('label')
    el.style.fontWeight = 'bold'
    el.style.display = 'block'
    el.textContent = text
    if (req) el.classList.add('required')
    return el
  }

  getButton (text, icon, title) {
    const button = document.createElement('button')
    button.classList.add('ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all')

    /* Icon only */
    if (icon && !text) {
      button.classList.add('ui-button-icon-only')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
      /* Icon and Text */
    } else if (icon) {
      button.classList.add('ui-button-text-icon-primary')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
      /* Text only */
    } else {
      button.classList.add('ui-button-text-only')
    }

    const el = document.createElement('span')
    el.classList.add('ui-button-text')
    el.textContent = text || title || '.'
    button.appendChild(el)

    button.setAttribute('title', title)

    return button
  }

  setButtonText (button, text, icon, title) {
    button.innerHTML = ''
    button.classList.add('ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all')

    /* Icon only */
    if (icon && !text) {
      button.classList.add('ui-button-icon-only')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
      /* Icon and Text */
    } else if (icon) {
      button.classList.add('ui-button-text-icon-primary')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
      /* Text only */
    } else {
      button.classList.add('ui-button-text-only')
    }

    const el = document.createElement('span')
    el.classList.add('ui-button-text')
    el.textContent = text || title || '.'
    button.appendChild(el)

    button.setAttribute('title', title)
  }

  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('ui-widget-content', 'ui-corner-all')
    el.style.padding = '1em 1.4em'
    el.style.marginBottom = '20px'
    return el
  }

  afterInputReady (input) {
    if (input.controls) return
    input.controls = this.closest(input, '.form-control')
    if (this.queuedInputErrorText) {
      const text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }
  }

  addInputError (input, text) {
    if (!input.controls) {
      this.queuedInputErrorText = text
      return
    }
    if (!input.errmsg) {
      input.errmsg = document.createElement('div')
      input.errmsg.classList.add('ui-state-error')
      input.controls.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  }

  removeInputError (input) {
    if (!input.controls) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
  }

  markTabActive (row) {
    row.tab.classList.remove('ui-widget-header')
    row.tab.classList.add('ui-state-active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  }

  markTabInactive (row) {
    row.tab.classList.add('ui-widget-header')
    row.tab.classList.remove('ui-state-active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  }
}

/* Custom stylesheet rules. format: "selector" : "CSS rules" */
jqueryuiTheme.rules = { 'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"' }


/***/ }),

/***/ "./src/themes/spectre.css.js":
/*!***********************************!*\
  !*** ./src/themes/spectre.css.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({"*":"--primary-color:%235755d9;--gray-color:%23bcc3ce;--light-color:%23fff",".slider:focus":"box-shadow:none","h4 > label + .btn-group":"margin-left:1rem",".text-right > button":"margin-right:0%20!important",".text-left > button":"margin-left:0%20!important",".property-selector":"font-size:0.7rem;font-weight:normal;max-height:260px%20!important;width:395px%20!important",".property-selector .form-checkbox":"margin:0","textarea":"width:100%25;min-height:2rem;resize:vertical","table":"border-collapse:collapse",".table td":"padding:0.4rem%200.4rem",".mr-5":"margin-right:1rem%20!important","div[data-schematype]:not([data-schematype='object'])":"transition:0.5s","div[data-schematype]:not([data-schematype='object']):hover":"background-color:%23eee",".je-table-border td":"border:0.05rem%20solid%20%23dadee4%20!important",".btn-info":"font-size:0.5rem;font-weight:bold;height:0.8rem;padding:0.15rem%200;line-height:0.8;margin:0.3rem%200%200.3rem%200.1rem",".je-label + select":"min-width:5rem",".je-label":"font-weight:600",".btn-action.btn-info":"width:0.8rem",".je-border":"border:0.05rem%20solid%20%23dadee4",".je-panel":"padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)",".je-panel-top":"padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)",".required:after":"content:%22%20*%22;color:red;font:inherit",".je-align-bottom":"margin-top:auto",".je-desc":"font-size:smaller;margin:0.2rem%200",".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem;border:3px%20solid%20white;box-shadow:0px%200px%208px%20rgba(0%2C%200%2C%200%2C%200.3);box-sizing:border-box",".je-dropzone":"position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s",".je-dropzone:before":"position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)",".je-dropzone.valid-dropzone":"background:green",".je-dropzone.invalid-dropzone":"background:red",".columns .container.je-noindent":"padding-left:0;padding-right:0",".selectize-control.multi .item":"background:var(--primary-color)%20!important",".select2-container--default   .select2-selection--single   .select2-selection__arrow":"display:none",".select2-container--default .select2-selection--single":"border:none",".select2-container .select2-selection--single .select2-selection__rendered":"padding:0",".select2-container .select2-search--inline .select2-search__field":"margin-top:0",".select2-container--default.select2-container--focus   .select2-selection--multiple":"border:0.05rem%20solid%20var(--gray-color)",".select2-container--default   .select2-selection--multiple   .select2-selection__choice":"margin:0.4rem%200.2rem%200.2rem%200;padding:2px%205px;background-color:var(--primary-color);color:var(--light-color)",".select2-container--default .select2-search--inline .select2-search__field":"line-height:normal",".choices":"margin-bottom:auto",".choices__list--multiple .choices__item":"border:none;background-color:var(--primary-color);color:var(--light-color)",".choices[data-type*='select-multiple'] .choices__button":"border-left:0.05rem%20solid%20%232826a6",".choices__inner":"font-size:inherit;min-height:20px;padding:4px%207.5px%204px%203.75px",".choices[data-type*='select-one'] .choices__inner":"padding-bottom:4px",".choices__list--dropdown .choices__item":"font-size:inherit"});
/* eslint-enable */


/***/ }),

/***/ "./src/themes/spectre.js":
/*!*******************************!*\
  !*** ./src/themes/spectre.js ***!
  \*******************************/
/*! exports provided: spectreTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectreTheme", function() { return spectreTheme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _spectre_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spectre.css.js */ "./src/themes/spectre.css.js");
/* Spectre Theme using Spectre CSS framework. <https://picturepan2.github.io/spectre/index.html> */



/* Config options that allows changing various aspects of the output */
const options = {
  disable_theme_rules: false, /* Disable creation of Inline Style Rules */
  label_bold: true, /* Element labels bold */
  align_bottom: false, /* Align elements to bottom of flex container */
  object_indent: false, /* Indent nested object elements */
  object_border: false, /* Add border around object elements */
  table_border: false, /* Add border to array "table" row and cells */
  table_zebrastyle: false, /* Add "zebra style" to array "table" rows */
  input_size: 'normal' /* Size of input and select elements. "small", "normal", "large" */
}

class spectreTheme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  constructor (jsoneditor) {
    super(jsoneditor, options)
  }

  /* Functions for setting up the grid container, row and columns */
  setGridColumnSize (el, size, offset) {
    el.classList.add(`col-${size}`)
    if (offset) el.classList.add('col-mx-auto')
  }

  getGridContainer () {
    const el = document.createElement('div')
    el.classList.add('container')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  }

  getGridRow () {
    const el = document.createElement('div')
    el.classList.add('columns')
    return el
  }

  getGridColumn () {
    const el = document.createElement('div')
    el.classList.add('column')
    if (this.options.align_bottom) el.classList.add('je-align-bottom')
    return el
  }

  /* Used for "type: object" or "type: array" (except if "format: tabs-top") */
  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-panel')
    if (this.options.object_border) el.classList.add('je-border')
    return el
  }

  /* Used for "type: array" with "format: tabs-top" */
  getTopIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-panel-top')
    if (this.options.object_border) el.classList.add('je-border')
    return el
  }

  /* Button functions */
  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    return el
  }

  /* Button holder for the buttons */
  getButtonHolder () {
    const el = super.getButtonHolder()
    el.classList.add('btn-group')
    return el
  }

  getFormButtonHolder (buttonAlign) {
    const el = super.getFormButtonHolder()
    el.classList.remove('btn-group')
    el.classList.add('d-block')
    if (buttonAlign === 'center') el.classList.add('text-center')
    else if (buttonAlign === 'right') el.classList.add('text-right')
    else el.classList.add('text-left')
    return el
  }

  getFormButton (text, icon, title) {
    const el = super.getFormButton(text, icon, title)
    el.classList.add('btn', 'btn-primary', 'mx-2', 'my-1')
    if (this.options.input_size !== 'small') el.classList.remove('btn-sm')
    if (this.options.input_size === 'large') el.classList.add('btn-lg')
    return el
  }

  getButton (text, icon, title) {
    const el = super.getButton(text, icon, title)
    el.classList.add('btn', 'btn-sm', 'btn-primary', 'mr-2', 'my-1')
    return el
  }

  getHeader (text) {
    const el = document.createElement('h4')
    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }

    el.style.display = 'inline-block'

    return el
  }

  getFormInputDescription (text) {
    const el = super.getFormInputDescription(text)
    el.classList.add('je-desc', 'hide-sm')
    return el
  }

  /* Label for all elements except checkbox and radio */
  getFormInputLabel (text, req) {
    const el = super.getFormInputLabel(text, req)
    if (this.options.label_bold) el.classList.add('je-label')
    return el
  }

  /* Checkbox elements */
  /* ToDo: Rename function names for consistency */
  getCheckbox () {
    const el = this.getFormInputField('checkbox')
    return el
  }

  getCheckboxLabel (text, req) {
    const el = super.getCheckboxLabel(text, req); const icon = document.createElement('i')
    icon.classList.add('form-icon')
    el.classList.add('form-checkbox', 'mr-5')
    el.insertBefore(icon, el.firstChild)
    return el
  }

  getFormCheckboxControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('form-inline')
    return label
  }

  getMultiCheckboxHolder (controls, label, description, infoText) {
    console.log('mul')
    return super.getMultiCheckboxHolder(controls, label, description, infoText)
  }

  /* Radio elements */
  getFormRadio (attributes) {
    const el = this.getFormInputField('radio')
    for (const key in attributes) {
      el.setAttribute(key, attributes[key])
    }
    return el
  }

  getFormRadioLabel (text, req) {
    const el = super.getFormRadioLabel(text, req); const icon = document.createElement('i')
    icon.classList.add('form-icon')
    el.classList.add('form-radio')
    el.insertBefore(icon, el.firstChild)
    return el
  }

  getFormRadioControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('form-inline')
    return label
  }

  /* Create input field */
  getFormInputField (type) {
    const el = super.getFormInputField(type)
    if (!['checkbox', 'radio'].includes(type)) {
      el.classList.add('form-input')
    }
    return el
  }

  /* Create input field for type="range" */
  getRangeInput (min, max, step) {
    const el = this.getFormInputField('range')
    el.classList.add('slider')
    el.classList.remove('form-input')
    el.setAttribute('oninput', 'this.setAttribute("value", this.value)')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  }

  getRangeControl (input, output) {
    const el = super.getRangeControl(input, output)
    el.classList.add('text-center')
    return el
  }

  /* Create select box field */
  getSelectInput (options, multiple) {
    const el = super.getSelectInput(options)
    el.classList.add('form-select')
    return el
  }

  /* Create textarea field */
  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('form-input')
    return el
  }

  getFormControl (label, input, description, infoText) {
    const group = document.createElement('div')
    group.classList.add('form-group')

    if (label) {
      if (input.type === 'checkbox') {
        label = this.getFormCheckboxControl(label, input, false)
      }
      label.classList.add('form-label')
      group.appendChild(label)
      if (infoText) group.insertBefore(infoText, group.firstChild)
    }

    if (this.options.input_size === 'small') input.classList.add('input-sm', 'select-sm')
    else if (this.options.input_size === 'large') input.classList.add('input-lg', 'select-lg')
    if (input.type !== 'checkbox') group.appendChild(input)

    if (description) group.appendChild(description)

    return group
  }

  /* Create input group (input field with buttons) */
  getInputGroup (input, buttons) {
    if (!input) return

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group')
    inputGroup.appendChild(input)
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('input-group-btn')
      buttons[i].classList.remove('btn-sm', 'mr-2', 'my-1')
      inputGroup.appendChild(buttons[i])
    }

    return inputGroup
  }

  /* Create button for displaying infotext tooltip */
  getInfoButton (text) {
    const popover = document.createElement('div')
    popover.classList.add('popover', 'popover-left', 'float-right')

    const button = document.createElement('button')
    button.classList.add('btn', 'btn-secondary', 'btn-info', 'btn-action', 's-circle')
    button.setAttribute('tabindex', '-1') /* exclude element from tab order */
    popover.appendChild(button)

    const icon = document.createTextNode('I')
    button.appendChild(icon)

    const container = document.createElement('div')
    container.classList.add('popover-container')
    popover.appendChild(container)

    const card = document.createElement('div')
    card.classList.add('card')
    container.appendChild(card)

    const cardbody = document.createElement('div')
    cardbody.classList.add('card-body')
    cardbody.innerHTML = text
    card.appendChild(cardbody)

    return popover
  }

  /* Functions for rendering array with format: "table" */
  getTable () {
    const el = super.getTable()
    el.classList.add('table', 'table-scroll')
    if (this.options.table_border) el.classList.add('je-table-border')
    if (this.options.table_zebrastyle) el.classList.add('table-striped')
    return el
  }

  /* Function for rendering progressbar */
  getProgressBar () {
    const progressBar = super.getProgressBar()
    progressBar.classList.add('progress')
    return progressBar
  }

  /* Containers for array with format: "tab" */
  getTabHolder (propertyName) {
    const pName = typeof propertyName === 'undefined' ? '' : propertyName
    const el = document.createElement('div')
    el.classList.add('columns')
    el.innerHTML = `<div class="column col-2"></div><div class="column col-10 content" id="${pName}"></div>`
    return el
  }

  /* Containers for array with format: "tab-top" */
  getTopTabHolder (propertyName) {
    const pName = typeof propertyName === 'undefined' ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<ul class="tab"></ul><div class="content" id="${pName}"></div>`
    return el
  }

  /* Tab button for array with format: "tab" */
  getTab (span, tabId) {
    const el = document.createElement('a')
    el.classList.add('btn', 'btn-secondary', 'btn-block')
    el.setAttribute('href', `#${tabId}`)
    el.appendChild(span)
    return el
  }

  /* Tab button for array with format: "tab-top" */
  getTopTab (span, tabId) {
    const el = document.createElement('li')
    el.id = tabId
    el.classList.add('tab-item')

    /* Spectre needs an a tag inside the tab item, not a span */
    const a = document.createElement('a')
    a.setAttribute('href', `#${tabId}`)
    a.appendChild(span)

    el.appendChild(a)
    return el
  }

  markTabActive (row) {
    row.tab.classList.add('active')
    if (typeof row.rowPane !== 'undefined') row.rowPane.style.display = ''
    else row.container.style.display = ''
  }

  markTabInactive (row) {
    row.tab.classList.remove('active')
    if (typeof row.rowPane !== 'undefined') row.rowPane.style.display = 'none'
    else row.container.style.display = 'none'
  }

  afterInputReady (input) {
    if (input.localName === 'select') {
      /* Selectize adjustments */
      if (input.classList.contains('selectized')) {
        const selectized = input.nextSibling
        if (selectized) {
          /* Remove Spectre class 'form-select' as this conflicts with Selectize styling */
          selectized.classList.remove('form-select')
          Array.from(selectized.querySelectorAll('.form-select')).forEach(el => {
            el.classList.remove('form-select')
          })
        }
        /* Select2 ajustments */
      } else if (input.classList.contains('select2-hidden-accessible')) {
        const select2 = input.nextSibling
        const single = select2 && select2.querySelector('.select2-selection--single')
        /* Add Spectre 'form-select' to single-select2 elements */
        if (single) select2.classList.add('form-select')
      }
    }

    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
  }

  /* Controls output of errormessages displayed in form */
  addInputError (input, text) {
    if (!input.controlgroup) return
    input.controlgroup.classList.add('has-error')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('form-input-hint')
      input.controlgroup.appendChild(input.errmsg)
    }
    input.errmsg.classList.remove('d-hide')
    input.errmsg.textContent = text
  }

  removeInputError (input) {
    if (!input.errmsg) return
    input.errmsg.classList.add('d-hide')
    input.controlgroup.classList.remove('has-error')
  }
}

/* Custom stylesheet rules. (Does not support comma separated selectors) */
/*  Will create a stylesheet in document head with the id "theme-spectre" if not exists. */
spectreTheme.rules = _spectre_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/themes/tailwind.css.js":
/*!************************************!*\
  !*** ./src/themes/tailwind.css.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({".slider":"-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;display:block;border:none;height:1.2rem;width:100%25",".slider:focus":"box-shadow:0%200%200%200%20rgba(87%2C%2085%2C%20217%2C%200.2);outline:none",".slider.tooltip:not([data-tooltip])::after":"content:attr(value)",".slider::-webkit-slider-thumb":"-webkit-appearance:none;background:%23f17405;border-radius:100%25;height:0.6rem;margin-top:-0.25rem;transition:transform%200.2s;width:0.6rem",".slider:active::-webkit-slider-thumb":"transform:scale(1.25);outline:none",".slider::-webkit-slider-runnable-track":"background:%23b2b4b6;border-radius:0.1rem;height:0.1rem;width:100%25","a.tooltips":"position:relative;display:inline","a.tooltips span":"position:absolute;white-space:nowrap;width:auto;padding-left:1rem;padding-right:1rem;color:%23ffffff;background:rgba(56%2C%2056%2C%2056%2C%200.85);height:1.5rem;line-height:1.5rem;text-align:center;visibility:hidden;border-radius:3px","a.tooltips span:after":"content:%22%22;position:absolute;top:50%25;left:100%25;margin-top:-5px;width:0;height:0;border-left:5px%20solid%20rgba(56%2C%2056%2C%2056%2C%200.85);border-top:5px%20solid%20transparent;border-bottom:5px%20solid%20transparent","a:hover.tooltips span":"visibility:visible;opacity:0.9;font-size:0.8rem;right:100%25;top:50%25;margin-top:-12px;margin-right:10px;z-index:999",".json-editor-btntype-properties + div":"font-size:0.8rem;font-weight:normal","textarea":"width:100%25;min-height:2rem;resize:vertical","table":"width:100%25;border-collapse:collapse",".table td":"padding:0rem%200rem","div[data-schematype]:not([data-schematype='object'])":"transition:0.5s","div[data-schematype]:not([data-schematype='object']):hover":"background-color:%23e6f4fe","div[data-schemaid='root']":"position:relative;width:inherit;display:inherit;overflow-x:hidden;z-index:10","select[multiple]":"height:auto","select[multiple].from-select":"height:auto",".je-table-zebra:nth-child(even)":"background-color:%23f2f2f2",".je-table-border":"border:0.5px%20solid%20black",".je-table-hdiv":"border-bottom:1px%20solid%20black",".je-border":"border:0.05rem%20solid%20%233182ce",".je-panel":"width:inherit;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)",".je-panel-top":"width:100%25;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)",".required:after":"content:%22%20*%22;color:red;font:inherit;font-weight:bold",".je-desc":"font-size:smaller;margin:0.2rem%200",".container-xl.je-noindent":"padding-left:0;padding-right:0",".json-editor-btntype-add":"color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%234299e1;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)",".json-editor-btntype-deletelast":"color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23e53e3e;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)",".json-editor-btntype-deleteall":"color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23000000;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)",".json-editor-btn-save":"float:right;color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)",".json-editor-btn-back":"color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)",".json-editor-btntype-delete":"color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem",".json-editor-btntype-move":"color:%23000000;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem",".json-editor-btn-collapse":"padding:0em%200.8rem;font-size:1.3rem;color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)",".je-upload-preview img":"float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem",".je-dropzone":"position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s",".je-dropzone:before":"position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)",".je-dropzone.valid-dropzone":"background:green",".je-dropzone.invalid-dropzone":"background:red"});
/* eslint-enable */


/***/ }),

/***/ "./src/themes/tailwind.js":
/*!********************************!*\
  !*** ./src/themes/tailwind.js ***!
  \********************************/
/*! exports provided: tailwindTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailwindTheme", function() { return tailwindTheme; });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme.js */ "./src/theme.js");
/* harmony import */ var _tailwind_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tailwind.css.js */ "./src/themes/tailwind.css.js");



const options = {
  disable_theme_rules: false, /* Disable creation of Inline Style Rules */
  label_bold: false, /* Element labels bold */
  object_panel_default: true, /* Indicates whether to use rules as default or alternate style */
  object_indent: true, /* Indent nested object elements */
  object_border: false, /* Add border around object elements */
  table_border: false, /* Add border to array "table" row and cells */
  table_hdiv: false, /* Add bottom-border to array "table" cells */
  table_zebrastyle: false, /* Add "zebra style" to array "table" rows */
  input_size: 'small', /* Size of input and select elements. "small", "normal", "large" */
  enable_compact: false
}

class tailwindTheme extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"] {
  constructor (jsoneditor) {
    super(jsoneditor, options)
  }

  getGridContainer () {
    const el = document.createElement('div')
    el.classList.add('flex', 'flex-col', 'w-full')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  }

  getGridRow () {
    const el = document.createElement('div')
    el.classList.add('flex', 'flex-wrap', 'w-full')
    return el
  }

  getGridColumn () {
    const el = document.createElement('div')
    el.classList.add('flex', 'flex-col')
    return el
  }

  setGridColumnSize (el, size, offset) {
    if (size > 0 && size < 12) { el.classList.add(`w-${size}/12`, 'px-1') } else el.classList.add('w-full', 'px-1')

    if (offset) el.style.marginLeft = `${(100 / 12) * offset}%`
  }

  getIndentedPanel () {
    const el = document.createElement('div')
    if (this.options.object_panel_default) { el.classList.add('w-full', 'p-1') } else { el.classList.add('relative', 'flex', 'flex-col', 'rounded', 'break-words', 'border', 'bg-white', 'border-0', 'border-blue-400', 'p-1', 'shadow-md') }
    if (this.options.object_border) el.classList.add('je-border')
    return el
  }

  /* Used for "type: array" with "format: tabs-top" */
  getTopIndentedPanel () {
    const el = document.createElement('div')
    if (this.options.object_panel_default) { el.classList.add('w-full', 'm-2') } else { el.classList.add('relative', 'flex', 'flex-col', 'rounded', 'break-words', 'border', 'bg-white', 'border-0', 'border-blue-400', 'p-1', 'shadow-md') }
    if (this.options.object_border) el.classList.add('je-border')
    return el
  }

  getTitle () {
    return this.schema.title
  }

  getSelectInput (options, multiple) {
    const el = super.getSelectInput(options)
    if (multiple) el.classList.add('form-multiselect', 'block', 'py-0', 'h-auto', 'w-full', 'px-1', 'text-sm', 'text-black', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    else el.classList.add('form-select', 'block', 'py-0', 'h-6', 'w-full', 'px-1', 'text-sm', 'text-black', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    return el
  }

  afterInputReady (input) {
    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
  }

  getTextareaInput () {
    const el = super.getTextareaInput()
    el.classList.add('block', 'w-full', 'px-1', 'text-sm', 'leading-normal', 'bg-white', 'text-black', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    el.style.height = 0
    return el
  }

  /* Create input field for type="range" */
  getRangeInput (min, max, step) {
    const el = this.getFormInputField('range')
    el.classList.add('slider')
    if (this.options.enable_compact) el.classList.add('compact')
    el.setAttribute('oninput', 'this.setAttribute("value", this.value)')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  }

  getRangeControl (input, output) {
    const el = super.getRangeControl(input, output)
    el.classList.add('text-center', 'text-black')
    return el
  }

  /* Checkbox elements */
  getCheckbox () {
    const el = this.getFormInputField('checkbox')
    el.classList.add('form-checkbox', 'text-red-600')
    return el
  }

  getCheckboxLabel (text, req) {
    const el = super.getCheckboxLabel(text, req)
    el.classList.add('inline-flex', 'items-center')
    return el
  }

  getFormCheckboxControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('inline-flex flex-row')
    return label
  }

  getMultiCheckboxHolder (controls, label, description, infoText) {
    const el = super.getMultiCheckboxHolder(controls, label, description, infoText)
    el.classList.add('inline-flex', 'flex-col')
    return el
  }

  /* Radio elements */
  getFormRadio (attributes) {
    const el = this.getFormInputField('radio')
    el.classList.add('form-radio', 'text-red-600')
    for (const key in attributes) {
      el.setAttribute(key, attributes[key])
    }
    return el
  }

  getFormRadioLabel (text, req) {
    const el = super.getFormRadioLabel(text, req)
    el.classList.add('inline-flex', 'items-center', 'mr-2')
    return el
  }

  getFormRadioControl (label, input, compact) {
    label.insertBefore(input, label.firstChild) /* Move input into label element */
    if (compact) label.classList.add('form-radio')
    return label
  }

  getRadioHolder (schema, controls, label, description, infoText) {
    const el = super.getRadioHolder(controls, label, description, infoText)
    if (schema.options.layout === 'h') el.classList.add('inline-flex', 'flex-row')
    else el.classList.add('inline-flex', 'flex-col')
    return el
  }

  getFormInputLabel (text, req) {
    const el = super.getFormInputLabel(text, req)
    if (this.options.label_bold) el.classList.add('font-bold')
    else el.classList.add('required')
    return el
  }

  getFormInputField (type) {
    const el = super.getFormInputField(type)
    if (!['checkbox', 'radio'].includes(type)) el.classList.add('block', 'w-full', 'px-1', 'text-black', 'text-sm', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    return el
  }

  getFormInputDescription (text) {
    const el = document.createElement('p')
    el.classList.add('block', 'mt-1', 'text-xs')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  }

  getFormControl (label, input, description, infoText) {
    const group = document.createElement('div')
    group.classList.add('form-group', 'mb-1', 'w-full')
    if (label) {
      label.classList.add('text-xs')

      if (input.type === 'checkbox') {
        input.classList.add('form-checkbox', 'text-xs', 'text-red-600', 'mr-1')
        label.classList.add('items-center', 'flex')
        label = this.getFormCheckboxControl(label, input, false, infoText)
      }

      if (input.type === 'radio') {
        input.classList.add('form-radio', 'text-red-600', 'mr-1')
        label.classList.add('items-center', 'flex')
        label = this.getFormRadioControl(label, input, false, infoText)
      }
      group.appendChild(label)

      if (!['checkbox', 'radio'].includes(input.type) && infoText) group.appendChild(infoText)
    }
    if (!['checkbox', 'radio'].includes(input.type)) {
      if (this.options.input_size === 'small') input.classList.add('text-xs')
      else if (this.options.input_size === 'normal') input.classList.add('text-base')
      else if (this.options.input_size === 'large') input.classList.add('text-xl')
      group.appendChild(input)
    }

    if (description) group.appendChild(description)

    return group
  }

  getHeaderButtonHolder () {
    const el = this.getButtonHolder()
    el.classList.add('text-sm')
    return el
  }

  getButtonHolder () {
    const el = document.createElement('div')
    el.classList.add('flex', 'relative', 'inline-flex', 'align-middle')
    return el
  }

  getButton (text, icon, title) {
    const el = super.getButton(text, icon, title)
    el.classList.add('inline-block', 'align-middle', 'text-center', 'text-sm', 'bg-blue-700', 'text-white', 'py-1', 'pr-1', 'm-2', 'shadow', 'select-none', 'whitespace-no-wrap', 'rounded')
    return el
  }

  /* Button for displaying infotext tooltip */
  getInfoButton (text) {
    const tooltip = document.createElement('a')
    tooltip.classList.add('tooltips', 'float-right')
    tooltip.innerHTML = 'ⓘ'
    const span = document.createElement('span')
    span.innerHTML = text
    tooltip.appendChild(span)

    return tooltip
  }

  getTable () {
    const el = super.getTable()
    if (this.options.table_border) el.classList.add('je-table-border')
    else el.classList.add('table', 'border', 'p-0')
    return el
  }

  getTableRow () {
    const el = super.getTableRow()
    if (this.options.table_border) el.classList.add('je-table-border')
    if (this.options.table_zebrastyle) el.classList.add('je-table-zebra')
    return el
  }

  getTableHeaderCell (text) {
    const el = super.getTableHeaderCell(text)
    if (this.options.table_border) el.classList.add('je-table-border')
    else if (this.options.table_hdiv) el.classList.add('je-table-hdiv')
    else el.classList.add('text-xs', 'border', 'p-0', 'm-0')
    return el
  }

  getTableCell () {
    const el = super.getTableCell()
    if (this.options.table_border) el.classList.add('je-table-border')
    else if (this.options.table_hdiv) el.classList.add('je-table-hdiv')
    else el.classList.add('border-0', 'p-0', 'm-0')
    return el
  }

  addInputError (input, text) {
    if (!input.controlgroup) return
    input.controlgroup.classList.add('has-error')
    input.classList.add('bg-red-600')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('block', 'mt-1', 'text-xs', 'text-red')
      input.controlgroup.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }
    input.errmsg.textContent = text
  }

  removeInputError (input) {
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.classList.remove('bg-red-600')
    input.controlgroup.classList.remove('has-error')
  }

  getTabHolder (propertyName) {
    const el = document.createElement('div')
    const pName = typeof propertyName === 'undefined' ? '' : propertyName
    el.innerHTML = `<div class='w-2/12' id='${pName}'><ul class='list-reset pl-0 mb-0'></ul></div><div class='w-10/12' id='${pName}'></div>`
    el.classList.add('flex')
    return el
  }

  addTab (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  }

  getTopTabHolder (propertyName) {
    const pName = typeof propertyName === 'undefined' ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<ul class='nav-tabs flex list-reset pl-0 mb-0 border-b border-grey-light' id='${pName}'></ul><div class='p-6 block' id='${pName}'></div>`
    return el
  }

  getTab (text, tabId) {
    const liel = document.createElement('li')
    liel.classList.add('nav-item', 'flex-col', 'text-center', 'text-white', 'bg-blue-500', 'shadow-md', 'border', 'p-2', 'mb-2', 'mr-2', 'hover:bg-blue-400', 'rounded')
    const ael = document.createElement('a')
    ael.classList.add('nav-link', 'text-center')
    ael.setAttribute('href', `#${tabId}`)
    ael.setAttribute('data-toggle', 'tab')
    ael.appendChild(text)
    liel.appendChild(ael)
    return liel
  }

  getTopTab (text, tabId) {
    const el = document.createElement('li')
    el.classList.add('nav-item', 'flex', 'border-l', 'border-t', 'border-r')
    const a = document.createElement('a')
    a.classList.add('nav-link', '-mb-px', 'flex-row', 'text-center', 'bg-white', 'p-2', 'hover:bg-blue-400', 'rounded-t')
    a.setAttribute('href', `#${tabId}`)
    a.setAttribute('data-toggle', 'tab')
    a.appendChild(text)
    el.appendChild(a)
    return el
  }

  getTabContent () {
    const el = document.createElement('div')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  getTopTabContent () {
    const el = document.createElement('div')
    el.setAttribute('role', 'tabpanel')
    return el
  }

  markTabActive (row) {
    row.tab.firstChild.classList.add('block')
    if (row.tab.firstChild.classList.contains('border-b') === true) {
      row.tab.firstChild.classList.add('border-b-0')
      row.tab.firstChild.classList.remove('border-b')
    } else {
      row.tab.firstChild.classList.add('border-b-0')
    }
    if (row.container.classList.contains('hidden') === true) {
      row.container.classList.remove('hidden')
      row.container.classList.add('block')
    } else {
      row.container.classList.add('block')
    }
  }

  markTabInactive (row) {
    if (row.tab.firstChild.classList.contains('border-b-0') === true) {
      row.tab.firstChild.classList.add('border-b')
      row.tab.firstChild.classList.remove('border-b-0')
    } else {
      row.tab.firstChild.classList.add('border-b')
    }
    if (row.container.classList.contains('block') === true) {
      row.container.classList.remove('block')
      row.container.classList.add('hidden')
    }
  }

  getProgressBar () {
    const min = 0
    const max = 100
    const start = 0

    const container = document.createElement('div')
    container.classList.add('progress')

    const bar = document.createElement('div')
    bar.classList.add('bg-blue', 'leading-none', 'py-1', 'text-xs', 'text-center', 'text-white')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = `${start}%`
    container.appendChild(bar)

    return container
  }

  updateProgressBar (progressBar, progress) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    const percentage = `${progress}%`
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  }

  updateProgressBarUnknown (progressBar) {
    if (!progressBar) return

    const bar = progressBar.firstChild
    progressBar.classList.add('progress', 'bg-blue', 'leading-none', 'py-1', 'text-xs', 'text-center', 'text-white', 'block')
    bar.removeAttribute('aria-valuenow')
    bar.classList.add('w-full')
    bar.innerHTML = ''
  }

  getInputGroup (input, buttons) {
    if (!input) return

    const inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('relative', 'items-stretch', 'w-full')
    inputGroupContainer.appendChild(input)

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('-mr-1')
    inputGroupContainer.appendChild(inputGroup)

    for (let i = 0; i < buttons.length; i++) {
      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
}

/* Custom stylesheet rules. (Does not support comma separated selectors) */
/*  Will create a stylesheet in document head with the id "theme-spectre" if not exists. */
tailwindTheme.rules = _tailwind_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: isPlainObject, deepCopy, extend, trigger, getShadowParent, hasOwnProperty, isNumber, isInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShadowParent", function() { return getShadowParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/**
 * Taken from jQuery 2.1.3
 *
 * #### NOTE
 * Not plain objects is,
 * - Any object or value whose internal [[Class]] property is not "[object Object]"
 * - DOM nodes
 * - window
 *
 * @param {Object} obj - Variable name
 * @returns {Boolean}
 */
function isPlainObject (obj) {
  if (obj === null) return false

  if (typeof obj !== 'object' || obj.nodeType || (obj === obj.window)) return false

  if (obj.constructor && !hasOwnProperty(obj.constructor.prototype, 'isPrototypeOf')) return false

  /* Most likely |obj| is a plain object, created by {} or constructed with new Object */
  return true
}

function deepCopy (target) {
  return isPlainObject(target) ? extend({}, target) : Array.isArray(target) ? target.map(deepCopy) : target
}

function extend (destination, ...args) {
  args.forEach(source => {
    if (source) {
      Object.keys(source).forEach(property => {
        if (source[property] && isPlainObject(source[property])) {
          if (!hasOwnProperty(destination, property)) destination[property] = {}
          extend(destination[property], source[property])
        } else if (Array.isArray(source[property])) {
          destination[property] = deepCopy(source[property])
        } else {
          destination[property] = source[property]
        }
      })
    }
  })

  return destination
}

function trigger (el, event) {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(event, true, true)
  el.dispatchEvent(e)
}

/**
 * Helper function to locate a shadowRoot parent if at all
 *
 * @param {Element} node - Node
 */
function getShadowParent (node) {
  return node && (node.toString() === '[object ShadowRoot]' ? node : getShadowParent(node.parentNode))
}

/**
 * Helper function to check own property key
 *
 * @see https://eslint.org/docs/rules/no-prototype-builtins
 */
function hasOwnProperty (obj, key) {
  return obj && Object.prototype.hasOwnProperty.call(obj, key)
}

// From https://github.com/angular/angular.js/blob/master/src/ng/directive/input.js
const NUMBER_REGEXP = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/

function isNumber (value) {
  if (typeof value === 'undefined' || value === null) return false
  const match = value.match(NUMBER_REGEXP)
  const v = parseFloat(value)
  return match !== null && !isNaN(v) && isFinite(v)
}

const INTEGER_REGEXP = /^\s*(-|\+)?(\d+)\s*$/

function isInteger (value) {
  if (typeof value === 'undefined' || value === null) return false
  const match = value.match(INTEGER_REGEXP)
  const v = parseInt(value)
  return match !== null && !isNaN(v) && isFinite(v)
}


/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var _validators_ip_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/ip-validator.js */ "./src/validators/ip-validator.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");



class Validator {
  constructor (jsoneditor, schema, options, defaults) {
    this.jsoneditor = jsoneditor
    this.schema = schema || this.jsoneditor.schema
    this.options = options || {}
    this.translate = this.jsoneditor.translate || defaults.translate
    this.defaults = defaults

    this._validateSubSchema = {
      enum (schema, value, path) {
        const stringified = JSON.stringify(value)
        const valid = schema.enum.some(e => stringified === JSON.stringify(e))
        if (!valid) {
          return [{
            path,
            property: 'enum',
            message: this.translate('error_enum')
          }]
        }
        return []
      },
      extends (schema, value, path) {
        const validate = (errors, e) => {
          errors.push(...this._validateSchema(e, value, path))
          return errors
        }
        return schema.extends.reduce(validate, [])
      },
      allOf (schema, value, path) {
        const validate = (errors, e) => {
          errors.push(...this._validateSchema(e, value, path))
          return errors
        }
        return schema.allOf.reduce(validate, [])
      },
      anyOf (schema, value, path) {
        const valid = schema.anyOf.some(e => !this._validateSchema(e, value, path).length)
        if (!valid) {
          return [{
            path,
            property: 'anyOf',
            message: this.translate('error_anyOf')
          }]
        }
        return []
      },
      oneOf (schema, value, path) {
        let valid = 0
        const oneofErrors = []
        schema.oneOf.forEach((o, i) => {
          /* Set the error paths to be path.oneOf[i].rest.of.path */
          const tmp = this._validateSchema(o, value, path)
          if (!tmp.length) {
            valid++
          }

          tmp.forEach(e => {
            e.path = `${path}.oneOf[${i}]${e.path.substr(path.length)}`
          })
          oneofErrors.push(...tmp)
        })
        const errors = []
        if (valid !== 1) {
          errors.push({
            path,
            property: 'oneOf',
            message: this.translate('error_oneOf', [valid])
          })
          errors.push(...oneofErrors)
        }
        return errors
      },
      not (schema, value, path) {
        if (!this._validateSchema(schema.not, value, path).length) {
          return [{
            path,
            property: 'not',
            message: this.translate('error_not')
          }]
        }
        return []
      },
      type (schema, value, path) {
        /* Union type */
        if (Array.isArray(schema.type)) {
          const valid = schema.type.some(e => this._checkType(e, value))
          if (!valid) {
            return [{
              path,
              property: 'type',
              message: this.translate('error_type_union')
            }]
          }
        } else {
          /* Simple type */
          if (['date', 'time', 'datetime-local'].includes(schema.format) && schema.type === 'integer') {
            /* Hack to get validator to validate as string even if value is integer */
            /* As validation of 'date', 'time', 'datetime-local' is done in separate validator */
            if (!this._checkType('string', `${value}`)) {
              return [{
                path,
                property: 'type',
                message: this.translate('error_type', [schema.format])
              }]
            }
          } else if (!this._checkType(schema.type, value)) {
            return [{
              path,
              property: 'type',
              message: this.translate('error_type', [schema.type])
            }]
          }
        }
        return []
      },
      disallow (schema, value, path) {
        /* Union type */
        if (Array.isArray(schema.disallow)) {
          const invalid = schema.disallow.some(e => this._checkType(e, value))
          if (invalid) {
            return [{
              path,
              property: 'disallow',
              message: this.translate('error_disallow_union')
            }]
          }
        } else {
          /* Simple type */
          if (this._checkType(schema.disallow, value)) {
            return [{
              path,
              property: 'disallow',
              message: this.translate('error_disallow', [schema.disallow])
            }]
          }
        }
        return []
      }
    }

    this._validateNumberSubSchema = {
      multipleOf (schema, value, path) { return this._validateNumberSubSchemaMultipleDivisible(schema, value, path) },
      divisibleBy (schema, value, path) { return this._validateNumberSubSchemaMultipleDivisible(schema, value, path) },
      maximum (schema, value, path) {
        /* Vanilla JS, prone to floating point rounding errors (e.g. .999999999999999 == 1) */
        let valid = schema.exclusiveMaximum ? (value < schema.maximum) : (value <= schema.maximum)

        /* Use math.js is available */
        if (window.math) {
          valid = window.math[schema.exclusiveMaximum ? 'smaller' : 'smallerEq'](
            window.math.bignumber(value),
            window.math.bignumber(schema.maximum)
          )
        } else if (window.Decimal) {
          /* Use Decimal.js if available */
          valid = (new window.Decimal(value))[schema.exclusiveMaximum ? 'lt' : 'lte'](new window.Decimal(schema.maximum))
        }

        if (!valid) {
          return [{
            path,
            property: 'maximum',
            message: this.translate(
              (schema.exclusiveMaximum ? 'error_maximum_excl' : 'error_maximum_incl'),
              [schema.maximum]
            )
          }]
        }
        return []
      },
      minimum (schema, value, path) {
        /* Vanilla JS, prone to floating point rounding errors (e.g. .999999999999999 == 1) */
        let valid = schema.exclusiveMinimum ? (value > schema.minimum) : (value >= schema.minimum)

        /* Use math.js is available */
        if (window.math) {
          valid = window.math[schema.exclusiveMinimum ? 'larger' : 'largerEq'](
            window.math.bignumber(value),
            window.math.bignumber(schema.minimum)
          )
          /* Use Decimal.js if available */
        } else if (window.Decimal) {
          valid = (new window.Decimal(value))[schema.exclusiveMinimum ? 'gt' : 'gte'](new window.Decimal(schema.minimum))
        }

        if (!valid) {
          return [{
            path,
            property: 'minimum',
            message: this.translate(
              (schema.exclusiveMinimum ? 'error_minimum_excl' : 'error_minimum_incl'),
              [schema.minimum]
            )
          }]
        }
        return []
      }
    }

    this._validateStringSubSchema = {
      maxLength (schema, value, path) {
        const errors = []
        if ((`${value}`).length > schema.maxLength) {
          errors.push({
            path,
            property: 'maxLength',
            message: this.translate('error_maxLength', [schema.maxLength])
          })
        }
        return errors
      },
      /* `minLength` */
      minLength (schema, value, path) {
        if ((`${value}`).length < schema.minLength) {
          return [{
            path,
            property: 'minLength',
            message: this.translate((schema.minLength === 1 ? 'error_notempty' : 'error_minLength'), [schema.minLength])
          }]
        }
        return []
      },
      /* `pattern` */
      pattern (schema, value, path) {
        if (!(new RegExp(schema.pattern)).test(value)) {
          return [{
            path,
            property: 'pattern',
            message: (schema.options && schema.options.patternmessage) ? schema.options.patternmessage : this.translate('error_pattern', [schema.pattern])
          }]
        }
        return []
      }
    }

    this._validateArraySubSchema = {
      items (schema, value, path) {
        const errors = []
        if (Array.isArray(schema.items)) {
          for (let i = 0; i < value.length; i++) {
            /* If this item has a specific schema tied to it */
            /* Validate against it */
            if (schema.items[i]) {
              console.log('-->')
              errors.push(...this._validateSchema(schema.items[i], value[i], `${path}.${i}`))
              /* If all additional items are allowed */
            } else if (schema.additionalItems === true) {
              break
              /* If additional items is a schema */
              /* TODO: Incompatibility between version 3 and 4 of the spec */
            } else if (schema.additionalItems) {
              errors.push(...this._validateSchema(schema.additionalItems, value[i], `${path}.${i}`))
              /* If no additional items are allowed */
            } else if (schema.additionalItems === false) {
              errors.push({
                path,
                property: 'additionalItems',
                message: this.translate('error_additionalItems')
              })
              break
              /* Default for `additionalItems` is an empty schema */
            } else {
              break
            }
          }
          /* `items` is a schema */
        } else {
          /* Each item in the array must validate against the schema */
          value.forEach((e, i) => {
            errors.push(...this._validateSchema(schema.items, e, `${path}.${i}`))
          })
        }
        return errors
      },
      maxItems (schema, value, path) {
        if (value.length > schema.maxItems) {
          return [{
            path,
            property: 'maxItems',
            message: this.translate('error_maxItems', [schema.maxItems])
          }]
        }
        return []
      },
      minItems (schema, value, path) {
        if (value.length < schema.minItems) {
          return [{
            path,
            property: 'minItems',
            message: this.translate('error_minItems', [schema.minItems])
          }]
        }
        return []
      },
      uniqueItems (schema, value, path) {
        const seen = {}
        for (let i = 0; i < value.length; i++) {
          const valid = JSON.stringify(value[i])
          if (seen[valid]) {
            return [{
              path,
              property: 'uniqueItems',
              message: this.translate('error_uniqueItems')
            }]
          }
          seen[valid] = true
        }
        return []
      }
    }

    this._validateObjectSubSchema = {
      maxProperties (schema, value, path) {
        if (Object.keys(value).length > schema.maxProperties) {
          return [{
            path,
            property: 'maxProperties',
            message: this.translate('error_maxProperties', [schema.maxProperties])
          }]
        }
        return []
      },
      minProperties (schema, value, path) {
        if (Object.keys(value).length < schema.minProperties) {
          return [{
            path,
            property: 'minProperties',
            message: this.translate('error_minProperties', [schema.minProperties])
          }]
        }
        return []
      },
      required (schema, value, path) {
        const errors = []
        if (Array.isArray(schema.required)) {
          schema.required.forEach(e => {
            if (typeof value[e] !== 'undefined') return
            const editor = this.jsoneditor.getEditor(`${path}.${e}`)
            /* Ignore required error if editor is of type "button" or "info" */
            if (editor && ['button', 'info'].includes(editor.schema.format || editor.schema.type)) return
            errors.push({
              path,
              property: 'required',
              message: this.translate('error_required', [e])
            })
          })
        }
        return errors
      },
      properties (schema, value, path, validatedProperties) {
        const errors = []
        Object.entries(schema.properties).forEach(([key, prop]) => {
          validatedProperties[key] = true
          errors.push(...this._validateSchema(prop, value[key], `${path}.${key}`))
        })
        return errors
      },
      patternProperties (schema, value, path, validatedProperties) {
        const errors = []
        Object.entries(schema.patternProperties).forEach(([i, prop]) => {
          const regex = new RegExp(i)
          /* Check which properties match */
          Object.entries(value).forEach(([j, v]) => {
            if (regex.test(j)) {
              validatedProperties[j] = true
              errors.push(...this._validateSchema(prop, v, `${path}.${j}`))
            }
          })
        })
        return errors
      }
    }

    this._validateObjectSubSchema2 = {
      additionalProperties (schema, value, path, validatedProperties) {
        const errors = []
        const keys = Object.keys(value)
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i]
          if (validatedProperties[k]) continue
          /* No extra properties allowed */
          if (!schema.additionalProperties) {
            errors.push({
              path,
              property: 'additionalProperties',
              message: this.translate('error_additional_properties', [k])
            })
            break
            /* Allowed */
          } else if (schema.additionalProperties === true) {
            break
            /* Must match schema */
            /* TODO: incompatibility between version 3 and 4 of the spec */
          } else {
            errors.push(...this._validateSchema(schema.additionalProperties, value[k], `${path}.${k}`))
          }
        }
        return errors
      },
      dependencies (schema, value, path) {
        const errors = []
        Object.entries(schema.dependencies).forEach(([i, dep]) => {
          /* Doesn't need to meet the dependency */
          if (typeof value[i] === 'undefined') return

          /* Property dependency */
          if (Array.isArray(dep)) {
            dep.forEach(d => {
              if (typeof value[d] === 'undefined') {
                errors.push({
                  path,
                  property: 'dependencies',
                  message: this.translate('error_dependency', [d])
                })
              }
            })
            /* Schema dependency */
          } else {
            errors.push(...this._validateSchema(dep, value, path))
          }
        })
        return errors
      }
    }
  }

  fitTest (value, givenSchema, weight = 10000000) {
    const fit = { match: 0, extra: 0 }
    if (typeof value === 'object' && value !== null) {
      /* Work on a copy of the schema */
      const properties = this._getSchema(givenSchema).properties

      for (const i in properties) {
        if (!Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["hasOwnProperty"])(properties, i)) {
          fit.extra += weight
          continue
        }
        if (typeof value[i] === 'object' && typeof properties[i] === 'object' && typeof properties[i].properties === 'object') {
          const result = this.fitTest(value[i], properties[i], weight / 100)
          fit.match += result.match
          fit.extra += result.extra
        }
        if (typeof value[i] !== 'undefined') {
          fit.match += weight
        }
      }
    }
    return fit
  }

  _getSchema (schema) {
    return typeof schema === 'undefined' ? Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.jsoneditor.expandRefs(this.schema)) : schema
  }

  validate (value) {
    return this._validateSchema(this.schema, value)
  }

  _validateSchema (schema, value, path) {
    const errors = []
    path = path || 'root'

    /* Work on a copy of the schema */
    schema = Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, this.jsoneditor.expandRefs(schema))

    /*
     * Type Agnostic Validation
     */
    /* Version 3 `required` and `required_by_default` */
    if (typeof value === 'undefined') {
      return this._validateV3Required(schema, value, path)
    }

    Object.keys(schema).forEach(key => {
      if (this._validateSubSchema[key]) {
        errors.push(...this._validateSubSchema[key].call(this, schema, value, path))
      }
    })

    /*
     * Type Specific Validation
     */
    errors.push(...this._validateByValueType(schema, value, path))

    if (schema.links) {
      schema.links.forEach((s, m) => {
        if (s.rel && s.rel.toLowerCase() === 'describedby') {
          schema = this._expandSchemaLink(schema, m)
          errors.push(...this._validateSchema(schema, value, path, this.translate))
        }
      })
    }

    /* date, time and datetime-local validation */
    if (['date', 'time', 'datetime-local'].includes(schema.format)) {
      errors.push(...this._validateDateTimeSubSchema(schema, value, path))
    }

    /* uuid validation */
    if (['uuid'].includes(schema.format)) {
      errors.push(...this._validateUUIDSchema(schema, value, path))
    }

    /* custom validator */
    errors.push(...this._validateCustomValidator(schema, value, path))

    /* Remove duplicate errors and add "errorcount" property */
    return this._removeDuplicateErrors(errors)
  }

  _expandSchemaLink (schema, m) {
    const href = schema.links[m].href
    const data = this.jsoneditor.root.getValue()
    const template = this.jsoneditor.compileTemplate(href, this.jsoneditor.template)
    const ref = document.location.origin + document.location.pathname + template(data)

    schema.links = schema.links.slice(0, m).concat(schema.links.slice(m + 1))
    return Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, schema, this.jsoneditor.refs[ref])
  }

  _validateV3Required (schema, value, path) {
    if ((typeof schema.required !== 'undefined' && schema.required === true) || (typeof schema.required === 'undefined' && this.jsoneditor.options.required_by_default === true)) {
      return [{
        path,
        property: 'required',
        message: this.translate('error_notset')
      }]
    }
    return []
  }

  _validateByValueType (schema, value, path) {
    const errors = []
    if (value === null) return errors
    /* Number Specific Validation */
    if (typeof value === 'number') {
      /* `multipleOf` and `divisibleBy` */
      /* `maximum` */
      /* `minimum` */
      Object.keys(schema).forEach(key => {
        if (this._validateNumberSubSchema[key]) {
          errors.push(...this._validateNumberSubSchema[key].call(this, schema, value, path))
        }
      })
      /* String specific validation */
    } else if (typeof value === 'string') {
      /* `maxLength` */
      /* `minLength` */
      /* `pattern` */
      Object.keys(schema).forEach(key => {
        if (this._validateStringSubSchema[key]) {
          errors.push(...this._validateStringSubSchema[key].call(this, schema, value, path))
        }
      })
      /* Array specific validation */
    } else if (Array.isArray(value)) {
      /* `items` and `additionalItems`
      /* `maxItems`
      /* `minItems`
      /* `uniqueItems` */
      Object.keys(schema).forEach(key => {
        if (this._validateArraySubSchema[key]) {
          errors.push(...this._validateArraySubSchema[key].call(this, schema, value, path))
        }
      })
      /* Object specific validation */
    } else if (typeof value === 'object') {
      const validatedProperties = {}
      /* `maxProperties`
      /* `minProperties`
      /*  Version 4 `required`
      /* `properties`
      /* `patternProperties` */
      Object.keys(schema).forEach(key => {
        if (this._validateObjectSubSchema[key]) {
          errors.push(...this._validateObjectSubSchema[key].call(this, schema, value, path, validatedProperties))
        }
      })

      /* The no_additional_properties option currently doesn't work with extended schemas that use oneOf or anyOf or allOf */
      if (typeof schema.additionalProperties === 'undefined' && this.jsoneditor.options.no_additional_properties && !schema.oneOf && !schema.anyOf && !schema.allOf) {
        schema.additionalProperties = false
      }

      /* `additionalProperties` */
      /* `dependencies` */
      Object.keys(schema).forEach(key => {
        if (typeof this._validateObjectSubSchema2[key] !== 'undefined') {
          errors.push(...this._validateObjectSubSchema2[key].call(this, schema, value, path, validatedProperties))
        }
      })
    }
    return errors
  }

  _validateUUIDSchema (schema, value, path) {
    if (!(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))) {
      return [{
        path,
        property: 'format',
        message: this.translate('error_pattern', ['^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'])
      }]
    }
    return []
  }

  _validateNumberSubSchemaMultipleDivisible (schema, value, path) {
    const divisor = schema.multipleOf || schema.divisibleBy
    /* Vanilla JS, prone to floating point rounding errors (e.g. 1.14 / .01 == 113.99999) */
    let valid = (value / divisor === Math.floor(value / divisor))

    /* Use math.js is available */
    if (window.math) {
      valid = window.math.mod(window.math.bignumber(value), window.math.bignumber(divisor)).equals(0)
    } else if (window.Decimal) {
      /* Use decimal.js is available */
      valid = (new window.Decimal(value)).mod(new window.Decimal(divisor)).equals(0)
    }

    if (!valid) {
      return [{
        path,
        property: schema.multipleOf ? 'multipleOf' : 'divisibleBy',
        message: this.translate('error_multipleOf', [divisor])
      }]
    }
    return []
  }

  _validateDateTimeSubSchema (schema, value, path) {
    const _validateInteger = (schema, value, path) => {
      /* The value is a timestamp */
      if (value * 1 < 1) {
        /* If value is less than 1, then it's an invalid epoch date before 00:00:00 UTC Thursday, 1 January 1970 */
        return [{
          path,
          property: 'format',
          message: this.translate('error_invalid_epoch')
        }]
      } else if (value !== Math.abs(parseInt(value))) {
        /* not much to check for, so we assume value is ok if it's a positive number */
        return [{
          path,
          property: 'format',
          message: this.translate(`error_${schema.format.replace(/-/g, '_')}`, [dateFormat])
        }]
      }
      return []
    }
    const _validateFlatPicker = (schema, value, path, editor) => {
      if (value !== '') {
        let compareValue
        if (editor.flatpickr.config.mode !== 'single') {
          const seperator = editor.flatpickr.config.mode === 'range' ? editor.flatpickr.l10n.rangeSeparator : ', '
          const selectedDates = editor.flatpickr.selectedDates.map(val =>
            editor.flatpickr.formatDate(val, editor.flatpickr.config.dateFormat)
          )
          compareValue = selectedDates.join(seperator)
        }

        try {
          if (compareValue) {
            /* Not the best validation method, but range and multiple mode are special */
            /* Optimal solution would be if it is possible to change the return format from string/integer to array */
            if (compareValue !== value) throw new Error(`${editor.flatpickr.config.mode} mismatch`)
          } else if (editor.flatpickr.formatDate(editor.flatpickr.parseDate(value, editor.flatpickr.config.dateFormat), editor.flatpickr.config.dateFormat) !== value) {
            throw new Error('mismatch')
          }
        } catch (err) {
          const errorDateFormat = editor.flatpickr.config.errorDateFormat !== undefined ? editor.flatpickr.config.errorDateFormat : editor.flatpickr.config.dateFormat
          return [{
            path,
            property: 'format',
            message: this.translate(`error_${editor.format.replace(/-/g, '_')}`, [errorDateFormat])
          }]
        }
      }
      return []
    }

    const validatorRx = {
      date: /^(\d{4}\D\d{2}\D\d{2})?$/,
      time: /^(\d{2}:\d{2}(?::\d{2})?)?$/,
      'datetime-local': /^(\d{4}\D\d{2}\D\d{2}[ T]\d{2}:\d{2}(?::\d{2})?)?$/
    }
    const format = {
      date: '"YYYY-MM-DD"',
      time: '"HH:MM"',
      'datetime-local': '"YYYY-MM-DD HH:MM"'
    }

    const editor = this.jsoneditor.getEditor(path)
    const dateFormat = (editor && editor.flatpickr) ? editor.flatpickr.config.dateFormat : format[schema.format]

    if (schema.type === 'integer') {
      return _validateInteger(schema, value, path)
    } else if (!editor || !editor.flatpickr) {
      /* Standard string input, without flatpickr */
      if (!validatorRx[schema.format].test(value)) {
        return [{
          path,
          property: 'format',
          message: this.translate(`error_${schema.format.replace(/-/g, '_')}`, [dateFormat])
        }]
      }
    } else if (editor) {
      /* Flatpickr validation */
      return _validateFlatPicker(schema, value, path, editor)
    }
    return []
  }

  _validateCustomValidator (schema, value, path) {
    const errors = []
    /* Internal validators using the custom validator format */
    errors.push(..._validators_ip_validator_js__WEBPACK_IMPORTED_MODULE_0__["ipValidator"].call(this, schema, value, path, this.translate))

    const validate = validator => {
      errors.push(...validator.call(this, schema, value, path))
    }
    /* Custom type validation (global) */
    this.defaults.custom_validators.forEach(validate)
    /* Custom type validation (instance specific) */
    if (this.options.custom_validators) {
      this.options.custom_validators.forEach(validate)
    }
    return errors
  }

  _removeDuplicateErrors (errors) {
    return errors.reduce((err, obj) => {
      let first = true
      if (!err) err = []
      err.forEach(a => {
        if (a.message === obj.message && a.path === obj.path && a.property === obj.property) {
          a.errorcount++
          first = false
        }
      })
      if (first) {
        obj.errorcount = 1
        err.push(obj)
      }
      return err
    }, [])
  }

  _checkType (type, value) {
    const types = {
      string: value => typeof value === 'string',
      number: value => typeof value === 'number',
      integer: value => typeof value === 'number' && value === Math.floor(value),
      boolean: value => typeof value === 'boolean',
      array: value => Array.isArray(value),
      object: value => value !== null && !(Array.isArray(value)) && typeof value === 'object',
      null: value => value === null
    }
    /* Simple types */
    if (typeof type === 'string') {
      if (types[type]) {
        return types[type](value)
      } else return true
      /* Schema */
    } else {
      return !this._validateSchema(type, value).length
    }
  }
}


/***/ }),

/***/ "./src/validators/ip-validator.js":
/*!****************************************!*\
  !*** ./src/validators/ip-validator.js ***!
  \****************************************/
/*! exports provided: ipValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipValidator", function() { return ipValidator; });
/* Implements ipv4, ipv6 and hostname format validations as per https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-7.3.4 */
const validateIpv4 = (value) => {
  const parts = value.split('.')
  if (parts.length !== 4) {
    throw new Error('error_ipv4')
  }
  parts.forEach((part) => {
    if (isNaN(+part) || +part < 0 || +part > 255) {
      throw new Error('error_ipv4')
    }
  })
}

const validateIpv6 = (value) => {
  if (!value.match(
    '^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:[0-9]{1,3}.){3}[0-9]{1,3}$)(([0-9a-fA-F]{1,4}:){1,5}|:)((:[0-9a-fA-F]{1,4}){1,5}:|:)|::(?:[a-fA-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?=(?:[a-fA-F0-9]{0,4}:){0,7}[a-fA-F0-9]{0,4}$)(([0-9a-fA-F]{1,4}:){1,7}|:)((:[0-9a-fA-F]{1,4}){1,7}|:)|(?:[a-fA-F0-9]{1,4}:){7}:|:(:[a-fA-F0-9]{1,4}){7})$'
  )) {
    throw new Error('error_ipv6')
  }
}

const validateHostname = (value) => {
  if (!value.match(
    '(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9].)+[a-zA-Z]{2,63}$)'
  )) {
    throw new Error('error_hostname')
  }
}

function ipValidator (schema, value, path, translate) {
  try {
    switch (schema.format) {
      case 'ipv4':
        validateIpv4(value)
        break
      case 'ipv6':
        validateIpv6(value)
        break
      case 'hostname':
        validateHostname(value)
        break
    }
    return []
  } catch (err) {
    return [{
      path,
      property: 'format',
      message: translate(err.message)
    }]
  }
}


/***/ })

/******/ });
});
/*
//@ sourceMappingURL=jsoneditor.js.map
*/