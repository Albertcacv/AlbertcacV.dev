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
				<h1 className={styles.title}>Alberto C. Álvarez</h1>
			</div>
			<ul className={styles.heroList}>
				<li className={styles.heroItem}>Coder 🖥️</li>
				<li className={styles.heroItem}>Cibersecurity 🔐</li>
				<li className={styles.heroItem}>Powerlifting 💪</li>
			</ul>

			<section className={styles.heroImageContainer}>
				<img src={Avatar} />
			</section>

			<section className={styles.heroActions}>
				<HeroButton icon={<AiOutlineArrowDown />} text='Explore more' />
				<HeroButton icon={<BiEnvelope />} text='Contact Now' />
			</section>
		</section>
	);
};

export default Hero;
