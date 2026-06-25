import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import CTASection from "../../components/CTASection/CTASection";

const trustItems = [
  "Master Catalogue",
  "Sustainable Materials Guide",
  "Sector Brochures",
  "Expert Blog",
  "Comprehensive FAQ",
  "Made in India with Green Focus"
];

const resourceCategories = [
  {
    icon: "download_for_offline",
    title: "Downloads",
    desc: "Master Catalogue, sector-specific brochures for real estate, hospitality, and educational institutions.",
    linkText: "Go to Downloads",
    path: "/resources/downloads"
  },
  {
    icon: "eco",
    title: "Materials Guide",
    desc: "In-depth comparison of WPC, NFC Wood, and industrial coatings to ensure longevity in tropical climates.",
    linkText: "Explore Materials Guide",
    path: "/materials"
  },
  {
    icon: "article",
    title: "Blog",
    desc: "Expert articles on green building, urban heat island mitigation, and architectural furniture trends.",
    linkText: "Read Latest Articles",
    path: "/blog"
  },
  {
    icon: "quiz",
    title: "FAQ",
    desc: "Clear answers to the most common questions regarding durability, custom orders, and sustainability certifications.",
    linkText: "Visit FAQ",
    path: "/faq"
  }
];

const differences = [
  {
    num: "01",
    icon: "verified_user",
    title: "Sustainability First",
    desc: "Every technical detail is vetted against LEED and IGBC standards to ensure your projects remain eco-friendly from specification to installation."
  },
  {
    num: "02",
    icon: "construction",
    title: "Practical & Actionable",
    desc: "We provide CAD blocks and installation guides that simplify the workflow for architects and contractors, not just sales fluff."
  },
  {
    num: "03",
    icon: "update",
    title: "Up-to-Date",
    desc: "Our documentation is refreshed quarterly to reflect the latest advancements in green material science and urban design regulations."
  },
  {
    num: "04",
    icon: "person_search",
    title: "Tailored for Decision Makers",
    desc: "Condensed executive summaries provide the ROI and durability data needed for procurement heads and project developers."
  },
  {
    num: "05",
    icon: "bolt",
    title: "Free & Instant Access",
    desc: "No complicated gatekeeping. We believe in open knowledge to foster a more sustainable urban landscape for everyone."
  }
];

const featuredResourcesList = [
  {
    title: "Master Catalogue 2026",
    tag: "Technical Spec",
    buttonText: "Download PDF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fuv5b8zMhYnoZJrWJcU74PB2Js_nOphT9s3u0Tc3dc0pacPfm-tNbu-leHQpln-LinwAdbjxnRvLHr0vqtYAmcpTYUetcckfcch2wXhAyKE2GQeHOEYLzkArxAVNZJbTVrhoSc7nvooMj6t_0sO7PjMaa9eelF19SAuXv4X873TWFu5XfS_kbOm3xaI-ps9NgmCXM7WctJydjGdAtT0hRpeoRbRfYcaiAckFK0-GBcWW7eiKRkddIjiOYZbCbsH1zG0ws4Z3z6tX",
    path: "/resources/downloads"
  },
  {
    title: "Sustainable Materials Guide",
    tag: "Whitepaper",
    buttonText: "Explore Guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5a4tclxo2v691L79faA6ybPkOE2hdM8j6mJU-sEdQz6F6We_csBaZX1ltQMSKL9I1hbkKKiMd7ZOfoo4MiBw0jrsoVSw3fB0Q3Y7l2sXS-23YikaCFLb5gy4oYSODCjJCLSpGc6AIyfblnjkqt-2JUMOtAmmEid4Ti5NaJmBqDt-QEqgI_Luk0-lchw4vFXDJlPckrktB6nyVSVcY2MaDKCyhNJA9elKgx3s3nAs_ZrbEUZqy_plwWNxGiFw4bA1d7MGdxkKJUP4Q",
    path: "/materials"
  },
  {
    title: "Real Estate Amenity Brochure",
    tag: "Brochure",
    buttonText: "View Sector",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfoqyxwUWn42txdO2IqXwsiKHDAaSDwnhQlM-G-Clwy1Un9oPd7z7UI8IjTz6y9PFsCBKbVChgQgu4mb4Ia5i73yCxSaO_6N26QBldp35wSe1bIxQ15iqI76Z4W6tYaM1T5cPHEJ6G0auEdn206wqZPRmauLe7M1p4W1MhbTSeXg9u468N8LYjYfEzfhnhBLM0i188EfjaqCvlEOnPm6kyUp6tOhedaQxkIW-_KylGMGskM0M1pfGBf6URP78U1ynsA9-TCJVxUKht",
    path: "/resources/downloads"
  },
  {
    title: "How to Choose Furniture for Green Projects",
    tag: "Expert Blog",
    buttonText: "Read Article",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcVgSINCmurdavg555p_9rlR5NzbZyg6UdJG-aoNvownMMI5H7f5TpzNgmVglfiywizorF5TLOAGSZu5w3NIyk0HV7O1CE2xBipn5J-YoK65aUNddPqTpUm0cUEetpnc5wpHEfSdy8TYR9oQThtlX29s33FlIq5M_6PQG-s8UzzP1pQw7XPPOU8XHMOCmrUVATc0-i968ccU43nX5M1tC4ja87Z4oZ2xr_i3ZCNKhBRM7IWwFCBremWIcbFhMzv17nNAnIBvgIj5rn",
    path: "/blog"
  }
];

const faqsList = [
  {
    q: "What materials do you use for your sustainable furniture?",
    a: "We primarily utilize Wood Polymer Composite (WPC), Natural Fiber Composite (NFC), and high-grade powder-coated steel or recyclable aluminium. All our materials are chosen for their low environmental impact and exceptional durability in harsh weather conditions."
  },
  {
    q: "Are your products certified for green building projects?",
    a: "Yes, our products contribute to LEED and IGBC certification credits. We provide detailed Environmental Product Declarations (EPDs) for all our major collections to support your project's sustainability goals."
  },
  {
    q: "Do you offer customization for specific architectural projects?",
    a: "Absolutely. We work closely with architects to modify dimensions, colors, and material finishes to align perfectly with your unique design vision while maintaining our structural integrity standards."
  },
  {
    q: "What is the typical lead time for large orders?",
    a: "Lead times vary by project scale, typically ranging from 6 to 10 weeks. Our team provides detailed production timelines and regular updates throughout the manufacturing process."
  },
  {
    q: "How do I maintain Urbanland furniture?",
    a: "Our furniture is designed for ultra-low maintenance. Regular cleaning with mild soap and water is usually sufficient. We provide comprehensive maintenance guides with every purchase to ensure decades of use."
  }
];

const ResourcesHub = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const resourcesGridRef = useRef(null);
  const featuredResourcesRef = useRef(null);

  useEffect(() => {
    updatePageSEO({
      title: "Resources | Sustainable Outdoor Furniture & Green Amenity Solutions | Urbanland Products",
      description: "Access our technical guides, product catalogs, materials comparison specifications, and expert blog insights for sustainable outdoor furniture in India.",
      og_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEL1OxvrW5JvdGCGOSirMUW062F_x705fdolWum4ct9GBB2yGjUXOu11zaupORQ65jllwHQmjn8AVkW9_6Srir8X1n7j6OTJQvNORxUVImvjOUAc-6DNRyxflGJgP4hqFB_17sc_4f60MfpxVHwKMIZuZoUQ95oI8bY4x6eN7hMQR1NeRCzm6J2vcRTRFPKUHzWgmYsOJu6cmuOYj-m7COuOFYwnNzXieBU1t-FrpjEYgoO0mY4OdJHULgi7o85cTWODUw_IB0ZG"
    });
    return () => cleanPageSEO();
  }, []);

  const scrollToResources = () => {
    if (resourcesGridRef.current) {
      resourcesGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollFeaturedResources = (direction) => {
    if (!featuredResourcesRef.current) return;
    const container = featuredResourcesRef.current;
    if (container.children.length > 0) {
      const cardWidth = container.children[0].offsetWidth + 24; // Card width + gap
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full bg-[#fcf9f4] text-[#1c1c19] font-sans overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[640px] md:min-h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fcf9f4]/80 z-10"></div>
          <img
            className="w-full h-full object-cover"
            alt="Minimalist urban bench landscape showcase"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEL1OxvrW5JvdGCGOSirMUW062F_x705fdolWum4ct9GBB2yGjUXOu11zaupORQ65jllwHQmjn8AVkW9_6Srir8X1n7j6OTJQvNORxUVImvjOUAc-6DNRyxflGJgP4hqFB_17sc_4f60MfpxVHwKMIZuZoUQ95oI8bY4x6eN7hMQR1NeRCzm6J2vcRTRFPKUHzWgmYsOJu6cmuOYj-m7COuOFYwnNzXieBU1t-FrpjEYgoO0mY4OdJHULgi7o85cTWODUw_IB0ZG"
          />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-16 w-full py-20 text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-headline-lg text-[#002f09] mb-4">
              Resources
            </h1>
            <p className="font-body-lg text-lg text-[#41493f] mb-8 leading-relaxed">
              Everything you need to make informed decisions about sustainable outdoor furniture... Explore
              our technical guides, case studies, and environmental impact reports designed for architects and
              urban planners.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToResources}
                className="bg-[#C9A84C] text-white px-8 py-4 font-semibold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 rounded-lg cursor-pointer"
              >
                Browse All Resources <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <Link
                to="/resources/downloads"
                className="border-2 border-[#002f09] text-[#002f09] px-8 py-4 font-semibold uppercase tracking-widest hover:bg-[#002f09]/5 transition-all flex items-center gap-2 rounded-lg no-underline cursor-pointer"
              >
                Download Master Catalogue <span className="material-symbols-outlined">download</span>
              </Link>
            </div>
          </div>
          {/* Trust Line */}
          <div className="border-t border-[#2D2D2D]/10 pt-6 flex flex-wrap items-center justify-between gap-y-4">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#C9A84C] font-semibold text-xs tracking-wider uppercase">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Resources (Grid) */}
      <section ref={resourcesGridRef} className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="mb-12 border-l-4 border-[#C9A84C] pl-6 text-left">
            <h2 className="font-headline-lg text-3xl font-semibold text-[#002f09]">
              Your Complete Guide to Sustainable Outdoor Furniture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fcf9f4] border border-[#2D2D2D]/10 p-8 flex flex-col h-full hover:border-[#C9A84C] transition-colors duration-300 rounded-lg text-left"
              >
                <span className="material-symbols-outlined text-[#C9A84C] text-4xl mb-4">
                  {item.icon}
                </span>
                <h3 className="font-headline-md text-xl font-semibold text-[#002f09] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#41493f] mb-6 font-body-md text-sm leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  to={item.path}
                  className="mt-auto text-[#002f09] font-bold uppercase tracking-wider flex items-center gap-2 group no-underline text-xs"
                >
                  {item.linkText}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Resources (Visual List) */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-semibold text-[#002f09] mb-4">
              Why Our Resources Are Different
            </h2>
            <div className="h-1 w-24 bg-[#C9A84C] mx-auto"></div>
          </div>
          <div className="space-y-6">
            {differences.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-6 group ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:w-1/4 text-center ${idx % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <span className="font-display-lg text-5xl md:text-6xl font-bold text-[#e5e2dd] group-hover:text-[#C9A84C] transition-colors duration-500">
                    {item.num}
                  </span>
                </div>
                <div
                  className={`md:w-3/4 flex gap-6 bg-white p-8 shadow-sm rounded-xl text-left ${
                    idx % 2 === 1 ? "border-r-4" : "border-l-4"
                  } border-[#002f09]`}
                >
                  <span className="material-symbols-outlined text-[#C9A84C] text-3xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-headline-md text-lg font-semibold text-[#002f09] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#41493f] font-body-md text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-headline-lg text-3xl font-semibold text-[#002f09] text-left">
              Featured Resources
            </h2>
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => scrollFeaturedResources("left")}
                className="w-12 h-12 border border-[#002f09] text-[#002f09] rounded-full flex items-center justify-center hover:bg-[#002f09] hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollFeaturedResources("right")}
                className="w-12 h-12 border border-[#002f09] text-[#002f09] rounded-full flex items-center justify-center hover:bg-[#002f09] hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div
            ref={featuredResourcesRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none scroll-smooth"
          >
            {featuredResourcesList.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="group cursor-pointer min-w-[280px] md:min-w-[calc(25%-1.25rem)] shrink-0 snap-align-start no-underline text-left"
              >
                <div className="relative aspect-[3/4] mb-4 bg-[#e5e2dd] overflow-hidden rounded-xl">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.title}
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-[#002f09]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-[#002f09] px-4 py-2 font-semibold uppercase tracking-widest text-xs rounded-full">
                      {item.buttonText}
                    </span>
                  </div>
                </div>
                <h4 className="font-headline-md text-base font-semibold text-[#002f09] group-hover:text-[#C9A84C] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="font-semibold text-[10px] text-[#41493f] uppercase tracking-widest mt-1.5">
                  {item.tag}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section className="py-20 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline-lg text-3xl font-semibold text-[#002f09] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div key={idx} className="border-b border-[#2D2D2D]/10 pb-4 text-left">
                  <button
                    onClick={() => setActiveFAQIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none cursor-pointer border-none bg-transparent"
                  >
                    <span className="font-body-lg font-semibold text-[#002f09] text-base md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#C9A84C] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      add
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-body-md text-[#41493f] text-sm md:text-base leading-relaxed pb-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Space with Sustainable Outdoor Furniture?"
        description="Support biophilic architectural design, earn IGBC points, and reduce deforestation with our premium WPC and NFC solutions."
        tagText="Ready to Partner"
        primaryText="Get in Touch With Our Team →"
        primaryLink="/contact"
        secondaryText="Download Master Catalogue ↓"
        secondaryLink="/resources/downloads"
      />
    </div>
  );
};

export default ResourcesHub;
