import styles from './styles.module.css';

import HeroImg from '../../assets/hero-img.png';
const Skills = () => {
	return (
		<section>
			<span className={styles.span}>Skills</span>
			<section className={styles.skills}>
				<img src={HeroImg} className={styles.img} />
			</section>
		</section>
	);
};

export default Skills;
