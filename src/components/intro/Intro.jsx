import React from 'react';
import './Intro.scss';
import Me from '../../img/portfolio-emoji.png';

const Intro = () => {
	return (
		<div className="intro" id="intro">
			<div className="intro-left">
				<div className="intro-left-wrapper">
					<h2 className="intro-introduction">Hey, I'm </h2>
					<h2 className="intro-name">Brandon.</h2>

					<h2 className="intro-description">
						I am passionate about producing quality work and I specialize in
						creating stylish and responsive applications.
					</h2>

					<a href="#about" class="button scroll">
						<span class="scroll-down-arrow"></span>
					</a>
				</div>
			</div>
			<div className="intro-right">
				<div className="intro-right-background"></div>
				<img src={Me} alt="my-pic" class="intro-picture" />
			</div>
		</div>
	);
};

export default Intro;
