Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsTest = exports.ActionMap = undefined;

var _ActionMap;

var _Util = require('./Util');

var _Scene = require('./Scene');

var _Scene2 = babelHelpers.interopRequireDefault(_Scene);

var _ActionConst = require('./ActionConst');

var ActionConst = babelHelpers.interopRequireWildcard(_ActionConst);
var ActionMap = exports.ActionMap = (_ActionMap = {
  jump: ActionConst.JUMP,
  push: ActionConst.PUSH,
  replace: ActionConst.REPLACE,
  back: ActionConst.BACK,
  BackAction: ActionConst.BACK_ACTION,
  popAndReplace: ActionConst.POP_AND_REPLACE,
  popTo: ActionConst.POP_TO,
  refresh: ActionConst.REFRESH,
  reset: ActionConst.RESET,
  focus: ActionConst.FOCUS,
  pushOrPop: ActionConst.PUSH_OR_POP,
  androidBack: ActionConst.ANDROID_BACK
}, babelHelpers.defineProperty(_ActionMap, ActionConst.JUMP, ActionConst.JUMP), babelHelpers.defineProperty(_ActionMap, ActionConst.PUSH, ActionConst.PUSH), babelHelpers.defineProperty(_ActionMap, ActionConst.REPLACE, ActionConst.REPLACE), babelHelpers.defineProperty(_ActionMap, ActionConst.BACK, ActionConst.BACK), babelHelpers.defineProperty(_ActionMap, ActionConst.BACK_ACTION, ActionConst.BACK_ACTION), babelHelpers.defineProperty(_ActionMap, ActionConst.POP_AND_REPLACE, ActionConst.POP_AND_REPLACE), babelHelpers.defineProperty(_ActionMap, ActionConst.POP_TO, ActionConst.POP_TO), babelHelpers.defineProperty(_ActionMap, ActionConst.REFRESH, ActionConst.REFRESH), babelHelpers.defineProperty(_ActionMap, ActionConst.RESET, ActionConst.RESET), babelHelpers.defineProperty(_ActionMap, ActionConst.FOCUS, ActionConst.FOCUS), babelHelpers.defineProperty(_ActionMap, ActionConst.PUSH_OR_POP, ActionConst.PUSH_OR_POP), babelHelpers.defineProperty(_ActionMap, ActionConst.ANDROID_BACK, ActionConst.ANDROID_BACK), _ActionMap);

function filterParam(data) {
  if (data.toString() !== '[object Object]') {
    return { data: data };
  }
  var proto = (data || {}).constructor.name;

  if (!data || proto !== 'Object') {
    return {};
  }
  return data;
}

var reservedKeys = ['create', 'callback', 'iterate', 'current'].concat(babelHelpers.toConsumableArray(Object.keys(ActionMap)));

function getInheritProps(props) {
  var key = props.key,
      style = props.style,
      type = props.type,
      component = props.component,
      tabs = props.tabs,
      sceneKey = props.sceneKey,
      parent = props.parent,
      children = props.children,
      parentProps = babelHelpers.objectWithoutProperties(props, ['key', 'style', 'type', 'component', 'tabs', 'sceneKey', 'parent', 'children']);

  return parentProps.passProps ? parentProps : {};
}

var Actions = function () {
  function Actions() {
    babelHelpers.classCallCheck(this, Actions);

    this.callback = null;
    this.create = this.create.bind(this);
    this.iterate = this.iterate.bind(this);
    this.pop = this.pop.bind(this);
    this.refresh = this.refresh.bind(this);
    this.focus = this.focus.bind(this);
  }

  babelHelpers.createClass(Actions, [{
    key: 'iterate',
    value: function iterate(root) {
      var parentProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this = this;

      var refsParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var wrapBy = arguments[3];

      var refs = refsParam;
      (0, _Util.assert)(root.props, 'props should be defined for stack');
      var key = root.key;
      (0, _Util.assert)(key, 'unique key should be defined ');
      (0, _Util.assert)(reservedKeys.indexOf(key) === -1, '\'' + key + '\' is not allowed as key name. Reserved keys: [' + reservedKeys.join(', ') + ']');
      var _root$props = root.props,
          children = _root$props.children,
          component = _root$props.component,
          staticProps = babelHelpers.objectWithoutProperties(_root$props, ['children', 'component']);

      var type = root.props.type || (parentProps.tabs ? ActionConst.JUMP : ActionConst.PUSH);
      if (type === 'switch') {
        type = ActionConst.JUMP;
      }
      var inheritProps = getInheritProps(parentProps);
      var componentProps = component ? { component: wrapBy(component) } : {};

      if (wrapBy) {
        Object.keys(staticProps).forEach(function (prop) {
          var componentClass = staticProps[prop];
          if (componentClass && componentClass.prototype && componentClass.prototype.render) {
            componentProps[prop] = wrapBy(componentClass);
            delete staticProps[prop];
          }
        });
      }
      var res = babelHelpers.extends({
        key: key,
        name: key,
        sceneKey: key,
        parent: parentProps.key,
        type: type
      }, inheritProps, staticProps, componentProps);
      var list = children || [];
      var normalized = [];
      if (!(list instanceof Array)) {
        list = [list];
      }
      list.forEach(function (item) {
        if (item) {
          if (item instanceof Array) {
            item.forEach(function (it) {
              normalized.push(it);
            });
          } else {
            normalized.push(item);
          }
        }
      });
      list = normalized;

      var condition = function condition(el) {
        return !el.props.component && !el.props.children && !el.props.onPress && (!el.props.type || ActionMap[el.props.type] === ActionConst.REFRESH);
      };

      var baseKey = root.key;
      var subStateParent = parentProps.key;
      var subStates = list.filter(condition);
      list = list.filter(function (el) {
        return !condition(el);
      });
      if (list.length) {
        res.children = list.map(function (c) {
          return _this.iterate(c, res, refs, wrapBy).key;
        });
      } else {
        if (!staticProps.onPress) {
          (0, _Util.assert)(component, 'component property is not set for key=' + key);
        }

        if (parentProps.tabs) {
          var innerKey = res.key + '_';
          baseKey = innerKey;
          subStateParent = res.key;
          var inner = babelHelpers.extends({}, res, {
            name: key,
            key: innerKey,
            sceneKey: innerKey,
            type: ActionConst.PUSH,
            parent: res.key });
          refs[innerKey] = inner;
          res.children = [innerKey];
          delete res.component;
        }
        res.index = 0;
      }

      var _loop = function _loop(el) {
        refs[el.key] = babelHelpers.extends({ key: el.key,
          name: el.key
        }, el.props, {
          type: ActionConst.REFRESH,
          base: baseKey,
          parent: subStateParent });
        if (_this[el.key]) {
          console.log('Key ' + el.key + ' is already defined!');
        }
        _this[el.key] = function () {
          var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          (0, _Util.assert)(_this.callback, 'Actions.callback is not defined!');
          _this.callback(babelHelpers.extends({ key: el.key, type: ActionConst.REFRESH }, filterParam(props)));
        };
      };

      for (var _iterator = subStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var el = _ref;

        _loop(el);
      }
      if (this[key]) {
        console.log('Key ' + key + ' is already defined!');
      }
      this[key] = function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        (0, _Util.assert)(_this.callback, 'Actions.callback is not defined!');
        _this.callback(babelHelpers.extends({ key: key, type: type }, filterParam(props)));
      };
      refs[res.key] = res;

      return res;
    }
  }, {
    key: 'popTo',
    value: function popTo() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.POP_TO }));
    }
  }, {
    key: 'pop',
    value: function pop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.BACK_ACTION }));
    }
  }, {
    key: 'jump',
    value: function jump() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.JUMP }));
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.REFRESH }));
    }
  }, {
    key: 'focus',
    value: function focus() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.FOCUS }));
    }
  }, {
    key: 'androidBack',
    value: function androidBack() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.callback(babelHelpers.extends({}, filterParam(props), { type: ActionConst.ANDROID_BACK }));
    }
  }, {
    key: 'create',
    value: function create(scene) {
      var wrapBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
        return x;
      };

      (0, _Util.assert)(scene, 'root scene should be defined');
      var refs = {};
      this.iterate(scene, {}, refs, wrapBy);
      return refs;
    }
  }]);
  return Actions;
}();

exports.ActionsTest = Actions;
exports.default = new Actions();