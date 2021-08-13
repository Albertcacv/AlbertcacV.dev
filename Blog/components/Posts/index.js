import Link from 'next/link'

import Card from '@/components/Card'

import styles from '@/styles/Posts.module.css'

export default function Posts({ posts }) {
  return (
    <section className={styles.posts}>
      <h2>Posts</h2>
      <section className={styles.post__content}>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`}>
            <Card post={post} />
          </Link>
        ))}
      </section>
    </section>
  )
}
