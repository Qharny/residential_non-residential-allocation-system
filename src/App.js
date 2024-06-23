import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroPage from './components/hero/hero';
import Dashboard from './components/dashboard/dashboard'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;