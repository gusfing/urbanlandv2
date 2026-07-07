// import './marqueesticky.css';
import MarqueeText from "../Marquee/MarqueeText";
import StickyCols from "../StickyCols/StickyCols";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSticky = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-con",
                start: "bottom 80%",
                end: "bottom 50%",
                scrub: 1,
                // markers: true,
            },
        });

        // Animate out without collapsing the document height!
        // Collapsing document height during scrub destroys all GSAP pinned trigger measurements.
        tl.to(
            ".marquee-con-none",
            { opacity: 0, yPercent: -50, duration: 1, ease: "none" }
        );
    });

    return (
        <section className="w-full overflow-hidden bg-[#F7F4EF] relative pt-12 lg:pt-16 pb-0">
            <div className="pin-con relative z-10 px-8 md:px-16 lg:px-20 max-w-5xl">
                <div className="flex flex-col gap-4 text-left">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        Case Studies & Portfolio
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-deep-ink leading-[1.1] tracking-tight">
                        Real Projects. Real Results. Across India.
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-on-surface-variant max-w-3xl pt-2">
                        From India's largest residential townships to luxury resorts and government smart city initiatives — Urbanland Products has delivered outdoor and urban furniture for 50+ major projects. Here are a few highlights.
                    </p>
                </div>
            </div>

            {/* Symmetrical Edge-to-Edge 'Contact Urbanland' Marquee placed cleanly AFTER the subheading paragraph */}
            <div className="marquee-con-none w-full text-[#C9A84C] mt-6 mb-2 lg:mt-10 lg:mb-8 overflow-hidden">
                <MarqueeText />
            </div>

            <div className="pin-con relative z-10 px-8 md:px-16 lg:px-20 max-w-5xl">
                {/* SPACE RESERVER — extremely important, hidden on mobile to avoid background layout gaps */}
                <div className="sticky-spacer w-full hidden lg:block h-[12vh] md:h-[20vh]" />
            </div>
        </section>
    );
};

export default MarqueeSticky;
