import asiosoLogo from './assets/asioso white logo.webp';

export function Header() {
	return (
		<header>
			<div className='logo_nav'>
				<a href='https://asioso.com/'>
					<img src={asiosoLogo} alt='' />
				</a>
				<nav className='toggle-menu'>
					<ul>
						<li>
							<a href='https://asioso.com/'>Home</a>
						</li>
						<li id='activeCard'>
							<a href='/'>News</a>
						</li>
						<li>
							<a href='#'>Gadgets</a>
						</li>
						<li>
							<a href='#'>Video</a>
						</li>
						<li>
							<a href='https://www.asioso.com/en/footer/Contact'>
								contact us
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<i
				className='ri-menu-5-line menu-icon'
				onClick={() => {
					document
						.querySelector('nav')
						?.classList.toggle('toggle-menu');

					document
						.querySelector('.icons')
						?.classList.toggle('toggle-menu');
				}}
			></i>
			<div className='icons toggle-menu'>
				<i className='ri-android-line'></i>
				<i className='ri-apple-line'></i>
				<i className='ri-rss-line'></i>
			</div>
		</header>
	);
}
