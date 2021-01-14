import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './Results.module.css';

import Card from '../../components/Main/Card/Card';
import * as actions from '../../store/actions/index';

const Results = (props) => {
	const [nominatedKeys, setNominatedKeys] = useState([]);
	// const [moviesList, setMoviesList] = useState([]);
	const { nominatedMovies, moviesSearchResults } = props;

	useEffect(() => {
		const nomKeys = nominatedMovies.map((el) => el.movieId);
		setNominatedKeys(nomKeys);
	}, [nominatedMovies]);

	const moviesList = [];

	for (let key in moviesSearchResults) {
		moviesList.push({
			id: key,
			title: moviesSearchResults[key].Title,
			year: moviesSearchResults[key].Year,
			nominated: nominatedKeys.find((el) => el === key),
		});
	}

	const onClickHandler = (movieId) => {
		const clickedMovie = props.moviesSearchResults[movieId];
		props.onAddNomination(movieId, clickedMovie);
		// console.log(movieId, clickedMovie);
	};

	const moviesListOutput = moviesList.map((movie) => {
		return (
			<Card
				key={movie.id}
				title={movie.title}
				year={movie.year}
				nominatedMovie={movie.nominated}
				addNomHandler={() => onClickHandler(movie.id)}
			/>
		);
	});

	return (
		<div className={styles.ResultsContainer}>
			<div className={styles.TitleBox}>
				<h2>
					{props.query.trim().length !== 0
						? `Results for "${props.query}"`
						: "Search for movies you'd like to nominate"}
				</h2>
			</div>
			<ul className={styles.ResultsList}>{moviesListOutput}</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		moviesSearchResults: state.searchResults.movies,
		error: state.searchResults.error,
		query: state.searchResults.query,
		nominatedMovies: state.nominations.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddNomination: (movieId, movie) => {
			dispatch(actions.addNomination(movieId, movie));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
