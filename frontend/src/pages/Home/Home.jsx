import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import ProductsCatalog from '../../components/ProductsCatalog/ProductsCatalog'
import Materials from '../../components/Materials/Materials'
import IndustrySolutions from '../../components/IndustrySolutions/IndustrySolutions'
import ProjectsAcrossIndia from '../../components/ProjectsAcrossIndia/ProjectsAcrossIndia'
import ConceptToCompletion from '../../components/ConceptToCompletion/ConceptToCompletion'
import ManufacturedWithPrecision from '../../components/ManufacturedWithPrecision/ManufacturedWithPrecision'
import MarqueeText from '../../components/Marquee/MarqueeText'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import InsightsResources from '../../components/InsightsResources/InsightsResources'
import HomeFAQ from '../../components/HomeFAQ/HomeFAQ'

const Home = () => {
    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });

        const revealEls = document.querySelectorAll(
            '.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale'
        );
        revealEls.forEach(el => revealObserver.observe(el));

        return () => {
            revealEls.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

    return (
        <div>
            <Hero />
            <div className="after-why-developers">
                <ProductsCatalog showTitle={true} />
                <Materials />
                <IndustrySolutions />
                <ProjectsAcrossIndia />
                <Activities />
                <ConceptToCompletion />
                <ManufacturedWithPrecision />
                <Feedback />
                <InsightsResources />
                <HomeFAQ />
            </div>
        </div>
    )
}

export default Home