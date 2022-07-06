import { useState } from 'react';
import Logo from '../Logo';
import styles from './header.module.css';
const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={styles.header}>
			<Logo />
			{/* <DrawerMenu /> */}
		</header>
	);
};

export default Header;
