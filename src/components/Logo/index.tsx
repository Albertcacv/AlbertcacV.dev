import LogoSVG from '../../../assets/cropped_logo.svg';
import styles from './styles.module.css';

const Logo = () => {
	return <img src={LogoSVG} width={150} className={styles.img} />;
};

export default Logo;
