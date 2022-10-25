import './App.css';

import 'react-loading-skeleton/dist/skeleton.css';
import { GoToTop } from './GoToTop';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { Header } from './Header';
function App() {
	return (
		<div className='App'>
			<Header />
			<MainContent />
			<Footer />
			<GoToTop />
		</div>
	);
}
export default App;
