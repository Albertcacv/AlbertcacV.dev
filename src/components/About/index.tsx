import Button from '../Button';
import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.about} id='about'>
			<div className={styles.aboutContent}>
				<p className={styles.aboutDescription}>
					Hey! You already know my name and my occupation, so I'll tell you a
					little bit about me.
				</p>
				<p className={styles.aboutDescription}>
					I'm 22 years old, I have a degree in computer engineering and I'm
					eager to learn everything about the world of development. I chose IT
					because I always liked everything that can be created and I wanted to
					be the one who carry out those creations
				</p>
				<p className={styles.aboutDescription}>
					In my free time I like to practice sports related to the world of
					gymnastics such as powerlifting. I consider that they bring a series
					of values values such as discipline, organization and dedication that
					are easily extrapolated to the rest of the tasks you do in your daily
					life. day to day.
				</p>
				<p className={styles.aboutDescription}>
					if you are interested in me, want to know more about me or use my
					services services, please click on the button below and I will be
					happy to talk to you.
				</p>
				<div className={styles.button}>
					<Button
						text="LET'S TALK"
						url='https://www.linkedin.com/in/albertcacv/'
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
