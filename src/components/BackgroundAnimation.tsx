'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement with increased responsiveness
    const springX = useSpring(mouseX, { damping: 40, stiffness: 250 });
    const springY = useSpring(mouseY, { damping: 40, stiffness: 250 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--background)] transition-colors duration-700">
            {/* Dynamic Mouse Follower (Lens Flare Effect) */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute w-[1200px] h-[1200px] pointer-events-none transition-opacity duration-500"
            >
                {/* Core Glow - High Intensity Gold */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.35)_0%,transparent_70%)] mix-blend-multiply dark:mix-blend-screen opacity-70 dark:opacity-50" />

                {/* Secondary Glow for Intensity */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15)_0%,transparent_50%)] mix-blend-overlay opacity-80" />

                {/* Cinematic Crosshair Lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[200vh] bg-gradient-to-b from-transparent via-primary/60 to-transparent blur-[2px] opacity-40 dark:opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[200vw] bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-[2px] opacity-40 dark:opacity-60" />

                {/* Aperture Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-primary/30 rounded-full blur-[3px] dark:border-primary/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full blur-[1px]" />
            </motion.div>

            {/* Viewfinder Corners */}
            <div className="absolute inset-8 md:inset-16 border border-[var(--border)] pointer-events-none z-10 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-primary/70" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-primary/70" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-primary/70" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-primary/70" />

                {/* Viewfinder Metadata Labels */}
                <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-20 text-[10px] font-black uppercase text-[#ff0000] tracking-[0.4em] hidden md:block shadow-[0_0_10px_rgba(255,0,0,0.3)]"
                >
                    REC ● 4K 60FPS
                </motion.div>
                <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 right-20 text-[10px] font-black uppercase text-[#ff0000]/80 tracking-[0.4em] hidden md:block"
                >
                    ISO 400 | WB 5600K
                </motion.div>
            </div>

            {/* High-Intensity Grain and Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] dark:opacity-[0.18] mix-blend-overlay pointer-events-none transition-opacity duration-700" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100px_100px] md:bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)] opacity-50 transition-all duration-700 shadow-[inset_0_0_100px_rgba(var(--primary-rgb),0.05)]" />
        </div>
    );
}
