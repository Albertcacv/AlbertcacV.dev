import ContactButton from '../ContactButton';
import Wrapper from '../Wrapper';
import styles from './styles.module.css';
const Contact = () => {
	return (
		<section className={styles.contactSection}>
			<Wrapper>
				<section className={styles.contactContent}>
					<div>
						<h3 className={styles.contactTitle}>
							Interested in Collaboration?
						</h3>
						<p className={styles.contactSubtitle}>
							Challenge me. I want to work with you to create the really cool
							stuff.
						</p>
					</div>

					<ContactButton />
				</section>
			</Wrapper>
		</section>
	);
};

export default Contact;
