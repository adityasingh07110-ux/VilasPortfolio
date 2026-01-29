'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Instagram, Youtube, Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = "917772879737";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Vilas,%20I'd%20like%20to%20discuss%20a%20project.`;

    const menuItems = [
        { label: 'Collections', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 p-4 md:p-6 pointer-events-none perspective-[2000px] ${scrolled ? 'py-2 md:py-4' : 'py-6 md:py-10'}`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto preserve-3d relative">

                    {/* Persistent Background Glass Dock - Layer 0 */}
                    <div className={`absolute inset-x-[-20px] inset-y-[-10px] bg-surface border border-[var(--border)] rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 -z-10 translate-z-[0px] ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`} />

                    {/* Logo - Layer 3 (Highest Depth) */}
                    <div className="relative z-[110] preserve-3d translate-z-[50px]">
                        <Link href="/" className="flex items-center gap-5 group transition-all active:scale-95 hover:translate-z-[30px] perspective-1000">
                            <div className={`aspect-square bg-foreground flex items-center justify-center rounded-[1.25rem] rotate-0 group-hover:rotate-[15deg] transition-all duration-700 shadow-[0_15px_35px_rgba(0,0,0,0.3)] group-hover:shadow-[0_25px_50px_rgba(var(--primary-rgb),0.5)] ${scrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
                                <Camera className={`text-background transition-all duration-700 group-hover:scale-110 ${scrolled ? 'w-5 h-5' : 'w-7 h-7'}`} />
                            </div>
                            <div className="flex flex-col -gap-1 group-hover:translate-x-2 transition-transform duration-500">
                                <span className={`font-black tracking-tighter uppercase leading-none text-foreground transition-all duration-700 ${scrolled ? 'text-lg' : 'text-2xl'}`}>
                                    Vilas
                                </span>
                                <span className={`font-black tracking-[0.2em] uppercase leading-none text-primary italic transition-all duration-700 ${scrolled ? 'text-[10px]' : 'text-xs'}`}>
                                    Kachhwaha
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 p-1 bg-surface border border-[var(--border)] rounded-full shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] translate-z-[10px] hover:translate-z-[20px] transition-all duration-700">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground transition-all relative group/navitem"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <span className="relative z-10 block transition-transform duration-500">{item.label}</span>
                                <motion.div
                                    className="absolute inset-0 bg-primary/15 rounded-full opacity-0 group-hover/navitem:opacity-100 transition-opacity"
                                    layoutId="nav-hover"
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 z-[102] preserve-3d translate-z-[30px]">
                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-4 bg-surface border border-[var(--border)] rounded-2xl text-foreground active:scale-90 transition-all hover:border-primary/50 shadow-xl hover:shadow-primary/20 group/theme"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5 animate-spin-slow" /> : <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                            </button>
                        )}

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-primary text-[11px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-primary/90 transition-all active:scale-95 shadow-[0_20px_40px_-5px_rgba(var(--primary-rgb),0.5)] hidden sm:flex items-center gap-3 group/navbtn glimmer vintage-grain"
                            style={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Direct Chat
                        </a>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-4 bg-surface border border-[var(--border)] rounded-2xl text-foreground active:scale-90 transition-all shadow-xl hover:border-primary/50"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-[101] bg-background/80 lg:hidden h-screen overflow-hidden flex flex-col"
                    >
                        {/* Background Decorative Element */}
                        <div className="absolute inset-0 bg-primary/[0.03] blur-[150px] -z-10" />

                        <div className="flex flex-col h-full px-8 pt-32 pb-16 justify-between">
                            <div className="space-y-6">
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-4xl font-black uppercase tracking-tighter text-foreground hover:text-primary transition-all group"
                                        >
                                            <span className="text-foreground/20 group-hover:text-primary mr-4 text-xl font-serif italic">0{i + 1}</span>
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-10"
                            >
                                <a
                                    href={whatsappLink}
                                    className="w-full py-5 bg-primary font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 text-sm shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.4)] glimmer vintage-grain"
                                    style={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Connect via WhatsApp
                                </a>

                                <div className="flex justify-center border-t border-[var(--border)] pt-10">
                                    <Link href="https://www.instagram.com/vilas.kachhwaha/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                                        <div className="w-14 h-14 rounded-2xl bg-surface border border-[var(--border)] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                            <Instagram className="w-6 h-6 text-foreground group-hover:text-black" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-foreground/30 tracking-widest group-hover:text-primary transition-colors">Instagram</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
