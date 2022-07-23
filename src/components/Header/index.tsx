import { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';

import ModalMenu from '../MenuModal';
import Navbar from '../Navbar';
import styles from './header.module.css';
import Logo from '/logo.png';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<div className={styles.headerLeft}>
						<img src={Logo} alt='avatar image' className={styles.avatar} />
					</div>
					<div className={styles.headerRigth}>
						<button
							className={styles.button}
							onClick={() => setShowMenu(!showMenu)}
						>
							{showMenu ? (
								<RiCloseLine size={'1.3rem'} color='#FFF' />
							) : (
								<CgMenuGridO size={'1.3rem'} color='#FFF' />
							)}
						</button>
						<Navbar />
					</div>
				</div>
			</header>
			{showMenu ? <ModalMenu isShowing={showMenu} close={setShowMenu} /> : null}
		</>
	);
};

export default Header;
