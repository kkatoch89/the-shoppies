import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

const Nominations = (props) => {
	const moviesList = props.nominatedMovies.map((el) => {
		return <li id={new Date()}>{el.title}</li>;
	});
	return (
		<div>
			<h2>These are your nominations!</h2>
			<ul>{moviesList}</ul>
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
