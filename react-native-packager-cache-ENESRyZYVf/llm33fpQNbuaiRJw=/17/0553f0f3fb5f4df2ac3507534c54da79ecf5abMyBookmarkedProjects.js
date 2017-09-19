'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var MyBookmarkedProjects = function (_Component) {
  babelHelpers.inherits(MyBookmarkedProjects, _Component);

  function MyBookmarkedProjects(props) {
    babelHelpers.classCallCheck(this, MyBookmarkedProjects);

    var _this = babelHelpers.possibleConstructorReturn(this, (MyBookmarkedProjects.__proto__ || Object.getPrototypeOf(MyBookmarkedProjects)).call(this, props));

    _this._renderBookmark = _this._renderBookmark.bind(_this);
    _this._renderEmptyView = _this._renderEmptyView.bind(_this);
    return _this;
  }

  babelHelpers.createClass(MyBookmarkedProjects, [{
    key: '_renderEmptyView',
    value: function _renderEmptyView() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: [_variables.layout.centerCenter] },
        _react2.default.createElement(
          _reactNative.Text,
          { style: [_variables.layout.h2] },
          'You don\'t have any bookmarked projects yet.'
        )
      );
    }
  }, {
    key: '_renderBookmark',
    value: function _renderBookmark(bookmarks) {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 } },
        _react2.default.createElement(
          _reactNative.View,
          { style: { paddingBottom: 10, justifyContent: 'center' } },
          _react2.default.createElement(
            _reactNative.Text,
            { style: [_variables.layout.h2] },
            'My bookmarked products'
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: [{ flex: 1, height: 120 }] },
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { style: [_variables.layout.row, { flex: 1 }], onPress: this.props.onBookmarkDetailPressed },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { width: 100, padding: 20, borderRadius: 5, backgroundColor: '#efefef' }] },
              _react2.default.createElement(
                _reactNative.View,
                { style: [_variables.layout.centerCenter] },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [_variables.layout.h2, { fontSize: 25 }] },
                  '+9'
                ),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [{ fontFamily: _variables.font.regular, fontSize: 15 }] },
                  'other'
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.row, { flex: 1 }] },
              bookmarks.map(function (project, i) {
                return _react2.default.createElement(
                  _reactNative.View,
                  { style: { width: 100, padding: 3 } },
                  _react2.default.createElement(_reactNative.Image, { style: { flex: 1, width: null, height: null, borderRadius: 5 },
                    source: { uri: project.cover_url }
                  })
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var lastBookmarks = this.props.lastBookmarks;


      return _react2.default.createElement(
        _reactNative.View,
        { style: [_variables.layout.row, { borderRadius: 10, paddingLeft: 20 }] },
        lastBookmarks.get('bookmarks').length == 0 ? this._renderEmptyView() : this._renderBookmark(lastBookmarks.get('bookmarks'))
      );
    }
  }]);
  return MyBookmarkedProjects;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({});

exports.default = MyBookmarkedProjects;