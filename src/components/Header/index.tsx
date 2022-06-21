import { useState } from 'preact/hooks';
import Logo from '../Logo';
import MenuButton from '../MenuButton';
import MenuButtonClose from '../MenuButtonClose';
import ModalMenu from '../ModalMenu';
import styles from './styles.module.css';
const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className={styles.header}>
			<Logo />
			{!showMenu ? (
				<MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
			) : (
				<MenuButtonClose showMenu={showMenu} setShowMenu={setShowMenu}/>
			)}

			{showMenu && <ModalMenu showMenu={showMenu}/>}
		</header>
	);
};

export default Header;
