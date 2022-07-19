import Contact from '../components/Contact';
import Header from '../components/Header';

import styles from '../styles/contact.module.css';

const ContactPage = () => {
	return (
		<div className={styles.Contact} id='contact'>
			<Header />
			<Contact />
		</div>
	);
};

export default ContactPage;
