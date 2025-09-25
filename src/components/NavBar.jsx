import React from "react";
// import code from "../assets/code.png";
import { Link, useLocation } from "react-router-dom";
// import filesData from "../data/files.json";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="w-screen flex absolute top-2 left-0 justify-between py-2 px-4">
      <div className="text-white flex space-x-7">
        <Link to="/">
          <button
            className={`p-1.5 rounded-md w-[5.5rem] transition cursor-pointer
              ${
                isActive("/")
                  ? "bg-blue-800 translate-x-[3px] translate-y-[3px] shadow-[0px_0px_0px_black]"
                  : "bg-[#2035F4] shadow-[-6px_6px_0px_black] hover:bg-blue-700"
              }`}
          >
            Home
          </button>
        </Link>

        <Link to="/about">
          <button
            className={`p-1.5 rounded-md w-[5.5rem] transition cursor-pointer
              ${
                isActive("/about")
                  ? "bg-blue-800 translate-x-[3px] translate-y-[3px] shadow-[0px_0px_0px_black]"
                  : "bg-[#2035F4] shadow-[-6px_6px_0px_black] hover:bg-blue-700"
              }`}
          >
            About
          </button>
        </Link>

        <Link to="/projects">
          <button
            className={`p-1.5 rounded-md w-[5.5rem] transition cursor-pointer
              ${
                isActive("/projects")
                  ? "bg-blue-800 translate-x-[3px] translate-y-[3px] shadow-[0px_0px_0px_black]"
                  : "bg-[#2035F4] shadow-[-6px_6px_0px_black] hover:bg-blue-700"
              }`}
          >
            Projects
          </button>
        </Link>

        <Link to="/contact">
          <button
            className={`p-1.5 rounded-md w-[5.5rem] transition cursor-pointer
              ${
                isActive("/contact")
                  ? "bg-blue-800 translate-x-[3px] translate-y-[3px] shadow-[0px_0px_0px_black]"
                  : "bg-[#2035F4] shadow-[-6px_6px_0px_black] hover:bg-blue-700"
              }`}
          >
            Contact
          </button>
        </Link>
      </div>
      <div className="hidden lg:grid w-auto text-white/50">
        <h2 className="text-xl">Portfolio Jarne De Meyer</h2>
        <hr className="w-full" />
      </div>
    </div>
  );
}

export default NavBar;
