import React from "react";
import Button from "./Button";

export default function Unlock() {
  return (
    <div className="w-screen h-[60vh] bg-gradient-to-r from-[#1a1a1a] to-[#333] text-white flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] h-full flex justify-center items-center flex-col gap-6 p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Unlock Your Web Development Potential
        </h1>
        <p className="text-center text-lg md:text-xl">
          Join our online courses and learn HTML, CSS, and Wix at your own pace.
        </p>
        <div className="flex gap-4">
          <Button text="Start"></Button>
          <Button text="Register"></Button>
        </div>
      </div>
    </div>
  );
}
