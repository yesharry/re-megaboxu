import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MovieList from './pages/MovieList/MovieList';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
