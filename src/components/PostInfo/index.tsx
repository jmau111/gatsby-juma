import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import _ from "lodash"

type PostInfoProps = {
  title: string
  date?: string
  html: any
  image?: any
  className?: string
}

const PostInfo: React.FunctionComponent<PostInfoProps> = ({
  title,
  date,
  html,
  image,
  className,
  ...props
}) => {
  const addClass: string[] = ["single"]

  if (className) {
    addClass.push(className)
  }

  return (
    <article {...props} className={addClass.join(" ")}>
      {image == null ? null : (
          <div className="post-image">
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
          </div>
        )}
      <h1>{title}</h1>
      <time className="post-date">{date}</time>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

export default PostInfo
