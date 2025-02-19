import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import TripDetails from "./pages/TripDetails";
import Checkout from "./pages/Checkout";
import UserDashboard from "./pages/UserDashboard";

function App() {
  useEffect(() => {
    console.log("App.jsx est bien monté !");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-center mt-10"></h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/covoiturages" element={<h2>Liste des covoiturages</h2>} />
          <Route path="/contact" element={<h2>Contactez-nous</h2>} />
          <Route path="/login" element={<h2>Connexion</h2>} />
          <Route path="/trip/:id" element={<TripDetails />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
