import Logo from '../Logo';
import Menu from '../Menu';
import styles from './styles.module.css'
const Header = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Logo />
			{/* 
			<Social /> 
      */}
		</header>
	);
};

export default Header;
