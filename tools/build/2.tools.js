webpackJsonp([2],{

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = products;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A bit description in - src/components/header/index.js
	 */
	
	var _styleCss = __webpack_require__(72);
	
	var _styleCss2 = _interopRequireDefault(_styleCss);
	
	var _productItem = __webpack_require__(74);
	
	var _productItem2 = _interopRequireDefault(_productItem);
	
	'use stict';
	
	var items = [];
	
	for (var i = 0; i < 20; i++) {
	  items.push({
	    title: 'Product ' + i,
	
	    /**
	     * With img-loader(url-loader) we can just require image. If we set limit,
	     * all images below will inlined by data-url and for above will created
	     * hashed image with provided optimizations
	     */
	    img: __webpack_require__(77)("./img_" + (i % 2 ? 1 : 2) + '.png')
	  });
	}
	
	function products() {
	  var productsPage = document.createElement('div');
	
	  productsPage.className = _styleCss2['default'].products;
	
	  items.forEach(function (item) {
	    return productsPage.appendChild((0, _productItem2['default'])(item));
	  });
	
	  return productsPage;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(73, function() {
				var newContent = __webpack_require__(73);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * A bit description in - src/components/header/style.css\n */\n\n/**\n * A bit description in - src/css/variables/colors.css\n */\n\n.src-pages-products-_style_products--2qTSI {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  padding-top: 50px;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          -webkit-box-align: center;\n          align-items: center;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          flex-direction: column;\n}", ""]);
	
	// exports
	exports.locals = {
		"products": "src-pages-products-_style_products--2qTSI"
	};

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = productItem;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A bit description in - src/components/header/index.js
	 */
	
	var _styleCss = __webpack_require__(75);
	
	var _styleCss2 = _interopRequireDefault(_styleCss);
	
	'use stict';
	function productItem(_ref) {
	  var img = _ref.img;
	  var title = _ref.title;
	
	  var product = document.createElement('div');
	  var productImg = document.createElement('img');
	  var productTitle = document.createElement('p');
	
	  product.className = _styleCss2['default'].item;
	
	  productImg.className = _styleCss2['default'].img;
	  productImg.src = img;
	
	  productTitle.className = _styleCss2['default'].title;
	  productTitle.textContent = title;
	
	  product.appendChild(productImg);
	  product.appendChild(productTitle);
	
	  return product;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(76, function() {
				var newContent = __webpack_require__(76);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * A bit description in - src/components/header/style.css\n */\n\n/**\n * It's up to you what you will allocate into variables\n * My personal recommendation:\n * - create list of z-index's from 1 to 10 with step 100\n * - define colors of your app, but use not personilized names, like\n * main-color instead header-color\n * - also I create list with mixins of fonts\n */\n\n.src-components-productItem-_style_item--3u-p2 {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: block;\n  width: 400px;\n  border: 1px solid #212121;\n  margin-bottom: 20px;\n}\n\n.src-components-productItem-_style_img--2MuvL {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  margin: auto;\n  display: block;\n}\n\n.src-components-productItem-_style_title--2tUGb {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n  border-top: 1px solid #212121;\n}", ""]);
	
	// exports
	exports.locals = {
		"item": "src-components-productItem-_style_item--3u-p2",
		"img": "src-components-productItem-_style_img--2MuvL",
		"title": "src-components-productItem-_style_title--2tUGb"
	};

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./img_1.png": 78,
		"./img_2.png": 79
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 77;


/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6916e2b11f37661b5ba69a422c49460c.png"

/***/ }

});
//# sourceMappingURL=2.tools.js.map