import { Timeline } from "antd";
import React from "react";
import Image from "../assets/img/info.png"; // Ensure this path is correct
import { useDarkMode } from "../context/DarkModeContext";

function Experience() {
  const { isDarkMode } = useDarkMode();
  const items = [
    {
      color: "green",
      children: (
        <>
          <div className="w-2/3 mb-6">
            <div className="flex gap-x-2">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">
                  Acuver Consulting
                </span>{" "}
                <span className="text-gray-600 text-sm">
                  - Software Engineer
                </span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Jan 2023 - Present, 3yr)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Designed and developed <strong>AEKYAM</strong>, an iPaaS
                product, with a dynamic React dashboard for advanced workflow
                analytics, enhancing operational efficiency.
              </p>
              <p className={`text-${isDarkMode && "white"}`}>
                ● Enhanced <strong>Cuebook Technologies</strong>, an autonomous
                monitoring tool, using Django, Python, Docker, Kafka, Druid,
                JSON, Prophet, and ML for improved data forecasting and
                analytics.
              </p>
              <p className={`text-${isDarkMode && "white"}`}>
                ● Built a scalable ETL process for <strong>Cuebook</strong>,
                optimizing data loading efficiency.
              </p>
              <p className={`text-${isDarkMode && "white"}`}>
                ● Developed <strong>Praas</strong>, a SaaS solution for PDF
                generation using JSON and Jinja templates, streamlining
                processes for finance clients.
              </p>
            </div>

            <div className="flex gap-x-2 mt-4">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">
                  Acuver Consulting
                </span>{" "}
                <span className="text-gray-600 text-sm">
                  - Associate Software Engineer
                </span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Apr 2022 - Jan 2023, 10 mos)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Contributed to end-to-end product development for Retail, CG,
                and Logistics clients, enabling business agility and digital
                transformation for Fortune 500 companies using REST APIs and
                React.js.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      color: "green",
      children: (
        <>
          <div className="w-2/3 mb-6">
            <div className="flex gap-x-2">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">Cuebook</span>{" "}
                <span className="text-gray-600 text-sm">- Data Engineer</span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Jan 2022 - Apr 2022, 4 mos)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Built AI-driven features for <strong>Cuebook</strong>’s
                product stack, solving backend, frontend, and analytics
                challenges using REST APIs and React.js.
              </p>
              <p className={`text-${isDarkMode && "white"}`}>
                ● Experimented with scalable components to enhance efficiency
                and reliability of the AI stack.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      color: "green",
      children: (
        <>
          <div className="w-2/3 mb-6">
            <div className="flex gap-x-2">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">
                  Seven Media Design
                </span>{" "}
                <span className="text-gray-600 text-sm">
                  - Backend Engineer
                </span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Apr 2021 - Jan 2022, 1 yr 7 mos)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Developed business services for a US-based client using PHP
                and Django REST Framework, ensuring robust backend
                functionality.
              </p>
            </div>

            <div className="flex gap-x-2 mt-4">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">
                  Seven Media Design
                </span>{" "}
                <span className="text-gray-600 text-sm">
                  - Frontend Engineer
                </span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Jul 2020 - Apr 2021, 10 mos)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Delivered multiple client products using HTML, CSS,
                JavaScript, PHP, SQL, and Python, managing end-to-end frontend
                development.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      color: "green",
      children: (
        <>
          <div className="w-2/3 mb-6">
            <div className="flex gap-x-2">
              <p className="text-xl font-semibold">
                <span className="font-bold text-purple-600">IISER Kolkata</span>{" "}
                <span className="text-gray-600 text-sm">- Research Intern</span>
              </p>
              <p className="ml-4 mt-1 text-gray-600">
                (Sep 2019 - Feb 2020, 6 mos)
              </p>
            </div>
            <div className="description mt-1">
              <p className={`text-${isDarkMode && "white"}`}>
                ● Conducted research in Machine Learning and Deep Learning,
                applying advanced techniques to solve complex problems.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-8">
        <p className="text-6xl mb-4 font-sans font-bold bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 bg-clip-text text-transparent">
          Experience
        </p>

        <div className="mt-10">
          <Timeline items={items} />
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

export default Experience;
