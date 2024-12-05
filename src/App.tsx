import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import EditUsers from './pages/EditUsers';
import Layout from './components/Layout/Layout';
import './App.css'
import './reset.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/edit-users" element={<EditUsers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
