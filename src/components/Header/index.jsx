import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './header.module.css';
const Header = () => {
	const { darkTheme, toggleTheme } = useContext(ThemeContext);

	const handleToggle = () => {
		const newTheme = darkTheme === 'dark' ? 'light' : 'dark';
		toggleTheme(newTheme);

		localStorage.setItem('theme', newTheme);
	};
	return (
		<>
			<header className={styles.header}>
				<span>{darkTheme === 'dark' ? `Ligth Mode ->` : `Dark Mode ->`}</span>
				<button className={styles.button} onClick={handleToggle}>
					{darkTheme === 'dark' ? (
						<BsFillSunFill size={'1.2rem'} width={'100%'} />
					) : (
						<BsFillMoonFill size={'1.2rem'} width={'100%'} />
					)}
				</button>
			</header>
		</>
	);
};

export default Header;

//TODO: light mode
