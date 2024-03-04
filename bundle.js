/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n*, *::before, *::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n}\n\n:root {\n  --clr-blue-600: #2563eb;\n  --clr-blue-950: #172554;\n  --clr-neutral-50: #fafafa;\n  --clr-neutral-200: #e5e7eb;\n  --clr-neutral-400: #a3a3a3;\n  --clr-red-500: #ef4444;\n  --clr-red-700: #b91c1c;\n  --clr-green-500: #22c55e;\n  --clr-green-700: #15803d;\n}\n\nbody {\n  background-color: var(--clr-neutral-50);\n  position: relative;\n  height: 100vh;\n  display: grid;\n  grid-template: auto 1fr / 200px 1fr;\n}\n\nheader {\n  grid-area: 1 / 1 / 2 / 3;\n  padding: 1rem;\n  background-color: var(--clr-blue-600);\n  color: var(--clr-neutral-50);\n}\n\naside {\n  grid-area: 2 / 1 / 3 / 2;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  background-color: var(--clr-neutral-200);\n  color: var(--clr-blue-950);\n}\n\n.project-modal, .task-modal {\n  position: absolute;\n  top: 30%;\n  left: 40%;\n  width: 300px;\n  border-radius: .3rem;\n  border: 2px solid #555555;\n}\n\n.project-form, .task-form {\n  display: flex;\n  flex-direction: column;\n  gap: .3rem;\n  padding: .5rem;\n}\n\n.form-controls {\n  padding: .3rem;\n}\n\nlabel {\n  color: var(--clr-blue-950);\n}\n\nselect {\n  padding: .5rem;\n}\n\ninput {\n  padding: .5rem;\n  border: 1px solid #cccccc;\n  border-radius: .3rem;\n  outline: none;\n}\n\ninput:hover {\n  outline: 2px solid #2563eb;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  list-style-type: none;\n}\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: .3rem;\n  padding-left: .3rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.project > span > .fa {\n  letter-spacing: 2px;\n}\n\n.project:hover {\n  background-color: #cccccc;\n}\n\n.remove-project-btn {\n  color: var(--clr-blue-950);\n  background-color: inherit;\n  font-size: 1.3rem;\n}\n\n.remove-project-btn:hover {\n  color: var(--clr-red-500);\n}\n\nmain {\n  padding: 1rem 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.project-header {\n  color: var(--clr-blue-950);\n}\n\n.project-tasks {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  list-style-type: none;\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid #cccccc;\n  border-radius: .3rem;\n  padding: 1rem;\n  color: var(--clr-blue-950);\n}\n\n.task:hover {\n  background-color: var(--clr-neutral-200);\n}\n\n.task-right {\n  display: grid;\n  grid-template: 1fr / repeat(2, 1fr) auto;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-left {\n  display: grid;\n  grid-template: repeat(2, 1fr) / 1fr;\n  align-items: center;\n}\n\n.task-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--clr-blue-950);\n}\n\n.task-description {\n  font-weight: 700;\n  font-size: .9rem;\n  color: var(--clr-neutral-400);\n}\n\n.remove-task-btn {\n  margin-left: auto;\n  color: var(--clr-blue-950);\n  background-color: inherit;\n  font-size: 1.3rem;\n}\n\n.remove-task-btn:hover {\n  color: var(--clr-red-500);\n}\n\nbutton {\n  border: none;\n  border-radius: .3rem;\n  padding: .5rem;\n  font-weight: 700;\n  font-size: .9rem;\n  cursor: pointer;\n}\n\ni {\n  pointer-events: none;\n}\n\n.add-task-btn {\n  display: none;\n  border: 2px solid var(--clr-blue-600);\n  color: var(--clr-blue-600);\n  background-color: var(--clr-neutral-50);\n}\n\n.add-task-btn:hover {\n  color: var(--clr-neutral-50);\n  background-color: var(--clr-blue-600);\n}\n\n.add-project-btn {\n  background-color: var(--clr-neutral-200);\n  color: var(--clr-blue-600);\n  border: 2px solid var(--clr-blue-600);\n}\n\n.add-project-btn:hover {\n  color: var(--clr-neutral-50);\n  background-color: var(--clr-blue-600);\n}\n\n.submit-project-form, .submit-task-form {\n  background-color: var(--clr-green-500);\n  color: var(--clr-neutral-50);\n}\n\n.submit-project-form:hover, .submit-task-form:hover {\n  background-color: var(--clr-green-700);\n  color: var(--clr-neutral-50);\n}\n\n.close-project-form, .close-task-form {\n  background-color: var(--clr-red-500);\n  color: var(--clr-neutral-50);\n}\n\n.close-project-form:hover, .close-task-form:hover {\n  background-color: var(--clr-red-700);\n  color: var(--clr-neutral-50);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project {\n  constructor(title) {\n    this.id = Date.now();\n    this.title = title;\n    this.tasks = [];\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/classes/Project.js?");

/***/ }),

/***/ "./src/classes/Task.js":
/*!*****************************!*\
  !*** ./src/classes/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.id = Date.now();\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/classes/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_displayUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/displayUI */ \"./src/ui/displayUI.js\");\n\n\n\n// Initialize the UI\n(0,_ui_displayUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage/localStorage.js":
/*!******************************************!*\
  !*** ./src/localStorage/localStorage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n\nfunction getFromLocalStorage() {\n  const data = JSON.parse(localStorage.getItem('projects'));\n  return data;\n}\n\nfunction saveToLocalStorage(data) {\n  return localStorage.setItem('projects', JSON.stringify(data));\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/localStorage/localStorage.js?");

/***/ }),

/***/ "./src/ui/clearContent.js":
/*!********************************!*\
  !*** ./src/ui/clearContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\n\n\nfunction clearContent() {\n  const projectHeader = document.querySelector('[data-project-header]');\n  const projectTasks = document.querySelector('[data-project-tasks]');\n  const addTaskBtn = document.querySelector('[data-add-task-btn]');\n  projectHeader.textContent = '';\n  while(projectTasks.firstChild) {\n    projectTasks.removeChild(projectTasks.firstChild);\n  }\n  addTaskBtn.style.display = 'none';\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/clearContent.js?");

/***/ }),

/***/ "./src/ui/clearProjects.js":
/*!*********************************!*\
  !*** ./src/ui/clearProjects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearProjects)\n/* harmony export */ });\n\nfunction clearProjects() {\n  const projectList = document.querySelector('[data-project-list]');\n  while (projectList.firstChild) {\n    projectList.removeChild(projectList.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/clearProjects.js?");

/***/ }),

/***/ "./src/ui/displayContent.js":
/*!**********************************!*\
  !*** ./src/ui/displayContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayContent)\n/* harmony export */ });\n/* harmony import */ var _localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage/localStorage */ \"./src/localStorage/localStorage.js\");\n\n\nfunction displayContent(currentProjectId) {\n  // DOM selectors\n  const projectHeader = document.querySelector('[data-project-header]');\n  const projectTasks = document.querySelector('[data-project-tasks]');\n  const addTaskBtn = document.querySelector('[data-add-task-btn]');\n\n  const projects = (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)();\n  const currentProject = projects.filter(project => {\n    return project.id === parseInt(currentProjectId);\n  });\n  projectHeader.textContent = currentProject[0].title;\n  currentProject[0].tasks.forEach(task => {\n    const taskUI = document.createElement('li');\n    const taskRight = document.createElement('div');\n    const taskLeft = document.createElement('div');\n    const taskTitle = document.createElement('span');\n    const taskDescription = document.createElement('span');\n    const taskDueDate = document.createElement('span');\n    const taskPriority = document.createElement('span');\n    const removeTaskBtn = document.createElement('button');\n    taskUI.classList.add('task');\n    taskUI.dataset.taskIndex = task.id;\n    taskUI.dataset.projectIndex = currentProject[0].id;\n    taskRight.classList.add('task-right');\n    taskLeft.classList.add('task-left');\n    taskTitle.classList.add('task-title');\n    taskTitle.textContent = task.title;\n    taskDescription.classList.add('task-description');\n    taskDescription.textContent = task.description;\n    taskDueDate.classList.add('task-duedate');\n    taskDueDate.textContent = task.dueDate;\n    taskPriority.classList.add('task-priority');\n    taskPriority.textContent = task.priority;\n    removeTaskBtn.classList.add('remove-task-btn');\n    removeTaskBtn.innerHTML = '<i class=\"fa fa-xmark\"></i>';\n    taskLeft.appendChild(taskTitle);\n    taskLeft.appendChild(taskDescription);\n    taskRight.appendChild(taskDueDate);\n    taskRight.appendChild(taskPriority);\n    taskRight.appendChild(removeTaskBtn);\n    taskUI.appendChild(taskLeft);\n    taskUI.appendChild(taskRight);\n    projectTasks.appendChild(taskUI);\n  });\n  addTaskBtn.style.display = 'block';\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/displayContent.js?");

/***/ }),

/***/ "./src/ui/displayProjects.js":
/*!***********************************!*\
  !*** ./src/ui/displayProjects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage/localStorage */ \"./src/localStorage/localStorage.js\");\n\n\nfunction displayProjects() {\n  const projects = (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)();\n  const projectList = document.querySelector('[data-project-list]');\n  projects.forEach(project => {\n    const projectUI = document.createElement('li');\n    const projectTitle = document.createElement('span');\n    const projectIcon = document.createElement('span');\n    const removeProjectBtn = document.createElement('button');\n    projectUI.classList.add('project');\n    projectUI.dataset.index = project.id;\n    projectTitle.textContent = project.title;\n    projectIcon.innerHTML = '<i class=\"fa fa-house\"></i>'\n    removeProjectBtn.classList.add('remove-project-btn');\n    removeProjectBtn.innerHTML = '<i class=\"fa fa-xmark\"></i>';\n    projectUI.appendChild(projectIcon);\n    projectUI.appendChild(projectTitle);\n    projectUI.appendChild(removeProjectBtn);\n    projectList.appendChild(projectUI);\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/displayProjects.js?");

/***/ }),

/***/ "./src/ui/displayUI.js":
/*!*****************************!*\
  !*** ./src/ui/displayUI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayUI)\n/* harmony export */ });\n/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Project */ \"./src/classes/Project.js\");\n/* harmony import */ var _classes_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Task */ \"./src/classes/Task.js\");\n/* harmony import */ var _localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage/localStorage */ \"./src/localStorage/localStorage.js\");\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearContent */ \"./src/ui/clearContent.js\");\n/* harmony import */ var _clearProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearProjects */ \"./src/ui/clearProjects.js\");\n/* harmony import */ var _displayContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayContent */ \"./src/ui/displayContent.js\");\n/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayProjects */ \"./src/ui/displayProjects.js\");\n\n\n\n\n\n\n\n\nfunction displayUI() {\n  // projectList DOM selector\n  const projectList = document.querySelector('[data-project-list]');\n\n  // project DOM selectors\n  const addProjectBtn = document.querySelector('[data-add-project-btn]');\n  const projectModal = document.querySelector('[data-project-modal]');\n  const projectForm = document.querySelector('[data-project-form]');\n  const submitProjectForm = document.querySelector('[data-submit-project-form]');\n  const closeProjectForm = document.querySelector('[data-close-project-form]');\n  const projectTitle = document.querySelector('[data-project-title]');\n  const projectTasks = document.querySelector('[data-project-tasks]');\n\n  // task DOM selectors\n  const addTaskBtn = document.querySelector('[data-add-task-btn]');\n  const taskModal = document.querySelector('[data-task-modal]');\n  const taskForm = document.querySelector('[data-task-form]');\n  const submitTaskForm = document.querySelector('[data-submit-task-form]');\n  const closeTaskForm = document.querySelector('[data-close-task-form]');\n  const taskTitle = document.querySelector('[data-task-title]');\n  const taskDescription = document.querySelector('[data-task-description]');\n  const taskDueDate = document.querySelector('[data-task-dueDate]');\n  const taskPriority = document.querySelector('[data-task-priority]');\n\n  if ((0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)() == null) {\n    (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)([]);\n  }\n  \n  // projects array\n  let projects = (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();\n\n  let lastClickedProject = null;\n\n  // display all projects\n  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  // addProject event listener\n  addProjectBtn.addEventListener('click', () => {\n    projectModal.showModal();\n  });\n\n  // addTask event listener\n  addTaskBtn.addEventListener('click', () => {\n    taskModal.showModal();\n  });\n\n  // projectForm event listener\n  projectForm.addEventListener('submit', e => {\n    e.preventDefault();\n  });\n\n  // taskForm event listener\n  taskForm.addEventListener('submit', e => {\n    e.preventDefault();\n  });\n\n  // submitProject event listener\n  submitProjectForm.addEventListener('click', () => {\n    const newProject = new _classes_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectTitle.value);\n    projects.push(newProject);\n    lastClickedProject = newProject.id;\n    (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n    projectModal.close();\n    (0,_clearProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  });\n\n  submitTaskForm.addEventListener('click', () => {\n    const newTask = new _classes_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskTitle.value, taskDescription.value, taskDueDate.value, taskPriority.value);\n    projects.map(project => {\n      if(project.id == lastClickedProject) {\n\treturn project.tasks.push(newTask);\n      }\n      return project;\n    });\n    (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n    taskModal.close();\n    (0,_clearContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_displayContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(lastClickedProject);\n  });\n\n  closeProjectForm.addEventListener('click', () => {\n    projectModal.close();\n  });\n\n  closeTaskForm.addEventListener('click', () => {\n    taskModal.close();\n  });\n\n  projectList.addEventListener('click', (e) => {\n    // click on li\n    if(e.target.tagName.toLowerCase() === 'li') {\n      lastClickedProject = e.target.dataset.index;\n      (0,_clearContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      (0,_displayContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(lastClickedProject);\n    }\n    // click on span\n    if(e.target.tagName.toLowerCase() === 'span') {\n      lastClickedProject = e.target.parentNode.dataset.index;\n      (0,_clearContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      (0,_displayContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(lastClickedProject);\n    }\n    // click on removeBtn\n    if(e.target.tagName.toLowerCase() === 'button') {\n      lastClickedProject = e.target.parentNode.dataset.index;\n      (0,_clearContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      (0,_clearProjects__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n      projects = projects.filter(project => {\n\treturn project.id != lastClickedProject;\n      });\n      (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n      projects = (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();\n      (0,_displayProjects__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    }\n\n    // removetask event listener\n    projectTasks.addEventListener('click', (e) => {\n      if(e.target.tagName.toLowerCase() === 'button') {\n\tconst currentTask = e.target.closest('.task').dataset.taskIndex;\n\tconsole.log(currentTask);\n\tconst currentProject = e.target.closest('.task').dataset.projectIndex;\n\tconsole.log(currentProject);\n\tconst projectIndex = projects.findIndex(project => {\n\t  return project.id == currentProject;\n\t})\n\tconsole.log(projectIndex);\n\tconst taskIndex = projects[projectIndex].tasks.findIndex(task => {\n\t  return task.id == currentTask;\n\t})\n\tconsole.log(taskIndex);\n\tprojects[projectIndex].tasks.splice(taskIndex, 1);\n\tconsole.log(projects);\n\t(0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n\tprojects = (0,_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();\n\t(0,_clearContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t(0,_displayContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(lastClickedProject);\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/displayUI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;