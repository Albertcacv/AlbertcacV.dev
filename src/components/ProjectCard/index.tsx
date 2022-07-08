import styles from './project-card.module.css';

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
	return (
		<article className={styles.projectArticle}>
			<section className={styles.projectImageContainer}>
				<a href={projectInfo.viewLink} target='_blank' rel='noreferrer noopener'>
					<img src={projectInfo.image} className={styles.projectImage} />
				</a>
			</section>
			<section className={styles.projectInfo}>
				<span className={styles.projectTitle}> {projectInfo.title}</span>
				<p className={styles.projectDescription}>{projectInfo.description}</p>
			</section>
		</article>
	);
};

export default ProjectCard;
