import PageHero from "../components/PageHero";
import Footer from "../components/footer";

function About() {
  const values = [
    {
      title: "Operational Discipline",
      desc: "Structured systems and defined processes drive consistent results.",
    },
    {
      title: "Safety First",
      desc: "We uphold uncompromising safety standards across all operations.",
    },
    {
      title: "Reliability",
      desc: "We deliver on commitments and maintain dependable supply chains.",
    },
    {
      title: "Accountability",
      desc: "Clear ownership, measurable performance, and transparent reporting guide our operations.",
    },
    {
      title: "Excellence",
      desc: "We pursue continuous improvement in every aspect of our business.",
    },
    {
      title: "Integrity",
      desc: "We pursue continuous improvement in every aspect of our business.",
    },
  ];
  const teamMembers = [
    {
      name: "Engr. Daniel Okafor",
      role: "Chief Executive Officer",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Aisha Bello",
      role: "Chief Operations Officer",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Ibrahim Musa",
      role: "Head of Exploration",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Chidinma Nwosu",
      role: "Engineering Director",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Samuel Adeyemi",
      role: "HSE Manager",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Fatima Abdullahi",
      role: "Finance Director",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },

    {
      name: "Tunde Alabi",
      role: "Field Operations Lead",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },
    {
      name: "Muhammed Ali",
      role: "Corporate Affairs Manager",
      image: `${import.meta.env.BASE_URL}images/img.png `,
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <PageHero
        title="ABOUT US"
        subtitle="Stranum Energy is a Nigeria-based integrated oil and gas company
            focused on dependable performance, operational discipline, and
            long-term value creation"
        image={`${import.meta.env.BASE_URL}images/Drilling.jpg`}
      />
      {/* ABOUT BODY */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT Divv */}
          <div data-aos="fade-right" className="max-w-xl">
            <p className="text-orange-600 font-bold uppercase tracking-widest text-2xl md:text-3xl">
              About Us
            </p>

            <h2 className="mt-4 text-2xl font-extrabold text-blue-900 leading-[1.1]">
              Built on Discipline.{" "}
              <span className="text-orange-500">Driven by Reliability.</span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p data-aos="fade-up" data-aos-delay="100">
                We specialize in the exploration, development, and distribution
                of energy resources across the value chain, executing each
                project with precision, safety leadership, and strict regulatory
                compliance.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                Our structured operational systems, experienced workforce, and
                commitment to excellence enable us to maintain stable
                production, optimize assets, and deliver consistent supply to
                partners and clients.
              </p>
            </div>
          </div>

          {/* Right div */}
          <div
            className="relative w-full max-w-135 mx-auto"
            data-aos="fade-left"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border">
              <img
                src={`${import.meta.env.BASE_URL}images/about1.jpg`}
                alt="Stranum Energy Operations"
                className="w-full h-105 object-cover"
              />
            </div>

            {/* Floating Image */}
            <div className="absolute -bottom-10 left-6 w-[75%] rounded-3xl overflow-hidden shadow-2xl border bg-white float-y">
              <img
                src={`${import.meta.env.BASE_URL}images/about.jpg`}
                alt="Team at work"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION  MISSION  */}
      <section className="relative overflow-hidden bg-slate-50 mt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.15),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 relative">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-orange-500">
                Vision & Mission
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Vision card */}
            <div
              className="group rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg"
              data-aos="zoom-in"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Our Vision
                  </p>
                  <h3 className="mt-6 text-2xl font-extrabold text-[#0F1E3A] leading-snug">
                    Trusted for strength
                    <span className="text-orange-500"> Known for delivery</span>
                  </h3>
                </div>

                <div className="shrink-0 rounded-2xl bg-orange-500/10 p-3 text-orange-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
                To be a trusted and dependable Nigerian energy company
                recognized for operational strength, reliability, and consistent
                delivery.
              </p>

              <div className="mt-6 h-1.5 w-20 rounded-full bg-linear-to-r from-orange-500 to-orange-300" />
            </div>

            {/* Mission card */}
            <div
              className="group rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Our Mission
                  </p>
                  <h3 className="mt-6 text-2xl font-extrabold text-[#0F1E3A] leading-snug">
                    Disciplined operations
                    <span className="text-blue-700"> Safe performance</span>
                  </h3>
                </div>

                <div className="shrink-0 rounded-2xl bg-blue-600/10 p-3 text-blue-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9.5 12.5 11 14l3.5-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
                To provide efficient and reliable oil and gas solutions through
                disciplined operations, safety leadership, and strong
                stakeholder partnerships.
              </p>

              <div className="mt-6 h-1.5 w-20 rounded-full bg-linear-to-r from-blue-700 to-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES  */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl  font-bold uppercase text-blue-900">
                Core <span className="text-orange-500">Values</span>
              </h2>
            </div>

            <div
              className="hidden md:flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="120"
            ></div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                {/* Accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-500 via-orange-300 to-blue-600 opacity-80" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1E3A]">
                      {v.title}
                    </h3>
                    <p className="mt-6 text-sm text-gray-700 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl bg-slate-50 p-3 text-[#0F1E3A] group-hover:text-orange-600 transition">
                    {v.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500">
            Leadership Team
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0F1E3A]">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;
