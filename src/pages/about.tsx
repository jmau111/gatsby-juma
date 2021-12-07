import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout className="about">
      <SEO
        title="About Us"
        description="What about us? What about all the times you said you had the answers?"
      />
      <About />
    </Layout>
  )
}

export default AboutPage
