import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import BackToTop from "./components/back";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Operations = lazy(() => import("./pages/operations"));
const ServiceDetail = lazy(() => import("./pages/servicedetail"));
const Projects = lazy(() => import("./pages/projects"));
const ProjectDetail = lazy(() => import("./pages/project-details"));
const Blog = lazy(() => import("./pages/blog"));
const BlogDetail = lazy(() => import("./pages/blog-details"));
const Careers = lazy(() => import("./pages/careers"));
const Contact = lazy(() => import("./pages/contact"));
const HSE = lazy(() => import("./pages/hse"));

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
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </>
  );
}

export default App;
