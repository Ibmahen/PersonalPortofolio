export default function Home() {
  return (
    <section id="home" className="flex min-h-screen px-4 justify-center items-center">
      {/* Kiri: Konten Teks */}
      <div className="flex flex-col items-start flex-1 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-[#FFCC00]">Ibmahendra Ferdiansah</span>
        </h1>
        <h2 className="text-xl text-white mb-4">
          I'm a Web Developer & Tech Enthusiast
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Passionate about building modern, responsive, and user-friendly web applications. 
          Experienced in JavaScript, React, and Tailwind CSS. Always eager to learn new technologies and collaborate on exciting projects.
        </p>
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
        <button className="bg-[#FFCC00] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition mb-2">
          Download CV
        </button>
      </div>
      {/* Kanan: Foto Profil */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="" // Ganti dengan foto profilmu
          alt="Ibmahendra Ferdiansah"
          className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-[#FFCC00]"
        />
      </div>
    </section>
  );
}