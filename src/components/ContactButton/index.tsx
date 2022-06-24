import styles from './styles.module.css';

const ContactButton = () => {
	return (
		<a
			href='https://www.linkedin.com/in/albertcacv/'
			target='_blank'
			rel='noopener noreferrer'
			className={styles.contactButton}
		>
			Let's Talk
		</a>
	);
};

export default ContactButton;
