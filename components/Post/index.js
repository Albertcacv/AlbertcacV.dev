import Link from 'next/link'
import styles from './post.module.css'
export const Post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className={styles.card}>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.excerpt}</p>
      </a>
    </Link>
  )
}
