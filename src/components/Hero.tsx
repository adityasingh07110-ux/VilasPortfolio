'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    const containerVars: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVars: Variants = {
        initial: { y: 60, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 perspective-1000">

            {/* Moving Background Element controlled by Scroll */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 pointer-events-none preserve-3d"
            >
                <div className="absolute inset-0 bg-primary/[0.04] blur-[100px] translate-z-[-100px]" />
            </motion.div>

            <div className="container mx-auto z-10 preserve-3d">
                <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    className="text-center preserve-3d"
                >
                    <motion.div variants={itemVars} className="flex items-center justify-center gap-3 mb-8 translate-z-10">
                        <span className="w-6 md:w-16 h-px bg-primary/40" />
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[9px] md:text-sm">Mastering Light & Motion</span>
                        <span className="w-6 md:w-16 h-px bg-primary/40" />
                    </motion.div>

                    <div className="mb-6 preserve-3d">
                        <motion.div variants={itemVars} className="mb-4 translate-z-20">
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-primary/80 italic">Vilas Kachhwaha Presents</span>
                        </motion.div>
                        <motion.h1
                            variants={itemVars}
                            className="flex flex-col items-center gap-1 text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-foreground drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700 cursor-default"
                        >
                            <span>Vilas</span>
                            <span className="text-gradient italic font-serif lowercase tracking-normal px-2 block">Kachhwaha</span>
                        </motion.h1>
                    </div>

                    <div className="mb-12 translate-z-30">
                        <motion.h2
                            variants={itemVars}
                            className="text-2xl md:text-6xl font-light uppercase tracking-[0.15em] text-foreground/40 leading-tight"
                        >
                            Film Maker <span className="text-foreground/80">&</span> <br className="md:hidden" /> Graphics Designer
                        </motion.h2>
                    </div>

                    <motion.p
                        variants={itemVars}
                        className="text-foreground/40 max-w-2xl mx-auto text-sm md:text-xl mb-16 leading-relaxed font-light px-4 translate-z-20"
                    >
                        Sculpting high-impact visual narratives for global brands and
                        creating cinematic legacies through the lens of innovation.
                    </motion.p>

                    <motion.div
                        variants={itemVars}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 preserve-3d"
                    >
                        <motion.a
                            href="#work"
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                rotateX: 5,
                                backgroundColor: 'var(--primary)',
                                boxShadow: '0 25px 50px -12px rgba(var(--primary-rgb), 0.6)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-5 bg-primary font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all text-[10px] shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.4)] relative overflow-hidden group/btn preserve-3d glimmer vintage-grain"
                            style={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
                        >
                            <span className="relative z-10 translate-z-10">The Collection</span>
                            <ArrowRight className="w-4 h-4 relative z-10 translate-z-10" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                        </motion.a>

                        <motion.a
                            href="https://drive.google.com/drive/folders/1_t78xj-38nhN9j1A0EFOi6W5LNy0ePIf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-5 border border-primary/30 text-primary hover:bg-primary hover:text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all text-[10px] preserve-3d group"
                        >
                            <span>Full Drive Access</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 px-4 translate-z-50"
            >
                <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>

            {/* Side Label - Desktop Only */}
            <div className="absolute left-8 bottom-32 hidden xl:block overflow-hidden preserve-3d">
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex items-center gap-6 origin-left -rotate-90 translate-z-10"
                >
                    <span className="text-[10px] uppercase tracking-[1.5em] text-foreground/20 font-black">EST . MMXXVI</span>
                    <div className="w-20 h-px bg-[var(--border)]" />
                </motion.div>
            </div>
        </section>
    );
}
