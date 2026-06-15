import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { productConfigs } from "../../data/productConfigs";

const ProductDetailPage = ({ productId: propProductId }) => {
    const { productId: urlProductId } = useParams();
    const activeProductId = propProductId || urlProductId || "benches";
    
    const baseConfig = productConfigs["benches"];
    const specificConfig = productConfigs[activeProductId] || {};
    
    // Deep merge to support stub configurations
    const config = {
        ...baseConfig,
        ...specificConfig,
        seo: {
            ...baseConfig.seo,
            ...specificConfig.seo
        },
        hero: specificConfig.hero ? {
            ...baseConfig.hero,
            ...specificConfig.hero,
            stats: specificConfig.hero.stats || baseConfig.hero.stats,
            mainImage: specificConfig.hero.mainImage || baseConfig.hero.mainImage,
            subImage1: specificConfig.hero.subImage1 || baseConfig.hero.subImage1,
            subImage2: specificConfig.hero.subImage2 || baseConfig.hero.subImage2
        } : baseConfig.hero,
        gallery: specificConfig.gallery ? {
            ...baseConfig.gallery,
            ...specificConfig.gallery,
            slides: specificConfig.gallery.slides || baseConfig.gallery.slides
        } : baseConfig.gallery,
        philosophy: specificConfig.philosophy ? {
            ...baseConfig.philosophy,
            ...specificConfig.philosophy,
            cards: specificConfig.philosophy.cards || baseConfig.philosophy.cards
        } : baseConfig.philosophy,
        quote: specificConfig.quote ? {
            ...baseConfig.quote,
            ...specificConfig.quote
        } : baseConfig.quote,
        categories: specificConfig.categories ? {
            ...baseConfig.categories,
            ...specificConfig.categories,
            list: specificConfig.categories.list || baseConfig.categories.list
        } : baseConfig.categories,
        configurator: specificConfig.configurator ? {
            ...baseConfig.configurator,
            ...specificConfig.configurator,
            materialData: {
                ...(baseConfig.configurator.materialData || {}),
                ...(specificConfig.configurator.materialData || {})
            }
        } : baseConfig.configurator,
        provenExcellence: specificConfig.provenExcellence ? {
            ...baseConfig.provenExcellence,
            ...specificConfig.provenExcellence,
            slides: specificConfig.provenExcellence.slides || baseConfig.provenExcellence.slides
        } : baseConfig.provenExcellence,
        support: specificConfig.support ? {
            ...baseConfig.support,
            ...specificConfig.support,
            list: specificConfig.support.list || baseConfig.support.list
        } : baseConfig.support,
        faq: specificConfig.faq ? {
            ...baseConfig.faq,
            ...specificConfig.faq,
            list: specificConfig.faq.list || baseConfig.faq.list
        } : baseConfig.faq
    };

    const [activeSlide, setActiveSlide] = useState(0);
    const [collectionActiveSlide, setCollectionActiveSlide] = useState(0);
    const scrollRef = useRef(null);
    const collectionScrollRef = useRef(null);

    // Dynamic config options
    const materialData = config.configurator.materialData || {};
    const materialKeys = Object.keys(materialData);
    const lengthOptions = config.configurator.lengthOptions || ["1.2", "1.5", "2.0", "Custom"];
    const designOptions = config.configurator.designOptions || ["Backrest", "No Backrest"];

    const [configMaterial, setConfigMaterial] = useState(materialKeys[0] || "");
    const [configLength, setConfigLength] = useState(lengthOptions[1] || lengthOptions[0] || "");
    const [configDesign, setConfigDesign] = useState(designOptions[0] || "");
    const [configAntiGraffiti, setConfigAntiGraffiti] = useState(false);
    const [configGroundFixing, setConfigGroundFixing] = useState(true);

    // Reset settings when product changes
    useEffect(() => {
        const newMaterialKeys = Object.keys(config.configurator.materialData || {});
        const newLengthOptions = config.configurator.lengthOptions || ["1.2", "1.5", "2.0", "Custom"];
        const newDesignOptions = config.configurator.designOptions || ["Backrest", "No Backrest"];

        if (newMaterialKeys.length > 0) {
            setConfigMaterial(newMaterialKeys[0]);
        }
        if (newLengthOptions.length > 0) {
            setConfigLength(newLengthOptions[1] || newLengthOptions[0]);
        }
        if (newDesignOptions.length > 0) {
            setConfigDesign(newDesignOptions[0]);
        }
        setActiveSlide(0);
        setCollectionActiveSlide(0);
    }, [activeProductId, config]);

    const activeMaterialData = materialData[configMaterial] || {};
    const baseCostMultiplier = activeMaterialData.costMultiplier || 1.0;
    const totalCostMultiplier = configAntiGraffiti ? baseCostMultiplier + 0.15 : baseCostMultiplier;

    useEffect(() => {
        updatePageSEO({
            title: config.seo.title,
            description: config.seo.description,
            og_type: "product"
        });

        // Smooth reveal animation on scroll
        const observerOptions = {
            threshold: 0.05,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.reveal-section');
        sections.forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });

        // Intersection Observer for Reveal Up Animations
        const revealUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const revealUps = document.querySelectorAll('.reveal-up');
        revealUps.forEach(el => revealUpObserver.observe(el));

        return () => {
            cleanPageSEO();
            sections.forEach(section => observer.unobserve(section));
            revealUps.forEach(el => revealUpObserver.unobserve(el));
        };
    }, [activeProductId, config]);

    const projectSlides = config.provenExcellence.slides || [];
    const collectionSlides = config.gallery.slides || [];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === projectSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
    };

    const handleCollectionScroll = (direction) => {
        if (collectionScrollRef.current) {
            const { scrollLeft, clientWidth } = collectionScrollRef.current;
            const scrollAmount = clientWidth * 0.6;
            collectionScrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleCollectionScrollEvent = () => {
        if (collectionScrollRef.current) {
            const { scrollLeft } = collectionScrollRef.current;
            const child = collectionScrollRef.current.firstElementChild;
            if (child) {
                const childWidth = child.clientWidth + 24; // child width + gap
                const index = Math.round(scrollLeft / childWidth);
                if (index >= 0 && index < collectionSlides.length + 1) {
                    setCollectionActiveSlide(index);
                }
            }
        }
    };

    const additionalMajorInstallations = config.provenExcellence.additionalInstallations || [
        "TATA Projects", "Indore Smart City", "Pune Municipal Corp", "BKC Mumbai", "Vadnagar Museum", "Navandhe Village"
    ];

    return (
        <div className="w-full bg-surface text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-20 px-margin-mobile lg:px-0">
                <div className="max-w-container-max mx-auto pt-[100px] px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 z-10 animate-hero text-left">
                        <div className="inline-block border-b-2 border-craftsman-gold mb-6 pb-1">
                            <span className="font-label-caps text-primary tracking-widest uppercase">
                                {config.hero.badge}
                            </span>
                        </div>
                        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink mb-6 leading-tight max-w-xl">
                            {config.hero.title}
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                            {config.hero.description}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link to={config.hero.ctaLink || "/contact"} className="bg-forest-green text-on-primary px-6 py-3 flex items-center justify-center gap-2 font-label-caps uppercase rounded-sm border-b-2 border-charcoal-industrial hover:bg-primary transition-all group">
                                {config.hero.ctaText}
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <a href={config.hero.brochureLink || "#"} className="bg-surface border border-outline px-6 py-3 flex items-center justify-center gap-2 font-label-caps uppercase rounded-sm hover:bg-surface-variant transition-all group">
                                {config.hero.brochureText}
                                <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-outline-variant">
                            {config.hero.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <span className="material-symbols-outlined text-forest-green">{stat.icon}</span>
                                    <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative h-full min-h-[500px] md:min-h-[600px] animate-hero delay-2">
                        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full">
                            <div className="col-span-6 row-span-4 bento-img-container">
                                <img
                                    alt={config.hero.mainImage.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.mainImage.src}
                                />
                            </div>
                            <div className="col-span-3 row-span-2 bento-img-container">
                                <img
                                    alt={config.hero.subImage1.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.subImage1.src}
                                />
                                <div className="absolute bottom-0 left-0 bg-charcoal-industrial text-off-white-base px-3 py-1 font-label-caps text-[10px]">
                                    {config.hero.subImage1.label}
                                </div>
                            </div>
                            <div className="col-span-3 row-span-2 bento-img-container">
                                <img
                                    alt={config.hero.subImage2.alt}
                                    className="w-full h-full object-cover"
                                    src={config.hero.subImage2.src}
                                />
                                <div className="absolute bottom-0 left-0 bg-charcoal-industrial text-off-white-base px-3 py-1 font-label-caps text-[10px]">
                                    {config.hero.subImage2.label}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-craftsman-gold -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-craftsman-gold -z-10"></div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-0 w-full h-1px bg-outline-variant/10 -z-20"></div>
                <div className="absolute top-0 left-1/4 w-1px h-full bg-outline-variant/10 -z-20"></div>
            </section>

            {/* Visual Gallery Slider Section */}
            <section className="reveal-section py-24 bg-surface overflow-hidden border-b border-outline-variant">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-left space-y-4 reveal-up">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        {config.gallery.title}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                        {config.gallery.subtitle}
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-on-surface-variant max-w-2xl pt-2">
                        {config.gallery.description}
                    </p>
                </div>
                <div className="relative reveal-up" style={{ transitionDelay: '100ms' }}>
                    {/* Slider Container */}
                    <div
                        ref={collectionScrollRef}
                        onScroll={handleCollectionScrollEvent}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-[10%] md:px-[20%] pb-6"
                    >
                        {collectionSlides.map((slide, idx) => (
                            <div key={idx} className="flex-none w-[80vw] md:w-[50vw] snap-center relative group">
                                <div className="aspect-[16/9] overflow-hidden rounded-none border border-outline-variant">
                                    <img
                                        alt={slide.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={slide.src}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* View All Special Card */}
                        <div className="flex-none w-[80vw] md:w-[50vw] snap-center relative group">
                            <Link 
                                to={config.gallery.viewAllRedirect || "/catalogue"}
                                className="aspect-[16/9] flex flex-col justify-center items-center border border-forest-green hover:border-craftsman-gold transition-all duration-500 relative overflow-hidden text-center p-8 group cursor-pointer h-full w-full"
                                style={{ 
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0), linear-gradient(to bottom right, #2C5F2E, #1D4220)',
                                    backgroundSize: '24px 24px, 100% 100%'
                                }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_80%)] -z-10"></div>
                                <div className="absolute -top-12 -right-12 w-24 h-24 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                                <div className="mb-4 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:border-craftsman-gold group-hover:bg-white/10 transition-all duration-500">
                                    <span className="material-symbols-outlined text-white group-hover:text-craftsman-gold group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                                </div>
                                <h3 className="font-headline-md text-xl md:text-2xl text-white tracking-wide uppercase mb-2 group-hover:text-craftsman-gold transition-colors duration-300">
                                    View All {config.gallery.viewAllText || "Products"}
                                </h3>
                                <p className="font-label-technical text-craftsman-gold text-[10px] md:text-xs tracking-[0.2em] uppercase">
                                    Explore the full collection
                                </p>
                            </Link>
                        </div>
                    </div>
                    {/* Navigation Controls */}
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center mt-12">
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleCollectionScroll('left')}
                                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">west</span>
                            </button>
                            <button
                                onClick={() => handleCollectionScroll('right')}
                                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-forest-green hover:text-forest-green hover:bg-forest-green/5 transition-all duration-300 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">east</span>
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: collectionSlides.length + 1 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${collectionActiveSlide === idx ? 'bg-forest-green scale-125' : 'bg-outline-variant'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Quality Matters / Philosophy Bento Grid */}
            <section className="reveal-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background">
                {/* Header Group */}
                <div className="mb-16 reveal-up space-y-4 text-left">
                    <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                        {config.philosophy.badge}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-ink max-w-3xl">
                        {config.philosophy.title}
                    </h2>
                    <div className="w-24 h-1 bg-craftsman-gold"></div>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed pt-2">
                        {config.philosophy.description}
                    </p>
                </div>

                {/* Bento-Style Architectural Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {config.philosophy.cards.map((card, idx) => {
                        // Check different styles of bento cards
                        if (card.image && idx === 0) {
                            // Comfort Seating card (Double width horizontal)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-8 reveal-up flex flex-col md:flex-row bg-surface-container-low border border-outline hover:border-craftsman-gold transition-colors duration-300 group overflow-hidden">
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center text-left">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                            <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                                        <img
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={card.image}
                                        />
                                    </div>
                                </div>
                            );
                        } else if (card.isPrimary) {
                            // Durability card (Single width Primary color highlight)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-4 reveal-up bg-primary text-on-primary p-8 md:p-12 border-none flex flex-col justify-between text-left">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-tertiary-fixed-dim">{card.num}</span>
                                            <span className="material-symbols-outlined text-tertiary-fixed-dim">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight text-white">{card.title}</h3>
                                    </div>
                                    <p className="font-body-md text-body-md opacity-90">{card.desc}</p>
                                </div>
                            );
                        } else if (card.image && idx === 3) {
                            // Low Maintenance card (Double width horizontal details)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-8 reveal-up bg-white border border-outline hover:border-craftsman-gold transition-colors duration-300 flex flex-col md:flex-row-reverse overflow-hidden">
                                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center text-left">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                            <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{card.desc}</p>
                                        <div className="flex gap-2">
                                            {card.tags && card.tags.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps border border-outline-variant text-[10px]">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-dim relative overflow-hidden group">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={card.title}
                                            src={card.image}
                                        />
                                        <div className="absolute inset-0 bg-primary/10"></div>
                                    </div>
                                </div>
                            );
                        } else if (idx === 4 && card.image) {
                            // Community / Full Width Feature
                            return (
                                <div key={idx} className="col-span-12 reveal-up relative h-96 overflow-hidden border border-outline hover:border-craftsman-gold transition-colors duration-300 group">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={card.title}
                                        src={card.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-deep-ink/90 via-deep-ink/50 to-transparent flex items-center px-8 md:px-20 text-left">
                                        <div className="max-w-xl text-white">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="font-label-caps text-craftsman-gold">{card.num}</span>
                                                <span className="material-symbols-outlined text-craftsman-gold">{card.icon}</span>
                                            </div>
                                            <h3 className="font-headline-md text-headline-md md:text-headline-lg mb-4 uppercase tracking-tight text-white">{card.title}</h3>
                                            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            // Default Single Width card (Aesthetic Enhancement, etc.)
                            return (
                                <div key={idx} className="col-span-12 md:col-span-4 reveal-up bg-surface-container-highest p-8 md:p-12 border border-outline hover:border-craftsman-gold transition-colors duration-300 flex flex-col text-left">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="font-label-caps text-primary">{card.num}</span>
                                        <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                    </div>
                                    <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tight">{card.title}</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>

            {/* Closing Statement / Quote Section */}
            <section className="reveal-section bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-outline-variant">
                <div className="max-w-4xl mx-auto text-center reveal-up">
                    <span className="material-symbols-outlined text-6xl text-craftsman-gold mb-8 block">format_quote</span>
                    <p className="font-headline-md text-headline-md italic text-primary leading-tight mb-10">
                        "{config.quote.text}"
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-1 bg-craftsman-gold mb-4"></div>
                        <p className="font-label-caps tracking-widest text-on-surface">— {config.quote.author}</p>
                    </div>
                </div>
            </section>

            {/* Product Range Categories */}
            <section className="reveal-section bg-surface py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <div className="mb-16 text-left space-y-4 reveal-up">
                        <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                            {config.categories.badge}
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                            {config.categories.title}
                        </h2>
                        <div className="w-24 h-1 bg-craftsman-gold"></div>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                            {config.categories.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                        {config.categories.list.map((cat, idx) => {
                            const isLarge = idx === 0;
                            return (
                                <div
                                    key={idx}
                                    style={{ transitionDelay: `${idx * 150}ms` }}
                                    className={`group bento-card reveal-up relative overflow-hidden bg-surface-container-low border border-outline-variant hover:border-craftsman-gold hover:shadow-lg transition-all duration-300 p-0 flex ${isLarge ? "md:col-span-8 flex-col md:flex-row" : "md:col-span-4 flex-col justify-between"
                                        }`}
                                >
                                    {isLarge ? (
                                        <>
                                            <div className="md:w-1/2 overflow-hidden h-64 md:h-full relative">
                                                <img
                                                    alt={cat.alt}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    src={cat.src}
                                                />
                                            </div>
                                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-left">
                                                <div>
                                                    <span className="font-label-caps text-xs text-craftsman-gold mb-4 block">COLLECTION 01</span>
                                                    <Link to={cat.path} className="block group/title">
                                                        <h3 className="font-headline-md font-semibold text-2xl text-on-surface group-hover/title:text-primary transition-colors">
                                                            {cat.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="font-body-md text-sm text-on-surface-variant mt-4 leading-relaxed">
                                                        {cat.desc}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/40 mt-8">
                                                    <Link to={cat.path} className="font-label-caps text-xs text-forest-green hover:text-primary transition-colors flex items-center gap-1 font-semibold uppercase group/explore">
                                                        Explore Collection
                                                        <span className="material-symbols-outlined text-sm group-hover/explore:translate-x-1 transition-transform">arrow_forward</span>
                                                    </Link>
                                                    <Link to="/contact" className="bg-primary text-on-primary px-4 py-2.5 text-[10px] font-label-caps uppercase rounded-none hover:bg-forest-green transition-all shadow-sm border-b border-charcoal-industrial active:opacity-90">
                                                        Request Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <div className="h-64 overflow-hidden relative">
                                                    <img
                                                        alt={cat.alt}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        src={cat.src}
                                                    />
                                                </div>
                                                <div className="p-8 text-left">
                                                    <span className="font-label-caps text-xs text-craftsman-gold mb-4 block">COLLECTION 0{idx + 1}</span>
                                                    <Link to={cat.path} className="block group/title">
                                                        <h3 className="font-headline-md font-semibold text-2xl text-on-surface group-hover/title:text-primary transition-colors">
                                                            {cat.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                                                        {cat.desc}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-8 pt-0 text-left">
                                                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/40">
                                                    <Link to={cat.path} className="font-label-caps text-xs text-forest-green hover:text-primary transition-colors flex items-center gap-1 font-semibold uppercase group/explore">
                                                        Explore Collection
                                                        <span className="material-symbols-outlined text-sm group-hover/explore:translate-x-1 transition-transform">arrow_forward</span>
                                                    </Link>
                                                    <Link to="/contact" className="bg-primary text-on-primary px-4 py-2.5 text-[10px] font-label-caps uppercase rounded-none hover:bg-forest-green transition-all shadow-sm border-b border-charcoal-industrial active:opacity-90">
                                                        Request Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Design Your Specification Configurator */}
            {materialKeys.length > 0 && (
                <section className="reveal-section bg-surface py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                    <div className="max-w-container-max mx-auto">
                        <div className="mb-16 text-left space-y-4 reveal-up">
                            <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                {config.configurator.badge}
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                {config.configurator.title}
                            </h2>
                            <div className="w-24 h-1 bg-craftsman-gold"></div>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                                {config.configurator.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* Left Column: Controls */}
                            <div className="lg:col-span-7 space-y-12 reveal-up">
                                {/* Material Selection */}
                                <div className="space-y-6 text-left">
                                    <h3 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest font-semibold">01 / Choose Material</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {materialKeys.map((key) => {
                                            const data = materialData[key];
                                            const isSelected = configMaterial === key;
                                            return (
                                                <button
                                                    key={key}
                                                    onClick={() => setConfigMaterial(key)}
                                                    className={`group border p-4 text-left transition-all duration-300 rounded-[8px] ${isSelected
                                                        ? "border-craftsman-gold bg-surface-container-low"
                                                        : "border-outline-variant hover:bg-surface-container-low/50"
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="font-bold text-sm text-on-surface flex items-center gap-1">
                                                            {data.title}
                                                            {key === "nfc" && (
                                                                <span className="group/tooltip relative inline-block">
                                                                    <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-help">info</span>
                                                                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 scale-95 opacity-0 group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 bg-charcoal-industrial text-white text-[10.5px] p-2.5 leading-relaxed z-20 normal-case font-normal rounded-[6px] shadow-lg border border-outline-variant/30">
                                                                        Natural Fiber Composite (NFC) utilizes natural fibers for superior thermal stability and organic aesthetics.
                                                                    </span>
                                                                </span>
                                                            )}
                                                            {key === "mild_steel" && (
                                                                <span className="group/tooltip relative inline-block">
                                                                    <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-help">info</span>
                                                                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 scale-95 opacity-0 group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 bg-charcoal-industrial text-white text-[10.5px] p-2.5 leading-relaxed z-20 normal-case font-normal rounded-[6px] shadow-lg border border-outline-variant/30">
                                                                        Powder Coated finish provides industrial strength with a high-durability color shell.
                                                                    </span>
                                                                </span>
                                                            )}
                                                        </span>
                                                        <div
                                                            className={`w-8 h-8 rounded-full border border-outline-variant ${key === "wpc"
                                                                ? "bg-[#8B5E3C]"
                                                                : key === "nfc"
                                                                    ? "bg-[#A0522D]"
                                                                    : key === "aluminium"
                                                                        ? "bg-[#C0C0C0]"
                                                                        : key === "mild_steel"
                                                                            ? "bg-[#4A4A4A]"
                                                                            : "bg-[#E5E4E2]"
                                                                }`}
                                                        />
                                                    </div>
                                                    <p className="text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider font-label-technical">
                                                        {key === "wpc"
                                                            ? "Wood-Plastic Composite"
                                                            : key === "nfc"
                                                                ? "Premium Bio-Composite"
                                                                : key === "aluminium"
                                                                    ? "Corrosion-Resistant"
                                                                    : key === "mild_steel"
                                                                        ? "Structural Hardness"
                                                                        : "Marine Grade 316"}
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Dimensions & Features */}
                                <div className="space-y-8 text-left">
                                    <h3 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest font-semibold">02 / Dimensions &amp; Features</h3>
                                    <div className="space-y-6">
                                        {/* Length */}
                                        <div>
                                            <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Size / Length Specification</label>
                                            <div className="flex flex-wrap gap-2">
                                                {lengthOptions.map((len) => {
                                                    const isSelected = configLength === len;
                                                    return (
                                                        <button
                                                            key={len}
                                                            onClick={() => setConfigLength(len)}
                                                            className={`px-6 py-2 border text-sm font-medium transition-colors rounded-[8px] ${isSelected
                                                                ? "border-primary bg-primary text-on-primary"
                                                                : "border-outline-variant text-on-surface hover:bg-surface-container-low"
                                                                }`}
                                                        >
                                                            {len === "Custom" || isNaN(Number(len)) ? len : `${len}m`}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Design */}
                                        <div>
                                            <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Design Architecture</label>
                                            <div className="flex flex-wrap gap-2">
                                                {designOptions.map((design) => {
                                                    const isSelected = configDesign === design;
                                                    return (
                                                        <button
                                                            key={design}
                                                            onClick={() => setConfigDesign(design)}
                                                            className={`px-6 py-2 border text-sm font-medium transition-colors rounded-[8px] ${isSelected
                                                                ? "border-primary bg-primary text-on-primary"
                                                                : "border-outline-variant text-on-surface hover:bg-surface-container-low"
                                                                }`}
                                                        >
                                                            {design}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Technical Add-ons */}
                                        <div>
                                            <label className="font-body-md block mb-3 font-bold text-on-surface text-xs uppercase tracking-wider font-label-technical">Technical Add-ons</label>
                                            <div className="flex flex-col sm:flex-row gap-6">
                                                <label className="flex items-center space-x-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={configAntiGraffiti}
                                                        onChange={() => setConfigAntiGraffiti(!configAntiGraffiti)}
                                                        className="appearance-none h-5 w-5 border border-outline-variant bg-transparent checked:bg-forest-green checked:border-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green/30 rounded-[4px] relative cursor-pointer before:content-[''] before:absolute before:left-[6px] before:top-[2px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100 transition-all"
                                                    />
                                                    <span className="text-sm font-medium text-on-surface">Anti-graffiti Coating</span>
                                                </label>

                                                <label className="flex items-center space-x-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={configGroundFixing}
                                                        onChange={() => setConfigGroundFixing(!configGroundFixing)}
                                                        className="appearance-none h-5 w-5 border border-outline-variant bg-transparent checked:bg-forest-green checked:border-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green/30 rounded-[4px] relative cursor-pointer before:content-[''] before:absolute before:left-[6px] before:top-[2px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100 transition-all"
                                                    />
                                                    <span className="text-sm font-medium text-on-surface">Ground Fixing Kit</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Sticky Preview */}
                            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left reveal-up" style={{ transitionDelay: "150ms" }}>
                                <div className="bg-[#f0ede9] border border-outline-variant p-6 sm:p-8 rounded-[8px] space-y-8">
                                    {/* Image Preview */}
                                    {activeMaterialData.image && (
                                        <div className="aspect-video overflow-hidden rounded-[8px] bg-surface-dim relative border border-outline-variant">
                                            <img
                                                alt="Material Preview"
                                                className="w-full h-full object-cover transition-all duration-300"
                                                src={activeMaterialData.image}
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold font-label-caps border border-outline-variant uppercase tracking-widest rounded-[4px]">LIVE PREVIEW</div>
                                        </div>
                                    )}

                                    {/* Technical Scorecard */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end border-b border-craftsman-gold pb-4">
                                            <div>
                                                <h4 className="font-label-caps text-xs text-on-surface-variant font-semibold">TECHNICAL SCORECARD</h4>
                                                <h2 className="font-headline-md text-2xl text-deep-ink mt-1">
                                                    {activeMaterialData.title}
                                                </h2>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-label-caps text-[10px] text-on-surface-variant font-semibold">BUILD INDEX</span>
                                                <div className="text-forest-green font-bold text-sm">
                                                    {configAntiGraffiti && configMaterial === "wpc" ? "ULTRA-ENDURANT" : activeMaterialData.status}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4">
                                            {/* Lifespan */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                                    <span>LIFESPAN</span>
                                                    <span>{activeMaterialData.lifespan}</span>
                                                </div>
                                                <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-forest-green transition-all duration-700 rounded-full"
                                                        style={{ width: activeMaterialData.lifespanBar || "0%" }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Maintenance */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                                    <span>MAINTENANCE FREQUENCY</span>
                                                    <span>
                                                        {configAntiGraffiti ? "SELF-CLEANING / ULTRA LOW" : activeMaterialData.maintenance}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-craftsman-gold transition-all duration-700 rounded-full"
                                                        style={{ width: configAntiGraffiti ? "5%" : (activeMaterialData.maintenanceBar || "0%") }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Cost */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold font-label-caps text-on-surface">
                                                    <span>COST INDEX</span>
                                                    <span>
                                                        {activeMaterialData.cost} ({totalCostMultiplier.toFixed(1)}x)
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-charcoal-industrial transition-all duration-700 rounded-full"
                                                        style={{ width: activeMaterialData.costBar || "0%" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to="/contact"
                                        className="w-full bg-forest-green text-on-primary py-3.5 sm:py-4 px-4 rounded-[8px] font-bold font-label-caps hover:bg-primary transition-all flex items-center justify-center gap-3 text-center uppercase tracking-[0.1em] sm:tracking-widest text-xs sm:text-sm"
                                    >
                                        Request Technical Spec Sheet
                                        <span className="material-symbols-outlined">download</span>
                                    </Link>
                                    <p className="text-[11px] text-center text-on-surface-variant font-label-caps italic">
                                        Estimated delivery: 4-6 Weeks for custom specifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Case Studies / Projects */}
            {projectSlides.length > 0 && (
                <section className="reveal-section bg-surface py-20 md:py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                    <div className="max-w-container-max mx-auto">
                        {/* Header Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 reveal-up">
                            <div className="lg:col-span-6 text-left space-y-4">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {config.provenExcellence.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {config.provenExcellence.title}
                                </h2>
                                <div className="w-24 h-1 bg-craftsman-gold"></div>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 lg:pt-0">
                                    {config.provenExcellence.stats.map((stat, i) => (
                                        <div key={i} className="border-l-2 border-craftsman-gold/30 pl-4 space-y-1 text-left">
                                            <div className="font-headline-md text-2xl sm:text-3xl text-forest-green font-bold">{stat.val}</div>
                                            <div className="text-[10px] text-on-surface-variant font-label-caps tracking-widest font-semibold">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Tab Navigation */}
                        <div className="flex border-b border-outline-variant overflow-x-auto no-scrollbar mb-8 scroll-smooth reveal-up" style={{ transitionDelay: "100ms" }}>
                            {projectSlides.map((slide, idx) => {
                                const isActive = activeSlide === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`flex-shrink-0 px-6 py-4 border-b-2 text-left transition-all duration-300 focus:outline-none ${isActive
                                            ? "border-craftsman-gold text-deep-ink opacity-100 font-bold"
                                            : "border-transparent text-on-surface-variant opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <span className="block text-[9px] tracking-widest font-semibold uppercase font-label-caps text-craftsman-gold mb-1">
                                            PROJECT 0{idx + 1}
                                        </span>
                                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{slide.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Case Study Slider */}
                        <div className="relative mb-8 group reveal-up" style={{ transitionDelay: "200ms" }}>
                            <div className="overflow-hidden relative border border-outline-variant bg-surface-container-lowest">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                                >
                                    {projectSlides.map((slide, idx) => (
                                        <div key={idx} className="w-full flex-shrink-0">
                                            <div className="flex flex-col lg:flex-row h-full lg:min-h-[480px]">
                                                {/* Image Showcase with Zoom effect */}
                                                <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden relative group/img border-b lg:border-b-0 lg:border-r border-outline-variant">
                                                    <img
                                                        alt={slide.name}
                                                        className="w-full h-full object-cover transform scale-100 group-hover/img:scale-105 transition-transform duration-700"
                                                        src={slide.src}
                                                    />
                                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 font-label-technical text-[9px] tracking-widest uppercase font-semibold border border-outline-variant">
                                                        PROJECT PHOTO
                                                    </div>
                                                </div>

                                                {/* Technical Context */}
                                                <div className="lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6 text-left">
                                                    <div className="space-y-2">
                                                        <span className="font-label-technical text-craftsman-gold uppercase tracking-widest text-xs font-semibold">
                                                            {slide.tag}
                                                        </span>
                                                        <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface leading-tight">{slide.name}</h3>
                                                        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            {slide.location}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant">
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Quantity</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base">{slide.qty}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Timeline</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base">{slide.timeline}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-1 font-semibold">Material</p>
                                                            <p className="font-bold text-deep-ink text-sm sm:text-base truncate">{slide.material.split(' ')[0]}</p>
                                                        </div>
                                                    </div>

                                                    {/* Technical Benefits */}
                                                    <div className="space-y-2">
                                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">Key Specs Met</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {slide.benefits.map((benefit, i) => (
                                                                <span key={i} className="bg-surface-container-low border border-outline-variant text-on-surface text-[9px] font-bold uppercase px-2.5 py-1 font-label-caps tracking-wider">
                                                                    {benefit}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                                                        {slide.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slider Controls */}
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-12 z-10">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-deep-ink border border-outline-variant flex items-center justify-center shadow-md hover:bg-deep-ink hover:text-white transition-all focus:outline-none"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-12 z-10">
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-deep-ink border border-outline-variant flex items-center justify-center shadow-md hover:bg-deep-ink hover:text-white transition-all focus:outline-none"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                                </button>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-2.5 mb-16">
                            {projectSlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${activeSlide === idx ? 'bg-craftsman-gold w-6' : 'bg-outline-variant hover:bg-on-surface-variant'}`}
                                />
                            ))}
                        </div>

                        {/* Rebuilt Portfolio Call to Action */}
                        <div className="text-center mb-20">
                            <Link
                                to="/catalogue"
                                className="flex sm:inline-flex items-center justify-center gap-3 border border-deep-ink hover:bg-deep-ink hover:text-white w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-bold font-label-caps uppercase tracking-wider sm:tracking-widest transition-all duration-300 group"
                            >
                                View More Projects &amp; Case Studies
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Additional Installations Marquee */}
                        <div className="border-t border-outline-variant pt-12 mt-20">
                            <h4 className="font-label-technical text-on-surface-variant uppercase tracking-widest text-center text-xs font-semibold mb-8">
                                Additional Major Installations
                            </h4>
                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                {additionalMajorInstallations.map((inst, i) => (
                                    <span key={i} className="font-headline-md text-lg md:text-xl font-bold">{inst}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Support & FAQ */}
            <section className="reveal-section py-20 md:py-24 bg-surface px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Support Block */}
                        <div className="space-y-10 text-left reveal-up">
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {config.support.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {config.support.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-8">
                                {config.support.list.map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-surface-container/50 border border-outline-variant hover:border-craftsman-gold rounded-[8px] transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 bg-forest-green text-on-primary flex items-center justify-center rounded-[8px]">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-xl font-bold mb-2 text-deep-ink">{item.title}</h4>
                                            <p className="text-body-md text-on-surface-variant leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Block */}
                        <div className="space-y-10 text-left reveal-up" style={{ transitionDelay: "150ms" }}>
                            <div className="space-y-2">
                                <span className="font-label-technical text-craftsman-gold tracking-[0.2em] uppercase font-semibold text-xs block">
                                    {config.faq.badge}
                                </span>
                                <h2 className="font-headline-lg text-headline-lg text-deep-ink">
                                    {config.faq.title}
                                </h2>
                                <div className="w-20 h-1 bg-craftsman-gold"></div>
                            </div>

                            <div className="space-y-4">
                                {config.faq.list.map((item, idx) => (
                                    <details key={idx} className="group border border-outline-variant bg-surface-container p-4 sm:p-6 open:bg-[#f0ede9] transition-all duration-300 rounded-[8px]">
                                        <summary className="list-none flex justify-between items-center cursor-pointer font-semibold text-deep-ink text-base md:text-lg select-none">
                                            <span>{item.q}</span>
                                            <span className="material-symbols-outlined text-forest-green transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="mt-4 text-on-surface-variant text-body-md leading-relaxed border-t border-outline-variant/30 pt-4">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Advantage & Conversion Area */}
            <section className="reveal-section bg-primary text-on-primary py-24 px-margin-mobile md:px-margin-desktop overflow-hidden relative">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Trust Panel */}
                    <div className="space-y-10 border-l-2 border-secondary/30 pl-8 md:pl-10 text-left">
                        <div className="space-y-2">
                            <span className="font-label-technical text-secondary tracking-[0.2em] uppercase font-semibold text-xs block">
                                The Urbanland Advantage
                            </span>
                            <h3 className="font-headline-md text-3xl md:text-4xl text-on-primary leading-tight">Why Urbanland Stands Apart</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">ISO 9001:2015</p>
                                    <p className="text-xs text-white/70 mt-1">Certified manufacturing excellence</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">2-Year Guarantee</p>
                                    <p className="text-xs text-white/70 mt-1">India's only comprehensive warranty</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-secondary text-2xl">precision_manufacturing</span>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">Precision Engineering</p>
                                    <p className="text-xs text-white/70 mt-1">Built for high-traffic durability</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-secondary text-2xl">public</span>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider font-label-technical">Pan-India Delivery</p>
                                    <p className="text-xs text-white/70 mt-1">Professional installation support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conversion Area Card */}
                    <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-none text-left">
                        <h2 className="font-headline-lg text-3xl md:text-4xl text-on-primary mb-8 leading-tight">
                            Ready to Install Premium {config.gallery.viewAllText || "Products"} in Your Space?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-secondary text-on-secondary px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:opacity-90 transition-all duration-300 rounded-[4px]">
                                Request Custom Quote <span className="ml-2">→</span>
                            </Link>
                            <a href="#" className="border-2 border-white text-white px-8 py-4 font-label-technical uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-[4px]">
                                Download Brochure <span className="ml-2">↓</span>
                            </a>
                        </div>
                        <p className="mt-8 text-xs text-white/60 font-label-technical uppercase tracking-widest font-semibold">
                            Trusted by 50+ major projects across 15+ Indian cities
                        </p>
                    </div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4 z-0"></div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
