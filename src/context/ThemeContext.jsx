import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState('ligth');

	const toggleTheme = () => {
		const newTheme = darkTheme === 'dark' ? 'ligth' : 'dark';
		setDarkTheme(newTheme);
		document.body.dataset.theme = newTheme;
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
