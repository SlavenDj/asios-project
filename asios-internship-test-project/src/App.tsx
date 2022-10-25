import './App.css';

import 'react-loading-skeleton/dist/skeleton.css';
import { GoToTop } from './GoToTop';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { Header } from './Header';
import asiosoIcon from './assets/asioso-icon.png';
function App() {
	return (
		<div className='App'>
			<Header />
			<MiddleHeather />
			<MainContent />
			<Footer />
			<GoToTop />
		</div>
	);
}

function MiddleHeather() {
	return (
		<div className='middle-heather'>
			<div className='icon-text'>
				<div className='icon-asioso'>
					<img src={asiosoIcon} alt='' className='asioso-icon' />
				</div>
				<p className='blog-title'>Blog</p>
				<p className='moto-top'>
					<i>We make digital business simple.</i>
				</p>
			</div>
			<div>
				<a href='https://asioso.com/'>Home</a> / <a href='/'>Blog</a>
			</div>
		</div>
	);
}
export default App;
