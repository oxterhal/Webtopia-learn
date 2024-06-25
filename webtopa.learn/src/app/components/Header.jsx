"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen h-20 bg-[#222222] text-white flex justify-between items-center px-6 sm:px-10 border-b-[1px] border-gray-800 fixed top-0 left-0">
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/94sL75L/image.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>
      <nav className="hidden md:flex w-1/2 h-full justify-around items-center text-sm">
        <a
          href="#"
          className="hover:text-purple transition-colors duration-200"
        >
          <strong className="text-purple">#</strong> HTML Course
        </a>
        <a
          href="#"
          className="hover:text-purple transition-colors duration-200"
        >
          <strong className="text-purple">#</strong> CSS Course
        </a>
        <a
          href="#"
          className="hover:text-purple transition-colors duration-200"
        >
          <strong className="text-purple">#</strong> Wix Course
        </a>
      </nav>
      <div className="hidden md:block">
        <Button
          text="Register"
          href="/login"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors duration-200"
        />
      </div>
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#222222] flex flex-col items-center py-4 md:hidden">
          <a
            href="#"
            className="py-2 hover:text-purple transition-colors duration-200"
          >
            <strong className="text-purple">#</strong> HTML Course
          </a>
          <a
            href="#"
            className="py-2 hover:text-purple transition-colors duration-200"
          >
            <strong className="text-purple">#</strong> CSS Course
          </a>
          <a
            href="#"
            className="py-2 hover:text-purple transition-colors duration-200"
          >
            <strong className="text-purple">#</strong> Wix Course
          </a>
          <Button
            text="Register"
            href="/login"
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors duration-200"
          />
        </div>
      )}
    </header>
  );
}
