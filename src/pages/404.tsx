import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import Wrap404 from "../containers/Wrap404"
import Footer from "../components/Footer"

const Page404 = (props: any) => {
  return (
    <>
      <Nav />
      <SEO title="404 Page Not Found" />
      <Wrap404 />
      <Footer />
    </>
  )
}

export default Page404

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
