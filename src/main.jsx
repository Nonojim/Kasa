import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './AppRouter';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Header />
      <AppRouter/>
      <Footer />
  </React.StrictMode>,
)