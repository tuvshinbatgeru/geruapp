import { 
	NAV_PUSH, NAV_POP, NAV_JUMP_TO_KEY, NAV_JUMP_TO_INDEX, NAV_RESET, TAB_CHANGED 
} from '../constants/NavigationActionTypes'

/*{ 
			key: 'showcase', 
			title: 'Төслийн хайлт',
			icon: 'ios-leaf',
			style: 'tabView',
			notificationCount: 0,
		}, */

const initialNavState = {
	index: 0,
	currentTab: 'profile',
	routes: [{
			key: 'showcase',
			title: 'Зурвас',
			iconType: 'ionicon',
			icon: 'ios-search-outline',
			style: 'tabView',
			notificationCount: 0,
		},{
			key: 'message', 
			title: 'Зурвас',
			iconType: 'ionicon',
			icon: 'ios-chatbubbles-outline',
			style: 'tabView',
			notificationCount: 1,
		}, {
			key: 'newproject', 
			title: 'Шинэ төсөл үүсгэх',
			iconType: 'ionicon',
			icon: 'ios-analytics',
			style: 'tabView',
			notificationCount: 0,
		},{
			key: 'notification', 
			title: 'Мэдэгдэлүүд',
			iconType: 'ionicon',
			icon: 'ios-notifications-outline',
			style: 'tabView',
			notificationCount: 3,
		}, {
			key: 'profile', 
			title: 'Миний хэсэг',
			iconType: 'ionicon',
			icon: 'ios-contact-outline',
			style: 'tabView',
			notificationCount: 0,
		}
	]
}

export default function navigationState(state = initialNavState, action) {
	switch (action.type) {

	case TAB_CHANGED:
		return {
			...state,
			currentTab: action.tabKey
		}

	/*case NAV_PUSH:
		if (state.routes[state.index].key === (action.state && action.state.key)) return state
		return NavigationStateUtils.push(state, action.state)

	case NAV_POP:
		if (state.index === 0 || state.routes.length === 1) return state
		return NavigationStateUtils.pop(state)

	case NAV_JUMP_TO_KEY:
		return NavigationStateUtils.jumpTo(state, action.key)

	case NAV_JUMP_TO_INDEX:
		return NavigationStateUtils.jumpToIndex(state, action.index)*/

	case NAV_RESET:
		return {
			...state,
			index: action.index,
			routes: action.routes
		}

	default:
		return state
	}
}
