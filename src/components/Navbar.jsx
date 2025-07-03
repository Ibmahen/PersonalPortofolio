function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md sticky top-0 z-10 shadow-md">
      <div className="flex justify-between text-lg font-medium text-white items-center px-10 py-5">
        <div>
          <p className="text-xl font-bold ml-5">Ibmhndr</p>
        </div>
        <div className="flex space-x-12 mr-15">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
