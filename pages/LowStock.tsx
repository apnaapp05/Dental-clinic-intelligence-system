import React from 'react';

export const LowStock: React.FC = () => {
  const alerts = [
    { name: 'Ergonomic Wireless Mouse', qty: 8, min: 10 },
    { name: 'Mechanical Gaming Keyboard', qty: 3, min: 5 },
    { name: '27-inch 4K UHD Monitor', qty: 18, min: 20 },
    { name: 'USB-C Docking Station', qty: 23, min: 25 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative mb-8">
        <h1 className="text-white text-3xl font-bold">Low Stock Alerts</h1>
        <div className="absolute -bottom-2 left-0 w-20 h-1.5 bg-red-500 rounded-full"></div>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-lg">
        <div className="relative h-12 w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            className="w-full h-full bg-surface-dark border-none rounded-lg pl-11 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50"
            placeholder="Search by item name or SKU..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-dark rounded-xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-slate-400">
            <div className="col-span-6 md:col-span-5">ITEM NAME</div>
            <div className="col-span-2 text-right hidden md:block">QUANTITY</div>
            <div className="col-span-2 text-right hidden md:block">MIN. LEVEL</div>
            <div className="col-span-6 md:col-span-3 text-right">ACTION</div>
        </div>
        
        <div className="divide-y divide-white/10">
            {alerts.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors">
                     <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                        <span className="material-symbols-outlined text-amber-400 text-2xl">warning_amber</span>
                        <span className="text-white font-medium truncate">{item.name}</span>
                     </div>
                     <div className="col-span-2 text-right hidden md:block">
                        <span className="text-red-400 font-bold">{item.qty}</span>
                     </div>
                     <div className="col-span-2 text-right hidden md:block">
                        <span className="text-slate-400">{item.min}</span>
                     </div>
                     <div className="col-span-6 md:col-span-3 flex justify-end">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-red-500/20">
                            Reorder
                        </button>
                     </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
