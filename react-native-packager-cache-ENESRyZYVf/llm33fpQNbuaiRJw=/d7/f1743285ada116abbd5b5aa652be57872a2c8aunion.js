var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var getTypeName=require('./getTypeName');
var isIdentity=require('./isIdentity');
var isArray=require('./isArray');
var create=require('./create');
var is=require('./is');
var forbidNewOperator=require('./forbidNewOperator');
var isUnion=require('./isUnion');
var isNil=require('./isNil');

function getDefaultName(types){
return types.map(getTypeName).join(' | ');
}

function union(types,name){






var displayName=name||getDefaultName(types);
var identity=types.every(isIdentity);

function Union(value,path){

{
if(identity){
return value;
}
}

var type=Union.dispatch(value);
if(!type&&Union.is(value)){
return value;
}










return create(type,value,path);
}

Union.meta={
kind:'union',
types:types,
name:name,
identity:identity};


Union.displayName=displayName;

Union.is=function(x){
return types.some(function(type){
return is(x,type);
});
};

Union.dispatch=function(x){// default dispatch implementation
for(var i=0,len=types.length;i<len;i++){
var type=types[i];
if(isUnion(type)){// handle union of unions
var t=type.dispatch(x);
if(!isNil(t)){
return t;
}
}else
if(is(x,type)){
return type;
}
}
};

Union.update=function(instance,patch){
return Union(assert.update(instance,patch));
};

return Union;
}

union.getDefaultName=getDefaultName;
module.exports=union;