import { useEffect, useState } from 'react';
import './App.css';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import asiosoLogo from './assets/asioso white logo.webp';
function App() {
	const [listOfNews, setListOfNews] = useState([]);

	const fetchNews = async () => {
		const url =
			'https://newsapi.org/v2/top-headlines?' +
			// 	'sources=bbc-news&' +
			'apiKey=1558b4d6803c4e34a6c818825a2e5eed';

		// const req = new Request(url);
		// const newss = await fetch(req);
		// const res = await newss.json();
		// setListOfNews(res.articles);

		console.log(listOfNews);
	};

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<div className='App'>
			<Header />
			<main>
				<h3>Lastest news</h3>
				<NewsFeed
					listOfNews={listOfNews}
					setListOfNews={setListOfNews}
				/>
				<div className='pagination'>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>Next</span>
				</div>
			</main>

			<footer>
				<div className='footer-content'>
					<div className='left'>
						<img src={asiosoLogo} alt='' />
						<p className='moto'>
							asioso Blog is a techology blog. We make digital
							business simple.
						</p>
						<div className='socal-medial-icons'>
							<i className='ri-facebook-circle-line'></i>
							<i className='ri-linkedin-box-line'></i>
							<i className='ri-instagram-line'></i>
							<i className='ri-twitter-line'></i>
						</div>
						<form className='news-letter'>
							<input
								type='email'
								placeholder='Enter your e-mail address'
							/>
							<button>Submit</button>
						</form>
					</div>
					<div className='right'>
						<div className='popular-categories'>
							<h4>Popular Categories</h4>
							<ul>
								<li>
									<a href='#'>Marekting</a>
									(21)
								</li>
								<hr />
								<li>
									<a href='#'>SEO Service</a>
									(15)
								</li>
								<li>
									<a href='#'>Digital Agency</a>
									(31)
								</li>
								<li>
									<a href='#'>Make Money</a>
									(22)
								</li>
								<hr />
								<li>
									<a href='#'>Blogging</a>
									(66)
								</li>
							</ul>
						</div>

						<div className='copyrights'>
							<h4>Copyrights</h4>
							<ul>
								<li>
									<a href='#'>About us</a>
								</li>
								<hr />
								<li>
									<a href='#'>Advertising</a>
								</li>
								<li>
									<a href='#'>Write for us</a>
								</li>
								<li>
									<a href='#'>Trademark</a>
								</li>
								<hr />
								<li>
									<a href='#'>License & Help</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className='footer'>
					© asioso Blog Design:{' '}
					<a href='#' className='footer-asioso-team'>
						asioso Team
					</a>
				</p>
			</footer>
		</div>
	);
}

function NewsFeed(props: any) {
	return (
		<div className='News'>
			{props.listOfNews.length ? (
				props.listOfNews.map((news: any, index: number) => (
					<div className='singleArticle' key={index}>
						<img src={news.urlToImage} alt='' />
						<h3>{news.title}</h3>
						<p className='description'>{news.description}</p>
						<p className='date'>{news.publishedAt}</p>
						<a href={news.url}>test</a>
					</div>
				))
			) : (
				<Skeleton count={6} highlightColor='#94bc34' />
			)}
		</div>
	);
}

function Header() {
	return (
		<header>
			<div className='logo_nav'>
				<img src={asiosoLogo} alt='' />
				<nav>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li id='activeCard'>
							<a href='#'>News</a>
						</li>
						<li>
							<a href='#'>Gadgets</a>
						</li>
						<li>
							<a href='#'>Video</a>
						</li>
						<li>
							<a href='#'>contact us</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className='icons'>
				<i className='ri-android-line'></i>
				<i className='ri-apple-line'></i>
				<i className='ri-rss-line'></i>
			</div>
		</header>
	);
}
export default App;
