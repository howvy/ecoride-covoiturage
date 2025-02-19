import { useParams, useNavigate } from "react-router-dom";
import { CreditCard, MapPin, Calendar, User, CheckCircle, XCircle } from "lucide-react";

export default function Checkout() {
  const { id } = useParams(); // récupère l'ID du trajet depuis l'URL
  const navigate = useNavigate(); // permet la redirection

  // ✅ Données du trajet en dur (on ignore totalement l'API)
  const trip = {
    id,
    from: "Paris",
    to: "Lyon",
    date: "12 Juin",
    time: "14h00",
    price: 25,
    seatsLeft: 2,
    driver: { name: "Jean Dupont", photo: "/thomas.png" },
  };

  const handlePayment = () => {
    alert("Paiement fictif réussi pour le trajet " + trip.from + " → " + trip.to);
    navigate("/dashboard/user"); // juste une redirection fictive
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="max-w-lg w-full bg-white shadow-smooth-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-dark mb-6 text-center">
          Confirmation du paiement
        </h1>

        {/* Infos trajet */}
        <div className="bg-light-dark p-4 rounded-xl mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={trip.driver.photo}
              alt={trip.driver.name}
              className="w-14 h-14 rounded-full border-2 border-primary object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-dark">{trip.driver.name}</h3>
              <p className="text-dark-light text-sm">Votre conducteur</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-dark">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="ml-2">{trip.from} → {trip.to}</p>
            </div>
            <div className="flex items-center text-dark">
              <Calendar className="h-5 w-5 text-primary-light" />
              <p className="ml-2">{trip.date} à {trip.time}</p>
            </div>
            <div className="flex items-center text-dark">
              <User className="h-5 w-5 text-secondary-dark" />
              <p className="ml-2">{trip.seatsLeft} places restantes</p>
            </div>
          </div>
        </div>

        {/* Infos paiement */}
        <div className="bg-light-dark p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-dark mb-3">Détails du paiement</h3>
          <div className="flex items-center justify-between">
            <span className="text-dark-light">Prix du trajet</span>
            <span className="text-dark font-bold">{trip.price}€</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-dark-light">Frais de service</span>
            <span className="text-dark">2€</span>
          </div>
          <div className="flex items-center justify-between mt-2 text-lg font-bold">
            <span className="text-dark">Total</span>
            <span className="text-primary">{trip.price + 2}€</span>
          </div>
        </div>

        {/* Boutons paiement */}
        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={handlePayment}
            className="w-full bg-primary hover:bg-primary-light text-light py-3 rounded-xl font-medium transition duration-300 flex items-center justify-center"
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            Payer maintenant
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-red-500 hover:bg-red-600 text-light py-3 rounded-xl font-medium transition duration-300 flex items-center justify-center"
          >
            <XCircle className="h-5 w-5 mr-2" />
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}