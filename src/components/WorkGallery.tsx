'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoCard from './VideoCard';

const works = [
    {
        id: 1,
        title: "The Urban Pulse",
        category: "Commercial",
        youtubeId: "Etk-xNjTmm0",
        thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "Eternal Union",
        category: "Wedding",
        youtubeId: "Lp5e9T9v7Xw",
        thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 3,
        title: "Neon Streets",
        category: "iPhone Shorts",
        youtubeId: "jO4_X3-x8pU",
        thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 4,
        title: "Luxury Velocity",
        category: "Commercial",
        youtubeId: "PivpCKEiQOQ",
        thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 5,
        title: "Wild Spirits",
        category: "Wedding",
        youtubeId: "4p6U8T0P-yU",
        thumbnail: "https://images.unsplash.com/photo-1465495910483-34a1d374bb36?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 6,
        title: "Golden Hour",
        category: "iPhone Shorts",
        youtubeId: "A560SOfH1W8",
        thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 7,
        title: "City Echoes",
        category: "Commercial",
        youtubeId: "l9Y8K0JkH-g",
        thumbnail: "https://images.unsplash.com/photo-1449156003053-c30670b96835?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 8,
        title: "Mountain Vows",
        category: "Wedding",
        youtubeId: "Lp5e9T9v7Xw",
        thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 9,
        title: "Night Drive",
        category: "iPhone Shorts",
        youtubeId: "jO4_X3-x8pU",
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 10,
        title: "Fashion Motion",
        category: "Commercial",
        youtubeId: "PivpCKEiQOQ",
        thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 11,
        title: "Beach Romance",
        category: "Wedding",
        youtubeId: "4p6U8T0P-yU",
        thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 12,
        title: "Summer Vibes",
        category: "iPhone Shorts",
        youtubeId: "A560SOfH1W8",
        thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    },
];

const categories = ["All", "Commercial", "Wedding", "iPhone Shorts"];

export default function WorkGallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [displayedCount, setDisplayedCount] = useState(6);

    const filteredWorks = activeCategory === "All"
        ? works
        : works.filter(work => work.category === activeCategory);

    const visibleWorks = filteredWorks.slice(0, displayedCount);

    const handleLoadMore = () => {
        setDisplayedCount(prev => prev + 6);
    };

    return (
        <section id="work" className="py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none"
                        >
                            Master <br /><span className="text-primary italic font-serif lowercase tracking-normal">Collections</span>
                        </motion.h2>
                        <p className="text-foreground/40 text-lg font-light leading-relaxed">
                            A curated selection of cinematic projects ranging from high-end commercials
                            to intimate lifecycle storytelling.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setDisplayedCount(6); // Reset count when changing category
                                }}
                                className={`relative px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden border ${activeCategory === cat
                                    ? "bg-primary border-primary text-black"
                                    : "bg-surface border-[var(--border)] text-foreground/40 hover:text-foreground hover:border-foreground/30"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="break-inside-avoid"
                            >
                                <VideoCard
                                    title={work.title}
                                    category={work.category}
                                    thumbnail={work.thumbnail}
                                    youtubeId={work.youtubeId}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {displayedCount < filteredWorks.length && (
                    <div className="mt-24 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="group relative px-12 py-5 bg-surface border border-[var(--border)] rounded-full overflow-hidden transition-all hover:border-primary/50 shadow-xl"
                        >
                            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] text-foreground/60 group-hover:text-primary transition-colors">
                                Load More Masterpieces
                            </span>
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
