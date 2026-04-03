import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Minus, 
  Navigation, 
  MapPin, 
  ShieldCheck, 
  Car, 
  Zap, 
  AlertTriangle, 
  MoreHorizontal,
  Camera,
  Send,
  Award
} from 'lucide-react';
import { cn } from '../lib/utils';

export function ReportViolation() {
  const [violationType, setViolationType] = useState('Illegal Parking');
  
  const types = [
    { name: 'Illegal Parking', icon: Car },
    { name: 'Speeding', icon: Zap },
    { name: 'Signal Jump', icon: AlertTriangle },
    { name: 'Other', icon: MoreHorizontal },
  ];

  return (
    <div className="flex flex-1 h-[calc(100vh-72px)] overflow-hidden -m-6 md:-m-10">
      {/* Map View */}
      <section className="hidden lg:block w-[60%] h-full relative bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Map" 
            className="w-full h-full object-cover opacity-60 grayscale" 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
          />
        </div>
        
        <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
          <div className="glass-panel p-2 rounded-2xl flex flex-col gap-2 shadow-xl border border-outline-variant/10">
            <button className="p-3 bg-surface-container-high hover:bg-primary/20 text-white rounded-xl transition-all active:scale-95">
              <Plus size={20} />
            </button>
            <button className="p-3 bg-surface-container-high hover:bg-primary/20 text-white rounded-xl transition-all active:scale-95">
              <Minus size={20} />
            </button>
          </div>
          <button className="glass-panel p-3 rounded-2xl shadow-xl text-primary flex items-center justify-center active:scale-95 border border-outline-variant/10">
            <Navigation size={20} fill="currentColor" />
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-headline font-bold text-xs shadow-2xl mb-2 flex items-center gap-2 whitespace-nowrap"
            >
              <MapPin size={14} fill="currentColor" />
              742 Evergreen Terrace
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-10 h-10 bg-primary-container rounded-full border-4 border-white flex items-center justify-center shadow-2xl"
            >
              <Plus size={24} className="text-white" strokeWidth={3} />
            </motion.div>
            <div className="w-4 h-4 bg-primary-container/30 rounded-full blur-sm mt-1" />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
          <div className="glass-panel p-4 rounded-2xl max-w-xs pointer-events-auto border border-outline-variant/10">
            <h3 className="font-headline font-bold text-primary text-sm uppercase tracking-widest mb-1">Precise Location</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Drag the map to position the pin exactly where the violation is occurring. Accuracy increases reward potential.</p>
          </div>
          <div className="glass-panel p-4 rounded-2xl pointer-events-auto flex gap-4 items-center border border-outline-variant/10">
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Civic Trust Score</p>
              <p className="text-xl font-headline font-black text-tertiary">98.4</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-tertiary/20 flex items-center justify-center relative">
              <ShieldCheck className="text-tertiary" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Form Sidebar */}
      <aside className="w-full lg:w-[40%] bg-surface-container-low h-full flex flex-col border-l border-outline-variant/10 shadow-2xl z-30">
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-primary font-headline font-extrabold text-xs uppercase tracking-[0.2em]">Step 1 of 2</span>
            </div>
            <h1 className="text-4xl font-headline font-extrabold tracking-tight text-white mb-2">Report Violation</h1>
            <p className="text-slate-400">Identify the incident with precision to alert the local authorities.</p>
          </header>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Type of Violation</label>
              <div className="grid grid-cols-2 gap-3">
                {types.map((type) => {
                  const Icon = type.icon;
                  const isActive = violationType === type.name;
                  return (
                    <button 
                      key={type.name}
                      onClick={() => setViolationType(type.name)}
                      className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-2xl transition-all border-2",
                        isActive 
                          ? "bg-surface-container-highest border-primary ring-2 ring-primary/20" 
                          : "bg-surface-container-high border-transparent hover:bg-surface-container-highest"
                      )}
                    >
                      <Icon className={cn("mb-2", isActive ? "text-primary" : "text-slate-400")} size={28} />
                      <span className={cn("text-xs font-bold uppercase", isActive ? "text-white" : "text-slate-400")}>{type.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Occurrence Date</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-2xl p-4 text-on-surface focus:ring-2 focus:ring-primary/50 font-medium" 
                  type="date" 
                  defaultValue="2024-05-24" 
                />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Time</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-2xl p-4 text-on-surface focus:ring-2 focus:ring-primary/50 font-medium" 
                  type="time" 
                  defaultValue="14:30" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Evidence Upload</label>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-3xl p-10 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container/40 transition-all group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="text-primary" size={28} />
                </div>
                <p className="text-sm font-bold text-white mb-1">Click to capture or drag photo</p>
                <p className="text-xs text-slate-500">Max size 25MB • JPG, PNG, MP4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-surface-container border-t border-outline-variant/10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Potential Bounty</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-headline font-black text-secondary-container tracking-tighter">$25.00</span>
                <span className="text-xs text-secondary-container/60 font-bold uppercase">Street Cred</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-secondary-container/10 flex items-center justify-center">
              <Award className="text-secondary-container" size={24} />
            </div>
          </div>
          <button className="w-full py-5 px-8 rounded-2xl safety-gradient text-on-primary-container font-headline font-black text-lg uppercase tracking-widest shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
            Report Now
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </aside>
    </div>
  );
}
