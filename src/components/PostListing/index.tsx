import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

interface PostListProps {
  image?: any
  title: string
  url: string
  date?: string
  className?: string
}

const PostList: React.FunctionComponent<PostListProps> = ({
  image,
  title,
  url,
  date,
  className,
  ...props
}) => {
  
  const customClasses = ["post_list"]


  if (className) {
    customClasses.push(className)
  }

  return (
    <div className={customClasses.join(" ")} {...props}>
      <Link to={url}>
        {image == null ? null : (
          <div className="post-image">
              <GatsbyImage image={image} alt="" />
          </div>
        )}
        <div className="post-title">{title}</div>
        <div>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date,
              }}
              className="post-date"
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default PostList
