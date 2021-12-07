import * as React from "react"
import { Link, graphql } from "gatsby"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"

const BlogList = (props: any) => {
  const { data } = props
  const Posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/page/1" : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      <section>
          {Posts.map(({ node }: any) => {
            return (
              <article key={node.fields.slug}>
                <time class="post-date">{node.frontmatter.date}</time>
                <Image
                    title={node.frontmatter.title}
                    image={
                      node.frontmatter.image == null
                        ? null
                        : node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    url={node.fields.slug}
                  />
              </article>
            )
          })}

        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </section>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
