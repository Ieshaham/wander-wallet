import './App.css';
import React, { useState } from 'react';
import Hero from './Hero'; // New Header component
import MainContent from './MainContent'; // New MainContent component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainContent />
    </div>
  );
}

export default App;
