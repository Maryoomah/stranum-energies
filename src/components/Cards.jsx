import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  return (
    <Link 
      to={`/services/${service.slug}`} 
      className="group premium-card block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2">Service</p>
          <h3 className="text-white text-2xl font-extrabold group-hover:text-orange-400 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="p-8">
        <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
          {service.paragraph}
        </p>
        <div className="flex items-center text-blue-900 font-bold group-hover:gap-2 transition-all">
          Learn More 
          <span className="ml-2 text-orange-500">→</span>
        </div>
      </div>
    </Link>
  );
};

export const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={`/projects/${project.id}`} 
      className="group premium-card block bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute top-6 right-6">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-slate-900 text-xl font-extrabold mb-3 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex items-center">
          <svg className="w-4 h-4 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </p>
        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-full" />
        </div>
      </div>
    </Link>
  );
};

export const BlogCard = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className="group premium-card flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
    >
      <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">{post.category}</span>
          <span className="text-xs text-slate-400 font-medium">{post.date}</span>
        </div>
        <h3 className="text-2xl font-extrabold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center text-sm font-bold text-blue-900 group-hover:text-orange-500 transition-colors">
          Read Article <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
};
