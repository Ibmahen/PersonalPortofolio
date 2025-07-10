import ProjectCard from "../components/ProjectCard";
import disney from "../assets/projects/disney.png";
import mpl from "../assets/projects/mpl.png";
import portofolio from "../assets/projects/porto.png";
import project4 from "../assets/projects/project4.png"

const projects = [
  {
    title: "Disney Clone",
    desc: "Sistem Kloning UI Layanan Streaming dengan React dan TMDB API.",
    link: "https://disney-clonee.vercel.app/", 
    image: disney
  },
  {
    title: "Personal Portfolio",
    desc: "Website Portofolio Pribadi dengan React dan Tailwind CSS",
    link: "#", 
    image: portofolio 
  },
  {
    title: "MPL Indonesia Season 13",
    desc: "Situs Web Informasi MPL Indonesia Musim 13 dengan HTML dan CSS.",
    link: "https://ibmahen.github.io/Website-MPL", 
    image: mpl
  },
  {
    title: "CRUD Book",
    desc: "Sistem CRUD Buku dengan PHP/MySQL dan Kontrol Akses Pengguna.",
    link: "https://mybooks.kesug.com", 
    image: project4 
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen flex flex-col md:flex-row bg-[#0a101e] px-6 py-16"> 
      <div className="container mx-auto px-4 my-10">
        <h2 className="text-5xl font-bold text-[#FFCC00] text-center mb-10">Projects</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
