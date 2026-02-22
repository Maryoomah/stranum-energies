import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/footer';
import Section from '../components/Section';
import { posts } from '../data/posts';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  return (
    <main>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        image={post.image}
      />
      
      <PageHero 
        title="ARTICLE" 
        subtitle={post.category}
        image={post.image}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                 {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Author</p>
                <p className="text-blue-900 font-extrabold">{post.author}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-100 hidden sm:block" />
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Published</p>
              <p className="text-blue-900 font-extrabold">{post.date}</p>
            </div>
            <div className="ml-auto flex gap-2">
               {['fb', 'tw', 'ln'].map(s => (
                 <div key={s} className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer text-[10px] font-bold uppercase">{s}</div>
               ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-10 leading-[1.15]" data-aos="fade-up">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed mb-16" data-aos="fade-up">
            <p className="text-xl font-medium text-slate-900 mb-8">{post.excerpt}</p>
            {post.content}
            {/* Adding more dummy content to make it look substantial */}
            <p className="mt-8">Furthermore, the integration of structured performance metrics allows for a transparent view of operational health. This data-driven approach ensures that all stakeholders are aligned on project scopes and outcomes. In the coming years, the energy sector will increasingly rely on these disciplines to navigate volatilities and seize emerging opportunities.</p>
            <h2 className="text-2xl font-extrabold text-blue-900 mt-12 mb-6">Strategic Alignment</h2>
            <p>Our commitment to excellence translates into every phase of the energy value chain. By focusing on field coordination and logistics optimization, we provide a backbone for regional industrial growth. The 'Stranum Way' is more than just a motto; it is a rigorous framework for success in a complex market.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-12 text-center" data-aos="zoom-in">
             <h3 className="text-2xl font-extrabold text-blue-900 mb-6 underline decoration-orange-500 decoration-4 underline-offset-8">Continue the Conversation</h3>
             <p className="text-slate-600 mb-8 max-w-xl mx-auto">We value perspectives from industry peers and partners. Reach out to discuss how these insights apply to your operations.</p>
             <Link to="/contact" className="inline-block bg-blue-900 text-white font-bold px-12 py-4 rounded-2xl hover:bg-orange-500 transition-all shadow-xl">
                Contact Our Experts
             </Link>
          </div>

          <div className="mt-20 flex justify-between items-center border-t border-slate-100 pt-10">
             <Link to="/blog" className="text-blue-900 font-bold flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-xl">←</span> Back to Insights
             </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default BlogDetail;
