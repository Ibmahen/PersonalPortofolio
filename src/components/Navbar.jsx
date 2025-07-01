function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between text-lg font-medium text-white items-center px-8 py-4 top-0 sticky bg-transparent backdrop-blur-md">
      <div>
        <p>Ibmhndr</p>
      </div>
      <div className="flex space-x-8">
        <a href="#home" onClick={() => scrollToSection('home')}>
          Home
        </a>
        <a href="#projects" onClick={() => scrollToSection('projects')}>
          Projects
        </a>
        <a href="#about" onClick={() => scrollToSection('about')}>
          About
        </a>
      </div>
    </div>
  );
}

export default Navbar;