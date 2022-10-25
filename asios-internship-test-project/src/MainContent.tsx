import { useEffect, useState } from 'react';
import { NewsFeed } from './NewsFeed';

export function MainContent() {
	const [listOfNews, setListOfNews] = useState([]);

	const fetchNews = async () => {
		// const url =
		// 	'https://newsapi.org/v2/top-headlines?' +
		// 	'sources=bbc-news&' +
		// 	'apiKey=1558b4d6803c4e34a6c818825a2e5eed';
		// const req = new Request(url);
		// const newss = await fetch(req);
		// const res = await newss.json();
		// setListOfNews(res.articles);
	};

	useEffect(() => {
		fetchNews();
	}, []);
	return (
		<main>
			<h3>Lastest news</h3>
			<NewsFeed listOfNews={listOfNews} setListOfNews={setListOfNews} />
			<div className='pagination'>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>Next</button>
			</div>
		</main>
	);
}
