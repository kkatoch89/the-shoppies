import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
	movies: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_NOMINATION:
			console.log(action);
			return {
				...state,
				movies: {
					...state.movies,
					[action.movieId]: {
						title: action.movie.Title,
						year: action.movie.Year,
					},
				},
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
