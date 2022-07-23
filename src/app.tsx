import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Portfolio />
			<About />

			<Footer />
		</div>
	);
}

export default App;
