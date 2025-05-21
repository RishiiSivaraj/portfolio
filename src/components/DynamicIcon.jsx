// components/DynamicIcon.jsx
import React from "react";
import * as FaIcons from "react-icons/fa"; // Font Awesome
import * as SiIcons from "react-icons/si"; // Simple Icons
import * as VscIcons from "react-icons/vsc";
import * as BsIcons from "react-icons/bs";

const iconMap = {
  JavaScript: "SiJavascript",
  Java: "FaJava",
  TypeScript: "SiTypescript",
  Python: "SiPython",
  HTML: "FaHtml5",
  CSS: "FaCss3Alt",
  React: "FaReact",
  "Next.js": "SiNextdotjs",
  "Tailwind CSS": "SiTailwindcss",
  "Node.js": "FaNodeJs",
  Express: "SiExpress",
  Git: "FaGitAlt",
  Figma: "FaFigma",
  Vite: "SiVite",
  "VS Code": "VscVscode",
  SQL: "BsFiletypeSql",
  "Code Sandbox": "SiCodesandbox",
  "Burp Suite": "SiBurpsuite",
  "Linux OS": "FaLinux",
  "Windows OS": "FaWindows",
  Instagram: "FaInstagram",
  LinkedIn: "FaLinkedin",
  GitHub: "FaGithub",
};

const DynamicIcon = ({ name, className, size }) => {
  const iconName = iconMap[name];
  const IconComponent =
    FaIcons[iconName] ||
    SiIcons[iconName] ||
    VscIcons[iconName] ||
    BsIcons[iconName] ||
    null;

  return IconComponent ? (
    <IconComponent className={className} size={size} title={name} />
  ) : null;
};

export default DynamicIcon;
