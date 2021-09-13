import Head from "next/head"

import { getAllFilesMetaData } from "../lib/mdx"

import Header from "../components/Header"
import Gallery from "../components/Gallery"


import styles from "../styles/Home.module.css"

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlbertcacV | Blog</title>
        <meta
          name="description"
          content="Web development and cybersecurity all in one"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Gallery articles={posts} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllFilesMetaData()
  const posts = allPosts.sort(
    (prev, current) => new Date(current.date) - new Date(prev.date)
  )
  return {
    props: { posts },
  }
}
