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
var isIdentity=require('./isIdentity');
var is=require('./is');
var extend=require('./extend');
var assign=require('./assign');

function extendInterface(mixins,name){
return extend(inter,mixins,name);
}

function getOptions(options){
if(!isObject(options)){
options=isNil(options)?{}:{name:options};
}
if(!options.hasOwnProperty('strict')){
options.strict=inter.strict;
}
return options;
}

function inter(props,options){

options=getOptions(options);
var name=options.name;
var strict=options.strict;







var displayName=name||getDefaultInterfaceName(props);
var identity=Object.keys(props).map(function(prop){return props[prop];}).every(isIdentity);

function Interface(value,path){

{
if(identity){
return value;// just trust the input if elements must not be hydrated
}
}












var idempotent=true;
var ret=identity?{}:assign({},value);
for(var prop in props){
var expected=props[prop];
var actual=value[prop];
var instance=create(expected,actual,null);
idempotent=idempotent&&actual===instance;
ret[prop]=instance;
}

if(idempotent){// implements idempotency
ret=value;
}





return ret;

}

Interface.meta={
kind:'interface',
props:props,
name:name,
identity:identity,
strict:strict};


Interface.displayName=displayName;

Interface.is=function(x){
if(isNil(x)){
return false;
}
if(strict){
for(var k in x){
if(!props.hasOwnProperty(k)){
return false;
}
}
}
for(var prop in props){
if(!is(x[prop],props[prop])){
return false;
}
}
return true;
};

Interface.update=function(instance,patch){
return Interface(assert.update(instance,patch));
};

Interface.extend=function(xs,name){
return extendInterface([Interface].concat(xs),name);
};

return Interface;
}

inter.strict=false;
inter.getOptions=getOptions;
inter.getDefaultName=getDefaultInterfaceName;
inter.extend=extendInterface;
module.exports=inter;