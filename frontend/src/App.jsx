import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    console.log("App.jsx est bien monté !");
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-10">Bienvenue sur EcoRide</h1>
      <Routes>
        <Route path="/" element={<h2>Accueil</h2>} />
        <Route path="/covoiturages" element={<h2>Liste des covoiturages</h2>} />
        <Route path="/contact" element={<h2>Contactez-nous</h2>} />
        <Route path="/login" element={<h2>Connexion</h2>} />
      </Routes>
    </div>
  );
}

export default App;