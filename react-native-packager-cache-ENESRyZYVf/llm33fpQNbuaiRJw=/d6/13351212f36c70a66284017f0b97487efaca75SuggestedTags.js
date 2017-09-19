Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var SuggestedTags = function (_Component) {
	babelHelpers.inherits(SuggestedTags, _Component);

	function SuggestedTags() {
		babelHelpers.classCallCheck(this, SuggestedTags);
		return babelHelpers.possibleConstructorReturn(this, (SuggestedTags.__proto__ || Object.getPrototypeOf(SuggestedTags)).apply(this, arguments));
	}

	babelHelpers.createClass(SuggestedTags, [{
		key: 'matchTag',
		value: function matchTag(searchTag, tag) {
			var str = searchTag.split(" ");

			if (str.length > 0) {
				return tag.substring(str[str.length - 1].length);
			}

			return ' ' + tag.substring(searchTag.length);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    tags = _props.tags,
			    searchTag = _props.searchTag;

			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.tagContainer },
				tags.map(function (tag, i) {
					return _react2.default.createElement(
						_reactNative.TouchableOpacity,
						{ style: { paddingVertical: 3 }, onPress: function onPress() {
								return _this2.props.onTagPressed(searchTag, tag);
							} },
						_react2.default.createElement(
							_reactNative.Text,
							{ style: [styles.tagText, styles.matchedString] },
							searchTag,
							_react2.default.createElement(
								_reactNative.Text,
								{ style: [styles.tagText, styles.autoCompleteString] },
								_this2.matchTag(searchTag, tag)
							)
						)
					);
				})
			);
		}
	}]);
	return SuggestedTags;
}(_react.Component);

exports.default = SuggestedTags;


var styles = _reactNative.StyleSheet.create({
	tagContainer: {
		flex: 1,
		paddingHorizontal: 10
	},

	tagText: {
		fontSize: 21,
		fontFamily: _variables2.default.FONT_HEAVY
	},

	matchedString: {
		color: '#242424'
	},

	autoCompleteString: {
		color: '#b5b5b5'
	}

});

SuggestedTags.propTypes = {
	searchTag: _react.PropTypes.string,
	tags: _react.PropTypes.array,
	fetching: _react.PropTypes.bool
};

SuggestedTags.defaultProps = {
	searchTag: ''
};