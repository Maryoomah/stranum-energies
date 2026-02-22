import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav id="top" className="relative z-50">
      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* LOGO */}
          <NavLink to="/" onClick={close}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              className="w-28"
              alt="logo"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-white">
            <li>
              <NavLink to="/" end className="hover:text-orange-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-orange-400 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/operations"
                className="hover:text-orange-400 transition"
              >
                Operations
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/careers"
                className="hover:text-orange-400 transition"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* backdrop */}
          <button
            className="absolute inset-0 bg-black/60"
            onClick={close}
            aria-label="Close menu"
          />

          {/* panel */}
          <div className="absolute inset-0 bg-white">
            {/* header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                className="w-28"
                alt="logo"
              />
              <button
                onClick={close}
                className="text-3xl text-gray-700"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* links */}
            <div className="px-6 py-6">
              <ul className="flex flex-col">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "Operations", to: "/operations" },
                  { label: "Careers", to: "/careers" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <li key={item.to} className="border-b">
                    <NavLink
                      to={item.to}
                      onClick={close}
                      className="block py-5 text-lg font-semibold text-gray-900"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <NavLink
                to="/contact"
                onClick={close}
                className="mt-8 block w-full rounded-2xl bg-orange-500 px-6 py-4 text-center font-extrabold text-white shadow-lg hover:bg-amber-600 transition"
              >
                Contact Us →
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
