import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.aboutSection} id='about'>
			<section className={styles.aboutContent}>
				<h1 className={styles.aboutTitle}>Let me introduce Myself</h1>
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
