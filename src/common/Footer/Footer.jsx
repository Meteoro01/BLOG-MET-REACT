import React from "react";
import Love from "../../assets/icons/love.svg";
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <div className="mt-4 border-t-2 border-zinc-800 py-16">
      <h1 className="flex items-center justify-center gap-x-2 text-center text-lg">
        Made with
        <span>
          <img src={Love}  className="mt-2 w-7 logo" />
        </span>{" "}
        by MeteoroDev
      </h1>
    
      <div className="flex justify-center items-center mt-4 gap-x-20">
        <a className="logo" href="https://github.com/Meteoro01" target="_blank">
            <img src={Github} className="w-9" alt="" />
        </a>
        <a className="logo" href="https://www.linkedin.com/in/meteorodev/" target="_blank">
            <img src={Linkedin} className="w-9" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
