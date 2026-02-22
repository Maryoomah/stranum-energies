import { NavLink } from "react-router-dom";

function Footer() {
  const linkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-orange-500" : "text-gray-300 hover:text-orange-500"
    }`;

  return (
    <footer className="bg-[#0F1E3A] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Company */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt=""
            className="w-24"
          />{" "}
          <p className="mt-4 text-sm leading-relaxed">
            Nigeria-based integrated oil & gas company built on operational
            discipline, safety leadership, and dependable delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/operations" className={linkClass}>
                Operations
              </NavLink>
            </li>
            <li>
              <NavLink to="/hse" className={linkClass}>
                HSE
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={linkClass}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Exploration & Production</li>
            <li>Logistics and Distribution</li>
            <li>Asset & Infrastructure</li>
            <li>Field Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-2 text-sm">
            <p>info@stranumenergies.com</p>
            <p>+2341234</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} Stranum Energies. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
