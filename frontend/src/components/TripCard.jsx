import { MapPin, Calendar, User, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  return (
    <div className="bg-light-dark shadow-smooth-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between transition-transform transform hover:-translate-y-1 hover:shadow-glow duration-300">
      
      {/* Infos Conducteur */}
      <div className="flex items-center space-x-4">
        <img
          src={trip.driver.photo}
          alt={trip.driver.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
        />
        <div>
          <h3 className="text-lg font-semibold text-dark-light">{trip.driver.name}</h3>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < trip.driver.rating ? "text-secondary-dark" : "text-gray-400"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Infos Trajet */}
      <div className="flex-1 flex flex-col items-center text-center space-y-2 mt-4 md:mt-0">
        <div className="flex items-center text-primary">
          <MapPin className="h-5 w-5" />
          <p className="ml-2 text-lg">{trip.from} → {trip.to}</p>
        </div>
        <div className="flex items-center text-primary-light">
          <Calendar className="h-5 w-5" />
          <p className="ml-2">{trip.date} à {trip.time}</p>
        </div>
        <div className="flex items-center text-secondary">
          <User className="h-5 w-5" />
          <p className="ml-2">{trip.seatsLeft} places restantes</p>
        </div>
      </div>

      {/* Prix & Bouton Détails */}
      <div className="flex flex-col items-center md:items-end space-y-3">
        <p className="text-xl font-bold text-secondary-dark">{trip.price}€</p>
        <Link
          to={`/trip/${trip.id}`}
          className="bg-primary hover:bg-primary-light text-light px-5 py-2 rounded-xl flex items-center space-x-2 transition duration-300"
        >
          <Info className="h-5 w-5" />
          <span>Détails</span>
        </Link>
      </div>

    </div>
  );
}
