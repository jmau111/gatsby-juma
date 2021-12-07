import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../../../components/Image"

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

  const [state, setState] = useState({
    visibile: 9,
  })

  const [load, setload] = useState({
    loading: false,
  })

  return (
      <>
      {Posts.slice(0, state.visibile).map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <time class="post-date">{node.frontmatter.date}</time>
            <Image
              title={title}
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
    </>
  )
}

export default Posts
