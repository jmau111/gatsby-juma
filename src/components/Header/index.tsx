import React from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import DarkMode from "../DarkMode"
import SearchBar from "../SearchBar"

type HeaderProps = {
  className?: string
}

const MenuItems = [
  {
    text: `Home`,
    url: `/`,
  },
  {
    text: `About`,
    url: `/about`,
  },  
  {
    text: `Posts`,
    url: `/posts`,
  },
]

const Header: React.FunctionComponent<HeaderProps> = ({ className, ...props }) => {
  const customClasses = [`header`]

  if (className) {
    customClasses.push(className)
  }

  const [isActive, setActive] = React.useState<boolean>(false)

  const handleToggle = () => {
    setActive(!isActive)
  }

  const state = isActive ? `show` : `hide`

  return (
    <header className={customClasses.join(` `)} {...props}>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src="/logo.png" width="42" height="42" alt="" />
          <span className="screen-reader-text">Go to Homepage</span>
        </Link>

        <button type="button" aria-label="toggle menu" className="bars-container" onClick={handleToggle}>
          <span className="bars" aria-hidden="true"></span>
        </button>
        <div className={`navbar__container` + ` ` + state}>
          <Menu items={MenuItems} />
          <SearchBar />
          <DarkMode />
        </div>
      </nav>
    </header>
  )
}

export default Header
