import { useState } from "react";
import { MapPin, Calendar, User, Ban, Trash2 } from "lucide-react";

export default function Admin() {
  // ✅ trajets en cours (en dur, pas besoin de backend)
  const [trips, setTrips] = useState([
    {
      id: 1,
      from: "Paris",
      to: "Lyon",
      date: "18 Juin",
      time: "14h00",
      driver: "Jean Dupont",
    },
    {
      id: 2,
      from: "Marseille",
      to: "Nice",
      date: "20 Juin",
      time: "10h30",
      driver: "Sophie Martin",
    },
  ]);

  // ✅ utilisateurs enregistrés (en dur)
  const [users, setUsers] = useState([
    { id: 1, name: "Paul Morel", email: "paul@email.com", isBanned: false },
    { id: 2, name: "Elise Durand", email: "elise@email.com", isBanned: false },
  ]);

  // ✅ fonction pour "supprimer" un trajet (juste visuel)
  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  // ✅ fonction pour "suspendre" un utilisateur (juste visuel)
  const toggleBanUser = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isBanned: !user.isBanned } : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-light px-4 py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">
          Tableau de bord Admin
        </h1>

        {/* 📌 Liste des trajets */}
        <h2 className="text-2xl font-semibold text-dark mb-4">Trajets en cours</h2>
        {trips.length === 0 ? (
          <p className="text-dark-light">Aucun trajet en cours.</p>
        ) : (
          <div className="space-y-4">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white shadow-smooth-lg rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-dark font-semibold">
                    {trip.from} → {trip.to}
                  </p>
                  <div className="flex items-center text-dark-light">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <p>{trip.date} à {trip.time}</p>
                  </div>
                  <p className="text-dark-light">Conducteur : {trip.driver}</p>
                </div>
                <button
                  onClick={() => deleteTrip(trip.id)}
                  className="bg-red-500 hover:bg-red-600 text-light px-3 py-2 rounded-lg transition duration-300 flex items-center"
                >
                  <Trash2 className="h-5 w-5 mr-1" />
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 📌 Liste des utilisateurs */}
        <h2 className="text-2xl font-semibold text-dark mt-10 mb-4">Utilisateurs</h2>
        {users.length === 0 ? (
          <p className="text-dark-light">Aucun utilisateur enregistré.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white shadow-smooth-lg rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-dark font-semibold">{user.name}</p>
                  <p className="text-dark-light text-sm">{user.email}</p>
                </div>
                <button
                  onClick={() => toggleBanUser(user.id)}
                  className={`px-3 py-2 rounded-lg transition duration-300 flex items-center ${
                    user.isBanned ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                  } text-light`}
                >
                  <Ban className="h-5 w-5 mr-1" />
                  {user.isBanned ? "Débloquer" : "Suspendre"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
