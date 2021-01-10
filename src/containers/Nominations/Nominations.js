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

	const displayNominations = Object.keys(nominatedMovies).map((key) => {
		return (
			<Card
				id={key}
				title={nominatedMovies[key].title}
				year={nominatedMovies[key].year}
				nominated={true}
			/>
		);
	});

	return (
		<div>
			<h2>These are your nominations!</h2>
			<ul>{displayNominations}</ul>
			<button onClick={() => props.onAddNomination('The Matrix')}>
				Add Movie
			</button>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominations);
