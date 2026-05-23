import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const sectors = [
  { id: "real-estate", name: "Real Estate Projects", image: gbg1, color: "bg-[#2D2D2D]", tagline: "Integrated township streetscapes.", desc: "Custom supplied benches, planters boxes, and car shelter sheds for premium residential townships nationwide.", path: "/solutions/real-estate" },
  { id: "hospitality", name: "Hospitality & Hotels", image: gbg2, color: "bg-[#2C5F2E]", tagline: "Luxury resort & poolside lounge layouts.", desc: "Hand-woven premium wicker outdoor sofas, cabanas, and sunscape poolside loungers for high-end hospitality brands.", path: "/solutions/hospitality" },
  { id: "healthcare", name: "Healthcare & Hospitals", image: gbg3, color: "bg-[#2D2D2D]", tagline: "Therapeutic healing gardens & clinics.", desc: "Anti-microbial public benches, trash bins, and wheelchair-accessible ramps engineered for hospital parameters.", path: "/solutions/healthcare" },
  { id: "education", name: "Education & Universities", image: gbg4, color: "bg-[#2C5F2E]", tagline: "Campus seating & social break zones.", desc: "Heavy-duty steel integrated tables and benches tailored for school and university campus dining plazas.", path: "/solutions/education" },
  { id: "municipal-smart-city", name: "Municipal & Smart Cities", image: gbg5, color: "bg-[#2D2D2D]", tagline: "Intelligent public transit infrastructure.", desc: "Solar-powered bus shelters, heavy-traffic bins, SS bollards, and modular parklets for public infrastructure.", path: "/solutions/municipal-smart-city" }
];

const SolutionsHub = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Industry Furniture Solutions | Urbanland Products",
      description: "Explore customized street furniture solutions for Real Estate, Hospitality, Hotels, Healthcare, Universities, and Smart City Municipalities.",
      og_image: gbg1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Industry Verticals</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Architectural Solutions <br/>
          <span className="text-[#C9A84C]">for Every Sector.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We manufacture specialized furniture configurations tailored to the strict spatial, structural, and aesthetic requirements of diverse industry projects.
        </p>
      </section>

      {/* Sectors Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-10">
          {sectors.map((sec, idx) => (
            <Link
              key={sec.id}
              to={sec.path}
              className={`w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-black/[0.04] p-8 md:p-12 text-white flex flex-col lg:flex-row justify-between gap-8 cursor-pointer no-underline group ${sec.color}`}
            >
              {/* Left text column */}
              <div className="w-full lg:w-[50%] flex flex-col justify-between py-2">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-black/20 px-3 py-1 rounded-full border border-white/10 w-fit mb-4 block">
                    0{idx + 1} / 05
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-[#C9A84C] transition-colors leading-none">
                    {sec.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#C9A84C]/90 mb-4 font-mono uppercase tracking-wide">
                    — {sec.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg mt-4">
                    {sec.desc}
                  </p>
                </div>
                
                <span className="text-xs font-bold uppercase tracking-wider group-hover:underline text-[#C9A84C] mt-8 block">
                  Explore Vertical Case Studies →
                </span>
              </div>
              
              {/* Right image visual */}
              <div className="w-full lg:w-[45%] h-[240px] lg:h-auto rounded-[2rem] overflow-hidden bg-black/10 relative shrink-0">
                <img
                  src={sec.image}
                  alt={sec.name}
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SolutionsHub;
