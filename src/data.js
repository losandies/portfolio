import { Profiler } from 'react';
import { images } from './constants/index';

export const projects = [
	{
		id: 1,
		title: 'Strombo Ticketing System',
		img: images.stromboImg,
		link: 'https://strombo.herokuapp.com/',
		description:
			'A ticketing system built with the MERN stack. It utilizes Tailwind and Daisy UI for the CSS, Redux Toolkit for app-wide state management and has a custom built authentication system using JSON web tokens.',
		techUsed: 'MERN Stack, Tailwind, Redux Toolkit, JWT',
	},
	{
		id: 2,
		title: 'Github Finder',
		img: images.githubImg,
		link: 'https://github-finder-fawn.vercel.app/',
		description:
			"I built a github search engine. You can search for any user on github and this application will display almost everything in the user's profile, including their repositories, who they follow and who follows them.",
		techUsed: 'React, CSS, Bootstrap5, The MovieDB API',
	},
	{
		id: 3,
		title: 'I Need A Laugh',
		img: images.jokeImg,
		link: 'https://losandies.github.io/I-need-a-laugh/',
		description:
			'This is a joke generating app that mimics and iMessage conversation. Users can click the button to get a joke and also send a response back',
		techUsed: 'JavaScript, HTML, CSS',
	},
	// {
	// 	id: 4,
	// 	title: 'Personal Portfolio',
	// 	img: images.calcImg,
	// 	link: 'https://losandies.github.io/vanilla_calc/',
	// 	description:
	// 		'Here is a fully functional standard calculator that allows users to input various operations and receive back the output. This app has keyboard support as well.',
	// 	techUsed: 'JavaScript, HTML, CSS',
	// },
];
