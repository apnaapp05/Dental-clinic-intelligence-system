export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  minLevel: number;
  supplier: string;
  unitCost: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface ActivityLog {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'add' | 'remove' | 'warning' | 'shipping';
  amount?: number;
}

export interface ConsumptionItem {
  id: string;
  name: string;
  sku: string;
  stockOnHand: number;
  quantityUsed: number;
}

export type Page = 
  | 'LOGIN'
  | 'DASHBOARD' 
  | 'STOCK_LIST' 
  | 'ITEM_DETAIL' 
  | 'ADD_ITEM' 
  | 'RECORD_CASE' 
  | 'AUTO_STOCK' 
  | 'LOW_STOCK' 
  | 'REPORTS' 
  | 'SETTINGS';
