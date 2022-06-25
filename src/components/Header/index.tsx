import { useEffect, useState } from 'preact/hooks';
import Logo from '../Logo';
import MenuButton from '../MenuButton';
import MenuButtonClose from '../MenuButtonClose';
import ModalMenu from '../ModalMenu';
import Wrapper from '../Wrapper';
import styles from './styles.module.css';
const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={styles.header}>
			<Wrapper>
				<section className={styles.headerContent}>
					<Logo />
					{showMenu && <ModalMenu showMenu={showMenu} />}
					{!showMenu ? (
						<MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
					) : (
						<MenuButtonClose showMenu={showMenu} setShowMenu={setShowMenu} />
					)}

				</section>
			</Wrapper>
		</header>
	);
};

export default Header;
