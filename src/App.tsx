import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPassPage from './pages/ForgotPassPage';

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <div className='content'>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/forgot' element={<ForgotPassPage/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
