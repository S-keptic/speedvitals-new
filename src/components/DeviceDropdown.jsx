// src/components/DeviceDropdown.js
import React from 'react';

const DeviceDropdown = ({ setDeviceType }) => {
  return (
    <select
      onChange={(e) => setDeviceType(e.target.value)}
      className="border p-2"
    >
      <option value="desktop">Desktop</option>
      <option value="mobile">Mobile</option>
    </select>
  );
};

export default DeviceDropdown;
