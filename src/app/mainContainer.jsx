import React from 'react'
import styles from "./page.module.css";

export default function MainContainer({ currentPage }) {
	return (
		<div className={styles.mainContainer}>
			{ currentPage.module() }
		</div>
	);
}
