"use client";

import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const testimonialsData = [
    {
        id: 1,
        name: "Isabella Oliver",
        role: "Creative Director",
        quote: "The attention to detail and the striking neon accents completely elevated our product showcase. A truly premium experience from start to finish.",
        image: "/images/testimonial/testimonial-1.jpg"
    },
    {
        id: 2,
        name: "Nikki Albart",
        role: "Brand Manager",
        quote: "An absolute game changer for our brand. The sleek design language perfectly matched our vision, bringing our ideas to life seamlessly.",
        image: "/images/testimonial/testimonial-2.jpg"
    },
    {
        id: 3,
        name: "Stephen Smith",
        role: "Co-Founder",
        quote: "Working with this team was an incredible experience. The natural setup and premium aesthetic helped us stand out in a crowded market.",
        image: "/images/testimonial/testimonial-3.jpg"
    }
];

export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="relative py-16 bg-zinc-950 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
                    >
                        Client Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    >
                        What They Say
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[
                            Fade(),
                            Autoplay({ delay: 6000, stopOnInteraction: false })
                        ]}
                        setApi={setApi}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonialsData.map((item, index) => {
                                const isActive = current === index;
                                return (
                                    <CarouselItem key={item.id}>
                                        <div className="flex flex-col items-center text-center px-4 md:px-12">
                                            <QuoteIcon className="w-12 h-12 md:w-20 md:h-20 text-primary/30 mb-8 md:mb-12 rotate-180" />

                                            <motion.p
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    y: isActive ? 0 : 20
                                                }}
                                                transition={{ duration: 0.7, ease: "easeOut" }}
                                                className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-12 md:mb-16 max-w-4xl"
                                            >
                                                "{item.quote}"
                                            </motion.p>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    scale: isActive ? 1 : 0.9
                                                }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="flex flex-col items-center gap-6"
                                            >
                                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-1 border-2 border-primary/30 overflow-hidden bg-black/50">
                                                    <div className="w-full h-full rounded-full overflow-hidden">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{item.name}</h4>
                                                    <p className="text-primary text-xs md:text-sm uppercase tracking-[0.15em] font-medium">{item.role}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                    <div className="flex justify-center items-center gap-3 mt-16 md:mt-24">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`transition-all duration-500 rounded-full ${current === index
                                    ? "w-12 h-2 bg-primary"
                                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
