import { useState } from "react";
import { AlertTriangle, CheckCircle, Trash2 } from "lucide-react";

export default function Employee() {
  // liste des signalements
  const [reports, setReports] = useState([
    {
      id: 1,
      user: "Paul Morel",
      reason: "Conducteur en retard de plus de 30 minutes",
      status: "pending", // pending ou resolved
    },
    {
      id: 2,
      user: "Sophie Martin",
      reason: "Voiture non conforme à la description",
      status: "pending",
    },
  ]);

  // fonction pour marquer un signalement comme traité
  const resolveReport = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id ? { ...report, status: "resolved" } : report
      )
    );
  };

  // fonction pour supprimer un signalement (juste visuel)
  const deleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div className="min-h-screen bg-light px-4 py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">
          Tableau Employé
        </h1>

        {/* Liste des signalements */}
        {reports.length === 0 ? (
          <p className="text-dark-light text-center">Aucun signalement en attente.</p>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="bg-white shadow-smooth-lg rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-dark font-semibold">{report.user}</p>
                  <p className="text-dark-light">{report.reason}</p>
                </div>
                <div className="flex space-x-2">
                  {report.status === "pending" ? (
                    <button
                      onClick={() => resolveReport(report.id)}
                      className="bg-primary hover:bg-primary-light text-light px-3 py-2 rounded-lg transition duration-300 flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 mr-1" />
                      Traité
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold flex items-center">
                      <CheckCircle className="h-5 w-5 mr-1" />
                      Traité
                    </span>
                  )}
                  <button
                    onClick={() => deleteReport(report.id)}
                    className="bg-red-500 hover:bg-red-600 text-light px-3 py-2 rounded-lg transition duration-300 flex items-center"
                  >
                    <Trash2 className="h-5 w-5 mr-1" />
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
