var React=require('react');
var ReactNative=require('react-native');var
Component=React.Component;var
View=ReactNative.View,StyleSheet=ReactNative.StyleSheet;

var StaticContainer=require('./StaticContainer');

var SceneComponent=function SceneComponent(Props){var
shouldUpdated=Props.shouldUpdated,props=babelHelpers.objectWithoutProperties(Props,["shouldUpdated"]);
return React.createElement(View,props,
React.createElement(StaticContainer,{shouldUpdate:shouldUpdated},
props.children));


};

module.exports=SceneComponent;