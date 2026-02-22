import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import ServiceDetail from "./pages/servicedetail";
import Operations from "./pages/operations";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import HSE from "./pages/hse";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/project-details";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-details";
import BackToTop from "./components/back";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <Navbar />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hse" element={<HSE />} />
      </Routes>
    </>
  );
}

export default App;
