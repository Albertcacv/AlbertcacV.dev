import styles from './contact.module.css';
const Contact = () => {
	return (
		<section className={styles.contactSection}>
			<section className={styles.contactContent}>
				<span className={styles.contactIntro}>Have a project?</span>
				<h3 className={styles.contactTitle}>Interested in Collaboration?</h3>
				<a
					className={styles.contactButton}
					href='https://www.linkedin.com/in/albertcacv/'
					target='_blank'
					rel='noreferrer noopener'
				>
					Contact now
				</a>
				<ul className={styles.contactList}>
					<li className={styles.contactItem}>
						<a href='#services'>Services</a>
					</li>
					<li className={styles.contactItem}><a href='#projects'>Projects</a></li>
					<li className={styles.contactItem}><a href='#skills'>Skills</a></li>
					<li className={styles.contactItem}><a href='#about'>About me</a></li>
				</ul>
			</section>
		</section>
	);
};

export default Contact;
