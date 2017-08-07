var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var getTypeName=require('./getTypeName');
var isIdentity=require('./isIdentity');
var isObject=require('./isObject');
var create=require('./create');
var is=require('./is');

function getDefaultName(domain,codomain){
return'{[key: '+getTypeName(domain)+']: '+getTypeName(codomain)+'}';
}

function dict(domain,codomain,name){







var displayName=name||getDefaultName(domain,codomain);
var domainNameCache=getTypeName(domain);
var codomainNameCache=getTypeName(codomain);
var identity=isIdentity(domain)&&isIdentity(codomain);

function Dict(value,path){

{
if(identity){
return value;// just trust the input if elements must not be hydrated
}
}






var idempotent=true;// will remain true if I can reutilise the input
var ret={};// make a temporary copy, will be discarded if idempotent remains true
for(var k in value){
if(value.hasOwnProperty(k)){
k=create(domain,k,null);
var actual=value[k];
var instance=create(codomain,actual,null);
idempotent=idempotent&&actual===instance;
ret[k]=instance;
}
}

if(idempotent){// implements idempotency
ret=value;
}





return ret;
}

Dict.meta={
kind:'dict',
domain:domain,
codomain:codomain,
name:name,
identity:identity};


Dict.displayName=displayName;

Dict.is=function(x){
if(!isObject(x)){
return false;
}
for(var k in x){
if(x.hasOwnProperty(k)){
if(!is(k,domain)||!is(x[k],codomain)){
return false;
}
}
}
return true;
};

Dict.update=function(instance,patch){
return Dict(assert.update(instance,patch));
};

return Dict;
}

dict.getDefaultName=getDefaultName;
module.exports=dict;