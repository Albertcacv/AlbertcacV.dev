import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';
import styles from './styles.module.css';

type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	viewLink: string;
	codeLink: string;
};

const Projects = () => {
	return (
		<section className={styles.projects}>
			<h2 className={styles.title}>Recent Projects</h2>
			<p className={styles.subtitle}>
				I've worked on a number of projects, some of which are listed below.
			</p>
			{projectsData.length > 0 ? (
				projectsData.map((project: Project) => (
					<ProjectCard key={project.id} projectInfo={project} />
				))
			) : (
				<span>SOON...</span>
			)}
		</section>
	);
};

export default Projects;
