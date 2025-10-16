import React from "react";
import { projects } from "../data/projectData.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-8 text-white">Projects</h1>

      <div className="relative z-10 p-8 min-w-[20rem] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.route}
            className="bg-blue-700/80 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <img src={project.image} alt={project.title} className="w-64 h-40 object-cover rounded-lg mb-4" />
            <div className="flex flex-wrap gap-2 justify-center">
              {project.stack.map((s, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-200 text-gray-800 rounded font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
