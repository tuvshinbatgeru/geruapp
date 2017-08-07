var assert=require('./assert');
var isString=require('./isString');
var isFunction=require('./isFunction');
var forbidNewOperator=require('./forbidNewOperator');

module.exports=function irreducible(name,predicate){






function Irreducible(value,path){







return value;
}

Irreducible.meta={
kind:'irreducible',
name:name,
predicate:predicate,
identity:true};


Irreducible.displayName=name;

Irreducible.is=predicate;

return Irreducible;
};