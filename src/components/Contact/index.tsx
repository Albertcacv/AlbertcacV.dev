import styles from './contact.module.css';
const Contact = () => {
	return (
		<section className={styles.contactSection}>
			<section className={styles.contactContent}>
				<span>Have a project?</span>
				<div>
					<h3 className={styles.contactTitle}>Interested in Collaboration?</h3>
					<p className={styles.contactSubtitle}>
						Challenge me. I want to work with you to create the really cool
						stuff.
					</p>
				</div>
			</section>
		</section>
	);
};

export default Contact;
