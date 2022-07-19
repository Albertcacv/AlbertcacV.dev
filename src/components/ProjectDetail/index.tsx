import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import { Project } from '../../types/Projects';
import styles from './project-detail.module.css';

interface ProjectProps {
	project: Project;
	isShowing: boolean;
	hide: any;
}

const ProjectDetail = ({ project, isShowing, hide }: ProjectProps) => {
	return isShowing
		? createPortal(
				<div className={styles.projectDetailOverlay}>
					<article className={styles.projectDetails}>
						<button className={styles.closeButton} onClick={hide}>
							<RiCloseLine size={'1.5rem'} />
						</button>
						{/* <div className={styles.imageContainer}>
							 <img src={project.image} alt='image' className={`${styles.image} ${styles.translateTop}`} /> 
							<img
								src={project.mobileImage}
								alt='mobile image'
								className={`${styles.image} ${styles.translateBottom}`}
							/>
				
						</div> */}
						<div className={styles.info}>
							<h3 className={styles.title}>{project.title}</h3>
							<span className={styles.stack}>{project.stack}</span>
							<p className={styles.description}>{project.description}</p>

							<div className={styles.buttons}>
								<a href={project.codeLink} target='_blank' className={styles.link}>
									View code
								</a>
								<a href={project.viewLink} target='_blank' className={styles.link}>
									View site
								</a>
							</div>
						</div>
					</article>
				</div>,
				document.body
		  )
		: null;
};

export default ProjectDetail;
