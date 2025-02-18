import { useParams } from "react-router-dom";
import { MapPin, Calendar, User, Car, Star, CreditCard, ChevronLeft } from "lucide-react";

export default function TripDetails() {
  const { id } = useParams(); // récupère l'ID du trajet depuis l'URL

  // ⚠️ Normalement, ces données viennent du backend (fetch API)
  const trip = {
    id,
    driver: {
      name: "Jean Dupont",
      photo: "/thomas.png",
      rating: 5,
      bio: "Conducteur expérimenté avec plus de 200 trajets effectués.",
      reviews: [
        { user: "Marie", comment: "Très sympa et ponctuel !", rating: 5 },
        { user: "Paul", comment: "Voiture propre et trajet agréable.", rating: 4 },
      ],
    },
    from: "Paris",
    to: "Lyon",
    date: "12 Juin",
    time: "14h00",
    price: 25,
    seatsLeft: 2,
    car: { model: "Tesla Model 3", color: "Noire", plate: "XX-123-XX" },
  };

  return (
    <div className="min-h-screen bg-light">
      <div className="container mx-auto py-8 px-4 max-w-3xl">
        <div className="flex items-center mb-6">
          <button className="flex items-center text-dark hover:text-primary transition duration-300">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Retour</span>
          </button>
        </div>
        
        <h1 className="text-3xl font-bold text-dark mb-6 flex items-center">
          <span className="bg-primary text-light rounded-full p-1 mr-3">
            <MapPin className="h-6 w-6" />
          </span>
          Détails du trajet
        </h1>

        <div className="bg-white shadow-smooth-lg rounded-2xl overflow-hidden mb-6">
          {/* Header with route info */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-light p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{trip.from} → {trip.to}</h2>
                <div className="flex items-center mt-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <p>{trip.date} à {trip.time}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{trip.price}€</div>
                <div className="flex items-center justify-end mt-1">
                  <User className="h-5 w-5 mr-1" />
                  <p>{trip.seatsLeft} places</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Infos Conducteur */}
            <div className="flex items-start space-x-4 bg-light-dark p-4 rounded-xl">
              <img
                src={trip.driver.photo}
                alt={trip.driver.name}
                className="w-20 h-20 rounded-full border-2 border-primary object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-dark">{trip.driver.name}</h3>
                <div className="flex items-center space-x-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < trip.driver.rating ? "text-secondary-dark fill-secondary-dark" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="text-dark-light ml-1">({trip.driver.rating}/5)</span>
                </div>
                <p className="text-dark-light">{trip.driver.bio}</p>
              </div>
            </div>

            {/* Infos Voiture */}
            <div className="bg-light-dark p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-2 flex items-center">
                <Car className="h-5 w-5 text-primary mr-2" />
                Véhicule
              </h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="text-dark-light">{trip.car.model} - {trip.car.color}</p>
                <p className="text-dark-light">Plaque: {trip.car.plate.replace(/[A-Z0-9]/g, "•")}</p>
              </div>
            </div>

            {/* Avis Clients */}
            <div className="bg-light-dark p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-3 flex items-center">
                <Star className="h-5 w-5 text-secondary-dark fill-secondary-dark mr-2" />
                Avis des passagers
              </h3>
              <div className="space-y-3">
                {trip.driver.reviews.map((review, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-smooth">
                    <div className="flex items-center justify-between">
                      <p className="text-dark font-medium">{review.user}</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-secondary-dark fill-secondary-dark" : "text-gray-400"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-dark-light mt-1">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bouton Réserver */}
        <button className="w-full bg-primary hover:bg-primary-light text-light py-4 rounded-xl font-medium transition duration-300 text-lg shadow-smooth-lg flex items-center justify-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Réserver ce trajet
        </button>
      </div>
    </div>
  );
}