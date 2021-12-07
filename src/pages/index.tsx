import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../containers/HomePage"
import SEO from "../components/seo"

const BlogPage = (props: any) => {
  const { data } = props

  return (
    <Layout className="home">
      <SEO
        title="Image Blog"
        description={data.site.siteMetadata.description}
      />
      <Blog />
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
