Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = showcase;

var _ShowcaseConstants = require('./ShowcaseConstants');

var _ShowcaseInitial = require('./ShowcaseInitial');

var _ShowcaseInitial2 = babelHelpers.interopRequireDefault(_ShowcaseInitial);

var initialState = new _ShowcaseInitial2.default();

function showcase() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _ShowcaseConstants.FETCHING:
			{
				return state.set('fetching', true);
			}

		case _ShowcaseConstants.GET_PORTFOLIO:
			{
				return state.setIn(['portfolios', 'fetching'], true);
			}

		case _ShowcaseConstants.GET_PORTFOLIO_FULFILLED:
			{
				var _action$payload = action.payload,
				    pageLast = _action$payload.pageLast,
				    data = _action$payload.data,
				    paginate = _action$payload.paginate;


				var bData = state.getIn(['portfolios', 'data']);

				if (action.payload.pageIndex == 1) {
					bData = [];
				}

				bData = bData.concat(action.payload.data);

				var nextState = state.setIn(['portfolios', 'fetching'], false).setIn(['portfolios', 'pageLast'], pageLast).setIn(['portfolios', 'data'], bData).setIn(['portfolios', 'paginate'], paginate);

				return nextState;
			}

		case _ShowcaseConstants.SET_TAG_AUTOCOMPLETE:
			{
				var _tags = state.get('tags');

				_tags = _tags.concat(action.payload);

				return state.set('tags', _tags);
			}

		case _ShowcaseConstants.GET_SHOWCASE_SUGGESTED_TAGS:
			{
				return state.setIn(['suggestedTags', 'fetching'], true);
			}

		case _ShowcaseConstants.GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED:
			{
				return state.setIn(['suggestedTags', 'fetching'], false).setIn(['suggestedTags', 'tags'], action.payload);
			}

		case _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CHANGED:
			{

				var tags = state.get('tags');

				return state.setIn(['searchByTag', 'searchValue'], action.payload);
			}

		case _ShowcaseConstants.GET_TAG_AUTOCOMPLETE:
			{
				return state.setIn(['searchByTag', 'fetching'], true);
			}

		case _ShowcaseConstants.GET_TAG_AUTOCOMPLETE_FULFILLED:
			{
				return state.setIn(['searchByTag', 'searchResult'], action.payload).setIn(['searchByTag', 'fetching'], false);
			}

		case _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CLEAR:
			{
				return state.setIn(['searchByTag', 'searchValue'], '');
			}

		default:
			return state;
	}
}