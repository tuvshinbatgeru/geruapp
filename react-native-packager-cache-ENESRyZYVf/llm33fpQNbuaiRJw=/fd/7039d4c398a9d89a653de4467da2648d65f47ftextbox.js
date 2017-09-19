var React = require('react');

var _require = require('react-native'),
    View = _require.View,
    Text = _require.Text,
    TextInput = _require.TextInput;

function textbox(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var textboxViewStyle = stylesheet.textboxView.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle = stylesheet.textbox.error;
    textboxViewStyle = stylesheet.textboxView.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxStyle = stylesheet.textbox.notEditable;
    textboxViewStyle = stylesheet.textboxView.notEditable;
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
    React.createElement(
      View,
      { style: textboxViewStyle },
      React.createElement(TextInput, {
        accessibilityLabel: locals.label,
        ref: 'input',
        autoCapitalize: locals.autoCapitalize,
        autoCorrect: locals.autoCorrect,
        autoFocus: locals.autoFocus,
        blurOnSubmit: locals.blurOnSubmit,
        editable: locals.editable,
        keyboardType: locals.keyboardType,
        maxLength: locals.maxLength,
        multiline: locals.multiline,
        onBlur: locals.onBlur,
        onEndEditing: locals.onEndEditing,
        onFocus: locals.onFocus,
        onLayout: locals.onLayout,
        onSelectionChange: locals.onSelectionChange,
        onSubmitEditing: locals.onSubmitEditing,
        onContentSizeChange: locals.onContentSizeChange,
        placeholderTextColor: locals.placeholderTextColor,
        secureTextEntry: locals.secureTextEntry,
        selectTextOnFocus: locals.selectTextOnFocus,
        selectionColor: locals.selectionColor,
        numberOfLines: locals.numberOfLines,
        underlineColorAndroid: locals.underlineColorAndroid,
        clearButtonMode: locals.clearButtonMode,
        clearTextOnFocus: locals.clearTextOnFocus,
        enablesReturnKeyAutomatically: locals.enablesReturnKeyAutomatically,
        keyboardAppearance: locals.keyboardAppearance,
        onKeyPress: locals.onKeyPress,
        returnKeyType: locals.returnKeyType,
        selectionState: locals.selectionState,
        onChangeText: function onChangeText(value) {
          return locals.onChange(value);
        },
        onChange: locals.onChangeNative,
        placeholder: locals.placeholder,
        style: textboxStyle,
        value: locals.value
      })
    ),
    help,
    error
  );
}

module.exports = textbox;