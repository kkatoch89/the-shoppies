import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Card from '../../components/Main/Card/Card';

const Nominations = (props) => {
	const { nominatedMovies } = props;

	const displayNominations = nominatedMovies.map((movie) => {
		return (
			<Card
				key={movie.movieId}
				title={movie.title}
				year={movie.year}
				nominated
				removeNomHandler={() => {
					props.onRemoveNomination(movie.movieId);
				}}
			/>
		);
	});

	return (
		<div>
			<h2>Your 5 Nominations</h2>
			<ul>{displayNominations}</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		nominatedMovies: state.nominations.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddNomination: (movie) => dispatch(actions.addNomination(movie)),
		onRemoveNomination: (movieId) =>
			dispatch(actions.removeNomination(movieId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
