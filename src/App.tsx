import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className='content'>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
