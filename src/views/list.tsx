import * as React from "react"
import { Link, graphql } from "gatsby"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Data {
  pageContext: {
    currentPage: number
    numPages: number
  }
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
          }
          title?: string
          date?: string
        }
      }
    }
  }
}

interface Node {
  node: {
    frontmatter: {
      title?: string
      date?: string
    }
    fields: {
      slug: string
    }
  }
}

const BlogList = ({ pageContext: { currentPage, numPages }, data: { allMarkdownRemark } }: Data) => {
  const Posts = allMarkdownRemark.edges
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/posts` : `/posts/page/${(currentPage - 1).toString()}`
  const nextPage = `/posts/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <Layout className="listing">
      <SEO title={numPages > 1 ? `Posts Page ${currentPage}` : `Posts`} />
      {Posts instanceof Array &&
        Posts.map(({ node }: Node) => {
          return (
            <article className="post-item" key={node.fields.slug}>
              <time className="post-date">{node.frontmatter.date}</time>
              <Link className="post-title" to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </article>
          )
        })}
      {numPages > 1 && (
        <Pagination prevLink={PrevLink} nextLink={NextLink} currentPage={`${currentPage}`} totalPage={`${numPages}`} />
      )}
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
