import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import abstractFluid from "../../assets/abstract_fluid.png";

const MenuOverlay = ({ isOpen, setIsOpen }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const linksRef = useRef([]);
  const bottomRef = useRef(null);
  const graphicRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("");

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
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      
      // Expand modal card directly upwards from the bottom navbar button position
      gsap.fromTo(
        innerRef.current,
        { 
          scale: 0.05, 
          y: 60, // Starting point offsets the scale center to match the button height exactly
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

      // Animate link items in sequence
      gsap.fromTo(
        linksRef.current,
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

      // Animate bottom row and graphic
      gsap.fromTo(
        [bottomRef.current, graphicRef.current],
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.3,
          ease: "power2.out",
        }
      );

    } else {
      // Modal card scales back down into the bottom button
      gsap.to(innerRef.current, {
        scale: 0.05,
        y: 60,
        opacity: 0,
        borderRadius: "100px",
        duration: 0.4,
        ease: "power3.in",
        transformOrigin: "50% 100%"
      });

      // Fade out backdrop
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.05,
        ease: "power2.inOut",
      });
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
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[6px] flex items-stretch justify-center font-sans opacity-0 invisible"
    >
      <div 
        ref={innerRef}
        className="relative w-full h-full bg-[#f4efe7] overflow-hidden flex flex-col justify-between p-10 sm:p-16 md:p-24 shadow-none border-none rounded-none"
      >
        {/* Top Right Graphic (Premium abstract fluid ribbons) */}
        <div 
          ref={graphicRef}
          className="absolute top-0 right-0 w-[45%] h-[55%] pointer-events-none select-none overflow-hidden rounded-none opacity-0"
        >
          <img 
            src={abstractFluid} 
            alt="Abstract Fluid Shape" 
            className="w-full h-full object-cover object-right-top opacity-95"
          />
        </div>

        {/* Top Section: Navigation Links */}
        <div className="flex flex-col items-start gap-4 z-10 pt-16 pl-6 md:pt-20 md:pl-16">
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[0.95] text-[#2a2725] font-black uppercase tracking-tighter hover:text-[#993b21] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div 
          ref={bottomRef} 
          className="w-full flex items-end justify-between z-10 pt-8 pl-6 pr-6 md:pl-16 md:pr-16 opacity-0 relative"
        >
          {/* Socials */}
          <div className="flex flex-col items-start gap-0.5 sm:gap-1 font-sans">
            {socials.map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[#666] text-[10px] sm:text-xs md:text-sm font-medium hover:text-[#111] transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Action Button (Pill) - Absolutely Centered */}
          <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex items-center bg-[#f5f5f5] rounded-full p-0.5 sm:p-1 border border-black/5 shadow-sm">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold text-[#111] bg-white hover:bg-gray-50 transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              Close
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold text-white bg-black flex items-center gap-1 sm:gap-1.5 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Let's Talk
              <span className="text-[#0a7c41]">
                <FiArrowUpRight size={14} className="md:w-[16px] md:h-[16px]" strokeWidth={3} />
              </span>
            </button>
          </div>

          {/* Time & Email */}
          <div className="flex flex-col items-end text-[10px] sm:text-xs md:text-sm font-medium text-[#111]">
            <p className="text-gray-400 font-normal mb-0.5 sm:mb-1">{currentTime}</p>
            <a 
              href="mailto:hello@urbanland.co" 
              className="underline decoration-1 underline-offset-4 hover:text-gray-500 transition-colors"
            >
              hello@urbanland.co
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
