import About from '../components/About';
import Header from '../components/Header';
import styles from '../styles/about.module.css';
const AboutPage = () => {
	return (
		<div className={styles.About}>
			<Header />
			<About />
		</div>
	);
};

export default AboutPage;
