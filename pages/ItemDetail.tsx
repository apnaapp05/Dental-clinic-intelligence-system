import React from 'react';
import { Page } from '../types';

interface ItemDetailProps {
  mode: 'ADD' | 'EDIT';
  onBack: () => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ mode, onBack }) => {
  const isEdit = mode === 'EDIT';

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-white text-2xl font-bold">
          {isEdit ? 'Vintage Leather Jacket' : 'Add New Item'}
        </h1>
      </div>

      <div className="bg-surface-dark rounded-xl border border-white/10 p-6 md:p-8 space-y-8">
        {/* Section 1 */}
        <div className="space-y-6">
          {isEdit && <h2 className="text-xs font-bold text-slate-500 tracking-wider">GENERAL INFORMATION</h2>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-slate-300 font-medium mb-2">Item Name</span>
              <input 
                className="form-input h-12 bg-background-dark border border-white/10 rounded-lg px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                defaultValue={isEdit ? "Vintage Leather Jacket" : ""}
                placeholder="Enter item name"
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-slate-300 font-medium mb-2">Item ID</span>
              <input 
                className="form-input h-12 bg-[#0b1a17] border border-white/10 rounded-lg px-4 text-slate-400 cursor-not-allowed"
                readOnly
                value={isEdit ? "SKU-VLJ-001" : "SKU-2024-7B3D9"}
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              <span className="text-slate-300 font-medium mb-2">Supplier</span>
              <input 
                className="form-input h-12 bg-background-dark border border-white/10 rounded-lg px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                defaultValue={isEdit ? "Retro Wears Inc." : ""}
                placeholder="Enter supplier name"
              />
            </label>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* Section 2 */}
        <div className="space-y-6">
           {isEdit && <h2 className="text-xs font-bold text-slate-500 tracking-wider">STOCK DETAILS</h2>}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <label className="flex flex-col">
              <span className="text-slate-300 font-medium mb-2">{isEdit ? "Quantity" : "Quantity on Hand"}</span>
              <input 
                type="number"
                className="form-input h-12 bg-background-dark border border-white/10 rounded-lg px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                defaultValue={isEdit ? "25" : "0"}
              />
            </label>
            
             <label className="flex flex-col">
              <span className="text-slate-300 font-medium mb-2">{isEdit ? "Minimum Level" : "Minimum Stock Level"}</span>
              <input 
                type="number"
                className="form-input h-12 bg-background-dark border border-white/10 rounded-lg px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                defaultValue={isEdit ? "10" : "0"}
              />
            </label>

             <label className="flex flex-col">
              <span className="text-slate-300 font-medium mb-2">{isEdit ? "Unit Cost" : "Cost per Unit"}</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-400">$</span>
                </div>
                <input 
                    className="form-input h-12 w-full bg-background-dark border border-white/10 rounded-lg pl-8 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    defaultValue={isEdit ? "120.50" : "0.00"}
                />
              </div>
            </label>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 flex flex-col sm:flex-row justify-end gap-4">
             <button 
                onClick={onBack}
                className="h-12 px-6 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
            >
                Cancel
            </button>
             {isEdit && (
                <button className="h-12 px-6 rounded-lg bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20 transition-colors border border-transparent">
                    Delete Item
                </button>
            )}
            <button className="h-12 px-6 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                {isEdit ? 'Save Changes' : 'Save Item'}
            </button>
        </div>
      </div>
    </div>
  );
};
