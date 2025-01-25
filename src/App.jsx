// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import DeviceDropdown from './components/DeviceDropdown.jsx';
import Graph from './components/Graph.jsx';

const App = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [metric, setMetric] = useState('lcp');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">SpeedVitals Dashboard</h1>
        <DeviceDropdown setDeviceType={setDeviceType} />
        <div className="mt-4">
          <Graph metric={metric} device={deviceType} />
        </div>
      </div>
    </div>
  );
};

export default App;
