import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import ListPage from './pages/ListPage';
import NotFoundPage from './pages/NotFoundPage';

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default useRoutes;
