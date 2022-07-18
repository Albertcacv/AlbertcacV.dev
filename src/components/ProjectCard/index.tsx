import useModal from '../../Hooks/useModal';
import ProjectDetail from '../ProjectDetail';
import styles from './project-card.module.css';

type Project = {
	id: number;
	title: string;
	description: string;
	stack: string[];
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
	const { isShowing, toggle } = useModal();

	return (
		<article className={styles.projectArticle} onClick={toggle}>
			<div className={styles.projectImageContainer}>
				<img src={project.image} className={styles.projectImage} />
			</div>
			<div className={styles.projectInfo}>
				<span className={styles.projectTitle}>{project.title}</span>
				<span className={styles.projectStack}>{project.stack}</span>
			</div>
			<ProjectDetail isShowing={isShowing} hide={toggle} project={project} />
		</article>
	);
};

export default ProjectCard;
