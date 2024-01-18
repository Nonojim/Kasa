import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Logements from './pages/Logements/Logements';
import Error from './pages/Error/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/Logements/:id" element={<Logements />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
