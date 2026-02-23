import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Operations", path: "/operations" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "HSE", path: "/hse" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        (isScrolled || isOpen)
          ? "bg-blue-950 lg:bg-white/90 shadow-xl py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="relative z-50">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              className={`transition-all duration-300 ${isScrolled ? "w-24" : "w-32"}`}
              alt="Stranum Energies Logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className={`flex items-center gap-8 font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${
              isScrolled ? "lg:text-blue-900 text-white" : "text-white"
            }`}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    end={link.path === "/"}
                    className={({ isActive }) => `hover:text-orange-500 transition-colors ${isActive ? "text-orange-500" : ""}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 uppercase text-xs tracking-widest ml-4"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
              (isScrolled || isOpen) ? "text-white" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-blue-950 z-40 lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-12 bg-blue-950">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.path} data-aos="fade-left" data-aos-delay="100">
                <NavLink 
                  to={link.path} 
                  onClick={closeMenu}
                  className={({ isActive }) => `text-2xl font-black transition-colors ${
                    isActive ? "text-orange-500" : "text-white hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto" data-aos="fade-up">
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block w-full bg-orange-500 text-white text-center font-bold py-5 rounded-2xl text-xl transition-all hover:bg-orange-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
