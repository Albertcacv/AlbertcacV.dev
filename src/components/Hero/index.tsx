import HeroButton from '../HeroButton';
import styles from './hero.module.css';

import { AiOutlineArrowDown } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import Avatar from '/avatar.svg';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroInfo}>
				<span className={styles.subtitle}>hey, i am</span>
				<h1 className={styles.title}>
					<span>Alberto C.</span> <span>Álvarez</span>
				</h1>
				<ul className={styles.heroList}>
					<li className={styles.heroItem}>Coder 🖥️</li>
					<li className={styles.heroItem}>Cibersecurity 🔐</li>
					<li className={styles.heroItem}>Powerlifting 💪</li>
				</ul>
			</div>
			<section className={styles.heroActions}>
				<HeroButton
					icon={<AiOutlineArrowDown />}
					text='Explore more'
					link='#services'
				/>
				<HeroButton
					icon={<BiEnvelope />}
					text='Contact Now'
					link='https://www.linkedin.com/in/albertcacv/'
				/>
			</section>

			<section className={styles.heroImageContainer}>
				<img src={Avatar} />
			</section>
		</section>
	);
};

export default Hero;
