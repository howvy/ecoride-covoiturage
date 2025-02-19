import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, User, XCircle } from "lucide-react";

export default function UserDashboard() {
  // ✅ liste des réservations en dur (pas besoin de backend)
  const [bookings, setBookings] = useState([
    {
      id: 1,
      from: "Paris",
      to: "Lyon",
      date: "12 Juin",
      time: "14h00",
      price: 25,
      driver: { name: "Jean Dupont", photo: "/thomas.png" },
    },
    {
      id: 2,
      from: "Marseille",
      to: "Nice",
      date: "15 Juin",
      time: "10h30",
      price: 18,
      driver: { name: "Sophie Martin", photo: "/sophie.png" },
    },
  ]);

  // ✅ fonction pour "annuler" une réservation (juste visuel)
  const cancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="min-h-screen bg-light px-4 py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">Mon espace</h1>

        {bookings.length === 0 ? (
          <p className="text-center text-dark-light">Aucune réservation en cours.</p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white shadow-smooth-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
                {/* Infos conducteur */}
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.driver.photo}
                    alt={booking.driver.name}
                    className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{booking.driver.name}</h3>
                    <p className="text-dark-light text-sm">Votre conducteur</p>
                  </div>
                </div>

                {/* Infos trajet */}
                <div className="text-center">
                  <div className="flex items-center text-dark">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="ml-2">{booking.from} → {booking.to}</p>
                  </div>
                  <div className="flex items-center text-dark">
                    <Calendar className="h-5 w-5 text-primary-light" />
                    <p className="ml-2">{booking.date} à {booking.time}</p>
                  </div>
                  <div className="text-xl font-bold text-secondary-dark mt-2">{booking.price}€</div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center space-y-3">
                  <Link
                    to={`/trip/${booking.id}`}
                    className="bg-primary hover:bg-primary-light text-light px-4 py-2 rounded-lg font-medium transition duration-300"
                  >
                    Voir détails
                  </Link>
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="bg-red-500 hover:bg-red-600 text-light px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center space-x-1"
                  >
                    <XCircle className="h-5 w-5" />
                    <span>Annuler</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
