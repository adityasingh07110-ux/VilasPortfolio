'use client';
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkGallery from "@/components/WorkGallery";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const whatsappNumber = "917772879737";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Vilas,%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <main className="min-h-screen selection:bg-primary selection:text-black">
      <CustomCursor />
      <BackgroundAnimation />
      <Navbar />

      <div className="relative z-10">
        <Hero />

        {/* Statistics / Trust Indicators Section */}
        <motion.section
          id="stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 border-y border-[var(--border)] bg-surface/80 perspective-1000"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 preserve-3d">
            {[
              { label: 'Global Projects', value: '250+' },
              { label: 'Video Awards', value: '15' },
              { label: 'Years Experience', value: '08' },
              { label: 'Happy Clients', value: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center group transition-all duration-500 hover:translate-z-10 preserve-3d"
              >
                <h3 className="text-4xl md:text-6xl font-black text-foreground mb-2 group-hover:text-primary transition-all group-hover:scale-110 drop-shadow-2xl">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 group-hover:text-primary/60 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <WorkGallery />

        {/* About / Vision Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="py-24 px-6 md:px-12 relative overflow-hidden perspective-1000"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start preserve-3d">
            <div className="lg:w-1/3 sticky top-32 preserve-3d">
              <div className="relative group preserve-3d">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface border border-[var(--border)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-primary/20 transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2 relative">
                  <img
                    src="/images/vilas-about.jpg"
                    alt="Vilas Kachhwaha - Videographer & Visual Artist"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                </div>
                <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] -z-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-8 -left-8 bg-primary text-black px-6 py-2 rounded-lg font-black uppercase text-xs tracking-widest shadow-2xl -rotate-12 translate-z-20" style={{ backgroundColor: '#D4AF37', color: '#000000' }}>
                  8+ Years Exp
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Language Mastery</h4>
                  <div className="flex gap-4">
                    {['Hindi', 'English'].map(lang => (
                      <span key={lang} className="px-4 py-2 bg-surface glass-3d rounded-xl text-[10px] font-bold uppercase tracking-widest text-foreground/60 transition-transform hover:-translate-y-1 hover:text-primary">{lang}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Institutions</h4>
                  <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                    <li className="flex items-center gap-3 group/inst"><div className="w-6 h-px bg-primary/30 group-hover/inst:w-8 transition-all" /><span className="group-hover/inst:text-foreground transition-colors">Reliance Animation, Mumbai</span></li>
                    <li className="flex items-center gap-3 group/inst"><div className="w-6 h-px bg-primary/30 group-hover/inst:w-8 transition-all" /><span className="group-hover/inst:text-foreground transition-colors">Arena Animation, Mumbai</span></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="lg:w-2/3 space-y-20 preserve-3d">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-xs block mb-4">My Vision</span>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-foreground">
                    Creating <span className="text-gradient drop-shadow-2xl">Impactful</span> <br /> Digital Experiences
                  </h2>
                </div>
                <p className="text-foreground/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                  My vision is to utilize my diverse skills in photography, cinematography, graphic design, and social media management to create impactful visual stories and engaging digital experiences for brands and individuals.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.a
                    href="/Vilas_20260128_121956_0000.pdf"
                    download
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: '0 25px 50px -15px rgba(var(--primary-rgb), 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-8 px-10 py-5 bg-surface/50 backdrop-blur-md border border-primary/20 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:border-primary transition-all group shadow-2xl preserve-3d"
                  >
                    <span className="relative z-10 translate-z-10">Download Executive Resume</span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 translate-z-20">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
                    </div>
                  </motion.a>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                      <span className="w-8 h-px bg-primary" /> Software Mastery
                    </h4>
                    <div className="space-y-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-2">Video Editing</p>
                        <p className="text-base font-bold text-foreground/80 hover:text-primary transition-colors">Premiere, Final Cut Pro, DaVinci Resolve</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-2">Photo Editing</p>
                        <p className="text-base font-bold text-foreground/80 hover:text-primary transition-colors">Photoshop, Lightroom, Luminar</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-surface/50 border border-[var(--border)] glass-3d group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-2">Graphic Design</p>
                        <p className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors">Photoshop, Illustrator, Canva Pro</p>
                        <p className="text-[10px] mt-2 text-foreground/40 group-hover:text-foreground transition-colors uppercase tracking-widest">Logo, Web UI, Android UI</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                      <span className="w-8 h-px bg-primary" /> Film & Camera
                    </h4>
                    <div className="space-y-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-2">Film Types</p>
                        <p className="text-base font-bold text-foreground/80 hover:text-primary transition-colors">Commercial, Stories, Advertisement, Webseries, Shorts Films</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-2">Gear Expertise</p>
                        <p className="text-base font-bold text-foreground/80 hover:text-primary transition-colors">Sony, Nikon, Canon, Red, Arri</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                      <span className="w-8 h-px bg-primary" /> Core Expertise
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        'Sense of Work Style',
                        'Artistic Ability',
                        'Creative Thinking',
                        'Time Management',
                        'Product Management'
                      ].map((skill) => (
                        <div key={skill} className="p-6 rounded-2xl bg-surface border border-[var(--border)] glass-3d flex items-center justify-between group hover:-translate-y-1 transition-all">
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-primary transition-colors">{skill}</span>
                          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-10 rounded-[2.5rem] bg-surface border border-[var(--border)] glass-3d relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all scale-150" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Current Focus</h4>
                    <p className="text-lg font-bold text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                      Specializing in Photographer, Cinematographer, Graphic Designer, Video Editor, and Social Media Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Premium CTA & Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-24 md:py-48 px-6 overflow-hidden perspective-1000"
        >
          <div className="max-w-4xl mx-auto text-center space-y-20 preserve-3d">
            <div className="space-y-8 group">
              <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-tight drop-shadow-2xl transition-transform group-hover:scale-105 duration-700">
                Let's Build Your <br />
                <span className="text-gradient italic font-serif lowercase tracking-normal">Masterpiece</span>
              </h2>
              <p className="text-foreground/40 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-xl">
                Ready to transform your vision into cinematic reality? Connect via your preferred channel and let's start the conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 preserve-3d max-w-5xl mx-auto">
              {/* Email Card */}
              <a href="mailto:vilash.kachhwaha@gmail.com" className="p-8 md:p-10 rounded-[2rem] bg-surface flex flex-col items-center text-center gap-6 border border-[var(--border)] hover:border-primary/50 transition-all group shadow-xl hover:-translate-y-2 duration-500 preserve-3d border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-700 translate-z-10 shadow-lg">
                  <Mail className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="space-y-1 translate-z-20">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60 block">Email Us</span>
                  <span className="text-xs font-bold text-foreground/40 group-hover:text-foreground transition-colors block break-all">vilash.kachhwaha@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-8 md:p-10 rounded-[2rem] bg-surface flex flex-col items-center text-center gap-6 border border-primary/30 transition-all group shadow-2xl hover:-translate-y-3 duration-500 preserve-3d vintage-grain" style={{ backgroundColor: 'var(--primary)' }}>
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.2)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-700 translate-z-10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1 translate-z-20">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--background)] block opacity-70">WhatsApp</span>
                  <span className="text-xs font-bold text-[var(--background)] block">Direct Chat</span>
                </div>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/vilas.kachhwaha/" target="_blank" rel="noopener noreferrer" className="p-8 md:p-10 rounded-[2rem] bg-surface flex flex-col items-center text-center gap-6 border border-[var(--border)] hover:border-primary/50 transition-all group shadow-xl hover:-translate-y-2 duration-500 preserve-3d border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-[var(--border)] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 translate-z-10 shadow-lg">
                  <Instagram className="w-6 h-6 text-foreground/40 group-hover:text-black transition-colors" />
                </div>
                <div className="space-y-1 translate-z-20">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/20 block">Instagram</span>
                  <span className="text-xs font-bold text-foreground/40 group-hover:text-foreground transition-colors block">@vilas.kachhwaha</span>
                </div>
              </a>
            </div>

            <div className="inline-block px-10 py-5 rounded-full bg-primary/5 border border-primary/10 shadow-inner group/status transition-transform hover:scale-110">
              <p className="text-primary font-black text-xs uppercase tracking-widest italic flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),1)]" />
                Typically responds within 2 hours
              </p>
            </div>
          </div>

          {/* Decorative background for CTA */}
          <div className="absolute inset-0 bg-primary/[0.03] blur-[150px] -z-10" />
        </motion.section>

        <Footer />
      </div>
    </main>
  );
}
