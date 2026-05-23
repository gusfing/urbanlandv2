import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logoImg from "../../assets/urbanland-logo.png";
import abstractFluid from "../../assets/abstract_fluid.png";

// Import Background Image assets for Solution Previews
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
  const graphicRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const bgImages = [gbg1, gbg2, gbg3, gbg4, gbg5];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " (CEST)");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    "Welcome",
    "Case Studies",
    "Recognitions",
    "Services",
    "About"
  ];

  const socials = [
    "Instagram",
    "Behance",
    "Dribbble",
    "LinkedIn"
  ];

  useEffect(() => {
    if (isOpen) {
      // Fade/show backdrop
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      
      // Expand modal card directly upwards from the bottom navbar button position
      if (innerRef.current) {
        gsap.fromTo(
          innerRef.current,
          { 
            scale: 0.05, 
            y: 60, 
            opacity: 0,
            borderRadius: "100px",
            transformOrigin: "50% 100%"
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            borderRadius: "0px",
            duration: 0.6,
            ease: "power4.out",
          }
        );
      }

      // Animate link items in sequence
      const validLinks = linksRef.current.filter(Boolean);
      if (validLinks.length > 0) {
        gsap.fromTo(
          validLinks,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            delay: 0.22,
            ease: "power3.out",
          }
        );
      }

      // Animate bottom row and graphic
      const targets = [bottomRef.current, graphicRef.current].filter(Boolean);
      if (targets.length > 0) {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

    } else {
      // Modal card scales back down into the bottom button
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          scale: 0.05,
          y: 60,
          opacity: 0,
          borderRadius: "100px",
          duration: 0.4,
          ease: "power3.in",
          transformOrigin: "50% 100%"
        });
      }

      // Fade out backdrop
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.4,
          delay: 0.05,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-[12px] flex items-stretch justify-center font-sans opacity-0 invisible"
    >
      <div 
        ref={innerRef}
        className="relative w-full h-full bg-[#F7F4EF] overflow-hidden flex flex-col justify-between p-6 sm:p-12 md:p-20 shadow-none border-none rounded-none"
      >
        
        {/* Dynamic Cinematic Background Image Previews */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-700">
          {bgImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out transform ${
                hoveredIndex === idx ? "opacity-15 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          {/* Overlay to ensure maximum text contrast */}
          <div className="absolute inset-0 bg-[#F7F4EF]/95" />
        </div>

        {/* Header inside menu: Brand logo on left, custom close on right */}
        <div className="w-full flex items-center justify-between z-10 border-b border-[#1A1A1A]/10 pb-6">
          <img src={logoImg} alt="Urbanland Logo" className="h-6 sm:h-8 object-contain" />
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D2D2D] text-[#F7F4EF] hover:bg-[#2C5F2E] hover:text-[#C9A84C] active:scale-95 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-sm z-30"
          >
            ✕ Close Menu
          </button>
        </div>

        {/* Main Content Area: Split 60/35 on desktop */}
        <div className="w-full h-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20 z-10 mt-8 md:mt-12 overflow-y-auto scrollbar-none">
          
          {/* LEFT COLUMN: Animated Navigation Links */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-4 py-8 pl-4 lg:pl-10">
            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center gap-4 text-4xl sm:text-6xl md:text-[5.2rem] lg:text-[6.2rem] leading-[0.95] text-[#1A1A1A] font-black uppercase tracking-tighter hover:text-[#2C5F2E] hover:translate-x-6 transition-all duration-300 select-none"
              >
                {/* Micro-spinning star indicator on hover */}
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 absolute -left-8 text-2xl pointer-events-none">
                  ✦
                </span>
                <span className="relative">
                  {link}
                </span>
              </a>
            ))}
          </div>

          {/* RIGHT COLUMN: Dark Premium Information Box */}
          <div className="w-full lg:w-[35%] bg-[#2C5F2E] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between items-stretch gap-10 border border-white/5 shadow-2xl self-center lg:self-stretch">
            
            {/* Top Part: SVG Brand symbol and details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <svg 
                  viewBox="0 0 100 100" 
                  className="h-10 w-10 text-[#C9A84C]" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                  strokeLinecap="square"
                >
                  <line x1="38" y1="20" x2="26" y2="80" />
                  <line x1="62" y1="20" x2="74" y2="80" />
                  <line x1="34" y1="20" x2="66" y2="20" />
                  <line x1="30" y1="36" x2="70" y2="36" />
                  <line x1="22" y1="54" x2="78" y2="54" />
                  <line x1="16" y1="72" x2="84" y2="72" />
                </svg>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest leading-none">Urbanland®</h4>
                  <p className="text-[#C9A84C] text-[10px] uppercase tracking-widest mt-1">Premium Outdoor Systems</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[#F7F4EF]/85 text-xs sm:text-sm leading-relaxed font-normal">
                <p>We craft high-contrast, low-maintenance urban furniture engineered for heavy footfall and beautiful residential, hospitality, and smart city infrastructure developments across India.</p>
                <p>Designed with natural sustainable principles and custom precision finishes built to match your signature layout.</p>
              </div>
            </div>

            {/* Bottom Part: Social links and metadata */}
            <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-[#F7F4EF]/75 hover:text-[#C9A84C] text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                  >
                    ▸ {social}
                  </a>
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] md:text-xs font-semibold text-white">
                <span className="text-[#F7F4EF]/75 font-normal">{currentTime}</span>
                <a 
                  href="mailto:hello@urbanland.co" 
                  className="underline decoration-1 underline-offset-4 hover:text-[#C9A84C] transition-colors"
                >
                  hello@urbanland.co
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MenuOverlay;
