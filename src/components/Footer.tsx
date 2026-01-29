'use client';

import { Camera, Instagram, Mail, MessageCircle, Aperture, Settings, Circle, Monitor, Zap, Power, Grid } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const whatsappNumber = "917772879737";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Vilas,%20I'd%20like%20to%20discuss%20a%20project.`;

    return (
        <footer id="contact" className="relative mt-32 pb-8 overflow-visible px-4 md:px-0">
            {/* The DSLR Camera Module Container */}
            <div className="w-full relative max-w-[1400px] mx-auto">

                {/* 1. DSLR TOP PLATE & VIEWFINER (Ergonomic Hump) */}
                <div className="relative z-20">
                    {/* Viewfinder Eyepiece Eye-level Hump */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-32 md:w-48 h-12 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-t-3xl border-t border-x border-white/10 shadow-2xl flex items-center justify-center">
                        <div className="w-20 md:w-28 h-6 bg-black rounded-lg border border-white/5 flex items-center justify-center">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.05)_0%,transparent_70%)] rounded-lg" />
                        </div>
                    </div>

                    <div className="h-10 md:h-14 w-full bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] rounded-t-[2.5rem] border-x border-t border-white/10 flex items-center justify-between px-6 md:px-12 relative overflow-hidden shadow-2xl mt-6">
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* Mode Dial (Aggressive Knurling) */}
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-b from-[#333] to-[#111] border border-white/20 shadow-lg flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full border-t border-white/10" />
                                <span className="text-[10px] font-black text-primary">M</span>
                            </div>

                            {/* Function Buttons */}
                            <div className="flex gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#222] border border-white/5 shadow-inner" />
                                <div className="w-4 h-4 rounded-full bg-red-600/20 border border-red-500/20 shadow-inner" />
                            </div>
                        </div>

                        {/* DSLR Branding Plate (Stacked Logo) */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-40 md:w-56 bg-gradient-to-b from-[#151515] to-[#050505] border-x border-white/5 flex flex-col items-center justify-center py-2 shadow-2xl">
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] leading-none mb-1 text-white">Vilas</span>
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] leading-none text-primary italic">Kachhwaha</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Power className="w-4 h-4 text-primary animate-pulse cursor-pointer" />
                            <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* 2. DSLR MAIN MODULE BODY (Pro Gripped Texture) */}
                <div className="relative bg-[#0d0d0d] border-x border-b border-white/10 rounded-b-[3.5rem] p-8 md:p-16 overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,1)]">

                    {/* Professional Rubber Grip Texture */}
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    {/* Lens Mount & Sensor Module Area */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                        {/* Left Side: The Sensor & Lens Mount */}
                        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                            {/* Lens Release Button */}
                            <div className="absolute top-0 right-10 w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors shadow-lg z-20">
                                <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,0.5)]" />
                            </div>

                            <div className="relative group">
                                {/* Chrome Lens Mount Ring */}
                                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-[20px] md:border-[30px] border-[#151515] bg-[#050505] shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(0,0,0,1)] flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">

                                    {/* The "Sensor" Look */}
                                    <div className="w-32 h-24 md:w-40 md:h-32 bg-[#111] border-[1px] border-white/10 rounded-sm shadow-inner overflow-hidden relative">
                                        {/* Sensor Iridescence */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-emerald-500/10 to-purple-500/10 animate-pulse" />
                                        <div className="absolute inset-[10%] border border-white/5 rounded-sm opacity-20" />
                                        {/* Aperture Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Aperture className="w-20 h-20 text-white/5 group-hover:text-primary/20 transition-all duration-1000 group-hover:rotate-90" />
                                        </div>
                                    </div>

                                    {/* Bayonet Mount Details */}
                                    <div className="absolute inset-0 rounded-full border border-white/5 opacity-50" />
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_60%)] rounded-full pointer-events-none" />
                            </div>
                            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.8em] text-white/5">Full Frame Visual Engine</p>
                        </div>

                        {/* Right Side: Pro LCD & Control Interface */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* The "LCD Screen" Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6 px-8 border-l border-primary/20 bg-gradient-to-r from-primary/[0.02] to-transparent py-4 rounded-r-2xl">
                                    <div className="flex items-center gap-3">
                                        <Grid className="w-4 h-4 text-primary" />
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/60">System Menu</h4>
                                    </div>
                                    <nav className="flex flex-col gap-4">
                                        {[
                                            { label: 'The Showcase', href: '#work' },
                                            { label: 'Visionary Bio', href: '#about' },
                                            { label: 'Production Reel', href: 'https://www.youtube.com/@vilaskachhwaha3372' }
                                        ].map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="flex items-center text-sm font-bold text-white/20 hover:text-white hover:translate-x-2 transition-all"
                                            >
                                                <div className="w-1 h-3 bg-white/5 mr-4" />
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                <div className="space-y-6 px-8 border-l border-white/10 py-4">
                                    <div className="flex items-center gap-3">
                                        <Circle className="w-2 h-2 fill-primary text-primary" />
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/60">Telemetry</h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-[8px] font-black text-white/10 uppercase tracking-widest block mb-1">Station</span>
                                            <p className="text-xs font-bold text-white/40">MUMBAI, INDIA</p>
                                        </div>
                                        <div>
                                            <span className="text-[8px] font-black text-white/10 uppercase tracking-widest block mb-1">Satellite Link</span>
                                            <p className="text-xs font-bold text-white/40">+91 777 287 9737</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* The Call to Action Panel */}
                            <div className="relative group/btn">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur opacity-0 group-hover/btn:opacity-100 transition duration-500" />
                                <motion.a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative w-full py-6 md:py-8 bg-[#111] border border-white/5 rounded-[2rem] flex flex-col md:flex-row items-center justify-between px-10 gap-6 overflow-hidden shadow-2xl"
                                >
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">Initialize Capture</span>
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white italic">Start Production</h3>
                                    </div>
                                    <div className="px-8 py-3 bg-primary text-[var(--background)] rounded-xl font-black uppercase tracking-widest text-[10px] glimmer vintage-grain">
                                        <MessageCircle className="w-4 h-4 inline-block mr-2" />
                                        Connect
                                    </div>
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata - Industrial labels */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 px-10 text-[9px] font-black uppercase tracking-[0.5em] text-white/5">
                    <div className="flex items-center gap-4">
                        <span className="text-primary italic">DIGITAL OPTICS ENGAGED ●</span>
                        <p>© 2026 Vilas Kachhwaha | Visual Studio Prototype</p>
                    </div>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Protocal</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Usage Rights</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
