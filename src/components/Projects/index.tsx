import { projectsData } from '../../data/projectsData';
import { Project } from '../../types/Projects';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.css';

const Projects = () => {
	return (
		<section className={styles.projects}>
			{projectsData.length > 0 ? (
				projectsData.map((project: Project) => <ProjectCard key={project.id} project={project} />)
			) : (
				<span>SOON...</span>
			)}
		</section>
	);
};

export default Projects;
