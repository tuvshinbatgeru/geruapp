Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetching = fetching;
exports.onShowCaseSearchValueCleared = onShowCaseSearchValueCleared;
exports.getShowcaseSuggestedTags = getShowcaseSuggestedTags;
exports.setTagAutocomplete = setTagAutocomplete;
exports.onShowCaseSearchValueChanged = onShowCaseSearchValueChanged;
exports.getPortfolios = getPortfolios;

var _ShowcaseConstants = require('./ShowcaseConstants');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var BackendFactory = require('../BackendFactory').default;

function fetching(type) {
	return {
		type: _ShowcaseConstants.FETCHING,
		payload: type
	};
}

function onShowCaseSearchValueCleared() {
	return {
		type: _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CLEAR
	};
}

function getShowcaseSuggestedTags(tag) {
	return function (dispatch) {

		dispatch({
			type: _ShowcaseConstants.GET_SHOWCASE_SUGGESTED_TAGS
		});

		BackendFactory().getShowcaseSuggestedTags({
			tag: tag
		}).then(function (res) {
			dispatch({
				type: _ShowcaseConstants.GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED,
				payload: res.data.tags
			});
		}).catch(function (err) {});
	};
}

function setTagAutocomplete(searchText) {
	return function (dispatch) {
		var str = searchText.split(" ");
		var tags = [];

		_lodash2.default.forEach(str, function (tag) {
			tags.push({
				name: tag
			});
		});

		dispatch({
			type: _ShowcaseConstants.SET_TAG_AUTOCOMPLETE,
			payload: tags
		});
	};
}

function onShowCaseSearchValueChanged(text) {
	return function (dispatch) {
		dispatch({ type: _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CHANGED, payload: text });

		var inputs = text.split(" ");

		if (inputs.length > 0) {
			BackendFactory().getTagAutoComplete({
				tag: inputs.length > 1 ? inputs[inputs.length - 2] : '',
				freetext: inputs[inputs.length - 1]
			}).then(function (res) {
				dispatch({
					type: _ShowcaseConstants.GET_TAG_AUTOCOMPLETE_FULFILLED,
					payload: res.data.tags
				});
			}).catch(function (err) {});
		}
	};
}

function getPortfolios(tags, pageIndex) {
	return function (dispatch) {
		dispatch({ type: _ShowcaseConstants.GET_PORTFOLIO });

		BackendFactory().getShowcaseByTags({
			page: pageIndex,
			tags: tags
		}).then(function (res) {
			dispatch({
				type: _ShowcaseConstants.GET_PORTFOLIO_FULFILLED,
				payload: {
					data: res.data.showcases,
					pageIndex: pageIndex,
					pageLast: res.data.page_last,
					paginate: 8
				}
			});
		}).catch(function (err) {
			console.log(err);
		});
	};
}