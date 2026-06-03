import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import CTASection from "../../components/CTASection/CTASection";

// Reuse assets
import welcome2 from '../../assets/welcome-2.png';

const faqsList = [
  {
    q: "What makes your products green?",
    a: "We use WPC and NFC Wood made from recycled plastics and natural fibers, replacing traditional wood and reducing deforestation. All our steel components are also fully recyclable."
  },
  {
    q: "Do your products help with green building certifications?",
    a: "Yes. Our materials contribute significantly to IGBC, GRIHA and LEED certification points through durability, low maintenance, and use of recycled and locally sourced materials."
  },
  {
    q: "How sustainable are WPC and NFC Wood compared to real wood?",
    a: "Significantly more sustainable. They use recycled industrial plastic waste and natural fiber residues, prevent deforestation, last much longer (12–20+ years), and require zero toxic chemical varnishes or treatments."
  },
  {
    q: "Are your products recyclable?",
    a: "Yes. WPC and NFC Wood have high recyclability, and our metal products (Aluminium & Stainless Steel) are 100% recyclable at the end of their lifecycle."
  },
  {
    q: "What is your warranty on sustainable products?",
    a: "All products come with India’s only 2-Year Comprehensive Warranty covering any manufacturing defects or structural breakdowns."
  }
];

const Sustainability = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    updatePageSEO({
      title: "Sustainability | Green Outdoor Furniture Manufacturer in India | Urbanland Products",
      description: "Urbanland Products is deeply committed to sustainability. We manufacture premium outdoor furniture using eco-friendly WPC and NFC Wood instead of traditional timber. Our green products reduce deforestation, support IGBC, GRIHA & LEED certifications, and create lasting positive environmental impact.",
      og_image: welcome2
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Header / Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-[60%]">
            <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4">— Ecological Integrity</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-5xl">
              Sustainability at <br/>
              <span className="text-[#C9A84C]">Urbanland Products</span>
            </h1>
            <p className="text-sm sm:text-base text-[#2D2D2D]/85 max-w-2xl leading-relaxed mt-6">
              We believe beautiful outdoor spaces should never harm the planet. That’s why every bench, planter box and amenity solution we manufacture is designed with green materials, zero deforestation, and long-term environmental responsibility at its core.
            </p>

            {/* Trust Line */}
            <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 justify-center md:justify-start text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>WPC & NFC Wood Alternatives</span>
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Supports IGBC, GRIHA & LEED</span>
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Recycled Content Focus</span>
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>2-Year Guarantee</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-all duration-300 shadow-md cursor-pointer no-underline"
              >
                Request Sustainable Quote →
              </Link>
              <Link
                to="/resources/downloads"
                className="px-6 py-3.5 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#C9A84C] hover:text-white transition-all duration-300 border border-black/[0.04] cursor-pointer no-underline"
              >
                Download Sustainability Report ↓
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[35%] max-w-[420px] aspect-square rounded-[3rem] overflow-hidden shadow-lg border border-black/[0.04] select-none shrink-0 relative bg-black/5">
            <img
              src={welcome2}
              alt="Lush green garden setup with eco-friendly planters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 1: Our Green Commitment */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="max-w-4xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Our Promise</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
              Our Strong Commitment to Sustainability
            </h2>
            <div className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed space-y-6">
              <p className="font-bold text-black text-sm">
                At Urbanland Products, sustainability is not an add-on — it is the foundation of our business.
              </p>
              <p>
                We have completely moved away from traditional teak, sesam and acacia wood and replaced them with WPC (Wood-Plastic Composite) and NFC Wood (Natural Fiber Composite). These advanced green materials are made from recycled plastics and natural fibers, significantly reducing deforestation, lowering carbon emissions, and supporting the circular economy.
              </p>
              <p>
                Every product we create is engineered to last 12–20+ years, drastically cutting replacement waste and long-term environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How Our Green Products Make a Difference */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Environmental Impact</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
            Environmental & Client Benefits of Choosing Urbanland
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Reduces Deforestation</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              WPC & NFC Wood replace natural timber, saving tropical forests and preserving ecological biodiversity.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Uses Recycled Content</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Diverts high-density industrial plastic waste from oceans and landfills into durable materials.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Lower Carbon Footprint</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Our 12–20+ years long-life design cuts replacement frequency, lowering long-term manufacturing energy.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Supports Certifications</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Helps architects and private builders achieve premium IGBC, GRIHA and LEED green building certification points.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Biophilic Design</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Creates healthier, calming public outdoor spaces that support biophilic design, improving air quality and well-being.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <h3 className="text-base font-black text-black uppercase mb-2">Low Maintenance</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Requires zero chemical paints, varnishes or anti-termite treatments, reducing chemical runoff.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Sustainable Materials */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Technical Spec</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 leading-none">
            Sustainable Materials We Use
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="pb-4 md:pb-0 md:pr-6 md:border-r border-black/[0.08]">
              <h3 className="text-base font-black text-black uppercase mb-2">WPC (Wood-Plastic Composite)</h3>
              <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                Recycled plastic + natural fibers. Delivers a beautiful natural wood look with zero maintenance and extreme weather resistance.
              </p>
            </div>
            <div className="pb-4 md:pb-0 md:px-6 md:border-r border-black/[0.08]">
              <h3 className="text-base font-black text-black uppercase mb-2">NFC Wood (Natural Fiber Composite)</h3>
              <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                Advanced natural fiber material with superior strength and a beautiful, high-end matte finish. Perfect for luxury architectural installations.
              </p>
            </div>
            <div className="md:pl-6">
              <h3 className="text-base font-black text-black uppercase mb-2">Aluminium & Stainless Steel</h3>
              <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                Highly durable, low-corrosion metals with excellent biological trace profiles and 100% infinite lifecycle recyclability.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm flex items-center justify-center gap-1.5 font-bold text-[#2C5F2E] border-t border-black/[0.05] pt-6 uppercase tracking-wide">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>All materials are chosen for their ability to deliver beauty, performance and genuine environmental responsibility.</span>
          </p>
        </div>
      </section>

      {/* Section 4: Real Green Impact */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-[#2D2D2D] text-white rounded-[2.5rem] p-8 md:p-16 shadow-lg border border-white/5">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Nationwide Footprint</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Real Projects. Real Sustainable Impact.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              We have delivered 50+ green projects across India, including major luxury residential, municipal and institutional developments. Every installation contributes to reduced deforestation, lower carbon emissions and healthier urban environments.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Our Green Promise */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Core Values</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8 leading-none">
            Our Green Promise to You
          </h2>

          <ul className="text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed space-y-4 max-w-2xl">
            <li className="flex items-start gap-3">
              <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>We will never use endangered, undocumented, or illegal timber in any of our furniture components.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>We actively promote WPC and NFC Wood as sustainable, high-durability, biophilic alternatives to natural wood.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>We actively support our developer clients and landscape architects in achieving premium green building certifications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>We design products for maximum lifespan (12–20+ years) to minimize waste and promote the circular economy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2C5F2E] flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2C5F2E]/10 select-none mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>We continue to research and innovate new green materials, low-VOC finishes, and energy-efficient manufacturing processes.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Accordion Block */}
      <section className="max-w-[850px] mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Clear Answers</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqsList.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.005)] ${
                  isOpen 
                    ? "border-[#2C5F2E]/40 ring-1 ring-[#2C5F2E]/10" 
                    : "border-black/[0.03] hover:border-black/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left cursor-pointer focus:outline-none border-none select-none group bg-white"
                >
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#2C5F2E] pr-6 transition-colors leading-snug">
                    {faq.q}
                  </h3>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 select-none ${
                    isOpen ? "bg-[#2C5F2E] text-white rotate-45" : "bg-[#F7F4EF] text-[#2D2D2D] group-hover:bg-[#2C5F2E]/10"
                  }`}>
                    ＋
                  </span>
                </button>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-black/[0.05]" : "max-h-0"
                }`}>
                  <p className="px-6 py-6 md:px-8 text-xs sm:text-sm leading-relaxed text-[#2D2D2D]/75 bg-[#F7F4EF]/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call-to-Action */}
      <CTASection 
        title="Ready to Partner with a Truly Green Outdoor Furniture Manufacturer?"
        description="Support biophilic architectural design, earn IGBC points, and reduce deforestation with our premium WPC and NFC solutions."
        tagText="Ecological Integrity"
        primaryText="Request Sustainable Quote →"
        primaryLink="/contact"
        secondaryText="Download Sustainability Report ↓"
        secondaryLink="/resources/downloads"
      />
    </div>
  );
};

export default Sustainability;

