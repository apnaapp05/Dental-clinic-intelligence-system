import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { StockList } from './pages/StockList';
import { ItemDetail } from './pages/ItemDetail';
import { RecordCase } from './pages/RecordCase';
import { StockAdjustment } from './pages/StockAdjustment';
import { LowStock } from './pages/LowStock';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Page } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('LOGIN');

  const navigate = (newPage: Page) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  // Render Login without layout
  if (page === 'LOGIN') {
    return <Login onLogin={() => navigate('DASHBOARD')} />;
  }

  return (
    <Layout currentPage={page} onNavigate={navigate}>
      {page === 'DASHBOARD' && <Dashboard onNavigate={navigate} />}
      {page === 'STOCK_LIST' && <StockList onNavigate={navigate} />}
      {page === 'ITEM_DETAIL' && <ItemDetail mode="EDIT" onBack={() => navigate('STOCK_LIST')} />}
      {page === 'ADD_ITEM' && <ItemDetail mode="ADD" onBack={() => navigate('STOCK_LIST')} />}
      {page === 'RECORD_CASE' && <RecordCase />}
      {page === 'AUTO_STOCK' && <StockAdjustment />}
      {page === 'LOW_STOCK' && <LowStock />}
      {page === 'REPORTS' && <Reports />}
      {page === 'SETTINGS' && <Settings onLogout={() => navigate('LOGIN')} />}
    </Layout>
  );
};

export default App;
