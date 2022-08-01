import React from 'react';
import './Footer.scss';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	const iconStyles = { color: 'white', fontSize: '1.5em' };

	return (
		<footer className="footer socials-wrapper">
			<ul className="socials">
				<li className="social-link">
					<a href="https://twitter.com/307px" className="social-icon">
						<BsTwitter />
					</a>
				</li>
				<li className="social-link">
					<a
						href="https://www.linkedin.com/in/brandon-newsome-58806a1a2/"
						className="social-icon"
					>
						<BsLinkedin />
					</a>
				</li>
				<li className="social-link">
					<a href="https://github.com/losandies" className="social-icon">
						<BsGithub />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
