import React from "react";
import file from "../assets/file.png";

function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      {/* desktop window */}
      <div
        className="
          bg-[#001549ff] text-white w-[90vw] max-w-[420px] sm:max-w-[520px] md:max-w-[1240px] h-[85vh] max-h-[90vh] box-border flex flex-col items-start justify-center gap-8 rounded-lg shadow-lg shadow-blue-900 p-6 border-[5px] relative overflow-auto"
      >
        <div className="flex flex-col items-center w-min space-y-10">
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-12 mb-2 filter invert brightness-0" src={file} alt="file" />
            <p>About.exe</p>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-12 mb-2 filter invert brightness-0" src={file} alt="file" />
            <span>ProjectOne.exe</span>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-12 mb-2 filter invert brightness-0" src={file} alt="file" />
            <span>ProjectTwo.exe</span>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-12 mb-2 filter invert brightness-0" src={file} alt="file" />
            <span>Contact.exe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
