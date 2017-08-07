var React = require('react');

var _require = require('react-native'),
    View = _require.View,
    Text = _require.Text,
    Switch = _require.Switch;

function checkbox(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var checkboxStyle = stylesheet.checkbox.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    checkboxStyle = stylesheet.checkbox.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  var label = locals.label ? React.createElement(
    Text,
    { style: controlLabelStyle },
    locals.label
  ) : null;
  var help = locals.help ? React.createElement(
    Text,
    { style: helpBlockStyle },
    locals.help
  ) : null;
  var error = locals.hasError && locals.error ? React.createElement(
    Text,
    { accessibilityLiveRegion: 'polite', style: errorBlockStyle },
    locals.error
  ) : null;

  return React.createElement(
    View,
    { style: formGroupStyle },
    label,
    React.createElement(Switch, {
      accessibilityLabel: locals.label,
      ref: 'input',
      disabled: locals.disabled,
      onTintColor: locals.onTintColor,
      thumbTintColor: locals.thumbTintColor,
      tintColor: locals.tintColor,
      style: checkboxStyle,
      onValueChange: function onValueChange(value) {
        return locals.onChange(value);
      },
      value: locals.value
    }),
    help,
    error
  );
}

module.exports = checkbox;