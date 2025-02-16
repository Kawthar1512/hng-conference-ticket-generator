import { Route, Routes } from "react-router";
import TicketBookedPage from "./pages/TicketBooked";
import HomePage from "./pages/SelectTicket";
import DetailsPage from "./pages/AttendeeDetails";
import BaseLayout from "./layout/BaseLayout";
import AboutPage from "./pages/AboutPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/ticket" element={<TicketBookedPage />} />
        <Route path="/upload" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
