import React from 'react';

import SearchTitle from '../../containers/SearchTitle/SearchTitle';
import Results from '../../containers/Results/Results';
import Nominations from '../../containers/Nominations/Nominations';

const Main = () => {
	return (
		<div>
			<SearchTitle />
			<Results />
			<Nominations />
		</div>
	);
};

export default Main;
