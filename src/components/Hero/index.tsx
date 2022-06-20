import Skills from '../Skills';
import styles from './styles.module.css';

const Hero = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.subtitle}>HELLO, MI NAME IS</h2>
			<h1 className={styles.title}>Alberto C. Álvarez</h1>
			<p className={styles.subtitle}>Web & Sofware developer</p>

			<article className={styles.article}>
				<div className={styles.articleBackground}></div>
				<div className={styles.articleContent}>
					<Skills />
				</div>
			</article>
		</section>
	);
};

export default Hero;
