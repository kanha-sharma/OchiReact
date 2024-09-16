import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/about";
import Eye from "./components/Eye"
import Featured from "./components/Featured";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <>
    <Navbar />
      <div className="w-full h-full bg-zinc-900 text-white">
        <LandingPage/>
        <Marquee />
        <About />
        <Eye />
        <Featured/>
      </div>
    </>
  );
}

export default App;
