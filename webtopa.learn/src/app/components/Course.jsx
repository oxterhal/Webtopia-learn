import React from "react";
import Button from "./Button";

export default function Course() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[90%] flex flex-col justify-center items-center">
        <div className="w-full h-1/3 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 h-full flex justify-center items-start text-4xl md:text-5xl font-bold p-6 md:p-10 text-center md:text-left">
            <h1>Unlock Your Potential with Online HTML CSS and Wix Courses</h1>
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-start items-start p-6 md:p-10 gap-4 text-center md:text-left">
            <p className="text-lg md:text-xl">
              Learn the skills you need to build stunning websites and create a
              successful online presence.
            </p>
            <Button text="Register" />
          </div>
        </div>
        <div className="w-full h-2/3 flex justify-center items-center p-10">
          <div className="w-full h-full object-cover  bg-[url('https://www.inspicanvas.com/cdn/shop/products/SteveJobsPoster_1024x1024.jpg?v=1589911865')] bg-cover bg-center bg-no-repeat" />
        </div>
      </div>
    </div>
  );
}
