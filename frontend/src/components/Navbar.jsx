import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out-expo
      ${scrolled 
        ? "bg-dark/90 backdrop-blur-md shadow-smooth py-1" 
        : "bg-gradient-to-r from-primary/95 to-primary/85 py-1.5"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 h-12">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center group h-full"
        >
          <Leaf className="text-secondary mr-1.5 group-hover:rotate-12 transition-transform duration-300" size={20} />
          <span className="text-lg md:text-xl font-extrabold tracking-tight">
            Eco<span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-yellow-300">Ride</span>
          </span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-7 h-full">
          <li className="h-full flex items-center">
            <Link 
              to="/" 
              className="text-light/90 hover:text-secondary relative px-1 py-1 flex items-center h-full text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              Accueil
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link 
              to="/covoiturages" 
              className="text-light/90 hover:text-secondary relative px-1 py-1 flex items-center h-full text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              Covoiturages
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link 
              to="/contact" 
              className="text-light/90 hover:text-secondary relative px-1 py-1 flex items-center h-full text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-center ml-2">
            <Link 
              to="/login" 
              className="group bg-secondary/90 hover:bg-secondary text-dark font-medium px-3.5 py-1.5 rounded-lg text-sm transition-all duration-300 flex items-center"
            >
              Connexion
              <ChevronRight className="ml-0.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
            </Link>
          </li>
        </ul>

        {/* Menu Burger (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden bg-primary/30 p-1.5 rounded-lg text-light hover:bg-primary/50 transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.ul
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="bg-gradient-to-b from-primary/95 to-dark/95 p-4 space-y-3 text-base flex flex-col items-center"
            >
              {[
                { to: "/", text: "Accueil" },
                { to: "/covoiturages", text: "Covoiturages" },
                { to: "/contact", text: "Contact" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link 
                    to={item.to} 
                    className="block text-light/90 hover:text-secondary transition-all duration-300 py-1.5 border-b border-primary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-1"
              >
                <Link 
                  to="/login" 
                  className="block bg-secondary/90 hover:bg-secondary text-dark font-medium px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Connexion
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;