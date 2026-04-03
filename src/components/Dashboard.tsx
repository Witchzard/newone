import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  BarChart3,
  Eye,
  Moon,
  Zap,
  Flame,
  Users,
  Map as MapIcon,
  Gift,
  ChevronRight
} from 'lucide-react';
import { MOCK_USER, RECENT_REPORTS, ACHIEVEMENTS } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Eye, Moon, Zap, Flame, Users, Map: MapIcon
};

export function Dashboard() {
  return (
    <div className="space-y-10">
      {/* User Status Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative overflow-hidden bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/10"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ShieldCheck size={240} className="text-primary" />
          </div>
          <div className="relative z-10">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Active Guardian</span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 mb-2 tracking-tight font-headline">Level {MOCK_USER.level} Vigilant Citizen</h1>
            <p className="text-slate-400 max-w-md">You are in the top 5% of safety reporters this month. Keep reporting to reach Level 43.</p>
          </div>
          <div className="mt-12 relative z-10">
            <div className="flex justify-between items-end mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-primary">{MOCK_USER.points.toLocaleString()}</span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Total Points</span>
              </div>
              <span className="text-slate-400 text-sm font-medium">Next Milestone: 15,000 Pts</span>
            </div>
            <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '83%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full safety-gradient rounded-full shadow-[0_0_15px_rgba(255,107,0,0.4)]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-container-high rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/10"
        >
          <div>
            <h3 className="text-xl font-bold mb-6 font-headline">Quick Stats</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                    <CheckCircle2 className="text-tertiary" size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Verified Reports</span>
                </div>
                <span className="text-lg font-bold">{MOCK_USER.reports}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center">
                    <Clock className="text-secondary-container" size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Avg. Response</span>
                </div>
                <span className="text-lg font-bold">4.2h</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                    <BarChart3 className="text-primary-container" size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">City Rank</span>
                </div>
                <span className="text-lg font-bold">#{MOCK_USER.rank}</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-surface-container-lowest py-3 rounded-xl border border-outline-variant/20 text-primary font-bold text-sm hover:bg-surface-container-highest transition-colors">
              View All Analytics
            </button>
          </div>
        </motion.div>
      </section>

      {/* Activity & Achievements */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight font-headline">Recent Activity</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold text-slate-400 hover:text-white transition-colors">Pending</button>
              <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-xs font-bold">All Reports</button>
            </div>
          </div>
          <div className="space-y-4">
            {RECENT_REPORTS.map((report, idx) => (
              <motion.div 
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-low p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5"
              >
                <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={report.image} alt={report.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white">{report.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">Reported {report.timestamp}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={cn("font-black text-sm", report.points > 0 ? "text-tertiary" : "text-slate-400")}>
                        {report.points > 0 ? `+${report.points} Pts` : '+0 Pts'}
                      </span>
                      {report.points > 0 && (
                        <span className="text-[10px] uppercase font-black text-tertiary/60 tracking-widest">Reward Paid</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                      report.status === 'Verified' ? "bg-tertiary/10 text-tertiary" : 
                      report.status === 'In Progress' ? "bg-secondary-container/10 text-secondary-container" : 
                      "bg-slate-800 text-slate-400"
                    )}>
                      {report.status}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapIcon size={12} />
                      {report.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight mb-6 font-headline">Achievements</h2>
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
            <div className="grid grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((achievement) => {
                const Icon = iconMap[achievement.icon] || ShieldCheck;
                return (
                  <div 
                    key={achievement.id}
                    className={cn(
                      "flex flex-col items-center text-center group cursor-help transition-all",
                      !achievement.unlocked && "opacity-40 grayscale"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-3 relative overflow-hidden shadow-lg",
                      achievement.unlocked ? "bg-gradient-to-br from-primary to-primary-container text-white" : "bg-surface-container-highest text-slate-400"
                    )}>
                      <Icon size={24} className={cn(achievement.unlocked && "z-10")} />
                      {achievement.unlocked && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
                    </div>
                    <span className="text-[10px] font-bold text-white leading-tight">{achievement.title}</span>
                    <span className="text-[8px] text-slate-500 mt-1 uppercase tracking-tighter">{achievement.description}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Upcoming Reward</h4>
              <div className="p-4 bg-surface-container-highest rounded-2xl border border-primary/20">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Gift className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-white">Premium Street Pass</p>
                    <p className="text-[10px] text-slate-500">Unlocked at Level 45</p>
                    <div className="w-full h-1.5 bg-surface-container-low rounded-full mt-2">
                      <div className="w-[60%] h-full bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
