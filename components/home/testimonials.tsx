"use client";

import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

// const testimonialsData = [
//     {
//         id: 1,
//         name: "Sweet & Swag",
//         role: "Verified Customer",
//         quote: "Love Them. The Shirts are a good fit",
//         image: "/images/testimonial/testimonial-1.jpg"
//     },
//     {
//         id: 2,
//         name: "H. Hawkins",
//         role: "Verified Customer",
//         quote: "Order was done in a timely manner.",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 3,
//         name: "Anonymous",
//         role: "Verified Customer",
//         quote: "Exelente cervicio. Su calidad y servicio es excelente!!",
//         image: "/images/testimonial/testimonial-3.jpg"
//     },
//     {
//         id: 4,
//         name: "Jess Henson",
//         role: "Verified Customer",
//         quote: "Best. Best in town",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 5,
//         name: "Valerie",
//         role: "Verified Customer",
//         quote: "Quality work. Awesome and fast turnaround. Friendly staff.",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 6,
//         name: "Quon H",
//         role: "Verified Customer",
//         quote: "Great quality & very attentive",
//         image: "/images/testimonial/testimonial-3.jpg"
//     },
//     {
//         id: 7,
//         name: "Donna Clark",
//         role: "Verified Customer",
//         quote: "A bit of a newbie here. I have order 3-4 gang sheets. It's a challenge for me to get the perfect size since I design the piece myself. I have not been disappointed. I am confident that they will arrive when they say so (2 days) even with snow. They are so easy to work with. I will not go elsewhere for DTF transfers!!",
//         image: "/images/testimonial/testimonial-1.jpg"
//     },
//     {
//         id: 8,
//         name: "Laronda",
//         role: "Verified Customer",
//         quote: "Fast quick and easy! Will use this place everytime. Great customer service awesome prices.",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 9,
//         name: "Melissa Kostos",
//         role: "Verified Customer",
//         quote: "My go to place for all my DTF items! Finding Modfirst was amazing for my business. They are fast, accurate, and shipping is so fast that I can be sure to provide my customers with the best in a quick manner. Thanks!!",
//         image: "/images/testimonial/testimonial-3.jpg"
//     },
//     {
//         id: 10,
//         name: "Donna Clark",
//         role: "Verified Customer",
//         quote: "Looking for a great product? I order in the AM and received next day. I've ordered DTF Transfers, UV DTF transfers and stickers. Perfect every time and great service. I will continue to use MODFIRST every time.",
//         image: "/images/testimonial/testimonial-1.jpg"
//     },
//     {
//         id: 11,
//         name: "Sonya Carr",
//         role: "Verified Customer",
//         quote: "The Best Ever. When I found Modfirst, it was like a relationship to no end. I will send in my request and to be ready within a hour or before the end of the day. Very efficient and professional. The owner Jaime is incredible. He made sure my work was efficient and I was very satisfied. Chanel is awesome. She make sure the work get done on timely and very attentive. The ladies who work in the production room are the best ever. if your if your gang-sheet is not ready when you arrived they’re very attentive and make sure it gets it in a timely fashion Minor. I have been looking for a local venue who does direct the fabric and UV stickers for two years and when I found Modfirst I found a jewel. pricing is phenomenal",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 12,
//         name: "Ashley Rivera",
//         role: "Verified Customer",
//         quote: "Amo!!",
//         image: "/images/testimonial/testimonial-3.jpg"
//     },
//     {
//         id: 13,
//         name: "LISA BROWN",
//         role: "Verified Customer",
//         quote: "Great quality. I love Modfirst! Quick and easy!",
//         image: "/images/testimonial/testimonial-1.jpg"
//     },
//     {
//         id: 14,
//         name: "I.J.",
//         role: "Verified Customer",
//         quote: "Modfirst is the best you wont be disappointed!! Highly recommend!!!",
//         image: "/images/testimonial/testimonial-2.jpg"
//     },
//     {
//         id: 15,
//         name: "Naimah Allen",
//         role: "Verified Customer",
//         quote: "Always A1. Modfirst is the absolute best DTF supplier I've used in the last 5 years. The service is efficient and the prints are like butter. The fact they are local and I don’t have to pay for shipping or expedited service if my order is in early enough is an added bonus.",
//         image: "/images/testimonial/testimonial-3.jpg"
//     }
// ];

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
                                                className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-12 md:mb-16 max-w-4xl line-clamp-3"
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
