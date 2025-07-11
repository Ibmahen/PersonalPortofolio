import logo from "../assets/logo.png";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md sticky top-0 z-20 shadow-md">
      <div className="flex justify-between md:text-lg font-medium text-white items-center px-5 md:px-10 py-5">
        <div>
          <button className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[60px] h-[50px] object-contain"
            />
          </button>
        </div>
        <div className="flex gap-5 md:gap-x-10">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Skill
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#certificates" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("certificates");
            }}
            className="hover:text-[#FFCC00] transition duration-300 ease-in-out"
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
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
