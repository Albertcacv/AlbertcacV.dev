import styles from './hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero} id='contact'>
			<span className={styles.title}>Hello.</span>
			<span className={styles.subtitle}>
				Full Stack Developer
			</span>
		</section>
	);
};

export default Hero;
