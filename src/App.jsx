import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import './App.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<About />
			<ProjectList />
			<Contact />
		</div>
	);
};

export default App;
