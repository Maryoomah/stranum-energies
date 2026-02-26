import React from 'react';
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { CheckCircle2, ArrowRight, Settings, ShieldCheck, Zap, Globe, Package } from 'lucide-react';
import SEO from "../components/SEO";
import Section from "../components/Section";
import PageHero from "../components/PageHero";
import Footer from "../components/footer";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Service Not Found</h1>
          <Link to="/operations" className="text-orange-500 font-bold hover:underline">Return to Operations</Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <SEO 
        title={`${service.title} - Stranum Energies`}
        description={service.tagline || service.paragraph}
      />

      {/* 1. Hero Section */}
      <PageHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
      />

      {/* 2. Overview & Capabilities */}
      <Section bg="white" id="overview">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8">Integrated Technical Solutions</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {service.paragraph}
            </p>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-orange-500 w-6 h-6" />
              What We Deliver
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="mt-1 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span className="text-slate-700 font-medium text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-900 p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <Globe className="text-orange-400 w-10 h-10 mb-4" />
              <p className="text-white text-sm font-medium leading-relaxed">
                Our operations span across major energy hubs, ensuring global standards are met locally.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Operational Methodology */}
      <Section bg="soft" id="methodology">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Methodology</p>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Our Technical Approach</h2>
          <p className="text-slate-600">
            We employ a rigorous framework to ensure safety, efficiency, and reliability in every project phase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Settings className="w-10 h-10" />,
              title: "Assessment & Planning",
              desc: "Deep technical evaluation and risk assessment before any operational commencement."
            },
            {
              icon: <Zap className="w-10 h-10" />,
              title: "Execution Excellence",
              desc: "Deploying skilled professionals and advanced equipment to deliver on-time results."
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Verification & Quality",
              desc: "Post-execution audits to ensure all deliverables meet Stranum's high standards."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-extrabold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Infrastructure & Technology */}
      <Section bg="white" id="technology">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-blue-50 rounded-3xl">
                <Package className="w-10 h-10 text-blue-900 mb-4" />
                <h4 className="font-bold text-blue-900">Advanced Assets</h4>
              </div>
              <div className="p-8 bg-orange-50 rounded-3xl">
                <Zap className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-bold text-blue-900">Modern Tools</h4>
              </div>
              <div className="col-span-2 p-10 bg-slate-900 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Technological Edge</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We invest in state-of-the-art infrastructure to minimize operational downtime and maximize asset longevity for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Infrastructure</p>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Built for Reliability</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our {service.title.toLowerCase()} operations are backed by a robust supply chain and technical infrastructure designed to handle complex field requirements.
            </p>
            <ul className="space-y-4">
              {["Proprietary Monitoring Systems", "High-capacity Equipment", "Digitalized Workflow Management", "Real-time Data Analytics"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-900 font-bold">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Quality & Compliance */}
      <Section bg="soft" id="compliance">
        <div className="bg-blue-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Uncompromising Standards</h2>
              <p className="text-blue-100 leading-relaxed mb-8">
                In the delivery of {service.title.toLowerCase()}, we adhere to international safety and compliance standards and local regulatory requirements, ensuring that every operation is safe and compliant.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-orange-400" />
                  <span className="font-bold">HSE Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-orange-400" />
                  <span className="font-bold">Quality Audited</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-orange-400">Our Commitment</h4>
              <p className="text-sm text-blue-100 leading-relaxed italic">
                "We don't just provide services; we provide assurance. Our commitment to quality is the foundation of our client partnerships."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Related Services */}
      <Section bg="white" id="related">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">Explore More</p>
            <h2 className="text-3xl font-extrabold text-blue-900">Related Capabilities</h2>
          </div>
          <Link to="/operations" className="hidden md:flex items-center gap-2 text-blue-900 font-bold hover:text-orange-500 transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {otherServices.map((s, idx) => (
            <Link 
              key={idx} 
              to={`/services/${s.slug}`} 
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6">{s.tagline}</p>
                <div className="flex items-center text-orange-500 font-bold text-sm">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. CTA / Lead Gen */}
      <Section bg="premium" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Discuss Your Technical Requirements</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Our experts are ready to engineer solutions tailored to your specific operational challenges in {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-10 py-5 rounded-2xl transition-all shadow-lg shadow-orange-500/20 text-center"
            >
              Request a Consultation
            </Link>
            <Link 
              to="/operations" 
              className="bg-white/10 hover:bg-white/20 text-white font-extrabold px-10 py-5 rounded-2xl transition-all border border-white/10 text-center"
            >
              Back to Operations
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
