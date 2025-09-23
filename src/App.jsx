import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import DetailProject from "./components/DetailProject.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import TopBar from "./components/TopBar.jsx";

function App() {
  return (
    <div className="bg-[#F1F5F9] dark:bg-[#0F172A] min-h-screen w-full flex justify-center items-center p-6">
      <div
        className="
          bg-[#001549ff] text-white
          w-[90vw] max-w-[1240px]
          h-[85vh] max-h-[90vh]
          flex flex-col
          rounded-lg shadow-lg shadow-blue-900 border-[5px]
          relative overflow-hidden
        "
      >
        <TopBar />

        <div className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<DetailProject />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
