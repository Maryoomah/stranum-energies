import React from 'react';
import { Link } from "react-router-dom";
import { User } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Footer from "../components/footer";

function About() {
  const values = [
    { title: "Operational Discipline", desc: "Structured systems and defined processes drive consistent results across the value chain." },
    { title: "Safety Leadership", desc: "We uphold uncompromising safety standards as a primary operational benchmark." },
    { title: "Strategic Reliability", desc: "We deliver on commitments and maintain dependable, resilient supply chains." },
    { title: "Accountability", desc: "Clear ownership and transparent reporting guide every phase of our performance." },
    { title: "Continuous Excellence", desc: "We pursue procedural improvement in every aspect of our integrated business." },
    { title: "Corporate Integrity", desc: "Our actions are guided by ethical standards and regulatory alignment." },
  ];

  const teamMembers = [
    { 
      name: "Chris Enuma", 
      role: "Acting CEO & Executive Director (Technical)", 
      bio: "Chris holds a B.Eng from the University of Benin and M.Eng in Petroleum Engineering from the University of Lagos. He has over 30 years of diverse surface and subsurface experience in the Oil and Gas industry and has previously occupied various leadership roles in Total Energies before joining Stranum.",
      image: "/images/img.png" 
    },
    { 
      name: "Gbenga Ojofeitimi", 
      role: "Director of Strategy & Expansion", 
      bio: "Gbenga is a seasoned professional with over 35 years’ experience in the Nigerian oil and gas industry. He obtained his mechanical engineering degree from the University of Lagos in 1989. He is a member of NSE and COREN.",
      image: "/images/img.png" 
    },
    { 
      name: "Chima Osuji", 
      role: "Director", 
      bio: "Chima is a seasoned energy professional with over 35 years’ experience. He started his career as an MWD Engineer with Smith International and later as Coiled Tubing Engineer with Halliburton. He is a member of NSE and COREN.",
      image: "/images/img.png" 
    },
  ];

  const managementStaff = [
    { name: "Chris Enuma", role: "Acting CEO" },
    { name: "GM Technical", role: "Management" },
    { name: "CFO", role: "Management" },
  ];

  return (
    <main>
      <SEO 
        title="About Our Discipline" 
        description="Learn about Stranum Energies' commitment to structured energy execution and operational reliability." 
      />

      {/* 1. HERO SECTION */}
      <PageHero
        title="ABOUT OUR DISCIPLINE"
        subtitle="Built on the foundation of structured performance and industrial reliability in the oil & gas sector."
        image={`${import.meta.env.BASE_URL}images/Drilling.jpg`}
      />

      {/* 2. THE STRANUM STORY */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-right">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Our Narrative</h2>
            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Established in Expertise.</h3>
            <p className="text-slate-500 mb-8">Headquartered in Port Harcourt, in the heart of the Niger Delta.</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Stranum Energies is an indigenous oil and gas producing company poised to acquire and operate assets in the Niger Delta region and beyond. We operate with a mix of innovation, talent, and technologies which positions us as a future energy power-house.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Although relatively young, the Company has assembled a world-class team of seasoned professionals with expertise spanning an average experience of 20 years cutting across critical operations in the Niger Delta region.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className="space-y-4">
              <img src={`${import.meta.env.BASE_URL}images/about1.jpg`} className="rounded-3xl shadow-lg w-full h-80 object-cover" alt="Ops 1" />
              <div className="bg-orange-500 h-32 rounded-3xl" />
            </div>
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about.jpg`} 
                  alt="Our Heritage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. VISION & MISSION CARDS */}
      <Section bg="soft">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100" data-aos="fade-up">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl mb-8 flex items-center justify-center text-orange-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">Our Vision</h4>
            <p className="text-2xl font-black text-blue-950 leading-tight">To be the benchmark for strength and performance-driven delivery in regional energy.</p>
          </div>
          <div className="bg-blue-900 p-12 rounded-[3.5rem] shadow-xl text-white" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 bg-white/10 rounded-2xl mb-8 flex items-center justify-center text-orange-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">Our Mission</h4>
            <p className="text-2xl font-black leading-tight text-white">Delivering efficient energy solutions through disciplined operations and safety leadership.</p>
          </div>
        </div>
      </Section>

      {/* 4. PERFORMANCE VALUES */}
      <Section bg="white">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Our DNA</h2>
           <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Performance Pillars</h3>
           <p className="text-slate-600">The core values that define our technical and operational discipline.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {values.map((v, i) => (
             <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group" data-aos="fade-up">
                <h4 className="text-xl font-black text-blue-950 mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{v.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 5. LEADERSHIP TEAM */}
      <Section bg="dark" className="text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-6">Board of Directors</h2>
           <h3 className="text-3xl md:text-4xl font-black mb-4">Our Leadership</h3>
           <p className="text-blue-100/70">A team of experts dedicated to safety, compliance, and industrial excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((m, i) => (
              <div key={i} className="group bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
                 <div className="aspect-square w-24 h-24 rounded-2xl mb-6 border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-700 group-hover:bg-orange-500">
                    <User className="w-12 h-12 text-white/20 group-hover:text-white transition-colors duration-700" />
                 </div>
                 <h4 className="text-2xl font-black mb-1 text-white">{m.name}</h4>
                 <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-4">{m.role}</p>
                 <p className="text-blue-100/60 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black mb-4">Management Staff</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {managementStaff.map((s, i) => (
              <div key={i} className="bg-white/5 px-10 py-6 rounded-2xl border border-white/10 text-center">
                <h4 className="text-lg font-black text-white">{s.name}</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. OUR STRATEGY (NEW) */}
      <Section bg="soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Execution Path</h2>
            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Our Strategy</h3>
          </div>
          <div className="space-y-8 bg-white p-12 md:p-20 rounded-[4rem] shadow-sm border border-slate-100">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Our growth strategy is based on a long-term perspective for developing our business with a special focus on operating in accordance with industry best practices.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Our structured operational systems, experienced workforce, and commitment to excellence enable us to maintain stable production, optimize assets, and deliver consistent supply to our partners and clients.
            </p>
            <div className="pt-8 border-t border-slate-100">
              <p className="text-2xl font-black text-blue-950 italic">
                "Stranum: World-Class Hydrocarbon extraction with indigenous flavour. The future is here."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. STRATEGIC PARTNERS (NEW)
      <Section bg="white">
         <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Working With The Best</h2>
            <h3 className="text-3xl font-black text-blue-950 mb-4">Strategic Alignment</h3>
            <p className="text-slate-500">Collaborating with industry leaders to deliver integrated energy outcomes.</p>
         </div>
         <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
            // Placeholder for partner logos
            <div className="h-12 w-32 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400">PARTNER 1</div>
            <div className="h-12 w-32 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400">PARTNER 2</div>
            <div className="h-12 w-32 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400">PARTNER 3</div>
            <div className="h-12 w-32 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400">PARTNER 4</div>
         </div>
      </Section>
      */}

      {/* 7. CTA CAREERS */}
      <Section bg="soft">
         <div className="bg-orange-500 rounded-[4rem] p-16 text-center text-white relative overflow-hidden" data-aos="zoom-in">
            <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-black mb-6">Drive the Future of Energy</h3>
               <p className="text-white/80 mb-10 max-w-xl mx-auto">We are always looking for disciplined professionals to join our technical and operational teams.</p>
               <Link to="/careers" className="bg-white text-orange-600 font-black px-12 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
                  Join Our Team
               </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
         </div>
      </Section>

      <Footer />
    </main>
  );
}

export default About;
