import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

export const Reports: React.FC = () => {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
        <h1 className="text-white text-3xl font-bold mb-6">Reports</h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
                { label: 'Total Items', val: '12,405', change: '+5.2%', icon: 'inventory_2', color: 'text-green-400' },
                { label: 'Total Stock Value', val: '$8,450,230', change: '+1.8%', icon: 'attach_money', color: 'text-green-400' },
                { label: 'Total Cases', val: '8,123', change: '-0.5%', icon: 'view_in_ar', color: 'text-red-400' }
            ].map((stat, i) => (
                <div key={i} className="bg-surface-dark border border-white/10 rounded-xl p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                        <p className="text-white text-2xl font-bold truncate">{stat.val}</p>
                    </div>
                    <span className={`${stat.color} text-sm font-medium`}>{stat.change}</span>
                </div>
            ))}
        </div>

        {/* Chart Card */}
        <div className="bg-surface-dark border border-white/10 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-white font-bold text-lg">Inventory Levels</h2>
                    <p className="text-slate-400 text-sm">Stock Movement</p>
                </div>
                <div className="flex bg-background-dark rounded-lg p-1 gap-1">
                    <button className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold">Week</button>
                    <button className="px-3 py-1 rounded text-slate-400 hover:text-white text-xs font-bold transition-colors">Month</button>
                    <button className="px-3 py-1 rounded text-slate-400 hover:text-white text-xs font-bold transition-colors">Year</button>
                </div>
            </div>
            
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0df2cc" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#0df2cc" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#0df2cc" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorVal)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Floating Action Button (Simulated) */}
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 p-4 bg-gradient-to-t from-background-dark to-transparent pointer-events-none">
            <div className="max-w-4xl mx-auto pointer-events-auto">
                 <button 
                    onClick={() => setShowExportModal(true)}
                    className="w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                    Export Report
                </button>
            </div>
        </div>

        {/* Modal Overlay */}
        {showExportModal && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className="bg-surface-dark w-full max-w-md rounded-t-2xl sm:rounded-2xl border border-white/10 p-6 space-y-6 animate-in slide-in-from-bottom-10 duration-300">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-2 sm:hidden" />
                    <h3 className="text-white text-xl font-bold text-center">Select Export Format</h3>
                    
                    <div className="space-y-3">
                        <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left group">
                            <span className="material-symbols-outlined text-primary">description</span>
                            <span className="text-white font-medium group-hover:text-primary transition-colors">Export as CSV</span>
                        </button>
                         <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left group">
                            <span className="material-symbols-outlined text-primary">print</span>
                            <span className="text-white font-medium group-hover:text-primary transition-colors">Print Report</span>
                        </button>
                    </div>

                    <button 
                        onClick={() => setShowExportModal(false)}
                        className="w-full h-12 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )}
    </div>
  );
};
