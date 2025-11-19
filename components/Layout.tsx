import React, { useState } from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; icon: string; page: Page }[] = [
    { label: 'Dashboard', icon: 'dashboard', page: 'DASHBOARD' },
    { label: 'Stock List', icon: 'inventory_2', page: 'STOCK_LIST' },
    { label: 'Record Case', icon: 'medical_services', page: 'RECORD_CASE' },
    { label: 'Auto Adjust', icon: 'sync_alt', page: 'AUTO_STOCK' },
    { label: 'Alerts', icon: 'warning', page: 'LOW_STOCK' },
    { label: 'Reports', icon: 'bar_chart', page: 'REPORTS' },
    { label: 'Settings', icon: 'settings', page: 'SETTINGS' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-dark border-r border-white/10 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:block ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
          <h1 className="text-white text-xl font-bold tracking-tight">Inventory Agent</h1>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPage === item.page 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-surface-dark">
            <div className="flex items-center gap-3">
                <img 
                    src="https://picsum.photos/id/64/100/100" 
                    alt="User" 
                    className="h-10 w-10 rounded-full object-cover border border-white/10"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">Alex Doe</p>
                    <p className="text-xs text-slate-400 truncate">Inventory Manager</p>
                </div>
                <button onClick={() => onNavigate('LOGIN')} className="text-slate-400 hover:text-white">
                    <span className="material-symbols-outlined">logout</span>
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-background-dark border-b border-white/10">
             <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">inventory_2</span>
                <span className="font-bold text-white">Inventory Agent</span>
            </div>
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-white rounded-lg hover:bg-white/10"
            >
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
           {children}
        </main>
      </div>
    </div>
  );
};
