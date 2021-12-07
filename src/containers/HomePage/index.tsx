import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./Posts"

type BlogProps = {}

const Blog: React.FunctionComponent<BlogProps> = ({
  ...props
}) => {

  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`);

  return (
    <>
      <section className="intro" {...props}>
        <h1>Welcome to {Data.site.siteMetadata.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim lacinia metus et feugiat. Suspendisse rhoncus ornare enim, vitae dapibus felis blandit vel. Aliquam erat volutpat. Etiam in venenatis ipsum. Etiam quis posuere augue, nec vehicula ante. Morbi felis nunc, ornare eget orci et, ornare facilisis lacus. Suspendisse potenti. In quis ligula a lacus venenatis porttitor.
        </p>
      </section>
      <Posts />
    </>
  )
}

export default Blog
