import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
	return (
		<li className={styles.Card}>
			<h3>{`${props.title} (${props.year})`}</h3>
			<div className={styles.BtnContainer}>
				<p
					className={
						props.nominatedMovie ? styles.Nominated : styles.NotNominated
					}
				>
					NOMINATED
				</p>
				<button
					disabled={props.nominatedMovie ? true : null}
					className={styles.btn}
					onClick={
						props.nominated ? props.removeNomHandler : props.addNomHandler
					}
				>
					{props.nominated ? 'Remove' : 'Nominate'}
				</button>
			</div>
		</li>
	);
};

export default Card;
