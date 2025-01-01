import React from 'react';
import './home.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function home() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        {}
      </main>
      <Footer />
    </div>
  );
}

export default home;
