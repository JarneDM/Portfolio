import React from "react";
// import fileIcon from "../assets/file.png";
import NavBar from "./NavBar";
// import filesData from "../data/files.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid justify-center items-center text-white text-center">
      <div className="space-y-10">
        <div>
          <h1 className="text-5xl">Hi,</h1>
          <p className="text-3xl">I'm Jarne</p>
        </div>
        <h2 className="text-2xl">Full-Stack Developer</h2>

        <p className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] text-xl">
          I like to create dynamic and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript and React.js.
        </p>
      </div>
    </div>
  );
}

export default Home;
