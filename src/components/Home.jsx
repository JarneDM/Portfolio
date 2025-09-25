import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="grid justify-center items-center text-white text-center min-h-screen px-6">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl mb-2">Hi,</h1>
          <p className="text-3xl">
            I'm <span className="text-blue-500 font-bold">Jarne</span>
          </p>
        </motion.div>

        <motion.h2 className="text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          Full-Stack Developer
        </motion.h2>

        <motion.p
          className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] mx-auto text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I love creating dynamic and user-friendly websites, with a strong foundation in{" "}
          <span className="font-semibold">HTML, CSS, JavaScript</span> and <span className="font-semibold">React.js</span>.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
