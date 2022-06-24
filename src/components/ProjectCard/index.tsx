import styles from './styles.module.css';

type Project = {
	title: string;
	description: string;
	mobileImage: string;
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
		<article className={styles.projectArticle}>{projectInfo.title}</article>
	);
};

export default ProjectCard;
