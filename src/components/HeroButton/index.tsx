import { ReactNode } from 'react';
import styles from './hero-button.module.css';

interface HeroButtonProps {
	icon: ReactNode;
	text: string;
	link: string;
}

const HeroButton = ({ icon, text, link }: HeroButtonProps) => {
	return (
		<>
			<a
				className={styles.heroButton}
				href={link}
				// target='_blank'
				rel='noreferrer noopener'
			>
				<div className={styles.heroButtonIcon}>{icon}</div>
				{text}
			</a>
		</>
	);
};

export default HeroButton;
