import React from "react";
import code from "../assets/code.png";
import { Link, useLocation } from "react-router-dom";
import filesData from "../data/files.json";

function TopBar({ file }) {
  const location = useLocation();
  return (
    <div className="w-full flex bg-blue-600/50 rounded-b-lg m-0 shadow-md shadow-blue-600 justify-between py-2 px-3">
      <Link to="/" className="flex items-center space-x-2 relative group">
        <img className="h-[1.5rem] invert" src={code} alt="" />
        <p>
          {location.pathname === "/"
            ? "C:/User/Desktop/Portfolio"
            : `C:/User/Desktop/Portfolio/${file ? file.title : filesData.find((f) => f.route === location.pathname)?.title}.txt`}
          <span className="absolute left-0 -bottom-2 h-[5px] rounded-lg w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </p>
        <p></p>
      </Link>
      <div className="flex space-x-3 justify-center items-center">
        <p className="bg-white rounded-[50%] h-[1rem] w-[1rem]"></p>
        <p className="bg-white rounded-[50%] h-[1rem] w-[1rem]"></p>
        <p className="bg-white rounded-[50%] h-[1rem] w-[1rem]"></p>
      </div>
    </div>
  );
}

export default TopBar;
