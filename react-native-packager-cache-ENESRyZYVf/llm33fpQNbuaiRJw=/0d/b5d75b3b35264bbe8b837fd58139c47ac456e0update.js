var assert=require('./assert');
var isObject=require('./isObject');
var isFunction=require('./isFunction');
var isArray=require('./isArray');
var isNumber=require('./isNumber');
var assign=require('./assign');

function getShallowCopy(x){
if(isObject(x)){
if(x instanceof Date||x instanceof RegExp){
return x;
}
return assign({},x);
}
if(isArray(x)){
return x.concat();
}
return x;
}

function isCommand(k){
return update.commands.hasOwnProperty(k);
}

function getCommand(k){
return update.commands[k];
}

function update(instance,patch){





var value=instance;
var isChanged=false;
var newValue;
for(var k in patch){
if(patch.hasOwnProperty(k)){
if(isCommand(k)){
newValue=getCommand(k)(patch[k],value);
if(newValue!==instance){
isChanged=true;
value=newValue;
}else{
value=instance;
}
}else
{
if(value===instance){
value=getShallowCopy(instance);
}
newValue=update(value[k],patch[k]);
isChanged=isChanged||newValue!==value[k];
value[k]=newValue;
}
}
}
return isChanged?value:instance;
}

// built-in commands

function $apply(f,value){



return f(value);
}

function $push(elements,arr){




if(elements.length>0){
return arr.concat(elements);
}
return arr;
}

function $remove(keys,obj){




if(keys.length>0){
obj=getShallowCopy(obj);
for(var i=0,len=keys.length;i<len;i++){
delete obj[keys[i]];
}
}
return obj;
}

function $set(value){
return value;
}

function $splice(splices,arr){




if(splices.length>0){
arr=getShallowCopy(arr);
return splices.reduce(function(acc,splice){
acc.splice.apply(acc,splice);
return acc;
},arr);
}
return arr;
}

function $swap(config,arr){






if(config.from!==config.to){
arr=getShallowCopy(arr);
var element=arr[config.to];
arr[config.to]=arr[config.from];
arr[config.from]=element;
}
return arr;
}

function $unshift(elements,arr){




if(elements.length>0){
return elements.concat(arr);
}
return arr;
}

function $merge(whatToMerge,value){
var isChanged=false;
var result=getShallowCopy(value);
for(var k in whatToMerge){
if(whatToMerge.hasOwnProperty(k)){
result[k]=whatToMerge[k];
isChanged=isChanged||result[k]!==value[k];
}
}
return isChanged?result:value;
}

update.commands={
$apply:$apply,
$push:$push,
$remove:$remove,
$set:$set,
$splice:$splice,
$swap:$swap,
$unshift:$unshift,
$merge:$merge};


module.exports=update;