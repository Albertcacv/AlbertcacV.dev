import styles from './styles.module.css';

interface MenuButtonCloseProps {
	showMenu: boolean;
	setShowMenu: (showMenu: boolean) => void;
}

const MenuButtonClose = ({ showMenu, setShowMenu }: MenuButtonCloseProps) => {
	return (
		<button
			className={styles.menuButtonClose}
			onClick={() => setShowMenu(!showMenu)}
		>
			X CLOSE
		</button>
	);
};

export default MenuButtonClose;
