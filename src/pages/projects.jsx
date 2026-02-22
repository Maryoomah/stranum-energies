import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/footer';
import Section from '../components/Section';
import { ProjectCard } from '../components/Cards';
import { projects } from '../data/projects';

const Projects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                           p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const displayedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <main>
      <SEO 
        title="Our Projects" 
        description="Explore Stranum Energies' portfolio of successful energy projects across Nigeria." 
      />
      
      <PageHero 
        title="OUR PROJECTS" 
        subtitle="Vast industrial outcomes delivered through disciplined execution and structured planning."
        image={`${import.meta.env.BASE_URL}images/hero2.jpg`}
      />

      <Section bg="soft">
        {/* FILTERS & SEARCH */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}}
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm"
            />
            <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {setCategory(cat); setCurrentPage(1);}}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                  category === cat 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-orange-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        {displayedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedProjects.map((p, i) => (
              <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400 font-medium">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setSearch(""); setCategory("All");}}
              className="mt-4 text-orange-500 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-12 h-12 rounded-xl font-bold transition-all ${
                  currentPage === i + 1
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-orange-500"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </Section>

      <Footer />
    </main>
  );
};

export default Projects;
