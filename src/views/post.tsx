import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostInfo from "../components/PostInfo"

type DataProps = {
  markdownRemark: {
    html?: any
    excerpt?: string
    frontmatter: {
      date: string
      title: string
      description: string
      image?: any
    }
  }
}

const PostTemplate = ({ data: { markdownRemark } }: PageProps<DataProps>) => {
  const { html, frontmatter, excerpt } = markdownRemark
  const { date, title, description, image } = frontmatter

  return (
    <Layout className="single">
      <SEO title={title} description={description || excerpt} />
      <PostInfo title={title} isPageTitle={true} date={date} html={html} image={image} />
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
