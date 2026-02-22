import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import SEO from "../components/SEO";
import Section from "../components/Section";
import Footer from "../components/footer";
import { ServiceCard, ProjectCard, BlogCard } from "../components/Cards";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { posts } from "../data/posts";

function Home() {
  const container = "max-w-7xl mx-auto px-6 sm:px-8";
  
  const heroSlides = [
    { src: `${import.meta.env.BASE_URL}images/hero1.jpg`, tag: "Stranum Energies", title: "Structured Energy. Disciplined Execution.", subtext: "Delivering integrated energy solutions with precision and technical rigor across the value chain." },
    { src: `${import.meta.env.BASE_URL}images/hero2.jpg`, tag: "Performance Driven", title: "Integrated Oil & Gas Operations.", subtext: "Expert technical field services and operational support for upstream and midstream assets." },
    { src: `${import.meta.env.BASE_URL}images/hero3.jpg`, tag: "Reliability First", title: "Strong Downstream Delivery.", subtext: "Robust logistics and distribution networks ensuring safe, timely petroleum product delivery." },
  ];

  const values = [
    { title: "Operational Discipline", desc: "Structured systems and defined processes drive consistent results." },
    { title: "Safety Excellence", desc: "We uphold uncompromising safety standards across all operations." },
    { title: "Reliability", desc: "We deliver on commitments and maintain dependable supply chains." },
  ];

  return (
    <main>
      <SEO title="Home" description="Stranum Energies - Integrated oil & gas operations built on compliance, reliability, and performance." />

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i} className="h-full w-full">
              <div className="relative h-full w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${slide.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className={`${container} w-full`}>
                    <div className="max-w-3xl" data-aos="fade-right">
                      <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-md">
                        {slide.tag}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-2xl uppercase">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                        {slide.subtext}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/operations" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl hover:shadow-orange-500/20 uppercase tracking-widest text-sm">
                          Explore Operations
                        </Link>
                        <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all uppercase tracking-widest text-sm">
                          Discuss Partnership
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. ABOUT MINI SECTION */}
      <Section bg="white" id="about">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-slate-900 rounded-4xl p-12 md:p-20 text-center relative overflow-hidden" data-aos="zoom-in">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">About Stranum</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
              Reliable Energy. <span className="text-orange-500">Structured Excellence.</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Stranum Energies is a performance-driven company delivering reliable upstream technical participation and strong downstream execution across the integrated energy value chain.
            </p>
            <Link to="/about" className="inline-flex items-center text-orange-400 font-black text-lg group">
              Discover Our Story 
              <span className="ml-3 w-12 h-1 bg-white rounded-full transition-all group-hover:w-16" />
            </Link>
          </div>
          <div className="relative" data-aos="fade-left">
              <div className="aspect-square bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl">
                <img src={`${import.meta.env.BASE_URL}images/about1.jpg`} alt="Operations" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-orange-500 p-10 rounded-[3rem] shadow-2xl hidden md:block">
                <p className="text-white font-black text-2xl">Premium<br/>Energy<br/>Solutions</p>
             </div>
          </div>
        </div>
      </Section>

      {/* 3. CORE SERVICES HIGHLIGHT */}
      <Section bg="soft">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Integrated Capability</h3>
          <p className="text-slate-600">Specialized services designed for operational resilience and technical excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((s, i) => (
             <div key={s.slug} data-aos="fade-up" data-aos-delay={i * 100}>
                <ServiceCard service={s} />
             </div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <Link to="/operations" className="bg-blue-950 text-white font-bold px-12 py-5 rounded-2xl hover:bg-orange-500 transition-all shadow-xl">
              View All Services
           </Link>
        </div>
      </Section>

      {/* 4. KEY PROJECTS PREVIEW */}
      <Section bg="dark" className="text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-6">Recent Work</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-4">Delivering Outcomes</h3>
            <p className="text-blue-100/70">A showcase of our commitment to technical discipline and project success.</p>
          </div>
          <Link to="/projects" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl">
             Explore All Projects
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.slice(0, 3).map((p, i) => (
              <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
                 <ProjectCard project={p} />
              </div>
           ))}
        </div>
      </Section>

      {/* 5. VALUES & CULTURE */}
      <Section bg="white">
        <div className="grid lg:grid-cols-3 gap-8">
           {values.map((v, i) => (
             <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-orange-200 transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-1 bg-orange-500 mb-8 rounded-full group-hover:w-24 transition-all" />
                <h4 className="text-2xl font-black text-blue-950 mb-6">{v.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{v.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 6. LATEST INSIGHTS (BLOG) */}
      <Section bg="soft">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Knowledge</h2>
            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Energy Insights</h3>
            <p className="text-slate-600 text-sm">Stay updated with the latest trends and technical analyses in the energy sector.</p>
          </div>
          <Link to="/blog" className="text-blue-900 font-black flex items-center group">
             Read Full Journal <span className="ml-3 w-8 h-1 bg-orange-500 rounded-full group-hover:w-16 transition-all" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           {posts.slice(0, 2).map((post, i) => (
              <div key={post.slug} data-aos="fade-up" data-aos-delay={i * 100}>
                 <BlogCard post={post} />
              </div>
           ))}
        </div>
      </Section>

      {/* 7. CTA PARTNERSHIP */}
      <Section bg="premium" className="text-white text-center pb-32">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
           <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Ready to Align for Performance?</h2>
           <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">From terminal optimization to field service coordination, we deliver disciplined results.</p>
           <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-16 py-6 rounded-[2rem] transition-all shadow-2xl hover:scale-105 active:scale-95 inline-block text-xl">
              Discuss Partnership
           </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </Section>

      <Footer />
    </main>
  );
}

export default Home;
