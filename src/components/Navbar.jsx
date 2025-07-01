import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between text-lg font-medium text-white items-center px-8 py-4 top-0 sticky bg-transparent backdrop-blur-md">
      <div>
      <p>Ibmhndr</p>
      </div>
      <div className="flex space-x-8">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      </div>
    </div>
  );
}


export default Navbar;