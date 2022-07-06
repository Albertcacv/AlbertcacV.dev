import styles from './contact.module.css';
const Contact = () => {
	return (
		<section className={styles.contactSection}>
			<section className={styles.contactContent}>
				<span className={styles.contactIntro}>Have a project?</span>
				<h3 className={styles.contactTitle}>Interested in Collaboration?</h3>
				<a className={styles.contactButton} href="https://www.linkedin.com/in/albertcacv/">Contact now</a>
				<ul className={styles.contactList}>
					<li className={styles.contactItem}>Services</li>
					<li className={styles.contactItem}>Projects</li>
					<li className={styles.contactItem}>Skills</li>
					<li className={styles.contactItem}>About me</li>
				</ul>
			</section>
		</section>
	);
};

export default Contact;
