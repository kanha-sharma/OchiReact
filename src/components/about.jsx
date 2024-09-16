import React from "react";

function about() {
  return (
    <div className="w-full bg-[#CDEA68] text-black p-10">
      <h1 className="text-[3.5vw] leading-[2.5rem] tracking-tight font-regular">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        voluptates quaerat sint obcaecati iusto error quis doloribus eligendi
        quae cumque!
      </h1>
      <div className="border-t-[1px] border-[#a1b562] w-full mt-20 flex">
        <div className="w-1/2">
        <h1 className="mt-4 mb-2 text-[2.5vw] font-semibold">Our approach:</h1>
        <button className="flex items-center gap-5 w-32 px-3 py-2 bg-zinc-900 text-white uppercase rounded-3xl">Read me
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#cdea99] mt-4 rounded-[1vw]"></div>
      </div>
    </div>
  );
}

export default about;
