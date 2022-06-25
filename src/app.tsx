import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

export function App() {
	return (
		<div className='App'>
			<div className='App-wrapper'>
				<Header />
				<Hero />

				<Projects />
				<footer className='App-footer'>
					<About />

					<Footer />
				</footer>
			</div>
		</div>
	);
}
