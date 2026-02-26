import React from 'react';
import { Mail, Briefcase, Award, Shield, Zap, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import SEO from "../components/SEO";
import Section from "../components/Section";
import PageHero from "../components/PageHero";
import Footer from "../components/footer";

export default function Careers() {
  return (
    <main>
      <SEO 
        title="Careers - Join Our Discipline Team"
        description="Build your career with Stranum Energies. Explore opportunities in a structured oil & gas organization focused on excellence and safety."
      />

      {/* 1. Hero Section */}
      <PageHero
        title="BUILD YOUR FUTURE"
        subtitle="Join a disciplined team delivering structured oil & gas operations."
        image={`${import.meta.env.BASE_URL}images/careers.png`}
      />

      {/* 2. Culture & Values */}
      <Section bg="white" id="culture">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Our Culture</p>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Driven by Excellence, Sustained by Discipline</h2>
          <p className="text-slate-600 leading-relaxed">
            At Stranum Energies, we foster an environment where technical expertise meets operational rigor. We value professionals who are committed to safety, efficiency, and continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8 text-orange-500" />,
              title: "Safety First",
              desc: "A culture where safety is not just a priority, but a fundamental value in every operation."
            },
            {
              icon: <Zap className="w-8 h-8 text-orange-500" />,
              title: "Operational Rigor",
              desc: "We follow structured frameworks to ensure precision and reliability in everything we do."
            },
            {
              icon: <Award className="w-8 h-8 text-orange-500" />,
              title: "Meritocracy",
              desc: "Recognition and advancement based on performance, integrity, and technical contribution."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Benefits & Perks */}
      <Section bg="soft" id="benefits">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Why Join Us</p>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Comprehensive Benefits for Our Workforce</h2>
            <p className="text-slate-500 mb-8">We offer industry-aligned incentives and wellness programs to support our technical elite.</p>
            <div className="space-y-6">
              {[
                { title: "Competitive Compensation", desc: "Industry-leading salary packages and performance-linked bonuses." },
                { title: "Health & Wellbeing", desc: "Comprehensive medical coverage for employees and their families." },
                { title: "Global Opportunities", desc: "Exposure to multi-national operations and diverse technical challenges." },
                { title: "Balanced Lifestyle", desc: "Flexible working arrangements where operational requirements allow." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/about2.jpg`} 
                alt="Work Culture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-900 p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-orange-400 font-bold text-4xl mb-2">Safety</p>
              <p className="text-white text-sm font-medium">Uptime and Reliability</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Professional Growth */}
      <Section bg="white" id="growth">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-blue-50 rounded-3xl p-8 flex flex-col justify-end">
                <TrendingUp className="w-10 h-10 text-blue-900 mb-4" />
                <p className="font-bold text-blue-900">Training Programs</p>
              </div>
              <div className="aspect-square bg-orange-50 rounded-3xl p-8 flex flex-col justify-end">
                <Users className="w-10 h-10 text-orange-500 mb-4" />
                <p className="font-bold text-blue-900">Mentorship</p>
              </div>
              <div className="col-span-2 bg-slate-900 rounded-3xl p-10 text-white">
                <Briefcase className="w-10 h-10 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Leadership Track</h3>
                <p className="text-slate-400 text-sm">We identify and nurture leaders from within, providing a clear path from technical roles to management positions.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Development</p>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Investing in Your Technical Mastery</h2>
            <p className="text-slate-600 mb-6 font-bold">Continuous learning for continuous excellence.</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              The energy sector is constantly evolving. We ensure our team stays ahead through continuous certifications, technical workshops, and exposure to cutting-edge field technologies.
            </p>
            <ul className="space-y-4">
              {["Technical Certification Support", "Soft Skills Development", "Internal Knowledge Exchange", "Cross-departmental Training"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-900 font-bold">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Open Positions */}
      <Section bg="soft" id="openings">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Current Opportunities</h2>
          <p className="text-slate-600">Explore open roles across our technical and administrative departments.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Empty State */}
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">No Current Vacancies</h3>
            <p className="text-slate-500 max-w-lg mx-auto mb-8">
              We don't have any active openings right now, but we are always looking for exceptional talent. Submit your CV to our talent pool for future consideration.
            </p>
            <a 
              href="mailto:careers@stranumenergies.com" 
              className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors"
            >
              Contact HR Department <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Section>

      {/* 6. Hiring Process */}
      <Section bg="white" id="process">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">How We Hire</p>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Our Recruitment Framework</h2>
          <p className="text-slate-600">A rigorous, transparent process to identify professionals who align with our discipline.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Application", desc: "Submit your technical CV and cover letter for review." },
            { step: "02", title: "Initial Screening", desc: "A brief conversation with our HR team to align expectations." },
            { step: "03", title: "Technical Review", desc: "In-depth assessment of your skills by departmental leads." },
            { step: "04", title: "Onboarding", desc: "Formal offer and structured integration into our operations." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-slate-100 group-hover:text-orange-100 transition-colors absolute -top-8 -left-2 z-0">
                {item.step}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. CTA / Talent Pool */}
      <Section bg="premium" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Ready to Make an Impact?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            If you thrive in a environment that values technical discipline and operational excellence, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@stranumenergies.com?subject=Expression of Interest - [Your Name]" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-10 py-5 rounded-2xl transition-all shadow-lg shadow-orange-500/20 text-center"
            >
              Submit Expression of Interest
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
