import Skills from '../Skills';
import Social from '../Social';
import styles from './styles.module.css';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<section className={styles.section}>
				<h2 className={styles.subtitle}>HELLO, MI NAME IS</h2>
				<h1 className={styles.title}>Alberto C. Álvarez</h1>
				<p className={styles.subtitle}>Web & Sofware developer</p>
			</section>

			<Social />
			<article className={styles.skillArticle}>
				<div className={styles.skillContent}>
					<Skills />
				</div>
			</article>
		</div>
	);
};

export default Hero;
