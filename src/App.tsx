import './App.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import { Paths } from './constants/common.constants';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={Paths.main} element={<Main />} />
        <Route path={Paths.about} element={<AboutUs />} />
        <Route path={Paths.error} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
