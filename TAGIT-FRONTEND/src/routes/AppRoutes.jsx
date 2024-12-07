import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PostCreate from '../pages/PostCreate';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/post" element={<PostCreate />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
