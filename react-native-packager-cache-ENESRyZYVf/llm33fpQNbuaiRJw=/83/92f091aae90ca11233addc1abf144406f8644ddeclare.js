var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isType=require('./isType');
var isNil=require('./isNil');
var mixin=require('./mixin');
var getTypeName=require('./getTypeName');
var isUnion=require('./isUnion');

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId=1;

module.exports=function declare(name){




var type;

function Declare(value,path){






return type(value,path);
}

Declare.define=function(spec){






if(isUnion(spec)&&Declare.hasOwnProperty('dispatch')){
spec.dispatch=Declare.dispatch;
}
type=spec;
mixin(Declare,type,true);// true because it overwrites Declare.displayName
if(name){
type.displayName=Declare.displayName=name;
Declare.meta.name=name;
}
Declare.meta.identity=type.meta.identity;
Declare.prototype=type.prototype;
return Declare;
};

Declare.displayName=name||getTypeName(Declare)+"$"+nextDeclareUniqueId++;
// in general I can't say if this type will be an identity, for safety setting to false
Declare.meta={identity:false};
Declare.prototype=null;
return Declare;
};