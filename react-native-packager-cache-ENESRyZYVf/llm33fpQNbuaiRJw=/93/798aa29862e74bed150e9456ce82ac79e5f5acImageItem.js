Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var ImageItem = function (_Component) {
  babelHelpers.inherits(ImageItem, _Component);

  function ImageItem(props) {
    babelHelpers.classCallCheck(this, ImageItem);
    return babelHelpers.possibleConstructorReturn(this, (ImageItem.__proto__ || Object.getPrototypeOf(ImageItem)).call(this, props));
  }

  babelHelpers.createClass(ImageItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _Dimensions$get = _reactNative.Dimensions.get('window'),
          width = _Dimensions$get.width;

      var _props = this.props,
          imageMargin = _props.imageMargin,
          imagesPerRow = _props.imagesPerRow,
          containerWidth = _props.containerWidth;


      if (typeof containerWidth != "undefined") {
        width = containerWidth;
      }
      this._imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          item = _props2.item,
          selected = _props2.selected,
          selectedMarker = _props2.selectedMarker,
          imageMargin = _props2.imageMargin;


      var marker = selectedMarker ? selectedMarker : _react2.default.createElement(_reactNative.Image, {
        style: [styles.marker, { width: 25, height: 25 }],
        source: require('./circle-check.png')
      });

      var image = item.node.image;

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          style: { marginBottom: imageMargin, marginRight: imageMargin },
          onPress: function onPress() {
            return _this2._handleClick(image);
          } },
        _react2.default.createElement(
          _reactNative.Image,
          {
            source: { uri: image.uri },
            style: { height: this._imageSize, width: this._imageSize } },
          selected ? marker : null
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(item) {
      this.props.onClick(item);
    }
  }]);
  return ImageItem;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent'
  }
});

ImageItem.defaultProps = {
  item: {},
  selected: false
};

ImageItem.propTypes = {
  item: _react2.default.PropTypes.object,
  selected: _react2.default.PropTypes.bool,
  selectedMarker: _react2.default.PropTypes.element,
  imageMargin: _react2.default.PropTypes.number,
  imagesPerRow: _react2.default.PropTypes.number,
  onClick: _react2.default.PropTypes.func
};

exports.default = ImageItem;