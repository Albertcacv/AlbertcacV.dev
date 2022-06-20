import Styles from './styles.module.css';

import UserSVG from '../../assets/user.svg';

const Nav = () => {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href='/'>
				<img src='/assets/cropped_logo.svg' alt='logo' className={Styles.img} />
			</a>

			<ul className={Styles.navlist}>
				<li className={Styles.navlist__item}>
					<a className={Styles.navlist__link} href='/'>
						<img src={UserSVG} alt='user' />
					</a>
				</li>

				<li className={Styles.navlist__item}>
					<a className={Styles.navlist__link} href='#projects'>
						<img src={UserSVG} alt='user' />
					</a>
				</li>

				<li className={Styles.navlist__item}>
					<a className={Styles.navlist__link} href='#clients'>
						<img src={UserSVG} alt='user' />
					</a>
				</li>

				<li className={Styles.navlist__item}>
					<a className={Styles.navlist__link} href='#contact'>
						<img src={UserSVG} alt='user' />
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
