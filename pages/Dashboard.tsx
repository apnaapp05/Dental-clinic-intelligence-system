import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Cell } from 'recharts';
import { ActivityLog, Page } from '../types';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 30 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 65 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 35 },
];

const activities: ActivityLog[] = [
  { id: '1', title: '50 units of Ergo-Chair Pro added', description: '2 minutes ago', timestamp: 'now', type: 'add' },
  { id: '2', title: 'Standing Desk v2 is low on stock', description: '1 hour ago', timestamp: '1h', type: 'warning' },
  { id: '3', title: '25 M2 SSDs shipped to Warehouse B', description: '3 hours ago', timestamp: '3h', type: 'shipping' },
  { id: '4', title: '10 units of Keyboard X removed', description: 'Yesterday', timestamp: '1d', type: 'remove' },
  { id: '5', title: '100 units of Webcam 4K received', description: 'Yesterday', timestamp: '1d', type: 'add' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <h1 className="text-white text-3xl font-bold leading-tight">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2 rounded-xl bg-surface-dark p-6 border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
          <div className="flex items-center justify-between">
            <p className="text-slate-400 font-medium">Total Items</p>
            <span className="material-symbols-outlined text-slate-500">inventory_2</span>
          </div>
          <p className="text-white text-3xl font-bold">1,482</p>
        </div>
        <div 
            onClick={() => onNavigate('LOW_STOCK')}
            className="flex flex-col gap-2 rounded-xl bg-surface-dark p-6 border border-white/10 hover:border-orange-400/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <p className="text-slate-400 font-medium group-hover:text-orange-400 transition-colors">Low Stock</p>
            <span className="material-symbols-outlined text-orange-400">warning</span>
          </div>
          <p className="text-orange-400 text-3xl font-bold">57</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-surface-dark p-6 border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
          <div className="flex items-center justify-between">
            <p className="text-slate-400 font-medium">Recent Cases</p>
            <span className="material-symbols-outlined text-slate-500">medical_services</span>
          </div>
          <p className="text-white text-3xl font-bold">12</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={() => onNavigate('STOCK_LIST')}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-background-dark font-bold hover:bg-primary-dark transition-colors"
        >
          <span className="material-symbols-outlined">list_alt</span>
          View Stock List
        </button>
        <button 
          onClick={() => onNavigate('LOW_STOCK')}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg h-12 px-6 bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
        >
          <span className="material-symbols-outlined">notifications_active</span>
          View Alerts
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <div className="lg:col-span-2 rounded-xl bg-surface-dark border border-white/10 p-6 flex flex-col">
          <div className="mb-6">
            <p className="text-white text-lg font-medium">Weekly Activity</p>
            <div className="flex items-baseline gap-3 mt-1">
              <p className="text-white text-3xl font-bold">2,104</p>
              <div className="flex items-center gap-1">
                <p className="text-slate-400">Last 7 Days</p>
                <p className="text-green-400 font-medium flex items-center text-sm">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                    15.3%
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12 }} 
                    dy={10}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index >= 4 ? '#0df2cc' : 'rgba(255,255,255,0.1)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="rounded-xl bg-surface-dark border border-white/10 p-6 flex flex-col h-full">
          <h3 className="text-white text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  activity.type === 'add' ? 'bg-green-500/10 text-green-400' :
                  activity.type === 'warning' ? 'bg-orange-500/10 text-orange-400' :
                  activity.type === 'shipping' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  <span className="material-symbols-outlined text-lg">
                    {activity.type === 'add' ? 'add' :
                     activity.type === 'warning' ? 'warning' :
                     activity.type === 'shipping' ? 'local_shipping' : 'remove'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{activity.title}</p>
                  <p className="text-slate-400 text-xs">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
