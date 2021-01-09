import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
	movies: [
		{
			title: 'Die-hard',
		},
		{
			title: 'LOTR',
		},
		{
			title: 'Star-Wars',
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_NOMINATION:
			return {
				...state,
				[state.movies]: [...state.movies, { title: action.movie }],
			};
		case actionTypes.REMOVE_NOMINATION:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default reducer;
