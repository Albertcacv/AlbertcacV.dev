import styles from './porfolio.module.css';
import Projects from '../Projects';
import Skills from '../Skills';
const Portfolio = () => {
	return (
		<section className={styles.portfolio}>
			<Skills />
			<Projects />
		</section>
	);
};

export default Portfolio;
