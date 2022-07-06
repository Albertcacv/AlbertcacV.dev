import { useRef } from 'react';
import styles from './services.module.css';

function Services() {
	

	return (
		<section className={styles.servicesSection}>
			<span className={styles.servicesIntro}>How Can i Help you?</span>

			<section className={styles.services}>
				<span className={styles.servicesTitle}>D E V E L O P E R</span>
				<ul className={styles.servicesList}>
					<li className={styles.servicesItem}>
						Front-end development (ReactJS)
					</li>
					<li className={styles.servicesItem}>Backend-development (NodeJS)</li>
					<li className={styles.servicesItem}>DevOps</li>
				</ul>
			</section>
		</section>
	);
}

export default Services;
