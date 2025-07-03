export default function ProjectCard({ title, desc, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block border-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gray-900 hover:border-[#FFCC00] hover:border-2 hover:bg-gray-800 ease-in-out"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#FFCC00]">{title}</h3>
        <p className="text-gray-300 text-base">{desc}</p>
        <div className="mt-4 text-right">
          <span className="text-[#FFCC00] hover:underline">
            View Project &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
