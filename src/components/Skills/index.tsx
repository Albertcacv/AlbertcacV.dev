import ReactTooltip from 'react-tooltip';
import styles from './styles.module.css';
import MongoLogo from '/mongodb_logo.png';
import NextIcon from '/next_logo.svg';
import NodeIcon from '/node_logo.png';
import ReactIcon from '/react_logo.png';
import TailwindLogo from '/tailwind-css.png';
import TsLogo from '/ts_logo.png';

const Skills = () => {
	return (
		<section className={styles.skillSection}>
			<span className={styles.title}>Skills</span>
			<section className={styles.skills}>
				<ul className={styles.skillsList}>
					<li className={styles.skillsItem}>
						<img src={ReactIcon} className={styles.img} data-tip='REACT' />
					</li>
					<li className={styles.skillsItem}>
						<img src={NextIcon} className={styles.img} data-tip='NEXTJS' />
					</li>
					<li className={styles.skillsItem}>
						<img src={NodeIcon} className={styles.img} data-tip='NODEJS' />
					</li>
					<li className={styles.skillsItem}>
						<img src={TsLogo} className={styles.img} data-tip='TYPESCRIPT' />
					</li>
					<li className={styles.skillsItem}>
						<img src={MongoLogo} className={styles.img} data-tip='MONGODB' />
					</li>
					<li className={styles.skillsItem}>
						<img src={TailwindLogo} className={styles.img} data-tip='TAILWINDCSS' />
					</li>
				</ul>
				<ReactTooltip effect='solid' />
			</section>
		</section>
	);
};

export default Skills;
