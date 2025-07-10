// import ibma from "../assets/ibma.png";
import bg from "../assets/hero-bg-2.jpg"; 

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="space-y-5">
        <div className="flex justify-center items-center">
          <h1 className="text-xl md:text-5xl font-bold text-white">
            Hi, my name is
            <span className="text-[#FFCC00]"> Ibmahendra Ferdiansah</span>
          </h1>
        </div>
        <div className="flex text-sm justify-center text-center items-center md:mx-96">
          <p>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
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
        <div className="flex items-center justify-center">
          <button className="bg-[#FFCC00] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
