import { motion } from "framer-motion";
import React from "react";
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="w-full border-t-2 border-b-2 border-zinc-300 
      flex whitespace-nowrap font-semibold -tracking-[1.2rem] overflow-hidden pr-10">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease:"linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none fond-semibold uppercase">
          How are you!
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-semibold uppercase">
          How are you!
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
