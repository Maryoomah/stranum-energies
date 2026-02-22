import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import ServiceDetail from "./pages/servicedetail";
import Operations from "./pages/operations";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import HSE from "./pages/hse";
import BackToTop from "./components/back";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
    });
  }, []);

  return (
    <>
    <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/operations" element={<Operations />} />

        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hse" element={<HSE />} />
      </Routes>
    </>
  );
}

export default App;
