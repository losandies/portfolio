import React from 'react';
import './Project.scss';
import { images } from '../../constants/index';

const Project = ({ title, img, link, description, techUsed }) => {
	return (
		<div className="project-container">
			<div className="project">
				<div className="project-browser">
					<div className="project-circle red"></div>
					<div className="project-circle yellow"></div>
					<div className="project-circle green"></div>
				</div>
				<a href={link} target="_blank" rel="noreferrer">
					<img className="project-image" src={img} alt="" />
				</a>
			</div>

			<h2 className="project-title">{title}</h2>
			<h3>{techUsed}</h3>
			<p className="project-description">{description}</p>
		</div>
	);
};

export default Project;
