import Logo from '../Logo';
import styles from './styles.module.css';
const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
};

export default Header;
