import asiosoLogo from './assets/asioso white logo.webp';

export function Footer() {
	return (
		<footer>
			<div className='footer-content'>
				<div className='left'>
					<a href='https://asioso.com/'>
						<img src={asiosoLogo} alt='' />
					</a>
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
	);
}
