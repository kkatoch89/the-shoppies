import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Card from '../../components/Main/Card/Card';

const Nominations = (props) => {
	const { nominatedMovies } = props;

	// const moviesList = [];
	// useEffect(() => {
	// 	for (let key in nominatedMovies) {
	// 		moviesList.push({ id: key, movieInfo: { ...nominatedMovies[key] } });
	// 	}
	// 	console.log(moviesList);
	// }, [nominatedMovies, moviesList]);

	const displayNominations = nominatedMovies.map((movie) => {
		return (
			<Card
				id={movie.movieId}
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
			<h2>These are your nominations!</h2>
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
