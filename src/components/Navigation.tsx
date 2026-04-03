import React from 'react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  ShieldAlert, 
  Trophy, 
  Settings, 
  ShieldCheck, 
  HelpCircle,
  Bell,
  Search,
  Plus,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { MOCK_USER } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Map View', icon: MapIcon, path: '/map' },
    { name: 'Safety Reports', icon: ShieldAlert, path: '/reports' },
    { name: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 z-50 bg-surface border-r border-outline-variant/10 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-8 pt-24">
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/5">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shadow-lg shadow-primary-container/20">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Command Center</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Level {MOCK_USER.level} Guardian</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-1 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={cn(
                    "px-4 py-3 flex items-center gap-3 transition-all duration-300 rounded-xl font-medium text-sm",
                    isActive 
                      ? "bg-primary-container/10 text-primary-container border-r-4 border-primary-container" 
                      : "text-slate-500 hover:bg-surface-container-high hover:text-slate-100"
                  )}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto px-4 flex flex-col gap-1">
            <Link to="/admin" className="text-slate-500 px-4 py-2 hover:bg-surface-container-high flex items-center gap-3 transition-all rounded-xl text-xs font-medium">
              <ShieldCheck size={16} />
              Admin Panel
            </Link>
            <Link to="/help" className="text-slate-500 px-4 py-2 hover:bg-surface-container-high flex items-center gap-3 transition-all rounded-xl text-xs font-medium">
              <HelpCircle size={16} />
              Help
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 w-full z-[60] bg-surface/80 backdrop-blur-xl border-b border-outline-variant/5">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-[1920px] mx-auto">
        <div className="flex items-center gap-8">
          <button onClick={onMenuClick} className="lg:hidden text-slate-400 hover:text-white">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-black italic text-primary-container font-headline tracking-tight">
            Street Sense
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className={cn("font-headline font-bold tracking-tight text-sm", location.pathname === '/' ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-slate-400 hover:text-slate-100")}>Home</Link>
            <Link to="/dashboard" className={cn("font-headline font-bold tracking-tight text-sm", location.pathname === '/dashboard' ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-slate-400 hover:text-slate-100")}>Dashboard</Link>
            <Link to="/map" className={cn("font-headline font-bold tracking-tight text-sm", location.pathname === '/map' ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-slate-400 hover:text-slate-100")}>Map View</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-surface-container-low px-4 py-2 rounded-full items-center gap-2 border border-outline-variant/10">
            <Search size={16} className="text-slate-400" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-64 placeholder:text-slate-500" 
              placeholder="Search safety database..." 
              type="text"
            />
          </div>
          <Link to="/report" className="safety-gradient text-on-primary-container px-5 py-2 rounded-xl font-bold text-sm hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
            <Plus size={18} />
            Report Violation
          </Link>
          <div className="flex items-center gap-3 ml-2 border-l border-outline-variant/20 pl-4">
            <button className="text-slate-400 hover:text-primary transition-colors">
              <Bell size={20} />
            </button>
            <img 
              alt="User profile" 
              className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" 
              src={MOCK_USER.avatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
