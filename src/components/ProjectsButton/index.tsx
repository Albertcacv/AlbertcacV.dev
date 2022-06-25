import styles from './styles.module.css';
const ProjectsButton = () => {
	const handleClick = () => {
		window.scrollTo(0, 200);
	};

	return (
		<button className={styles.projectsButton} onClick={handleClick}>
			See Projects <span className={styles.projectsButtonArrow}> {'>'} </span>
		</button>
	);
};

export default ProjectsButton;
