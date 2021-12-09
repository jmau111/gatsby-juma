import React, { useState } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import DarkMode from "../DarkMode"
import Logo from "../../../images/logo.png"

type NavProps = {
  className?: string
}

const MenuItems = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
]

const Nav: React.FunctionComponent<NavProps> = ({
  className,
  ...props
}) => {

  const customClasses = ["header"]

  if (className) {
    customClasses.push(className)
  }

  const [isActive, setActive] = React.useState<boolean>(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className={customClasses.join(" ")} {...props}>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={Logo} width="42" height="42" alt="" />
        </Link>

        <button type="button" className="bars-container" onClick={handleToggle}>
          <span className="bars" aria-label="toggle menu"></span>
        </button>
        <div className={isActive ? "show" : "hide"}>
          <Menu items={MenuItems} />
          <DarkMode />
        </div>
      </nav>
    </header>
  )
}

export default Nav
