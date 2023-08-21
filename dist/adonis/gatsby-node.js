/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const posts = await getAllArticles(graphql, reporter);
  await createArticlePages(posts, createPage)
  await createTopicPages(posts, createPage)
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}


const createArticlePages = async (posts, createPage) => {
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.frontmatter.permalink,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

const createTopicPages = async (posts, createPage) => {

  const uniqueTopics = getUniqueTopics(posts)

  uniqueTopics.forEach(topic => {
    createPage({
      path: `topic/${topic.toLowerCase()}`,
      component: path.resolve(`./src/templates/topic-page.tsx`),
      context: {
        topic: topic,
      },
    }) 
  })
}

const getAllArticles = async (graphql, reporter) => {
  const result = await graphql(`
  {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          permalink
          topics
        }
      }
    }
  }
  `)

  if (result.errors) {
  reporter.panicOnBuild(
    `There was an error loading your blog posts`,
    result.errors
  )
  return
  }

  return result.data.allMarkdownRemark.nodes
}

const getUniqueTopics = (posts) => {
  const uniqueTopics = []

  posts.forEach(post => {
    post?.frontmatter?.topics?.forEach(cat => {
      if (uniqueTopics.indexOf(cat) === -1) {
        uniqueTopics.push(cat)
      }
    })
  })

  return uniqueTopics
}