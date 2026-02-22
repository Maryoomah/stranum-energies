import { NavLink } from "react-router-dom";
import { services } from "../data/services";
import PageHero from "../components/PageHero";
import Footer from "../components/footer";

export default function Operations() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <main>
      <PageHero
        title="Operations"
        subtitle="Our capabilities across exploration, field services, logistics, and asset management."
        image={`${import.meta.env.BASE_URL}images/Drilling.jpg`}
      />

      {/* SERVICES CARDS */}
      <section className="py-10 md:py-14 bg-white">
        <div className={container}>
          <p
            className="text-3xl uppercase tracking-widest font-semibold text-orange-600"
            data-aos="fade-up"
          >
            Core Capabilities
          </p>

          <h2
            className="mt-10 text-2xl font-extrabold text-blue-900"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Services built for disciplined execution
          </h2>

          <div
            className="mt-12 grid gap-x-8 lg:grid-cols-2 gap-y-16 "
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {services.map((s) => (
              <NavLink
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-44" >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-extrabold text-xl">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-700 leading-relaxed">{s.paragraph}</p>

                  <span className="inline-block mt-4 font-extrabold text-orange-600">
                    View details →
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL APPROACH */}
      <section className="py-16 bg-slate-50">
        <div className={container}>
          <p
            className="text-3xl uppercase tracking-widest font-semibold text-orange-600"
            data-aos="fade-up"
          >
            Our Operational Approach
          </p>

          <h2
            className="mt-10 text-2xl font-extrabold text-blue-900"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Structured execution. Compliance-first operations.
          </h2>

         

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Structured Planning",
                text:
                  "Feasibility analysis, scope definition, and execution planning for efficient delivery.",
              },
              {
                title: "Technical Excellence",
                text:
                  "Proven engineering methodologies and field-ready teams aligned with industry standards.",
              },
              {
                title: "Regulatory Compliance",
                text:
                  "Compliance embedded across operations, documentation, and reporting processes.",
              },
              {
                title: "Performance Optimization",
                text:
                  "Continuous monitoring and improvement to reduce downtime and improve asset output.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={150 + i * 80}
              >
                <div className="h-1.5 w-12 rounded-full bg-orange-500" />
                <h3 className="mt-4 text-lg font-extrabold text-blue-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* CTA */}
      <section className="py-20 bg-blue-950">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-white"
                  data-aos="fade-up"
                >
                  Partner with us.
                </h2>
      
                <p
                  className="mt-4 text-white/85 max-w-2xl mx-auto leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  From field operations to downstream distribution, Stranum Energies
                  delivers disciplined execution across the value chain.
                </p>
      
                <div
                  className="mt-8 flex justify-center gap-4 flex-wrap"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <NavLink
                    to="/contact"
                    className="rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-amber-600 transition"
                  >
                    Discuss Partnership
                  </NavLink>
      
                  <NavLink
                    to="/operations"
                    className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/20 transition"
                  >
                    Explore Operations
                  </NavLink>
                </div>
              </div>
            </section>
      <Footer />
    </main>
  );
}