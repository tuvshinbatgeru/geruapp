var React = require('react');

var _require = require('react-native'),
    View = _require.View,
    Text = _require.Text,
    TouchableHighlight = _require.TouchableHighlight;

function renderRowWithoutButtons(item) {
  return React.createElement(
    View,
    { key: item.key },
    item.input
  );
}

function renderRowButton(button, stylesheet, style) {
  return React.createElement(
    TouchableHighlight,
    { key: button.type, style: [stylesheet.button, style], onPress: button.click },
    React.createElement(
      Text,
      { style: stylesheet.buttonText },
      button.label
    )
  );
}

function renderButtonGroup(buttons, stylesheet) {
  return React.createElement(
    View,
    { style: { flexDirection: 'row' } },
    buttons.map(function (button) {
      return renderRowButton(button, stylesheet, { width: 50 });
    })
  );
}

function renderRow(item, stylesheet) {
  return React.createElement(
    View,
    { key: item.key, style: { flexDirection: 'row' } },
    React.createElement(
      View,
      { style: { flex: 1 } },
      item.input
    ),
    React.createElement(
      View,
      { style: { flex: 1 } },
      renderButtonGroup(item.buttons, stylesheet)
    )
  );
}

function list(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var fieldsetStyle = stylesheet.fieldset;
  var controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  var label = locals.label ? React.createElement(
    Text,
    { style: controlLabelStyle },
    locals.label
  ) : null;
  var error = locals.hasError && locals.error ? React.createElement(
    Text,
    { accessibilityLiveRegion: 'polite', style: stylesheet.errorBlock },
    locals.error
  ) : null;

  var rows = locals.items.map(function (item) {
    return item.buttons.length === 0 ? renderRowWithoutButtons(item) : renderRow(item, stylesheet);
  });

  var addButton = locals.add ? renderRowButton(locals.add, stylesheet) : null;

  return React.createElement(
    View,
    { style: fieldsetStyle },
    label,
    error,
    rows,
    addButton
  );
}

module.exports = list;