import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import DetailProject from "./components/DetailProject.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="bg-[#080186] min-h-screen w-full grid justify-center items-center p-6">
      <NavBar />
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
  );
}

export default App;
