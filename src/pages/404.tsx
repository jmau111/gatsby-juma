import React from "react"
import Header from "../components/Header"
import SEO from "../components/seo"
import Container404 from "../containers/Container404"
import Footer from "../components/Footer"

const Page404 = () => {
  return (
    <>
      <Header className="404" />
      <SEO title="404 Page Not Found" />
      <Container404 />
      <Footer />
    </>
  )
}

export default Page404
