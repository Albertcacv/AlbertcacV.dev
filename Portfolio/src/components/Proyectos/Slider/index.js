import Card from './Card'

import styles from '../../../styles/Slider.module.css'

export default function Slider() {
  return (
    <section className={styles.slider} id="projects">
      <h2>Mis proyectos ➡</h2>
      <div className={styles.slider__content}>
        <div className={styles.slider__wrapper}>
          <Card className={styles.slider__item} title="Api de Rick&Morty"/>
          <Card className={styles.slider__item} /> 
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} /> 
          {/* 

          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} />
          <Card className={styles.slider__item} /> 
          */}
        </div>
      </div>
    </section>
  )
}
