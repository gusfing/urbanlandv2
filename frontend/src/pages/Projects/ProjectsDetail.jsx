import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const projectsMeta = {
  "lodha": {
    title: "Lodha Group Townships",
    client: "Lodha Developers (Macrotech)",
    supplied: "420+ WPC benches, SS linear benches, customized GFRC cultivation planter systems.",
    volume: "Multiple Township sites in MMR & Pune",
    standards: "Custom structural stability, FSC timbers, C5 corrosion barrier powder coating.",
    desc: "We worked as a primary site vendor for Lodha's premium residential townships, delivering high-durability benches and planter islands designed to foster pedestrian rest and aesthetic consistency.",
    image: gbg1
  },
  "adani": {
    title: "Adani Realty Residential Projects",
    client: "Adani Realty Group",
    supplied: "Complete site outdoor furniture supply: structural park benches, dustbins, planter boxes, car parking sheds.",
    volume: "Premium luxury towers in Ahmedabad, Mumbai, NCR",
    standards: "High-wind certified cantilever structural car sheds, Grade 304 Stainless Steel hardware.",
    desc: "Our collaboration with Adani Realty delivered integrated site solutions, ensuring all outdoor seating, waste bins, planters, and shading units share the exact structural colors and materials specifications.",
    image: gbg5
  },
  "oberoi": {
    title: "Oberoi Luxury Residential & Hotels",
    client: "Oberoi Realty & Hotels Group",
    supplied: "Bespoke handcrafted wicker furniture dining ensembles, cabana shading systems, poolside lounger beds.",
    volume: "Luxury high-rises and wellness resort decks",
    standards: "PE synthetic UV-tested wicker core fibers, weather-proof quick-dry cushions.",
    desc: "We handcrafted premium resort-grade synthetic wicker loungers and swings designed specifically for Oberoi's signature high-end pool decks and wellness lounge areas, ensuring supreme chemical and saline water resistance.",
    image: gbg2
  },
  "all": {
    title: "All National Urban Projects",
    client: "Municipalities, Corporate & Real Estate Leaders",
    supplied: "Thousands of public benches, smart bus shelters, GFRC planter beds, steel security bollards.",
    volume: "Supplied in 15+ Smart Cities nationwide",
    standards: "ISO 9001 quality framework, FSC wood certifications, EN 124 crash-ratings.",
    desc: "A consolidated showcase of our municipal streetscapes, campus dining table systems, and developer township supplies delivered across public parks, university campuses, and corporate hubs in India.",
    image: gbg1
  },
  "mumbai": {
    title: "Mumbai Metro Projects",
    client: "MMRDA, Municipal Corporations, and Real Estate Leaders",
    supplied: "240+ completed project supplies including smart bus shelters, SS bollards, and luxury wicker loungers.",
    volume: "Major corporate and public zones across Mumbai Circle",
    standards: "Grade 316 Marine-grade stainless steel options to resist heavy coastal humidity.",
    desc: "A custom showcase of our high-performance street furniture installed across corporate hubs like BKC, luxury residential towers, and municipal transit shelters across Mumbai's coastal environment.",
    image: gbg5
  },
  "delhi": {
    title: "Delhi NCR Infrastructure Projects",
    client: "DDA, Corporate Campuses, and Residential Developers",
    supplied: "180+ project sites supplied: heavy-duty benches, integrated dining tables, tensile sheds.",
    volume: "Public squares, corporate campuses in Gurgaon & Noida",
    standards: "Anti-vandalism mounting fixtures, high structural wind loads designs.",
    desc: "Our supplies in the Delhi NCR region focus heavily on durable campus dining tables, anti-graffiti municipal bins, and architectural tensile structures that withstand extreme summer temperature ranges.",
    image: gbg4
  },
  "bangalore": {
    title: "Bangalore Tech Hub Projects",
    client: "IT Park Developers, Corporates, and Municipal Plazas",
    supplied: "150+ sites: GFRC cultivation planter systems, corporate bench modules, litter recycling bins.",
    volume: "IT parks, corporate plazas, smart avenues in Bangalore Circle",
    standards: "Eco-design FSC certified wood, custom bio-diverse planter systems.",
    desc: "We collaborated with Bangalore's leading commercial developers to supply modular planter bench configurations, creating relaxing green breakout zones for IT professionals.",
    image: gbg3
  },
  "pune": {
    title: "Pune Residential & Municipal Projects",
    client: "Real Estate Townships and Local Municipal Councils",
    supplied: "120+ projects: WPC benches, municipal bins, custom parking shelters.",
    volume: "High-end gated townships and park grids across Pune metro",
    standards: "Low maintenance materials specifications, galvanized structural frames.",
    desc: "A curated list of completed gated residential township supplies and municipal park seating grids delivering natural wood warmth with weather-proof engineered WPC composite performance in Pune.",
    image: gbg1
  }
};

const ProjectsDetail = () => {
  const { segment } = useParams();

  const meta = projectsMeta[segment] || {
    title: "Completed Project Showcase",
    client: "Architectural & Real Estate Leaders",
    supplied: "Bespoke street furniture and public solutions.",
    volume: "Completed Site Projects in India",
    standards: "Custom engineering standards and certifications compliance.",
    desc: "We manufacture and anchor premium outdoor furniture tailored specifically for commercial township developments and smart cities across major metros.",
    image: gbg1
  };

  useEffect(() => {
    updatePageSEO({
      title: `${meta.title} Showcase | Urbanland Projects`,
      description: meta.desc,
      og_image: meta.image
    });
    return () => cleanPageSEO();
  }, [meta]);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* breadcrumb */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-4 flex items-center select-none text-[10px] font-bold uppercase tracking-widest text-[#2D2D2D]/55">
        <Link to="/" className="hover:text-[#2C5F2E]">Home</Link>
        <span className="mx-1.5">/</span>
        <Link to="/projects" className="hover:text-[#2C5F2E]">Projects</Link>
        <span className="mx-1.5">/</span>
        <span className="text-[#2D2D2D]/85">{meta.title}</span>
      </section>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2.5rem] overflow-hidden bg-black/5 relative shadow-lg">
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3 py-1 rounded-full w-fit mb-3">
              Case Study
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight max-w-4xl">
              {meta.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-3 max-w-2xl leading-relaxed">
              Premium Site Showcase
            </p>
          </div>
        </div>
      </section>

      {/* Case Details and Specs Table */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-4">— SITE SCOPE & DELIVERY</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/85">
            {meta.desc}
          </p>
        </div>
        
        {/* Specs Box Card */}
        <div className="bg-[#EAE5DB]/45 rounded-[2rem] border border-black/[0.03] p-8 flex flex-col gap-5">
          <h3 className="text-sm font-black uppercase tracking-wider text-black mb-2">— PROJECT LOGISTICS SHEET</h3>
          
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.08]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Contracting Client</span>
            <span className="text-xs font-semibold text-black/85">{meta.client}</span>
          </div>
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.08]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Equipment & Model Supplied</span>
            <span className="text-xs font-semibold text-black/85">{meta.supplied}</span>
          </div>
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.08]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Delivered Volume Scope</span>
            <span className="text-xs font-semibold text-black/85">{meta.volume}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Engineering & Green Standards Met</span>
            <span className="text-xs font-semibold text-black/85">{meta.standards}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsDetail;
