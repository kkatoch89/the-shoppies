import * as actionTypes from './actionTypes';

export const addNomination = (movieId, movie) => {
	return {
		type: actionTypes.ADD_NOMINATION,
		movieId,
		movie,
	};
};

export const removeNomination = (movie) => {
	return {
		type: actionTypes.REMOVE_NOMINATION,
		movie,
	};
};

export const fetchNominationFailed = () => {
	return {
		type: actionTypes.FETCH_NOMINATION_FAILED,
	};
};
