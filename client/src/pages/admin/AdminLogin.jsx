import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUserCircle } from 'react-icons/fa';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // login call to local/production backend
      const response = await api.post('/admin/login', {
        username,
        password
      });

      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin/dashboard'); // 
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070a13] flex items-center justify-center font-sans antialiased relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px]"></div>
      
      <div className="w-full max-w-md p-8 bg-[#0b0f19] border border-slate-900/80 rounded-2xl shadow-2xl relative z-10 mx-4">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-lg mx-auto mb-3">J</div>
          <h2 className="text-lg font-light tracking-widest text-white uppercase">Jai <span className="text-amber-400 font-normal">Lanka</span></h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Sign in to Admin Panel</p>
        </div>

        {error && (
          <div className="mb-5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Username</label>
            <div className="relative">
              <FaUserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
              <input 
                type="text" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full bg-[#070a13] border border-slate-900 focus:border-amber-500/50 focus:outline-none rounded-xl py-3.5 pl-11 pr-4 text-xs text-slate-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="w-full bg-[#070a13] border border-slate-900 focus:border-amber-500/50 focus:outline-none rounded-xl py-3.5 pl-11 pr-4 text-xs text-slate-200"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-amber-500/10 transition-all duration-300 mt-2 disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;