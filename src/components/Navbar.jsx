import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false); // Close menu on mobile link click

  const navLinks = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `px-2 py-1 rounded hover:text-indigo-500 transition ${
            isActive ? "text-white bg-indigo-600" : "text-gray-700"
          }`
        }
        onClick={handleLinkClick}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-2 py-1 rounded hover:text-indigo-500 transition ${
            isActive ? "text-white bg-indigo-600" : "text-gray-700"
          }`
        }
        onClick={handleLinkClick}
      >
        About
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `px-2 py-1 rounded hover:text-indigo-500 transition ${
            isActive ? "text-white bg-indigo-600" : "text-gray-700"
          }`
        }
        onClick={handleLinkClick}
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/service"
        className={({ isActive }) =>
          `px-2 py-1 rounded hover:text-indigo-500 transition ${
            isActive ? "text-white bg-indigo-600" : "text-gray-700"
          }`
        }
        onClick={handleLinkClick}
      >
        Service
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-2 py-1 rounded hover:text-indigo-500 transition ${
            isActive ? "text-white bg-indigo-600" : "text-gray-700"
          }`
        }
        onClick={handleLinkClick}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <FaUserTie />
          MD. Elius
        </div>

        {/* Center */}
        <div className="hidden md:flex gap-3 font-medium">{navLinks}</div>

        {/* Right */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow p-4 flex flex-col gap-3 text-center">
          {navLinks}
          <NavLink
            to="/contact"
            className="bg-indigo-600 text-white py-2 rounded"
            onClick={handleLinkClick}
          >
            Hire Me
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
