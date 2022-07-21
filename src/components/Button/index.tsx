import styles from './button.module.css';

interface ButtonProps {
	text: string;
	url: string;
}
const Button = ({ text, url }: ButtonProps) => {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopenner noreferrer'
			className={styles.button}
		>
			{text}
		</a>
	);
};

export default Button;
