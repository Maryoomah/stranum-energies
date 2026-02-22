import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import StatusModal from "./StatusModal";

function Footer() {
  const [modalState, setModalState] = useState({ isOpen: false, type: "success", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // FormSubmit typical newsletter approach
      const response = await fetch("https://formsubmit.co/ajax/info@stranumenergies.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: data.email,
          _subject: "New Newsletter Subscription",
          message: "A new user has subscribed to the Stranum Energies newsletter."
        })
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: "success",
          message: "You have successfully subscribed to our newsletter! Stay tuned for updates."
        });
        reset();
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        type: "error",
        message: "We couldn't process your subscription at this time. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `transition text-xs uppercase tracking-wider ${
      isActive ? "text-orange-500 font-black" : "text-slate-400 hover:text-white"
    }`;

  const socialIcons = [
    { name: 'Facebook', icon: <Facebook size={18} />, path: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, path: '#' },
    { name: 'Linkedin', icon: <Linkedin size={18} />, path: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, path: '#' },
  ];

  return (
    <footer className="bg-blue-950 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2 mb-16">
          {/* Company */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Stranum Energies"
                className="w-32"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs font-body">
              A Nigeria-based integrated oil & gas leader built on operational
              discipline, safety excellence, and performance-driven delivery.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((s, idx) => (
                <a key={idx} href={s.path} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                  <span className="sr-only">{s.name}</span>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Operations", path: "/operations" },
                { name: "Projects", path: "/projects" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500 rounded-full" />
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Upstream Support</li>
              <li className="hover:text-white transition-colors cursor-pointer">Logistics & Supply</li>
              <li className="hover:text-white transition-colors cursor-pointer">Infrastructure</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultancy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Compliance (HSE)</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500 rounded-full" />
            </h3>
            <p className="text-sm text-slate-400 mb-6 font-body">Subscribe for industry insights and operational updates.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                  placeholder="Email Address" 
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-orange-500/20 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-orange-500'}`}
                />
                {errors.email && <p className="absolute left-1 -bottom-5 text-[10px] text-red-500 font-bold">{errors.email.message}</p>}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-orange-500/10 text-xs uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Subscribe <Send size={14} /></>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Stranum Energies Limited. RC: 1234567.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      <StatusModal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        message={modalState.message}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
      />
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
    </footer>
  );
}

export default Footer;
