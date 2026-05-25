import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const verticalsMeta = {
  "real-estate": {
    name: "Real Estate & Township Projects",
    tagline: "Enhancing modern residential development values.",
    image: gbg1,
    desc: "Urbanland Products works closely with premium developers to deliver holistic outdoor site layouts. From WPC park benches to integrated GFRC planters and durable cantilever car shelters, we handle full-scale manufacturing, delivery, and anchoring for townships.",
    developer: "Lodha & Adani Realty",
    supplied: "420+ Benches, 120 Planters, 50 Bins, 8 Car Shelters",
    standards: "Custom structural wind load certificates, FSC timbers, premium architectural RAL powder coating.",
    recommended: [
      { id: "platform", name: "PLATFORM Cultivation Island" },
      { id: "linfa", name: "LINFA Linear Bench" },
      { id: "cube-planter", name: "CUBE GFRC Planter" },
      { id: "car-port", name: "CAR PORT Cantilever Shelter" }
    ]
  },
  "hospitality": {
    name: "Hospitality & Hotels",
    tagline: "Resort-grade handcrafted comfort for pool & terraces.",
    image: gbg2,
    desc: "Luxury hotels demand flawless aesthetics and weather durability. We manufacture premium hand-woven synthetic wicker sectionals, ergonomic poolside lounger beds, and luxury cabanas built to resist chlorinated mist and high saline environments.",
    developer: "Oberoi Resorts & Marriott International",
    supplied: "300 Loungers, 40 Cabanas, 15 Swings, 12 Wicker Dining Ensembles",
    standards: "UV-stable polyethylene weave cores, stain-resistant water-repellent cushions.",
    recommended: [
      { id: "sunscape", name: "SUNSCAPE Poolside Lounger" },
      { id: "cane-set", name: "CANE SET Premium Wicker" },
      { id: "cane-double", name: "CANE DOUBLE Wicker Lounge" }
    ]
  },
  "healthcare": {
    name: "Healthcare & Hospitals",
    tagline: "Therapeutic seating solutions for recovery walks.",
    desc: "Healing gardens and clinics require specialized outdoor accessibility. We engineer anti-microbial timber coatings, wheelchair-friendly GFRC parklets, and fire-safe litter recycling bins tailored for sterile hospital standards.",
    image: gbg3,
    developer: "Max Healthcare & Fortis Hospitals Group",
    supplied: "140 Benches, 80 Litter bins, 20 ADA Ramps",
    standards: "Antibacterial wood protective finishes, low-height planter beds, non-slip wheelchair decks.",
    recommended: [
      { id: "linfa", name: "LINFA Park Bench" },
      { id: "kubus", name: "KUBUS Triple Litter Bin" },
      { id: "cube-planter", name: "CUBE Planters Box" }
    ]
  },
  "education": {
    name: "Education & Universities",
    tagline: "Durable integrated social break dining plazas.",
    desc: "Active academic campus break zones require heavy-duty anti-vandalism furniture. We manufacture integrated tabular bench seating systems cladded in high-pressure laminate panels that stand up to active student break intervals.",
    image: gbg4,
    developer: "Amity University & IIT Campuses",
    supplied: "180 MORSE Integrated Tables, 60 Outdoor Bins",
    standards: "Vandalism-resistant hardware, flame retardant HPL panels, structural steel anchor bases.",
    recommended: [
      { id: "morse", name: "MORSE Campus Diner" },
      { id: "morse-dot", name: "MORSE DOT Lounge Table" },
      { id: "kubus", name: "KUBUS Double Recycling Bin" }
    ]
  },
  "municipal-smart-city": {
    name: "Municipal & Smart Cities",
    tagline: "High-intelligence public transit grid structures.",
    desc: "Smart city streetscapes require zero-emission infrastructure. We supply PV solar-powered smart bus shelters equipped with e-paper transit feeds, integrated device charges, stainless steel security bollards, and modular public parklets.",
    image: gbg5,
    developer: "Mumbai Smart City & New Delhi Municipal Council",
    supplied: "35 Smart Transit Shelters, 120 SS Security Bollards, 10 Curbside Parklets",
    standards: "IP66 waterproof enclosures, custom structural wind certifications, solar cell battery backup arrays.",
    recommended: [
      { id: "aero-shelter", name: "AERO Smart Shelter" },
      { id: "platform", name: "PLATFORM Modular Parklet" },
      { id: "car-port", name: "CAR PORT Safety Shelter" }
    ]
  }
};

const SolutionsDetail = () => {
  const { vertical } = useParams();

  const meta = verticalsMeta[vertical] || {
    name: "Sector Solution",
    tagline: "Premium custom manufactured urban layouts.",
    image: gbg1,
    desc: "We deliver full-scope street furniture configurations tailored to the strict aesthetic, spatial, and installation tolerances of diverse public and private sectors in India.",
    developer: "National Infrastructure Leaders",
    supplied: "Full Scope Site Supply",
    standards: "ISO 9001, FSC Timbers compliance.",
    recommended: []
  };

  useEffect(() => {
    updatePageSEO({
      title: `${meta.name} Solutions | Urbanland Products`,
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
        <Link to="/solutions" className="hover:text-[#2C5F2E]">Solutions</Link>
        <span className="mx-1.5">/</span>
        <span className="text-[#2D2D2D]/85">{meta.name}</span>
      </section>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2.5rem] overflow-hidden bg-black/5 relative shadow-lg">
          <img
            src={meta.image}
            alt={meta.name}
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3 py-1 rounded-full w-fit mb-3">
              Sector Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight max-w-4xl">
              {meta.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-3 max-w-2xl leading-relaxed">
              {meta.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Sector Description and Specs */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#2C5F2E] mb-4">— LANDSCAPE INTEGRATION</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2D2D]/85">
            {meta.desc}
          </p>
        </div>
        
        {/* Specs Box Card */}
        <div className="bg-[#EAE5DB]/45 rounded-[2rem] border border-black/[0.03] p-8 flex flex-col gap-5">
          <h3 className="text-sm font-black uppercase tracking-wider text-black mb-2">— SECTOR COMPLIANCE METRICS</h3>
          
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.08]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Primary Developer Clients</span>
            <span className="text-xs font-semibold text-black/85">{meta.developer}</span>
          </div>
          <div className="flex flex-col gap-1 pb-3 border-b border-black/[0.08]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Supplied Infrastructure Volume</span>
            <span className="text-xs font-semibold text-black/85">{meta.supplied}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-black/50">Regulatory Standards Met</span>
            <span className="text-xs font-semibold text-black/85">{meta.standards}</span>
          </div>
        </div>
      </section>

      {/* Recommended Products Grid */}
      {meta.recommended?.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
            Recommended Products for this Sector:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meta.recommended.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white rounded-[2rem] p-6 border border-black/[0.03] shadow-[0_5px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col justify-between aspect-square group no-underline text-[#1A1A1A] w-full max-w-[320px]"
              >
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    {vertical.replace("-", " ")}
                  </span>
                  <h4 className="text-lg font-bold group-hover:text-[#2C5F2E] transition-colors leading-snug">
                    {item.name}
                  </h4>
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors mt-6 block">
                  View Specifications →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SolutionsDetail;
