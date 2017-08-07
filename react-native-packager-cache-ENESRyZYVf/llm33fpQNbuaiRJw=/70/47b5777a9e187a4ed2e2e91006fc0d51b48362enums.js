var assert=require('./assert');
var isTypeName=require('./isTypeName');
var forbidNewOperator=require('./forbidNewOperator');
var isString=require('./isString');
var isObject=require('./isObject');

function getDefaultName(map){
return Object.keys(map).map(function(k){return assert.stringify(k);}).join(' | ');
}

function enums(map,name){






var displayName=name||getDefaultName(map);

function Enums(value,path){







return value;
}

Enums.meta={
kind:'enums',
map:map,
name:name,
identity:true};


Enums.displayName=displayName;

Enums.is=function(x){
return map.hasOwnProperty(x);
};

return Enums;
}

enums.of=function(keys,name){
keys=isString(keys)?keys.split(' '):keys;
var value={};
keys.forEach(function(k){
value[k]=k;
});
return enums(value,name);
};

enums.getDefaultName=getDefaultName;
module.exports=enums;