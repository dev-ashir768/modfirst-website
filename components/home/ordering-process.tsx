"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, ShoppingCart, PackageOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        number: "01",
        title: "CHOOSE YOUR PERFECT PRODUCT",
        icon: Layers,
        description: "Browse our wide range of custom T-shirts, hoodies, banners, yard signs, business cards, embroidery, and DTF/UV DTF transfers. Select the product type, size, and style that matches your vision. Every option is designed to give you creative freedom and professional results."
    },
    {
        number: "02",
        title: "UPLOAD OR CREATE YOUR DESIGN",
        icon: Palette,
        description: "Easily upload your own artwork or use our design tools to create something new. Our system supports high-quality images to ensure vibrant prints. Need help? Our expert team can assist in preparing and optimizing your file for the best printing outcome."
    },
    {
        number: "03",
        title: "CONFIRM AND PLACE YOUR ORDER",
        icon: ShoppingCart,
        description: "Review your design preview, check sizes, and confirm quantities. Once everything looks perfect, place your order using our secure checkout. We'll send you an instant confirmation and keep you updated every step of the way until your order ships."
    },
    {
        number: "04",
        title: "RECEIVE AND ENJOY YOUR ITEMS",
        icon: PackageOpen,
        description: "We process orders quickly, offering same-day and rush options when needed. Your items are shipped safely and delivered on time. Open your package, check the quality, and enjoy your custom apparel or products, ready to wear, use, or share."
    }
];

export default function OrderingProcess() {
    return (
        <section className="relative py-20 bg-zinc-950 overflow-hidden">
            {/* Background glowing blobs */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-primary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4"
                    >
                        How We Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase"
                    >
                        OUR ORDERING PROCESS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/80">
                            VERY QUICK AND EASY
                        </span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-1 bg-primary mx-auto mt-6 rounded-full" 
                    />
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                                className="group relative flex flex-col justify-between h-full p-6 md:p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2"
                            >
                                {/* Giant transparent step background number */}
                                <span className="absolute top-2 right-4 text-7xl md:text-8xl font-black font-heading text-zinc-800/10 group-hover:text-primary/5 select-none pointer-events-none transition-colors duration-500">
                                    {step.number}
                                </span>

                                <div>
                                    {/* Icon Container with ambient glow */}
                                    <div className="relative w-16 h-16 rounded-xl flex items-center justify-center bg-zinc-800/50 border border-zinc-700/50 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-8 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Icon className="w-8 h-8 text-zinc-400 group-hover:text-primary group-hover:scale-110 transition-all duration-500 relative z-10" />
                                    </div>

                                    {/* Step Title */}
                                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-white tracking-wide mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                                        {step.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="text-zinc-400 text-sm md:text-[13.5px] leading-relaxed font-sans font-normal group-hover:text-zinc-300 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Desktop horizontal connector arrow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 pointer-events-none transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-primary/60 transition-colors duration-300" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom interactive action button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16 md:mt-24"
                >
                    <button className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-black bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_20px_rgba(var(--primary),0.3)] hover:shadow-[0_6px_30px_rgba(var(--primary),0.5)] hover:-translate-y-0.5 cursor-pointer">
                        Start Your Order Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
