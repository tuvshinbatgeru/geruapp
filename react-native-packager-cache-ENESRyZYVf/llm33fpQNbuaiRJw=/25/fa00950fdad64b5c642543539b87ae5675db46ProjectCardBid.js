Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _reactNativeLinearGradient = require('react-native-linear-gradient');

var _reactNativeLinearGradient2 = babelHelpers.interopRequireDefault(_reactNativeLinearGradient);

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var ProjectCardBid = function (_Component) {
  babelHelpers.inherits(ProjectCardBid, _Component);

  function ProjectCardBid() {
    babelHelpers.classCallCheck(this, ProjectCardBid);
    return babelHelpers.possibleConstructorReturn(this, (ProjectCardBid.__proto__ || Object.getPrototypeOf(ProjectCardBid)).apply(this, arguments));
  }

  babelHelpers.createClass(ProjectCardBid, [{
    key: 'render',
    value: function render() {
      var project = this.props.project;


      return _react2.default.createElement(
        _reactNative.TouchableHighlight,
        {
          underlayColor: '#efefef'
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: [styles.container, _variables.layout.row] },
          _react2.default.createElement(
            _reactNative.View,
            { style: [{ flex: 1 }] },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, { paddingVertical: 3, paddingRight: 10 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.centerCenter, _variables.layout.row, { flex: 1 }] },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_variables.layout.centerCenter, { width: 40 }] },
                  _react2.default.createElement(_reactNative.View, { style: [styles.circleIndicator, { borderColor: '#FE5F55' }] })
                ),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [_variables.layout.h2, { flex: 1 }] },
                  project.name
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.endCenter, { width: 20 }] },
                _react2.default.createElement(_Ionicons2.default, { name: 'md-more',
                  size: 30,
                  color: _variables2.default.BRAND_GRAY
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, _variables.layout.centerCenter] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.row, _variables.layout.centerStart, { width: 200 }] },
                _react2.default.createElement(_Ionicons2.default, { name: 'md-pricetag',
                  size: 20,
                  color: "#9299A7" }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { fontFamily: _variables.font.regular, marginLeft: 5 } },
                  '\u0422\u0430 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u04AF\u043D\u044D'
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ fontFamily: _variables.font.regular, color: _variables2.default.BRAND_RED, flex: 1 }] },
                project.bid_price,
                '\u20AE'
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerBetween, { paddingVertical: 5 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.row, _variables.layout.centerCenter] },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_variables.layout.row, _variables.layout.centerStart, { width: 200 }] },
                  _react2.default.createElement(_Ionicons2.default, { name: 'ios-contacts',
                    size: 20,
                    color: "#9299A7" }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: { fontFamily: _variables.font.regular, marginLeft: 5 } },
                    '\u041D\u0438\u0439\u0442 \u0441\u0430\u043D\u0430\u043B'
                  )
                ),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [{ flex: 1, fontFamily: _variables.font.regular }] },
                  project.bids_count
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, _variables.layout.centerBetween, { paddingRight: 10 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.row, _variables.layout.centerStart, { width: 200 }] },
                _react2.default.createElement(_Ionicons2.default, { name: 'md-calendar',
                  size: 20,
                  color: "#9299A7" }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { fontFamily: _variables.font.regular, marginLeft: 5 } },
                  '\u0428\u0430\u043B\u0433\u0430\u0440\u0443\u0443\u043B\u0430\u0445 \u043E\u0433\u043D\u043E\u043E'
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ fontFamily: _variables.font.regular, flex: 1 }] },
                project.end_date
              )
            )
          )
        )
      );
    }
  }]);
  return ProjectCardBid;
}(_react.Component);

exports.default = ProjectCardBid;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _variables2.default.BRAND_WHITE,
    borderRadius: 5,
    paddingVertical: 20,
    paddingRight: 10,
    paddingLeft: 20
  },

  circleIndicator: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 3
  }
});

ProjectCardBid.propTypes = {
  project: _react.PropTypes.object
};