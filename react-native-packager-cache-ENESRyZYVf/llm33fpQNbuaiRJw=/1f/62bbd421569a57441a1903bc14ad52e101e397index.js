'use strict';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Tabs = function (_Component) {
    babelHelpers.inherits(Tabs, _Component);

    function Tabs() {
        babelHelpers.classCallCheck(this, Tabs);
        return babelHelpers.possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    babelHelpers.createClass(Tabs, [{
        key: 'onSelect',
        value: function onSelect(el) {
            if (el.props.onSelect) {
                el.props.onSelect(el);
            } else if (this.props.onSelect) {
                this.props.onSelect(el);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var selected = this.props.selected;
            if (!selected) {
                _react2.default.Children.forEach(this.props.children.filter(function (c) {
                    return c;
                }), function (el) {
                    if (!selected || el.props.initial) {
                        selected = el.props.name || el.key;
                    }
                });
            }
            return _react2.default.createElement(
                _reactNative.View,
                { style: [styles.tabbarView, this.props.style] },
                _react2.default.Children.map(this.props.children.filter(function (c) {
                    return c;
                }), function (el) {
                    return _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        { key: el.props.name + "touch",
                            style: [styles.iconView, _this2.props.iconStyle, (el.props.name || el.key) == selected ? _this2.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}],
                            onPress: function onPress() {
                                return !self.props.locked && self.onSelect(el);
                            },
                            onLongPress: function onLongPress() {
                                return self.onSelect(el);
                            },
                            activeOpacity: el.props.pressOpacity },
                        selected == (el.props.name || el.key) ? _react2.default.cloneElement(el, { selected: true, style: [el.props.style, _this2.props.selectedStyle, el.props.selectedStyle] }) : el
                    );
                })
            );
        }
    }]);
    return Tabs;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
    tabbarView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 50,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = Tabs;