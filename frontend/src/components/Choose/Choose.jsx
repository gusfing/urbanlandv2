import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";
import ProductsCatalog from "../ProductsCatalog/ProductsCatalog";
import { FaShieldAlt, FaBuilding, FaBolt, FaTruck } from "react-icons/fa";

const Choose = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Shared animation setup
        const createAnimation = (isMobile) => {
            const linesSelector = isMobile ? ".choose-title-clip-sm" : ".choose-title-clip-lg";
            const lines = gsap.utils.toArray(linesSelector);
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 10%",
                    scrub: true,
                },
            });

            tl.from(".choose-subtitle", {
                yPercent: 100,
                opacity: 0,
                ease: "power1.inOut"
            });

            tl.to(
                lines,
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "none",
                    stagger: 0.2,
                    duration: 1,
                },
                "<"
            );

            if (!isMobile) {
                tl.from(".choose-sec", {
                    yPercent: 100,
                    duration: 1,
                }, "<");
            }
        };

        mm.add("(min-width: 769px)", () => createAnimation(false));
        mm.add("(max-width: 768px)", () => createAnimation(true));

        return () => mm.revert();
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="choose" className="choose-section w-full min-h-screen p-8 pt-10 pb-20 flex flex-col justify-start items-start gap-12">
            <div className="w-full">
                <p className='text-[.7rem] text-[#2D2D2D] choose-subtitle uppercase tracking-wider font-bold'>— Why Leading Developers Choose Urbanland</p>
                <div className="lg:mt-10 mt-7 title-part origin-bottom">
                    {/* Desktop Choose Lines */}
                    <div className="hidden md:block">
                        {chooseLinesLG.map((line, index) => (
                            <h2 key={index} className="choose-heading text-[#1A1A1A] lg:text-[4.2rem] md:text-[3rem] text-[2.2rem] leading-[1.05] font-bold tracking-tight choose-title">
                                <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                                    {line}
                                    <span className={`choose-title-clip-lg ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span>
                                </span>
                            </h2>
                        ))}
                    </div>
                    {/* Mobile Choose Lines */}
                    <div className="block md:hidden">
                        {chooseLinesSM.map((line, index) => (
                            <h2 key={index} className="choose-heading text-[#1A1A1A] lg:text-[4.2rem] md:text-[3rem] text-[2.2rem] leading-[1.05] font-bold tracking-tight choose-title">
                                <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                                    {line}
                                    <span className={`choose-title-clip-sm ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span>
                                </span>
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
                
            <div className="choose-sec w-full flex flex-col justify-start items-start gap-10 lg:mt-0 pb-6">
                <div className='w-full lg:max-w-4xl text-[#2D2D2D]/90 lg:text-[2.2rem] text-[1.2rem] md:leading-[1.2] lg:mt-0 mt-8 font-light'>
                    <p>When a real estate developer, hotel chain, or municipal body specifies outdoor and urban furniture for a large-scale project, they need a manufacturer they can trust — on quality, delivery timelines, and long-term durability. Urbanland Products is India's only outdoor furniture manufacturer offering a comprehensive 2-year guarantee, with a proven track record supplying premium WPC benches, bus shelters, GFRC planters, and more to landmark developments across the country.</p>
                </div>
            </div>

            {/* 4 Value Cards Grid Layout */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                <div className="flex flex-col gap-4 p-6 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 hover:border-[#C9A84C]/50 rounded-2xl transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2C5F2E]/10 rounded-xl text-[#2C5F2E] group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C] transition-colors">
                        <FaShieldAlt className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">India's Only 2-Year Guarantee</h3>
                    <p className="text-xs text-[#2D2D2D]/80 leading-relaxed">Full coverage on every product — no other outdoor furniture manufacturer in India matches this commitment.</p>
                </div>
                <div className="flex flex-col gap-4 p-6 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 hover:border-[#C9A84C]/50 rounded-2xl transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2C5F2E]/10 rounded-xl text-[#2C5F2E] group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C] transition-colors">
                        <FaBuilding className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Proven on Landmark Projects</h3>
                    <p className="text-xs text-[#2D2D2D]/80 leading-relaxed">420+ benches supplied to Lodha townships. Complete outdoor furniture solutions for Adani Realty and Oberoi projects.</p>
                </div>
                <div className="flex flex-col gap-4 p-6 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 hover:border-[#C9A84C]/50 rounded-2xl transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2C5F2E]/10 rounded-xl text-[#2C5F2E] group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C] transition-colors">
                        <FaBolt className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Multi-Material Expertise</h3>
                    <p className="text-xs text-[#2D2D2D]/80 leading-relaxed">WPC • Stainless Steel • GFRC • Aluminium • Wicker. One supplier for your entire outdoor furniture specification.</p>
                </div>
                <div className="flex flex-col gap-4 p-6 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 hover:border-[#C9A84C]/50 rounded-2xl transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2C5F2E]/10 rounded-xl text-[#2C5F2E] group-hover:bg-[#C9A84C]/10 group-hover:text-[#C9A84C] transition-colors">
                        <FaTruck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">100% Indian Manufacturing</h3>
                    <p className="text-xs text-[#2D2D2D]/80 leading-relaxed">Made in India = faster lead times, tighter quality control, and on-time delivery for your project schedule.</p>
                </div>
            </div>

            {/* Section 5 Heading */}
            <div className="w-full border-t border-[#2D2D2D]/10 pt-16 mt-12">
                <p className='text-[.7rem] text-[#2C5F2E] uppercase tracking-wider font-bold'>— Most Requested Products</p>
                <h2 className="text-3xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight mt-3">
                    Outdoor & Urban Furniture Products for Large-Scale Projects
                </h2>
            </div>

            {/* Nested Products Catalog */}
            <ProductsCatalog showTitle={false} />
        </section>
    );
};

export default Choose;