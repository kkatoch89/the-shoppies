// import { axiosOMDB } from '../../axios-orders';
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const updateQueryString = (queryString) => {
	return {
		type: actionTypes.UPDATE_QUERY_STRING,
		queryString,
	};
};

export const searchReset = () => {
	return {
		type: actionTypes.SEARCH_RESET,
	};
};

export const searchSuccess = (results) => {
	return {
		type: actionTypes.SEARCH_SUCCESS,
		searchResults: results,
	};
};

export const searchError = (err) => {
	return {
		type: actionTypes.SEARCH_ERROR,
		error: err,
	};
};

export const clearResults = () => {
	return {
		type: actionTypes.CLEAR_RESULTS,
	};
};

export const search = (title) => {
	return (dispatch) => {
		axios
			.get(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`
			)
			.then((response) => {
				dispatch(updateQueryString(title));
				const movies = {};
				console.log(response);
				if (response.data.Search) {
					response.data.Search.forEach((el) => {
						movies[el.imdbID] = el;
						dispatch(searchSuccess(movies));
					});
					if (response.data.Error) {
						dispatch(searchError('Hmmm... lets be more specific'));
					}
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch(searchError(error));
			});
	};
};
