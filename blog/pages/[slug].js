import { MDXRemote } from "next-mdx-remote"

import { MDXComponents } from "../components/MDXComponents"

import { getFileBySlug, getFiles } from "../lib/mdx"

import styles from "../styles/post.module.css"

export default function Post({ source, frontmatter }) {
  return (
    <div className={styles.wrapper}>
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return {
    props: {
      source,
      frontmatter,
    },
  }
}
