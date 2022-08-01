import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
	const [expandedNav, setExpandedNav] = useState(false);

	return (
		<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Brandon's Portfolio
				</a>
				<button
					className={`navbar-toggler`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded={expandedNav}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="#about">
							About Me
						</a>
						<a
							className="nav-link"
							href="#project-list"
							onClick={() => setExpandedNav(false)}
						>
							Projects
						</a>
						<a
							className="nav-link"
							href="https://drive.google.com/file/d/1wTxel_aKEeRjXrPfp6MnRKgLp2lzAc7_/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
						<a className="nav-link" href="#contact">
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
