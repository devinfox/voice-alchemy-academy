import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      {/* Add more routes for your other pages */}
    </Routes>
  );
}

export default Routing;
