import React from 'react';
import './Intro.scss';
import Me from '../../img/portfolio-emoji.png';

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro-left">
				<div className="intro-left-wrapper">
					<h2 className="intro-introduction">Hey there, I'm </h2>
					<h2 className="intro-name">Brandon</h2>
					<div className="intro-title">
						<div className="intro-title-wrapper">
							<div className="intro-title-item">Web Developer</div>
							<div className="intro-title-item">UI/UX Designer</div>
							<div className="intro-title-item">Photographer</div>
							<div className="intro-title-item">Writer</div>
							<div className="intro-title-item">Content Creator</div>
						</div>
					</div>

					<p className="intro-description">
						I design and develop services for various clients. I specialize in
						creating stylish and responsive designs
					</p>

					<a href="#about" class="button scroll">
						<span class="scroll-down-arrow"></span>
					</a>
				</div>
			</div>
			<div className="intro-right">
				<div className="intro-right-background"></div>
				<div className="img-wrapper">
					<img src={Me} alt="my-pic" class="intro-picture" />
				</div>
			</div>
		</div>
	);
};

export default Intro;
