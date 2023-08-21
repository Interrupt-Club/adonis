import * as React from "react"
import { PageProps } from "gatsby"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TopicPage: React.FC<PageProps<Queries.TopicPageQuery>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
    <ol style={{ listStyle: `none` }}>
        {posts?.map(post => {
          const title = post?.frontmatter?.title

          return (
            <li key={post?.frontmatter?.permalink}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={post?.frontmatter?.permalink || ""}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post?.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post?.frontmatter?.excerpt || "",
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TopicPage

export const pageQuery = graphql`
  query TopicPage($topic: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { topics: { eq: $topic } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          permalink
        }
      }
    }
  }
`
