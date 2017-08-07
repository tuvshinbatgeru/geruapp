Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");










var screen=_reactNative.Dimensions.get('window');var

AnimatedOverlay=function(_Component){babelHelpers.inherits(AnimatedOverlay,_Component);
function AnimatedOverlay(props){babelHelpers.classCallCheck(this,AnimatedOverlay);


/*this.state = {
    	open: this.props.isOpen
    }*/var _this=babelHelpers.possibleConstructorReturn(this,(AnimatedOverlay.__proto__||Object.getPrototypeOf(AnimatedOverlay)).call(this,props));

_this.animatedValue=new _reactNative.Animated.Value(0);
_this.animate=_this.animate.bind(_this);return _this;
}

/*componentWillMount() {
     this.handleOpenning(this.props)
  }*/

/*componentWillReceiveProps(nextProps) {
  	 this.handleOpenning(nextProps)
  }

  handleOpenning(state) {
    if (typeof props.isOpen == "undefined") return
    if (props.isOpen)
      this.open()
    else
      this.close()
  }

  open() {*/
/*if (!this.state.isAnimateOpen && (!this.state.isOpen || this.state.isAnimateClose)) {
      this.onViewLayoutCalculated = () => {*/
/*this.setState({});
        this.animateOpen();*/
/*if(this.props.backButtonClose && Platform.OS === 'android') 
        	BackAndroid.addEventListener('hardwareBackPress', this.onBackPress)
        delete this.onViewLayoutCalculated
      }
      
    }*/
/*this.setState({
      		open : true
      	})
  }*/

/*close () {
    if (this.props.isDisabled) return;
    if (!this.state.isAnimateClose && (this.state.isOpen || this.state.isAnimateOpen)) {
      this.animateClose();
      if(this.props.backButtonClose && Platform.OS === 'android') BackAndroid.removeEventListener('hardwareBackPress', this.onBackPress)
    }
  }*/babelHelpers.createClass(AnimatedOverlay,[{key:"componentDidMount",value:function componentDidMount()


{
//this.animate()
}},{key:"componentDidUpdate",value:function componentDidUpdate(

prevProps,prevState){
this.animate();
}},{key:"animate",value:function animate()

{
this.animatedValue.setValue(0);
_reactNative.Animated.timing(
this.animatedValue,
{
toValue:1,
duration:400,
easing:_reactNative.Easing.cubic}).
start();
}},{key:"render",value:function render()

{var


isOpen=
this.props.isOpen;

var heightTransaction=isOpen?screen.height:0;

var height=this.animatedValue.interpolate({
inputRange:[0,1],
outputRange:[0,heightTransaction]});


var width=this.animatedValue.interpolate({
inputRange:[0,1],
outputRange:[60,screen.width]});


var opacity=this.animatedValue.interpolate({
inputRange:[0,1],
outputRange:[0,1]});


var bottom=isOpen?0:-50;

//let borderRadius = open ? 0 : 0
//let top = open: 

return(
_react2.default.createElement(_reactNative.Animated.View,{style:[{height:height,width:width,opacity:opacity,bottom:bottom},
styles.container,
this.props.style]},



this.props.children));



}}]);return AnimatedOverlay;}(_react.Component);exports.default=AnimatedOverlay;


AnimatedOverlay.propTypes={
isOpen:_react.PropTypes.bool};


AnimatedOverlay.defaultProps={
isOpen:false};


var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
zIndex:3,
bottom:0,
left:0,
right:0,
//backgroundColor: '#aecaec',
backgroundColor:'transparent'},


overlayContainer:{
flex:1,
padding:40,
backgroundColor:'rgba(0, 0, 0, 0.5)'}});