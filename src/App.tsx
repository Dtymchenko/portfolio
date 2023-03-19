import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className='content'>Here will be content</div>
      <Footer/>
    </div>
  );
}

export default App;
