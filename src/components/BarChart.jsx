import React from 'react';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../data';

const BarChart = () => {
  return (
    <div>
      <h2>Analytics</h2>
      <MuiBarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </MuiBarChart>
    </div>
  );
};

export default BarChart;
