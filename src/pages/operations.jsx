import React from 'react';
import { NavLink } from "react-router-dom";
import SEO from '../components/SEO';
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Footer from "../components/footer";
import { ServiceCard } from '../components/Cards';
import { services } from "../data/services";

export default function Operations() {
// removed unused container variable

  return (
    <main>
      <SEO 
        title="Operations & Execution" 
        description="Structured execution and compliance-first operations across the integrated energy value chain." 
      />

      {/* 1. HERO SECTION */}
      <PageHero
        title="OPERATIONS"
        subtitle="Our capabilities across exploration, field services, logistics, and asset management."
        image={`${import.meta.env.BASE_URL}images/Drilling.jpg`}
      />

      {/* 2. CORE CAPABILITIES (Revised Grid) */}
      <Section bg="white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Execution</h2>
            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Core Capabilities</h3>
            <p className="text-slate-600">Services built for disciplined execution and industrial reliability.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
             <div key={s.slug} data-aos="fade-up" data-aos-delay={i * 100}>
                <ServiceCard service={s} />
             </div>
          ))}
        </div>
      </Section>

      {/* 3. TECHNICAL METHODOLOGY (NEW) */}
      <Section bg="soft">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
             <img src={`${import.meta.env.BASE_URL}images/hero2.jpg`} alt="Technical Ops" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Expertise</h2>
            <h3 className="text-4xl font-black text-blue-950 mb-4">Structured Methodology</h3>
            <p className="text-slate-500 mb-8">We employ a rigorous framework to ensure safety, efficiency, and reliability in every project phase.</p>
            <div className="space-y-8">
               {[
                 { title: "Standard Operating Procedures", desc: "Every project follow a rigorous SOP framework to ensure consistency and risk mitigation." },
                 { title: "Technical Supervision", desc: "On-site experts oversee every phase of execution to maintain high-grade performance." },
                 { title: "Regulatory Alignment", desc: "Compliance is embedded into our planning, from local laws to international standards." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex-shrink-0 flex items-center justify-center font-black">{i+1}</div>
                    <div>
                       <h4 className="text-xl font-black text-blue-900 mb-2">{item.title}</h4>
                       <p className="text-slate-600 font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. OPERATIONAL APPROACH (Expanded Cards) */}
      <Section bg="white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">The Stranum Way</h2>
          <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Disciplined Systems</h3>
          <p className="text-slate-600">Robust operational frameworks that guarantee stability and predictable outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Structured Planning", text: "Feasibility analysis, scope definition, and execution planning for efficient delivery." },
            { title: "Field Expertise", text: "Proven engineering methodologies and field-ready teams aligned with industry standards." },
            { title: "Compliance Core", text: "Compliance embedded across operations, documentation, and reporting processes." },
            { title: "Optimization", text: "Continuous monitoring and improvement to reduce downtime and improve asset output." },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
              <h4 className="text-xl font-black text-blue-950 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. TECHNOLOGY & INNOVATION (NEW) */}
      <Section bg="premium" className="text-white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div data-aos="fade-right">
              <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-6">Innovation</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-8">Modernizing the Chain</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                 We leverage digital monitoring tools and automated tracking systems to provide real-time visibility into logistics and asset health.
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                    <p className="text-2xl font-black text-orange-400">Real-Time</p>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Fleet Tracking</p>
                 </div>
                 <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                    <p className="text-2xl font-black text-orange-400">Digital</p>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Inventory Mgmt</p>
                 </div>
              </div>
           </div>
           <div className="relative" data-aos="fade-left">
              <div className="bg-linear-to-tr from-orange-500 to-amber-400 rounded-[3rem] p-1 h-96">
                 <img src={`${import.meta.env.BASE_URL}images/hero3.jpg`} className="w-full h-full object-cover rounded-[2.9rem]" alt="Innovation" />
              </div>
           </div>
        </div>
      </Section>

      {/* 6. QUALITY ASSURANCE (NEW) */}
      <Section bg="white">
         <div className="max-w-4xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden" data-aos="zoom-in">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">Quality Control</h2>
            <h3 className="text-3xl font-black text-blue-950 mb-8 leading-tight">Zero-Compromise Standards</h3>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto font-medium">
               Our dedicated Quality Management team ensures every deliverable meets or exceeds client specifications and international safety codes.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">✓</div>
                  <span className="font-black text-blue-950 uppercase tracking-tighter">Rigorous Audits</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">✓</div>
                  <span className="font-black text-blue-950 uppercase tracking-tighter">Code Compliance</span>
               </div>
            </div>
         </div>
      </Section>

      {/* 7. CTA discussed partnership */}
      <Section bg="soft" className="pb-32">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
           <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Ready for Disciplined Execution?</h3>
           <p className="text-slate-600 mb-10 max-w-xl mx-auto">Let's align our technical resources to deliver your next industrial outcome with precision.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/contact" className="bg-orange-500 text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all text-lg">
                 Discuss Partnership
              </NavLink>
              <NavLink to="/projects" className="bg-white text-blue-900 font-black px-12 py-5 rounded-2xl border border-slate-200 hover:border-orange-500 shadow-sm transition-all text-lg">
                 See Our Work
              </NavLink>
           </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
