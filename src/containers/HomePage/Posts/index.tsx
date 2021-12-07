import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import ImageLink from "../../../components/ImageLink"

type PostsProps = {}

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
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
  `)

  const Posts = Data.allMarkdownRemark.edges

  return (
    <section className="last-posts">
      <h2 className="shadowed border">Last posts</h2>
      <ul>
      {Posts.slice(0, 3).map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <li className="card" key={node.fields.slug}>
            <ImageLink
              imageUrl={
                node.frontmatter.image == null
                  ? null
                  : node.frontmatter.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
              }
              url={node.fields.slug}
            />
            <ul className="post-metadata">
              <li><Link to={node.fields.slug} className="post-title">{title}</Link></li>
              <li><time className="post-date">{node.frontmatter.date}</time></li>
            </ul>
          </li>
        )
      })}
      </ul>
    </section>
  )
}

export default Posts
