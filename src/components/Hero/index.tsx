import Button from '../Button';
import styles from './hero.module.css';

import ProfilePic from '/profile.png';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.intro}>
				<h1 className={styles.title}>I'M ALBERTO C. ÁLVAREZ</h1>
				<span className={styles.subtitle}>Full Stack Developer</span>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
					repudiandae expedita officiis obcaecati dignissimos fugit, quod odio
					quo, esse dolorem nostrum voluptatem reprehenderit, maiores aspernatur
					reiciendis aut numquam earum alias.
				</p>
				<Button
					text='CONTACT ME'
					url='https://www.linkedin.com/in/albertcacv/'
				/>
			</div>
			<img src={ProfilePic} alt='' className={styles.image} />
		</section>
	);
};

export default Hero;
