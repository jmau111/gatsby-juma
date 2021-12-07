import React from "react"
import ScrollToTop from "react-scroll-up"
import Nav from "./Nav"
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop
        showUnder={300}
        duration={700}
        easing="easeInOutCubic"
        style={{ bottom: 30, right: 20 }}
      >
         Scroll Top
      </ScrollToTop>
    </>
  )
}

export default Layout
