import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';

function Navbar({ onLogout }) {
  const location = useLocation();
  return (
    <nav className="bg-white/90 border-b border-green-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
        <Link to="/" className="text-lg font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">Krishakti</Link>
        <div className="flex gap-2">
          <Link to="/" className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === '/' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-green-50'}`}>Home</Link>
          <Link to="/dashboard" className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === '/dashboard' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-green-50'}`}>Dashboard</Link>
          <button onClick={onLogout} className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-red-50 hover:text-red-600">Logout</button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Persist login state in localStorage for demo
    return localStorage.getItem('krishakti_logged_in') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('krishakti_logged_in', 'true');
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('krishakti_logged_in');
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
