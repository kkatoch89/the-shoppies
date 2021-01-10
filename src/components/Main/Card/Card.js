import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
	return (
		<li className={styles.Card}>
			<h3>{`${props.title} (${props.year})`}</h3>
			<button className={styles.btn} onClick={props.onClickHandler}>
				{props.nominated ? 'Remove' : 'Nominate'}
			</button>
		</li>
	);
};

export default Card;
