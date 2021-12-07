import React from "react"
import ScrollToTop from "react-scroll-up"
import Nav from "./Nav"
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Nav />
      <main className="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop
        showUnder={300}
        duration={700}
        easing="easeInOutCubic"
        style={{ bottom: 42, right: 30 }}
      >
        <span className="scroll-top" aria-label="Scroll Top"></span>
      </ScrollToTop>
    </div>
  )
}

export default Layout
