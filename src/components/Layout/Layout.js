import React from 'react';

import styles from './Layout.module.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

const Layout = (props) => {
	return (
		<div className={styles.Layout}>
			{/* Toolbar & SideDrawer */}
			<Header />
			<Main>{props.children}</Main>
		</div>
	);
};

export default Layout;
