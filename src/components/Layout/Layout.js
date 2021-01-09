import React from 'react';

import styles from './Layout.module.css';

import Header from '../Header/Header';

const Layout = (props) => {
	return (
		<div className={styles.Layout}>
			{/* Toolbar & SideDrawer */}
			<Header />
			<main className={styles.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
