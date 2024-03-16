import React, { useState } from "react";
import Login from "../components/Login";
import Logo from "../assets/icons/logogreend.svg";
import Register from "../components/Register";

const Access = () => {
  const [lor, setlor] = useState(true);


  const toggleLor = () => {
    setlor(!lor);
  };
  return (
    <div className="flex h-[80vh] w-full items-center   justify-center">
      <div className="flex w-8/12 rounded-3xl border-2 border-[#3ecf8e]">
        <div className="flex w-1/2 flex-col items-center justify-center px-4">
          <h2 className="logo mx-auto flex gap-x-2 pb-10 text-4xl font-bold text-[#3ecf8e]">
            BLOGMET
            <img src={Logo} className="w-10" alt="" />
          </h2>
          <p className="px-4 text-center md:px-0 ">
            This<span className="text-[#3ecf8e]">WEB</span> site is created for
            users to give their opinions or report on topics that are
            interesting to them.
          </p>
        </div>
        <div className="w-1/2">
            {lor ? <Login toggleLor={toggleLor} /> : <Register toggleLor={toggleLor} />}
        </div>
      </div>
    </div>
  );
};

export default Access;
