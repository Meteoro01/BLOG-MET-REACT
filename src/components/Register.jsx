import React, { useState } from "react";
import viewTrue from "../assets/icons/viewtrue.svg";
import viewFalse from "../assets/icons/viewfalse.svg";
import Logo from "../assets/icons/logogreend.svg";
import X from "../assets/icons/x.svg";
import UserRegister from "../utils/UserRegister";
import crown from "../assets/icons/crown.svg";

const Register = ({ toggleLor, togglePanel }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState(false);
  const [fati, setFati] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  // ?estados de parametros
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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
    if (F) {
      setFati(F);
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
    if (
      userName === "" ||
      name === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      showAlertWithTimeout("Todos los campos son obligatorios", 2000);
      return;
    }

    if (userName.length < 4) {
      showAlertWithTimeout(
        "El nombre de usuario debe tener al menos 4 caracteres",
        2000,
      );
      return;
    }

    if (name.length < 4) {
      showAlertWithTimeout("El nombre debe tener al menos 4 caracteres", 2000);
      return;
    }
    const hasNumbers = /\d/;
    if (hasNumbers.test(name)) {
      showAlertWithTimeout("El nombre no puede contener números", 2000);
      return;
    }
    if (password.length < 8 || password2.length < 8) {
      showAlertWithTimeout(
        "La contraseña debe tener al menos 8 caracteres",
        2000,
      );
      return;
    }

    if (password !== password2) {
      showAlertWithTimeout("La contraseña no coincide", 2000);
      return;
    }
    const { data, error } = await UserRegister({
      name,
      userName,
      password: password,
    });
    if (error) {
      showAlertWithTimeout(error.message, 2000);
      return;
    }
    if (data) {
      console.log(data[0].name);
      if (
        data[0].name.toUpperCase().includes("FATI") ||
        data[0].user_name.toUpperCase().includes("FATI")
      ) {
        showAlertWithTimeout("Bienvenida Fatizuchi", 7000, true, true);
        setTimeout(() => {
          togglePanel(true);
        }, 7000);
      } else {
        showAlertWithTimeout("Registro exitoso", 2000, true);
        setName("");
        setUserName("");
        setPassword("");
        setPassword2("");
        setTimeout(() => {
          togglePanel(true);
        }, 3000);
      }
    }
  };

  const Alert = () => {
    return (
      <div className="absolute top-10 animate-bounce">
        {fati ? (
          <div className="bg-gold flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r  from-[#3ecf8e] to-[#2cb5e8] px-4 py-4">
            <img src={crown} className="w-10" alt="" />
            <h2 className="text-lg text-white">Bienvenida Fatizuchi</h2>
            <img src={crown} className="w-10" alt="" />
          </div>
        ) : (
          <div
            className={`rounded-xl ${typeAlert ? "bg-green-500" : "bg-red-500"}  px-4 py-4`}
          >
            <h2 className="text-lg text-white">{textAlert}</h2>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-zinc/30 absolute left-1/2 top-1/2 z-20 flex h-[100vh] w-[99vw] -translate-x-1/2 -translate-y-1/2 flex-col  items-center justify-center backdrop-blur-md">
      {showAlert ? <Alert /> : null}

      <button
        className="felx absolute right-4 top-4 items-center justify-center duration-200 ease-in md:right-10 md:top-10"
        onClick={togglePanel}
      >
        <img src={X} className="w-10 md:w-14 " alt="" />
      </button>
      <div className="flex w-[400px] flex-col gap-y-2 rounded-lg bg-zinc-800  py-6">
        <h2 className="mx-auto flex gap-x-2 py-10 text-4xl font-bold text-[#3ecf8e]">
          BLOGMET
          <img src={Logo} className="w-10" alt="" />
        </h2>
        <div className="mx-auto flex flex-col gap-y-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-zinc-700 pl-3 focus:outline-none"
          />
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-zinc-700 pl-3 focus:outline-none"
          />
        </div>
        <div className="relative mx-auto flex flex-col gap-y-2">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password1"
              className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-zinc-700 pl-3 pr-[40px] focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-0 mr-[10px] mt-[10px]"
            >
              {showPassword ? view(viewTrue) : view(viewFalse)}
            </button>
          </div>

          <label htmlFor="password" className="mr-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              id="password2"
              className="h-[50px] w-[300px] rounded-lg border-2 border-[#3ecf8e] bg-zinc-700 pl-3 pr-[40px] focus:outline-none"
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
          <button className="text-[#3ecf8e] " onClick={toggleLor}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
