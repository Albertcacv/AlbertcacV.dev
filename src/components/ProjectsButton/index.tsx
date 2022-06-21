import { useRef } from 'preact/hooks';
import styles from './styles.module.css';
const ProjectsButton = () => {
	const buttonProject = useRef(null);

	// const handleClick = () => {
	// 	buttonProject &&
	// 		buttonProject.current.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'start',
	// 		});
	// };

	return (
		<button className={styles.projectsButton}>
			See Projects <span className={styles.projectsButtonArrow}> {'>'} </span>
		</button>
	);
};

export default ProjectsButton;
