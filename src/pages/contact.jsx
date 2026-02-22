import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero";
import Footer from "../components/footer";
import Section from "../components/Section";
import StatusModal from "../components/StatusModal";
import SEO from "../components/SEO";

export default function Contact() {
  const [modalState, setModalState] = useState({ isOpen: false, type: "success", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@stranumenergies.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Website Inquiry from Stranum Energies"
        })
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: "success",
          message: "Thank you for reaching out! Your message has been received and we will contact you shortly."
        });
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        type: "error",
        message: "We encountered an issue while sending your message. Please try again or email us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <SEO title="Contact Us" description="Reach out to Stranum Energies for partnerships, operations, or technical inquiries." />
      
      <PageHero
        title="Contact"
        subtitle="Reach out for partnerships, supply discussions, or operational support."
        image={`${import.meta.env.BASE_URL}images/careers.png`}
      />

      <Section bg="white" id="contact-info">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: Info & Map */}
          <div data-aos="fade-right">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Connect With Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 leading-tight">
              Operational Hub in <span className="text-orange-500">Lagos</span>
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Office Location</h4>
                  <p className="text-slate-600">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Email Us</h4>
                  <p className="text-slate-600">info@stranumenergies.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Call Us</h4>
                  <p className="text-slate-600">+234 000 000 000</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 h-80">
              <iframe
                title="Stranum Energies Lagos Location"
                src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm" data-aos="fade-left">
            <h3 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-3">
              <MessageSquare className="text-orange-500" />
              Send a Message
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed font-body">
              Complete the form below and our technical team will respond to your inquiry within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={`w-full bg-white rounded-2xl px-6 py-4 outline-none border transition-all ${errors.name ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-400'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-bold ml-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  className={`w-full bg-white rounded-2xl px-6 py-4 outline-none border transition-all ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-400'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500 font-bold ml-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">Subject</label>
                <select
                  {...register("subject", { required: "Please select a subject" })}
                  className={`w-full bg-white rounded-2xl px-6 py-4 outline-none border transition-all ${errors.subject ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-400'} appearance-none cursor-pointer`}
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="Partnership">Partnership Opportunities</option>
                  <option value="Operational Support">Operational Support</option>
                  <option value="Supply Logistics">Supply Logistics</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.subject && <p className="mt-1 text-xs text-red-500 font-bold ml-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">Message</label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required", minLength: { value: 20, message: "Minimum 20 characters" } })}
                  className={`w-full bg-white rounded-2xl px-6 py-4 outline-none border transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-4 focus:ring-orange-100 focus:border-orange-400'}`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500 font-bold ml-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </Section>

      <StatusModal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        message={modalState.message}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
      />

      <Footer />
    </main>
  );
}
