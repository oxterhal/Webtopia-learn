import React from "react";
import Button from "./Button";
export default function Footer() {
  return (
    <div
      className="w-screen h-80 bg-[#1a1a1a] text-white flex justify-around items-center border-b-[1px] border-[#444444]

"
    >
      <div>
        <img src="https://i.ibb.co/94sL75L/image.png" className="h-10 w-auto" />
      </div>
      <div className="w-1/3 h-full flex justify-between items-center text-sm">
        <p>
          <strong className="text-purple">#</strong> HTML Course
        </p>
        <p>
          <strong className="text-purple">#</strong> CSS Course
        </p>
        <p>
          <strong className="text-purple">#</strong> Wix Course
        </p>
      </div>
      <Button text="Register" />{" "}
    </div>
  );
}
