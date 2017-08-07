var assert=require('./assert');
var isFunction=require('./isFunction');
var isType=require('./isType');
var Any=require('./Any');

module.exports=function match(x){
var type,guard,f,count;
for(var i=1,len=arguments.length;i<len;){
type=arguments[i];
guard=arguments[i+1];
f=arguments[i+2];

if(isFunction(f)&&!isType(f)){
i=i+3;
}else
{
f=guard;
guard=Any.is;
i=i+2;
}








if(type.is(x)&&guard(x)){
return f(x);
}
}
assert.fail('Match error');
};