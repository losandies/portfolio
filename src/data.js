import { Profiler } from 'react';
import { images } from './constants/index';

export const projects = [
	{
		id: 1,
		title: 'Strombo Ticketing System',
		img: images.stromboImg,
		link: 'https://strombo.herokuapp.com/',
		description:
			'A ticketing system built with the MERN stack. Users can create projects where tickets can be assigned and sorted by importance. Anyone can then claim tickets, complete tickets, or even reopen tickets. Tickets claimed by a user will be shown on a separate page where the user can update the status.',
		techUsed: 'MERN Stack, Tailwind, Redux Toolkit, JWT',
	},
	{
		id: 2,
		title: "Movies A'hoy",
		img: images.moviesImg,
		link: 'https://movies-ahoy.herokuapp.com',
		description:
			"This is a movie library application that lays out things like what movies or shows are trending this week, what's new in theatres, popular movies of the year, and even recommends movies based off the user's favorite genre.",
		techUsed:
			'React, Tailwind, Styled Components, Node js, Postgres, The MovieDB API',
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
];
