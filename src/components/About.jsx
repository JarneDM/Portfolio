import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import filesData from "../data/files.json";

function About() {
  const location = useLocation();
  const content = filesData.find((file) => file.route === location.pathname);

  if (!content) return <h1 className="text-white text-center mt-20 text-3xl">Not found</h1>;

  return (
    <div className="p-10 space-y-8 min-w-[20rem] text-white flex flex-col items-center">
      <motion.h1
        className="text-5xl font-bold mb-8 border-b-2 border-white py-2 w-min text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {content.title}
      </motion.h1>

      <div className="space-y-6 rounded-md p-4 w-full max-w-4xl text-justify">
        {content.description.map((paragraph, idx) => (
          <motion.p
            key={idx}
            className="text-lg text-gray-200 lg:w-[40rem] md:w-[30rem] sm:w-[20rem] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * idx, duration: 0.8 }}
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/JarneDM/g, '<span class="text-blue-500 font-bold">JarneDM</span>'),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
