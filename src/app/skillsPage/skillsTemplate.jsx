'use client';
import React from 'react';
import Image from 'next/image';
import styles from "../skillsPage/skillsPage.module.css";

export default function SkillsTemplate({ skill }) {

	return (
		<div className={styles.skillContainer}>

			<p className={styles.skillHeader}>{skill.header}</p>
			<div className={styles.skillImageList}>
				{
					skill.skillsSetImages.map(imageObject => {
						return (
							<div key={imageObject.key} className={styles.skillImageContainer}>
								<Image
									src={imageObject.image}
									alt="Logo"
									className={styles.skillImage}
									priority
								/>
								<span className={styles.imageText}>{imageObject.text}</span>
							</div>
						);
					})	
				}
			</div>

		</div>
	)
}
