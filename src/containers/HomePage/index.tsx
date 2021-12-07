import * as React from "react"
import Posts from "./Posts"

type BlogProps = {}

const Blog: React.FunctionComponent<BlogProps> = ({
  ...props
}) => {
  return (
    <section {...props}>
      <Posts />
    </section>
  )
}

export default Blog
