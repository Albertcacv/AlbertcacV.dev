import styles from './hero-button.module.css';

const HeroButton = ({ icon, text }) => {
	return (
		<>
			<div className={styles.heroButton}>
				<div className={styles.heroButtonIcon}>{icon}</div>
				{text}
			</div>
		</>
	);
};

export default HeroButton;
