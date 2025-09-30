import React, { useState, useEffect } from 'react';
import {
  Leaf, Droplets, Thermometer, TrendingUp, MapPin, Zap, Target,
  Settings, LogOut, ChartColumn, TriangleAlert, CircleCheckBig, Info
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('ndvi');
  const [time, setTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const metrics = {
    moisture: 57.99,
    ph: 6.8,
    temperature: 27.72,
    cropHealth: 84.71
  };

  const zones = [
    { id: 1, name: 'Zone 1', acres: 1.2, health: 'excellent', ndvi: 0.85, color: 'bg-green-500', position: { top: '20%', left: '20%' } },
    { id: 2, name: 'Zone 2', acres: 1.5, health: 'good', ndvi: 0.78, color: 'bg-yellow-500', position: { top: '35%', left: '40%' } },
    { id: 3, name: 'Zone 3', acres: 1.0, health: 'poor', ndvi: 0.45, color: 'bg-red-500', position: { top: '50%', left: '60%' } },
    { id: 4, name: 'Zone 4', acres: 1.5, health: 'good', ndvi: 0.82, color: 'bg-yellow-500', position: { top: '65%', left: '80%' } }
  ];

  const alerts = [
    { id: 1, type: 'warning', title: 'Low Moisture Detected', desc: 'Zone 3 soil moisture dropped to 35%', priority: 'high', icon: TriangleAlert, color: 'orange' },
    { id: 2, type: 'success', title: 'Optimal Harvest Window', desc: 'Your wheat crop will be ready for harvest in 5 days', priority: 'medium', icon: CircleCheckBig, color: 'green' },
    { id: 3, type: 'info', title: 'Weather Update', desc: 'Light rain expected tomorrow - good for crop growth', priority: 'low', icon: Info, color: 'blue' }
  ];

  const ndviTrends = [
    { date: '03/01', value: 0.81 },
    { date: '03/15', value: 0.85 },
    { date: '04/01', value: 0.83 },
    { date: '04/15', value: 0.79 }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Good Evening, luffy
              </h1>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Malkapur • {time.toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
              P
            </div>
          </div>
        </div>
      </header>

  <main className="max-w-7xl mx-auto px-2 sm:px-6 py-8 space-y-8">
        {/* Tabs */}
  <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-6">
          {['ndvi', 'metrics', 'alerts', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 px-5 text-sm font-semibold rounded-t-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
                ${activeTab === tab
                  ? 'border-b-4 border-green-600 text-green-700 bg-white shadow-md shadow-green-100'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'}
              `}
              style={{ zIndex: activeTab === tab ? 1 : 0 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full shadow-lg animate-bounce" />
              )}
            </button>
          ))}
        </div>

        {/* NDVI Map */}
        {activeTab === 'ndvi' && (
          <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Live NDVI Field Map</h2>
            </div>
            <div className="relative h-72 md:h-80 bg-gradient-to-br from-red-200 via-yellow-200 via-green-200 to-green-400 rounded-2xl overflow-hidden shadow-inner">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id === selectedZone ? null : zone.id)}
                  className={`absolute w-24 h-24 ${zone.color} rounded-full opacity-70 hover:opacity-90 transition-all cursor-pointer flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 ${
                    selectedZone === zone.id ? 'ring-4 ring-white scale-110' : ''
                  }`}
                  style={zone.position}
                >
                  {zone.id}
                </div>
              ))}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-gray-700 mb-3">Health Legend</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Excellent (0.8+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Good (0.6-0.8)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Poor (&lt;0.6)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Metrics */}
        {activeTab === 'metrics' && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Soil Moisture */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-blue-700 font-medium">Soil Moisture</p>
                  <p className="text-3xl font-bold text-blue-600">{metrics.moisture.toFixed(1)}%</p>
                </div>
                <div className="p-3 bg-blue-200 rounded-2xl">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${metrics.moisture}%` }}></div>
              </div>
            </div>

            {/* Soil pH */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-green-700 font-medium">Soil pH</p>
                  <p className="text-3xl font-bold text-green-600">{metrics.ph}</p>
                </div>
                <div className="p-3 bg-green-200 rounded-2xl">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <p className="text-xs text-green-600">Optimal range: 6.0-7.5</p>
            </div>

            {/* Temperature */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-orange-700 font-medium">Temperature</p>
                  <p className="text-3xl font-bold text-orange-600">{metrics.temperature.toFixed(1)}°C</p>
                </div>
                <div className="p-3 bg-orange-200 rounded-2xl">
                  <Thermometer className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <p className="text-xs text-orange-600">Feels optimal</p>
            </div>

            {/* Crop Health */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-emerald-700 font-medium">Crop Health</p>
                  <p className="text-3xl font-bold text-emerald-600">{metrics.cropHealth.toFixed(1)}%</p>
                </div>
                <div className="p-3 bg-emerald-200 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full transition-all" style={{ width: `${metrics.cropHealth}%` }}></div>
              </div>
            </div>
          </section>
        )}

        {/* Alerts */}
        {activeTab === 'alerts' && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Farm Alerts */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-800">Farm Alerts</h2>
              </div>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className={`p-2 bg-${alert.color}-100 rounded-xl`}>
                      <alert.icon className={`w-5 h-5 text-${alert.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{alert.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.desc}</p>
                    </div>
                    <span className={`px-3 py-1 bg-${alert.color}-100 text-${alert.color}-700 rounded-full text-xs font-semibold`}>
                      {alert.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone Status */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Field Zones Status</h2>
              </div>
              <div className="space-y-4">
                {zones.map((zone) => (
                  <div key={zone.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 ${zone.color} rounded-full`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{zone.name}</h4>
                        <p className="text-sm text-gray-600">{zone.acres} acres</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold capitalize text-gray-700">{zone.health}</p>
                      <p className="text-xs text-gray-500">NDVI: {zone.ndvi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <ChartColumn className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Data Analytics & Predictions</h2>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ndviTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 1]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {/* CTA */}
  <section className="text-center space-y-4 py-8">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3 mx-auto">
            <Droplets className="w-6 h-6" />
            Generate AI Irrigation Plan
          </button>
          <p className="text-gray-600">Get personalized watering schedule based on your field data</p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pb-8">
          Last updated: {time.toLocaleString()}<br />
          <span className="text-xs text-gray-400">Made by Yug Shah (temporary)</span>
        </footer>
      </main>

      {/* Zone Details Modal */}
      {selectedZone && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-all duration-300">
          <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-11/12 max-w-md border-2 border-green-100 animate-fadeIn">
            <button
              onClick={() => setSelectedZone(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-600 text-xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2 text-green-700 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              {zones.find(z => z.id === selectedZone).name}
            </h3>
            <div className="space-y-1 mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Acres:</span> {zones.find(z => z.id === selectedZone).acres}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">NDVI:</span> {zones.find(z => z.id === selectedZone).ndvi}
              </p>
              <p className="text-sm text-gray-600 capitalize">
                <span className="font-semibold text-gray-800">Health:</span> {zones.find(z => z.id === selectedZone).health}
              </p>
            </div>
            <button
              onClick={() => setSelectedZone(null)}
              className="mt-2 px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow transition-all duration-200 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
