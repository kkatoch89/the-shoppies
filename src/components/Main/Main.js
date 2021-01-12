import React from 'react';

import styles from './Main.module.css';

import SearchTitle from '../../containers/SearchTitle/SearchTitle';
import Results from '../../containers/Results/Results';
import Nominations from '../../containers/Nominations/Nominations';

const Main = () => {
	return (
		<main className={styles.Main}>
			<div className={styles.SearchTitle}>
				<SearchTitle />
			</div>
			<div className={styles.Results}>
				<Results />
			</div>
			<div className={styles.Nominations}>
				<Nominations />
			</div>
		</main>
	);
};

export default Main;
