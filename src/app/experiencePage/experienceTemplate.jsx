import React, {useReducer, useState} from 'react';
import Image from "next/image";
import styles from "./experience.module.css";

const ACTIONS = {
	SHOW_DETAILS: 1,
	HIDE_DETAILS: 2,
};

const showDetailsStyle = {
	'color': '#000',
	'visibility': 'visible',
	'fontSize': '1.2rem',
}
const hideDetailsStyle = {
	'visibility': 'hidden',
}

function reducer(showDetails, action) {
	const updatedShowDetails = [...showDetails];

	switch (action.type) {
		case ACTIONS.SHOW_DETAILS:
			updatedShowDetails[action.payload.companyId - 1] = { show_details: true, style: showDetailsStyle };
			return updatedShowDetails;
		case ACTIONS.HIDE_DETAILS:
			updatedShowDetails[action.payload.companyId - 1] = { show_details: false, style: hideDetailsStyle };
			return updatedShowDetails;
		default:
			return updatedShowDetails;
	}
}

export default function ExperienceTemplate({companyList}) {

	const [showDetails, dispatch] = useReducer(
		reducer,
		companyList.map(() => {return { show_details: false, style: hideDetailsStyle }})
	);

	return (
		<div className={styles.companyList}>
			{
				companyList.map(company => {
					return (
						<div key={company.id} className={styles.companyContainer}>
							<div className={styles.companyOverview}>
								<div className={styles.companySummary}>
									<p className={styles.companyName}>{company.name}</p>
									<p className={styles.workPeriod}>{company.startDate + ' - ' + company.endDate}</p>
									<p className={styles.workPeriod}>{company.skills}</p>
								</div>
								<div className={styles.companyImage}>
									<Image
										src={company.logo}
										alt="Company Logo"
										className={styles.companyLogo}
										priority
									/>
								</div>
							</div>
							<div className={styles.experienceDetails}>
								<button 
									className={styles.showDetailsBtn} 
									onClick={() => dispatch(
										{
											type: showDetails[company.id - 1].show_details ? ACTIONS.HIDE_DETAILS: ACTIONS.SHOW_DETAILS, 
											payload: {companyId: company.id}
										}
									)}
								>
									{showDetails[company.id - 1].show_details ? 'Hide' : 'Show Details'}
								</button>
								{
									showDetails[company.id - 1].show_details ?
									<p style={showDetails[company.id - 1].style}>
										{company.details}
									</p> :
									<span></span>
								}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}
