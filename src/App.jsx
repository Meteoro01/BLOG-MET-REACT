import "./App.css";
// ?IMG-VSG-WEBP
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const [pnl, setpnl] = useState(true);
  const [lor, setlor] = useState(false);
  const $body = document.querySelector("body");

  const [post, setpost] = useState([]);

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


  const togglePanel = () => {
    setpnl(!pnl);
    // setlor(true);
    if (pnl) {
      $body.style.overflow = "hidden";
    } else {
      $body.style.overflow = "auto";
    }
  };

  const toggleLor = () => {
    setlor(!lor);
  };

  return (
    <>
      <Header togglePanel={togglePanel} />
      {pnl ? (
        <></>
      ) : lor ? (
        <Login toggleLor={toggleLor} togglePanel={togglePanel} />
      ) : (
        <Register toggleLor={toggleLor} togglePanel={togglePanel} />
      )}
      <div className="mx-auto grid w-10/12 gap-x-20 gap-y-14 md:grid-cols-2">
        {/* <Categori /> */}
        {
          post? post.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              user_name={post.user_name}
              date_creation={post.date_creation}
              description={post.description}
            />
          )) : <></>
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
