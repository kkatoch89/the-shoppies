import * as actionTypes from './actionTypes';

export const addNomination = (movieId, movie) => {
	return {
		type: actionTypes.ADD_NOMINATION,
		movieId,
		movie,
	};
};

export const removeNomination = (movieId) => {
	return {
		type: actionTypes.REMOVE_NOMINATION,
		movieId,
	};
};

export const fetchNominationFailed = () => {
	return {
		type: actionTypes.FETCH_NOMINATION_FAILED,
	};
};
