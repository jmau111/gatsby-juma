import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import _ from "lodash"

type PostInfoProps = {
  isPageTitle?: bool
  title: string
  date?: string
  html: any
  image?: any
  className?: string
}

const PostInfo: React.FunctionComponent<PostInfoProps> = ({
  isPageTitle,
  title,
  date,
  html,
  image,
  className,
  ...props
}) => {
  const addClass: string[] = ["single"]
  let postTitle;

  if (className) {
    addClass.push(className)
  }

  
  if (isPageTitle) {
    postTitle = <h1 className="post-title">{title}</h1>
  } else {
    postTitle = <p className="post-title">{title}</p>
  }

  return (
    <article {...props} className={addClass.join(" ")}>
      {postTitle}
      <time className="post-date">{date}</time>
      {image == null ? null : (
          <div className="post-image">
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
          </div>
        )}
      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

export default PostInfo
