import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', rupees: 160 },
  { month: 'Feb', rupees: 50 },
  { month: 'Mar', rupees: 180 },
  { month: 'Apr', rupees: 140 },
  { month: 'May', rupees: 30 },
  { month: 'Jun', rupees: 210 },
  { month: 'Jul', rupees: 180 },
  { month: 'Aug', rupees: 40 },
  { month: 'Sep', rupees: 170 },
  { month: 'Oct', rupees: 220 },
  { month: 'Nov', rupees: 190 },
  { month: 'Dec', rupees: 220 },
];

const Rechartjs = () => {
  return (
    <ResponsiveContainer  width="100%" height={200}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis 
        domain={[0, 250]} // Set Y-axis range from 0 to 250
        tickCount={6} // 0, 50, 100, 150, 200, 250
      />
      <Tooltip />
      <Area 
        type="linear" // Ensure the line is straight
        dataKey="rupees" 
        stroke="green" // Line color
        fill="#8884d8" // Area fill color
      />
    </AreaChart>
  </ResponsiveContainer>
  );
};

export default Rechartjs;
