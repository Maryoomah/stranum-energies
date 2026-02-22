import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/footer';
import Section from '../components/Section';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <Navigate to="/projects" />;

  return (
    <main>
      <SEO 
        title={project.title} 
        description={project.description} 
        image={project.image}
      />
      
      <PageHero 
        title={project.title.toUpperCase()} 
        subtitle={`${project.category} | ${project.location}`}
        image={project.image}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div data-aos="fade-up">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-6 flex items-center">
                Project Overview
                <span className="ml-4 h-1 w-12 bg-orange-500 rounded-full" />
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100" data-aos="fade-up">
                <h3 className="text-xl font-extrabold text-blue-900 mb-4">The Challenge</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{project.challenge}</p>
              </div>
              <div className="bg-blue-900 p-8 rounded-3xl text-white" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-extrabold mb-4 text-orange-400">The Solution</h3>
                <p className="text-white/80 leading-relaxed text-sm">{project.solution}</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-6 flex items-center">
                The Outcome
                <span className="ml-4 h-1 w-12 bg-orange-500 rounded-full" />
              </h2>
              <div className="bg-white border-2 border-orange-100 p-10 rounded-[3rem] shadow-xl shadow-orange-500/5">
                <p className="text-slate-800 text-xl font-medium leading-relaxed italic">
                  "{project.impact}"
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
              <h3 className="text-xl font-extrabold mb-8 border-b border-white/10 pb-4">Project Details</h3>
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-lg font-medium">{project.status}</p>
                </li>
                <li>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Category</p>
                  <p className="text-lg font-medium">{project.category}</p>
                </li>
                <li>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">{project.location}</p>
                </li>
              </ul>
            </div>

            <div className="p-8 border-4 border-slate-50 rounded-[2.5rem]">
              <h4 className="text-blue-900 font-extrabold mb-4">Want to discuss a similar project?</h4>
              <p className="text-slate-500 text-sm mb-6">Let's align our disciplines to deliver your next outcome.</p>
              <Link to="/contact" className="block text-center bg-orange-500 text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
