Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = navigationState;

var _NavigationActionTypes = require('../constants/NavigationActionTypes');

var initialNavState = {
	index: 0,
	currentTab: 'showcase',
	routes: [{
		key: 'showcase',
		title: 'Зурвас',
		iconType: 'ionicon',
		icon: 'search',
		style: 'tabView',
		notificationCount: 0,
		color: '#cfcfcf',
		activeColor: '#828282',
		iconSize: 24
	}, {
		key: 'message',
		title: 'Зурвас',
		iconType: 'ionicon',
		icon: 'message',
		style: 'tabView',
		notificationCount: 1,
		color: '#cfcfcf',
		activeColor: '#828282',
		iconSize: 24
	}, {
		key: 'newproject',
		title: 'Шинэ төсөл үүсгэх',
		iconType: 'ionicon',
		icon: 'brand_ger',
		style: 'tabView',
		notificationCount: 0,
		color: '#cfcfcf',
		activeColor: '#828282',
		iconSize: 24
	}, {
		key: 'notification',
		title: 'Мэдэгдэлүүд',
		iconType: 'ionicon',
		icon: 'notification',
		style: 'tabView',
		notificationCount: 3,
		color: '#cfcfcf',
		activeColor: '#828282',
		iconSize: 24
	}, {
		key: 'profile',
		title: 'Миний хэсэг',
		iconType: 'ionicon',
		icon: 'profile',
		style: 'tabView',
		notificationCount: 0,
		color: '#cfcfcf',
		activeColor: '#828282',
		iconSize: 24
	}]
};

function navigationState() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialNavState;
	var action = arguments[1];

	switch (action.type) {

		case _NavigationActionTypes.TAB_CHANGED:
			return babelHelpers.extends({}, state, {
				currentTab: action.tabKey
			});

		case _NavigationActionTypes.NAV_RESET:
			return babelHelpers.extends({}, state, {
				index: action.index,
				routes: action.routes
			});

		default:
			return state;
	}
}