"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PromoVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Toggle Play / Pause
    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play().catch(err => console.log("Play interrupted:", err));
            setIsPlaying(true);
        }
    };

    // Toggle Mute / Unmute
    const handleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    // Trigger Fullscreen
    const handleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    // Update Progress Bar
    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress || 0);
    };

    // Seek Video
    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
    };

    useEffect(() => {
        // Attempt autoplay when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was blocked (needs interaction or mute, which we have set)
                setIsPlaying(false);
            });
        }
    }, []);

    return (
        <section className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Soft Ambient glow circles in the background */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-5 flex flex-col justify-center text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mb-6 text-xs md:text-sm font-semibold tracking-wide uppercase"
                        >
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            Premium Advertisement
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase leading-none mb-6"
                        >
                            CRAFTED WITH <br />
                            <span className="text-primary">ULTRA PRECISION</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans font-light mb-8"
                        >
                            Watch our official showcase to witness the absolute clarity, vibrant color spectrum, and unmatched durability of our premium DTF (Direct to Film) & UV DTF custom transfers. We bring your vision to life on any material, flawlessly.
                        </motion.p>

                        {/* Highlighting key features with icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: Zap, label: "Fastest Turnaround" },
                                { icon: ShieldCheck, label: "Durability Guaranteed" },
                            ].map((feature, i) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20">
                                            <FeatureIcon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white text-sm font-semibold tracking-wide uppercase">{feature.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Custom Cinematic Video Player */}
                    <div className="lg:col-span-7 relative">
                        {/* Ambient glow behind the video player */}
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] md:blur-[80px] rounded-3xl opacity-60 pointer-events-none z-0 transition-all duration-500 group-hover:scale-105" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={handlePlayPause}
                            className="relative z-10 aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-primary/40 shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-pointer group"
                        >
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                src="https://assets.mixkit.co/videos/preview/mixkit-liquid-ink-fluid-painting-41487-large.mp4"
                                className="w-full h-full object-cover"
                                loop
                                muted={isMuted}
                                playsInline
                                onTimeUpdate={handleTimeUpdate}
                            />

                            {/* Black gradient overlay on bottom and top */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                            {/* Play/Pause Large Central Overlay Icon */}
                            <AnimatePresence>
                                {(!isPlaying || isHovered) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20"
                                    >
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary text-black shadow-[0_0_40px_rgba(var(--primary),0.5)] group-hover:scale-110 transition-transform duration-300">
                                            {isPlaying ? (
                                                <Pause className="w-8 h-8 fill-current" />
                                            ) : (
                                                <Play className="w-8 h-8 fill-current translate-x-0.5" />
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Bottom Customized Controls Bar */}
                            <div 
                                className={cn(
                                    "absolute bottom-0 inset-x-0 p-4 md:p-6 flex flex-col gap-4 bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 pointer-events-auto",
                                    isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:opacity-100 md:translate-y-0"
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Customized Interactive Progress Bar */}
                                <div 
                                    className="relative w-full h-1.5 md:h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden group/progress"
                                    onClick={handleProgressBarClick}
                                >
                                    <div 
                                        className="h-full bg-primary rounded-full transition-all duration-75 relative"
                                        style={{ width: `${progress}%` }}
                                    >
                                        {/* Glow effect at the end of progress */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                                    </div>
                                </div>

                                {/* Control Buttons row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Play/Pause Button */}
                                        <button 
                                            onClick={handlePlayPause}
                                            className="text-white hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                                        </button>

                                        {/* Mute/Unmute sound Button */}
                                        <button 
                                            onClick={handleMute}
                                            className="text-white hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                        </button>
                                        
                                        {/* Advertising Badge */}
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 bg-white/10 px-2 py-0.5 rounded-sm">
                                            LIVE DEMO
                                        </span>
                                    </div>

                                    {/* Fullscreen Button */}
                                    <button 
                                        onClick={handleFullscreen}
                                        className="text-white hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <Maximize className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
