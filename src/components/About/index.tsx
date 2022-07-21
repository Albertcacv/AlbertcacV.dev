import Button from '../Button';
import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.about} id='about'>
			<section className={styles.aboutContent}>
				<article>
					<h3 className={styles.aboutTitle}>Let me introduce Myself</h3>
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
			</section>
		</section>
	);
};

export default About;
