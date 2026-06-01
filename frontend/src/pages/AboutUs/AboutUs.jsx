import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";

// Import images
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';

const AboutUs = () => {
  useEffect(() => {
    updatePageSEO({
      title: "About Urbanland Products | Sustainable Outdoor Furniture Manufacturer in India",
      description: "Urbanland Products is a leading Made-in-India manufacturer of premium, sustainable outdoor furniture – benches, planter boxes, bus shelters, dustbins and more. Founded in 2023 with a passion for green urban solutions, we deliver durable, eco-friendly products that enhance public and private spaces across India.",
      og_image: welcome1
    });
    return () => cleanPageSEO();
  }, []);

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-[60%]">
            <p className="text-[0.8125rem] md:text-sm font-black uppercase tracking-widest text-[#2C5F2E] mb-4">— Built with Sustainability at Heart</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[#1A1A1A] max-w-4xl">
              About <br/>
              <span className="text-[#C9A84C]">Urbanland Products</span>
            </h1>
            <p className="text-sm sm:text-base text-[#2D2D2D]/85 max-w-2xl leading-relaxed mt-6">
              We design and manufacture premium, sustainable outdoor furniture that transforms urban spaces into beautiful, functional and eco-friendly environments. From benches and planter boxes to bus shelters and amenity solutions — every product is engineered for Indian conditions, built with green materials, and crafted to last.
            </p>
            
            {/* Trust Line */}
            <div className="mt-8 flex flex-wrap gap-y-2 gap-x-4 justify-center md:justify-start text-xs font-semibold text-[#2C5F2E] bg-[#EAE5DB]/40 px-5 py-3 rounded-full border border-black/[0.04] w-fit">
              <span>✓ Founded 2023</span>
              <span className="opacity-30">|</span>
              <span>✓ ISO 9001:2015 Certified</span>
              <span className="opacity-30">|</span>
              <span>✓ 2-Year Guarantee</span>
              <span className="opacity-30">|</span>
              <span>✓ 50+ Projects Delivered</span>
              <span className="opacity-30">|</span>
              <span>✓ Made in India</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#our-story"
                className="px-6 py-3.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-all duration-300 shadow-md cursor-pointer no-underline"
              >
                Learn More About Our Story →
              </a>
              <Link
                to="/resources/downloads"
                className="px-6 py-3.5 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#C9A84C] hover:text-white transition-all duration-300 border border-black/[0.04] cursor-pointer no-underline"
              >
                Download Company Profile ↓
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[35%] max-w-[420px] aspect-square rounded-[3rem] overflow-hidden shadow-lg border border-black/[0.04] select-none shrink-0 relative bg-black/5">
            <img
              src={welcome1}
              alt="Urbanland premium street furniture bench installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section id="our-story" className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 scroll-mt-32">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Since 2023</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
                Our Story – From Vision to Reality
              </h2>
              <div className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed space-y-6">
                <p>
                  Urbanland Products was founded in 2023 by Raj Shekhar in Vasai, Maharashtra, with a clear mission: to create high-quality, sustainable outdoor furniture that enhances public and private spaces across India.
                </p>
                <p>
                  What started as a passion to replace traditional wood with modern, eco-friendly alternatives has grown into one of the most trusted names in urban furniture manufacturing. Today, we operate from Vasai with a dedicated factory in MIDC and supply premium benches, planter boxes, bus shelters, dustbins, wicker furniture and more to real estate developers, municipal corporations, hotels, hospitals, universities and smart city projects.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 h-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden select-none shrink-0 relative bg-black/5 shadow-md">
              <img
                src={welcome2}
                alt="Urbanland manufacturing and warehouse assets"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2D2D2D] text-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-white/5 flex flex-col justify-between aspect-[16/11]">
            <div>
              <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-white/10 px-3 py-1 rounded-full w-fit mb-6 block border border-white/5">
                Our Purpose
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#C9A84C] mb-4">Mission</h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                To deliver durable, stylish and truly sustainable outdoor furniture that reduces environmental impact while enhancing the beauty and functionality of urban India.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A84C]/60 mt-6 block">
              — Shaping The Urban Green Horizon
            </span>
          </div>

          <div className="bg-[#2C5F2E] text-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-white/5 flex flex-col justify-between aspect-[16/11]">
            <div>
              <span className="text-[8px] font-black uppercase tracking-widest text-[#C9A84C] bg-white/10 px-3 py-1 rounded-full w-fit mb-6 block border border-white/5">
                Our Goal
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#C9A84C] mb-4">Vision</h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                To become India’s most preferred manufacturer of green urban furniture, helping cities, developers and institutions create beautiful, long-lasting public and private spaces that support biophilic design and green living.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A84C]/60 mt-6 block">
              — Biophilic Urbanism Across Metros
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Commitment to Sustainability */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— Sustainability at the Core</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 leading-none">
              Sustainability at the Core of Everything We Do
            </h2>
            <div className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed space-y-6">
              <p className="font-bold text-black text-sm">
                At Urbanland Products, sustainability is not a marketing term — it is our foundation.
              </p>
              <p>
                We actively replace traditional teak, sesam and acacia wood with WPC (Wood-Plastic Composite) and NFC Wood (Natural Fiber Composite) — materials made from recycled plastics and natural fibers. This approach significantly reduces deforestation, lowers carbon footprint and supports the circular economy.
              </p>
              <p>
                Our products are designed for longevity (12–20+ years), drastically reducing replacement waste. We focus on recyclable materials, low-VOC finishes and energy-efficient manufacturing processes. Architects and developers love working with us because our solutions help them achieve IGBC, GRIHA and LEED green building certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-3 block">— The Urbanland Difference</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none">
            Why Leading Organisations Choose Urbanland
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              01
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">Made in India</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Proudly supporting Aatmanirbhar Bharat with robust in-house fabrication and local components.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              02
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">Premium Quality</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Built to withstand the Indian climate, UV weathering, and heavy usage without structural degradation.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              03
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">Eco-Friendly Materials</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Extensive utilization of WPC, NFC Wood, Aluminium & Stainless Steel to drive biophilic green goals.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              04
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">Fast Delivery</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Optimized logistics and MIDC Vasai factory pipelines deliver custom scopes in just 2–4 weeks.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              05
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">End-to-End Support</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Comprehensive assistance from technical design consultation and custom BOQ preparation to delivery and anchoring.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.03] shadow-[0_5px_15px_rgba(0,0,0,0.005)]">
            <div className="w-10 h-10 rounded-full bg-[#2C5F2E]/10 flex items-center justify-center font-bold text-[#2C5F2E] mb-4 text-xs">
              06
            </div>
            <h3 className="text-base font-black text-black uppercase mb-2">2-Year Warranty</h3>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              India's only 2-Year Comprehensive Warranty for unmatched developer and city administration peace of mind.
            </p>
          </div>
        </div>

        <div className="bg-[#EAE5DB]/40 rounded-[2rem] p-8 border border-black/[0.04] mt-8 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#2C5F2E] uppercase tracking-wide">
            ✓ Proven Track Record — 50+ successful projects across real estate, municipal, hospitality, healthcare and education sectors.
          </p>
        </div>
      </section>

      {/* Section 5: Our Journey So Far */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-[#2D2D2D] text-white rounded-[2.5rem] p-8 md:p-16 shadow-lg border border-white/5">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-3 block">— Our Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Our Journey So Far
            </h2>
            <div className="text-xs sm:text-sm text-white/80 leading-relaxed space-y-6">
              <p>
                Since 2023, we have successfully delivered projects for leading names including Godrej, Kalpataru, Wadhwa Wise City, TATA Projects and many municipal & smart city initiatives across Maharashtra, Gujarat, Andhra Pradesh, Karnataka and beyond.
              </p>
              <p>
                From luxury villa landscaping to large township amenity decks and public infrastructure, every project reflects our commitment to quality, sustainability and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[2.5rem] border border-black/[0.04] p-8 md:p-16 text-center shadow-[0_15px_45px_rgba(0,0,0,0.015)]">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
            Ready to Partner with a Sustainable Outdoor Furniture Manufacturer?
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2D2D]/60 max-w-xl mx-auto mt-4 leading-relaxed">
            Get in touch with our team of technical experts to review custom drawings, design swatches, and material specifications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors cursor-pointer shadow-md no-underline"
            >
              Get in Touch With Us →
            </Link>
            <Link
              to="/resources/downloads"
              className="px-6 py-3.5 bg-[#EAE5DB] text-[#2D2D2D] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#C9A84C] hover:text-white transition-colors border border-black/[0.04] cursor-pointer no-underline"
            >
              Download Company Profile ↓
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

