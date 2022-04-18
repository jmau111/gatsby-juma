import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../containers/HomePage"
import SEO from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const BlogPage = ({ data: { site } }: PageProps<DataProps>) => {
  return (
    <Layout className="home">
      <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
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
