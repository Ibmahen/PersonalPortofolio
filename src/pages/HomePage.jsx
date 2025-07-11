import bg from "../assets/hero-bg-2.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="space-y-5">
        <div className="flex justify-center items-center">
          <h1 className="text-xl md:text-5xl font-bold text-white">
            Hi, my name is
            <span className="text-[#FFCC00]"> Ibmahendra Ferdiansah</span>
          </h1>
        </div>
        <div className="flex text-sm justify-center text-center items-center max-w-4xl mx-auto px-4">
          <p>
            I am a web developer. I can make website more & more interactive.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://github.com/Ibmahen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center text-white text-xl hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-9 h-9 object-contain p-2"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ibmahendraferdiansah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center text-white text-xl hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={linkedin}
              alt="Linkedin"
              className="w-9 h-9 object-contain p-2"
            />
          </a>
          <a
            href="mailto:ibmahendraf04@gmail.com"
            className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center text-white text-xl hover:border-[#FFCC00] transition duration-300"
          >
            <img
              src={email}
              alt="Email"
              className="w-9 h-9 object-contain p-2"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/files/CV-IbmahendraFerdiansah.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFCC00] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
