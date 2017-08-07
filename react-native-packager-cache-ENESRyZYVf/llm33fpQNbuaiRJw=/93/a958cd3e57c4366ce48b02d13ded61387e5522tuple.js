var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var getTypeName=require('./getTypeName');
var isIdentity=require('./isIdentity');
var isArray=require('./isArray');
var create=require('./create');
var is=require('./is');

function getDefaultName(types){
return'['+types.map(getTypeName).join(', ')+']';
}

function tuple(types,name){






var displayName=name||getDefaultName(types);
var identity=types.every(isIdentity);

function Tuple(value,path){

{
if(identity){
return value;
}
}






var idempotent=true;
var ret=[];
for(var i=0,len=types.length;i<len;i++){
var expected=types[i];
var actual=value[i];
var instance=create(expected,actual,null);
idempotent=idempotent&&actual===instance;
ret.push(instance);
}

if(idempotent){// implements idempotency
ret=value;
}





return ret;
}

Tuple.meta={
kind:'tuple',
types:types,
name:name,
identity:identity};


Tuple.displayName=displayName;

Tuple.is=function(x){
return isArray(x)&&
x.length===types.length&&
types.every(function(type,i){
return is(x[i],type);
});
};

Tuple.update=function(instance,patch){
return Tuple(assert.update(instance,patch));
};

return Tuple;
}

tuple.getDefaultName=getDefaultName;
module.exports=tuple;