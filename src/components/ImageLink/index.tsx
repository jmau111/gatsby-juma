import * as React from "react"
import { Link } from "gatsby"

type ImageProps = {
  imageUrl: string
  title: string
  url: string
  className?: string
  readTime?: string
}

const ImageLink: React.FunctionComponent<ImageProps> = ({ imageUrl, url, className, ...props }) => {
  const addClass = [`card__image`]

  if (className) {
    addClass.push(className)
  }

  return (
    <div
      style={{
        width: `100%`,
        height: `220px`,
        background: `url(` + imageUrl + `) no-repeat center center`,
        backgroundSize: `cover`,
      }}
      className={addClass.join(` `)}
      {...props}
    >
      <Link className="card__link" to={url} aria-label="Read more"></Link>
    </div>
  )
}

export default ImageLink
