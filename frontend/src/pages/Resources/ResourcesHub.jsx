import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Reuse assets
import gbg1 from '../../assets/gallery_real_estate.png';

const resources = [
  { id: "downloads", name: "Master Downloads", tagline: "Master catalog, CAD plans, brochures.", desc: "Download our complete street furniture master catalog, DWG technical specifications, and architectural brochures.", path: "/resources/downloads" },
  { id: "blog", name: "Journal & Insights", tagline: "Smart planning and materials logs.", desc: "Read technical articles on modular parklet grids, sustainable urban planning, and timber performance weathering.", path: "/blog" },
  { id: "faq", name: "Frequently Asked Questions", tagline: "Timelines, custom casting, and orders guide.", desc: "Explore answers regarding manufacturing tolerances, anchoring systems, custom FSC timbers, and warranty terms.", path: "/faq" },
  { id: "materials", name: "Materials Engineering", tagline: "Timbers, steel, GFRC weathering guides.", desc: "Evaluate full lifecycles, weathering indexes, and powder coating specifications for Jatoba, Robinia, and galvanized frames.", path: "/materials" }
];

const ResourcesHub = () => {
  useEffect(() => {
    updatePageSEO({
      title: "Technical Resources Portal | Urbanland Products",
      description: "Explore Urbanland's technical downloads master catalog, blog journal, FAQ guide, and materials weathering specifications sheets in India.",
      og_image: gbg1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Support Library</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Architectural <br/>
          <span className="text-[#C9A84C]">Technical Portal.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Access product catalogs, installation sheets, CAD modules, and materials guidebooks engineered directly for landscape architects, builders, and city councils.
        </p>
      </section>

      {/* Grid listing */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between aspect-[16/11] cursor-pointer group no-underline text-[#1A1A1A]"
            >
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full w-fit mb-4 block">
                  {item.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase group-hover:text-[#2C5F2E] transition-colors leading-none mb-4">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D2D2D]/60 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider group-hover:text-[#2C5F2E] text-black/35 mt-6 block">
                Open Resource →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesHub;
