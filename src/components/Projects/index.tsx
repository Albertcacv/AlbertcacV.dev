import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.css';
const Projects = () => {
	return (
		<section className={styles.projects}>
			{projectsData.map(
				({ id, title, description, image, viewLink, codeLink }) => (
					<ProjectCard
						id={id}
						title={title}
						description={description}
						image={image}
						viewLink={viewLink}
						codeLink={codeLink}
					/>
				)
			)}
		</section>
	);
};

export default Projects;
