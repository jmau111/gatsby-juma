import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostInfo from "../components/PostInfo"

const PostTemplate = (props: any) => {
  const post = props.data.markdownRemark
  const slug = post.fields.slug
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const {date, title, description, image } = post.frontmatter

  return (
    <Layout className="single">
      <SEO title={title} description={description || post.excerpt} />
      <PostInfo
        title={title}
        isPageTitle={true}
        date={date}
        html={post.html}
        image={image}
      />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
