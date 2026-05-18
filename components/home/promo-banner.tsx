"use client";
import { Marquee } from "../animations/marquee";

const PromoBanner = () => {
    return (
        <div className="container my-6 md:my-12">
            <div className="w-full h-10 md:h-20 bg-zinc-400 flex overflow-hidden rounded-lg md:rounded-xl">
                {/* Left Section */}
                <div className="relative z-20 flex items-center justify-center bg-slate-100 px-3 md:px-12 min-w-max">
                    {/* Slanted Edge */}
                    <div className="absolute top-0 -right-1 md:-right-6 h-full w-4 md:w-12 bg-slate-100 skew-x-10 md:skew-x-20" />

                    <span className="relative z-30 text-[10px] md:text-xl font-black text-black whitespace-nowrap italic uppercase">
                        BLESSED FRIDAY
                    </span>
                </div>

                {/* Right Section (Marquee) */}
                <div className="relative flex-1 flex p-1 md:p-3 z-10 -ml-2">
                    <div className="relative w-full h-full flex items-center justify-between border border-dashed border-white/40 px-2 md:px-8 rounded-md md:rounded-xl">

                        <div className="flex-1 overflow-hidden h-full flex items-center">
                            <Marquee className="[--duration:20s] py-0" pauseOnHover>
                                <span className="text-[10px] md:text-lg italic tracking-widest md:tracking-[0.2em] font-bold text-white mx-4 md:mx-12 whitespace-nowrap">
                                    PAY ONLY FOR YOUR LOVING ELECTRONICS
                                </span>
                                <span className="text-[10px] md:text-lg italic tracking-widest md:tracking-[0.2em] font-bold text-white mx-4 md:mx-12 whitespace-nowrap">
                                    PAY ONLY FOR YOUR LOVING ELECTRONICS
                                </span>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
