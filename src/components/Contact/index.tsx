import styles from './contact.module.css';
import Logo from '/avatar.jpg';

const Contact = () => {
	return (
		<section className={styles.section}>
			<div className={styles.infoCard}>
				<img src={Logo} className={styles.image} />
				<div className={styles.info}>
					<span>Get in touch!</span>
					<a href='https://www.linkedin.com/in/albertcacv/' target='_blank' className={styles.button}>Let's talk</a>
				</div>
			</div>

		</section>
	);
};

export default Contact;
