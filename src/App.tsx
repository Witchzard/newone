import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Sidebar, TopNav } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';
import { ReportViolation } from './components/ReportViolation';
import { Leaderboard } from './components/Leaderboard';
import { AdminPanel } from './components/AdminPanel';
import { cn } from './lib/utils';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30 selection:text-primary">
      <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
      
      {!isLandingPage && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      )}

      <main className={cn(
        "transition-all duration-300 pt-20",
        !isLandingPage ? "lg:pl-64 p-6 md:p-10" : ""
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report" element={<ReportViolation />} />
              <Route path="/reports" element={<Dashboard />} /> {/* Placeholder */}
              <Route path="/map" element={<ReportViolation />} /> {/* Placeholder */}
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer for Landing Page */}
      {isLandingPage && (
        <footer className="bg-surface-container-lowest py-12 border-t border-outline-variant/10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black italic text-primary-container font-headline tracking-tight">
              Street Sense
            </div>
            <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-slate-600 text-xs font-medium">
              © 2024 Street Sense Protocol. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
