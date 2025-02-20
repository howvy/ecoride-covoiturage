import { useState } from "react";
import { MapPin, Calendar, User, CheckCircle, Car } from "lucide-react";

export default function History() {
  // ✅ trajets passés (en dur, pas besoin de backend)
  const [history, setHistory] = useState([
    {
      id: 1,
      from: "Paris",
      to: "Lyon",
      date: "5 Juin",
      time: "14h00",
      price: 25,
      role: "passager", // passager ou conducteur
      driver: { name: "Jean Dupont", photo: "/thomas.png" },
    },
    {
      id: 2,
      from: "Marseille",
      to: "Nice",
      date: "1 Juin",
      time: "10h30",
      price: 18,
      role: "conducteur",
      driver: { name: "Moi", photo: "/sophie.png" },
    },
  ]);

  return (
    <div className="min-h-screen bg-light px-4 py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">Historique des trajets</h1>

        {history.length === 0 ? (
          <p className="text-center text-dark-light">Aucun trajet passé.</p>
        ) : (
          <div className="space-y-6">
            {history.map((trip) => (
              <div key={trip.id} className="bg-white shadow-smooth-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
                {/* Infos conducteur / passager */}
                <div className="flex items-center space-x-4">
                  <img
                    src={trip.driver.photo}
                    alt={trip.driver.name}
                    className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{trip.driver.name}</h3>
                    <p className="text-dark-light text-sm">
                      {trip.role === "passager" ? "Conducteur" : "Vous étiez le conducteur"}
                    </p>
                  </div>
                </div>

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

                {/* Badge rôle */}
                <div className="flex flex-col items-center">
                  {trip.role === "passager" ? (
                    <div className="flex items-center bg-primary text-light px-3 py-1 rounded-lg">
                      <User className="h-5 w-5 mr-2" />
                      <span>Passager</span>
                    </div>
                  ) : (
                    <div className="flex items-center bg-secondary text-dark px-3 py-1 rounded-lg">
                      <Car className="h-5 w-5 mr-2" />
                      <span>Conducteur</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
