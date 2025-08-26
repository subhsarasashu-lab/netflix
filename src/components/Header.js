import React from "react";
import { logo } from "../utils/mock";

const Header = () => {
    return (
      <div>
        <div className="  mx-1 absolute bg-gradient-to-b from-black">
          <img src={logo} className="w-36" />
        </div>
       
      </div>
    );
};

export default Header;
