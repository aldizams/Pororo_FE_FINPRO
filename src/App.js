import './App.css';
import { CatCard, Header, Footer } from './components';
import { BreedHairPage, CatCarePage } from './pages';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<>
			<Header style={{ zIndex: '9999' }} />
			<Routes>
				<Route path="/" element={<BreedHairPage />} />
				<Route path="/care" element={<CatCarePage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
