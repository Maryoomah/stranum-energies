import { useState } from "react";
import PageHero from "../components/PageHero";
import Footer from "../components/footer";

export default function Contact() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("New Contact Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:info@stranumenergies.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <PageHero
        title="Contact"
        subtitle="Reach out for partnerships, supply discussions, or operational support."
        image={`${import.meta.env.BASE_URL}images/careers.png`}
      />

      <section className="py-16 bg-white">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div data-aos="fade-up">
              <p className="text-sm uppercase tracking-widest font-semibold text-orange-600">
                Our Location
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-blue-900 leading-[1.1]">
                Lagos, <span className="text-orange-500">Nigeria</span>
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-xl">
                Stranum Energies operates from Lagos, Nigeria, supporting
                integrated oil & gas operations with strong downstream execution
                and structured delivery frameworks.
              </p>

              <div className="mt-6 space-y-2 text-gray-700">
                <p className="font-semibold text-blue-900">
                  Email: info@stranumenergies.com
                </p>{" "}
                <p className="font-semibold text-blue-900">Phone:+23400000000</p>{" "}
              </div>

              {/*  MAP */}
              <div
                className="mt-8 rounded-2xl overflow-hidden shadow-sm border"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <iframe
                  title="Stranum Energies Lagos Location"
                  src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div
              className="rounded-3xl border bg-slate-50 p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-extrabold text-blue-900">
                Send a Message
              </h3>

              <p className="mt-2 text-gray-600">
                Share your inquiry and we will respond promptly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-amber-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
