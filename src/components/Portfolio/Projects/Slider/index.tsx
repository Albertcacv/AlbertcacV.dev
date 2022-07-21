import { useState } from 'react';
import { projectsData } from '../../../../data/projectsData';
import ButtonSlider from './ButtonSlider';
import styles from './slider.module.css';
const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => (slideIndex !== projectsData.length ? setSlideIndex(slideIndex + 1) : setSlideIndex(1));
	const prevSlide = () => (slideIndex !== 1 ? setSlideIndex(slideIndex - 1) : setSlideIndex(projectsData.length));
	const moveDot = (index: number) => setSlideIndex(index);

	return (
		<div className={styles.sliderContainer}>
			{projectsData.map((project, index) => (
				<div
					key={project.id}
					className={slideIndex === index + 1 ? `${styles.slide} ${styles.activeAnim}` : `${styles.slide}`}
				>
					<img src={project.image} />
				</div>
			))}
			<ButtonSlider moveSlide={nextSlide} direction={'next'} />
			<ButtonSlider moveSlide={prevSlide} direction={'prev'} />

			<div className={styles.containerDots}>
				{Array.from({ length: projectsData.length }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Slider;
