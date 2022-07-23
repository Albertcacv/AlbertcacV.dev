import styles from './navbar.module.css';
const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a href='#home' className={styles.link}>
						My works
					</a>
				</li>
				<li className={styles.item}>
					<a href='#about' className={styles.link}>
						About me
					</a>
				</li>
				<li className={styles.item}>
					<a href='#contact' className={styles.link}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
