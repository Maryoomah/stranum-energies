import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/footer';
import Section from '../components/Section';
import { BlogCard } from '../components/Cards';
import { posts } from '../data/posts';
import { useForm } from "react-hook-form";
import StatusModal from "../components/StatusModal";
import { Send } from "lucide-react";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const [modalState, setModalState] = useState({ isOpen: false, type: "success", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onNewsletterSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@stranumenergies.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: data.email,
          _subject: "New Blog Newsletter Subscription",
          message: "A new user has subscribed from the Blog page sidebar."
        })
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: "success",
          message: "Subscription successful! You'll receive our monthly energy insights."
        });
        reset();
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setModalState({
        isOpen: true,
        type: "error",
        message: "Failed to subscribe. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = ["All", ...new Set(posts.map(p => p.category))];

  const filteredPosts = useMemo(() => {
    return posts.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                           p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const displayedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <main>
      <SEO 
        title="Energy Insights" 
        description="Latest news, insights, and expert opinions from Stranum Energies." 
      />
      
      <PageHero 
        title="ENERGY INSIGHTS" 
        subtitle="Expert perspectives on the evolving landscape of global and regional energy."
        image={`${import.meta.env.BASE_URL}images/hero3.jpg`}
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* SEARCH & FILTER (SIDEBAR) */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="text-blue-900 font-extrabold text-lg mb-2 flex items-center">
                Search Articles
                <span className="ml-3 h-1 w-8 bg-orange-500 rounded-full" />
              </h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-4">Find specific insights</p>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..." 
                  value={search}
                  onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <h3 className="text-blue-900 font-extrabold text-lg mb-2 flex items-center">
                Categories
                <span className="ml-3 h-1 w-8 bg-orange-500 rounded-full" />
              </h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-4">Explore by topic</p>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {setCategory(cat); setCurrentPage(1);}}
                    className={`text-left px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                      category === cat 
                      ? "bg-blue-900 text-white shadow-lg" 
                      : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-white hover:border-orange-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-orange-500 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Join Our Newsletter</h4>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Get the latest energy insights delivered to your inbox monthly.</p>
                <form onSubmit={handleSubmit(onNewsletterSubmit)} className="space-y-3">
                   <div className="relative">
                     <input 
                       type="email" 
                       {...register("email", { 
                         required: "Email is required",
                         pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                       })}
                       placeholder="Email Address" 
                       className={`w-full bg-white/20 border rounded-xl px-4 py-3 placeholder-white/60 outline-none focus:bg-white/30 transition-all ${errors.email ? 'border-white/60 ring-2 ring-white/20' : 'border-white/30'}`}
                     />
                     {errors.email && <p className="absolute left-0 -bottom-5 text-[10px] text-white font-bold">{errors.email.message}</p>}
                   </div>
                   <button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-white text-orange-600 font-black py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 mt-4"
                   >
                     {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-orange-600/20 border-t-orange-600 rounded-full animate-spin" />
                     ) : (
                        <>Sign Up <Send size={14} /></>
                     )}
                   </button>
                </form>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />
            </div>
          </div>

          {/* BLOG LIST */}
          <div className="lg:col-span-3">
            {displayedPosts.length > 0 ? (
              <div className="flex flex-col gap-8 mb-16">
                {displayedPosts.map((post, i) => (
                  <div key={post.slug} data-aos="fade-up" data-aos-delay={i * 100}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-medium text-lg">No articles found in this category.</p>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-12 h-12 rounded-xl font-bold transition-all ${
                      currentPage === i + 1
                      ? "bg-blue-900 text-white shadow-lg shadow-blue-950/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-orange-500"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      <StatusModal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        message={modalState.message}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
      />
      <Footer />
    </main>
  );
};

export default Blog;
