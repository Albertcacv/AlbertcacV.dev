import useModal from '../../Hooks/useModal';
import { Project } from '../../types/Projects';
import ProjectDetail from '../ProjectDetail';
import styles from './project-card.module.css';

interface ProjectProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
	const { isShowing, toggle } = useModal();

	return (
		<>
			<article className={styles.projectArticle} onClick={toggle}>
				<div className={styles.projectImageContainer}>
					<img src={project.image} className={styles.projectImage} />
				</div>
				<div className={styles.projectInfo}>
					<span className={styles.projectTitle}>{project.title}</span>
					<span className={styles.projectStack}>{project.stack}</span>
				</div>
			</article>
			<ProjectDetail isShowing={isShowing} hide={toggle} project={project} />
		</>
	);
};

export default ProjectCard;
