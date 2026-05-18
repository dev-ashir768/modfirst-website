"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export default function CtaSection() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <section className="relative py-20 bg-zinc-950 overflow-hidden">
            {/* Background neon glow spheres */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 blur-[100px] md:blur-[140px] rounded-full pointer-events-none z-0" />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-5xl mx-auto rounded-3xl p-8 md:p-16 overflow-hidden bg-gradient-to-br from-zinc-900/80 via-black/80 to-zinc-900/80 border border-zinc-800/80 hover:border-primary/30 transition-all duration-500 shadow-2xl"
                >
                    {/* Visual glowing border strip */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        {/* Left Column: Heading and info */}
                        <div className="lg:col-span-7 text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-heading font-black text-white leading-tight uppercase mb-4"
                            >
                                READY TO ELEVATE <br />
                                <span className="text-primary">YOUR PRINT BRAND?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-zinc-400 text-base md:text-lg font-sans font-light leading-relaxed mb-6 max-w-md"
                            >
                                Join the Modfirst newsletter to receive exclusive discounts, design templates, and professional DTF printing guides directly in your inbox.
                            </motion.p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-4 items-center mt-6">
                                {["No Spam Guarantee", "Unsubscribe Anytime", "10% Welcome Coupon"].map((badge, i) => (
                                    <div key={badge} className="flex items-center gap-2 text-xs md:text-sm text-zinc-400">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Input form */}
                        <div className="lg:col-span-5 w-full">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-4 w-full"
                                    >
                                        {/* Input Box */}
                                        <div className="relative flex items-center">
                                            <Mail className="absolute left-4 w-5 h-5 text-zinc-500" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full h-14 pl-12 pr-4 rounded-xl text-white bg-zinc-800/30 border border-zinc-700/80 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-sans text-base placeholder:text-zinc-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-black bg-primary hover:bg-primary/90 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300 cursor-pointer"
                                        >
                                            SUBSCRIBE NOW
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center w-full"
                                    >
                                        <CheckCircle2 className="w-12 h-12 text-primary mb-4 animate-bounce" />
                                        <h3 className="text-xl font-heading font-black text-white uppercase mb-2">YOU ARE IN!</h3>
                                        <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
                                            Thank you for subscribing! Your 10% welcome coupon code is on its way to your inbox.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
import { AnimatePresence } from 'framer-motion';
