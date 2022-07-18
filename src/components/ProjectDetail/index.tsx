import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import styles from './project-detail.module.css';
type Project = {
	id: number;
	title: string;
	description: string;
	stack: string[];
	image: string;
	viewLink: string;
	codeLink: string;
};

interface ProjectProps {
	project: Project;
	isShowing: boolean;
	hide: any;
}

const ProjectDetail = ({ project, isShowing, hide }: ProjectProps) =>
	isShowing
		? createPortal(
				<div className={styles.projectDetailOverlay}>
					<article className={styles.projectDetails}>
						<div className={styles.projectDetailsClose}>
							<button className={styles.closeButton} onClick={hide}>
								<RiCloseLine size={'1rem'} />
							</button>
						</div>
						<img src={project.image} alt='image' className={styles.image}/>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</article>
				</div>,
				document.body
		  )
		: null;

export default ProjectDetail;
