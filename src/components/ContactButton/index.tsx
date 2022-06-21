import styles from './styles.module.css';

const ContactButton = () => {
	return (
		<a
			href='https://www.linkedin.com/in/albertcacv/'
			target='_blank'
			rel='noopener noreferrer'
			className={styles.contactButton}
		>
			LET'S TALK
		</a>
	);
};

export default ContactButton;
