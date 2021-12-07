import * as React from "react"

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = props => {

  return (
    <div>
      <div>
        <h2>What about us?</h2>
        <p>
          What about us? What about all the times you said you had the answers?
        </p>
      </div>
      <div>
        <img src="/logo.png" width="200" height="200" alt="" />
      </div>
      <div>
        <h2>Hey there, what’s up?</h2>
        <p>
          What about us?
          What about all the times you said you had the answers?
          What about us?
          What about all the broken happy ever afters?
          What about us?
          What about all the plans that ended in disaster?
          What about love? What about trust?
          What about us?
        </p>
        <p>
          What about us?
          What about all the times you said you had the answers?
          What about us?
          What about all the broken happy ever afters?
          Oh, what about us?
          What about all the plans that ended in disaster?
          Oh, what about love? What about trust?
          What about us?
          Oh, what about us?
          What about all the plans that ended in disaster?
          What about love? What about trust?
          What about us?
        </p>
      </div>
    </div>
  )
}

export default About
