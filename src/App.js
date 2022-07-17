import './App.css';
import { CatCard, Header, Footer } from './components';
import { BreedHairPage } from './pages';

function App() {
	return (
		<>
			<Header style={{ zIndex: '9999' }} />
			<BreedHairPage />
			<Footer />
		</>
	);
}

export default App;
