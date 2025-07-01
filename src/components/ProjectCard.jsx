export default function ProjectCard({ title, desc, link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className=" border border-[#FFCC00] rounded-lg overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </a>
  );
}
