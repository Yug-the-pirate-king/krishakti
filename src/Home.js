import React from 'react';
import { Leaf, Droplets, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <Droplets className="w-8 h-8 text-green-600" />, title: 'Smart Irrigation',
    desc: 'AI-driven irrigation plans to save water and maximize yield.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-600" />, title: 'Crop Health Analytics',
    desc: 'Monitor NDVI, soil, and weather for healthy, resilient crops.'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />, title: 'Real-Time Alerts',
    desc: 'Get instant notifications for weather, moisture, and harvest windows.'
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Welcome to Krishakti
          </h1>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <section className="py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">Empowering Smart Farming</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 mx-auto">
            Monitor your fields, optimize irrigation, and boost crop health with AI-powered analytics and real-time data visualization.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Go to Dashboard
          </button>
        </section>
        {/* Features Section */}
        <section className="py-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-700 mb-8">Why Krishakti?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-green-100 hover:shadow-2xl transition-all">
                <div className="mb-4">{f.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-green-700">{f.title}</h4>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* About Section */}
        <section className="py-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-green-700 mb-4">About Krishakti</h3>
          <p className="text-gray-700 text-base md:text-lg">
            Krishakti is dedicated to transforming agriculture with technology. Our platform empowers farmers and agronomists to make data-driven decisions, conserve resources, and increase productivity. With a focus on sustainability and innovation, we help you grow smarter, not harder.
          </p>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 pb-8 mt-8 border-t border-green-100 pt-6 bg-white/80">
        &copy; {new Date().getFullYear()} Krishakti. All rights reserved. | Made with <span className="text-green-600">&#10084;</span> for farmers<br />
        <span className="text-xs text-gray-400">Made by Yug Shah (temporary)</span>
      </footer>
    </div>
  );
};

export default Home;
