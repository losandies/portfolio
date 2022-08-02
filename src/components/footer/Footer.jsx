import React from 'react';
import './Footer.scss';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	const iconStyles = { color: 'white', fontSize: '1.5em' };

	return (
		<footer id="footer" className="footer socials-wrapper">
			<ul className="socials">
				<li className="social-link">
					<a
						href="https://twitter.com/307px"
						className="social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<BsTwitter />
					</a>
				</li>
				<li className="social-link">
					<a
						href="https://www.linkedin.com/in/brandon-newsome-58806a1a2/"
						className="social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin />
					</a>
				</li>
				<li className="social-link">
					<a
						href="https://github.com/losandies"
						className="social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
