import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";

function DetailProject() {
  const { id } = useParams();
  const project = (projectData.projects || projectData).find((project) => String(project.id) === String(id));

  if (!project) return <h1>Not found</h1>;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-white border-b-2 border-blue-500 pb-2">{project.title}</h1>

      <p className="text-gray-200 text-lg leading-relaxed">{project.description}</p>

      <div className="flex space-x-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-colors duration-300"
          >
            Live Demo
          </a>
        )}
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-colors duration-300"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}

export default DetailProject;
