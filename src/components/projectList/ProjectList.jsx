import React from 'react';
import './ProjectList.scss';
import Project from '../project/Project';
import { projects } from '../../data';
import Me from '../../img/memoji-computer.png';

const ProjectList = () => {
	return (
		<div className="p1" id="project-list">
			<div className="p1-text">
				<div className="p1-title">My Work</div>
			</div>
			<div className="list-container">
				<div className="p1-list">
					{projects.map((project) => (
						<Project
							key={project.id}
							title={project.title}
							img={project.img}
							link={project.link}
							description={project.description}
							techUsed={project.techUsed}
						/>
					))}
				</div>
			</div>
			<a href="#contact" class="button scroll">
				<span class="scroll-down-arrow"></span>
			</a>
		</div>
	);
};

export default ProjectList;
