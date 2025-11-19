import React from 'react';
import { Page } from '../types';

interface StockListProps {
  onNavigate: (page: Page) => void;
}

const items = [
  { id: '#A45-1029B', name: 'Printer Paper (A4, 500 Sheets)', qty: 12, min: 20, supplier: 'Office Supplies Inc.', status: 'Low' },
  { id: '#C91-4833G', name: 'Black Ballpoint Pens (Box of 50)', qty: 150, min: 50, supplier: 'Office Supplies Inc.', status: 'OK' },
  { id: '#F22-0012A', name: 'HDMI Cables (2m)', qty: 45, min: 25, supplier: 'Global IT', status: 'OK' },
  { id: '#B09-3477C', name: 'Hand Sanitizer (500ml)', qty: 8, min: 10, supplier: 'Clean Co.', status: 'Critical' },
  { id: '#D15-1155E', name: 'Wireless Keyboard & Mouse', qty: 32, min: 15, supplier: 'Global IT', status: 'OK' },
];

export const StockList: React.FC<StockListProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-white text-3xl font-bold">Consumable Stock List</h1>
        <button 
          onClick={() => onNavigate('ADD_ITEM')}
          className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-background-dark font-bold hover:bg-primary-dark transition-colors"
        >
          <span className="material-symbols-outlined">add</span>
          Add New Item
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            className="w-full h-12 pl-11 pr-4 bg-surface-dark border-none rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50"
            placeholder="Search by name or ID..."
          />
        </div>
        <div className="flex gap-4">
          <select className="h-12 px-4 bg-surface-dark text-white rounded-lg border-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[160px]">
            <option>All Suppliers</option>
            <option>Office Supplies Inc.</option>
            <option>Global IT</option>
          </select>
          <select className="h-12 px-4 bg-surface-dark text-white rounded-lg border-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[160px]">
            <option>All Statuses</option>
            <option>In Stock</option>
            <option>Low Stock</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-dark rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Item ID</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold text-right">Quantity</th>
                <th className="p-4 font-semibold text-right">Min Level</th>
                <th className="p-4 font-semibold">Supplier</th>
                <th className="p-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-slate-400 font-mono text-sm">{item.id}</td>
                  <td className="p-4 font-medium text-white">{item.name}</td>
                  <td className={`p-4 text-right font-bold ${
                    item.status === 'Critical' ? 'text-red-400' : 
                    item.status === 'Low' ? 'text-orange-400' : 'text-slate-300'
                  }`}>
                    {item.qty}
                  </td>
                  <td className="p-4 text-right text-slate-400">{item.min}</td>
                  <td className="p-4 text-slate-400">{item.supplier}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => onNavigate('ITEM_DETAIL')}
                        className="p-2 hover:bg-white/10 rounded-md text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">visibility</span>
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-md text-slate-300 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-slate-400 text-sm">
        <p>Showing <span className="text-white font-semibold">1</span> to <span className="text-white font-semibold">5</span> of <span className="text-white font-semibold">42</span> results</p>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button className="h-9 w-9 flex items-center justify-center rounded hover:bg-white/10 disabled:opacity-50" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded bg-primary/20 text-primary font-bold">1</button>
          <button className="h-9 w-9 flex items-center justify-center rounded hover:bg-white/10">2</button>
          <button className="h-9 w-9 flex items-center justify-center rounded hover:bg-white/10">3</button>
          <span>...</span>
          <button className="h-9 w-9 flex items-center justify-center rounded hover:bg-white/10">9</button>
           <button className="h-9 w-9 flex items-center justify-center rounded hover:bg-white/10">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};
