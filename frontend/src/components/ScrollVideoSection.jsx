import React, { useEffect, useRef } from "react";

const ScrollVideoSection = ({
    badge = "DESIGNED FOR LEISURE",
    heading = "Why Premium Poolside Loungers Matter",
    videoUrl = "https://urbanlandproducts.com/wp-content/uploads/2026/06/Poolside-Loungers_UBL.mp4",
    description = "A luxury pool deck is defined by the quality of its relaxation spaces. Cheap loungers crack, fade, and degrade under intense UV rays and chlorine exposure. Urbanland's premium sun loungers are built to withstand the harshest environments while delivering unmatched comfort.",
    features = [
        {
            icon: "wb_sunny",
            title: "All-Weather Resilience",
            desc: "UV-stabilized HDPE synthetic rattan and rust-proof aluminum frames."
        },
        {
            icon: "water_drop",
            title: "Quick-Dry Engineering",
            desc: "Reticulated foam cushions that drain water instantly to prevent mold."
        },
        {
            icon: "airline_seat_recline_normal",
            title: "Ergonomic Comfort",
            desc: "Multi-stage reclining profiles engineered for luxury hospitality standards."
        },
        {
            icon: "verified_user",
            title: "Commercial Guarantee",
            desc: "Backed by India's only comprehensive 2-year warranty for peace of mind."
        }
    ]
}) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(err => {
                        console.log("Autoplay was prevented or video not ready:", err);
                    });
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.15 // Play when 15% of the section is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="reveal-section bg-charcoal-industrial text-white py-20 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/10"
        >
            <div className="max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & Features */}
                    <div className="lg:col-span-6 space-y-8 text-left reveal-up">
                        <div className="space-y-4">
                            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                {badge}
                            </span>
                            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-light">
                                {heading}
                            </h2>
                            <div className="w-20 h-1 bg-craftsman-gold"></div>
                        </div>

                        <p className="font-body-md text-white/70 leading-relaxed text-base">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 text-craftsman-gold flex items-center justify-center rounded-[6px]">
                                        <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm text-white">{feature.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Seamless Video Showcase */}
                    <div className="lg:col-span-6 reveal-up" style={{ transitionDelay: "150ms" }}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-[8px] bg-black/20 border border-white/10 shadow-2xl group">
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                src={videoUrl}
                                loop
                                muted
                                playsInline
                                webkit-playsinline="true"
                                preload="auto"
                                className="w-full h-full object-cover pointer-events-none"
                            />

                            {/* Ambient Overlay to blend it nicely */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-industrial/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScrollVideoSection;
