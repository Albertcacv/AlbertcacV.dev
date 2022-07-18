import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.css';

type Project = {
	id: number;
	title: string;
	description: string;
	stack: string[];
	image: string;
	viewLink: string;
	codeLink: string;
};

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
