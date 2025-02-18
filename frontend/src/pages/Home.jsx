"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Calendar, ArrowRight, MapPin, Leaf, Star, Users, TrendingDown } from "lucide-react"

export default function Home() {
  const [departure, setDeparture] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for trips:", { departure, destination, date })
  }

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-radial from-primary-dark via-primary to-primary-light text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-eco-pattern opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">
                Voyagez <span className="text-secondary-light">écologique</span> et{" "}
                <span className="text-secondary-light">économique</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-light-dark animate-pulse-slow">
                Rejoignez la communauté de covoiturage qui réduit l'empreinte carbone
              </p>

              {/* Search Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-smooth-lg p-6 md:p-8 mt-8 transform hover:scale-105 transition-all duration-300">
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <input
                        type="text"
                        placeholder="Départ"
                        className="w-full pl-10 pr-3 py-3 border-2 border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary-light bg-white/50 backdrop-blur-xs transition-all duration-300"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <input
                        type="text"
                        placeholder="Destination"
                        className="w-full pl-10 pr-3 py-3 border-2 border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary-light bg-white/50 backdrop-blur-xs transition-all duration-300"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <input
                        type="date"
                        className="w-full pl-10 pr-3 py-3 border-2 border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary-light bg-white/50 backdrop-blur-xs transition-all duration-300"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-secondary hover:bg-secondary-light text-dark font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow-yellow flex items-center justify-center space-x-2"
                  >
                    <Search className="h-5 w-5" />
                    <span>Rechercher</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-dark">Pourquoi choisir EcoRide?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Leaf className="h-12 w-12 text-primary" />,
                  title: "Écologique",
                  description: "Réduisez votre empreinte carbone en partageant vos trajets avec d'autres voyageurs.",
                },
                {
                  icon: <TrendingDown className="h-12 w-12 text-primary" />,
                  title: "Économique",
                  description: "Partagez les frais de transport et économisez sur vos déplacements quotidiens.",
                },
                {
                  icon: <Users className="h-12 w-12 text-primary" />,
                  title: "Communautaire",
                  description: "Rejoignez une communauté de conducteurs et passagers partageant les mêmes valeurs.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-smooth hover:shadow-smooth-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-dark">{feature.title}</h3>
                  <p className="text-dark-light text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-primary-light/10 to-light">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-dark">Comment ça marche?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {[
                {
                  step: "1",
                  title: "Recherchez un trajet",
                  description: "Entrez votre lieu de départ, destination et date pour trouver les trajets disponibles.",
                },
                {
                  step: "2",
                  title: "Réservez votre place",
                  description: "Choisissez le trajet qui vous convient et réservez votre place en quelques clics.",
                },
                {
                  step: "3",
                  title: "Voyagez ensemble",
                  description: "Rencontrez votre conducteur et partagez votre trajet de manière écologique.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-smooth h-full transition-all duration-300 transform hover:scale-105">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 mt-6 text-dark">{step.title}</h3>
                    <p className="text-dark-light text-lg">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                to="/comment-ca-marche"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300 text-lg font-semibold"
              >
                <span>En savoir plus</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-light to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-dark">Ce que disent nos utilisateurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  name: "Marie D.",
                  photo: "/marie.png?height=100&width=100",
                  rating: 5,
                  comment:
                    "J'utilise EcoRide tous les jours pour me rendre au travail. C'est économique et j'ai rencontré des personnes formidables!",
                },
                {
                  name: "Thomas L.",
                  photo: "/thomas.png?height=100&width=100",
                  rating: 4,
                  comment:
                    "En tant que conducteur, je peux réduire mes frais tout en contribuant à la réduction de l'empreinte carbone. Win-win!",
                },
                {
                  name: "Sophie M.",
                  photo: "/sophie.png?height=100&width=100",
                  rating: 5,
                  comment: "Interface intuitive et recherche de trajets ultra simple. Je recommande à tous mes amis!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-smooth hover:shadow-smooth-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.photo || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-dark">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-secondary fill-secondary" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-dark-light text-lg italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre l'aventure?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Créez votre compte gratuitement et commencez à voyager de manière écologique dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/register"
                className="bg-secondary hover:bg-secondary-light text-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow-yellow text-lg"
              >
                S'inscrire gratuitement
              </Link>
              <Link
                to="/covoiturages"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow text-lg"
              >
                Découvrir les trajets
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

