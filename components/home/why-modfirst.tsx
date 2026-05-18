"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Truck, Award, Headphones, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const cardsData = [
    {
        icon: Coins,
        title: "AFFORDABLE CUSTOM QUALITY",
        description: "We deliver premium custom products at prices everyone can afford. From T-shirts, hoodies, banners, yard signs, and business cards to embroidery and transfers, each item is made with care and precision to meet your needs without breaking your budget."
    },
    {
        icon: Truck,
        title: "RELIABLE AND FAST SHIPPING",
        description: "Our efficient production and shipping process ensures your order reaches you quickly. Whether you need apparel, promotional materials, or custom transfers, we prioritize speed without sacrificing quality, so your items are ready exactly when you need them."
    },
    {
        icon: Award,
        title: "SUPERIOR PRINT AND FINISH",
        description: "Using advanced printing technology, we create vibrant, durable designs that stand the test of time. From DTF and UV DTF transfers to embroidery and large-format prints, every product reflects our commitment to professional results and lasting value."
    },
    {
        icon: Headphones,
        title: "EXCEPTIONAL CUSTOMER CARE",
        description: "Our friendly team is dedicated to guiding you from start to finish. We assist with product choices, artwork preparation, pressing instructions, and order updates, ensuring you enjoy a smooth, stress-free experience with every purchase you make."
    }
];

export default function WhyModfirst() {
    return (
        <section className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-primary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4"
                    >
                        Our Commitment
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase"
                    >
                        WHY <span className="text-primary">MODFIRST ?</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "120px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-6 rounded-full" 
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cardsData.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(var(--primary),0.08)] hover:-translate-y-2"
                            >
                                {/* Decorative hovering particle inside the card */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                </div>

                                <div>
                                    {/* Icon badge: rotated square style */}
                                    <div className="relative w-14 h-14 mb-8 flex items-center justify-center">
                                        {/* Dual background glow layers */}
                                        <div className="absolute inset-0 bg-zinc-800/80 border border-zinc-700/60 rounded-2xl rotate-45 group-hover:rotate-90 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-700" />
                                        <Icon className="w-6 h-6 text-zinc-400 group-hover:text-primary group-hover:scale-110 transition-all duration-500 relative z-10" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-lg md:text-xl font-heading font-black text-white tracking-wide mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                        {card.title}
                                    </h3>

                                    {/* Card Description */}
                                    <p className="text-zinc-400 text-sm md:text-[13.5px] leading-relaxed font-sans font-light group-hover:text-zinc-300 transition-colors duration-300">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Subtle neon bottom accent line */}
                                <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
