import Skeleton from 'react-loading-skeleton';

export function NewsFeed(props: any) {
	function foramtedDate(date: string) {
		const newDate = new Date(date);
		return `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`;
	}
	return (
		<div className='News'>
			{props.listOfNews.length ? (
				props.listOfNews.map((news: any, index: number) => (
					<a className='singleArticle' key={index} href={news.url}>
						<img src={news.urlToImage} alt='' />
						<div className='news-content'>
							<h3>{news.title}</h3>
							<p className='description'>{news.description}</p>
							<p className='date'>
								{foramtedDate(news.publishedAt)}
							</p>
						</div>
					</a>
				))
			) : (
				<Skeleton count={6} highlightColor='#94bc34' />
			)}
		</div>
	);
}
