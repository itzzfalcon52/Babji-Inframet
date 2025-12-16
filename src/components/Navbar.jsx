import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({
  variant = "transparent", // "transparent" | "solid"
  position = "absolute", // "absolute" | "fixed" | "sticky"
}) {
  const [open, setOpen] = useState(false);

  const baseNav = "top-0 left-0 w-full z-50 transition-all duration-300";

  const variants = {
    transparent: "bg-transparent text-white",
    solid: "bg-white text-slate-900 shadow-md",
  };

  const positions = {
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`${positions[position]} ${baseNav} ${variants[variant]}`}>
      {/* NAV CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src="/logo-1.png"
            alt="Babji Inframet"
            className="h-10 w-10 md:h-14 md:w-14"
          />
          <span className="font-semibold text-lg md:text-2xl">
            BABJI INFRAMET
          </span>
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            Our Products
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
          >
            Contact Us
          </NavLink>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "h-100" : "max-h-0"
        }`}
      >
        <div className="bg-white text-slate-900 px-6 py-6 space-y-6 shadow-md">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="block text-center font-medium hover:text-green-700"
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={closeMenu}
            className="block text-center font-medium hover:text-green-700"
          >
            About Us
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
            className="block text-center font-medium hover:text-green-700"
          >
            Our Products
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block text-center bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
