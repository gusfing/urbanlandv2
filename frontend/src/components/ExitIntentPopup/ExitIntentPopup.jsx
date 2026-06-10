import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getOptimizedImageUrl } from "../../utils/image";

// Import premium images for context-tailored popups
import companyProfileImg from "../../assets/welcome-2.png";
import landscapeGuideImg from "../../assets/materials_showcase.png";
import caseStudiesImg from "../../assets/gallery_real_estate.png";
import bimLibraryImg from "../../assets/gallery_hospitals.png";
import techSpecImg from "../../assets/Bench.jpeg";
import masterCatalogImg from "../../assets/wpc_texture.png";

// Import product-specific images
import busShelterImg from "../../assets/Bus_Shelters.jpeg";
import wickerImg from "../../assets/Wicker_Furniture.jpeg";
import dustbinImg from "../../assets/Dustbins.jpeg";
import carShelterImg from "../../assets/Car_Shelter.jpeg";
import planterImg from "../../assets/Planters_Box.jpeg";
import canteenImg from "../../assets/Canteen_Tables.jpeg";

const ExitIntentPopup = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const path = location.pathname;
    const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

    const isExcluded = normalizedPath === "/contact" || normalizedPath === "/get-quote";

    const trackEvent = (eventName, value = "") => {
        if (window.gtag) {
            window.gtag("event", eventName, {
                event_category: "global_exit_popup",
                event_label: normalizedPath,
                value: value
            });
        }
        console.log(`[GA4 Event] ${eventName} | Category: global_exit_popup | Label: ${normalizedPath} | Value: ${value}`);
    };

    // Determine tailored content based on current route
    const getPopupContent = () => {
        if (normalizedPath === "/about-us") {
            return {
                title: "Download the Urbanland Company Profile",
                description: "Learn more about our architectural street furniture legacy, manufacturing capabilities, and completed projects across India.",
                buttonText: "Get Company Profile (PDF)",
                image: companyProfileImg
            };
        } else if (normalizedPath.startsWith("/solutions/")) {
            return {
                title: "Download the Landscape Integration Guide",
                description: "Get expert specifications, sizing guidelines, and catalog details tailored for real estate developers and landscape architects.",
                buttonText: "Get Integration Guide (PDF)",
                image: landscapeGuideImg
            };
        } else if (normalizedPath === "/projects" || normalizedPath.startsWith("/projects/")) {
            return {
                title: "Download our Case Studies Portfolio",
                description: "See full-resolution photos, detailed project summaries, and client feedback from major developers and municipalities across India.",
                buttonText: "Get Case Studies (PDF)",
                image: caseStudiesImg
            };
        } else if (normalizedPath === "/resources" || normalizedPath === "/faq" || normalizedPath === "/materials" || normalizedPath === "/resources/downloads") {
            return {
                title: "Need Professional BIM & CAD Files?",
                description: "Get immediate access to our complete CAD/BIM library, product data sheets, and comprehensive material guidelines.",
                buttonText: "Get CAD & BIM Library (ZIP)",
                image: bimLibraryImg
            };
        } else if (normalizedPath.startsWith("/product/")) {
            return {
                title: "Download Technical Specification Guide",
                description: "Get the full engineering data sheet, material customization options, and CAD layouts for our premium street furniture.",
                buttonText: "Get Product Specs (PDF)",
                image: techSpecImg
            };
        } else if (normalizedPath.startsWith("/products/")) {
            const sub = normalizedPath.substring(10); // get what is after /products/
            if (sub.startsWith("bus-shelters")) {
                return {
                    title: "Download Bus Shelter Specifications",
                    description: "Get full architectural drawings, standard sizing guides, and B2B pricing sheet for our bus shelters.",
                    buttonText: "Get Specs (PDF)",
                    image: busShelterImg
                };
            } else if (sub.startsWith("wicker-furniture") || sub.startsWith("wicker-outdoor-products") || sub.startsWith("wicker-living-sets") || sub.startsWith("wicker-dining-sets")) {
                return {
                    title: "Download Wicker Furniture Catalog",
                    description: "View our full collection of all-weather hand-woven wicker loungers, dining sets, and custom daybeds.",
                    buttonText: "Get Wicker Catalog (PDF)",
                    image: wickerImg
                };
            } else if (sub.startsWith("dustbins") || sub.startsWith("outdoor-dustbins")) {
                return {
                    title: "Download Outdoor Dustbin Catalog",
                    description: "Explore our premium line of heavy-duty municipal sorting bins, steel litter bins, and concrete receptacles.",
                    buttonText: "Get Dustbins Guide (PDF)",
                    image: dustbinImg
                };
            } else if (sub.startsWith("benches") || sub.startsWith("wpc-benches")) {
                return {
                    title: "Download Benches Specifications",
                    description: "Get complete structural CAD layouts, WPC and metal material options, and volume pricing matrices for our benches.",
                    buttonText: "Get Benches Specs (PDF)",
                    image: techSpecImg
                };
            } else if (sub.startsWith("cabanas")) {
                return {
                    title: "Download Cabanas & Gazebos Catalog",
                    description: "Browse premium pergolas, MS/SS structural gazebos, and luxury poolside cabanas designed for high-end resorts.",
                    buttonText: "Get Cabanas Catalog (PDF)",
                    image: landscapeGuideImg
                };
            } else if (sub.startsWith("canteen-tables") || sub.startsWith("canteen-furniture")) {
                return {
                    title: "Download Canteen Furniture Specs",
                    description: "Get engineering drawings and material durability ratings for heavy-duty food court tables and benches.",
                    buttonText: "Get Canteen Specs (PDF)",
                    image: canteenImg
                };
            } else if (sub.startsWith("car-shelters") || sub.startsWith("car-parking-sheds") || sub.startsWith("car-sheds")) {
                return {
                    title: "Download Car Parking Sheds Catalog",
                    description: "Get wind-load certifications, modular cantilever layouts, and installation details for our car shelters.",
                    buttonText: "Get Shelters Specs (PDF)",
                    image: carShelterImg
                };
            } else if (sub.startsWith("planters")) {
                return {
                    title: "Download Premium Planters Catalog",
                    description: "See our complete range of fiberglass, corten steel, FRP, and custom modular planters for high-density landscaping.",
                    buttonText: "Get Planters Guide (PDF)",
                    image: planterImg
                };
            } else if (sub.startsWith("poolside-loungers") || sub.startsWith("poolside-furniture")) {
                return {
                    title: "Download Poolside Furniture Specs",
                    description: "Get spec sheets for all-weather sun loungers, outdoor daybeds, and corrosion-resistant pool deck tables.",
                    buttonText: "Get Poolside Guide (PDF)",
                    image: masterCatalogImg
                };
            } else if (sub.startsWith("ss-bollards")) {
                return {
                    title: "Download SS Bollards Specifications",
                    description: "Get dimensions, installation templates, and impact-rating sheets for our stainless steel safety bollards.",
                    buttonText: "Get Bollards Specs (PDF)",
                    image: masterCatalogImg
                };
            } else if (sub.startsWith("indoor-furniture") || sub.startsWith("metal-wooden-furniture")) {
                return {
                    title: "Download Furniture Spec Sheets",
                    description: "Get detailed catalog sheets, structural frame options, and custom B2B bulk pricing for MS & wood furniture.",
                    buttonText: "Get Furniture Specs (PDF)",
                    image: companyProfileImg
                };
            }
        }

        // Default Master Catalog for Home, Blog, etc.
        return {
            title: "Download the Urbanland Master Catalog",
            description: "Get our complete 2026 product guide featuring full material specifications, dimensions, and standard designs.",
            buttonText: "Get the Master Catalog (PDF)",
            image: masterCatalogImg
        };
    };

    useEffect(() => {
        // Reset state on route change
        setIsVisible(false);
        setIsSubmitted(false);
        setEmail("");

        if (isExcluded) return;

        const sessionKey = `urbanland_global_exit_intent_${normalizedPath.replace(/\//g, "_")}`;
        const isShown = sessionStorage.getItem(sessionKey);

        if (!isShown) {
            // Track whether the user has reached 70% scroll depth on this page.
            // Exit intent and tab-switch triggers are ONLY permitted after this gate is reached.
            let hasReached70 = false;

            const triggerPopup = () => {
                setIsVisible(true);
                sessionStorage.setItem(sessionKey, "true");
                // Clean up all listeners once popup fires
                document.removeEventListener("mouseleave", handleMouseLeave);
                window.removeEventListener("scroll", handleScroll);
                document.removeEventListener("visibilitychange", handleVisibilityChange);
                trackEvent("popup_trigger");
            };

            const handleScroll = () => {
                const scrollPercent =
                    (window.scrollY + window.innerHeight) /
                    document.documentElement.scrollHeight;

                if (!hasReached70 && scrollPercent >= 0.7) {
                    // User just crossed 70% for the first time — mark gate as open
                    hasReached70 = true;
                    // Fire the popup immediately at this point
                    triggerPopup();
                }
            };

            // Exit intent: mouse leaves top of viewport — only after 70% scroll gate
            const handleMouseLeave = (e) => {
                if (hasReached70 && e.clientY < 20) {
                    triggerPopup();
                }
            };

            // Tab switching / app minimising — only after 70% scroll gate
            const handleVisibilityChange = () => {
                if (hasReached70 && document.hidden) {
                    triggerPopup();
                }
            };

            document.addEventListener("mouseleave", handleMouseLeave);
            window.addEventListener("scroll", handleScroll, { passive: true });
            document.addEventListener("visibilitychange", handleVisibilityChange);

            return () => {
                document.removeEventListener("mouseleave", handleMouseLeave);
                window.removeEventListener("scroll", handleScroll);
                document.removeEventListener("visibilitychange", handleVisibilityChange);
            };
        }
    }, [normalizedPath, isExcluded]);

    if (isExcluded || !isVisible) return null;

    const content = getPopupContent();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            trackEvent("popup_submit", email);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
            {/* Backdrop overlay */}
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300" 
                onClick={() => { setIsVisible(false); trackEvent("popup_close", "backdrop"); }} 
            />
            
            {/* Content card */}
            <div className="relative bg-[#1A2E1C] text-white max-w-2xl w-full rounded-[2.5rem] z-10 overflow-hidden shadow-2xl animate-fadeIn border border-[#C9A84C]/25 flex flex-col md:flex-row md:min-h-[400px]">
                {/* Close Button */}
                <button 
                    onClick={() => { setIsVisible(false); trackEvent("popup_close", "button"); }} 
                    className="absolute top-5 right-5 w-8 h-8 flex justify-center items-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-30 cursor-pointer select-none"
                    aria-label="Close exit popup"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {/* Left Column: Image (Hidden on mobile, shown on md+) */}
                <div className="hidden md:block md:w-[45%] relative md:min-h-full">
                    <img 
                        src={getOptimizedImageUrl(content.image)} 
                        alt={content.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E1C] via-[#1A2E1C]/25 to-transparent pointer-events-none" />
                </div>

                {/* Right Column: Content & Form */}
                <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-center text-left">
                    {!isSubmitted ? (
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3 py-1 rounded-full w-fit select-none mb-4">
                                Exclusive Material
                            </span>
                            
                            <h3 className="text-xl sm:text-2.5xl font-black uppercase text-white mb-3 leading-snug tracking-tight">
                                {content.title}
                            </h3>
                            
                            <p className="text-xs text-white/70 mb-6 leading-relaxed">
                                {content.description}
                            </p>
                            
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="Enter professional email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="w-full px-5 py-3.5 rounded-full border border-white/20 text-xs focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 bg-white/5 font-semibold text-white transition-all placeholder-white/40" 
                                />
                                <button 
                                    type="submit" 
                                    className="w-full py-3.5 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#1A1A1A] font-black uppercase text-[10px] rounded-full transition-all cursor-pointer tracking-wider shadow-md hover:shadow-lg duration-300 transform active:scale-98"
                                >
                                    {content.buttonText}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-center py-6">
                            <div className="w-14 h-14 bg-[#C9A84C]/15 text-[#C9A84C] rounded-full flex justify-center items-center mb-5 border border-[#C9A84C]/30">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            
                            <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2 tracking-tight">
                                Request Received!
                            </h3>
                            
                            <p className="text-xs text-white/75 mb-6 leading-relaxed">
                                We have queued the resources and sent them directly to <span className="font-bold text-[#C9A84C]">{email}</span>.
                            </p>
                            
                            <button 
                                onClick={() => setIsVisible(false)} 
                                className="px-8 py-2.5 bg-white/10 text-white hover:bg-white/20 border border-white/20 font-black uppercase text-[10px] rounded-full transition-colors duration-300 cursor-pointer shadow-sm"
                            >
                                Back to Website
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
