'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var _require = require('react-native'),
    View = _require.View,
    StyleSheet = _require.StyleSheet,
    PanResponder = _require.PanResponder,
    Animated = _require.Animated,
    TouchableWithoutFeedback = _require.TouchableWithoutFeedback,
    Dimensions = _require.Dimensions,
    Easing = _require.Easing,
    BackAndroid = _require.BackAndroid,
    BackHandler = _require.BackHandler,
    Platform = _require.Platform,
    Modal = _require.Modal,
    Keyboard = _require.Keyboard;

var createReactClass = require('create-react-class');

var BackButton = BackHandler || BackAndroid;

var screen = Dimensions.get('window');

var styles = StyleSheet.create({

  wrapper: {
    backgroundColor: "white"
  },

  transparent: {
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  absolute: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

});

var ModalBox = createReactClass({
  displayName: 'ModalBox',


  propTypes: {
    isOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    startOpen: PropTypes.bool,
    backdropPressToClose: PropTypes.bool,
    swipeToClose: PropTypes.bool,
    swipeThreshold: PropTypes.number,
    swipeArea: PropTypes.number,
    position: PropTypes.string,
    entry: PropTypes.string,
    backdrop: PropTypes.bool,
    backdropOpacity: PropTypes.number,
    backdropColor: PropTypes.string,
    backdropContent: PropTypes.element,
    animationDuration: PropTypes.number,
    backButtonClose: PropTypes.bool,
    easing: PropTypes.func,
    coverScreen: PropTypes.bool,
    keyboardTopOffset: PropTypes.number,

    onClosed: PropTypes.func,
    onOpened: PropTypes.func,
    onClosingState: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      startOpen: false,
      backdropPressToClose: true,
      swipeToClose: true,
      swipeThreshold: 50,
      position: "center",
      backdrop: true,
      backdropOpacity: 0.5,
      backdropColor: "black",
      backdropContent: null,
      animationDuration: 400,
      backButtonClose: false,
      easing: Easing.elastic(0.8),
      coverScreen: false,
      keyboardTopOffset: Platform.OS == 'ios' ? 22 : 0
    };
  },

  getInitialState: function getInitialState() {
    var position = this.props.entry === 'top' ? -screen.height : screen.height;
    return {
      position: this.props.startOpen ? new Animated.Value(0) : new Animated.Value(position),
      backdropOpacity: new Animated.Value(0),
      isOpen: this.props.startOpen,
      isAnimateClose: false,
      isAnimateOpen: false,
      swipeToClose: false,
      height: screen.height,
      width: screen.width,
      containerHeight: screen.height,
      containerWidth: screen.width,
      isInitialized: false,
      keyboardOffset: 0
    };
  },

  onBackPress: function onBackPress() {
    this.close();
    return true;
  },


  componentWillMount: function componentWillMount() {
    this.createPanResponder();
    this.handleOpenning(this.props);

    if (Platform.OS === 'ios') {
      this.subscriptions = [Keyboard.addListener('keyboardWillChangeFrame', this.onKeyboardChange), Keyboard.addListener('keyboardDidHide', this.onKeyboardHide)];
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.subscriptions) this.subscriptions.forEach(function (sub) {
      return sub.remove();
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.props.isOpen != props.isOpen) {
      this.handleOpenning(props);
    }
  },

  handleOpenning: function handleOpenning(props) {
    if (typeof props.isOpen == "undefined") return;
    if (props.isOpen) this.open();else this.close();
  },

  onKeyboardHide: function onKeyboardHide(evt) {
    this.state.keyboardOffset = 0;
  },

  onKeyboardChange: function onKeyboardChange(evt) {
    if (!evt) return;
    if (!this.state.isOpen) return;
    var keyboardFrame = evt.endCoordinates;
    var keyboardHeight = this.state.containerHeight - keyboardFrame.screenY;

    this.state.keyboardOffset = keyboardHeight;
    this.animateOpen();
  },

  animateBackdropOpen: function animateBackdropOpen() {
    var _this = this;

    if (this.state.isAnimateBackdrop) {
      this.state.animBackdrop.stop();
      this.state.isAnimateBackdrop = false;
    }

    this.state.isAnimateBackdrop = true;
    this.state.animBackdrop = Animated.timing(this.state.backdropOpacity, {
      toValue: 1,
      duration: this.props.animationDuration
    });
    this.state.animBackdrop.start(function () {
      _this.state.isAnimateBackdrop = false;
    });
  },

  animateBackdropClose: function animateBackdropClose() {
    var _this2 = this;

    if (this.state.isAnimateBackdrop) {
      this.state.animBackdrop.stop();
      this.state.isAnimateBackdrop = false;
    }

    this.state.isAnimateBackdrop = true;
    this.state.animBackdrop = Animated.timing(this.state.backdropOpacity, {
      toValue: 0,
      duration: this.props.animationDuration
    });
    this.state.animBackdrop.start(function () {
      _this2.state.isAnimateBackdrop = false;
    });
  },

  stopAnimateOpen: function stopAnimateOpen() {
    if (this.state.isAnimateOpen) {
      if (this.state.animOpen) this.state.animOpen.stop();
      this.state.isAnimateOpen = false;
    }
  },

  animateOpen: function animateOpen() {
    var _this3 = this;

    this.stopAnimateClose();

    if (this.props.backdrop) this.animateBackdropOpen();

    this.state.isAnimateOpen = true;

    requestAnimationFrame(function () {
      _this3.state.positionDest = _this3.calculateModalPosition(_this3.state.containerHeight - _this3.state.keyboardOffset, _this3.state.containerWidth);
      if (_this3.state.keyboardOffset && _this3.state.positionDest < _this3.props.keyboardTopOffset) {
        _this3.state.positionDest = _this3.props.keyboardTopOffset;
      }
      _this3.state.animOpen = Animated.timing(_this3.state.position, {
        toValue: _this3.state.positionDest,
        duration: _this3.props.animationDuration,
        easing: _this3.props.easing
      });
      _this3.state.animOpen.start(function () {
        if (!_this3.state.isOpen && _this3.props.onOpened) _this3.props.onOpened();
        _this3.state.isAnimateOpen = false;
        _this3.state.isOpen = true;
      });
    });
  },

  stopAnimateClose: function stopAnimateClose() {
    if (this.state.isAnimateClose) {
      if (this.state.animClose) this.state.animClose.stop();
      this.state.isAnimateClose = false;
    }
  },

  animateClose: function animateClose() {
    var _this4 = this;

    this.stopAnimateOpen();

    if (this.props.backdrop) this.animateBackdropClose();

    this.state.isAnimateClose = true;
    this.state.animClose = Animated.timing(this.state.position, {
      toValue: this.props.entry === 'top' ? -this.state.containerHeight : this.state.containerHeight,
      duration: this.props.animationDuration
    });
    this.state.animClose.start(function () {
      Keyboard.dismiss();
      _this4.state.isAnimateClose = false;
      _this4.state.isOpen = false;
      _this4.setState({});
      if (_this4.props.onClosed) _this4.props.onClosed();
    });
  },

  calculateModalPosition: function calculateModalPosition(containerHeight, containerWidth) {
    var position = 0;

    if (this.props.position == "bottom") {
      position = containerHeight - this.state.height;
    } else if (this.props.position == "center") {
      position = containerHeight / 2 - this.state.height / 2;
    }

    if (position < 0) position = 0;
    return position;
  },

  createPanResponder: function createPanResponder() {
    var _this5 = this;

    var closingState = false;
    var inSwipeArea = false;

    var onPanRelease = function onPanRelease(evt, state) {
      if (!inSwipeArea) return;
      inSwipeArea = false;
      if (_this5.props.entry === 'top' ? -state.dy > _this5.props.swipeThreshold : state.dy > _this5.props.swipeThreshold) _this5.animateClose();else _this5.animateOpen();
    };

    var animEvt = Animated.event([null, { customY: this.state.position }]);

    var onPanMove = function onPanMove(evt, state) {
      var newClosingState = _this5.props.entry === 'top' ? -state.dy > _this5.props.swipeThreshold : state.dy > _this5.props.swipeThreshold;
      if (_this5.props.entry === 'top' ? state.dy > 0 : state.dy < 0) return;
      if (newClosingState != closingState && _this5.props.onClosingState) _this5.props.onClosingState(newClosingState);
      closingState = newClosingState;
      state.customY = state.dy + _this5.state.positionDest;

      animEvt(evt, state);
    };

    var onPanStart = function onPanStart(evt, state) {
      if (!_this5.props.swipeToClose || _this5.props.isDisabled || _this5.props.swipeArea && evt.nativeEvent.pageY - _this5.state.positionDest > _this5.props.swipeArea) {
        inSwipeArea = false;
        return false;
      }
      inSwipeArea = true;
      return true;
    };

    this.state.pan = PanResponder.create({
      onStartShouldSetPanResponder: onPanStart,
      onPanResponderMove: onPanMove,
      onPanResponderRelease: onPanRelease,
      onPanResponderTerminate: onPanRelease
    });
  },

  onViewLayout: function onViewLayout(evt) {
    var height = evt.nativeEvent.layout.height;
    var width = evt.nativeEvent.layout.width;

    var newState = {};
    if (height !== this.state.height) newState.height = height;
    if (width !== this.state.width) newState.width = width;
    this.setState(newState);

    if (this.onViewLayoutCalculated) this.onViewLayoutCalculated();
  },

  onContainerLayout: function onContainerLayout(evt) {
    var height = evt.nativeEvent.layout.height;
    var width = evt.nativeEvent.layout.width;

    if (height == this.state.containerHeight && width == this.state.containerWidth) {
      this.setState({ isInitialized: true });
      return;
    }

    if (this.state.isOpen || this.state.isAnimateOpen) {
      this.animateOpen();
    }

    if (this.props.onLayout) this.props.onLayout(evt);
    this.setState({
      isInitialized: true,
      containerHeight: height,
      containerWidth: width
    });
  },

  renderBackdrop: function renderBackdrop() {
    var backdrop = null;

    if (this.props.backdrop) {
      backdrop = React.createElement(
        TouchableWithoutFeedback,
        { onPress: this.props.backdropPressToClose ? this.close : null },
        React.createElement(
          Animated.View,
          { style: [styles.absolute, { opacity: this.state.backdropOpacity }] },
          React.createElement(View, { style: [styles.absolute, { backgroundColor: this.props.backdropColor, opacity: this.props.backdropOpacity }] }),
          this.props.backdropContent || []
        )
      );
    }

    return backdrop;
  },

  renderContent: function renderContent() {
    var size = { height: this.state.containerHeight, width: this.state.containerWidth };
    var offsetX = (this.state.containerWidth - this.state.width) / 2;

    return React.createElement(
      Animated.View,
      babelHelpers.extends({
        onLayout: this.onViewLayout,
        style: [styles.wrapper, size, this.props.style, { transform: [{ translateY: this.state.position }, { translateX: offsetX }] }]
      }, this.state.pan.panHandlers),
      this.props.children
    );
  },

  render: function render() {
    var _this6 = this;

    var visible = this.state.isOpen || this.state.isAnimateOpen || this.state.isAnimateClose;

    if (!visible) return React.createElement(View, null);

    var content = React.createElement(
      View,
      { style: [styles.transparent, styles.absolute], pointerEvents: 'box-none' },
      React.createElement(
        View,
        { style: { flex: 1 }, pointerEvents: 'box-none', onLayout: this.onContainerLayout },
        visible && this.renderBackdrop(),
        visible && this.renderContent()
      )
    );

    if (!this.props.coverScreen) return content;

    return React.createElement(
      Modal,
      { onRequestClose: function onRequestClose() {
          return _this6.close();
        }, supportedOrientations: ['landscape', 'portrait'], transparent: true, visible: visible },
      content
    );
  },

  open: function open() {
    var _this7 = this;

    if (this.props.isDisabled) return;
    if (!this.state.isAnimateOpen && (!this.state.isOpen || this.state.isAnimateClose)) {
      this.onViewLayoutCalculated = function () {
        _this7.setState({});
        _this7.animateOpen();
        if (_this7.props.backButtonClose && Platform.OS === 'android') BackButton.addEventListener('hardwareBackPress', _this7.onBackPress);
        delete _this7.onViewLayoutCalculated;
      };
      this.setState({ isAnimateOpen: true });
    }
  },

  close: function close() {
    if (this.props.isDisabled) return;
    if (!this.state.isAnimateClose && (this.state.isOpen || this.state.isAnimateOpen)) {
      this.animateClose();
      if (this.props.backButtonClose && Platform.OS === 'android') BackButton.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  }

});

module.exports = ModalBox;