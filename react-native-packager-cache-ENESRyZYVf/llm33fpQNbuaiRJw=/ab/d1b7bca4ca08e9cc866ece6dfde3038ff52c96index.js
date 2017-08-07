var _lib=require("./lib");var _lib2=babelHelpers.interopRequireDefault(_lib);
var _en=require("./lib/i18n/en");var _en2=babelHelpers.interopRequireDefault(_en);
var _bootstrap=require("./lib/templates/bootstrap");var _bootstrap2=babelHelpers.interopRequireDefault(_bootstrap);
var _bootstrap3=require("./lib/stylesheets/bootstrap");var _bootstrap4=babelHelpers.interopRequireDefault(_bootstrap3);

_lib2.default.form.Form.templates=_bootstrap2.default;
_lib2.default.form.Form.stylesheet=_bootstrap4.default;
_lib2.default.form.Form.i18n=_en2.default;

_lib2.default.form.Form.defaultProps={
templates:_lib2.default.form.Form.templates,
stylesheet:_lib2.default.form.Form.stylesheet,
i18n:_lib2.default.form.Form.i18n};


module.exports=_lib2.default;