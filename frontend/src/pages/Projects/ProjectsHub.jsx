import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const developers = [
  { id: "lodha", name: "Lodha Group Projects", segment: "lodha", image: gbg1, tagline: "Multiple Townships Nationwide.", metrics: "420+ Benches & Planters cladded in FSC WPC & stainless steel." },
  { id: "adani", name: "Adani Realty Projects", segment: "adani", image: gbg5, tagline: "Premium Residential Infrastructure.", metrics: "Complete site outdoor supply: benches, trashbins, planters boxes, car ports." },
  { id: "oberoi", name: "Oberoi Realty Projects", segment: "oberoi", image: gbg2, tagline: "Luxury Residential & Hospitality.", metrics: "Premium handcrafted wicker furniture, cabanas, and sunscape lounge chairs." }
];

const cities = [
  { id: "mumbai", name: "Mumbai Projects", segment: "mumbai", count: 24 },
  { id: "delhi", name: "Delhi Projects", segment: "delhi", count: 18 },
  { id: "bangalore", name: "Bangalore Projects", segment: "bangalore", count: 15 },
  { id: "pune", name: "Pune Projects", segment: "pune", count: 12 }
];

const ProjectsHub = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Completed Urban Projects | Urbanland Products",
      description: "Explore Urbanland's completed furniture supplies and architectural site showcases for Lodha, Adani, and Oberoi across major Indian metros.",
      og_image: gbg1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Case Study Portfolios</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Completed <br/>
          <span className="text-[#C9A84C]">Project Showcases.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          We have engineered and delivered thousands of premium outdoor benches, bus shelters, and planters for India's leading residential and commercial developments.
        </p>
      </section>

      {/* Developer Segment list */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
          Client Developers Portfolios:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev) => (
            <Link
              key={dev.id}
              to={`/projects/${dev.segment}`}
              className="bg-white rounded-[2.5rem] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between aspect-[16/15] cursor-pointer group no-underline"
            >
              <div>
                <div className="flex justify-between items-center w-full mb-4 select-none">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">
                    Developer Case
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors">
                    View →
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-none mb-2">
                  {dev.name}
                </h3>
                <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider font-mono">
                  {dev.tagline}
                </p>
                <p className="text-xs text-[#2D2D2D]/60 leading-relaxed mt-3">
                  {dev.metrics}
                </p>
              </div>
              
              {/* Card visual show */}
              <div className="w-full h-[45%] rounded-2xl overflow-hidden bg-black/5 relative mt-4 select-none">
                <img 
                  src={dev.image} 
                  alt={dev.name}
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cities Segment List */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 border-b border-[#2D2D2D]/10 pb-4 select-none">
          Metro Area Showcases:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              to={`/projects/${city.segment}`}
              className="bg-white rounded-[2rem] border border-black/[0.03] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-square group no-underline text-[#1A1A1A]"
            >
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5F2E] bg-[#2C5F2E]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                  {city.count} Projects
                </span>
                <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight group-hover:text-[#2C5F2E] transition-colors mt-2">
                  {city.name}
                </h4>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black/35 group-hover:text-[#2C5F2E] transition-colors mt-6 block">
                Explore City →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsHub;
