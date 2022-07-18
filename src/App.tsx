import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/contact' element={<ContactPage />} />
		</Routes>
	);
}

export default App;
