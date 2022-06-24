import Wrapper from '../Wrapper';
import styles from './styles.module.css';

const About = () => {
	return (
		<section className={styles.aboutSection}>
			<Wrapper>
				<section className={styles.aboutContent}>
					<h1 className={styles.aboutTitle}>Alberto C. Álvarez</h1>
					<p className={styles.aboutDescription}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium veniam harum explicabo iusto porro velit nisi obcaecati
						at odio cumque minima placeat, eveniet voluptatem magnam voluptate
						cupiditate. Sequi, eveniet aperiam.
					</p>
				</section>
			</Wrapper>
		</section>
	);
};

export default About;
