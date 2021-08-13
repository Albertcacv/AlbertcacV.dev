import { Linkedin, Twitter } from '../../Utils/icons'

import styles from '../../styles/Contact.module.css'

const ICON_SIZE = 40
export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Puedes encontrarme en: ⬇</h2>
      <section className={styles.contact__links}>
        <article className={styles.contact__item}>
          <Linkedin size={ICON_SIZE}>
            <span className={styles.contact__icon}>
              <a href="https://www.linkedin.com/in/alberto-ca%C3%B1o-%C3%A1lvarez/" />
            </span>
          </Linkedin>
        </article>
        <article className={styles.contact__item}>
          <Twitter size={ICON_SIZE}>
            <span className={styles.contact__icon}>
              <a href="https://twitter.com/AlbertcacV"></a>
            </span>
          </Twitter>
        </article>
      </section>
    </section>
  )
}
