import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-indigo-500">Home</NavLink>
      <NavLink to="/about" className="hover:text-indigo-500">About</NavLink>
      <NavLink to="/portfolio" className="hover:text-indigo-500">Portfolio</NavLink>
      <NavLink to="/service" className="hover:text-indigo-500">Service</NavLink>
      <NavLink to="/contact" className="hover:text-indigo-500">Contact</NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <FaUserTie />
          MD. Elius
        </div>

        {/* Center */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {navLinks}
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow p-4 flex flex-col gap-3 text-center">
          {navLinks}
          <NavLink to="/contact" className="bg-indigo-600 text-white py-2 rounded">
            Hire Me
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
