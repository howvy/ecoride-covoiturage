import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-smooth fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Eco<span className="text-secondary">Ride</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-secondary transition-all duration-300">Accueil</Link>
          </li>
          <li>
            <Link to="/covoiturages" className="hover:text-secondary transition-all duration-300">Covoiturages</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-secondary transition-all duration-300">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="bg-secondary text-dark px-4 py-2 rounded-xl hover:bg-yellow-500 transition-all duration-300">
              Connexion
            </Link>
          </li>
        </ul>

        {/* Menu Burger (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-primary p-5 space-y-3 text-lg flex flex-col items-center shadow-lg rounded-b-xl"
        >
          <li>
            <Link to="/" className="block hover:text-secondary transition-all duration-300" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/covoiturages" className="block hover:text-secondary transition-all duration-300" onClick={() => setIsOpen(false)}>
              Covoiturages
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-secondary transition-all duration-300" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="bg-secondary text-dark px-4 py-2 rounded-xl hover:bg-yellow-500 transition-all duration-300 block" onClick={() => setIsOpen(false)}>
              Connexion
            </Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
