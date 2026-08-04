import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import JoinJourney from "./pages/JoinJourney";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:experienceId" element={<Booking />} />
        <Route path="/join-journey" element={<JoinJourney />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}