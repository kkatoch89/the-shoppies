import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

const SearchTitle = (props) => {
	const [searchInput, setSearchInput] = useState('');
	const { onSearch, onClearResults } = props;
	const inputRef = useRef();

	useEffect(() => {
		const refLength = inputRef.current.value.trim().length;
		if (
			searchInput === inputRef.current.value &&
			refLength !== 0 //In order to avoid unecessary API call on page reload
		) {
			// const query = searchInput.trim().length === 0 ? '' : searchInput;
			const query = searchInput;
			onSearch(query);
		}

		if (refLength === 0) {
			onClearResults();
		}
	}, [searchInput, onSearch, onClearResults]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		onSearch(searchInput);
	};

	const onChangeHandler = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<>
			<h2>Movie Title</h2>
			<form onSubmit={(e) => onSubmitHandler(e)}>
				<input
					type="text"
					placeholder="Search"
					value={searchInput}
					onChange={(e) => onChangeHandler(e)}
					ref={inputRef}
				/>
			</form>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		searchMoviesList: state.searchResults.movies,
		error: state.searchResults.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (title) => {
			dispatch(actions.search(title));
		},
		onClearResults: () => {
			dispatch(actions.clearResults());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);
