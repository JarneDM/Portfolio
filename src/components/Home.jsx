import React from "react";
import file from "../assets/file.png";

function Home() {
  return (
    <div>
      {/* desktop window */}
      <div className="bg-[#001549ff] text-white w-[90rem] h-[50rem] flex justify-start items-center rounded-lg shadow-lg shadow-blue-900 p-10 border-[5px] relative">
        <div className="flex flex-col justify-between items-center space-y-10 w-auto">
          {/* About */}
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[3rem] filter invert brightness-0 mb-2" src={file} alt="" />
            <p>About.exe</p>
          </div>
          {/* Projects */}
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[3rem] filter invert brightness-0 mb-2" src={file} alt="" />
            <span>ProjectOne.exe</span>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[3rem] filter invert brightness-0 mb-2" src={file} alt="" />
            <span>ProjectTwo.exe</span>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[3rem] filter invert brightness-0 mb-2" src={file} alt="" />
            <span>ProjectTwo.exe</span>
          </div>
          {/* Contact */}
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[3rem] filter invert brightness-0 mb-2" src={file} alt="" />
            <span>Contact.exe</span>
          </div>
        </div>
        {/* overlay */}
        <div className="bg-white h-[35rem] w-[55rem] absolute right-[15%] rounded-lg flex justify-center items-center">
          <h1 className="text-black">Overlay File</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
