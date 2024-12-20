import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero'; 
import MainContent from './components/MainContent';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import SignupButton from './components/SignupButton'
import LoginButton from './components/LoginButton'
import BarGraph from './components/BarGraph';
import Calendar from './components/Calendar';
import Chart from './components/Chart';
import ExpenseChart from './components/ExpenseChart';
import CurrencyConverter from './components/CurrencyConverter';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldShowHero = !['/login', '/signup', '/dashboard'].includes(location.pathname);

  return (
    <Router>
      <div className="bg-white">
      {shouldShowHero && <Hero  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signupButton" element={<SignupButton />} />
          <Route path="/loginButton" element={<LoginButton />} />
          <Route path="/barGraph" element={<BarGraph />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/expenseChart" element={<ExpenseChart />} />
          <Route path="/currencyConverter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
