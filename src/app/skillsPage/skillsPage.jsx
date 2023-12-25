import React from 'react';
import styles from "./skillsPage.module.css";
import SkillsTemplate from "./skillsTemplate";

// Backend Images
import NodeJSImage from "../../../public/skillsImages/backend/1-nodejs.png";
import ExpressJSImage from "../../../public/skillsImages/backend/2-expressjs.png";
import MysqlImage from "../../../public/skillsImages/backend/3-mysql.png";
import MongodbImage from "../../../public/skillsImages/backend/4-mongodb.png";
import SequelizeJSImage from "../../../public/skillsImages/backend/5-sequelizejs.png";
import SocketioImage from "../../../public/skillsImages/backend/6-socketio.png";

// Frontend Images
import HtmlImage from "../../../public/skillsImages/frontend/1-html.png";
import CssImage from "../../../public/skillsImages/frontend/2-css.png";
import JsImage from "../../../public/skillsImages/frontend/3-JavaScript.png";
import ReactImage from "../../../public/skillsImages/frontend/4-reactjs.png";

// Version control
import GitImage from "../../../public/skillsImages/versionControl/1-git.png";
import GitHubImage from "../../../public/skillsImages/versionControl/2-github.png";

// UI/UX
import FigmaImage from "../../../public/skillsImages/ui-ux/figma.png";

// Cloud Platform
import AwsImage from "../../../public/skillsImages/cloudPlatform/aws.png";

const SKILL_TYPES = [
	{
		key: 1,
		header: "Backend Development",
		skillsSetImages: [
			{image: NodeJSImage, key: 1, text: 'NodeJS'},
			{image: ExpressJSImage, key: 2, text: 'ExpressJS'},
			{image: MysqlImage, key: 3, text: 'MySQL'},
			{image: MongodbImage, key: 4, text: 'MongoDB'},
			{image: SequelizeJSImage, key: 5, text: 'SequelizeJS'},
			{image: SocketioImage, key: 6, text: 'Socket.io'},
		],
	},
	{
		key: 2,
		header: "Frontend Development",
		skillsSetImages: [
			{image: HtmlImage, key: 1, text: 'HTML'},
			{image: CssImage, key: 2, text: 'CSS'},
			{image: JsImage, key: 3, text: 'JavaScript'},
			{image: ReactImage, key: 4, text: 'React'},
		],
	},
	{
		key: 3,
		header: "Version Control",
		skillsSetImages: [
			{image: GitImage, key: 1, text: 'Git'},
			{image: GitHubImage, key: 2, text: 'Github'},
		],
	},
	{
		key: 4,
		header: "UI/UX",
		skillsSetImages: [
			{image: FigmaImage, key: 1, text: 'Figma'},
		],
	},
	{
		key: 5,
		header: "Cloud Platform",
		skillsSetImages: [
			{image: AwsImage, key: 1, text: 'Amazon Web Services'},
		],
	},
]

export default function SkillsPage() {
	return (
		<div className={styles.skillPage}>
			{
				SKILL_TYPES.map(skill => {
					return (
						<SkillsTemplate key={skill.key} skill={skill}/>
					)
				})
			}
		</div>
	)
}
