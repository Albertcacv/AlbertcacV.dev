import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import favicon from '../../images/logo.jpg'
import Header from '../../components/Blog/Header'
import Post from '../../components/Blog/Post'

export default function BlogPage({ data }) {
  const { posts } = data.blog
  return (
    <>
      <Helmet>
        <title>AlbertcacV | blog</title>
        <link rel='icon' href={favicon} />
      </Helmet>
      <main className='main'>
        <Header />
        {/* <h1>Currently in development...</h1>
        <section className='section grid container'>
          {posts.map((post) => (
            <Link to={post.fields.slug}>
              <article key={post.id}>
                <h2>{post.frontmatter.title}</h2>
                <small>{post.frontmatter.date}</small>
                <p>{post.description}</p>
              </article>
            </Link>
          ))}
        </section> */}
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          description
        }
        excerpt
        id
      }
    }
  }
`
