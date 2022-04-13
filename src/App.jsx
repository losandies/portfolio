import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';

const App = () => {
	return (
		<div style={{ width: '100vw' }}>
			<Intro />
			<About />
			<ProjectList />
			<Contact />
		</div>
	);
};

export default App;
