import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  return (
    <Layout location={location}>
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.permalink} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.permalink} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

// export const Head = ({ data: { markdownRemark: post } }) => {
//   return (
//     <Seo
//       title={post.frontmatter.title}
//       description={post.frontmatter.description || post.excerpt}
//     />
//   )
// }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        permalink
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        permalink
      }
    }
  }
`
