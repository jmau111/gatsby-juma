import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

interface Wrap404Props { }

const Wrap404: React.FunctionComponent<Wrap404Props> = props => {
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
    <div>
      <div>
        <h1>This Page Was Lost</h1>
        <p>
          The Page You are looking for isn’t available. Try to search again or
          use the Go Back button below.
        </p>
        <div>
          <Link to="/">
            <div>
              back
            </div>
            Go Back
          </Link>
        </div>
      </div>
      <div>
        <GatsbyImage image={Data.avatar.childImageSharp.gatsbyImageData} alt="" />
      </div>
    </div>
  )
}

export default Wrap404
