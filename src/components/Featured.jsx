import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(),useAnimation()]
  const handleHover = (index)=>{
   cards[index].start({y:0})
  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className="w-full h-full">
      <div className="w-full h-[30vh] pt-[4vw] pl-[4vw] text-[4vw] border-b-[1px] border-zinc-800">
        <h1 className="">Featured projects</h1>
      </div>
      <div className="w-full h-[80vh] mt-3 flex gap-5 p-5">
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className=" flex items-center justify-center border-2 border-zinc-800 w-1/2 h-[75vh] rounded-2xl relative">
          <div className="w-[40vw] h-[70vh] absolute flex items-center justify-center p-12">
            <img
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
            <h1 className="absolute left-full text-[4vw] uppercase font-semibold leading-none flex overflow-hidden">
              {"fyde".split("").map((items, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.45, 0, 0.55, 1],delay:index*.02}} className="inline-block">{items}</motion.span>
              ))}
            </h1>
          </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="flex items-center justify-center border-2 border-zinc-800 w-1/2 h-[75vh] rounded-2xl relative">
          <div className="w-[40vw] h-[70vh] flex items-center justify-center p-12">
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
            <h1 className="flex absolute right-[93%] text-[4vw] uppercase font-semibold leading-none overflow-hidden">
              {"vise".split("").map((items, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.45, 0, 0.55, 1],delay:index*.02}} className="inline-block">{items}</motion.span>
              ))}
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
