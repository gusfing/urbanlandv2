import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

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

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#C9A84C]'>This website showcases the premium<br />
                    outdoor furniture solutions by—Urbanland®<br />
                    across architectural projects.<br /><br />
                    If you would like to explore our range<br />
                    or request a custom quote—<a href="#" className='text-[#F7F4EF] hover:text-[#C9A84C] underline transition-colors'> contact us.</a>
                </h3>

                <div className='flex flex-col justify-center items-end gap-1.5'>
                    <a href="#welcome" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Welcome</a>
                    <a href="#products" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Products</a>
                    <a href="#solutions" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Solutions</a>
                    <a href="#why-urbanland" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Why Urbanland®</a>
                    <a href="#projects" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Projects</a>
                    <a href="#testimonials" className='text-[#F7F4EF] hover:text-[#C9A84C] text-2xl transition-colors duration-300'>Testimonials</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1.5">
                    <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaBehance className="text-xl" /></div>
                    <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaInstagram className="text-xl" /></div>
                    <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><CiLinkedin className="text-xl" /></div>
                    <div className='border border-[#F7F4EF]/25 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-full p-3 text-[#F7F4EF] hover:text-[#C9A84C] transition-all cursor-pointer duration-300'><FaDribbble className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#F7F4EF]/70 text-right">
                        Meet Urbanland®—premium urban<br />
                        and outdoor furniture solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;