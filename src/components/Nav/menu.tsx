import React from "react";
import {Link} from "gatsby";

type MenuProps = {
  items: MenuItemsProps[];
  className?: string;
}

type MenuItemsProps = {
  url: string;
  text: string;
  external?: boolean;
}

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  className,
  ...props
}) => {
  
  const customClasses = ["menu"];

  if (className) {
    customClasses.push(className);
  }

  return (
    <ul className={customClasses.join(" ")} {...props}>
      {items.map((item, index) => (
        <li key={index}>
          {item.external ? (
            <a href={item.url}>{item.text}</a>
          ) : (
            <Link to={item.url} activeClassName="active-link">
              {item.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;