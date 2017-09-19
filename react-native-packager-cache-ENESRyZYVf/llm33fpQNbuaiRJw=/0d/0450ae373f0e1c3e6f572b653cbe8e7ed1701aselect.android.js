var React = require('react');

var _require = require('react-native'),
    View = _require.View,
    Text = _require.Text,
    Picker = _require.Picker;

function select(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var selectStyle = babelHelpers.extends({}, stylesheet.select.normal, stylesheet.pickerContainer.normal);
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    selectStyle = stylesheet.select.error;
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

  var options = locals.options.map(function (_ref) {
    var value = _ref.value,
        text = _ref.text;
    return React.createElement(Picker.Item, { key: value, value: value, label: text });
  });

  return React.createElement(
    View,
    { style: formGroupStyle },
    label,
    React.createElement(
      Picker,
      {
        accessibilityLabel: locals.label,
        ref: 'input',
        style: selectStyle,
        selectedValue: locals.value,
        onValueChange: locals.onChange,
        help: locals.help,
        enabled: locals.enabled,
        mode: locals.mode,
        prompt: locals.prompt,
        itemStyle: locals.itemStyle
      },
      options
    ),
    help,
    error
  );
}

module.exports = select;