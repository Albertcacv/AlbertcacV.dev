import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

export function App() {
	return (
		<>
			<main>
				<Header />
				<Hero />
				<Projects />
			</main>

			<footer class='App-footer'>
				Developed by <a href='https://github.com/Albertcacv'>AlbertcacV🔥</a>
			</footer>
		</>
	);
}
