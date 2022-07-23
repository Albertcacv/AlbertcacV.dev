import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.about} id='about'>
			<span className={styles.aboutTitle}>Let me introduce Myself</span>
			{/* <article>
					<p className={styles.aboutDescription}>
						I am currently studying computer engineering. My main goal is to
						train myself in the world of web development and software creation.
						I really like cybersecurity and you could say that it is one of my
						hobbies.
					</p>
					<Button
						text="LET'S TALK"
						url='https://www.linkedin.com/in/albertcacv/'
					/>
				</article>
			*/}
		</section>
	);
};

export default About;
