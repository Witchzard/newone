import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Map as MapIcon, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Camera, 
  Send, 
  Award,
  Globe,
  Zap,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="City Night" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1920" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-tight mb-6"
            >
              Make Streets <br />
              <span className="text-primary italic">Safer, Together.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 font-body mb-10 max-w-xl leading-relaxed"
            >
              Join the digital authority in traffic safety. Leverage crowdsourced data to eliminate violations and earn rewards while protecting your community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/report" className="px-8 py-4 rounded-2xl safety-gradient text-on-primary-container text-lg font-bold shadow-xl shadow-primary-container/20 hover:brightness-110 transition-all text-center">
                Report a Violation
              </Link>
              <Link to="/map" className="px-8 py-4 rounded-2xl bg-surface-container-high text-secondary text-lg font-bold border border-outline-variant/20 hover:bg-surface-container-highest transition-all text-center">
                View Safety Map
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 hidden md:block"
          >
            <div className="glass-panel p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <span className="text-tertiary font-headline font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" /> Live Activity
                </span>
                <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Global Network</span>
              </div>
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 border border-outline-variant/5">
                  <ShieldAlert className="text-primary" size={24} />
                  <div>
                    <p className="font-bold text-white">Double Parking Reported</p>
                    <p className="text-sm text-slate-500">2 mins ago in Brooklyn, NY</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 border border-outline-variant/5">
                  <CheckCircle2 className="text-tertiary" size={24} />
                  <div>
                    <p className="font-bold text-white">Reward Dispatched</p>
                    <p className="text-sm text-slate-500">Just now to @safeguard99</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 border border-outline-variant/5 opacity-50">
                  <History className="text-slate-400" size={24} />
                  <div>
                    <p className="font-bold text-white">Speeding Alert Processed</p>
                    <p className="text-sm text-slate-500">15 mins ago in Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Violations Resolved', value: '12.4k', icon: CheckCircle2, color: 'text-primary', progress: '78%' },
              { label: 'Rewards Earned', value: '$842k', icon: Award, color: 'text-secondary-container', progress: '92%' },
              { label: 'Active Guardians', value: '45k+', icon: Users, color: 'text-tertiary', progress: '65%' },
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10 group hover:bg-surface-container transition-all"
              >
                <stat.icon className={cn(stat.color, "mb-6")} size={48} />
                <h3 className="text-6xl font-headline font-extrabold text-white mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                <div className="mt-6 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={cn("h-full", stat.color.replace('text-', 'bg-'))} style={{ width: stat.progress }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-slate-500 font-bold uppercase tracking-widest mb-4">Process & Protocol</h2>
              <h3 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
                Precision Safety <br />
                <span className="text-outline">In Three Steps.</span>
              </h3>
            </div>
            <p className="text-slate-400 font-body max-w-md text-lg leading-relaxed">
              Our platform simplifies civic duty into a high-impact digital experience. No red tape, just results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border border-outline-variant/10 rounded-[3rem] overflow-hidden">
            {[
              { step: '01', title: 'Capture', icon: Camera, desc: 'Notice a clear violation? Snap a photo or video through the Street Sense app. Our AI automatically masks sensitive data.', bg: 'bg-surface-container-low' },
              { step: '02', title: 'Report', icon: Send, desc: 'Categorize the violation and submit. Our system cross-references GPS data and timestamps for instant verification.', bg: 'bg-surface-container-high' },
              { step: '03', title: 'Earn', icon: Award, desc: 'Once verified, earn Civic Points and crypto-backed rewards. Watch your impact grow on the local leaderboard.', bg: 'bg-surface-container-highest' },
            ].map((item) => (
              <div key={item.step} className={cn("p-12 border-r border-outline-variant/10 group", item.bg)}>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-primary font-headline text-8xl font-black opacity-10 group-hover:opacity-100 transition-opacity">{item.step}</span>
                  <item.icon className="text-primary" size={36} />
                </div>
                <h4 className="text-3xl font-headline font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-lg font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Urban" 
                className="w-full h-full object-cover opacity-20" 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-highest via-surface/90 to-surface-container-highest" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white mb-8 tracking-tight">Ready to Take Control of Your Streets?</h2>
              <p className="text-xl text-slate-400 font-body mb-12">
                Join 45,000+ citizens who are actively making their neighborhoods safer, one report at a time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <input 
                  className="px-8 py-5 rounded-2xl bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary text-white min-w-[300px]" 
                  placeholder="Enter your email" 
                  type="email" 
                />
                <button className="px-10 py-5 rounded-2xl safety-gradient text-on-primary-container font-black text-lg hover:scale-105 transition-transform active:scale-95">
                  Join the Guard
                </button>
              </div>
              <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">Verified across 12 major metropolitan areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
