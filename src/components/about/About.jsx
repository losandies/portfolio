import React from 'react';
import './About.scss';
import WavingPic from '../../img/waving-memoji.png';
import { images } from '../../constants/index';

const mySkills = [
	images.html,
	images.css,
	images.javascript,
	images.react,
	images.sass,
	images.git,
];

const About = () => {
	return (
		<div className="about" id="about">
			<div className="about-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={WavingPic} alt="waving-memoji" className="waving-memoji" />
				</div>
			</div>
			<div className="about-right">
				<div className="about-me">
					<h1 className="about-title">A little about me</h1>
					<p className="description">
						My name is Brandon Newsome and I am a Front-end Web Developer from
						Baltimore, MD. From the moment I downloaded my first IDE I fell in
						love and I told myself that I{' '}
						<span className="big-letters">
							<b>had</b>
						</span>{' '}
						to break into this field. When I'm not working on personal projects
						you can usually find me watching anime or playing Smash Bros. with
						my son.
					</p>
				</div>
				<div className="skills">
					<h1 className="skills-title">Skills</h1>

					<div className="skill-icon-container">
						{mySkills.map((circle, index) => (
							<div className="circle" key={`circle-${index}`}>
								<img src={circle} alt="circle" className="skill-image" />
							</div>
						))}
					</div>
				</div>

				<a href="#project-list" class="button scroll">
					<span class="scroll-down-arrow"></span>
				</a>
			</div>
		</div>
	);
};

export default About;
