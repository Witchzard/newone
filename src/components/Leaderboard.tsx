import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  ShoppingBag, 
  Filter, 
  Lock, 
  ShoppingCart,
  Heart,
  Award,
  ChevronDown,
  Zap
} from 'lucide-react';
import { MOCK_USER, REWARDS } from '../constants';
import { cn } from '../lib/utils';

export function Leaderboard() {
  const topGuardians = [
    { rank: 1, name: 'Alex "The Hawk" M.', title: 'Top Contributor', level: 85, reports: 1242, points: 45820, avatar: 'https://picsum.photos/seed/alex/100/100' },
    { rank: 2, name: 'Sarah Vigilant', title: 'Safety Specialist', level: 79, reports: 984, points: 38150, avatar: 'https://picsum.photos/seed/sarah/100/100' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <header className="relative overflow-hidden rounded-3xl bg-surface-container-low p-8 md:p-12 border border-outline-variant/10">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Trophy size={320} className="text-primary" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter font-headline">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">Champions</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed">
            Recognizing the guardians of our streets. Your vigilance keeps the community safe and earns you real-world rewards.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3 font-headline">
              <Trophy className="text-secondary-container" size={24} />
              Top 10 Guardians
            </h2>
            <div className="flex gap-2">
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-slate-400">Weekly</span>
              <span className="bg-primary-container/20 px-3 py-1 rounded-full text-xs font-bold text-primary">All Time</span>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-high text-xs font-bold uppercase tracking-widest text-slate-500">
              <div className="col-span-1">Rank</div>
              <div className="col-span-5">Guardian</div>
              <div className="col-span-2 text-center">Level</div>
              <div className="col-span-2 text-center">Reports</div>
              <div className="col-span-2 text-right">Points</div>
            </div>
            <div className="divide-y divide-slate-800/30">
              {topGuardians.map((g) => (
                <div key={g.rank} className="grid grid-cols-12 items-center gap-4 px-6 py-5 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="col-span-1 flex justify-center">
                    {g.rank === 1 ? <Trophy className="text-secondary-container" size={24} /> : <span className="font-black text-xl text-slate-500">{g.rank.toString().padStart(2, '0')}</span>}
                  </div>
                  <div className="col-span-5 flex items-center gap-4">
                    <img src={g.avatar} alt={g.name} className="w-10 h-10 rounded-full border-2 border-secondary-container/30" />
                    <div>
                      <p className="font-bold text-white">{g.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{g.title}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="bg-slate-800 text-secondary-container px-2 py-0.5 rounded text-xs font-bold">Lvl {g.level}</span>
                  </div>
                  <div className="col-span-2 text-center font-medium">{g.reports}</div>
                  <div className="col-span-2 text-right font-black text-secondary-container">{g.points.toLocaleString()}</div>
                </div>
              ))}
              
              <div className="px-6 py-3 bg-primary-container text-on-primary-container flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-tighter">Your Current Position</span>
                <ChevronDown size={16} />
              </div>

              <div className="grid grid-cols-12 items-center gap-4 px-6 py-5 bg-primary/10 border-l-4 border-primary">
                <div className="col-span-1 text-center font-black text-2xl text-primary">{MOCK_USER.rank}</div>
                <div className="col-span-5 flex items-center gap-4">
                  <img src={MOCK_USER.avatar} alt="You" className="w-10 h-10 rounded-full border-2 border-primary" />
                  <div>
                    <p className="font-bold text-white">You ({MOCK_USER.handle})</p>
                    <p className="text-xs text-slate-500 font-medium">Rising Star</p>
                  </div>
                </div>
                <div className="col-span-2 text-center">
                  <span className="bg-primary text-on-primary px-2 py-0.5 rounded text-xs font-bold">Lvl {MOCK_USER.level}</span>
                </div>
                <div className="col-span-2 text-center font-medium">{MOCK_USER.reports}</div>
                <div className="col-span-2 text-right font-black text-primary">{MOCK_USER.points.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <div className="bg-surface-container-high rounded-3xl p-8 border-t-4 border-tertiary">
            <h3 className="text-lg font-bold mb-6 font-headline">Your Performance</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Points</p>
                  <p className="text-3xl font-black text-white">{MOCK_USER.points.toLocaleString()}</p>
                </div>
                <span className="bg-tertiary/20 text-tertiary text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <TrendingUp size={14} /> 12%
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full w-[65%]" />
              </div>
              <p className="text-xs text-slate-400 font-medium">Next Milestone: 15,000 pts to <span className="text-tertiary font-bold">Guardian Gold</span></p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container px-4 py-3 rounded-2xl text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Reports</p>
                  <p className="text-xl font-bold">{MOCK_USER.reports}</p>
                </div>
                <div className="bg-surface-container px-4 py-3 rounded-2xl text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Streak</p>
                  <p className="text-xl font-bold">{MOCK_USER.streak} Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-container to-orange-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="font-black text-white text-xl leading-tight font-headline">Elite Guardian Challenge</h3>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">Report 10 school zone violations this week to earn a 2x point multiplier.</p>
            <button className="w-full bg-white text-orange-600 font-black py-3 rounded-xl hover:bg-orange-50 transition-all active:scale-95">Accept Challenge</button>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-outline-variant/10 pb-4">
          <div>
            <h2 className="text-3xl font-black font-headline">Rewards Store</h2>
            <p className="text-slate-500 font-medium">Convert your hard-earned points into real impact.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-high p-2 rounded-xl hover:text-primary transition-colors">
              <Filter size={20} />
            </button>
            <button className="bg-surface-container-high px-4 py-2 rounded-xl font-bold text-sm">Sort: Featured</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REWARDS.map((reward) => (
            <div key={reward.id} className={cn(
              "bg-surface-container-low rounded-3xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 border border-outline-variant/5",
              reward.outOfStock && "opacity-60 grayscale cursor-not-allowed"
            )}>
              <div className="h-48 relative overflow-hidden">
                <img src={reward.image} alt={reward.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
                {reward.exclusive && <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-black">EXCLUSIVE</div>}
                {reward.giveBack && <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-black">GIVE BACK</div>}
                {reward.outOfStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-black tracking-widest text-2xl rotate-[-15deg]">OUT OF STOCK</span>
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{reward.title}</h3>
                    <p className="text-sm text-slate-500">{reward.provider}</p>
                  </div>
                  <span className={cn("font-black", reward.giveBack ? "text-tertiary" : "text-primary")}>
                    {reward.points.toLocaleString()} <span className="text-[10px] uppercase">pts</span>
                  </span>
                </div>
                <p className="text-sm text-slate-400 line-clamp-2">{reward.description}</p>
                <button 
                  disabled={reward.outOfStock}
                  className={cn(
                    "w-full font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all",
                    reward.outOfStock 
                      ? "bg-slate-700 text-slate-500" 
                      : reward.giveBack 
                        ? "bg-tertiary-container text-white hover:brightness-110" 
                        : "bg-primary-container text-on-primary-container hover:brightness-110"
                  )}
                >
                  {reward.outOfStock ? <Lock size={18} /> : reward.giveBack ? <Heart size={18} /> : <ShoppingCart size={18} />}
                  {reward.outOfStock ? 'Unavailable' : 'Redeem Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
