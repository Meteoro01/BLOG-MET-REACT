import "./App.css";
// ?IMG-VSG-WEBP
import Loading from "./assets/icons/loading.svg";
// ?COMPONENTS
import Header from "./common/Header/Header";
import Login from "./components/Login";
import Register from "./components/Register";
// ?UTILS
import { useEffect, useState } from "react";
import Post from "./components/Post";
import Footer from "./common/Footer/Footer";
import Categori from "./components/Categori";
import supabase from "./utils/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Access from "./pages/Access";
import Home from "./pages/Home";

function App() {
  const $body = document.querySelector("body");


  async function getPost() {
    let { data: post, error } = await supabase.from("post").select("*");

    if (post) {
      setpost(post);
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header  /> */}
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
