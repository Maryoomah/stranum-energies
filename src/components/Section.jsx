import React from 'react';

const Section = ({ 
  children, 
  className = "", 
  bg = "white", // white, soft, dark, premium
  id = "",
  aos = "fade-up",
  aosDelay = 0,
  noPadding = false
}) => {
  const bgClasses = {
    white: "bg-white",
    soft: "bg-[#f8fafc]",
    dark: "bg-[#0F1E3A]",
    premium: "bg-gradient-to-br from-[#0F1E3A] to-[#1e293b]"
  };

  const paddingClass = noPadding ? "" : "py-16 md:py-24";

  return (
    <section 
      id={id} 
      className={`${bgClasses[bg] || bg} ${paddingClass} ${className} relative overflow-hidden`}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
