import Hero from '../Hero';
import styles from './home.module.css';
const Home = () => {
	return (
		<section className={styles.home} id='home'>
			<Hero />
		</section>
	);
};

export default Home;
