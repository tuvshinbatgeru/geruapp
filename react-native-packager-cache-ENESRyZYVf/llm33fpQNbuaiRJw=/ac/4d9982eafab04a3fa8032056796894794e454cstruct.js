var assert=require('./assert');
var isTypeName=require('./isTypeName');
var String=require('./String');
var Function=require('./Function');
var isBoolean=require('./isBoolean');
var isObject=require('./isObject');
var isNil=require('./isNil');
var create=require('./create');
var getTypeName=require('./getTypeName');
var dict=require('./dict');
var getDefaultInterfaceName=require('./getDefaultInterfaceName');
var extend=require('./extend');

function getDefaultName(props){
return'Struct'+getDefaultInterfaceName(props);
}

function extendStruct(mixins,name){
return extend(struct,mixins,name);
}

function getOptions(options){
if(!isObject(options)){
options=isNil(options)?{}:{name:options};
}
if(!options.hasOwnProperty('strict')){
options.strict=struct.strict;
}
if(!options.hasOwnProperty('defaultProps')){
options.defaultProps={};
}
return options;
}

function struct(props,options){

options=getOptions(options);
var name=options.name;
var strict=options.strict;
var defaultProps=options.defaultProps;








var displayName=name||getDefaultName(props);

function Struct(value,path){

if(Struct.is(value)){// implements idempotency
return value;
}














if(!(this instanceof Struct)){// `new` is optional
return new Struct(value,path);
}

for(var k in props){
if(props.hasOwnProperty(k)){
var expected=props[k];
var actual=value[k];
// apply defaults
if(actual===undefined){
actual=defaultProps[k];
}
this[k]=create(expected,actual,null);
}
}





}

Struct.meta={
kind:'struct',
props:props,
name:name,
identity:false,
strict:strict,
defaultProps:defaultProps};


Struct.displayName=displayName;

Struct.is=function(x){
return x instanceof Struct;
};

Struct.update=function(instance,patch){
return new Struct(assert.update(instance,patch));
};

Struct.extend=function(xs,name){
return extendStruct([Struct].concat(xs),name);
};

return Struct;
}

struct.strict=false;
struct.getOptions=getOptions;
struct.getDefaultName=getDefaultName;
struct.extend=extendStruct;
module.exports=struct;