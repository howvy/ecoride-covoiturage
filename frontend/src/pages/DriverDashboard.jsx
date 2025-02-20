import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Trash2 } from "lucide-react";

export default function DriverDashboard() {
  // ✅ trajets créés par le conducteur (en dur, pas besoin de backend)
  const [trips, setTrips] = useState([
    {
      id: 1,
      from: "Paris",
      to: "Lyon",
      date: "12 Juin",
      time: "14h00",
      price: 25,
      seatsLeft: 2,
      reservations: 2, // nombre de passagers
    },
    {
      id: 2,
      from: "Marseille",
      to: "Nice",
      date: "15 Juin",
      time: "10h30",
      price: 18,
      seatsLeft: 3,
      reservations: 1,
    },
  ]);

  // ✅ fonction pour "supprimer" un trajet (juste visuel)
  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <div className="min-h-screen bg-light px-4 py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">Espace Conducteur</h1>

        {trips.length === 0 ? (
          <p className="text-center text-dark-light">Aucun trajet créé.</p>
        ) : (
          <div className="space-y-6">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white shadow-smooth-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
                {/* Infos trajet */}
                <div className="text-center">
                  <div className="flex items-center text-dark">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="ml-2">{trip.from} → {trip.to}</p>
                  </div>
                  <div className="flex items-center text-dark">
                    <Calendar className="h-5 w-5 text-primary-light" />
                    <p className="ml-2">{trip.date} à {trip.time}</p>
                  </div>
                  <div className="text-xl font-bold text-secondary-dark mt-2">{trip.price}€</div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center space-y-3">
                  <Link
                    to={`/trip/${trip.id}`}
                    className="bg-primary hover:bg-primary-light text-light px-4 py-2 rounded-lg font-medium transition duration-300"
                  >
                    Voir le trajet
                  </Link>
                  <button
                    onClick={() => deleteTrip(trip.id)}
                    className="bg-red-500 hover:bg-red-600 text-light px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center space-x-1"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span>Supprimer</span>
                  </button>
                  <div className="text-dark-light flex items-center">
                    <Users className="h-5 w-5 text-secondary-dark mr-1" />
                    <p>{trip.reservations} réservations</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
