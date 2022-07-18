import Skills from '../Skills';
import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.aboutSection} id='about'>
			<section className={styles.aboutContent}>
				<article className={styles.section}>
					<h3 className={styles.aboutTitle}>Let me introduce Myself</h3>
					<p className={styles.aboutDescription}>
						I am currently studying computer engineering. My main goal is to train myself in the world of web
						development and software creation. I really like cybersecurity and you could say that it is one of my
						hobbies.
					</p>
				</article>

				<article className={styles.section}>
					<h3 className={styles.aboutTitle}>My current timeline</h3>

					<p className={styles.aboutDescription}>
						#2020 - I did my internship at 
						<a href='https://www.linkedin.com/company/hpecds/' target='_blank' className={styles.link}>
							CDS, a Hewlett Packard Enterprise company  
						</a>
						 where I carried out a project based on a microservices architecture using technologies such as Java, React,
						and spring boot.
					</p>
				</article>

				<Skills />
			</section>
		</section>
	);
};

export default About;
