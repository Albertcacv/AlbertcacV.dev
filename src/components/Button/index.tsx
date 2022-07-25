import styles from './button.module.css';

interface ButtonProps {
	text: string;
	url: string;
	download?: boolean;
}
const Button = ({ text, url, download }: ButtonProps) => {
	console.log(download);
	return (
		<a
			href={url}
			target='_blank'
			rel='noopenner noreferrer'
			className={styles.button}
			download={download}
		>
			{text}
		</a>
	);
};

export default Button;
