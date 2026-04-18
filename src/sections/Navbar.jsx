import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a"
            onClick={onClick} 
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false); // ✅ for mobile click

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <span className="font-extrabold text-2xl tracking-wide text-white group-hover:text-purple-300 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              SB
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
            className={`nav-sidebar ${
              isOpen ? "max-h-screen py-5" : "max-h-0"
            }`}
          >
            <NavItems />
          </div>
    </header>
  );
};

export default Navbar;