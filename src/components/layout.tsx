import React from "react"
import ScrollToTop from "react-scroll-up"
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode
  className: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Header className={`header__${className}`} />
      <main className="main">{children}</main>
      <Footer />
      <ScrollToTop
        showUnder={300}
        duration={700}
        easing="easeInOutCubic"
        style={{
          bottom: 42,
          right: 30,
          display: `block`,
          width: 0,
          height: 0,
          borderWidth: `0 13px 22.5px 13px`,
          borderColor: `transparent transparent white transparent`,
          borderStyle: `solid`,
        }}
      />
    </div>
  )
}

export default Layout
