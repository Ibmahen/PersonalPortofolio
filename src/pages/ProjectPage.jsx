import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Todo App",
    desc: "Simple todo list with React",
    link: "#",
    image: "/todo.png"
  },
  {
    title: "Portfolio",
    desc: "This website!",
    link: "#",
    image: "/portfolio.png"
  },
];

export default function ProjectsPage() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-[#FFCC00]">My Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
