import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const faqsList = [
  {
    q: "What is your standard manufacturing and lead time for benches?",
    a: "Our standard manufacturing lead time is 4 to 6 weeks from order confirmation and drawing sign-off. Large-volume municipal transit shelters or custom structural sheds can take 8 to 12 weeks, depending on materials allocation and powder-coating schedules."
  },
  {
    q: "Do you supply FSC-certified timbers for municipal projects?",
    a: "Yes, 100% of our tropical hardwoods (such as Jatoba) are sourced from FSC-certified responsible forestry operations. We also supply thermo-processed Black Locust (Robinia) and pine timber options which carry structural warranties for weather exposure."
  },
  {
    q: "Are the steel hardware components hot-dip galvanized?",
    a: "Absolutely. All our structural steel assemblies undergo complete hot-dip galvanization (conforming to ISO 1461 standards) followed by zinc-rich priming and architectural-grade polyester powder-coating. This establishes an absolute double-layer shield against rust."
  },
  {
    q: "What surface anchoring systems do you recommend?",
    a: "We support both concrete chemical-anchoring flanged systems (using Grade 304/316 stainless steel expansion bolts) and sub-surface wet-cast anchoring extensions designed to be cast directly into concrete footing structures under tiles/deckings."
  },
  {
    q: "Do you provide custom design dimensions or bespoke solutions?",
    a: "Yes, we work closely with landscape architects to manufacture customized site lengths, custom steel cutouts, bespoke GFRC planter radii, and specialized color combinations (matching all RAL color codes)."
  },
  {
    q: "What warranty coverages are supplied on your products?",
    a: "We supply a robust 10-year warranty on all structural steel frames against structural welding failures and C5 corrosion, and a 5-year warranty on timber performance and polyethylene wicker weaves against excessive structural cracking or UV rotting."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Frequently Asked Questions | Urbanland Products",
      description: "Find answers regarding order timelines, custom manufacturing tolerances, FSC certifications, galvanized frame structures, anchoring systems, and warranties in India."
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Frequently Asked Questions</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          Order & <br/>
          <span className="text-[#C9A84C]">Technical FAQ.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Find complete details on order processes, anchoring instructions, material specifications, and quality guarantees.
        </p>
      </section>

      {/* Accordion list */}
      <section className="max-w-[850px] mx-auto px-6">
        <div className="flex flex-col gap-4">
          {faqsList.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.005)]"
              >
                {/* Header button click */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                >
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors pr-6">
                    {faq.q}
                  </h3>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all text-xs shrink-0 ${
                    isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D]"
                  }`}>
                    ＋
                  </span>
                </button>

                {/* Animated content box */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                }`}>
                  <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/70 bg-white/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
