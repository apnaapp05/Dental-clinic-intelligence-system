import React, { useState } from 'react';

interface ConsumptionItem {
    id: string;
    name: string;
    sku: string;
    stock: number;
    used: number;
}

export const RecordCase: React.FC = () => {
    const [items, setItems] = useState<ConsumptionItem[]>([
        { id: '1', name: 'Composite Resin A2', sku: 'CR-3M-A2', stock: 42, used: 0 },
        { id: '2', name: 'Latex Gloves (Medium)', sku: 'GLV-L-M-100', stock: 250, used: 0 },
        { id: '3', name: 'Anesthetic Cartridge', sku: 'ANES-LIDO-10', stock: 15, used: 0 },
        { id: '4', name: 'Dental Dam Clamp', sku: 'DDC-W2', stock: 88, used: 0 },
    ]);

    const updateUsage = (id: string, delta: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newVal = Math.max(0, item.used + delta);
                return { ...item, used: newVal };
            }
            return item;
        }));
    };

    const totalItems = items.reduce((acc, item) => acc + item.used, 0);

    return (
        <div className="w-full max-w-4xl mx-auto pb-20">
            <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                <h1 className="text-white text-2xl font-bold">Record Case Consumption</h1>
            </div>

            {/* Top Form */}
            <div className="mb-8">
                <label className="block mb-2 text-white font-medium">Case Name / Patient ID</label>
                <input 
                    className="w-full h-14 bg-surface-dark border border-white/10 rounded-lg px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder-slate-500"
                    placeholder="Enter case name or patient ID"
                />
            </div>

            {/* Info Banner */}
            <div className="flex gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 mb-8">
                <span className="material-symbols-outlined text-primary">info</span>
                <div>
                    <h3 className="text-white font-bold">Automatic Stock Deduction</h3>
                    <p className="text-slate-300 text-sm mt-1">Submitting this form will automatically deduct the "Quantity Used" from the total "Stock on Hand" for each item listed below.</p>
                </div>
            </div>

            {/* Items Table */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Consumed Items</h2>
                </div>
                
                {/* Search within table context */}
                <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400">search</span>
                    </div>
                    <input 
                        className="w-full h-12 pl-11 pr-4 bg-surface-dark border-none rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50"
                        placeholder="Search for an item to add..."
                    />
                </div>

                <div className="bg-surface-dark rounded-xl border border-white/10 overflow-hidden mt-4">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-xs uppercase text-slate-400">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Item Name</th>
                                <th className="px-6 py-4 font-semibold">SKU/ID</th>
                                <th className="px-6 py-4 font-semibold text-center">Stock on Hand</th>
                                <th className="px-6 py-4 font-semibold text-center">Quantity Used</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-sm">
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-white font-medium">{item.name}</td>
                                    <td className="px-6 py-4 text-slate-400 font-mono">{item.sku}</td>
                                    <td className="px-6 py-4 text-center text-slate-300">{item.stock}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button 
                                                onClick={() => updateUsage(item.id, -1)}
                                                className="h-8 w-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                            >
                                                -
                                            </button>
                                            <div className="h-8 w-12 bg-background-dark border border-white/10 rounded flex items-center justify-center text-white font-medium">
                                                {item.used}
                                            </div>
                                            <button 
                                                onClick={() => updateUsage(item.id, 1)}
                                                className="h-8 w-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 flex justify-end">
                <button 
                    disabled={totalItems === 0}
                    className={`flex items-center gap-2 px-8 h-14 rounded-xl font-bold text-background-dark transition-all ${
                        totalItems > 0 
                        ? 'bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20' 
                        : 'bg-primary/40 cursor-not-allowed text-black/40'
                    }`}
                >
                    Record Case
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}