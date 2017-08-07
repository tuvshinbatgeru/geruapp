var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var forbidNewOperator=require('./forbidNewOperator');
var isIdentity=require('./isIdentity');
var create=require('./create');
var is=require('./is');
var getTypeName=require('./getTypeName');
var getFunctionName=require('./getFunctionName');

function getDefaultName(type,predicate){
return'{'+getTypeName(type)+' | '+getFunctionName(predicate)+'}';
}

function refinement(type,predicate,name){







var displayName=name||getDefaultName(type,predicate);
var identity=isIdentity(type);

function Refinement(value,path){








var x=create(type,value,path);





return x;
}

Refinement.meta={
kind:'subtype',
type:type,
predicate:predicate,
name:name,
identity:identity};


Refinement.displayName=displayName;

Refinement.is=function(x){
return is(x,type)&&predicate(x);
};

Refinement.update=function(instance,patch){
return Refinement(assert.update(instance,patch));
};

return Refinement;
}

refinement.getDefaultName=getDefaultName;
module.exports=refinement;