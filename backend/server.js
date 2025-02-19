import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* ========================
   📌 API : TEST DU SERVEUR
   ======================== */
app.get("/", (req, res) => {
  res.send("✅ EcoRide API is running...");
});

/* ========================
   📌 API : RÉCUPÉRER UN TRAJET PAR ID
   ======================== */
app.get("/api/trips/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await prisma.trip.findUnique({
      where: { id },
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json(trip);
  } catch (error) {
    console.error("❌ Error in GET /api/trips/:id:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ========================
   📌 API : RÉSERVER UN TRAJET
   ======================== */
app.post("/api/bookings", async (req, res) => {
  const { userId, tripId } = req.body;

  if (!userId || !tripId) {
    return res.status(400).json({ error: "User ID and Trip ID are required" });
  }

  try {
    // Vérifier si le trajet existe
    const trip = await prisma.trip.findUnique({ where: { id: tripId } });
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    // Vérifier s'il reste des places disponibles
    if (trip.seatsLeft <= 0) {
      return res.status(400).json({ error: "No seats left" });
    }

    // Créer la réservation
    const booking = await prisma.booking.create({
      data: { userId, tripId },
    });

    // Mettre à jour le nombre de places restantes
    await prisma.trip.update({
      where: { id: tripId },
      data: { seatsLeft: trip.seatsLeft - 1 },
    });

    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (error) {
    console.error("❌ Error in POST /api/bookings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ========================
   📌 DÉMARRER LE SERVEUR
   ======================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
