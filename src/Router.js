import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import SearchBox from './components/Nav/components/SearchBox/SearchBox';
// import SiteMap from './components/Nav/components/SiteMap/SiteMap';
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
      {/* <SearchBox /> */}
      {/* <SiteMap /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
