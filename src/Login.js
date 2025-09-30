import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo: accept any non-empty credentials
    if (email && password) {
      setError('');
      if (onLogin) onLogin();
      navigate('/dashboard');
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="bg-white/90 rounded-3xl shadow-xl p-8 w-full max-w-md border border-green-100">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
            <Leaf className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-2">Sign in to Krishakti</h2>
        <form className="space-y-5 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
      <footer className="text-center text-xs text-gray-500 pt-8 pb-2">
        &copy; {new Date().getFullYear()} Krishakti. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
