import Button from '../Button';
import styles from './hero.module.css';

import ProfilePic from '/profile.png';
const Hero = () => {
	return (
		<section className={styles.hero} id='contact'>
			<div className={styles.intro}>
				<h1 className={styles.title}>I'M ALBERTO C. ÁLVAREZ</h1>
				<span className={styles.subtitle}>Full Stack Developer</span>
				<p className={styles.description}>
					Think of the design and I'll bring it to life
				</p>
				<div className={styles.buttons}>
					<Button
						text='CONTACT ME'
						url='https://www.linkedin.com/in/albertcacv/'
					/>
					<Button text='DOWNLOAD CV' url='/pdf/CV.pdf' download={true} />
				</div>
			</div>
			<img src={ProfilePic} alt='' className={styles.image} />
		</section>
	);
};

export default Hero;
