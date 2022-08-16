import { useContext, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { ThemeContext } from './context/ThemeContext';

function App() {
	const { darkTheme, toggleTheme } = useContext(ThemeContext);
	useEffect(() => {
		const userPreference = localStorage.getItem('theme');

		toggleTheme(userPreference);
		document.body.dataset.theme = userPreference;
	}, []);
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<Hero />
				<Projects />
				<About />
			</div>
		</div>
	);
}

export default App;
