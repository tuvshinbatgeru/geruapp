var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var getTypeName=require('./getTypeName');
var isIdentity=require('./isIdentity');
var create=require('./create');
var is=require('./is');
var isArray=require('./isArray');

function getDefaultName(type){
return'Array<'+getTypeName(type)+'>';
}

function list(type,name){






var displayName=name||getDefaultName(type);
var typeNameCache=getTypeName(type);
var identity=isIdentity(type);// the list is identity iif type is identity

function List(value,path){

{
if(identity){
return value;// just trust the input if elements must not be hydrated
}
}






var idempotent=true;// will remain true if I can reutilise the input
var ret=[];// make a temporary copy, will be discarded if idempotent remains true
for(var i=0,len=value.length;i<len;i++){
var actual=value[i];
var instance=create(type,actual,null);
idempotent=idempotent&&actual===instance;
ret.push(instance);
}

if(idempotent){// implements idempotency
ret=value;
}





return ret;
}

List.meta={
kind:'list',
type:type,
name:name,
identity:identity};


List.displayName=displayName;

List.is=function(x){
return isArray(x)&&x.every(function(e){
return is(e,type);
});
};

List.update=function(instance,patch){
return List(assert.update(instance,patch));
};

return List;
}

list.getDefaultName=getDefaultName;
module.exports=list;