import { useParams } from "react-router-dom";
import filesData from "../data/files.json";

function DetailProject() {
  const { id } = useParams();
  const project = filesData.find((file) => file.id === id);

  if (!project) return <h1>Not found</h1>;

  return (
    <div className="p-10">
      <h1 className="text-2xl">{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

export default DetailProject;
