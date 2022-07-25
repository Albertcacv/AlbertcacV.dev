import { projectsData } from '../../data/projectsData';
import Button from '../Button';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.css';
const Projects = () => {
	return (
		<>
			<section className={styles.projects}>
				{projectsData.map(
					({
						id,
						title,
						description,
						image,
						verticalImage,
						viewLink,
						codeLink,
					}) => (
						<ProjectCard
							id={id}
							title={title}
							description={description}
							image={image}
							verticalImage={verticalImage}
							viewLink={viewLink}
							codeLink={codeLink}
						/>
					)
				)}
			</section>
			<Button
				text='View more'
				url='https://github.com/Albertcacv?tab=repositories'
			/>
		</>
	);
};

export default Projects;
