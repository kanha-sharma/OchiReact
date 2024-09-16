import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-[10vw] px-10 ">
      {["We Create", "Eye Openig", "Presentation"].map((item, index) => {
        return (
          <div className="masker">
            <div className="w-fit flex items-center font-semibold -tracking-[.5rem]">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                  className="w-[9vw] h-[6vw] bg-red-500 relative top-[.5vw] rounded-md"
                ></motion.div>
              )}
              <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7.5vw]">
                {item}
              </h1>
            </div>
          </div>
        );
      })}
      <div className="border-t-[1px] border-zinc-700 w-full mt-10 flex justify-between items-center p-5">
        {["For public and private companies", "From the pitch to IPO"].map(
          (item, index) => {
            return <div className="font-semibold">{item}</div>;
          }
        )}
        <div className="button flex items-center justify-center gap-2">
          <button className="z-10 uppercase border-zinc-600 px-10 border-[1px] rounded-[20px] px-8 py-2 hover:border-none hover:font-semibold">
            Start Project
          </button>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-700 rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
