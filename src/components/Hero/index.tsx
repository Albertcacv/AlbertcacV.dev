import ProjectsButton from '../ProjectsButton';
import Social from '../Social';
import styles from './styles.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<span className={styles.title}>Think the Design, I'll do the rest.</span>
			<span className={styles.subtitle}>
				Attractive and effective solutions
			</span>

			<ProjectsButton />

			<Social />
		</section>
	);
};

export default Hero;
