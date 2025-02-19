import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, ChevronRight, User } from "lucide-react";
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
        ? "bg-white/95 backdrop-blur-md shadow-smooth py-2" 
        : "bg-gradient-to-r from-white/95 to-white/90 py-3"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center group"
        >
          <div className="bg-primary rounded-lg p-1.5 mr-2 shadow-sm group-hover:shadow-glow transition-all duration-300">
            <Leaf className="text-light group-hover:rotate-12 transition-transform duration-300" size={18} />
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-dark">
            Eco<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Ride</span>
          </span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {["Accueil", "Covoiturages", "Contact"].map((item, index) => (
            <li key={index}>
              <Link 
                to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                className="text-dark-light hover:text-primary relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-light/10"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link 
              to="/login" 
              className="group bg-primary text-light font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center hover:bg-primary-dark shadow-sm hover:shadow-glow"
            >
              <User size={16} className="mr-1.5 opacity-80" />
              Connexion
              <ChevronRight className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
            </Link>
          </li>
        </ul>

        {/* Menu Burger (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden bg-light-dark p-2 rounded-lg text-dark-light hover:bg-primary-light/20 hover:text-primary transition-colors duration-300 flex items-center justify-center"
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
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-smooth-lg mx-4 my-2 rounded-xl overflow-hidden"
            >
              <ul className="divide-y divide-light-dark/30">
                {[
                  { to: "/", text: "Accueil", icon: "🏠" },
                  { to: "/covoiturages", text: "Covoiturages", icon: "🚗" },
                  { to: "/contact", text: "Contact", icon: "📞" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.to} 
                      className="flex items-center text-dark-light hover:text-primary hover:bg-primary-light/10 transition-all duration-300 py-3 px-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-3 bg-light-dark/20"
              >
                <Link 
                  to="/login" 
                  className="flex items-center justify-center bg-primary hover:bg-primary-dark text-light font-medium px-4 py-2.5 rounded-lg transition-all duration-300 shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={16} className="mr-2 opacity-80" />
                  Connexion
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;