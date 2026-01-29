'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, X } from 'lucide-react';
import { useState, useRef } from 'react';

interface VideoCardProps {
    title: string;
    category: string;
    thumbnail: string;
    youtubeId: string;
}

export default function VideoCard({ title, category, thumbnail, youtubeId }: VideoCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovered(true);
        }, 500); // Small delay before auto-play on hover
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsHovered(false);
    };

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                    y: -15,
                    rotateX: 4,
                    rotateY: -2,
                    scale: 1.02
                }}
                className="group relative cursor-pointer perspective-1000 preserve-3d transition-all duration-500"
                onClick={() => setIsPlaying(true)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-surface border border-[var(--border)] transition-all duration-700 aspect-video group-hover:border-primary/40 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4),0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)] preserve-3d">

                    <AnimatePresence mode="wait">
                        {!isHovered ? (
                            <motion.div
                                key="thumbnail"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={thumbnail}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0`}
                                    className="w-full h-full scale-[1.3] pointer-events-none" // Scaled to hide edges/UI
                                    allow="autoplay"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Centered Indicator (Only visible if not playing preview) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d">
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.3 : 1,
                                opacity: isHovered ? 0 : 1
                            }}
                            className="w-20 h-20 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all shadow-2xl translate-z-20"
                        >
                            <Play className="w-8 h-8 text-foreground fill-current group-hover:text-primary transition-colors" />
                        </motion.div>
                    </div>

                    {/* Metadata */}
                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 preserve-3d translate-z-30">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1.5 rounded-full bg-background border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.25em] shadow-lg">
                                {category}
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tight leading-none drop-shadow-2xl">{title}</h3>
                    </div>

                    {/* Corner Icon */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-z-20">
                        <div className="w-12 h-12 rounded-2xl bg-surface border border-[var(--border)] flex items-center justify-center shadow-xl">
                            <Maximize2 className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Full Player Modal */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-background/95"
                    >
                        <motion.button
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            onClick={() => setIsPlaying(false)}
                            className="absolute top-8 right-8 z-[201] p-5 rounded-full bg-surface border border-[var(--border)] hover:bg-surface/50 text-foreground transition-all hover:scale-110"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="relative w-full max-w-7xl aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(var(--primary-rgb),0.2)] border border-[var(--border)]"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                                title={title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>

                        <div className="absolute inset-0 -z-10" onClick={() => setIsPlaying(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
