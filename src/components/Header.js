import React, { useState } from "react";
import { Flex, Layout, Menu, Switch } from "antd";
import {
  InfoCircleOutlined,
  HomeOutlined,
  ProjectOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

function Header() {
  const { Header } = Layout;
  const [mode, setmode] = useState("light");
  const items = [
    {
      label: "Home",
      key: "mail",
      icon: <HomeOutlined />,
    },
    {
      label: "Project",
      key: "app",
      icon: <ProjectOutlined />,
    },
    {
      label: "About Us",
      key: "aboutus",
      icon: <InfoCircleOutlined />,
    },
    {
      label: "Contact Us",
      key: "contactus",
      icon: <ContactsOutlined />,
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleModeChange = () => {
    if (mode === "dark") {
      setmode("light");
    } else {
      setmode("dark");
    }
  };

  return (
    <div>
      <Header className={`bg-${mode === "dark" ? "black" : "white"}`}>
        <div className="flex">
          <p
            className={`text-${
              mode === "dark" ? "white" : "gray"
            } font-thin font-sans -ml-2 mr-6 text-lg mt-4`}
          >
            Suvhradip Ghosh
          </p>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="p-0 m-0"
            theme={mode}
            style={{
              border: "none",
            }}
          />

          <div className="">
            <div className="absolute top-0 right-0 flex gap-x-2 mr-6">
              <p className={`text-${mode === "dark" ? "white" : "gray"} `}>
                Dark
              </p>
              <Switch onChange={handleModeChange} className="mt-5" />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Header;
