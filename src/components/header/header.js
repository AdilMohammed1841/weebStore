import React from "react";
import "./header.css";
import { headerData } from "../../utils/includes";

const Header = () => {
  return (
    <div className="header-cont" >
      <ul>
        {headerData &&
          headerData.map((item, index) => (
            <a href={item.path}>
              <li> {item.name} </li>
            </a>
          ))}
      </ul>
    </div>
  );
};

export default Header;
