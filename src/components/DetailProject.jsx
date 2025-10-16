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
    </div>
  );
}

export default DetailProject;
