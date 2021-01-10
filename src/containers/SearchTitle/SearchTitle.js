import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

const SearchTitle = (props) => {
	const [searchInput, setSearchInput] = useState('');
	const { onSearch } = props;
	const inputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (
				searchInput === inputRef.current.value &&
				inputRef.current.value.trim().length !== 0 //In order to avoid unecessary API call on page reload
			) {
				// const query = searchInput.trim().length === 0 ? '' : searchInput;
				const query = searchInput;
				onSearch(query);
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [searchInput, onSearch]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		onSearch(searchInput);
		// setSearchInput('');
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);
