import styles from './styles.module.css';

type Project = {
	id: number;
	title: string;
	description: string;
	mobileImage: string;
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	project: Project;
}

const Project = ({ project }: ProjectProps) => {
	return (
		<article className={styles.projectArticle}>
			
		</article>
	);
};

export default Project;
