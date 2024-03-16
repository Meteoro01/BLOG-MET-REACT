import React, { useState } from "react";
import viewTrue from "../assets/icons/viewtrue.svg";
import viewFalse from "../assets/icons/viewfalse.svg";
import UserAccess from "../utils/UserAccess";

const Login = ({ toggleLor, togglePanel }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const view = (v) => {
    return <img src={v} className="w-7" alt="" />;
  };

  const handleLogin = async () => {
    const { data, error } = await UserAccess({ email, password });
    console.log("🚀 ~ file: Login.jsx:Login.handleLogin ~ data:", data);
    console.log("🚀 ~ file: Login.jsx:Login.handleLogin ~ error:", error);
  };

  return (
    <div className="flex flex-col bg-zinc-800 py-10 rounded-3xl">
      <h2 className="mx-auto flex gap-x-2 py-10 text-4xl font-bold text-[#3ecf8e]">
        Login to Blog Met
      </h2>
      <div className="mx-auto flex flex-col py-2">
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="h-[50px] w-[300px] rounded-lg bg-zinc-700 pl-3 focus:outline-none"
        />
      </div>
      <div className="relative mx-auto flex flex-col py-2">
        <div className="relative">
          <input
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            id="password"
            className="h-[50px] w-[300px] rounded-lg bg-zinc-700 pl-3 pr-[40px] focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-0 mr-[10px] mt-[10px]"
          >
            {showPassword ? view(viewTrue) : view(viewFalse)}
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col py-4">
        <button
          type="button"
          onClick={handleLogin}
          className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-[#3ecf8e] text-zinc-800"
        >
          Login
        </button>
      </div>
      <div className="flex w-full justify-center gap-x-2 px-8">
        <p className="">Don't have an account?</p>
        <button className="text-[#3ecf8e] " onClick={toggleLor}>
          register
        </button>
      </div>
    </div>
  );
};

export default Login;
