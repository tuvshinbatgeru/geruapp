var isNil=require('./isNil');
var assert=require('./assert');

// safe mixin, cannot override props unless specified
module.exports=function mixin(target,source,overwrite){
if(isNil(source)){return target;}
for(var k in source){
if(source.hasOwnProperty(k)){
if(overwrite!==true){



}
target[k]=source[k];
}
}
return target;
};