import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-10 pb-6 border-t border-dark-light/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="text-secondary mr-2" size={20} />
              <span className="text-xl font-bold tracking-tight">
                Eco<span className="text-secondary">Ride</span>
              </span>
            </div>
            <p className="text-light/70 text-sm leading-relaxed">
              Votre plateforme de covoiturage éco-responsable. Ensemble, réduisons notre empreinte carbone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-light/70 hover:text-secondary transition-colors duration-300">Accueil</Link></li>
              <li><Link to="/covoiturages" className="text-light/70 hover:text-secondary transition-colors duration-300">Trouver un trajet</Link></li>
              <li><Link to="/publier" className="text-light/70 hover:text-secondary transition-colors duration-300">Publier un trajet</Link></li>
              <li><Link to="/comment-ca-marche" className="text-light/70 hover:text-secondary transition-colors duration-300">Comment ça marche</Link></li>
            </ul>
          </div>

          {/* Contact Info - Simplified */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="text-secondary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-light/70">123 Avenue de l'Écologie, 75001 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-secondary mr-2 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-light/70 hover:text-secondary transition-colors duration-300">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-secondary mr-2 flex-shrink-0" />
                <a href="mailto:contact@ecoride.fr" className="text-light/70 hover:text-secondary transition-colors duration-300">contact@ecoride.fr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Simple Separator */}
        <div className="border-t border-dark-light/30 my-4"></div>

        {/* Bottom Footer - Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-light/60">
          <div className="mb-3 md:mb-0">
            © {currentYear} EcoRide. Tous droits réservés.
          </div>
          <div className="flex space-x-4">
            <Link to="/mentions-legales" className="hover:text-secondary transition-colors duration-300">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-secondary transition-colors duration-300">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}