import Projects from '../Projects';
import Skills from '../Skills';
import styles from './portfolio.module.css';
const Portfolio = () => {
	return (
		<section className={styles.portfolio} id='portfolio'>
			<Skills />
			<Projects />
		</section>
	);
};

export default Portfolio;
