import { images } from './constants/index';

export const projects = [
	{
		id: 1,
		title: 'I Need A Laugh',
		img: images.jokeImg,
		link: 'https://losandies.github.io/I-need-a-laugh/',
		description:
			'This is a joke generating app that mimics and iMessage conversation. Users can click the button to get a joke and also send a response back',
		techUsed: 'HTML5, CSS, JavaScript, Dad Joke API',
	},
	{
		id: 2,
		title: "Movies A'hoy",
		img: images.moviesImg,
		link: 'https://losandies.github.io/Movies_Ahoy/',
		description:
			'This is a movie search engine where users can search for their favorite movies and the app will display a filtered list of hits.',
		techUsed: 'React, CSS, Bootstrap5, The MovieDB API',
	},
	{
		id: 3,
		title: "Let's Calculate",
		img: images.calcImg,
		link: 'https://losandies.github.io/vanilla_calc/',
		description:
			'Here is a fully functional standard calculator that allows users to input various operations and receive back the output. This app has keyboard support as well.',
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
