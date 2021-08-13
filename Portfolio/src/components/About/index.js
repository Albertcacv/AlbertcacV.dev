import styles from '../../styles/About.module.css'

export default function About() {
  // TODO: Información personal
  // TODO: Imagen
  return (
    <section className={styles.about} id="about">
      <img
        className={styles.about__img}
        src="https://stock.wikimini.org/w/images/9/95/Gnome-stock_person-avatar-profile.png"
        alt="Albertcacv"
      />
      <p className={styles.about__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Magna fermentum
        iaculis eu non diam phasellus vestibulum lorem sed. Odio facilisis
        mauris sit amet massa vitae tortor condimentum lacinia.
      </p>
    </section>
  )
}
