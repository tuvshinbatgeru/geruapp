Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _tcombValidation = require('tcomb-validation');

var _tcombValidation2 = babelHelpers.interopRequireDefault(_tcombValidation);

var _util = require('./util');

var SOURCE = 'tcomb-form-native';
var nooptions = Object.freeze({});
var noop = function noop() {};
var noobj = Object.freeze({});
var noarr = Object.freeze([]);
var Nil = _tcombValidation2.default.Nil;

function getFormComponent(type, options) {
  if (options.factory) {
    return options.factory;
  }
  if (type.getTcombFormFactory) {
    return type.getTcombFormFactory(options);
  }
  var name = _tcombValidation2.default.getTypeName(type);
  switch (type.meta.kind) {
    case 'irreducible':
      return type === _tcombValidation2.default.Boolean ? Checkbox : type === _tcombValidation2.default.Date ? DatePicker : Textbox;
    case 'struct':
      return Struct;
    case 'list':
      return List;
    case 'enums':
      return Select;
    case 'maybe':
    case 'subtype':
      return getFormComponent(type.meta.type, options);
    default:
      _tcombValidation2.default.fail('[' + SOURCE + '] unsupported type ' + name);
  }
}

function sortByText(a, b) {
  return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
}

function getComparator(order) {
  return {
    asc: sortByText,
    desc: function desc(a, b) {
      return -sortByText(a, b);
    }
  }[order];
}

var Component = function (_React$Component) {
  babelHelpers.inherits(Component, _React$Component);

  function Component(props) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _this.typeInfo = (0, _util.getTypeInfo)(props.type);
    _this.state = {
      hasError: false,
      value: _this.getTransformer().format(props.value)
    };
    return _this;
  }

  babelHelpers.createClass(Component, [{
    key: 'getTransformer',
    value: function getTransformer() {
      return this.props.options.transformer || this.constructor.transformer;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var should = nextState.value !== this.state.value || nextState.hasError !== this.state.hasError || nextProps.options !== this.props.options || nextProps.type !== this.props.type;
      return should;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.type !== this.props.type) {
        this.typeInfo = (0, _util.getTypeInfo)(props.type);
      }
      this.setState({ value: this.getTransformer().format(props.value) });
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      var _this2 = this;

      this.setState({ value: value }, function () {
        return _this2.props.onChange(value, _this2.props.ctx.path);
      });
    }
  }, {
    key: 'getValidationOptions',
    value: function getValidationOptions() {
      return {
        path: this.props.ctx.path,
        context: _tcombValidation2.default.mixin(_tcombValidation2.default.mixin({}, this.props.context || this.props.ctx.context), { options: this.props.options })
      };
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getTransformer().parse(this.state.value);
    }
  }, {
    key: 'isValueNully',
    value: function isValueNully() {
      return Nil.is(this.getValue());
    }
  }, {
    key: 'removeErrors',
    value: function removeErrors() {
      this.setState({ hasError: false });
    }
  }, {
    key: 'pureValidate',
    value: function pureValidate() {
      return _tcombValidation2.default.validate(this.getValue(), this.props.type, this.getValidationOptions());
    }
  }, {
    key: 'validate',
    value: function validate() {
      var result = this.pureValidate();
      this.setState({ hasError: !result.isValid() });
      return result;
    }
  }, {
    key: 'getAuto',
    value: function getAuto() {
      return this.props.options.auto || this.props.ctx.auto;
    }
  }, {
    key: 'getI18n',
    value: function getI18n() {
      return this.props.options.i18n || this.props.ctx.i18n;
    }
  }, {
    key: 'getDefaultLabel',
    value: function getDefaultLabel() {
      var ctx = this.props.ctx;
      if (ctx.label) {
        return ctx.label + (this.typeInfo.isMaybe ? this.getI18n().optional : this.getI18n().required);
      }
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var label = this.props.options.label || this.props.options.legend;
      if (Nil.is(label) && this.getAuto() === 'labels') {
        label = this.getDefaultLabel();
      }
      return label;
    }
  }, {
    key: 'getError',
    value: function getError() {
      if (this.hasError()) {
        var error = this.props.options.error || this.typeInfo.getValidationErrorMessage;
        if (_tcombValidation2.default.Function.is(error)) {
          var validationOptions = this.getValidationOptions();
          return error(this.getValue(), validationOptions.path, validationOptions.context);
        }
        return error;
      }
    }
  }, {
    key: 'hasError',
    value: function hasError() {
      return this.props.options.hasError || this.state.hasError;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      return (0, _util.merge)(this.props.ctx.config, this.props.options.config);
    }
  }, {
    key: 'getStylesheet',
    value: function getStylesheet() {
      return this.props.options.stylesheet || this.props.ctx.stylesheet;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      return {
        path: this.props.ctx.path,
        error: this.getError(),
        hasError: this.hasError(),
        label: this.getLabel(),
        onChange: this.onChange.bind(this),
        config: this.getConfig(),
        value: this.state.value,
        hidden: this.props.options.hidden,
        stylesheet: this.getStylesheet()
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var locals = this.getLocals();

      _tcombValidation2.default.assert(_tcombValidation2.default.Function.is(this.getTemplate), '[' + SOURCE + '] missing getTemplate method of component ' + this.constructor.name);
      var template = this.getTemplate();
      return template(locals);
    }
  }]);
  return Component;
}(_react2.default.Component);

Component.transformer = {
  format: function format(value) {
    return Nil.is(value) ? null : value;
  },
  parse: function parse(value) {
    return value;
  }
};

function toNull(value) {
  return _tcombValidation2.default.String.is(value) && value.trim() === '' || Nil.is(value) ? null : value;
}

function parseNumber(value) {
  var n = parseFloat(value);
  var isNumeric = value - n + 1 >= 0;
  return isNumeric ? n : toNull(value);
}

var Textbox = function (_Component) {
  babelHelpers.inherits(Textbox, _Component);

  function Textbox() {
    babelHelpers.classCallCheck(this, Textbox);
    return babelHelpers.possibleConstructorReturn(this, (Textbox.__proto__ || Object.getPrototypeOf(Textbox)).apply(this, arguments));
  }

  babelHelpers.createClass(Textbox, [{
    key: 'getTransformer',
    value: function getTransformer() {
      var options = this.props.options;
      return options.transformer ? options.transformer : this.typeInfo.innerType === _tcombValidation2.default.Number ? Textbox.numberTransformer : Textbox.transformer;
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.props.ctx.templates.textbox;
    }
  }, {
    key: 'getPlaceholder',
    value: function getPlaceholder() {
      var placeholder = this.props.options.placeholder;
      if (Nil.is(placeholder) && this.getAuto() === 'placeholders') {
        placeholder = this.getDefaultLabel();
      }
      return placeholder;
    }
  }, {
    key: 'getKeyboardType',
    value: function getKeyboardType() {
      var keyboardType = this.props.options.keyboardType;
      if (_tcombValidation2.default.Nil.is(keyboardType) && this.typeInfo.innerType === _tcombValidation2.default.Number) {
        return 'numeric';
      }
      return keyboardType;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var _this4 = this;

      var locals = babelHelpers.get(Textbox.prototype.__proto__ || Object.getPrototypeOf(Textbox.prototype), 'getLocals', this).call(this);
      locals.placeholder = this.getPlaceholder();
      locals.onChangeNative = this.props.options.onChange;
      locals.keyboardType = this.getKeyboardType();
      locals.underlineColorAndroid = this.props.options.underlineColorAndroid || 'transparent';

      ['help', 'autoCapitalize', 'autoCorrect', 'autoFocus', 'blurOnSubmit', 'editable', 'maxLength', 'multiline', 'onBlur', 'onEndEditing', 'onFocus', 'onLayout', 'onSelectionChange', 'onSubmitEditing', 'onContentSizeChange', 'placeholderTextColor', 'secureTextEntry', 'selectTextOnFocus', 'selectionColor', 'numberOfLines', 'clearButtonMode', 'clearTextOnFocus', 'enablesReturnKeyAutomatically', 'keyboardAppearance', 'onKeyPress', 'returnKeyType', 'selectionState'].forEach(function (name) {
        return locals[name] = _this4.props.options[name];
      });

      return locals;
    }
  }]);
  return Textbox;
}(Component);

Textbox.transformer = {
  format: function format(value) {
    return Nil.is(value) ? '' : value;
  },
  parse: toNull
};

Textbox.numberTransformer = {
  format: function format(value) {
    return Nil.is(value) ? '' : String(value);
  },
  parse: parseNumber
};

var Checkbox = function (_Component2) {
  babelHelpers.inherits(Checkbox, _Component2);

  function Checkbox() {
    babelHelpers.classCallCheck(this, Checkbox);
    return babelHelpers.possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  babelHelpers.createClass(Checkbox, [{
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.props.ctx.templates.checkbox;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var _this6 = this;

      var locals = babelHelpers.get(Checkbox.prototype.__proto__ || Object.getPrototypeOf(Checkbox.prototype), 'getLocals', this).call(this);

      locals.label = locals.label || this.getDefaultLabel();

      ['help', 'disabled', 'onTintColor', 'thumbTintColor', 'tintColor'].forEach(function (name) {
        return locals[name] = _this6.props.options[name];
      });

      return locals;
    }
  }]);
  return Checkbox;
}(Component);

Checkbox.transformer = {
  format: function format(value) {
    return Nil.is(value) ? false : value;
  },
  parse: function parse(value) {
    return value;
  }
};

var Select = function (_Component3) {
  babelHelpers.inherits(Select, _Component3);

  function Select() {
    babelHelpers.classCallCheck(this, Select);
    return babelHelpers.possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  babelHelpers.createClass(Select, [{
    key: 'getTransformer',
    value: function getTransformer() {
      var options = this.props.options;
      if (options.transformer) {
        return options.transformer;
      }
      return Select.transformer(this.getNullOption());
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.props.ctx.templates.select;
    }
  }, {
    key: 'getNullOption',
    value: function getNullOption() {
      return this.props.options.nullOption || { value: '', text: '-' };
    }
  }, {
    key: 'getEnum',
    value: function getEnum() {
      return this.typeInfo.innerType;
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var options = this.props.options;
      var items = options.options ? options.options.slice() : (0, _util.getOptionsOfEnum)(this.getEnum());
      if (options.order) {
        items.sort(getComparator(options.order));
      }
      var nullOption = this.getNullOption();
      if (options.nullOption !== false) {
        items.unshift(nullOption);
      }
      return items;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var _this8 = this;

      var locals = babelHelpers.get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'getLocals', this).call(this);
      locals.options = this.getOptions();

      ['help', 'enabled', 'mode', 'prompt', 'itemStyle'].forEach(function (name) {
        return locals[name] = _this8.props.options[name];
      });

      return locals;
    }
  }]);
  return Select;
}(Component);

Select.transformer = function (nullOption) {
  return {
    format: function format(value) {
      return Nil.is(value) && nullOption ? nullOption.value : String(value);
    },
    parse: function parse(value) {
      return nullOption && nullOption.value === value ? null : value;
    }
  };
};

var DatePicker = function (_Component4) {
  babelHelpers.inherits(DatePicker, _Component4);

  function DatePicker() {
    babelHelpers.classCallCheck(this, DatePicker);
    return babelHelpers.possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
  }

  babelHelpers.createClass(DatePicker, [{
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.props.ctx.templates.datepicker;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var _this10 = this;

      var locals = babelHelpers.get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'getLocals', this).call(this);
      ['help', 'disabled', 'maximumDate', 'minimumDate', 'minuteInterval', 'mode', 'timeZoneOffsetInMinutes'].forEach(function (name) {
        return locals[name] = _this10.props.options[name];
      });

      return locals;
    }
  }]);
  return DatePicker;
}(Component);

DatePicker.transformer = {
  format: function format(value) {
    return Nil.is(value) ? new Date() : value;
  },
  parse: function parse(value) {
    return value;
  }
};

var Struct = function (_Component5) {
  babelHelpers.inherits(Struct, _Component5);

  function Struct() {
    babelHelpers.classCallCheck(this, Struct);
    return babelHelpers.possibleConstructorReturn(this, (Struct.__proto__ || Object.getPrototypeOf(Struct)).apply(this, arguments));
  }

  babelHelpers.createClass(Struct, [{
    key: 'isValueNully',
    value: function isValueNully() {
      var _this12 = this;

      return Object.keys(this.refs).every(function (ref) {
        return _this12.refs[ref].isValueNully();
      });
    }
  }, {
    key: 'removeErrors',
    value: function removeErrors() {
      var _this13 = this;

      this.setState({ hasError: false });
      Object.keys(this.refs).forEach(function (ref) {
        return _this13.refs[ref].removeErrors();
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = {};
      for (var ref in this.refs) {
        value[ref] = this.refs[ref].getValue();
      }
      return this.getTransformer().parse(value);
    }
  }, {
    key: 'validate',
    value: function validate() {
      var value = {};
      var errors = [];
      var hasError = false;
      var result = void 0;

      if (this.typeInfo.isMaybe && this.isValueNully()) {
        this.removeErrors();
        return new _tcombValidation2.default.ValidationResult({ errors: [], value: null });
      }

      for (var ref in this.refs) {
        if (this.refs.hasOwnProperty(ref)) {
          result = this.refs[ref].validate();
          errors = errors.concat(result.errors);
          value[ref] = result.value;
        }
      }

      if (errors.length === 0) {
        var InnerType = this.typeInfo.innerType;
        value = new InnerType(value);
        if (this.typeInfo.isSubtype && errors.length === 0) {
          result = _tcombValidation2.default.validate(value, this.props.type, this.getValidationOptions());
          hasError = !result.isValid();
          errors = errors.concat(result.errors);
        }
      }

      this.setState({ hasError: hasError });
      return new _tcombValidation2.default.ValidationResult({ errors: errors, value: value });
    }
  }, {
    key: 'onChange',
    value: function onChange(fieldName, fieldValue, path) {
      var _this14 = this;

      var value = _tcombValidation2.default.mixin({}, this.state.value);
      value[fieldName] = fieldValue;
      this.setState({ value: value }, function () {
        _this14.props.onChange(value, path);
      });
    }
  }, {
    key: 'getTemplates',
    value: function getTemplates() {
      return (0, _util.merge)(this.props.ctx.templates, this.props.options.templates);
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.getTemplates().struct;
    }
  }, {
    key: 'getTypeProps',
    value: function getTypeProps() {
      return this.typeInfo.innerType.meta.props;
    }
  }, {
    key: 'getOrder',
    value: function getOrder() {
      return this.props.options.order || Object.keys(this.getTypeProps());
    }
  }, {
    key: 'getInputs',
    value: function getInputs() {
      var _props = this.props,
          ctx = _props.ctx,
          options = _props.options;

      var props = this.getTypeProps();
      var auto = this.getAuto();
      var i18n = this.getI18n();
      var config = this.getConfig();
      var value = this.state.value || {};
      var templates = this.getTemplates();
      var stylesheet = this.getStylesheet();
      var inputs = {};
      for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
          var type = props[prop];
          var propValue = value[prop];
          var propType = (0, _util.getTypeFromUnion)(type, propValue);
          var fieldsOptions = options.fields || noobj;
          var propOptions = (0, _util.getComponentOptions)(fieldsOptions[prop], noobj, propValue, type);
          inputs[prop] = _react2.default.createElement(getFormComponent(propType, propOptions), {
            key: prop,
            ref: prop,
            type: propType,
            options: propOptions,
            value: value[prop],
            onChange: this.onChange.bind(this, prop),
            ctx: {
              context: ctx.context,
              uidGenerator: ctx.uidGenerator,
              auto: auto,
              config: config,
              label: (0, _util.humanize)(prop),
              i18n: i18n,
              stylesheet: stylesheet,
              templates: templates,
              path: this.props.ctx.path.concat(prop)
            }
          });
        }
      }
      return inputs;
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var templates = this.getTemplates();
      var locals = babelHelpers.get(Struct.prototype.__proto__ || Object.getPrototypeOf(Struct.prototype), 'getLocals', this).call(this);
      locals.order = this.getOrder();
      locals.inputs = this.getInputs();
      locals.template = templates.struct;
      return locals;
    }
  }]);
  return Struct;
}(Component);

function toSameLength(value, keys, uidGenerator) {
  if (value.length === keys.length) {
    return keys;
  }
  var ret = [];
  for (var i = 0, len = value.length; i < len; i++) {
    ret[i] = keys[i] || uidGenerator.next();
  }
  return ret;
}

var List = exports.List = function (_Component6) {
  babelHelpers.inherits(List, _Component6);

  function List(props) {
    babelHelpers.classCallCheck(this, List);

    var _this15 = babelHelpers.possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this15.state.keys = _this15.state.value.map(function () {
      return props.ctx.uidGenerator.next();
    });
    return _this15;
  }

  babelHelpers.createClass(List, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.type !== this.props.type) {
        this.typeInfo = (0, _util.getTypeInfo)(props.type);
      }
      var value = this.getTransformer().format(props.value);
      this.setState({
        value: value,
        keys: toSameLength(value, this.state.keys, props.ctx.uidGenerator)
      });
    }
  }, {
    key: 'isValueNully',
    value: function isValueNully() {
      return this.state.value.length === 0;
    }
  }, {
    key: 'removeErrors',
    value: function removeErrors() {
      var _this16 = this;

      this.setState({ hasError: false });
      Object.keys(this.refs).forEach(function (ref) {
        return _this16.refs[ref].removeErrors();
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = [];
      for (var i = 0, len = this.state.value.length; i < len; i++) {
        if (this.refs.hasOwnProperty(i)) {
          value.push(this.refs[i].getValue());
        }
      }
      return this.getTransformer().parse(value);
    }
  }, {
    key: 'validate',
    value: function validate() {
      var value = [];
      var errors = [];
      var hasError = false;
      var result = void 0;

      if (this.typeInfo.isMaybe && this.isValueNully()) {
        this.removeErrors();
        return new _tcombValidation2.default.ValidationResult({ errors: [], value: null });
      }

      for (var i = 0, len = this.state.value.length; i < len; i++) {
        result = this.refs[i].validate();
        errors = errors.concat(result.errors);
        value.push(result.value);
      }

      if (this.typeInfo.isSubtype && errors.length === 0) {
        result = _tcombValidation2.default.validate(value, this.props.type, this.getValidationOptions());
        hasError = !result.isValid();
        errors = errors.concat(result.errors);
      }

      this.setState({ hasError: hasError });
      return new _tcombValidation2.default.ValidationResult({ errors: errors, value: value });
    }
  }, {
    key: 'onChange',
    value: function onChange(value, keys, path, kind) {
      var _this17 = this;

      var allkeys = toSameLength(value, keys, this.props.ctx.uidGenerator);
      this.setState({ value: value, keys: allkeys, isPristine: false }, function () {
        _this17.props.onChange(value, path, kind);
      });
    }
  }, {
    key: 'addItem',
    value: function addItem() {
      var value = this.state.value.concat(undefined);
      var keys = this.state.keys.concat(this.props.ctx.uidGenerator.next());
      this.onChange(value, keys, this.props.ctx.path.concat(value.length - 1), 'add');
    }
  }, {
    key: 'onItemChange',
    value: function onItemChange(itemIndex, itemValue, path, kind) {
      var value = this.state.value.slice();
      value[itemIndex] = itemValue;
      this.onChange(value, this.state.keys, path, kind);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(i) {
      var value = this.state.value.slice();
      value.splice(i, 1);
      var keys = this.state.keys.slice();
      keys.splice(i, 1);
      this.onChange(value, keys, this.props.ctx.path.concat(i), 'remove');
    }
  }, {
    key: 'moveUpItem',
    value: function moveUpItem(i) {
      if (i > 0) {
        this.onChange((0, _util.move)(this.state.value.slice(), i, i - 1), (0, _util.move)(this.state.keys.slice(), i, i - 1), this.props.ctx.path.concat(i), 'moveUp');
      }
    }
  }, {
    key: 'moveDownItem',
    value: function moveDownItem(i) {
      if (i < this.state.value.length - 1) {
        this.onChange((0, _util.move)(this.state.value.slice(), i, i + 1), (0, _util.move)(this.state.keys.slice(), i, i + 1), this.props.ctx.path.concat(i), 'moveDown');
      }
    }
  }, {
    key: 'getTemplates',
    value: function getTemplates() {
      return (0, _util.merge)(this.props.ctx.templates, this.props.options.templates);
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.props.options.template || this.getTemplates().list;
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this18 = this;

      var _props2 = this.props,
          options = _props2.options,
          ctx = _props2.ctx;

      var auto = this.getAuto();
      var i18n = this.getI18n();
      var config = this.getConfig();
      var stylesheet = this.getStylesheet();
      var templates = this.getTemplates();
      var value = this.state.value;
      return value.map(function (itemValue, i) {
        var type = _this18.typeInfo.innerType.meta.type;
        var itemType = (0, _util.getTypeFromUnion)(type, itemValue);
        var itemOptions = (0, _util.getComponentOptions)(options.item, noobj, itemValue, type);
        var ItemComponent = getFormComponent(itemType, itemOptions);
        var buttons = [];
        if (!options.disableRemove) {
          buttons.push({
            type: 'remove',
            label: i18n.remove,
            click: _this18.removeItem.bind(_this18, i)
          });
        }
        if (!options.disableOrder) {
          buttons.push({
            type: 'move-up',
            label: i18n.up,
            click: _this18.moveUpItem.bind(_this18, i)
          }, {
            type: 'move-down',
            label: i18n.down,
            click: _this18.moveDownItem.bind(_this18, i)
          });
        }
        return {
          input: _react2.default.createElement(ItemComponent, {
            ref: i,
            type: itemType,
            options: itemOptions,
            value: itemValue,
            onChange: _this18.onItemChange.bind(_this18, i),
            ctx: {
              context: ctx.context,
              uidGenerator: ctx.uidGenerator,
              auto: auto,
              config: config,
              label: ctx.label ? ctx.label + '[' + (i + 1) + ']' : String(i + 1),
              i18n: i18n,
              stylesheet: stylesheet,
              templates: templates,
              path: ctx.path.concat(i)
            }
          }),
          key: _this18.state.keys[i],
          buttons: buttons
        };
      });
    }
  }, {
    key: 'getLocals',
    value: function getLocals() {
      var options = this.props.options;
      var i18n = this.getI18n();
      var locals = babelHelpers.get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'getLocals', this).call(this);
      locals.add = options.disableAdd ? null : {
        type: 'add',
        label: i18n.add,
        click: this.addItem.bind(this)
      };
      locals.items = this.getItems();
      locals.className = options.className;
      return locals;
    }
  }]);
  return List;
}(Component);

List.transformer = {
  format: function format(value) {
    return Nil.is(value) ? noarr : value;
  },
  parse: function parse(value) {
    return value;
  }
};

var Form = function (_React$Component2) {
  babelHelpers.inherits(Form, _React$Component2);

  function Form() {
    babelHelpers.classCallCheck(this, Form);
    return babelHelpers.possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  babelHelpers.createClass(Form, [{
    key: 'validate',
    value: function validate() {
      return this.refs.input.validate();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var result = this.validate();
      return result.isValid() ? result.value : null;
    }
  }, {
    key: 'getComponent',
    value: function getComponent(path) {
      path = _tcombValidation2.default.String.is(path) ? path.split('.') : path;
      return path.reduce(function (input, name) {
        return input.refs[name];
      }, this.refs.input);
    }
  }, {
    key: 'getSeed',
    value: function getSeed() {
      var rii = this._reactInternalInstance;
      if (rii) {
        if (rii._hostContainerInfo) {
          return rii._hostContainerInfo._idCounter;
        }
        if (rii._nativeContainerInfo) {
          return rii._nativeContainerInfo._idCounter;
        }
        if (rii._rootNodeID) {
          return rii._rootNodeID;
        }
      }
      return '0';
    }
  }, {
    key: 'getUIDGenerator',
    value: function getUIDGenerator() {
      this.uidGenerator = this.uidGenerator || new _util.UIDGenerator(this.getSeed());
      return this.uidGenerator;
    }
  }, {
    key: 'render',
    value: function render() {

      var stylesheet = this.props.stylesheet || Form.stylesheet;
      var templates = this.props.templates || Form.templates;
      var i18n = this.props.i18n || Form.i18n;

      if (process.env.NODE_ENV !== 'production') {
        _tcombValidation2.default.assert(_tcombValidation2.default.isType(this.props.type), '[' + SOURCE + '] missing required prop type');
        _tcombValidation2.default.assert(_tcombValidation2.default.maybe(_tcombValidation2.default.Object).is(this.props.options) || _tcombValidation2.default.Function.is(this.props.options) || _tcombValidation2.default.list(_tcombValidation2.default.maybe(_tcombValidation2.default.Object)).is(this.props.options), '[' + SOURCE + '] prop options, if specified, must be an object, a function returning the options or a list of options for unions');
        _tcombValidation2.default.assert(_tcombValidation2.default.Object.is(stylesheet), '[' + SOURCE + '] missing stylesheet config');
        _tcombValidation2.default.assert(_tcombValidation2.default.Object.is(templates), '[' + SOURCE + '] missing templates config');
        _tcombValidation2.default.assert(_tcombValidation2.default.Object.is(i18n), '[' + SOURCE + '] missing i18n config');
      }

      var value = this.props.value;
      var type = (0, _util.getTypeFromUnion)(this.props.type, value);
      var options = (0, _util.getComponentOptions)(this.props.options, noobj, value, this.props.type);

      var uidGenerator = this.getUIDGenerator();

      return _react2.default.createElement(getFormComponent(type, options), {
        ref: 'input',
        type: type,
        options: options,
        value: this.props.value,
        onChange: this.props.onChange || noop,
        ctx: {
          context: this.props.context,
          uidGenerator: uidGenerator,
          auto: 'labels',
          stylesheet: stylesheet,
          templates: templates,
          i18n: i18n,
          path: []
        }
      });
    }
  }]);
  return Form;
}(_react2.default.Component);

module.exports = {
  getComponent: getFormComponent,
  Component: Component,
  Textbox: Textbox,
  Checkbox: Checkbox,
  Select: Select,
  DatePicker: DatePicker,
  Struct: Struct,
  List: List,
  Form: Form
};