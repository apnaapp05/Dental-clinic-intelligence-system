import React from 'react';

export const StockAdjustment: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-2">
                <h1 className="text-white text-2xl font-bold">Automatic Stock Adjustment</h1>
            </div>

            {/* How it works card */}
            <div className="bg-slate-100 dark:bg-surface-dark border border-white/10 rounded-xl p-6">
                <h2 className="text-slate-900 dark:text-primary text-xl font-bold mb-2">How It Works</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">The system automatically deducts items from inventory when they are scanned out for a case. A log of each adjustment is created for tracking purposes.</p>
                
                <div className="relative flex justify-between text-center">
                    {/* Connecting Line */}
                    <div className="absolute top-4 left-10 right-10 h-0.5 bg-slate-300 dark:bg-slate-700 -z-10"></div>

                    <div className="flex flex-col items-center gap-3 bg-surface-dark z-10 px-2">
                        <div className="h-10 w-10 rounded-full bg-background-dark border-2 border-primary text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">barcode_scanner</span>
                        </div>
                        <span className="text-white font-medium text-sm">Scan Item</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-surface-dark z-10 px-2">
                         <div className="h-10 w-10 rounded-full bg-background-dark border-2 border-slate-600 text-slate-400 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">database</span>
                        </div>
                        <span className="text-white font-medium text-sm">System Deducts</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-surface-dark z-10 px-2">
                         <div className="h-10 w-10 rounded-full bg-background-dark border-2 border-slate-600 text-slate-400 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">file_download</span>
                        </div>
                        <span className="text-white font-medium text-sm">Log Created</span>
                    </div>
                </div>
            </div>

            {/* Activity List */}
            <div>
                <h3 className="text-primary font-bold text-lg mb-4 px-1">Recent Activity</h3>
                <div className="bg-surface-dark rounded-xl border border-white/10 divide-y divide-white/10">
                    {[
                        { title: 'Case #CN2024-051', sub: 'John Doe - May 21, 2024', count: -5 },
                        { title: 'Project Phoenix', sub: 'Jane Smith - May 20, 2024', count: -12 },
                        { title: 'Case #AB2024-048', sub: 'Alex Johnson - May 19, 2024', count: -2 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">{item.title}</p>
                                    <p className="text-slate-400 text-sm">{item.sub}</p>
                                </div>
                            </div>
                            <span className="text-red-400 font-medium">{item.count} items</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expandable History */}
            <div className="pt-4">
                <button className="w-full flex items-center justify-between p-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors group">
                    <span className="font-bold">View Full History</span>
                    <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
                </button>
            </div>
        </div>
    );
};
