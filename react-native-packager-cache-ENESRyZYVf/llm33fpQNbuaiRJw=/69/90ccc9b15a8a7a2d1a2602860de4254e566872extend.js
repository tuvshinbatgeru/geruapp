var assert=require('./assert');
var isFunction=require('./isFunction');
var isArray=require('./isArray');
var mixin=require('./mixin');
var isStruct=require('./isStruct');
var isInterface=require('./isInterface');
var isObject=require('./isObject');
var refinement=require('./refinement');
var decompose=require('./decompose');

function compose(predicates,unrefinedType){
return predicates.reduce(function(type,predicate){
return refinement(type,predicate);
},unrefinedType);
}

function getProps(type){
return isObject(type)?type:type.meta.props;
}

function getDefaultProps(type){
return isObject(type)?null:type.meta.defaultProps;
}

function pushAll(arr,elements){
Array.prototype.push.apply(arr,elements);
}

function extend(combinator,mixins,options){




var props={};
var prototype={};
var predicates=[];
var defaultProps={};
mixins.forEach(function(x,i){
var decomposition=decompose(x);
var unrefinedType=decomposition.unrefinedType;



pushAll(predicates,decomposition.predicates);
mixin(props,getProps(unrefinedType));
mixin(prototype,unrefinedType.prototype);
mixin(defaultProps,getDefaultProps(unrefinedType),true);
});
options=combinator.getOptions(options);
options.defaultProps=mixin(defaultProps,options.defaultProps,true);
var result=compose(predicates,combinator(props,options));
mixin(result.prototype,prototype);
return result;
}

module.exports=extend;