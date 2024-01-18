import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './AppRouter';
import './utils/style/GlobalStyle.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </React.StrictMode>
);
