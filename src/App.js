import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from './components/Grid/grid';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Grid />} exact />
      </Routes>
    </Router>
  );
}