webpackJsonp([1],{

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = home;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A bit description in - src/components/header/index.js
	 */
	
	var _styleCss = __webpack_require__(68);
	
	var _styleCss2 = _interopRequireDefault(_styleCss);
	
	'use stict';
	function home() {
	  var homePage = document.createElement('div');
	  var title = document.createElement('h1');
	  var description1 = document.createElement('p');
	
	  homePage.className = _styleCss2['default'].home;
	
	  title.className = _styleCss2['default'].title;
	  title.textContent = 'It\'s a simple testing app.';
	  description1.className = _styleCss2['default'].description;
	  description1.textContent = 'This app is super simple and you don\'t get ' + 'anything interesting here.';
	
	  var description2 = description1.cloneNode();
	
	  description2.textContent = 'All you need in the code of the project, ' + 'so go and look there.';
	
	  homePage.appendChild(title);
	  homePage.appendChild(description1);
	  homePage.appendChild(description2);
	
	  return homePage;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(69, function() {
				var newContent = __webpack_require__(69);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * A bit description in - src/components/header/style.css\n */\n\n/**\n * It's up to you what you will allocate into variables\n * My personal recommendation:\n * - create list of z-index's from 1 to 10 with step 100\n * - define colors of your app, but use not personilized names, like\n * main-color instead header-color\n * - also I create list with mixins of fonts\n */\n/**\n * A bit description in - src/css/variables/colors.css\n */\n\n.src-pages-home-_style_home--2Aw3q {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: block;\n  padding-top: 150px;\n}\n\n.src-pages-home-_style_title--upby3 {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: block;\n  text-align: center;\n  font-size: 50px;\n  margin-bottom: 30px;\n  color: #212121;\n}\n\n.src-pages-home-_style_description--1qGyn {\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  empty-cells: show;\n  font: normal normal normal normal medium/normal inherit;\n  -webkit-hyphens: none;\n     -moz-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  text-align: inherit;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  widows: 0;\n  word-spacing: normal;\n  all: initial;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n  color: rgb(70, 70, 70);\n}", ""]);
	
	// exports
	exports.locals = {
		"home": "src-pages-home-_style_home--2Aw3q",
		"title": "src-pages-home-_style_title--upby3",
		"description": "src-pages-home-_style_description--1qGyn"
	};

/***/ }

});
//# sourceMappingURL=1.tools.js.map