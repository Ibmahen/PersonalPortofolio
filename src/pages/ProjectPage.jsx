import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Todo App",
    desc: "Simple todo list with React and local storage.",
    link: "#", 
    image: "https://placehold.co/400x200/333333/FFFFFF?text=Todo+App" 
  },
  {
    title: "Personal Portfolio",
    desc: "This website! Built with React and Tailwind CSS.",
    link: "#", 
    image: "https://placehold.co/400x200/333333/FFFFFF?text=Portfolio" 
  },
  {
    title: "E-commerce Frontend",
    desc: "A responsive e-commerce product listing page.",
    link: "#", 
    image: "https://placehold.co/400x200/333333/FFFFFF?text=E-commerce" 
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather information using a public API.",
    link: "#", 
    image: "https://placehold.co/400x200/333333/FFFFFF?text=Weather+App" 
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen flex flex-col md:flex-row px-6 py-16"> 
      <div className="container mx-auto px-4 my-10">
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-10">My Projects</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
