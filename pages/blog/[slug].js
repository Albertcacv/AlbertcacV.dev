import fs from 'fs'
import matter from 'gray-matter'
import {marked} from 'marked'
import path from 'path'
import styles from '../../styles/slug.module.css'
export default function PostPage({
  frontmatter: { title, date },
  slug,
  content,
}) {
  return (
    <div className={styles.postBody}>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
