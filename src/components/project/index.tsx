import { useState } from 'preact/hooks';
import styles from './styles.module.css';

type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	project: Project;
}

const Project = ({ project }: ProjectProps) => {
	const [isHovered, setIsHovered] = useState(false);

	console.log(isHovered);
	return (
		<article
			className={styles.projectArticle}
			onClick={() => setIsHovered(!isHovered)}
		>
			<img
				src={project.image}
				className={
					isHovered
						? `${styles.projectImg} ${styles.projectOpacity}`
						: styles.projectImg
				}
			/>
			{isHovered && (
				<div className={styles.projectOverlay}>
					<h3 className={styles.title}>{project.title}</h3>
					<p className={styles.description}>{project.description}</p>
					<div className={styles.projectOverlayLinks}>
						<a
							className={styles.projectButton}
							href={project.viewLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							View
						</a>
						<a
							className={styles.projectButton}
							href={project.codeLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							Code
						</a>
					</div>
				</div>
			)}
		</article>
	);
};

export default Project;
