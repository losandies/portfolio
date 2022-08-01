import React, { useEffect } from 'react';
import './Project.scss';
import { images } from '../../constants/index';

import { useAnimation, motion } from 'framer-motion/dist/framer-motion';
import { useInView } from 'react-intersection-observer';

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Project = ({ title, img, link, description, techUsed }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		setTimeout(() => {
			if (inView) {
				controls.start('visible');
			}
		}, 300);
	}, [controls, inView]);

	return (
		<>
			<motion.div
				className="project-container container"
				variants={item}
				ref={ref}
				initial="hidden"
				animate={controls}
				delay={{ delay: 5 }}
			>
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
				<h3 className="tech-used">({techUsed})</h3>
				<p className="project-description">{description}</p>
			</motion.div>
		</>
	);
};

export default Project;
