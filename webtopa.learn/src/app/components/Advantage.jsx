import React from "react";
import Logo from "./Logo";

export default function Advantage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/564x/d2/4e/79/d24e794bff266dda8e3b89b68e30e312.jpg')",
            }}
            aria-label="Sukhbaatar Square, Ulaanbaatar, Mongolia"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-10 gap-10">
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6 border-l-[1px]">
            <h1 className="text-xl md:text-2xl font-bold text-justify">
              Flexible Learning Schedule{" "}
            </h1>
            <p className="text-xs md:text-base font-light text-justify">
              Learn at your own pace with our online courses. Our flexible
              learning schedule allows you to study whenever and wherever it's
              convenient for you.
            </p>
          </div>
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-justify">
              Expert Instructors{" "}
            </h1>
            <p className="text-xs md:text-base font-light text-justify">
              Gain valuable insights from industry experts who will guide you
              through the course material and provide personalized feedback on
              your progress.
            </p>
          </div>{" "}
          <div className="h-36 p-10 w-full flex justify-center items-between flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-justify">
              Community Support{" "}
            </h1>
            <p className="text-xs md:text-base font-light text-justify">
              Join a vibrant community of learners where you can connect with
              fellow students, share ideas, and get support from our dedicated
              team of instructors and staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
