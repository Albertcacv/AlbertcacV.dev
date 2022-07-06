import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Services />
			<Projects />
			<Skills />
			<About />
			<Contact />
		</div>
	);
}

export default App;
