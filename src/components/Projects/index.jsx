import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.css';
const Projects = () => {
	return (
		<>
			<section className={styles.projects}>
				<span className={styles.title}>Projects.</span>
				<span className={styles.subtitle}>Visit my last projects</span>
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
				<span className={styles.viewMore}>
					See all projects on{' '}
					<a
						href='https://github.com/Albertcacv?tab=repositories'
						title='github link'
						rel='noreferrer noopener'
					>
						github
					</a>{' '}
				</span>
			</section>
		</>
	);
};

export default Projects;
