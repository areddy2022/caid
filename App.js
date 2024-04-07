// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
}

export default App;