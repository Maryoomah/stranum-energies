import PageHero from "../components/PageHero";
import Footer from "../components/footer";

export default function Careers() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Join a disciplined team delivering structured oil & gas operations."
        image={`${import.meta.env.BASE_URL}images/careers.png`}
      />

      {/* CAREERS STATUS */}
      <section className="py-20 bg-white">
        <div className={container}>
          <p
            className="text-3xl uppercase tracking-widest font-semibold text-orange-600"
            data-aos="fade-up"
          >
            Opportunities
          </p>

          <h2
            className="mt-10 text-2xl font-extrabold text-blue-900 leading-[1.1]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Build your career with{" "}
            <span className="text-orange-500">Stranum Energies</span>.
          </h2>

          <div
            className="mt-12 rounded-3xl border bg-slate-50 px-10 py-15 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-extrabold text-blue-900">
              No Current Openings
            </h3>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We do not have any active vacancies at the moment. However, we
              welcome expressions of interest from qualified professionals
              seeking opportunities within a structured oil & gas organization.
            </p>

            <div className="mt-8">
              <a
                href="mailto:careers@stranumenergies.com?subject=General Application"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-amber-600 transition"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}