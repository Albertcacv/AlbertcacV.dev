import projects from '../../data/projects.json';
import Project from '../project';
import styles from './styles.module.css';
const Projects = () => {
	return (
		<>
			<h2 className={styles.title}>Recent Projects</h2>
			<section className={styles.projects}>
				{projects.map((project) => {
					return <Project key={project.id} project={project} />;
				})}
			</section>
		</>
	);
};

export default Projects;
