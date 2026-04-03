import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Bell, 
  ShieldAlert, 
  History, 
  Share2, 
  CheckCircle2, 
  XCircle, 
  UserSearch,
  MapPin,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { ADMIN_QUEUE } from '../constants';
import { cn } from '../lib/utils';

export function AdminPanel() {
  const activeCase = ADMIN_QUEUE[0];

  return (
    <div className="space-y-8">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Reports Per Day</p>
          <h3 className="text-3xl font-headline font-extrabold text-white">1,284 <span className="text-tertiary text-sm font-normal tracking-normal">+12% vs last week</span></h3>
          <div className="mt-6 h-24 flex items-end gap-1">
            {[40, 60, 50, 100, 80, 45, 70].map((h, i) => (
              <div 
                key={i} 
                className={cn("flex-1 rounded-t-sm transition-all duration-500", i === 3 ? "bg-primary-container" : "bg-slate-800")} 
                style={{ height: `${h}%` }} 
              />
            ))}
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Total Payouts</p>
            <h3 className="text-3xl font-headline font-extrabold text-secondary-container">$42,900</h3>
          </div>
          <div className="pt-4 flex items-center gap-2 text-tertiary text-sm">
            <TrendingUp size={14} />
            <span>Daily goal 88% reached</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Primary Violation</p>
            <h3 className="text-3xl font-headline font-extrabold text-error">Double Park</h3>
          </div>
          <p className="text-xs text-slate-400">42% of total city-wide reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Queue */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-headline font-bold text-lg text-white">Verification Queue</h2>
            <span className="bg-surface-container-highest text-slate-300 text-[10px] font-bold px-2 py-1 rounded">24 PENDING</span>
          </div>
          <div className="space-y-3">
            {ADMIN_QUEUE.map((item, idx) => (
              <div 
                key={item.id}
                className={cn(
                  "p-4 rounded-2xl cursor-pointer transition-all border-l-4",
                  idx === 0 ? "bg-surface-container-high border-error shadow-xl" : "bg-surface-container-low border-transparent hover:bg-surface-container-high"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={cn(
                    "text-[10px] font-black px-2 py-0.5 rounded uppercase",
                    item.priority === 'High' ? "bg-error-container text-on-error-container" : 
                    item.priority === 'AI Flagged' ? "bg-secondary-container/20 text-secondary-container" : 
                    "bg-slate-700 text-slate-300"
                  )}>
                    {item.priority}
                  </span>
                  <span className="text-slate-500 text-[10px]">{item.timestamp}</span>
                </div>
                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{item.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Detail */}
        <div className="lg:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden flex flex-col min-h-[600px] border border-outline-variant/10">
          <div className="p-8 border-b border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-headline font-extrabold text-2xl text-white tracking-tight">Case #SS-8921-A</h2>
              <p className="text-slate-500 text-sm mt-1">Submitted by <span className="text-primary">Guardian_99</span> • Trusted Score 98%</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-highest text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-surface-bright transition-colors">
                <History size={14} /> History
              </button>
              <button className="bg-surface-container-highest text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-surface-bright transition-colors">
                <Share2 size={14} /> Export
              </button>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Evidence Photos (4)</p>
              <div className="aspect-video rounded-2xl overflow-hidden bg-surface-container-highest relative group border border-outline-variant/10">
                <img src={activeCase.image} alt="Evidence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium bg-black/40 backdrop-blur px-2 py-1 rounded">Primary View • 14:02 PM</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2].map(i => (
                  <div key={i} className="aspect-square rounded-xl bg-surface-container-highest overflow-hidden cursor-pointer border border-outline-variant/10">
                    <img src={`https://picsum.photos/seed/ev${i}/200/200`} alt="Detail" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="relative aspect-square rounded-xl bg-surface-container-highest flex items-center justify-center cursor-pointer hover:bg-surface-bright transition-colors border border-outline-variant/10">
                  <span className="text-xs font-bold text-slate-400">+1 More</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Report Details</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error flex-shrink-0">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Violation</p>
                    <p className="text-white font-semibold">{activeCase.title}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Location</p>
                    <p className="text-white font-semibold">{activeCase.location}</p>
                    <div className="mt-2 h-24 rounded-xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-outline-variant/10">
                      <img src="https://picsum.photos/seed/map/400/200" alt="Map" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Time Observed</p>
                    <p className="text-white font-semibold">Oct 24, 2024 • 14:02:44</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/10">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-3">Admin Actions</p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-tertiary-container text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
                    <CheckCircle2 size={18} /> APPROVE
                  </button>
                  <button className="bg-error-container text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
                    <XCircle size={18} /> REJECT
                  </button>
                  <button className="col-span-2 bg-surface-container-highest text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-surface-bright transition-all">
                    <UserSearch size={18} /> FLAG FOR HUMAN REVIEW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
