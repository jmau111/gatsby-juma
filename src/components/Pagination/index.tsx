import * as React from "react"
import { Link } from "gatsby"

type PaginationProps = {
  prevLink?: string | undefined | null | boolean
  nextLink?: string | undefined | null | boolean
  currentPage: string
  totalPage: string
  className?: string
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <ul {...props} className={className}>
      <li>
        {prevLink && (
          <Link to={`${prevLink}`} aria-label="Prev">
            prev
          </Link>
        )}
      </li>

      <li>{`Page ${currentPage} Of ${totalPage}`}</li>

      <li>
        {nextLink && (
          <Link to={`${nextLink}`} aria-label="Next">
            next
          </Link>
        )}
      </li>
    </ul>
  )
}

export default Pagination
