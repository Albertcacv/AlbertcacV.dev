import { RiCloseLine } from 'react-icons/ri';
import styles from './modal-menu.module.css';
type Modal = {
	isShowing: boolean;
	close: void;
};

interface ModalMenuProps {
	isShowing: boolean;
	close: Function;
}
const ModalMenu = ({ isShowing, close }: ModalMenuProps) => {
	const toggleMenu = () => {
		close(!isShowing);
	};
	return (
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<button onClick={toggleMenu} className={styles.button}>
					<RiCloseLine size={'1.3rem'} />
				</button>
				<ul>
					<li onClick={toggleMenu}>
						<a href='/'>My works</a>
					</li>
					<li onClick={toggleMenu}>
						<a href='/about'>About me</a>
					</li>
					<li onClick={toggleMenu}>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ModalMenu;
