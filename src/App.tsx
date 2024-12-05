import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import EditUsers from './pages/EditUsers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/edit-users" element={<EditUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
