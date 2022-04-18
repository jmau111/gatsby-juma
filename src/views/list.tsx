import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  pageContext: {
    currentPage: number
    numPages: number
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt?: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          description: string
          image?: any
        }
      }
    }
  }
}

const BlogList = ({ pageContext, data: { allMarkdownRemark } }: PageProps<DataProps>) => {
  const Posts = allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/posts` : `/posts/page/${(currentPage - 1).toString()}`
  const nextPage = `/posts/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <Layout className="listing">
      <SEO title={`Page ${currentPage}`} />
      {Posts.map(({ node }: any) => {
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
