import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import { Post } from '../components/Post'
import styles from '../styles/blog.module.css'
import { sortByDate } from '../utils/'

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>AlbertcacV | Blog</title>
        <meta name='description' content='Blog site of AlbertcacV' />
      </Head>
      <section className={styles.section}>
        <h3 className={styles.title}>BLOG 📑</h3>
        <div className={styles.posts}>
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((file) => {
    const slug = file.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf8')

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
