import Header from '../components/Header';
import Projects from '../components/Projects';
import styles from '../styles/home.module.css';
const Home = () => {
	return (
		<div className={styles.Home} id='home'>
			<Header />
			<Projects />
		</div>
	);
};

export default Home;
