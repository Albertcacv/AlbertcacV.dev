import styles from './styles.module.css';

type Project = {
	title: string;
	description: string;
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	projectInfo: Project;
}

const ProjectCard = ({ projectInfo }: ProjectProps) => {
	console.log(projectInfo);
	return (
		<article className={styles.projectArticle}>
			<div className={styles.projectInfo}>
				<span>{projectInfo.title}</span>
				<p>{projectInfo.description}</p>
			</div>
			<div className={styles.projectImageContainer}>
				<img src={projectInfo.image} className={styles.projectImage} />
			</div>
		</article>
	);
};

export default ProjectCard;
