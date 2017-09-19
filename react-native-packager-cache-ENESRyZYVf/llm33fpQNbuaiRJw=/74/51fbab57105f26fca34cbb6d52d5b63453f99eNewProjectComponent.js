Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _ProjectActions = require('../ProjectActions');

var newProjectActions = babelHelpers.interopRequireWildcard(_ProjectActions);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _reactNativeNavbar = require('react-native-navbar');

var _reactNativeNavbar2 = babelHelpers.interopRequireDefault(_reactNativeNavbar);

var _NavBarIconText = require('../../components/NavBarIconText');

var _NavBarIconText2 = babelHelpers.interopRequireDefault(_NavBarIconText);

var _reactNativeModalbox = require('react-native-modalbox');

var _reactNativeModalbox2 = babelHelpers.interopRequireDefault(_reactNativeModalbox);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _ModalPicker = require('../../components/ModalPicker');

var _ModalPicker2 = babelHelpers.interopRequireDefault(_ModalPicker);

var _ImagesSlider = require('../../components/image-slider/ImagesSlider');

var _ImagesSlider2 = babelHelpers.interopRequireDefault(_ImagesSlider);

var _TabImagesContainer = require('../../components/tab-image-chooser/TabImagesContainer');

var _TabImagesContainer2 = babelHelpers.interopRequireDefault(_TabImagesContainer);

var _ModalDropdown = require('../../components/ModalDropdown');

var _ModalDropdown2 = babelHelpers.interopRequireDefault(_ModalDropdown);

var _ProjectForm = require('./ProjectForm');

var _ProjectForm2 = babelHelpers.interopRequireDefault(_ProjectForm);

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(newProjectActions, dispatch)
  };
}

var NewProjectComponent = _react2.default.createClass({
  displayName: 'NewProjectComponent',
  projectDetail: function projectDetail() {
    _reactNativeRouterFlux.Actions.NewProjectDetail();
  },
  imageUploaded: function imageUploaded(data) {
    this.props.actions.newProjectImageUploaded(data);
  },
  imageRemoved: function imageRemoved(data) {
    this.props.actions.newProjectImageRemoved(data);
  },
  suggestedClicked: function suggestedClicked(item) {
    this.props.actions.suggestedImageChoosed({
      url: 'http://ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
      ratio: 1.62
    });
  },
  getSuggestedShowcases: function getSuggestedShowcases(pageIndex) {
    this.props.actions.getSuggestedShowcases(pageIndex);
  },
  render: function render() {
    var _this = this;

    var project = this.props.project;


    return _react2.default.createElement(
      _reactNative.View,
      { style: styles.container },
      _react2.default.createElement(_reactNativeNavbar2.default, {
        leftButton: _react2.default.createElement(_NavBarIconText2.default, { icon: 'ios-arrow-back-outline',
          size: 30,
          color: '#b5b5b5',
          text: 'back',
          position: 'back',
          onPress: this.props.onBackAction
        }),
        rightButton: _react2.default.createElement(_NavBarIconText2.default, { icon: 'ios-arrow-forward-outline',
          size: 30,
          color: '#b5b5b5',
          text: 'next',
          onPress: function onPress() {
            return _this.projectDetail();
          }
        })
      }),
      _react2.default.createElement(_ImagesSlider2.default, { images: project.getIn(['files', 'selectedFiles']) }),
      _react2.default.createElement(_TabImagesContainer2.default, { tabs: project.getIn(['files', 'imagesTabs']),
        onSuggestedClicked: this.suggestedClicked.bind(this),
        onGetSuggestedShowcases: this.getSuggestedShowcases.bind(this)
      })
    );
  }
});

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  inputs: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  dropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  dropdownSkill: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  selectedOption: {
    marginLeft: 5,
    fontFamily: 'Lato-Black'
  },

  durationBundleContainer: {
    flexDirection: 'row'
  },

  selectedBudget: {
    color: _variables2.default.BRAND_SECONDARY,
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: _variables2.default.BRAND_SECONDARY,
    backgroundColor: '#fff',
    fontFamily: 'Lato-Regular'
  },

  otherBudget: {
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#edeff0',
    color: '#b5b5b5',
    fontFamily: 'Lato-Bold'
  },

  dropdownIcon: {
    marginLeft: 10
  }
});

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(NewProjectComponent);