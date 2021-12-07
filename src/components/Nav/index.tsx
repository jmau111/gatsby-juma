import React, { useState } from "react"
import { Link } from "gatsby"
import Menu from "./menu"

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
  }
]

const Nav: React.FunctionComponent<NavProps> = ({
  className,
  ...props
}) => {

  const customClasses = ["header"]

  if (className) {
    customClasses.push(className)
  }

  return (
    <header className={customClasses.join(" ")} {...props}>
      <nav className="navbar">
        <Link to="/">
          <img src="/logo.png" width="56" height="56" alt="" />
        </Link>
        <Menu items={MenuItems} />
      </nav>
    </header>
  )
}

export default Nav
