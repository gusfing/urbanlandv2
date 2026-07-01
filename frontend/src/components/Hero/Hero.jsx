import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/welcome-1.png";

const SLIDE_DURATION = 6500;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChooseIndex, setActiveChooseIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);

  const slides = [
    {
      image: "/assets/bench-hero.jpeg",
      tag: "OUTDOOR FURNITURE",
      title: "Premium Outdoor Furniture Manufacturer in India",
      subtext: "Urbanland Products designs and manufactures premium, aesthetic, and sustainable urban furniture and landscape solutions for developers, architects, and public spaces across India.",
      cta1Text: "Request a Quote",
      cta1Link: "/contact",
      cta1Icon: "arrow_forward",
      cta2Text: "Download Catalogue",
      cta2Link: "/resources/downloads",
      cta2Icon: "download",
      showTrustBar: true
    },
    {
      image: "/assets/canteen-tables-hero.jpeg",
      tag: "CRAFTSMANSHIP",
      title: "Precision Engineering with Indian Craftsmanship",
      subtext: "Since 2023, Urbanland Products has been a trusted partner for architects and developers, combining traditional manufacturing with avant-garde architectural design.",
      cta1Text: "Explore Products",
      cta1Link: "/products",
      cta1Icon: "arrow_forward",
      cta2Text: "Our Story",
      cta2Link: "/about-us",
      cta2Icon: "auto_stories",
      showTrustBar: false
    },
    {
      image: "/assets/poolside-loungers-ugc.jpeg",
      tag: "LUXURY LIVING",
      title: "Defining Luxury Outdoor Living",
      subtext: "From luxury resorts to high-end townships, we provide outdoor furniture that enhances the guest experience with superior durability and aesthetic appeal.",
      cta1Text: "Explore Projects",
      cta1Link: "/projects",
      cta1Icon: "arrow_forward",
      cta2Text: "Contact Us",
      cta2Link: "/contact",
      cta2Icon: "mail",
      showTrustBar: false
    },
    {
      image: "/assets/planters-ugc.jpeg",
      tag: "SUSTAINABILITY",
      title: "Built for a Sustainable Future",
      subtext: "We replace traditional hardwood with innovative, eco-friendly materials like WPC and NFC wood, supporting green building initiatives and minimizing environmental impact.",
      cta1Text: "Explore Materials",
      cta1Link: "/materials",
      cta1Icon: "arrow_forward",
      cta2Text: "Sustainability Report",
      cta2Link: "/sustainability",
      cta2Icon: "eco",
      showTrustBar: false
    }
  ];

  const startProgress = () => {
    if (progressRef.current) cancelAnimationFrame(progressRef.current);
    progressStartRef.current = performance.now();
    const animate = (now) => {
      const elapsed = now - progressStartRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(animate);
      }
    };
    progressRef.current = requestAnimationFrame(animate);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    startProgress();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, []);

  useEffect(() => {
    startProgress();
  }, [activeIndex]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  return (
    <>
      {/* ─── HERO SLIDER ─────────────────────────────────────────── */}
      <section
        className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black text-white"
        id="hero-slider"
      >
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background image with Ken Burns zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform ease-in-out ${
                    isActive ? "scale-110 duration-[9000ms]" : "scale-100 duration-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Gradient overlays — stronger on left, vignette on edges */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)"
                }}
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 45%)"
                }}
              />

              {/* Slide content */}
              <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full h-full flex flex-col justify-center">
                <div
                  className={`max-w-2xl transition-all duration-700 delay-200 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {/* Tag badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[1px] bg-[#C9A84C]" />
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C]">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  {index === 0 ? (
                    <h1 className="font-display-lg text-[26px] sm:text-[38px] md:text-[50px] leading-[1.15] uppercase font-black mb-4 whitespace-normal">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="font-display-lg text-[26px] sm:text-[38px] md:text-[50px] leading-[1.15] uppercase font-black mb-4 whitespace-normal">
                      {slide.title}
                    </h2>
                  )}

                  {/* Subtext */}
                  <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed mb-8">
                    {slide.subtext}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={slide.cta1Link}
                      className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-black px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 no-underline"
                    >
                      {slide.cta1Text}
                      <span className="material-symbols-outlined text-sm">{slide.cta1Icon}</span>
                    </Link>
                    <Link
                      to={slide.cta2Link}
                      className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300 no-underline"
                    >
                      {slide.cta2Text}
                      <span className="material-symbols-outlined text-sm">{slide.cta2Icon}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Trust Bar (bottom, slide 1 only) ── */}
        <div
          className={`absolute bottom-20 sm:bottom-14 left-0 w-full z-30 px-margin-mobile md:px-margin-desktop transition-all duration-700 ${
            slides[activeIndex].showTrustBar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-container-max mx-auto border-t border-white/15 pt-5 flex flex-wrap gap-x-8 gap-y-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
            {[
              { icon: "verified", label: "ISO 9001 Quality" },
              { icon: "calendar_today", label: "2-Year Warranty" },
              { icon: "location_city", label: "50+ Landmark Projects" },
              { icon: "local_shipping", label: "Pan-India Delivery" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C9A84C] text-sm">{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Controls ── */}
        <div className="absolute bottom-5 left-0 right-0 z-30 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto flex items-center justify-between">

            {/* Slide counter + progress bar */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-white/50">
                <span className="text-white font-bold text-sm">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" "}/{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
              {/* Progress track */}
              <div className="hidden sm:block w-32 h-[2px] bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C9A84C] rounded-full transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Dot nav */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-6 h-2 bg-[#C9A84C]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <div className="flex gap-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer text-white"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer text-white"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Side accent line ── */}
        <div className="absolute left-0 top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-transparent via-[#C9A84C]/60 to-transparent" />
      </section>

      {/* ─── TRUSTED BY LOGO STRIP ──────────────────────────────── */}
      <section className="py-8 sm:py-stack-md bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-label-sm text-[10px] sm:text-label-sm lg:text-sm uppercase tracking-[0.2em] text-on-surface-variant mb-6 sm:mb-10">
            Trusted by Leading Developers &amp; Institutions
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-on-surface">
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">LODHA</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">adani Realty</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">OBEROI</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">Godrej</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-nowrap">TATA PROJECTS</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">KALPATARU</div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / BUILT FOR PROJECTS ─────────────────────────── */}
      <section className="py-8 sm:py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0 relative">
          {/* Left 60%: Visual Anchor */}
          <div className="w-full lg:w-3/5 z-0 reveal-up">
            <div className="relative overflow-hidden rounded-[24px] smooth-shadow group">
              <img
                alt="Luxury outdoor architectural project featuring modern seating and premium landscaping"
                className="w-full h-[320px] sm:h-[500px] md:h-[640px] object-cover transition-transform duration-700 group-hover:scale-105"
                src={aboutImage}
              />
              <div className="absolute inset-0 bg-forest-deep/5 mix-blend-multiply" />
            </div>
          </div>
          {/* Right 40%: Content Card (Overlapping) */}
          <div className="w-full lg:w-2/5 lg:-ml-20 mt-6 lg:mt-20 z-10 reveal-up" style={{ transitionDelay: '150ms' }}>
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-[24px] smooth-shadow border border-industrial-charcoal/5">
              <span className="font-label-md text-xs sm:text-label-md text-architectural-gold uppercase tracking-[0.2em] block mb-4">
                ABOUT URBANLAND
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-forest-deep mb-6 leading-tight">
                Built for Projects That Last
              </h2>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Urbanland Products is India's leading manufacturer of premium outdoor furniture and urban
                infrastructure solutions. We design custom WPC park benches, designer planters, bus shelters,
                gazebos, and site furnishings. Every product is engineered for durability, weather
                resistance, and sustainable outdoor performance.
              </p>
              {/* Proof Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 mb-8 sm:mb-10">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-forest-deep group-hover:bg-architectural-gold group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md text-on-surface">Pan-India Delivery</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-forest-deep text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] font-label-md text-xs sm:text-label-md uppercase tracking-widest hover:bg-primary-container transition-all group no-underline font-semibold w-full sm:w-auto text-center"
              >
                Explore Our Story
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE URBANLAND ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123114] to-[#0d220e] text-white py-16 sm:py-stack-xl border-t border-white/5">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-architectural-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left */}
            <div className="lg:col-span-5 space-y-4 reveal-up">
              <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                WHY URBANLAND
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white leading-tight">
                Why Developers &amp; Architects Choose Urbanland
              </h2>
              <div className="w-24 h-1 bg-craftsman-gold"></div>
              <p className="font-body-md text-sm text-white/50 leading-relaxed max-w-md pt-2">
                We combine architectural precision, custom manufacturing capabilities, and sustainable materials to deliver high-durability site furnishings for landmark projects nationwide.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-7 border-t border-white/10 reveal-up" style={{ transitionDelay: '150ms' }}>
              {[
                { num: "01", title: "Project-Ready Solutions", description: "Outdoor furniture designed for residential, commercial, hospitality, and public infrastructure projects." },
                { num: "02", title: "Custom Manufacturing", description: "Flexible sizes, materials, colours, and finishes tailored to project specifications." },
                { num: "03", title: "Built with Sustainable Materials", description: "WPC, NFC Wood, GFRC, aluminium, and stainless steel for lasting outdoor performance." },
                { num: "04", title: "From Factory to Site", description: "A single partner for design support, manufacturing, nationwide delivery, and installation." }
              ].map((item, idx) => {
                const isOpen = activeChooseIndex === idx;
                return (
                  <div key={idx} className="border-b border-white/10">
                    <button
                      onClick={() => setActiveChooseIndex(isOpen ? -1 : idx)}
                      className="flex items-center justify-between w-full text-left py-5 sm:py-6 group focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className="font-mono text-sm sm:text-base text-architectural-gold/60 mr-4 sm:mr-6 group-hover:text-architectural-gold transition-colors duration-300">
                          {item.num}
                        </span>
                        <span className="font-headline-md text-base sm:text-lg font-medium text-white group-hover:text-architectural-gold transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-white/40 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180 text-architectural-gold' : ''}`}>
                        {isOpen ? 'remove' : 'add'}
                      </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-9 sm:pl-12 pb-5 sm:pb-6">
                        <p className="font-body-md text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
