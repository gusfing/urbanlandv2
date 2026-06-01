import React, { useState, useEffect } from "react";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

const categories = [
  { id: "all", name: "All Questions", icon: "🔍" },
  { id: "general", name: "General Info", icon: "💬" },
  { id: "products", name: "Products & Materials", icon: "🪵" },
  { id: "sustainability", name: "Sustainability", icon: "🌱" },
  { id: "projects", name: "Projects & Delivery", icon: "🚚" },
  { id: "warranty", name: "Warranty & Support", icon: "🛡️" },
  { id: "customization", name: "Customization & Quotes", icon: "✏️" }
];

const faqsList = [
  // General Questions
  {
    category: "general",
    q: "What is Urbanland Products?",
    a: "Urbanland Products is a leading Made-in-India manufacturer of premium, sustainable outdoor furniture including benches, planter boxes, bus shelters, dustbins, wicker furniture and more. We specialize in durable, low-maintenance solutions for real estate, hospitality, healthcare, education and municipal & smart city projects."
  },
  {
    category: "general",
    q: "Where are your products manufactured?",
    a: "All our products are proudly manufactured in our state-of-the-art facility in Vasai, Maharashtra, India. This enables us to maintain absolute quality control and offer standard or fully customized products directly to commercial projects."
  },
  {
    category: "general",
    q: "Are your products suitable for Indian climate?",
    a: "Yes. Every product is engineered specifically to withstand extreme heat, intense monsoons, high humidity, UV exposure, and vandalism. We utilize UV-stabilized resins, rust-proof metal prep systems, and tropical-grade hardware to ensure high longevity."
  },
  // Products & Materials
  {
    category: "products",
    q: "What materials do you use?",
    a: "We primarily use WPC (Wood-Plastic Composite), NFC Wood (Natural Fiber Composite), Aluminium, Mild Steel (powder-coated), and Stainless Steel (Grades 304 and 316). We have completely moved away from traditional timber, such as teak or acacia, to support deforestation prevention."
  },
  {
    category: "products",
    q: "What is the difference between WPC and NFC Wood?",
    a: "WPC (Wood-Plastic Composite) combines wood fibers and recycled plastics to offer a warm wood-like aesthetic without rotting, cracking, or splintering. NFC Wood (Natural Fiber Composite) is an advanced evolution, combining agricultural rice-husk natural fibers with polymers for a premium matte texture, higher flexural strength (18-22 MPa), and exceptional weather stability."
  },
  {
    category: "products",
    q: "Which material is best for coastal areas?",
    a: "Aluminium and Grade 304/316 Stainless Steel are highly recommended for coastal and saline high-humidity environments. They offer superior natural resistance to oxidation and marine corrosion, ensuring structural integrity for over 20 years."
  },
  {
    category: "products",
    q: "Are your benches and planters suitable for high-traffic public areas?",
    a: "Absolutely. Our heavy-duty park benches, municipal bus shelters, and high-impact planters are built with structural mild steel (hot-dip galvanized conforming to ISO 1461), thick solid composite profiles, and internal steel reinforcement webs to resist vandal abuse and intensive daily use."
  },
  // Sustainability & Green Products
  {
    category: "sustainability",
    q: "How sustainable are your products?",
    a: "Sustainability is at our core. WPC and NFC Wood prevent deforestation by utilizing 100% recycled polymers and reclaimed natural fibers. Because they require no chemical stains or oils, and carry a long operational lifespan (12 to 20+ years), they drastically lower building carbon footprint and minimize replacement waste."
  },
  {
    category: "sustainability",
    q: "Do your products help with green building certifications?",
    a: "Yes. Architects and developers frequently utilize our eco-friendly, circular-materials composites and fully recyclable metal assemblies to secure critical green points under IGBC, GRIHA, and LEED green building certification programs."
  },
  // Projects & Delivery
  {
    category: "projects",
    q: "What is the typical lead time for projects?",
    a: "Standard catalogue designs are typically completed and dispatched in 2 to 4 weeks from drawing sign-off and order validation. Larger municipal transit shelter runs or highly customized estate orders require 6 to 8 weeks depending on materials allocation."
  },
  {
    category: "projects",
    q: "Do you provide installation services across India?",
    a: "Yes. We offer reliable pan-India delivery alongside technical installation support. We supply concrete chemical anchoring flanged installations (Grade 304/316 expansion bolts) or sub-surface wet-cast anchoring options to secure furniture across any surface type."
  },
  {
    category: "projects",
    q: "Can you handle large-scale developer and municipal projects?",
    a: "Absolutely. We are fully equipped to handle major volumes. We have successfully supplied and installed outdoor solutions for 50+ tier-1 developments, massive commercial business parks, hospitality venues, and smart-city municipal setups in Mumbai, Delhi, Bangalore, and Pune."
  },
  // Warranty & Support
  {
    category: "warranty",
    q: "What is your warranty coverage?",
    a: "Every product we manufacture is backed by our robust 2-Year Comprehensive Warranty, covering frame structural welds, seating composite panels, powder coating adhesion, PE wicker tensile strength, and any manufacturing defects."
  },
  {
    category: "warranty",
    q: "Do you provide after-sales support?",
    a: "Yes. We provide complete after-sales support including material inspection guidance, spare parts provision (such as replacement composite slats or matching wicker threads), and specialized cleaning procedures to ensure your layouts remain stunning."
  },
  // Customization & Quotations
  {
    category: "customization",
    q: "Can products be customised?",
    a: "Yes. Customization is one of our primary strengths. We work closely with landscape architects to create tailored site lengths, custom steel cutouts, bespoke GFRC planter radii, custom RAL powder shades, and custom seating designs."
  },
  {
    category: "customization",
    q: "How do I get a quote?",
    a: "You can request a custom quote instantly by filling out the interactive RFP builder on our Contact page, or by contacting our team via email or phone. We pride ourselves on returning fully detailed commercial and technical quotes within 24 hours."
  },
  {
    category: "customization",
    q: "Do you provide BOQ and technical specifications?",
    a: "Yes. We supply landscape architects and planners with fully detailed pre-written BOQ templates, 2D/3D CAD drawing blocks (.dwg), structural loading specs, and certified materials reports to make project tendering seamless."
  }
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState({});

  useEffect(() => {
    updatePageSEO({
      title: "FAQ | Urbanland Products – Benches, Planters & Outdoor Furniture",
      description: "Answers to all your questions about Urbanland Products – sustainable outdoor furniture, materials (WPC, NFC Wood, Aluminium, Mild Steel), warranty, customization, delivery, installation, green building certifications and more."
    });
    return () => cleanPageSEO();
  }, []);

  const handleToggle = (faqIndex) => {
    setOpenIndex(prev => ({
      ...prev,
      [faqIndex]: !prev[faqIndex]
    }));
  };

  // Filter FAQs based on active tab and search query
  const filteredFaqs = faqsList.filter((faq) => {
    const matchesTab = activeTab === "all" || faq.category === activeTab;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-3">— Frequently Asked Questions</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
          All Your <br/>
          <span className="text-[#C9A84C]">Questions Answered.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#2D2D2D]/70 max-w-2xl leading-relaxed mt-6">
          Clear answers to the most common questions about our sustainable outdoor furniture, manufacturing, green materials, warranties, and commercial project support.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
          <span>✓ Honest Answers</span>
          <span className="opacity-30">|</span>
          <span>✓ 2-Year Comprehensive Guarantee</span>
          <span className="opacity-30">|</span>
          <span>✓ Sustainable Green Materials</span>
          <span className="opacity-30">|</span>
          <span>✓ Proudly Manufactured in India</span>
        </div>
      </section>

      {/* Search & Tabs Controls */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        {/* Live Search Bar */}
        <div className="relative max-w-xl mb-10 group">
          <input
            type="text"
            placeholder="Search FAQs by keywords (e.g. 'coastal', 'lead time', 'WPC')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-black/10 rounded-full px-7 py-4.5 pl-14 text-sm text-black focus:outline-none focus:border-[#2C5F2E] font-medium shadow-[0_5px_15px_rgba(0,0,0,0.015)] transition-all duration-300 placeholder:text-black/35"
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg opacity-40 select-none pointer-events-none group-focus-within:opacity-100 transition-opacity">
            🔍
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/5 hover:bg-black/15 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab Filter buttons */}
        <div className="flex flex-wrap gap-2.5 border-b border-black/[0.06] pb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  // Optionally clear search query to avoid confusion
                }}
                className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none flex items-center gap-2 ${
                  isActive 
                    ? "bg-[#2C5F2E] border-[#2C5F2E] text-white shadow-md transform -translate-y-0.5" 
                    : "bg-white border-black/[0.04] text-[#2D2D2D] hover:bg-[#EAE5DB] hover:border-black/10"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Stack */}
      <section className="max-w-[1000px] mx-auto px-6 mb-20">
        {filteredFaqs.length > 0 ? (
          <div className="flex flex-col gap-4.5">
            {filteredFaqs.map((faq) => {
              // Creating a unique key based on question text to keep correct state during filtering
              const isOpen = !!openIndex[faq.q];
              return (
                <div 
                  key={faq.q}
                  className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                    isOpen 
                      ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                      : "border-black/[0.03] hover:border-black/10"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(faq.q)}
                    className="w-full px-6 py-6 md:px-9 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                  >
                    <div className="flex flex-col gap-1.5 pr-6">
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C]">
                        {categories.find(c => c.id === faq.category)?.name || faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] transition-colors leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shrink-0 select-none ${
                      isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D] group-hover:bg-[#2C5F2E]/10"
                    }`}>
                      ＋
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[350px] border-t border-black/[0.05]" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 py-6 md:px-9 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-black/[0.04] p-10 max-w-xl mx-auto shadow-inner">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">No matching questions found</h3>
            <p className="text-xs text-black/50 leading-relaxed mb-6">
              We couldn't find any FAQs matching "{searchQuery}". Try searching for another keyword or browse questions by clicking on the category tabs above.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
              className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </section>

      {/* Still Have Questions? Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="bg-[#2D2D2D] rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(44,95,46,0.2),transparent_60%)] pointer-events-none" />
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4 block">— Specialized Support</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-6">
              Still Have Questions <br className="hidden sm:block"/>
              About Our Commercial Solutions?
            </h2>
            <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Our engineering and design experts are available to guide you on anchoring details, certifications, custom layouts, and commercial project lead times.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4.5 bg-[#2C5F2E] hover:bg-[#3d7a40] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-md no-underline inline-block"
              >
                Get in Touch With Us →
              </a>
              <a 
                href="/resources/downloads" 
                className="px-8 py-4.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all no-underline inline-block"
              >
                Download Master Catalogue ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

