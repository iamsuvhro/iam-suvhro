import { Button } from "antd";
import React from "react";
import { ReactTyped as Typed } from "react-typed";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
  FaDownload,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import Image from "../assets/img/info.png";
import { useDarkMode } from "../context/DarkModeContext";

function Home() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-8">
        <p className="text-6xl font-sans font-bold bg-gradient-to-r mb-8 from-purple-400 via-pink-700 to-red-500 bg-clip-text text-transparent">
          <Typed
            strings={[
              "Hi! I'm Suvhradip..",
              "A Software Engineer.",
              "A Full-Stack Developer.",
              "Innovating with Python, React & AI",
              "Building Scalable Solutions.",
            ]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </p>
        <p
          className={`mt-4 w-2/3 text-lg font-extralight text-${
            isDarkMode ? "white" : "gray-600"
          }`}
        >
          I'm a passionate Software Engineer at{" "}
          <strong className="text-purple-600">Acuver Consulting</strong>,
          crafting innovative full-stack solutions. With expertise in{" "}
          <strong>Python</strong>, <strong>React</strong>,{" "}
          <strong>Django</strong>, <strong>Docker</strong>, <strong>AWS</strong>
          , and <strong>Machine Learning</strong>, I build scalable systems like{" "}
          <strong>AEKYAM</strong> and <strong>Praas</strong>. My work on
          projects like <strong>LinkShortener</strong> showcases thread-safe
          backend development using Flask and SQLite. I thrive on solving
          complex problems, leveraging cutting-edge technologies, and driving
          digital transformation for global clients.
        </p>
        <div className="mt-6 flex gap-x-6 text-3xl text-gray-600">
          <FaPython
            title="Python"
            className="hover:text-blue-500 transition-colors"
          />
          <FaReact
            title="React"
            className="hover:text-cyan-500 transition-colors"
          />
          <FaDocker
            title="Docker"
            className="hover:text-blue-600 transition-colors"
          />
          <FaAws
            title="AWS"
            className="hover:text-orange-500 transition-colors"
          />
          <FaGithub
            title="Machine Learning"
            className="hover:text-purple-500 transition-colors"
          />
        </div>
        <div className="mt-6 flex gap-x-4 items-center">
          <Button
            className="bg-black hover:bg-gray-800 mt-3 flex items-center gap-x-2"
            type="primary"
            icon={<FaPhone />}
          >
            Book a Call
          </Button>
          <a
            href="/path/to/your-cv.pdf" // Replace with actual CV path
            download
            className="mt-4 flex items-center gap-x-2 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
      <div className="col-span-4 -ml-40">
        <div style={{ width: "500px", height: "auto" }}>
          <img
            src={Image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full mr-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
