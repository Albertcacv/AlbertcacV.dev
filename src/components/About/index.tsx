import styles from './styles.module.css';

const About = () => {
	return (
		<section className={styles.aboutSection}>
			<section className={styles.aboutContent}>
				<h1 className={styles.aboutTitle}>Alberto C. Álvarez</h1>
				<p className={styles.aboutDescription}>
					I am currently studying computer engineering. My main goal is to train
					myself in the world of web development and software creation. I really
					like cybersecurity and you could say that it is one of my hobbies.
				</p>
			</section>
		</section>
	);
};

export default About;
