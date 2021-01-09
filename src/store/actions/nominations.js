import * as actionTypes from './actionTypes';

export const addNomination = (movie) => {
	return {
		type: actionTypes.ADD_NOMINATION,
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
