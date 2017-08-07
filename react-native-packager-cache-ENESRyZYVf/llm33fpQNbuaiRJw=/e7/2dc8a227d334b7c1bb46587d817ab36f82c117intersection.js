var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var isArray=require('./isArray');
var forbidNewOperator=require('./isIdentity');
var is=require('./is');
var getTypeName=require('./getTypeName');
var isIdentity=require('./isIdentity');

function getDefaultName(types){
return types.map(getTypeName).join(' & ');
}

function intersection(types,name){






var displayName=name||getDefaultName(types);
var identity=types.every(isIdentity);

function Intersection(value,path){









return value;
}

Intersection.meta={
kind:'intersection',
types:types,
name:name,
identity:identity};


Intersection.displayName=displayName;

Intersection.is=function(x){
return types.every(function(type){
return is(x,type);
});
};

Intersection.update=function(instance,patch){
return Intersection(assert.update(instance,patch));
};

return Intersection;
}

intersection.getDefaultName=getDefaultName;
module.exports=intersection;