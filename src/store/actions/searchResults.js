// import { axiosOMDB } from '../../axios-orders';
import axios from 'axios';

import * as actionTypes from './actionTypes';

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

export const search = (title) => {
	return (dispatch) => {
		axios
			.get(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`
			)
			.then((response) => {
				const movies = {};
				response.data.Search.forEach((el) => {
					movies[el.imdbID] = el;
				});
				dispatch(searchSuccess(movies));
				// // dispatch(searchReset());
				console.log(movies);
				// const data = response.data;
				// console.log(response.data.Search);
			})
			.catch((error) => {
				console.log(error);
				dispatch(searchError(error));
				// dispatch(searchReset());
			});
	};
};
