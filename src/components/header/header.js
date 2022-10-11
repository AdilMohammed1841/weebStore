import React from "react";
import "./header.css";
import { headerData } from "../../utils/includes";

const Header = () => {
  return (
    <div className="header-cont" >
      <ul>
        {headerData &&
          headerData.map((item, index) => (
           
              <li> <a key={index} href={item.path}> {item.name} </a></li>
            
          ))}
      </ul>
    </div>
  );
};

export default Header;
