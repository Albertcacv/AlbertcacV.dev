import LogoSVG from '../../assets/cropped_logo.svg';
import styles from './styles.module.css';

const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<img src={LogoSVG} className={styles.img} />
		</div>
	);
};

export default Logo;
