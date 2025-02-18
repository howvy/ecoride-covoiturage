import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    console.log("App.jsx est bien monté !");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-center mt-10">Bienvenue sur EcoRide</h1>
        <Routes>
          <Route path="/" element={<h2>Accueil</h2>} />
          <Route path="/covoiturages" element={<h2>Liste des covoiturages</h2>} />
          <Route path="/contact" element={<h2>Contactez-nous</h2>} />
          <Route path="/login" element={<h2>Connexion</h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;