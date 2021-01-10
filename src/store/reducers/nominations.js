import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
	movies: [],
};

const removeMovie = (state, action) => {
	const updatedList = state.movies.filter((movie) => {
		return movie.movieId !== action.movieId;
	});
	return {
		...state,
		movies: updatedList,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_NOMINATION:
			console.log(action);
			return {
				...state,
				movies: [
					...state.movies,
					{
						movieId: action.movieId,
						title: action.movie.Title,
						year: action.movie.Year,
					},
				],
			};
		case actionTypes.REMOVE_NOMINATION:
			return removeMovie(state, action);
		default:
			return state;
	}
};

export default reducer;
