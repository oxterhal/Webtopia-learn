import Image from "next/image";
import Header from "../components/Header";
import Course from "../components/Course";
import Discover from "../components/Discover";
import Advantage from "../components/Advantage";
import Unlock from "../components/Unlock";
import Footer from "../components/Footer";
import Login from "./Login";
export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-screen h-36 md:h-24 bg-[#1a1a1a]"></div>
      <Course />
      <Discover />
      <Advantage />
      <Unlock />
      <Footer />
    </div>
  );
}
