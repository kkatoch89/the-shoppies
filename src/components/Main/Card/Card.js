import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
	return (
		<li className={styles.Card}>
			<h3>{`${props.title} (${props.year})`}</h3>
			<button
				disabled={props.nominatedMovie}
				className={styles.btn}
				onClick={props.nominated ? props.removeNomHandler : props.addNomHandler}
			>
				{props.nominated ? 'Remove' : 'Nominate'}
			</button>
		</li>
	);
};

export default Card;
