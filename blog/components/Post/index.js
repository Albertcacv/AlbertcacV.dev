import Link from "next/link"

import styles from "../../styles/article.module.css"

export default function Post({ post }) {
  console.log(post)
  return (
    <Link href={post.slug}>
          <a>
      <article className={styles.article}>
        <div className={styles.article__content}>
          <span>{post.date}</span>
            <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </article>
          </a>
    </Link>
  )
}
