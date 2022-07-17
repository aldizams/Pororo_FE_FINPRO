import './App.css';
import { CatCard, Header, Footer } from './components';
function App() {
	return (
		<>
			<Header style={{ zIndex: '9999' }} />
			<CatCard />
			<Footer />
		</>
	);
}

export default App;
