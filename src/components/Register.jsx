import React, { useState } from "react";
import viewTrue from "../assets/icons/viewtrue.svg";
import viewFalse from "../assets/icons/viewfalse.svg";
import Logo from "../assets/icons/logogreend.svg";
import X from "../assets/icons/x.svg";
import UserRegister from "../utils/UserRegister";
import crown from "../assets/icons/crown.svg";

const Register = ({ toggleLor, togglePanel }) => {
  const [showPassword, setShowPassword] = useState(false);
  // ?estados de alertas
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  // ?estados de parametros
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const view = (v) => {
    return <img src={v} className="w-7" alt="" />;
  };

  const showAlertWithTimeout = (message, timeout, type, F) => {
    if (type) {
      setTypeAlert(type);
    }
    setShowAlert(true);
    setTextAlert(message);
    setTimeout(() => {
      setShowAlert(false);
      setTextAlert("");
      setTypeAlert(false);
    }, timeout);
  };

  const verify = async () => {
    if (email === "" || password === "") {
      showAlertWithTimeout("Todos los campos son obligatorios", 2000);
      return;
    }
    const { data, error } = await UserRegister({
      email,
      password,
    });
    console.log("🚀 ~ file: Register.jsx:verify ~ data:", data);
    console.log("🚀 ~ file: Register.jsx:verify ~ error:", error);
    // if (error) {
    //   showAlertWithTimeout(error.message, 2000);
    //   return;
    // }
    // if (data) {
    //   showAlertWithTimeout(`Register success!!`, 3000, true);
    //   setName("");
    //   setEmail("");
    //   setPassword("");
    //   setPassword2("");
    //   setTimeout(() => {
    //     togglePanel();
    //   }, 3000);
    // }
  };
  const handleChange = (e) => {};

  const Alert = () => {
    return (
      <div className="absolute top-10 animate-bounce">
        <div
          className={`rounded-xl ${typeAlert ? "bg-green-500" : "bg-red-500"}  px-4 py-4`}
        >
          <h2 className="text-lg text-white">{textAlert}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded-3xl bg-zinc-800 py-10">
      <h2 className="mx-auto flex gap-x-2 py-10 text-4xl font-bold text-[#3ecf8e]">
        Register
      </h2>
      <div className="mx-auto flex flex-col py-2">
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-[50px] w-[300px] rounded-lg   bg-zinc-700 pl-3 focus:outline-none"
        />
      </div>
      <div className="relative mx-auto flex flex-col py-2">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password1"
            className="h-[50px] w-[300px] rounded-lg  bg-zinc-700 pl-3 pr-[40px] focus:outline-none"
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
          className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-[#3ecf8e] text-zinc-800"
          onClick={verify}
        >
          Register
        </button>
      </div>
      <div className="flex w-full justify-center gap-x-2 px-8">
        <p className="">Do you already have an account?</p>
        <button className="text-[#3ecf8e] hover:underline" onClick={toggleLor}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
