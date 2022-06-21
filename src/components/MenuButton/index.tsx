import styles from './styles.module.css';

interface MenuButtonProps {
	showMenu: boolean;
	setShowMenu: (showMenu: boolean) => void;
}

const MenuButton = ({ showMenu, setShowMenu }: MenuButtonProps) => {
	return (
		<button
			className={styles.menuButton}
			onClick={() => setShowMenu(!showMenu)}
		>
			MENU
		</button>
	);
};

export default MenuButton;
