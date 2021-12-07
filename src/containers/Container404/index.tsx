import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

interface Container404Props { }

const Container404: React.FunctionComponent<Container404Props> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <>
      <main className="main">
        <h1>This Page Does Not Exist</h1>
        <p>
          The Page You are looking Does Not Exist Use the Go Back button below.
        </p>
          <Link className="button" to="/">
            Go Back
          </Link>
      </main>
    </>
  )
}

export default Container404
