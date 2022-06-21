import ContactButton from '../ContactButton';
import styles from './styles.module.css';
const Contact = () => {
	return (
		<section className={styles.contactSection}>
			<h3 className={styles.contactTitle}>Interested in Collaboration?</h3>
			<p className={styles.contactSubtitle}>
				Challenge me. I want to work with you to create the really cool stuff.
			</p>

			<ContactButton />
		</section>
	);
};

export default Contact;
