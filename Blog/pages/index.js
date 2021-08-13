import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Head from 'next/head'

import Header from '@/components/Header'
import Posts from '@/components/Posts'

import { sortByDate } from '@/utils/index'

import styles from '@/styles/Home.module.css'

export default function HomePage({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlbertcacV | Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <Posts posts={posts} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

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
