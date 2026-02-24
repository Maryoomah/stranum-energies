import PageHero from "../components/PageHero";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

export default function HSE() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  const pillars = [
    {
      title: "Health",
      text: "We promote fit-for-work practices, operational wellbeing awareness, and basic health compliance across engagements.",
    },
    {
      title: "Safety",
      text: "Risk controls, supervision, safe-work methods, and a disciplined execution culture guide every activity.",
    },
    {
      title: "Environment",
      text: "We implement operational controls supporting spill prevention, waste handling, and responsible site conduct.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Identify Risks",
      text: "Pre-task assessment, hazard identification, and operational planning before execution begins.",
    },
    {
      step: "02",
      title: "Control & Execute",
      text: "Implementation of controls, supervision, PPE use, and safe work practices during operations.",
    },
    {
      step: "03",
      title: "Monitor & Report",
      text: "Checklists, reporting, and documentation to maintain visibility and ensure compliance alignment.",
    },
    {
      step: "04",
      title: "Improve",
      text: "Lessons learned, corrective actions, and continuous improvement to strengthen performance over time.",
    },
  ];

  return (
    <main>
      <PageHero
        title="HSE"
        subtitle="Safety-first operations supported by structured controls and compliance-driven discipline"
        image={`${import.meta.env.BASE_URL}images/hse.jpg`}
      />

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className={container}>
          <p
            className="text-sm uppercase tracking-widest font-semibold text-orange-500"
            data-aos="fade-up"
          >
            Our Standard
          </p>

          <h2
            className="mt-4 text-3xl md:text-4xl font-extrabold text-blue-900 leading-[1.1]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Operational discipline with{" "}
            <span className="text-orange-500">safety at the core</span>
          </h2>

          <p
            className="mt-5 text-gray-600 max-w-3xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stranum Energies embeds Health, Safety & Environment considerations
            into planning, execution, supervision, and reporting — supporting
            reliable delivery across integrated operations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border bg-white p-7 shadow-sm hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={250 + i * 100}
              >
                <div className="h-1.5 w-12 rounded-full bg-orange-500" />
                <h3 className="mt-4 text-lg font-extrabold text-blue-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH INTRO */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className={container}>
           <div className="max-w-3xl">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Execution</h2>
              <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Risk Management Framework</h3>
              <p className="text-slate-600">A systematic process for identifying and mitigating operational hazards before they impact performance.</p>
           </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24 bg-blue-950">
        <div className={container}>
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-widest font-semibold text-orange-400"
              data-aos="fade-up"
            >
              How We Work
            </p>

            <h2
              className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-[1.1] mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A structured HSE approach{" "}
              <span className="text-orange-400">from risk to improvement</span>
            </h2>
            <p className="text-blue-100/70 mb-12">Our continuous feedback loop ensures that safety standards evolve with every project.</p>
          </div>

          {/* Process Steps */}
          <div className="mt-16 space-y-16">
            {approach.map((a, i) => (
              <div
                key={a.step}
                className="relative pl-12"
                data-aos="fade-up"
                data-aos-delay={200 + i * 100}
              >
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-white/10" />

                {/* Step Number */}
                <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white font-extrabold text-sm">
                  {a.step}
                </div>
                <div data-aos="fade-right">
                  {/* Content */}
                  <h3 className="text-xl font-extrabold text-white">
                    {a.title}
                  </h3>

                  <p className="mt-3 text-white/80 leading-relaxed max-w-2xl">
                    {a.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* COMMUNITY & ENVIRONMENT (NEW) */}
      <section className="py-24 bg-soft border-t border-slate-100">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Social Responsibility</h2>
              <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-8 leading-tight">Focusing on Community & Environment</h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                Stranum is a company that is closely knitted and with a very visible presence in the communities where we operate.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We are committed to sustaining a green environment which is key to ensure the health and safety of our people. Our operational footprint is managed with deep respect for local ecosystems and stakeholders.
              </p>
              <NavLink to="/contact" className="inline-flex items-center text-orange-600 font-bold group">
                Inquire About Community Activities
                <span className="ml-3 w-8 h-1 bg-orange-500 rounded-full transition-all group-hover:w-16" />
              </NavLink>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src={`${import.meta.env.BASE_URL}images/about.jpg`} className="rounded-[4rem] shadow-2xl h-[450px] w-full object-cover" alt="Community" />
              <div className="absolute -bottom-8 -right-8 bg-blue-900 p-8 rounded-[3rem] shadow-2xl">
                 <p className="text-white font-black text-xl">Sustaining a<br/>Green<br/>Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className={container}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 leading-[1.1]">
              Operational responsibility is embedded in every engagement.
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Our safety and compliance framework supports disciplined execution
              across all operational activities.
            </p>

            <div className="mt-8 flex justify-center">
              <NavLink
                to="/operations"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-orange-600 transition"
              >
                Explore Our Operations
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
