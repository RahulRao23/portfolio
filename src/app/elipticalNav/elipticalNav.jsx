import React from 'react'
import styles from "./elipticalNav.module.css";



export default function elipticalNav({currentPage, pages, setCurrentPage}) {
		return (
			<div className={styles.elipticalNav}>
				<p className={styles.pageName}>{currentPage.pageName}</p>
				<div className={styles.semiCircle}>
					{
						Object.values(pages).map(page => {
							return (
								<button
								key={page.pageName}
									onClick={() => setCurrentPage(page)}
								>{page.pageName}</button>
							);
						})
					}
				</div>
			</div>
		)
}
