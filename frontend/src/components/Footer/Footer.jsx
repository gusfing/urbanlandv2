import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-full h-auto px-6 pt-36 pb-24 md:pt-48 md:pb-32 bg-[#2D2D2D]'>
            <div className='flex flex-col md:flex-row w-full h-auto justify-between border-b pb-16 border-[#F7F4EF]/15 ' >
                <p className='text-[.7rem] text-[#F7F4EF]/90 choose-subtitle mt-10'>Interested in transforming your space?<br />Explore solutions by Urbanland<span>®</span></p>
            </div>
            <div className="text-[#C9A84C]">
                <MarqueeText />
            </div>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-14'>
                <h3 className='text-[#C9A84C] text-xl md:text-2xl max-w-xl font-normal leading-relaxed'>
                    This website showcases the premium<br />
                    outdoor furniture solutions by—Urbanland®<br />
                    across architectural projects.<br /><br />
                    If you would like to explore our range<br />
                    or request a custom quote—<Link to="/contact" className='text-[#F7F4EF] hover:text-[#C9A84C] underline transition-colors'> contact us.</Link>
                </h3>

                <div className='flex flex-col justify-center items-start md:items-end gap-2 text-right select-none'>
                    <Link to="/" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>Home</Link>
                    <Link to="/products" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>Products Hub</Link>
                    <Link to="/solutions" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>Solutions</Link>
                    <Link to="/projects" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>Projects Portfolio</Link>
                    <Link to="/about-us" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>About Us</Link>
                    <Link to="/resources" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300 no-underline'>Resources Portal</Link>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-20 gap-6 border-t border-[#F7F4EF]/10 pt-8">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-center md:justify-start items-center gap-1.5">
                        <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaBehance className="text-xl" /></div>
                        <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaInstagram className="text-xl" /></div>
                        <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><CiLinkedin className="text-xl" /></div>
                        <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaDribbble className="text-xl" /></div>
                    </div>
                    <div className="flex gap-4 text-[10px] uppercase tracking-widest text-[#F7F4EF]/40 justify-center md:justify-start mt-1 select-none">
                        <Link to="/sustainability" className="hover:text-[#C9A84C] transition-colors no-underline">Sustainability</Link>
                        <span>•</span>
                        <Link to="/privacy-policy" className="hover:text-[#C9A84C] transition-colors no-underline">Privacy Policy</Link>
                    </div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#F7F4EF]/70 text-center md:text-right leading-relaxed">
                        Meet Urbanland®—premium urban<br />
                        and outdoor furniture solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;