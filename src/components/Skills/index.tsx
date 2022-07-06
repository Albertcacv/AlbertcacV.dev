import styles from './skills.module.css';

import JSSVG from '/javascript.png';
import MongoDBSVG from '/mongodb.svg';
import NextJSSVG from '/nextjs.svg';
import NodeJSSVG from '/nodejs.svg';
import ReactSVG from '/react.svg';
import TSSVG from '/ts_logo.png';
const TECHNOLOGIES = [
	{
		id: 1,
		url: JSSVG,
		title: 'JavaScript',
	},
	{
		id: 2,
		url: TSSVG,
		title: 'TypeScript',
	},
	{
		id: 3,
		url: ReactSVG,
		title: 'React',
	},
	{
		id: 4,
		url: NextJSSVG,
		title: 'NextJS',
	},
	{
		id: 5,
		url: NodeJSSVG,
		title: 'NodeJS',
	},
	{
		id: 6,
		url: MongoDBSVG,
		title: 'MongoDB',
	},
];

type Item = {
	id: number;
	url: string;
	title: string;
};

const Skills = () => {
	return (
		<section className={styles.skillsSection}>
			<span className={styles.skillsTitle}>Skills</span>

			<section className={styles.skills}>
				{TECHNOLOGIES.map((item: Item) => (
					<article key={item.id} className={styles.skillArticle}>
						<img src={item.url} className={styles.skillImage} />
						<span>{item.title}</span>
					</article>
				))}
			</section>
		</section>
	);
};

export default Skills;
