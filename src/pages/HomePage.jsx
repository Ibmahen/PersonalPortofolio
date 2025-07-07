import ibma from "../assets/ibma.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-16"
    >
      <div className="md:w-1/2 flex flex-col items-start md:items-center md:text-left mb-8 md:mb-0 md:pr-10 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8 ml-40">
          Hi, my name is <br />
          <span className="text-[#FFCC00]">Ibmahendra Ferdiansah</span> <br />
          Welcome to my <br />
          Portofolio Website
        </h1>
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFCC00] hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFCC00] hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="text-[#FFCC00] hover:underline"
          >
            Email
          </a>
        </div>
        <button className="bg-[#FFCC00] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300">
          Download CV
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-96 h-120 rounded-[10%] overflow-hidden shadow-lg">
          <img
            src={ibma}
            alt="ibmahendra ferdiansah"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
