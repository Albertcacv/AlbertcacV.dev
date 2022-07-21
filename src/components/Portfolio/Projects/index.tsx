import styles from './projects.module.css';
import ProjectSlider from './ProjectSlider';

const Projects = () => {
	return (
		<section className={styles.projects}>
			<ProjectSlider />
		</section>
	);
};

export default Projects;
