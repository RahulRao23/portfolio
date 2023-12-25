"use client";
import React from 'react';
import Image from "next/image";
import styles from "./experience.module.css";
import ExperienceTemplate from "./experienceTemplate";

import JuegoStudiosLogo from "../../../public/companies/juegostudios.jpg";
import DiscoverDollarLogo from "../../../public/companies/discoverDollar.png";
import DharmakshaLogo from "../../../public/companies/dharmaksha.png";

export default function experiencePage() {
	const COMAPANY_LIST = [
		{
			id: 1,
			name: 'Juego Studios Pvt. Ltd.',
			startDate: 'May 2022',
			endDate: 'Present',
			designation: 'Backend Developer',
			skills: 'NodeJS, ExpressJS, MySQL, Socket.IO, AWS',
			logo: JuegoStudiosLogo,
			details: `Trained on NodeJS and MySQL technologies and developed applications as part of the training.
				Understanding client requirements, and implementing solutions to roadblocks.
				Worked on client projects and NPM packages.
				Providing guidance and assistance to junior colleagues in resolving their inquiries or concerns.`,
		},
		{
			id: 2,
			name: 'Discover Dollar Technologies Pvt Ltd.',
			startDate: 'September 2021',
			endDate: 'November 2021',
			designation: 'Software Developer Intern',
			skills: 'JavaScript, Angular, MongoDB',
			logo: DiscoverDollarLogo,
			details: `Trained in JavaScript, Angular, and MongoDB technologies.
				Hands-on experience in developing applications as part of the training.
				My responsibility as a developer was to update the internal application's functionalities.`,
		},
		{
			id: 3,
			name: 'Dharmaksha Innovative Creations LLP.',
			startDate: 'July 2021',
			endDate: 'August 2021',
			designation: 'Web Developer',
			skills: 'Figma, HTML, CSS',
			logo: DharmakshaLogo,
			details: `Demonstrated hands-on experience in the design, and development of a company website, collaborating effectively with team members throughout the entire process.
				Effectively implemented feedback provided to achieve successful outcomes.`,
		},
	]
	return (
		<div className={styles.experiencePage}>
			<ExperienceTemplate companyList={COMAPANY_LIST}/>
		</div>
	)
}
