import React from "react";
function Navbar() {
  return (
    <div className="links w-full max-h-24 bg-zinc-900 text-white flex items-center justify-between px-10 py-3 fixed z-[999]">
      <div className="text-3xl">Ochi</div>
      <ul className="flex mr-5 gap-5">
        {["Home", "About Us", "Insight", "Gallery","Contact Us"].map((item, index) => (
          <li className=" font-semibold text-white">
            <a
              key={index}
              href={item}
              className={`${
                index === 4 && "text-blue-500"
              } && ${index === 0 && "text-blue-500"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
