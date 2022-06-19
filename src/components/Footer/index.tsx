import { h } from 'preact';
import Styles from './styles.module.scss';
import { FC } from 'react';

import TwitterSVG from '../../assets/twitter.svg';
import GitHubSGV from '../../assets/github.svg';
import LinkedinSVG from '../../assets/linkedin.svg';
import Logo from '../../assets/cropped_logo.svg';
import Button from '../Button';
const Footer: FC = () => {
	return (
		<footer className={Styles.footer}>
			<div className={Styles.footer__info}>
				<img src={Logo} alt='logo' className={Styles.footer__logo} />
				<span className={Styles.footer__text}>Alberto Caño Álvarez</span>
				<span className={Styles.footer__text}>Sofware developer</span>

				<div className={Styles.footer__social}>
					<a
						href='https://www.linkedin.com/in/albertcacv/'
						target='_blank'
						className={Styles.footer__icon}
					>
						<img
							src={LinkedinSVG}
							className={Styles.footer__img}
							alt='linkedin svg'
						/>
					</a>
					<a
						href='https://github.com/Albertcacv'
						target='_blank'
						className={Styles.footer__icon}
					>
						<img src={GitHubSGV} />
					</a>
					<a
						href='https://twitter.com/AlbertcacV'
						target='_blank'
						className={Styles.footer__icon}
					>
						<img src={TwitterSVG} />
					</a>
				</div>
			</div>
			<div className={Styles.footer__contact}>
				<h2 className={Styles.footer__h2}>
					Contact <span className={Styles.footer__span}>Me.</span>
				</h2>
				<form className={Styles.form}>
					<input
						type='text'
						placeholder='What is your name?*'
						className={Styles.form__input}
					/>
					<input
						type='email'
						placeholder='What is your email?*'
						className={Styles.form__input}
					/>
					<textarea
						placeholder='Write your messsage here*'
						className={Styles.form__textarea}
					/>
					<Button text='SEND MESSAGE' />
				</form>
			</div>
		</footer>
	);
};
export default Footer;
