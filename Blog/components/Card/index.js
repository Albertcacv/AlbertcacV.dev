import Image from 'next/image'

import styles from '@/styles/Card.module.css'

export default function Card({ post }) {
  return (
    <article className={styles.card}>
        <header>
          {/* <Image src={src} alt={alt} width={500} height={200} /> */}
        </header>
        <section className={styles.card__content}>
          <h3>
            <a>{post.frontmatter.title}</a>
          </h3>
        </section>
        <footer>
          <ul>
            <li>{post.frontmatter.tags}</li>
          </ul>
        </footer>
    </article>
  )
}

// TODO: comments
// TODO: min read
