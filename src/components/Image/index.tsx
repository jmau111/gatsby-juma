import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

interface ImageProps {
  image?: any
  title: string
  url: string
  className?: string
  readTime?: string
}

const Image: React.FunctionComponent<ImageProps> = ({
  image,
  title,
  url,
  className,
  readTime,
  ...props
}) => {
  const addClass = ["featured"]

  if (className) {
    addClass.push(className)
  }

  return (
    <div className={addClass.join(" ")} {...props}>
      <Link to={url}>
        {image == null ? null : (
          <div className="post-image">
            <GatsbyImage image={image} alt="" />
          </div>
        )}

        <div className="post_details">
          <div className="post-title">
            <span>{title}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Image
