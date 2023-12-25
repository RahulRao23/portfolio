import React from 'react';
import Image from 'next/image';
import styles from "./homePage.module.css";
import GitHubLogo from "../../../public/contactImages/github.png";
import LinkedInLogo from "../../../public/contactImages/linkedin.png";
import EmailLogo from "../../../public/contactImages/email.png";
import InstagramLogo from "../../../public/contactImages/instagram.png";

function homePage() {
	return (
		<div className={styles.homePage}>
			<p className={styles.header}>Hey, I'm <span className={styles.bold}>Rahul Rao</span></p>

			<p className={styles.intro}>
				Dedicated and results-driven Software Engineer with over a year of professional experience in software development.
				Always ready to adapt to new technology in order to learn more and get better.
			</p>

			<div className={styles.links}>
				<a href="https://github.com/RahulRao23" target="_blank" rel="noopener noreferrer">
					<Image
						src={GitHubLogo}
						alt="GitHub Logo"
						className={styles.contactImages}
						priority
					/>
				</a>
				<a href="https://www.linkedin.com/in/rahul-rao-7aaa51210/" target="_blank" rel="noopener noreferrer">
					<Image
						src={LinkedInLogo}
						alt="LinkedIn Logo"
						className={styles.contactImages}
						priority
					/>
				</a>
				<a href="mailto:rahulrao7144@gmail.com" rel="noopener noreferrer">
					<Image
						src={EmailLogo}
						alt="GitHub Logo"
						className={styles.contactImages}
						priority
					/>
				</a>
				<a href="https://www.instagram.com/_.rahulrao._/" target="_blank" rel="noopener noreferrer">
					<Image
						src={InstagramLogo}
						alt="GitHub Logo"
						className={styles.contactImages}
						priority
					/>
				</a>
			</div>
		</div>
	)
}

export default homePage
