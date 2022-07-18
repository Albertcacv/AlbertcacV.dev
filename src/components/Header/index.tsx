import { useEffect, useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../Hooks/useWindowSize';
import styles from './header.module.css';
import Avatar from '/avatar.jpg';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { width } = useWindowSize();
	const [pathname, setPathname] = useState('/');
	const mobile = width && width <= 758 ? true : false;

	useEffect(() => {
		const slug = window.location.pathname;
		setPathname(slug);
	}, []);

	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<img src={Avatar} alt='avatar image' className={styles.avatar} />
				<div className={styles.info}>
					<span className={styles.title}>Alberto C. Álvarez</span>
					<span className={styles.subtitle}>FullStack developer</span>
				</div>
			</div>
			<div className={styles.headerRigth}>
				{mobile ? (
					<button className={styles.button} onClick={() => setShowMenu(!showMenu)}>
						{showMenu ? <RiCloseLine size={'1.3rem'} /> : <CgMenuGridO size={'1.3rem'} />}
					</button>
				) : (
					<nav className={styles.nav}>
						<ul>
							<Link to='/' className={pathname === '/' ? `${styles.active} ${styles.link}` : styles.link}>
								My works
							</Link>
						</ul>
						<ul>
							<Link to='/about' className={pathname === '/about' ? `${styles.active} ${styles.link}` : styles.link}>
								About me
							</Link>
						</ul>
						<ul>
							<Link to='/contact' className={pathname === '/contact' ? `${styles.active} ${styles.link}` : styles.link}>
								Contact
							</Link>
						</ul>
					</nav>
				)}
			</div>
			{/* <DrawerMenu /> */}
		</header>
	);
};

export default Header;
