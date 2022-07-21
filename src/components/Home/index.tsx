import { BsArrowDown } from 'react-icons/bs';
import Button from '../Button';
import Header from './Header';
import styles from './home.module.css';
import Banner from '/Banner.svg';
const Home = () => {
	return (
		<section className={styles.home}>
			<Header />
			<section className={styles.hero}>
				<div className={styles.imageContainer}>
					<img src={Banner} alt='' className={styles.image} />
				</div>
				<div className={styles.intro}>
					<span className={styles.subtitle}>HELLO</span>
					<h1 className={styles.title}>I'M ALBERTO C. ÁLVAREZ</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
						repudiandae expedita officiis obcaecati dignissimos fugit, quod odio
						quo, esse dolorem nostrum voluptatem reprehenderit, maiores
						aspernatur reiciendis aut numquam earum alias.
					</p>
					<Button
						text='CONTACT ME'
						url='https://www.linkedin.com/in/albertcacv/'
					/>

					<div className={styles.arrow}>
						<BsArrowDown size={'3rem'} />
					</div>
				</div>
			</section>
		</section>
	);
};

export default Home;
