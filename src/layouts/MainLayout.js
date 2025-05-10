import React from "react";
import { Layout, Switch, Tabs, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  HomeOutlined,
  ProjectOutlined,
  ContactsOutlined,
  ReadOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Project";
import BlogDetail from "../pages/BlogDetail";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import { useDarkMode } from "../context/DarkModeContext"; // Import the custom hook

function MainLayout() {
  const { Header } = Layout;
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  const getActiveKey = () => {
    if (location.pathname.startsWith("/project")) return "project";
    if (location.pathname.startsWith("/experience")) return "experience";
    if (location.pathname.startsWith("/contactus")) return "contactus";
    if (location.pathname.startsWith("/blog")) return "blog";
    return "home";
  };

  const handleTabChange = (key) => {
    const pathMap = {
      home: "/",
      project: "/project",
      experience: "/experience",
      contactus: "/contactus",
      blog: "/blog",
    };
    navigate(pathMap[key]);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-white"
      } flex flex-col min-h-screen`}
    >
      <Header className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex items-center justify-between">
          <p
            className={`text-${
              isDarkMode ? "white" : "gray"
            } font-thin font-sans text-4xl mt-12`}
          >
            My portfolio
          </p>
          <div className="flex gap-x-2">
            {/* <p className={`text-${isDarkMode ? "white" : "gray"} `}>Mode</p> */}
            <Tooltip title={isDarkMode ? "Switch to light" : "Switch to dark"}>
              <Switch
                onChange={toggleDarkMode}
                className="mt-5"
                style={{ transform: "scale(1.3)", transformOrigin: "left" }}
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
              />
            </Tooltip>
          </div>
        </div>
      </Header>

      <div
        className={`body mt-12 flex-grow ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <Tabs
          activeKey={getActiveKey()}
          onChange={handleTabChange}
          tabPosition="left"
          className="px-16 py-12 w-full"
          style={{ minHeight: "100%" }}
          items={[
            {
              label: (
                <span
                  className={
                    isDarkMode
                      ? getActiveKey() === "home"
                        ? "text-purple-500"
                        : "text-white"
                      : ""
                  }
                >
                  <HomeOutlined /> Home
                </span>
              ),
              key: "home",
              children: location.pathname === "/" && <Home />,
            },
            {
              label: (
                <span
                  className={
                    isDarkMode
                      ? getActiveKey() === "project"
                        ? "text-purple-500"
                        : "text-white"
                      : ""
                  }
                >
                  <ProjectOutlined /> Projects
                </span>
              ),
              key: "project",
              children: location.pathname.startsWith("/project") && (
                <Projects />
              ),
            },
            {
              label: (
                <span
                  className={
                    isDarkMode
                      ? getActiveKey() === "experience"
                        ? "text-purple-500"
                        : "text-white"
                      : ""
                  }
                >
                  <InfoCircleOutlined /> Experience
                </span>
              ),
              key: "experience",
              children: location.pathname.startsWith("/experience") && (
                <Experience />
              ),
            },
            {
              label: (
                <span
                  className={
                    isDarkMode
                      ? getActiveKey() === "blog"
                        ? "text-purple-500"
                        : "text-white"
                      : ""
                  }
                >
                  <ReadOutlined /> Blog
                </span>
              ),
              key: "blog",
              children: (
                <Routes>
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                </Routes>
              ),
            },
            {
              label: (
                <span
                  className={
                    isDarkMode
                      ? getActiveKey() === "contactus"
                        ? "text-purple-500"
                        : "text-white"
                      : ""
                  }
                >
                  <ContactsOutlined /> Contact Us
                </span>
              ),
              key: "contactus",
              children: location.pathname.startsWith("/contactus") && (
                <ContactUs />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default MainLayout;
