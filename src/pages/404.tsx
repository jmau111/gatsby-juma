import React from "react"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import Container404 from "../containers/Container404"
import Footer from "../components/Footer"

const Page404 = () => {
  return (
    <>
      <Nav />
      <SEO title="404 Page Not Found" />
      <Container404 />
      <Footer />
    </>
  )
}

export default Page404
