webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(419);


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(218);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(219);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createForm = _createForm2.default; // export this package's api

/***/ },

/***/ 349:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ },

/***/ 351:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(221);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(354);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(358);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(221);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(355), __esModule: true };

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(356);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(357).set});

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(252).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(359), __esModule: true };

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(360);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(231)});

/***/ },

/***/ 386:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(351);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(352);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(353);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _rcForm = __webpack_require__(217);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(386);
	
	var _styles = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CustomInput = _react2.default.createClass({
	  displayName: 'CustomInput',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  checkUpper: function checkUpper(rule, value, callback) {
	    if (value !== value.toUpperCase()) {
	      callback(new Error('need to be upper!'));
	    } else {
	      callback();
	    }
	  },
	  toUpper: function toUpper(v, prev) {
	    if (v === prev) {
	      return v;
	    }
	    return v.toUpperCase();
	  },
	  render: function render() {
	    var _props$form = this.props.form,
	        getFieldProps = _props$form.getFieldProps,
	        getFieldError = _props$form.getFieldError;
	
	    var errors = getFieldError('upper');
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'upper normalize'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', getFieldProps('upper', {
	          normalize: this.toUpper,
	          rules: [{
	            validator: this.checkUpper
	          }]
	        }))
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      )
	    );
	  }
	}); /* eslint react/no-multi-comp:0, no-console:0 */
	
	var MaxMin = _react2.default.createClass({
	  displayName: 'MaxMin',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  normalizeMin: function normalizeMin(value, prevValue, allValues) {
	    console.log('normalizeMin', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.max !== previousAllValues.max) {
	      // max changed
	      if (value === '' || Number(allValues.max) < Number(value)) {
	        return allValues.max;
	      }
	    }
	    return value;
	  },
	  normalizeMax: function normalizeMax(value, prevValue, allValues) {
	    console.log('normalizeMax', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.min !== previousAllValues.min) {
	      // min changed
	      if (value === '' || Number(allValues.min) > Number(value)) {
	        return allValues.min;
	      }
	    }
	    return value;
	  },
	  render: function render() {
	    var getFieldProps = this.props.form.getFieldProps;
	
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'min: ',
	        _react2.default.createElement(
	          'select',
	          getFieldProps('min', {
	            normalize: this.normalizeMin,
	            initialValue: ''
	          }),
	          _react2.default.createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        'max: ',
	        _react2.default.createElement(
	          'select',
	          getFieldProps('max', {
	            initialValue: '',
	            normalize: this.normalizeMax
	          }),
	          _react2.default.createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
	      )
	    );
	  }
	});
	
	var Form = function (_Component) {
	  (0, _inherits3.default)(Form, _Component);
	
	  function Form() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFields(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  Form.prototype.render = function render() {
	    var form = this.props.form;
	
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'normalize'
	      ),
	      _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmit },
	        _react2.default.createElement(CustomInput, { form: form }),
	        _react2.default.createElement(MaxMin, { form: form }),
	        _react2.default.createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2.default.createElement(
	            'button',
	            null,
	            'submit'
	          )
	        )
	      )
	    );
	  };
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _rcForm.createForm)()(Form);
	
	_reactDom2.default.render(_react2.default.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=normalize.js.map