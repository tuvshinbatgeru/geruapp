var assert=require('./assert');
var Boolean=require('./Boolean');
var isType=require('./isType');
var getTypeName=require('./getTypeName');

// return true if the type constructor behaves like the identity function
module.exports=function isIdentity(type){
if(isType(type)){



return type.meta.identity;
}
// for tcomb the other constructors, like ES6 classes, are identity-like
return true;
};