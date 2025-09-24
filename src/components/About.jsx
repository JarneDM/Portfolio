import { useLocation } from "react-router-dom";
import filesData from "../data/files.json";

function About() {
  const location = useLocation();
  const content = filesData.find((file) => file.route === location.pathname);

  if (!content) return <h1>Not found</h1>;

  return (
    <div className="p-10 space-y-4 min-w-[20rem]">
      <h1 className="text-5xl mb-10 border-b-[2px] border-b-white py-1 w-min">{content.title}</h1>
      <div className="shadow-sm shadow-blue-400 space-y-4 rounded-md p-2 w-min min-w-[20rem] text-justify">
        {content.description.map((description, idx) => (
          <p className="lg:w-[40rem] md:w-[30rem] sm:w-[20rem]" key={idx}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default About;
