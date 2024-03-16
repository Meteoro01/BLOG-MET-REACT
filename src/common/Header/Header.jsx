import React from "react";
import "./style.css";
import Logo from "../../assets/icons/logogreend.svg";
import login from "../../assets/icons/login.svg";

const Header = () => {
  return (
    <header className="flex  justify-center py-10 ">
      <div className="flex flex-col items-center ">
        <h2 className="logo flex gap-x-[1px] py-6 text-xl md:text-5xl font-bold text-[#3ecf8e]">
          BLOG METE
          <img src={Logo} className="md:w-12" alt="" />
          RO
        </h2>
        <p className="text-center px-4 md:px-0 ">
          This<span className="text-[#3ecf8e]">WEB</span> site is created for
          users to give their opinions or report on topics that are interesting
          to them.
        </p>
      </div>

    </header>
  );
};

export default Header;
