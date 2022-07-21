import styles from './buton-slider.module.css';
import leftArrow from '/left-arrow.svg';
import rightArrow from '/right-arrow.svg';

interface ButtonSliderProps {
	direction: string;
	moveSlide: any;
}
const ButtonSlider = ({ direction, moveSlide }: ButtonSliderProps) => {
	return (
		<button
			onClick={moveSlide}
			className={
				direction === 'next'
					? `${styles.buttonSlide} ${styles.next}`
					: `${styles.buttonSlide} ${styles.prev}`
			}
		>
			<img
				src={direction === 'next' ? rightArrow : leftArrow}
				className={styles.image}
			/>
		</button>
	);
};

export default ButtonSlider;

//TODO: change moveSlide type
