import Post from "../Post"

import styles from "../../styles/gallery.module.css"

export default function Gallery({ articles }) {
  return (
    <section className={styles.gallery}>
      {articles.map((article) => (
        <Post key={article.slug} post={article} />
      ))}
    </section>
  )
}
