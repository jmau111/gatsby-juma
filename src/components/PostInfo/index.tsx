import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type PostInfoProps = {
  isPageTitle?: boolean
  title: string
  date?: string
  html: string
  image?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  className?: string
}

const PostInfo: React.FunctionComponent<PostInfoProps> = ({
  isPageTitle,
  title,
  date,
  html = ``,
  image,
  className,
  ...props
}) => {
  const addClass: string[] = [`single`]
  let postTitle

  if (className) {
    addClass.push(className)
  }

  if (isPageTitle) {
    postTitle = <h1 className="post-title">{title}</h1>
  } else {
    postTitle = <p className="post-title">{title}</p>
  }

  return (
    <article {...props} className={addClass.join(` `)}>
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
