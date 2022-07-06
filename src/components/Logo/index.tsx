import styles from './logo.module.css';
import LogoSVG from '/cropped_logo.svg';

const Logo = () => {
	return <img src={LogoSVG} className={styles.img} />;
};

export default Logo;
