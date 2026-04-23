/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Stethoscope, 
  ShoppingBag, 
  Clock, 
  Phone, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  Menu,
  X as CloseIcon,
  Star,
  Dog,
  Cat
} from 'lucide-react';
import { SITE_CONFIG, ABOUT, TEAM, TESTIMONIALS, SERVICES } from './siteConfig';

const PRODUCTS = [
  { name: "Organic Paw Balm", price: "$18", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop" },
  { name: "Herbal Calming Drops", price: "$32", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" },
  { name: "Senior Joint Supplement", price: "$45", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Navigation — floated banner for high contrast over hero image */}
      <nav className={`fixed z-50 transition-all duration-300 px-6 py-4 md:px-12 ${isScrolled ? 'top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3' : 'top-4 left-4 right-4 bg-white/95 backdrop-blur-md shadow-lg border border-gray-100/50 rounded-2xl'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SITE_CONFIG.logoUrl ? (
              <img src={SITE_CONFIG.logoUrl} alt="Junction Pet Clinic Logo" className="h-12 object-contain brightness-0 opacity-80" />
            ) : (
              <>
                <div className="w-10 h-10 bg-polish-sage flex items-center justify-center rounded-full shadow-md">
                  <div className="w-4 h-4 rounded-sm border-2 border-white rotate-45 flex items-center justify-center">
                    <Heart size={8} fill="white" className="rotate-[-45deg]" />
                  </div>
                </div>
                <span className="font-serif text-2xl font-semibold text-polish-sage tracking-tight">{SITE_CONFIG.businessName}</span>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center gap-10 font-display text-[13px] font-medium tracking-wide">
            <a href="#about" className="text-gray-500 hover:text-polish-clay transition-colors uppercase cursor-pointer">Our Story</a>
            <a href="#team" className="text-gray-500 hover:text-polish-clay transition-colors uppercase cursor-pointer">The Team</a>
            <a href="#services" className="text-gray-500 hover:text-polish-clay transition-colors uppercase cursor-pointer">Services</a>
            <a href="#store" className="text-gray-500 hover:text-polish-clay transition-colors uppercase italic cursor-pointer">MyVetStore</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-3 min-h-[44px] bg-polish-emergency text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-emergency hover:brightness-110 transition-all cursor-pointer">
              After Hours & Emergency
            </button>
            <button className="px-6 py-3 min-h-[44px] bg-polish-clay text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-book hover:brightness-110 transition-all cursor-pointer">
              Book Appointment
            </button>
          </div>

          <button className="md:hidden text-polish-ink cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-polish-cream p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close navigation menu">
                <CloseIcon size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-8 text-3xl font-serif">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>The Team</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#store" onClick={() => setMobileMenuOpen(false)}>MyVetStore</a>
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-4 bg-polish-clay text-white rounded-full text-sm font-semibold uppercase cursor-pointer">Book Now</button>
                <button className="w-full py-4 bg-polish-emergency text-white rounded-full text-sm font-semibold uppercase cursor-pointer">After Hours</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {/* Main content landmark */}
      <main id="main-content">
      <section className="relative h-screen w-full overflow-hidden flex items-center" aria-label="Hero">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" 
            alt="Golden retriever puppy looking warmly at the camera in soft natural light" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Hero Mask Styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-polish-sage/90 via-polish-sage/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(197,160,89,0.3)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 px-12 md:px-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-polish-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block drop-shadow-sm">Locally Rooted • Community Focused</span>
            
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6 drop-shadow-lg">
              {ABOUT.headline}
            </h1>

            <div className="inline-flex items-center gap-2 bg-polish-ink/40 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5 shadow-lg mb-8 cursor-pointer hover:bg-polish-ink/60 transition-colors">
              <span className="text-white text-sm font-bold">{ABOUT.stats[1].value}</span>
              <div className="flex gap-0.5 text-polish-gold">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
              </div>
              <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider ml-1">{ABOUT.stats[0].value} {ABOUT.stats[0].label}</span>
            </div>

            <p className="font-display text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">
              {ABOUT.heroText}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto px-8 py-4 min-h-[44px] bg-white text-polish-sage rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                Book Appointment
              </motion.button>
              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto px-8 py-4 min-h-[44px] bg-polish-clay text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                New Client Registration
              </motion.button>
              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto px-8 py-4 min-h-[44px] border border-white/30 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                Order Food & Rx
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-12 md:left-24 text-white/40 flex flex-col items-start gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
          <div className="w-px h-12 bg-white/20 relative">
            <motion.div 
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 w-full bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Origin Story / About */}
      <section id="about" className="bg-polish-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                alt="Veterinarian gently holding a golden retriever puppy during a wellness exam" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <h3 className="text-polish-gold font-display font-bold uppercase tracking-[0.2em] text-xs italic">Our Heritage</h3>
              <h2 className="font-serif text-4xl md:text-6xl text-polish-ink leading-tight">
                {ABOUT.secondaryHeadline || ABOUT.headline}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {ABOUT.story}
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">{ABOUT.stats[0].value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">{ABOUT.stats[0].label}</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">{ABOUT.stats[1].value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">{ABOUT.stats[1].label}</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">{ABOUT.stats[2].value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">{ABOUT.stats[2].label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h3 className="text-polish-sage font-display font-bold uppercase tracking-[0.3em] text-xs mb-6">Specialized Care</h3>
              <h2 className="font-serif text-5xl md:text-7xl">Species-specific wellness.</h2>
            </div>
            <p className="max-w-md text-gray-500 text-lg font-light leading-relaxed">
              Tailored medical pathways designed for the unique physiological and behavioral needs of your canine and feline family members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Dog Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="card relative overflow-hidden p-12 aspect-[4/3] flex flex-col justify-end group cursor-pointer border-gray-100/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop" 
                alt="Happy dog portrait representing canine health services" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-polish-cream rounded-full mb-8 flex items-center justify-center shadow-sm border border-gray-50">
                  <Dog size={28} className="text-polish-sage" />
                </div>
                <h3 className="font-serif text-4xl mb-4">Canine Health</h3>
                <div className="flex items-center gap-2 mb-4 text-[10px] uppercase font-bold text-polish-gold tracking-widest"><ShieldCheck size={12}/> Fear-Free Certified</div>
                <p className="text-gray-500 mb-8 max-w-xs font-light">Comprehensive orthopedic care, clinical nutrition, and behavior consultation tailored specifically for dogs.</p>
                <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-polish-sage group-hover:gap-6 transition-all cursor-pointer">
                  Dog Services <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Cat Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="card relative overflow-hidden p-12 aspect-[4/3] flex flex-col justify-end group cursor-pointer border-gray-100/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" 
                alt="Calm cat portrait representing feline wellness services" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-polish-cream rounded-full mb-8 flex items-center justify-center shadow-sm border border-gray-50">
                  <Cat size={28} className="text-polish-sage" />
                </div>
                <h3 className="font-serif text-4xl mb-4">Feline Wellness</h3>
                <div className="flex items-center gap-2 mb-4 text-[10px] uppercase font-bold text-polish-gold tracking-widest"><ShieldCheck size={12}/> Feline Friendly Practice</div>
                <p className="text-gray-500 mb-8 max-w-xs font-light">Specialized low-stress diagnostics, feline dental excellence, and senior management in our cat-only ward.</p>
                <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-polish-sage group-hover:gap-6 transition-all cursor-pointer">
                  Cat Services <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team" className="pt-24 pb-12 px-6 md:px-12 bg-polish-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h3 className="text-polish-clay font-display font-bold uppercase tracking-[0.4em] text-[10px]">The Kindred Team</h3>
            <h2 className="font-serif text-5xl md:text-7xl">Expert hands, gentle spirits.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-64 h-80 mb-8 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-3xl mb-2">{member.name}</h4>
                <p className="text-polish-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[240px]">
                  {member.bio}
                </p>
                <div className="flex gap-4 mt-6 text-gray-300">
                  {member.social?.instagram && <a href={member.social.instagram} aria-label={`${member.name} on Instagram`} className="hover:text-polish-clay cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Instagram size={18} /></a>}
                  {member.social?.facebook && <a href={member.social.facebook} aria-label={`${member.name} on Facebook`} className="hover:text-polish-clay cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Facebook size={18} /></a>}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="px-10 py-4 min-h-[44px] bg-polish-sage text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-polish-clay transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer">
              Meet the rest of our team
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-8xl text-polish-sage/10 absolute -top-10 left-0 select-none">Kindness Echoes.</h2>
          <div className="text-center mb-20 relative">
            <h3 className="text-polish-gold font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Client Stories</h3>
            <h2 className="font-serif text-5xl italic">Stories from our home.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card p-10 bg-slate-50 border border-slate-200 shadow-md flex flex-col hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer" role="article" aria-label={`Testimonial from ${t.name}`}>
                <div className="flex gap-1 text-polish-gold mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="font-serif text-xl italic text-gray-700 leading-relaxed mb-8 flex-1">
                  "{t.story}"
                </blockquote>
                <div>
                  <h4 className="font-display font-bold text-sm text-polish-sage tracking-wide uppercase">— {t.name}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apothecary / Store Preview */}
      <section id="store" className="py-24 px-6 md:px-12 bg-polish-cream">
        <div className="max-w-7xl mx-auto">
          <div className="card p-1 pb-1 border-dashed border-2 border-polish-sage/20 bg-white">
            <div className="p-16 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8 text-center md:text-left">
                <h3 className="text-polish-clay font-display font-bold uppercase tracking-[0.2em] text-[10px]">MyVetStore Partner</h3>
                <h2 className="font-serif text-5xl md:text-7xl">Curated for their comfort.</h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  Browse our selection of clinical nutrition, designer wellness accessories, and pharmaceutical essentials. Order online and get it delivered directly to your door.
                </p>
                <button className="px-10 py-4 min-h-[44px] bg-polish-sage text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-polish-clay transition-all shadow-xl flex items-center gap-3 mx-auto md:mx-0 cursor-pointer">
                  Shop MyVetStore <ShoppingBag size={14} />
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {PRODUCTS.slice(0, 3).map((prod, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`card overflow-hidden bg-white group cursor-pointer ${i === 2 ? 'col-span-2' : ''}`}
                  >
                    <div className={`${i === 2 ? 'h-48' : 'h-40'} w-full relative`}>
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                    <div className="p-4 flex justify-between items-center bg-white">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide">{prod.name}</h4>
                        <p className="text-[9px] text-gray-400 italic">Vetted Selection</p>
                      </div>
                      <span className="text-xs font-bold text-polish-gold">{prod.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking CTA */}
      <section id="book" className="py-24 px-6 md:px-12 bg-polish-sage text-white text-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(197,160,89,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-polish-gold/30 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <h3 className="text-polish-gold font-display font-bold uppercase tracking-[0.3em] text-[10px]">Your Pet Deserves The Best</h3>
          <h2 className="font-serif text-5xl md:text-7xl">Ready to join our family?</h2>
          <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl mx-auto">
            Schedule your first consultation today and experience veterinary care the way it was meant to be—personal, patient, and precise.
          </p>
          
          <form className="max-w-md mx-auto grid gap-4 mt-8 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="owner-name" className="sr-only">Your Name</label>
                <input id="owner-name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-polish-gold focus:bg-white/10 transition-all font-display text-sm" />
              </div>
              <div>
                <label htmlFor="pet-name" className="sr-only">Pet's Name</label>
                <input id="pet-name" type="text" placeholder="Pet's Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-polish-gold focus:bg-white/10 transition-all font-display text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input id="contact-email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-polish-gold focus:bg-white/10 transition-all font-display text-sm" />
            </div>
            <div>
              <label htmlFor="service-type" className="sr-only">Service Type</label>
              <select id="service-type" required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-polish-gold focus:bg-white/10 transition-all font-display text-sm appearance-none cursor-pointer">
                <option value="" disabled className="text-gray-900">Select Service Type...</option>
                <option value="wellness" className="text-gray-900">Annual Wellness Exam</option>
                <option value="dental" className="text-gray-900">Dental Consultation</option>
                <option value="new-pet" className="text-gray-900">New Puppy/Kitten Visit</option>
                <option value="sick" className="text-gray-900">Sick Pet Examination</option>
              </select>
            </div>
            <button type="submit" className="w-full mt-4 bg-polish-gold text-polish-ink rounded-full py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-polish-gold/20 cursor-pointer min-h-[44px]">
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-polish-ink pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                {SITE_CONFIG.logoUrl ? (
                  <img src={SITE_CONFIG.logoUrl} alt="Junction Pet Clinic Logo" className="h-10 object-contain brightness-0 invert opacity-80" />
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rotate-45"></div>
                    </div>
                    <span className="font-serif text-2xl font-semibold text-white tracking-tight">{SITE_CONFIG.businessName}</span>
                  </>
                )}
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                A destination for modern veterinary medicine, proudly serving the Junction neighborhood.
              </p>
              <div className="flex gap-4 text-polish-gold">
                {SITE_CONFIG.socialLinks?.instagram && <a href={SITE_CONFIG.socialLinks.instagram} aria-label={`${SITE_CONFIG.businessName} on Instagram`} className="hover:text-polish-clay cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Instagram size={18} /></a>}
                {SITE_CONFIG.socialLinks?.twitter && <a href={SITE_CONFIG.socialLinks.twitter} aria-label={`${SITE_CONFIG.businessName} on Twitter`} className="hover:text-polish-clay cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Twitter size={18} /></a>}
                {SITE_CONFIG.socialLinks?.facebook && <a href={SITE_CONFIG.socialLinks.facebook} aria-label={`${SITE_CONFIG.businessName} on Facebook`} className="hover:text-polish-clay cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Facebook size={18} /></a>}
              </div>
            </div>
            
            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Discover</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="text-white/70 hover:text-polish-gold transition-colors underline-offset-4 hover:underline cursor-pointer">New Client Registration</a></li>
                <li><a href="#" className="text-white/70 hover:text-polish-gold transition-colors underline-offset-4 hover:underline cursor-pointer">Patient Portal Login</a></li>
                <li><a href="#" className="text-white/70 hover:text-polish-gold transition-colors underline-offset-4 hover:underline cursor-pointer">Pet Health Library</a></li>
                <li><a href="#" className="text-white/70 hover:text-polish-gold transition-colors italic underline-offset-4 hover:underline font-serif cursor-pointer">MyVetStore Apothecary</a></li>
              </ul>
            </div>

            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Visit Us</h5>
              <ul className="space-y-4 text-sm font-medium text-white/70">
                <li className="flex items-start gap-3">
                  <Phone size={14} className="text-polish-gold shrink-0 mt-1" />
                  <span>{SITE_CONFIG.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={14} className="text-polish-gold shrink-0 mt-1" />
                  <div>
                    {SITE_CONFIG.hours.map((h, i) => (
                      <p key={i} className={i > 0 ? "text-white/40 text-xs mt-1" : ""}>{h.days}: {h.time}</p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Newsletter</h5>
              <p className="text-[11px] text-white/60 leading-relaxed uppercase tracking-widest font-bold">Local updates \u0026 healing stories</p>
              <form className="relative">
                <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="Email address"
                  autoComplete="email"
                  className="w-full bg-transparent border-transparent border-b-white/20 border rounded-none py-3 pr-10 text-white focus:outline-none focus:border-polish-gold italic text-sm placeholder:text-white/30 transition-colors"
                />
                <button type="submit" className="absolute right-0 top-0 text-polish-gold cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-110 transition-transform" aria-label="Subscribe to newsletter">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Ethical Standards</a>
            </div>
            <p>© 2026 {SITE_CONFIG.businessName}. All rights reserved.</p>
            <div className="flex items-center gap-2 text-white/30">
              <ShieldCheck size={14} />
              <span>Certified Care Practice</span>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
