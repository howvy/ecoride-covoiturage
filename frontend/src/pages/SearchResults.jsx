import TripCard from "../components/TripCard.jsx";

const trips = [
  {
    id: 1,
    driver: { name: "Jean Dupont", photo: "/thomas.png", rating: 5 },
    from: "Paris",
    to: "Lyon",
    date: "12 Juin",
    time: "14h00",
    price: 25,
    seatsLeft: 2,
  },
  {
    id: 2,
    driver: { name: "Sophie Martin", photo: "/sophie.png", rating: 4 },
    from: "Marseille",
    to: "Nice",
    date: "15 Juin",
    time: "10h30",
    price: 18,
    seatsLeft: 3,
  },
];

export default function SearchResults() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-light mb-6">Résultats de votre recherche</h1>
      <div className="space-y-6">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
