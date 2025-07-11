import React from "react";
import SkillCard from "../components/SkillCard";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import nodejs from "../assets/tech/nodejs.png";
import java from "../assets/tech/java.png";
import tailwind from "../assets/tech/tailwind.png";
import github from "../assets/tech/github.png";
import php from "../assets/tech/php.png";
import react from "../assets/tech/react.png";
import mysql from "../assets/tech/mysql.png";
import vscode from "../assets/tech/vscode.png";
import mongodb from "../assets/tech/monggodb.png";
import postgresql from "../assets/tech/postgresql.png";
import postman from "../assets/tech/postman.png";

// Data keahlian Anda
const skillsData = {
  Programming: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Java",
    "Tailwind CSS",
    "Node.js",
    "PHP"
  ],
  "Tools & Databases": [
    "VS Code",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Postman",
    "GitHub"
  ],
};

const skillImages = {
  "HTML5": html,
  "CSS3": css,
  "JavaScript" : js,
  "Node.js": nodejs,
  "Java": java,
  "Tailwind CSS": tailwind,
  "PHP" : php,
  "GitHub" : github,
  "React.js" : react,
  "VS Code" : vscode,
  "MySQL" : mysql,
  "PostgreSQL" : postgresql,
  "MongoDB" : mongodb,
  "Postman" : postman
};

export default function SkillPage() {
  return (
    <section
      id="skills"
      className="flex flex-col px-6 py-16 text-white"
    >
      <div className="container px-4"> 
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-10 my-15">
          Skills
        </h2>

        {/* Programming */}
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#FFCC00]">
          Programming
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {skillsData["Programming"].map((skill, idx) => (
            <SkillCard
              key={idx}
              category="Programming"
              name={skill}
              iconPlaceholder={skillImages[skill]}
            />
          ))}
        </div>

        {/* Tools & Databases */}
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#FFCC00]">
          Tools & Databases
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {skillsData["Tools & Databases"].map((skill, idx) => (
            <SkillCard
              key={idx}
              category="Tools & Databases"
              name={skill}
              iconPlaceholder={skillImages[skill]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}