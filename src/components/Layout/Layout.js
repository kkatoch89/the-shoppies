import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';

const Layout = (props) => {
	return (
		<>
			<GlobalStyles />
			{/* Toolbar & SideDrawer */}
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
