import React, { useEffect, useState } from "react";
function Eye() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });
  });
  return (
    <div className="eye  w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative w-full h-full bg-cover bg-center'>
        <div className="absolute flex gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 overflow-hidden">
            <h1 className="font-semibold text-[2vw]">Play</h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-4 absolute top-1/2 left-1/2 -translate-x-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
            <h1 className="font-semibold text-[2vw]">Play</h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-4 absolute top-1/2 left-1/2 -translate-x-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
