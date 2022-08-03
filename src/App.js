import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayGrid from './components/Grid/grid';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayGrid />} exact />
      </Routes>
    </Router>
  );
}
