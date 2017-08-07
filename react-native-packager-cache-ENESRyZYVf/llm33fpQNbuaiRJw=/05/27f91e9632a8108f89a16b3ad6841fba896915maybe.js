var assert=require('./assert');
var isTypeName=require('./isTypeName');
var isFunction=require('./isFunction');
var isMaybe=require('./isMaybe');
var isIdentity=require('./isIdentity');
var Any=require('./Any');
var create=require('./create');
var Nil=require('./Nil');
var forbidNewOperator=require('./forbidNewOperator');
var is=require('./is');
var getTypeName=require('./getTypeName');

function getDefaultName(type){
return'?'+getTypeName(type);
}

function maybe(type,name){

if(isMaybe(type)||type===Any||type===Nil){// makes the combinator idempotent and handle Any, Nil
return type;
}






var displayName=name||getDefaultName(type);
var identity=isIdentity(type);

function Maybe(value,path){





return Nil.is(value)?value:create(type,value,path);
}

Maybe.meta={
kind:'maybe',
type:type,
name:name,
identity:identity};


Maybe.displayName=displayName;

Maybe.is=function(x){
return Nil.is(x)||is(x,type);
};

return Maybe;
}

maybe.getDefaultName=getDefaultName;
module.exports=maybe;