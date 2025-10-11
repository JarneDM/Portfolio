import React from "react";
import { projects } from "../data/projectData.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-8 text-white">Projects</h1>
      <div className="p-8 min-w-[20rem] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            to={project.route}
            key={project.id}
            className="border-2 border-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div
              key={project.id}
              className="bg-blue-800 rounded-lg h-[25rem] items-center shadow-lg shadow-black p-6 flex flex-col justify-between w-80"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="mt-4 w-full flex justify-center p-2">
                <img src={project.image} alt={project.title} className="w-64 h-40 object-cover rounded-lg" />
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {project.stack.map((s, idx) => (
                  <span key={idx} className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-1.5 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
