import { useParams } from "react-router-dom";
import { services } from "../data/services";
import PageHero from "../components/PageHero";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
export default function ServiceDetail() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14";

  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="p-10">Service not found</div>;

  return (
    <main>
      <PageHero
        title="Operations"
        subtitle="Our capabilities across exploration, field services, logistics, and asset management."
        image={`${import.meta.env.BASE_URL}images/Drilling.jpg`}
      />
      <div className={container}>
        {/* grid container */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-10 ">
          <div data-aos="fade-up">
            {" "}
            <h1 className="text-4xl font-extrabold text-orange-500">
              {service.title}
            </h1>
            <p className="mt-4 text-gray-700">{service.paragraph}</p>
            <h2 className="mt-10 text-2xl font-extrabold text-blue-500">
              What we deliver
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-xl border bg-white p-4 shadow-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <img src={service.image} alt="" className="w-full  object-cover" />
        </div>
      </div>
      <div className="flex justify-center mb-10">
        {" "}
        <NavLink
          to="/operations"
          className=" items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-white/10 hover:text-orange-500 transition"
        >
          Back
        </NavLink>
      </div>

      <Footer />
    </main>
  );
}
