"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

const banners = [
    {
        id: 1,
        image: "/images/banners/banner-1.webp",
        subtitle: "Outdoor Production Station",
        title: "Natural setup for custom apparel printing.",
        buttonText: "Explore Collection"
    },
    {
        id: 2,
        image: "/images/banners/banner-2.png",
        subtitle: "Retail and Brand Display",
        title: "Sleek product showcase with striking neon accents.",
        buttonText: "Shop Now"
    }
];

const HeroSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrentIndex(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="container flex flex-1 mt-30 mb-5 min-h-[calc(100vh-9.5rem)]">
            <Carousel
                opts={{ loop: true }}
                setApi={setApi}
                plugins={[
                    Fade(),
                    Autoplay({ delay: 6000, stopOnInteraction: false }),
                ]}
                className="w-full flex flex-1 bg-black overflow-hidden rounded-2xl"
            >
                <CarouselContent className="h-full ml-0">
                    {banners.map((banner, index) => {
                        const isActive = currentIndex === index;
                        return (
                            <CarouselItem key={banner.id} className="pl-0 relative overflow-hidden shrink-0 grow-0 basis-full">
                                <div className="relative flex w-full h-full">
                                    <div className="relative w-full md:w-1/2 h-full z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden origin-center">
                                        <div className="absolute inset-[-10%] bg-cover bg-center md:blur-xl scale-110 opacity-60" style={{ backgroundImage: `url(${banner.image})` }}>
                                            <motion.div
                                                className="absolute inset-0 z-[-1] overflow-hidden origin-center"
                                                initial={false}
                                                animate={isActive ? { scale: 1 } : { scale: 0.95 }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            >
                                                <div className="absolute inset-0  from-black/60 to-black/30" />
                                            </motion.div>
                                        </div>

                                        <div className="relative z-10">
                                            <motion.p
                                                className="text-white text-sm md:text-base font-semibold tracking-wider mb-4 uppercase"
                                                initial={false}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.2 : 0 }}
                                            >
                                                {banner.subtitle}
                                            </motion.p>
                                            <motion.h1
                                                className="text-white text-4xl lg:text-7xl font-bold leading-tight mb-8 whitespace-pre-line"
                                                initial={false}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.4 : 0 }}
                                            >
                                                {banner.title}
                                            </motion.h1>
                                            <motion.div
                                                initial={false}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.6 : 0 }}
                                            >
                                                <Button variant="default" size="lg">
                                                    {banner.buttonText}
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="relative hidden md:block w-1/2 h-full z-10 overflow-hidden origin-center">
                                        <motion.img
                                            src={banner.image}
                                            alt="Banner"
                                            className="absolute inset-0 w-full h-full object-cover origin-center"
                                            initial={false}
                                            animate={isActive ? { scale: 1 } : { scale: 1.05 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default HeroSlider;
