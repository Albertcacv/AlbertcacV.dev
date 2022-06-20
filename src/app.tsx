import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

export function App() {
	return (
		<div class='App-main'>
			<main>
				<Header />

				<Hero />
				<Projects />
			</main>
		</div>
	);
}
