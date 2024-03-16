import React from "react";

const Post = ({ id_post,title, user_name, date_creation, description }) => {
  const dateObject = new Date(date_creation);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div key={id_post} className="flex col-span-2 lg:col-span-1 cursor-pointer flex-col justify-center rounded-xl bg-zinc-800 py-2 shadow transition duration-300 ease-in-out hover:scale-110 hover:shadow-[#3ecf8e]">
      <div className=" z-10 mx-auto -mt-6 rotate-[5deg] rounded-lg border  border-[#3ecf8e] bg-[#3ecf8e07] px-8 py-2 ">
        <h2>Leer</h2>
      </div>
      <h1 className=" p-10 py-2 text-xl md:text-3xl font-bold uppercase text-[#3ecf8e]">
        {title}
      </h1>
      <p className="px-6 md:px-8 py-4 text-sm md:text-lg text-justify">{description}</p>
      <div className="flex justify-around py-4  ">
        <h2 className="font-semibold">
          Author: <span className="text-[#3ecf8e]">{user_name}</span>
        </h2>
        <h3 className="font-semibold">{formattedDate}</h3>
      </div>
    </div>
  );
};

export default Post;
