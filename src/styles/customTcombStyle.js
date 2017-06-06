'use strict'

import { Platform } from 'react-native'

var INPUT_COLOR = '#242424';
var ERROR_COLOR = '#FF8812';
var PLACEHOLDER_COLOR = '#b5b5b5'
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#efefef';
var DISABLED_COLOR = '#777777';
var LABEL_COLOR = '#242424'
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 16;
var FONT_FAMILY_REGULAR = 'Lato-Regular'
var FONT_FAMILY_BOLD = 'Lato-Heavy'

var stylesheet = Object.freeze({
  fieldset: {

  },
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10,
    },
    error: {
      marginBottom: 10,
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontFamily: FONT_FAMILY_REGULAR
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY_REGULAR,
      marginBottom: 7,
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {
    },
    error: {
    },
    notEditable: {
    }
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: FONT_SIZE,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY_REGULAR,
      padding: 7,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerContainer: {
    normal: {
      flex: 1,
      marginBottom: 4,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1
    },
    error: {
      flex: 1,
      borderColor: ERROR_COLOR
    },
    open: {
      // Alter styles when select container is open
    }
  },
  select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: INPUT_COLOR
      },
      ios: {

      }
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: ERROR_COLOR
      },
      ios: {

      }
    })
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 2
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 2,
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {
    },
    error: {
    }
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: BORDER_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = stylesheet