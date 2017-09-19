
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formValidation;
function formValidation(state) {

  if (state.form.fields.title === '' || state.form.fields.titleHasError) {
    return state.setIn(['form', 'isValid'], false).setIn(['form', 'error'], { field: 'title', message: 'Гарчиг оруулна уу.' });
  }

  if (state.form.fields.description === '' || state.form.fields.descriptionHasError) {
    return state.setIn(['form', 'isValid'], false).setIn(['form', 'error'], { field: 'description', message: 'Тайлбар оруулна уу.' });
  }

  return state;
}