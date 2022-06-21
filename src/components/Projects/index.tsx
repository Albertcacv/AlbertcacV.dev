import projects from '../../data/projects.json';
import Project from '../project';
import styles from './styles.module.css';
const Projects = () => {
	return (
		<section className={styles.projects}>
			<h2 className={styles.title}>Recent Projects</h2>
			<p className={styles.subtitle}>
				I've worked on a number of projects, some of which are listed below.
			</p>
			{projects.map((project) => {
				return <Project key={project.id} project={project} />;
			})}
		</section>
	);
};

export default Projects;
