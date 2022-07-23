import { FC } from 'react';
import { Project } from '../../types/Project';
import Button from '../Button';
import styles from './project-card.module.css';
const ProjectCard: FC<Project> = ({
	title,
	description,
	image,
	viewLink,
	codeLink,
}) => {
	return (
		<article className={styles.card}>
			<img src={image} alt='prject image' className={styles.cardImage} />
			<div className={styles.cardInfo}>
				<span className={styles.title}>{title}</span>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttons}>
					<Button text='view code' url={codeLink} />
					<Button text='view site' url={viewLink} />
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
