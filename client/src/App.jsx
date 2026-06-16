import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Impact from "./pages/Impact";
import Partnerships from "./pages/Partnerships";
import Stories from "./pages/Stories";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}