import styles from './project-card.module.css';
const ProjectCard = ({
	title,
	description,
	image,
	verticalImage,
	viewLink,
	codeLink,
}) => {
	return (
		<article className={styles.card}>
			<div className={styles.cardInfo}>
				<span className={styles.title}>{title}</span>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.projectInfo}>
				<img
					src={image}
					srcSet={`${image} 1000w, ${verticalImage} 2x`}
					alt='prject image'
					className={styles.cardImage}
				/>

				<div className={styles.links}>
					<span className={styles.linkContent}>
						Check out the website {'-> '}
						<a
							href={viewLink}
							title='web link'
							rel='noreferrer noopener'
							target='_blank'
							className={styles.link}
						>
							Web
						</a>
					</span>
					<span className={styles.linkContent}>
						Check out the repository {'-> '}
						<a
							href={codeLink}
							title='web link'
							rel='noreferrer noopener'
							target='_blank'
							className={styles.link}
						>
							GitHub
						</a>
					</span>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
