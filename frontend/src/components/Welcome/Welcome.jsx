import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.png"
import w2 from "../../assets/welcome-2.png"

const Welcome = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const lines = gsap.utils.toArray(".clip-text-welcome-lg");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".welcome-line",
                    start: "top 85%",
                    end: "top 45%",
                    scrub: true,
                },
            });

            tl.to(lines, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.15,
                duration: 1,
            });
        });

        mm.add("(max-width: 768px)", () => {
            const lines = gsap.utils.toArray(".clip-text-welcome-sm");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".welcome-line",
                    start: "top 85%",
                    end: "top 45%",
                    scrub: true,
                },
            });

            tl.to(lines, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.15,
                duration: 1,
            });
        });

        return () => mm.revert();
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} id="welcome" className='welcome-section w-full min-h-screen h-auto py-12 md:py-16 md:h-[110vh] flex flex-col justify-between text-[#2A2725] md:px-7 px-6'>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className="w-full md:w-[86%] md:text-[clamp(2.2rem,3.6vw,4rem)] text-[34px] welcome-line md:pt-10">
                    {/* Desktop Lines */}
                    <div className="hidden md:flex w-full welcome-text flex-col justify-center items-start">
                        {welcomeLinesLG.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em] overflow-visible">
                                {text}
                                <span className="clip-text-welcome-lg md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                    {/* Mobile Lines */}
                    <div className="flex md:hidden w-full welcome-text flex-col justify-center items-start">
                        {welcomeLinesSM.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em] overflow-visible">
                                {text}
                                <span className="clip-text-welcome-sm md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10">
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={w1} alt="welcome image" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                    <img src={w2} alt="welcome image" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44" />
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2rem] text-[1.4rem] text-[#b1a696] md:leading-[1.1] md:pr-24 font-normal leading-[26px] tracking-[-0.2px]">
                        <span>Each of our premium collections is manufactured to international standards in state-of-the-art facilities, specifying only the finest sustainable materials.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;