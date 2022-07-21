import Slider from 'react-slick';
import { projectsData } from '../../../../data/projectsData';
import styles from './project-slider.module.css';
const ProjectSlider = () => {
	const settings = {
		ots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{projectsData.map((project) => (
					<article className={styles.slide} key={project.id}>
						{/* // 						<div className={styles.imageContainer}>
// 							<img src={project.image} className={styles.image} />
// 						</div>
// 						<div className={styles.info}>
// 							<span>{project.title}</span>
// 							<p>{project.description}</p>
// 
// 							<div className={styles.slideButtons}>
// 								<Button text='VIEW SITE' url={project.viewLink} />
// 								<Button text='VIEW CODE' url={project.codeLink} />
// 							</div>
// 						</div> */}
					</article>
				))}
			</Slider>
		</div>
	);
};

export default ProjectSlider;

// <div
// 	key={project.id}
// 	className={
// 		slideIndex === index + 1
// 			? `${styles.slide} ${styles.activeAnim}`
// 			: `${styles.slide}`
// 	}
// >
// 	<div className={styles.imageContainer}>
// 		<img src={project.image} className={styles.image} />
// 	</div>
// 	<div className={styles.slideInfo}>
// 		<span>{project.title}</span>
// 		<p>{project.description}</p>
// 		<div className={styles.slideButtons}>
// 			<Button text='VIEW SITE' url={project.viewLink} />
// 			<Button text='VIEW CODE' url={project.codeLink} />
// 		</div>
// 	</div>
// </div>
