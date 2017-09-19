Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ImageItem = require('./ImageItem');

var _ImageItem2 = babelHelpers.interopRequireDefault(_ImageItem);

var CameraRollPicker = function (_Component) {
  babelHelpers.inherits(CameraRollPicker, _Component);

  function CameraRollPicker(props) {
    babelHelpers.classCallCheck(this, CameraRollPicker);

    var _this = babelHelpers.possibleConstructorReturn(this, (CameraRollPicker.__proto__ || Object.getPrototypeOf(CameraRollPicker)).call(this, props));

    _this.state = {
      images: [],
      selected: _this.props.selected,
      lastCursor: null,
      loadingMore: false,
      noMore: false,
      dataSource: new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        } })
    };
    return _this;
  }

  babelHelpers.createClass(CameraRollPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetch();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this2 = this;

      if (!this.state.loadingMore) {
        this.setState({ loadingMore: true }, function () {
          _this2._fetch();
        });
      }
    }
  }, {
    key: '_fetch',
    value: function _fetch() {
      var _this3 = this;

      var _props = this.props,
          groupTypes = _props.groupTypes,
          assetType = _props.assetType;


      var fetchParams = {
        first: 1000,
        groupTypes: groupTypes,
        assetType: assetType
      };

      if (_reactNative.Platform.OS === "android") {
        delete fetchParams.groupTypes;
      }

      if (this.state.lastCursor) {
        fetchParams.after = this.state.lastCursor;
      }

      _reactNative.CameraRoll.getPhotos(fetchParams).then(function (data) {
        return _this3._appendImages(data);
      }, function (e) {
        return console.log(e);
      });
    }
  }, {
    key: '_appendImages',
    value: function _appendImages(data) {
      var assets = data.edges;
      var newState = {
        loadingMore: false
      };

      if (!data.page_info.has_next_page) {
        newState.noMore = true;
      }

      if (assets.length > 0) {
        newState.lastCursor = data.page_info.end_cursor;
        newState.images = this.state.images.concat(assets);
        newState.dataSource = this.state.dataSource.cloneWithRows(this._nEveryRow(newState.images, this.props.imagesPerRow));
      }

      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var dataSource = this.state.dataSource;
      var _props2 = this.props,
          scrollRenderAheadDistance = _props2.scrollRenderAheadDistance,
          initialListSize = _props2.initialListSize,
          pageSize = _props2.pageSize,
          removeClippedSubviews = _props2.removeClippedSubviews,
          imageMargin = _props2.imageMargin,
          backgroundColor = _props2.backgroundColor,
          emptyText = _props2.emptyText,
          emptyTextStyle = _props2.emptyTextStyle;


      var listViewOrEmptyText = dataSource.getRowCount() > 0 ? _react2.default.createElement(_reactNative.ListView, {
        style: { flex: 1 },
        scrollRenderAheadDistance: scrollRenderAheadDistance,
        initialListSize: initialListSize,
        pageSize: pageSize,
        removeClippedSubviews: removeClippedSubviews,
        renderFooter: this._renderFooterSpinner.bind(this),
        onEndReached: this._onEndReached.bind(this),
        dataSource: dataSource,
        renderRow: function renderRow(rowData) {
          return _this4._renderRow(rowData);
        } }) : _react2.default.createElement(
        _reactNative.Text,
        { style: [{ textAlign: 'center' }, emptyTextStyle] },
        emptyText
      );

      return _react2.default.createElement(
        _reactNative.View,
        {
          style: [styles.wrapper, { padding: imageMargin, paddingRight: 0, backgroundColor: backgroundColor }] },
        listViewOrEmptyText
      );
    }
  }, {
    key: '_renderImage',
    value: function _renderImage(item) {
      var selected = this.state.selected;
      var _props3 = this.props,
          imageMargin = _props3.imageMargin,
          selectedMarker = _props3.selectedMarker,
          imagesPerRow = _props3.imagesPerRow,
          containerWidth = _props3.containerWidth;


      var uri = item.node.image.uri;
      var isSelected = this._arrayObjectIndexOf(selected, 'uri', uri) >= 0 ? true : false;

      return _react2.default.createElement(_ImageItem2.default, {
        key: uri,
        item: item,
        selected: isSelected,
        imageMargin: imageMargin,
        selectedMarker: selectedMarker,
        imagesPerRow: imagesPerRow,
        containerWidth: containerWidth,
        onClick: this._selectImage.bind(this)
      });
    }
  }, {
    key: '_renderRow',
    value: function _renderRow(rowData) {
      var _this5 = this;

      var items = rowData.map(function (item) {
        if (item === null) {
          return null;
        }
        return _this5._renderImage(item);
      });

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.row },
        items
      );
    }
  }, {
    key: '_renderFooterSpinner',
    value: function _renderFooterSpinner() {
      if (!this.state.noMore) {
        return _react2.default.createElement(_reactNative.ActivityIndicator, { style: styles.spinner });
      }
      return null;
    }
  }, {
    key: '_onEndReached',
    value: function _onEndReached() {
      if (!this.state.noMore) {
        this.fetch();
      }
    }
  }, {
    key: '_selectImage',
    value: function _selectImage(image) {
      var _props4 = this.props,
          maximum = _props4.maximum,
          imagesPerRow = _props4.imagesPerRow,
          callback = _props4.callback;


      var selected = this.state.selected,
          index = this._arrayObjectIndexOf(selected, 'uri', image.uri);

      if (index >= 0) {
        selected.splice(index, 1);
      } else {
        if (selected.length < maximum) {
          selected.push(image);
        }
      }

      this.setState({
        selected: selected,
        dataSource: this.state.dataSource.cloneWithRows(this._nEveryRow(this.state.images, imagesPerRow))
      });

      callback(this.state.selected, image);
    }
  }, {
    key: '_nEveryRow',
    value: function _nEveryRow(data, n) {
      var result = [],
          temp = [];

      for (var i = 0; i < data.length; ++i) {
        if (i > 0 && i % n === 0) {
          result.push(temp);
          temp = [];
        }
        temp.push(data[i]);
      }

      if (temp.length > 0) {
        while (temp.length !== n) {
          temp.push(null);
        }
        result.push(temp);
      }

      return result;
    }
  }, {
    key: '_arrayObjectIndexOf',
    value: function _arrayObjectIndexOf(array, property, value) {
      return array.map(function (o) {
        return o[property];
      }).indexOf(value);
    }
  }]);
  return CameraRollPicker;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  wrapper: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  marker: {
    position: 'absolute',
    top: 5,
    backgroundColor: 'transparent'
  }
});

CameraRollPicker.propTypes = {
  scrollRenderAheadDistance: _react2.default.PropTypes.number,
  initialListSize: _react2.default.PropTypes.number,
  pageSize: _react2.default.PropTypes.number,
  removeClippedSubviews: _react2.default.PropTypes.bool,
  groupTypes: _react2.default.PropTypes.oneOf(['Album', 'All', 'Event', 'Faces', 'Library', 'PhotoStream', 'SavedPhotos']),
  maximum: _react2.default.PropTypes.number,
  assetType: _react2.default.PropTypes.oneOf(['Photos', 'Videos', 'All']),
  imagesPerRow: _react2.default.PropTypes.number,
  imageMargin: _react2.default.PropTypes.number,
  containerWidth: _react2.default.PropTypes.number,
  callback: _react2.default.PropTypes.func,
  selected: _react2.default.PropTypes.array,
  selectedMarker: _react2.default.PropTypes.element,
  backgroundColor: _react2.default.PropTypes.string,
  emptyText: _react2.default.PropTypes.string,
  emptyTextStyle: _reactNative.Text.propTypes.style
};

CameraRollPicker.defaultProps = {
  scrollRenderAheadDistance: 500,
  initialListSize: 1,
  pageSize: 3,
  removeClippedSubviews: true,
  groupTypes: 'SavedPhotos',
  maximum: 15,
  imagesPerRow: 3,
  imageMargin: 5,
  assetType: 'Photos',
  backgroundColor: 'white',
  selected: [],
  callback: function callback(selectedImages, currentImage) {
    console.log(currentImage);
    console.log(selectedImages);
  },
  emptyText: 'No photos.'
};

exports.default = CameraRollPicker;