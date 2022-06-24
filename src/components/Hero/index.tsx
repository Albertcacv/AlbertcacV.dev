import ProjectsButton from '../ProjectsButton';
import Social from '../Social';
import Wrapper from '../Wrapper';
import styles from './styles.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<Wrapper>
				<section className={styles.heroContent}>
					<span className={styles.title}>
						Think the Design, I'll do the rest.
					</span>
					<span className={styles.subtitle}>
						Attractive and effective solutions
					</span>

					<ProjectsButton />

					<Social />
				</section>
			</Wrapper>
		</section>
	);
};

export default Hero;
