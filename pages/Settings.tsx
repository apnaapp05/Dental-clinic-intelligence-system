import React from 'react';
import { Page } from '../types';

interface SettingsProps {
  onLogout: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onLogout }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-white text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Card */}
      <div className="bg-surface-dark rounded-xl p-4 border border-white/10 flex items-center gap-4 mb-8">
        <img 
            src="https://picsum.photos/id/64/200/200" 
            alt="Profile" 
            className="h-16 w-16 rounded-full object-cover ring-2 ring-white/10"
        />
        <div>
            <p className="text-white font-bold text-lg">Alex Doe</p>
            <p className="text-primary text-sm">Inventory Agent</p>
        </div>
      </div>

      <h2 className="text-white font-bold text-lg mb-4 px-1">Application Settings</h2>
      
      <div className="bg-surface-dark rounded-xl border border-white/10 divide-y divide-white/10 overflow-hidden mb-8">
        {/* Notification Toggle */}
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">notifications</span>
                </div>
                <span className="text-white font-medium">Push Notifications</span>
            </div>
            <div className="relative inline-block w-12 h-7 cursor-pointer">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-full h-full bg-white/10 rounded-full peer-checked:bg-primary transition-colors"></div>
                <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
            </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between p-4">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">dark_mode</span>
                </div>
                <span className="text-white font-medium">Dark Mode</span>
            </div>
            <div className="relative inline-block w-12 h-7 cursor-pointer">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-full h-full bg-white/10 rounded-full peer-checked:bg-primary transition-colors"></div>
                <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
            </div>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between p-4">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">language</span>
                </div>
                <span className="text-white font-medium">Language</span>
            </div>
            <select className="bg-background-dark text-white border-none rounded-lg py-1 pl-3 pr-8 text-sm focus:ring-1 focus:ring-primary">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
            </select>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full h-12 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-dark transition-colors">
            Save Settings
        </button>
        <button 
            onClick={onLogout}
            className="w-full h-12 border border-red-500/50 text-red-500 font-bold rounded-xl hover:bg-red-500/10 transition-colors"
        >
            Logout
        </button>
      </div>
    </div>
  );
};
