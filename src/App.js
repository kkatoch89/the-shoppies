import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';

function App() {
	const routes = (
		<>
			<Switch>
				<Route path="/" exact component={Main} />
				<Redirect to="/" />
			</Switch>
		</>
	);
	return (
		<div className={styles.App}>
			<Layout>{routes}</Layout>
		</div>
	);
}

export default App;
