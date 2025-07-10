function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md sticky top-0 z-20 shadow-md"> {/* Mengubah z-index menjadi z-20 */}
      <div className="flex justify-between md:text-lg font-medium text-white items-center px-5 md:px-10 py-5">
        <div>
          <button className="text-xl font-bold">Ibmhndr</button>
        </div>
        <div className="flex gap-5 md:gap-x-10">
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Skill
          </a>
          <a
            href="#projects"
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;