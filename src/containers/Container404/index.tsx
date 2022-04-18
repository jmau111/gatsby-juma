import * as React from "react"
import { Link } from "gatsby"

const Container404 = () => {
  return (
    <>
      <main className="main">
        <h1>This Page Does Not Exist</h1>
        <p>The Page You are looking Does Not Exist Use the Go Back button below.</p>
        <Link className="button" to="/">
          Go Back
        </Link>
      </main>
    </>
  )
}

export default Container404
