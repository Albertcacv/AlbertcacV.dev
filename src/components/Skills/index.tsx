import styles from './styles.module.css';

import GoIcon from '../../../assets/go_logo.png';
import MongoLogo from '../../../assets/mongodb_logo.png';
import NextIcon from '../../../assets/next_logo.svg';
import NodeIcon from '../../../assets/node_logo.png';
import ReactIcon from '../../../assets/react_logo.png';
import TsLogo from '../../../assets/ts_logo.png';

const Skills = () => {
	return (
		<section className={styles.skillSection}>
			<span className={styles.span}>Skills</span>
			<section className={styles.skills}>
				<ul className={styles.skillsList}>
					<li className={styles.skillsItem}>
						<img src={ReactIcon} className={styles.img} />
					</li>
					<li className={styles.skillsItem}>
						<img src={NextIcon} className={styles.img} />
					</li>
					<li className={styles.skillsItem}>
						<img src={NodeIcon} className={styles.img} />
					</li>
					<li className={styles.skillsItem}>
						<img src={TsLogo} className={styles.img} />
					</li>
					<li className={styles.skillsItem}>
						<img src={MongoLogo} className={styles.img} />
					</li>
					<li className={styles.skillsItem}>
						<img src={GoIcon} className={styles.img} />
					</li>
				</ul>
			</section>
		</section>
	);
};

export default Skills;
