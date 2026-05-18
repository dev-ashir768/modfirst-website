"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: "Mastering DTF Transfers: A Guide to Perfect Pressing",
        category: "TIPS & TRICKS",
        date: "May 18, 2026",
        readTime: "5 min read",
        summary: "Learn the exact time, temperature, and pressure settings required to achieve flawless, wash-resistant DTF transfer prints on any garment material.",
        image: "https://images.unsplash.com/photo-1561070791-26c113006238?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "UV DTF vs. Standard DTF: Which Transfer Should You Choose?",
        category: "INSIGHTS",
        date: "May 12, 2026",
        readTime: "8 min read",
        summary: "An in-depth comparison between UV DTF stickers for hard surfaces and standard DTF transfers for textiles. Find the perfect solution for your project.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Design Tips for Custom Gang Sheets to Maximize Value",
        category: "TUTORIALS",
        date: "May 05, 2026",
        readTime: "6 min read",
        summary: "Discover professional hacks to arrange, scale, and optimize your designs on a single gang sheet to cut costs and ensure maximum printing quality.",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80"
    }
];

export default function BlogSection() {
    return (
        <section className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-primary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4"
                        >
                            Latest Insights
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase"
                        >
                            FROM THE <span className="text-primary">JOURNAL</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 hover:border-primary/40 text-white font-semibold hover:text-primary transition-all duration-300">
                            View All Articles
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => {
                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group flex flex-col h-full rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-primary/30 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
                            >
                                {/* Image frame */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category tag */}
                                    <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md text-[10px] font-bold tracking-wider text-black bg-primary uppercase shadow-md">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content block */}
                                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                                    <div>
                                        {/* Metadata (Date and Read Time) */}
                                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-heading font-extrabold text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Summary text */}
                                        <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light mb-6 line-clamp-3">
                                            {post.summary}
                                        </p>
                                    </div>

                                    {/* Action link */}
                                    <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-primary transition-colors duration-300 w-fit">
                                        Read Article
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
