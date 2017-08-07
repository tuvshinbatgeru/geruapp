/**
 * # authFormValidation.js
 *
 * This class determines only if the form is valid
 * so that the form button can be enabled.
 * if all the fields on the form are without error,
 * the form is considered valid
 */
'use strict';


/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */Object.defineProperty(exports,"__esModule",{value:true});exports.default=
formValidation;function formValidation(state){

if(state.form.fields.title===''||state.form.fields.titleHasError){
return state.setIn(['form','isValid'],false).
setIn(['form','error'],{field:'title',message:'Гарчиг оруулна уу.'});
}

if(state.form.fields.description===''||state.form.fields.descriptionHasError){
return state.setIn(['form','isValid'],false).
setIn(['form','error'],{field:'description',message:'Тайлбар оруулна уу.'});
}

return state;
}