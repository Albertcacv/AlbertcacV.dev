import ContactButton from '../ContactButton';
import styles from './styles.module.css';

interface ModalMenuProps {
	showMenu: boolean;
}
const ModalMenu = ({ showMenu }: ModalMenuProps) => {
	return (
		<section
			className={`${styles.modalMenuContainer} ${
				!showMenu ? `${styles.close}` : ''
			}`}
		>
			<ul className={styles.modalMenuList}>
				<li className={styles.modalMenuItem}>PROJECTS</li>
				<li className={styles.modalMenuItem}>ABOUT</li>

				<li className={styles.modalMenuItem}>
					<ContactButton />
				</li>
			</ul>
		</section>
	);
};

export default ModalMenu;
