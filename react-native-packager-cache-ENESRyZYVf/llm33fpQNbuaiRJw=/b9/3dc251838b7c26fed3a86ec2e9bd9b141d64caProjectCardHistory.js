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
            project.recommended && _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: [_variables.layout.centerBetween, _variables.layout.row, { height: 20, borderRadius: 35 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [{ width: 200, justifyContent: 'center' }] },
                _react2.default.createElement(_Ionicons2.default, { name: 'ios-heart',
                  size: 20,
                  color: _variables2.default.BRAND_RED
                })
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, justifyContent: 'center' } },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [{ fontFamily: _variables.font.regular, fontSize: 12 }] },
                  '\u0421\u0410\u0419\u0428\u0410\u0410\u0413\u0414\u0421\u0410\u041D'
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, { paddingVertical: 10, paddingRight: 10 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.centerCenter, _variables.layout.row, { flex: 1 }] },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_variables.layout.centerCenter, { width: 40 }] },
                  _react2.default.createElement(_reactNative.View, { style: [styles.circleIndicator, { borderColor: '#9299A7' }] })
                ),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [_variables.layout.h2, { flex: 1 }] },
                  project.name
                )
              ),
              _react2.default.createElement(_reactNative.View, { style: [_variables.layout.endCenter, { width: 20 }] })
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, _variables.layout.centerCenter, { paddingVertical: 5 }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.row, _variables.layout.centerStart, { width: 200 }] },
                _react2.default.createElement(_Ionicons2.default, { name: 'md-pricetag',
                  size: 20,
                  color: "#9299A7" }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { fontFamily: _variables.font.regular, marginLeft: 5 } },
                  '\u0422\u04E9\u0441\u043B\u0438\u0439\u043D \u04AF\u043D\u044D'
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ fontFamily: _variables.font.regular, color: _variables2.default.BRAND_RED, flex: 1 }] },
                project.price,
                '\u20AE'
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
                  '\u04AE\u0440\u0433\u044D\u043B\u0436\u0438\u043B\u0441\u044D\u043D \u0445\u0443\u0433\u0430\u0446\u0430\u0430'
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ alignItems: 'flex-end', justifyContent: 'center', fontFamily: _variables.font.regular, flex: 1 }] },
                project.end_date
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, _variables.layout.centerCenter, { paddingVertical: 5 }] },
              _react2.default.createElement(_reactNative.Image, { style: styles.avatar,
                source: { uri: project.hirer.avatar_url }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.row, { flex: 1, marginLeft: 10 }] },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_variables.layout.startCenter] },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: [{ fontFamily: _variables.font.bold }] },
                    project.hirer.first_name,
                    ' ',
                    project.hirer.last_name
                  ),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: [{ fontFamily: _variables.font.regular }] },
                    '\u0422\u04E9\u0441\u043B\u0438\u0439\u043D \u04AF\u043D\u044D\u043B\u0433\u044D\u044D '
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_variables.layout.row, _variables.layout.centerCenter, { flex: 1, paddingRight: 10 }] },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: [{ fontFamily: _variables.font.regular, color: _variables2.default.BRAND_GREEN, fontSize: 18 }] },
                    project.feedback
                  ),
                  _react2.default.createElement(_reactNative.View, null)
                )
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
  },

  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30
  }
});

ProjectCardBid.propTypes = {
  project: _react.PropTypes.object
};