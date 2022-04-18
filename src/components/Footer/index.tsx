import * as React from "react";

type FooterProps = {
  children?: React.ReactNode;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  return <footer className="footer" {...props}>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
      <a href="https://github.com/jmau111/gatsby-juma"> 
        Gatsby Juma
      </a>
      {children}
  </footer>;
};

export default Footer;