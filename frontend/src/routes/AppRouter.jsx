import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SearchResults from "../pages/SearchResults";
import TripDetails from "../pages/TripDetails";
import Auth from "../pages/Auth";
import UserDashboard from "../pages/UserDashboard";
import DriverDashboard from "../pages/DriverDashboard";
import Admin from "../pages/Admin";
import Employee from "../pages/Employee";
import History from "../pages/History";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/driver" element={<DriverDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}