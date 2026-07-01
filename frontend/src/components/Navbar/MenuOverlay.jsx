import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import image assets
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';

const MenuOverlay = ({ isOpen, setIsOpen }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const linksRef = useRef([]);
  const bottomRef = useRef(null);

  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Home", path: "/", image: gbg1 },
    { 
      name: "Products", 
      path: "/products",
      image: gbg1,
      isMega: true,
      subCategories: [
        {
          title: "Seating & Tables",
          items: [
            { name: "Outdoor Benches", path: "/products/benches" },
            { name: "Aluminium Benches", path: "/products/benches/aluminium-benches" },
            { name: "Canteen Tables", path: "/products/canteen-tables" },
            { name: "Poolside Loungers", path: "/products/poolside-loungers" }
          ]
        },
        {
          title: "Shelters & Structures",
          items: [
            { name: "Bus Shelters", path: "/products/bus-shelters" },
            { name: "Car Shelters", path: "/products/car-shelters" },
            { name: "Cabanas", path: "/products/cabanas" },
            { name: "Architectural Pergolas", path: "/products/pergolas" },
            { name: "Elegant Gazebos", path: "/products/gazebos" },
            { name: "Pre Fab Homes", path: "/products/pre-fab-homes" }
          ]
        },
        {
          title: "Wicker Collection",
          items: [
            { name: "Wicker Furniture", path: "/products/wicker-furniture" },
            { name: "Wicker Outdoor Products", path: "/products/wicker-furniture/wicker-outdoor-products" },
            { name: "Wicker Living", path: "/products/wicker-living-sets" },
            { name: "Wicker Dining", path: "/products/wicker-dining-sets" }
          ]
        },
        {
          title: "Accessories & Other",
          items: [
            { name: "Planters", path: "/products/planters" },
            { name: "Dustbins", path: "/products/dustbins" },
            { name: "SS Bollards", path: "/products/ss-bollards" },
            { name: "Indoor Furniture", path: "/products/indoor-furniture" },
            { name: "Metal & Wooden Furniture", path: "/products/metal-wooden-furniture" },
            { name: "Full Catalogue", path: "/catalogue", isHighlight: true }
          ]
        }
      ]
    },
    { 
      name: "Solutions", 
      path: "/solutions",
      image: gbg2,
      subLinks: [
        { name: "Real Estate", path: "/solutions/real-estate" },
        { name: "Hospitality & Hotels", path: "/solutions/hospitality" },
        { name: "Healthcare", path: "/solutions/healthcare" },
        { name: "Education", path: "/solutions/education" },
        { name: "Municipal & Smart Cities", path: "/solutions/municipal-smart-city" },
        { name: "View All Solutions", path: "/solutions", isHighlight: true }
      ]
    },
    { 
      name: "Projects", 
      path: "/projects",
      image: gbg3,
      subLinks: [
        { name: "Lodha Gated Estates", path: "/projects/lodha" },
        { name: "Adani Corporate Plazas", path: "/projects/adani" },
        { name: "Oberoi Leisure Hubs", path: "/projects/oberoi" },
        { name: "Mumbai Smart Shelters", path: "/projects/mumbai" },
        { name: "Delhi Metro Plazas", path: "/projects/delhi" },
        { name: "Bangalore Social Courtyards", path: "/projects/bangalore" },
        { name: "Pune Public Shelters", path: "/projects/pune" },
        { name: "View All Projects", path: "/projects", isHighlight: true }
      ]
    },
    { 
      name: "About Us", 
      path: "/about-us",
      image: gbg4,
      subLinks: [
        { name: "Our Profile & History", path: "/about-us" },
        { name: "Sustainability", path: "/sustainability" }
      ]
    },
    { 
      name: "Resources", 
      path: "/resources",
      image: gbg5,
      subLinks: [
        { name: "Downloads", path: "/resources/downloads" },
        { name: "Blog / Journal", path: "/blog" },
        { name: "FAQ", path: "/faq" },
        { name: "Materials Guide", path: "/materials" },
        { name: "Resources Hub", path: "/resources", isHighlight: true }
      ]
    },
    { name: "Contact Us", path: "/contact", image: gbg1 }
  ];

  // Socials structure matching the circles
  const socials = [
    { name: "linkedin", url: "https://linkedin.com", label: "in" },
    { name: "instagram", url: "https://instagram.com" },
    { name: "globe", url: "https://google.com" },
    { name: "behance", url: "https://behance.net", label: "Bē" }
  ];

  useEffect(() => {
    if (isOpen) {
      if (containerRef.current) gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.5, ease: "power2.out" });
      if (innerRef.current) {
        gsap.fromTo(innerRef.current,
          { scale: 0.05, y: 60, opacity: 0, borderRadius: "100px", transformOrigin: "50% 100%" },
          { scale: 1, y: 0, opacity: 1, borderRadius: "0px", duration: 0.6, ease: "power4.out" }
        );
      }
      const validLinks = linksRef.current.filter(Boolean);
      if (validLinks.length > 0) {
        gsap.fromTo(validLinks, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, delay: 0.2, ease: "power3.out" });
      }
      if (bottomRef.current) gsap.fromTo(bottomRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out" });
    } else {
      if (innerRef.current) {
        gsap.to(innerRef.current, { scale: 0.05, y: 60, opacity: 0, borderRadius: "100px", duration: 0.4, ease: "power3.in", transformOrigin: "50% 100%" });
      }
      if (containerRef.current) gsap.to(containerRef.current, { autoAlpha: 0, duration: 0.4, delay: 0.05, ease: "power2.inOut" });
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) setIsOpen(false);
  };

  const activeLink = links[activeMenuIndex] || links[0];

  return (
    <div ref={containerRef} onClick={handleBackdropClick} className="fixed inset-0 z-[999] bg-[#F7F4EF] flex items-stretch justify-center font-sans opacity-0 invisible">
      <div ref={innerRef} className="menu-overlay-inner relative w-full h-full bg-[#F7F4EF] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 shadow-none border-none rounded-none">
        
        {/* Main Content Area */}
        <div className="menu-main-content w-full h-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 z-10 overflow-y-auto scrollbar-none pb-12 lg:pb-0">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between py-4 lg:py-6 pl-2 lg:pl-6 mt-8 lg:mt-0 lg:h-full lg:overflow-y-auto lg:scrollbar-none pb-24 lg:pb-28">
            <div className="menu-links-block flex flex-col gap-4 items-start justify-center flex-grow w-full">
              {links.map((link, index) => {
                const hasSubDesktop = link.isMega || link.subLinks;
                const isHovered = activeMenuIndex === index;
                const isActivePath = currentPath === link.path || 
                  (link.subLinks && link.subLinks.some(s => s.path === currentPath)) || 
                  (link.isMega && link.subCategories.some(sc => sc.items.some(i => i.path === currentPath)));

                return (
                  <div key={link.name} className="w-full flex flex-col items-start" ref={(el) => (linksRef.current[index] = el)}>
                    <div className="flex items-center gap-4 w-full justify-between sm:justify-start">
                      <Link
                        to={link.path}
                        onMouseEnter={() => setActiveMenuIndex(index)}
                        onClick={() => { if (!hasSubDesktop) setIsOpen(false); }}
                        className={`group relative flex items-center text-[clamp(1.8rem,5vw,2.5rem)] sm:text-[clamp(2.3rem,6vw,3.6rem)] lg:text-[clamp(2.2rem,6vh,3.5rem)] leading-none font-semibold tracking-tight transition-all duration-300 select-none cursor-pointer no-underline ${
                          isHovered || isActivePath ? "text-forest-deep translate-x-3" : "text-gray-800/50 hover:text-gray-800/80"
                        }`}
                      >
                        {isActivePath && <span className="w-2.5 h-2.5 rounded-full bg-architectural-gold mr-3 inline-block shrink-0" />}
                        <span>{link.name}</span>
                      </Link>

                      {/* Mobile Accordion Toggle */}
                      {hasSubDesktop && (
                        <button
                          onClick={() => setExpandedMobileIndex(expandedMobileIndex === index ? null : index)}
                          className="lg:hidden w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-lg font-semibold cursor-pointer active:scale-90 transition-all select-none hover:bg-black/5"
                        >
                          {expandedMobileIndex === index ? "✕" : "＋"}
                        </button>
                      )}
                    </div>

                    {/* Mobile SubLinks Panel (Accordion style) */}
                    <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden w-full ${expandedMobileIndex === index ? 'max-h-[1000px] mt-4 mb-4' : 'max-h-0 mt-0 mb-0'}`}>
                      <div className="flex flex-col gap-2 pl-4 border-l-[3px] border-forest-deep/20">
                        {link.isMega && link.subCategories.map(cat => (
                          <div key={cat.title} className="mb-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-architectural-gold mb-3 pl-2">{cat.title}</h4>
                            <div className="flex flex-col gap-1">
                              {cat.items.map(item => (
                                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-800 hover:text-forest-deep block py-2 px-2 active:bg-black/5 rounded-lg transition-colors">{item.name}</Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        {link.subLinks && link.subLinks.map(sub => (
                          <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-800 hover:text-forest-deep block py-2.5 px-2 active:bg-black/5 rounded-lg transition-colors">{sub.name}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row */}
            <div ref={bottomRef} className="menu-bottom-row flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-black/10 w-full mt-8 lg:mt-0">
               {/* Same socials as before */}
               <div className="flex items-center gap-3">
                {socials.map((social) => {
                  if (social.name === "instagram") {
                    return (
                      <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:text-forest-deep hover:border-forest-deep transition-all hover:bg-black/5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                    );
                  }
                  if (social.name === "globe") {
                    return (
                      <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:text-forest-deep hover:border-forest-deep transition-all hover:bg-black/5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>
                      </a>
                    );
                  }
                  return (
                    <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:text-forest-deep hover:border-forest-deep transition-all text-[0.8125rem] font-medium tracking-wide">
                      {social.label}
                    </a>
                  );
                })}
              </div>
              <p className="text-[0.6875rem] sm:text-xs text-black/40 leading-relaxed max-w-xs">This website is concept work to showcase our capabilities.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Desktop Dynamic Pane */}
          <div className="hidden lg:flex w-full lg:w-[60%] justify-end items-stretch relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLink.name}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full bg-white rounded-[3rem] shadow-2xl border border-black/5 overflow-hidden flex flex-col p-10 relative"
              >
                {/* Background Image for simple links */}
                {(!activeLink.isMega && !activeLink.subLinks) && (
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activeLink.image})` }}>
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    <div className="absolute bottom-10 left-10 text-white z-10 flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center">
                         <span className="text-xl font-semibold leading-none">®</span>
                       </div>
                       <h2 className="text-6xl font-bold tracking-tighter">Urbanland</h2>
                    </div>
                  </div>
                )}

                {/* Sub Menu Content */}
                {(activeLink.isMega || activeLink.subLinks) && (
                   <div className="relative z-10 h-full flex flex-col">
                     <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-6">
                       <div>
                         <h3 className="text-3xl font-headline-md font-semibold text-forest-deep">{activeLink.name}</h3>
                         <p className="text-sm text-gray-500 mt-2 font-body-md">Explore our {activeLink.name.toLowerCase()} catalog</p>
                       </div>
                       <Link to={activeLink.path} onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-full bg-forest-deep text-white text-xs font-bold tracking-widest uppercase hover:bg-forest-deep/90 transition-all">
                         View All
                       </Link>
                     </div>

                     {/* Mega Menu Grid */}
                     {activeLink.isMega && (
                       <div className="grid grid-cols-2 gap-x-8 gap-y-10 overflow-y-auto pr-4 custom-scrollbar h-[calc(100%-100px)]">
                         {activeLink.subCategories.map(cat => (
                           <div key={cat.title}>
                             <h4 className="text-xs font-bold uppercase tracking-widest text-architectural-gold mb-4">{cat.title}</h4>
                             <ul className="flex flex-col gap-3">
                               {cat.items.map(item => (
                                 <li key={item.name}>
                                   <Link to={item.path} onClick={() => setIsOpen(false)} className={`text-base font-medium transition-all ${item.isHighlight ? 'text-forest-deep font-semibold' : 'text-gray-700 hover:text-forest-deep'}`}>
                                     {item.name}
                                   </Link>
                                 </li>
                               ))}
                             </ul>
                           </div>
                         ))}
                       </div>
                     )}

                     {/* Standard Sub Links List */}
                     {activeLink.subLinks && !activeLink.isMega && (
                       <div className="flex flex-col lg:flex-row gap-8 h-[calc(100%-100px)]">
                         {/* Link Cards */}
                         <div className="w-full lg:w-1/2 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar pb-8">
                           {activeLink.subLinks.map(sub => (
                             <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${sub.isHighlight ? 'bg-forest-deep text-white border-forest-deep' : 'bg-white border-black/5 hover:border-forest-deep/30 hover:bg-forest-deep/5 hover:shadow-md'}`}>
                               <span className={`text-lg font-medium transition-colors ${sub.isHighlight ? 'text-white' : 'text-gray-800 group-hover:text-forest-deep'}`}>
                                 {sub.name}
                               </span>
                               <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${sub.isHighlight ? 'bg-white/20 text-white' : 'bg-gray-100 text-forest-deep group-hover:bg-forest-deep group-hover:text-white'}`}>
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                               </span>
                             </Link>
                           ))}
                         </div>
                         
                         {/* Visual Showcase Banner */}
                         <div className="hidden lg:block w-1/2 h-full rounded-3xl overflow-hidden relative group">
                           <img src={activeLink.image} alt={activeLink.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                             <div>
                                <span className="text-architectural-gold text-xs font-bold tracking-widest uppercase mb-2 block">Discover</span>
                                <h3 className="text-white text-3xl font-bold">{activeLink.name}</h3>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                   </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* FLOATING PILL CLOSE BUTTON */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <button onClick={() => setIsOpen(false)} className="flex items-center gap-4 pl-6 pr-1.5 py-1.5 rounded-full bg-forest-deep text-white hover:bg-forest-deep/90 active:scale-95 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-xl border border-white/10">
            Close
            <span className="w-8 h-8 rounded-full bg-white text-forest-deep flex items-center justify-center text-xs font-semibold">✕</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default MenuOverlay;
