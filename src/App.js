import React from 'react';
import {connect} from 'react-redux';

import Layout from './components/Layout/Layout'

function App() {
	return (
		<div className="App">
			<Layout>
        <p>The Shoppies</p>
      </Layout>
		</div>
	);
}

export default App;
