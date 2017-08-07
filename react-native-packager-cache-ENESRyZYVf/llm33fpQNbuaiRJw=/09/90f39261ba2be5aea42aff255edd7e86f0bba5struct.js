var React=require('react');var _require=
require('react-native'),View=_require.View,Text=_require.Text;

function struct(locals){
if(locals.hidden){
return null;
}

var stylesheet=locals.stylesheet;
var fieldsetStyle=stylesheet.fieldset;
var controlLabelStyle=stylesheet.controlLabel.normal;

if(locals.hasError){
controlLabelStyle=stylesheet.controlLabel.error;
}

var label=locals.label?React.createElement(Text,{style:controlLabelStyle},locals.label):null;
var error=locals.hasError&&locals.error?React.createElement(Text,{accessibilityLiveRegion:"polite",style:stylesheet.errorBlock},locals.error):null;

var rows=locals.order.map(function(name){
return locals.inputs[name];
});

return(
React.createElement(View,{style:fieldsetStyle},
label,
error,
rows));


}

module.exports=struct;