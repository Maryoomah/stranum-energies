import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { services } from "../data/services";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Home() {
  const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
  const heroSlides = [
    `${import.meta.env.BASE_URL}images/hero1.jpg`,
    `${import.meta.env.BASE_URL}images/hero2.jpg`,
    `${import.meta.env.BASE_URL}images/hero3.jpg`,
  ];
  const sectionSlides = [
    `${import.meta.env.BASE_URL}images/hero1.jpg`,
    `${import.meta.env.BASE_URL}images/hero3.jpg`,
  ];
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
  return (
    <main>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="absolute inset-0 h-full w-full z-0"
        >
          {heroSlides.map((src) => (
            <SwiperSlide key={src} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* Navbar on hero */}
        <div className="absolute top-0 left-0 w-full z-60">
          <Navbar />
        </div>

        {/* Hero content*/}
        <div className="absolute inset-0 z-20">
          <div className={`${container} h-full flex items-center`}>
            <div className="max-w-2xl pt-20 md:pt-24" data-aos="fade-right">
              <p className="text-white/80 font-semibold tracking-widest uppercase text-sm">
                Stranum Energies
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05]">
                Structured Energy{" "}
                <span className="text-orange-400">Disciplined Execution</span>
              </h1>

              <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
                Integrated oil & gas operations with strong downstream delivery,
                built on compliance, reliability, and performance-driven
                systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/operations"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-white/20 hover:text-white transition"
                >
                  Explore Operations
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-orange-500"
                >
                  Discuss Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-20 bg-white" data-aos="fade-right">
        <div className={container}>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start ">
            <div className="max-w-2xl" data-aos="fade-up">
              <p className="text-xl uppercase tracking-widest font-semibold text-orange-500">
                About Stranum
              </p>

              <h2 className="mt-10 text-3xl md:text-5xl font-extrabold text-blue-900 leading-[1.1]">
                Disciplined Energy.{" "}
                <span className="text-orange-500">Structured Performance.</span>
              </h2>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Stranum Energies is a performance-driven oil & gas company
                delivering reliable upstream participation and strong downstream
                execution across integrated energy operations.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-white/20 hover:text-orange-500 transition"
                >
                  Read More
                </Link>

                <Link
                  to="/operations"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 font-extrabold text-blue-900 hover:bg-blue-900 hover:text-white transition"
                >
                  Explore Operations
                </Link>
              </div>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}images/hero1.jpg`}
              alt="Stranum Energy"
              className="w-full h-105 object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20" data-aos="fade-left">
        <div className={container}>
          <h2 className="text-3xl uppercase font-bold text-orange-500 ">
            Our Services
          </h2>

          <div className="mt-10">
            <Swiper
              className="servicesSwiper"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true, el: ".services-pagination" }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              onSwiper={(swiper) => {
                swiper.params.pagination.el = ".services-pagination";
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }}
            >
              {services.map((s) => (
                <SwiperSlide key={s.slug}>
                  <NavLink to={`/services/${s.slug}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-4 bg-blue-100">
                        <h3 className="text-xl font-bold text-blue-900">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="services-pagination mt-6 flex justify-center" />
          </div>
        </div>
      </section>

      {/* INTEGRATED */}
      <section className="relative w-full min-h-[80svh] md:h-screen overflow-hidden">
        {/* BG SLIDER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {sectionSlides.map((src) => (
              <SwiperSlide key={src}>
                <div
                  className="h-full w-full bg-cover"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "50% 25%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-20 h-full">
          <div
            className={`${container} h-full flex items-center px-4 sm:px-6 lg:px-8 py-16 md:py-0`}
          >
            <div className="w-full">
              <p
                className="text-2xl md:text-3xl uppercase tracking-widest font-semibold text-orange-500"
                data-aos="fade-up"
              >
                Integrated Energy Model
              </p>

              <h2
                className="mt-10 text-3xl md:text-4xl font-extrabold text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Delivering value across the{" "}
                <span className="text-orange-400">oil & gas chain</span>.
              </h2>

              <p
                className="mt-4 text-white/85 max-w-2xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Stranum Energies operates across upstream participation,
                downstream distribution, and infrastructure oversight —
                integrating structured execution with performance-driven
                delivery.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Upstream Participation",
                    text: "Field support services, development coordination, and operational collaboration across exploration and production environments.",
                  },
                  {
                    title: "Downstream Distribution",
                    text: "Structured petroleum product supply, logistics coordination, and disciplined distribution systems.",
                  },
                  {
                    title: "Infrastructure & Assets",
                    text: "Lifecycle asset management, compliance oversight, and infrastructure performance optimization.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 backdrop-blur-sm p-7 border border-white/10"
                    data-aos="fade-up"
                    data-aos-delay={250 + i * 100}
                  >
                    <div className="h-1.5 w-12 rounded-full bg-orange-400" />
                    <h3 className="mt-4 text-lg font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-white/85 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* core values */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div data-aos="fade-up">
            <h2 className="text-3xl  font-bold uppercase text-blue-900">
              Core <span className="text-orange-500">Values</span>
            </h2>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div
              className="hidden md:flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="120"
            ></div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HSE */}
      <section className="py-16 md:py-20 bg-slate-200">
        <div className={container}>
          <p
            className="text-3xl uppercase tracking-widest font-semibold text-orange-600"
            data-aos="fade-up"
          >
            HSE
          </p>

          <h2
            className="mt-4 text-3xl md:text-4xl font-extrabold text-blue-900 leading-[1.1]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Safety-first operations.{" "}
            <span className="text-orange-500">
              Compliance-driven execution.
            </span>
          </h2>

          <p
            className="mt-5 text-gray-600 font-semibold max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Health, Safety & Environment framework guides risk control, safe
            work practices, and regulatory alignment across every operational
            activity.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Safety Culture",
                text: "Structured safety practices, toolbox talks, and supervision to reduce exposure and incidents.",
              },
              {
                title: "Compliance & Reporting",
                text: "Documented processes, audits, and reporting aligned with internal standards and regulatory requirements.",
              },
              {
                title: "Environmental Responsibility",
                text: "Operational controls that support spill prevention, waste management, and environmental protection.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-7 shadow-sm hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={250 + i * 100}
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

          <div
            className="mt-10 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NavLink
              to="/hse"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-extrabold text-white hover:bg-amber-600 transition"
            >
              View HSE Approach
            </NavLink>
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

export default Home;
