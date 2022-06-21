import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

export function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />

			<Projects />
			<div className='App-footer'>
				<About />
				<Footer />
			</div>
		</div>
	);
}
