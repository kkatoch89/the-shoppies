import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
	const moviesList = [];

	for (let key in props.searchMoviesList) {
		moviesList.push({ title: props.searchMoviesList[key].Title, id: key });
	}

	const moviesListOutput = moviesList.map((movie) => {
		return <li id={movie.id}>{movie.title}</li>;
	});

	return (
		<div>
			<h2>These are your Results!</h2>
			<ul>{moviesListOutput}</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		searchMoviesList: state.searchResults.movies,
	};
};

export default connect(mapStateToProps)(Results);
