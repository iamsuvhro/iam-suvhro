import { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import Image from "../assets/img/info.png"; // Ensure this path is correct
import { Button } from "antd";
import { useDarkMode } from "../context/DarkModeContext";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    client
      .fetch('*[_type == "project"]{title, description, image, url}')
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section>
      <div className="col-span-8">
        <p className="text-6xl mb-4 font-sans font-bold bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 bg-clip-text text-transparent">
          Projects
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card border shadow-sm rounded-lg p-4 "
            >
              <div className="flex">
                <div>
                  {" "}
                  <h3
                    className={`text-lg font-bold text-${
                      isDarkMode ? "white" : "gray-600"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-2 w-2/3 mb-3 text-${
                      isDarkMode ? "white" : "gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                <div>
                  {project.image && (
                    <img
                      src={urlFor(project.image).width(800).height(1400).url()}
                      alt={project.title}
                      // style={{ maxWidth: "100%" }}
                      className="rounded-e-2xl mt-2 -mb-5"
                    />
                  )}
                </div>
              </div>

              <Button type="primary">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
