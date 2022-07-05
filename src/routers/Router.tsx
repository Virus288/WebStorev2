import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FourOhFour from '../components/FourOhFour';
import { AnimatePresence } from 'framer-motion';
import Index from '../components/home';

export const Routers: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </AnimatePresence>
  );
};
