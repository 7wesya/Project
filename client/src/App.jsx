import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Partnerships from "./pages/Partnerships";
import Stories from "./pages/Stories";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import JoinJourney from "./pages/JoinJourney";
import Programmes from "./pages/Programmes";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:experienceId" element={<Booking />} />
        <Route path="/join-journey" element={<JoinJourney />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}