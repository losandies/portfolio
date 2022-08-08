import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
	const handleCollapse = () => {
		console.log('handleCollapse');
		var nav = document.getElementById('navbarNavAltMarkup');
		var btn = document.getElementById('navbarBtn');
		nav.classList.remove('show');
		btn.classList.add('collapsed');
	};

	return (
		<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#intro">
					Brandon's Portfolio
				</a>
				<button
					className="navbar-toggler"
					id="navbarBtn"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link"
							aria-current="page"
							href="#about"
							onClick={() => handleCollapse()}
						>
							About Me
						</a>
						<a
							className="nav-link"
							href="#project-list"
							onClick={() => handleCollapse()}
						>
							Projects
						</a>
						<a
							className="nav-link"
							href="https://drive.google.com/file/d/1M_dwjbSR2eJTRGm8fsgwA1q9-A8jdQKb/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
							onClick={() => handleCollapse()}
						>
							Resume
						</a>
						<a
							className="nav-link"
							href="#footer"
							onClick={() => handleCollapse()}
						>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
