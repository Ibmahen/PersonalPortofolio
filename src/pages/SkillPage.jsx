import React from 'react';
import SkillCard from '../components/SkillCard';

// Data keahlian Anda
const skillsData = {
  "Programming": [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Laravel", "Tailwind CSS", "Node.js (Basic)", "RESTful APIs", "Git/GitHub"
  ],
  "Tools & Databases": [ // Mengubah nama kategori agar lebih sesuai
    "VS Code", "NPM/Yarn", "Webpack/Vite", "Firebase (Basic)", "MySQL", "PostgreSQL"
  ]
};

export default function SkillPage() {
  return (
    <section id="skills" className="min-h-screen flex flex-col md:flex-row px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container px-4 mx-10">
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-10 my-15">My Skills</h2>
        
        {/* Programming */}
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#FFCC00]">Programming</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
          {skillsData["Programming"].map((skill, idx) => (
            <SkillCard key={idx} category="Web Development" skills={[skill]} />
          ))}
        </div>

        {/* Tools & Databases */}
        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#FFCC00]">Tools & Databases</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {skillsData["Tools & Databases"].map((skill, idx) => (
            <SkillCard key={idx} category="Tools & Databases" skills={[skill]} />
          ))}
        </div>
      </div>
    </section>
  );
}
