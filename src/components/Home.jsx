import React from "react";
import fileIcon from "../assets/file.png";
import TopBar from "./TopBar";
import filesData from "../data/files.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-4 flex-1 overflow-auto">
        {filesData.map((file) => (
          <>
            <div key={file.id} className="hidden">
              <TopBar file={file} />
            </div>
            <Link key={file.id} to={file.route} className="flex flex-col justify-center items-center p-2 w-[10rem] cursor-pointer">
              <img className="h-12 mb-2 filter invert brightness-0" src={fileIcon} alt={file.title} />
              <p>{file.title}.txt</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
