"use client"
import React from 'react';
import styles from "./resumePage.module.css";

export default function ResumePage() {
	return (
		<div className={styles.resumePage}>
			<embed src="/resume/resume.pdf" type="application/pdf" className={styles.pdfViwer} />
		</div>
	)
}
