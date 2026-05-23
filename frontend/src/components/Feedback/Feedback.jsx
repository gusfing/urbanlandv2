import { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { feedbackH1LG, feedbackReviewLG } from "../../constants/feedback";

import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";

const reviewImages = {
    review1,
    review2,
    review3
};

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const total = feedbackH1LG.length;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const progressWidth = feedbackReviewLG[index][3];

    return (
        <section id="feedback" className='w-sereen h-dvh p-8 flex flex-col justify-center items-center'>
            <div className='w-full text-left'>
                <p className='text-[.7rem] font-bold text-[#2C5F2E] activities-subtitle text-left'>
                    Do people like us?
                </p>

                <div>
                    <h1 className='text-[#1A1A1A] text-7xl mt-4 mb-6 font-semibold leading-tight'>
                        {feedbackH1LG[index].map((line, i) => (
                            <span key={i}>
                                {line}<br />
                            </span>
                        ))}
                    </h1>
                </div>

                <div className='flex items-center gap-4 mt-12'>
                    <img
                        src={reviewImages[feedbackReviewLG[index][2]]}
                        alt="review img"
                        className='w-[4.5vw] min-w-[50px] rounded-full'
                    />
                    <p className="text-[#1A1A1A]/70 text-[0.7rem] font-medium leading-relaxed">
                        {feedbackReviewLG[index][0]}<br />
                        ({feedbackReviewLG[index][1]})
                    </p>
                </div>

                <div className="flex justify-between items-center mt-14">
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            className='border border-[#2D2D2D]/35 hover:bg-[#2C5F2E] hover:border-[#2C5F2E] p-2.5 rounded-full transition-all group cursor-pointer'
                        >
                            <IoMdArrowBack className="text-[#1A1A1A] group-hover:text-[#F7F4EF] w-5 h-5 transition-colors" />
                        </button>

                        <button
                            onClick={handleNext}
                            className='border border-[#2D2D2D]/35 hover:bg-[#2C5F2E] hover:border-[#2C5F2E] p-2.5 rounded-full transition-all group cursor-pointer'
                        >
                            <IoMdArrowForward className="text-[#1A1A1A] group-hover:text-[#F7F4EF] w-5 h-5 transition-colors" />
                        </button>
                    </div>

                    <div className="relative z-9 w-70 h-[0.1rem] bg-[#2D2D2D]/15">
                        <div
                            className="progress-line absolute z-10 bg-[#2C5F2E] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;