import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
	query: '',
	movies: {},
	error: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case actionTypes.SEARCH_RESET:
		// 	return {
		// 		...state,
		// 		movies: null,
		// 		error: null,
		// 	};
		case actionTypes.UPDATE_QUERY_STRING:
			return {
				...state,
				query: action.queryString,
			};
		case actionTypes.SEARCH_SUCCESS:
			return {
				...state,
				movies: { ...action.searchResults },
			};
		case actionTypes.SEARCH_ERROR:
			return {
				...state,
				error: action.error,
			};
		case actionTypes.CLEAR_RESULTS:
			return {
				query: '',
				movies: {},
				error: {},
			};
		default:
			return state;
	}
};

export default reducer;
